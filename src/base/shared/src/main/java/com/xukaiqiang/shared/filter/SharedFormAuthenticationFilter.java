package com.xukaiqiang.shared.filter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.xukaiqiang.jcaptcha.filter.JCaptchaValidateFilter;
import com.xukaiqiang.shared.service.LoginAttemptsService;
import com.xukaiqiang.shared.util.HttpServletUtils;
import com.xukaiqiang.shared.util.MessageCode;
import com.xukaiqiang.shared.util.MessageError;
import com.xukaiqiang.shiro.authc.IncorrectCaptchaException;
import com.xukaiqiang.shiro.authc.UsernamePasswordCaptchaToken;

public class SharedFormAuthenticationFilter extends FormAuthenticationFilter {

	@Autowired
	protected LoginAttemptsService loginAttemptsService;
	@Autowired
	protected JCaptchaValidateFilter jcaptchaValidateFilter;

	@Override
	protected AuthenticationToken createToken(ServletRequest request, ServletResponse response) {
		String username = getUsername(request);
		if (loginAttemptsService.loginCaptchaRequired(username)) {
			return new UsernamePasswordCaptchaToken(username, getPassword(request), getCaptcha(request),
					isRememberMe(request), getHost(request));
		}

		return super.createToken(request, response);
	}

	@Override
	protected boolean onLoginSuccess(AuthenticationToken token, Subject subject, ServletRequest request,
			ServletResponse response) throws Exception {
		String username = (String) token.getPrincipal();

		loginAttemptsService.clearLoginAttempts(username);

		if (HttpServletUtils.isJSONRequest((HttpServletRequest) request)) {
			writeSuccess((HttpServletResponse) response);
			return false;
		}

		return super.onLoginSuccess(token, subject, request, response);
	}

	@Override
	protected boolean onLoginFailure(AuthenticationToken token, AuthenticationException e, ServletRequest request,
			ServletResponse response) {
		String username = (String) token.getPrincipal();

		loginAttemptsService.incrementLoginAttempts(username);

		if (HttpServletUtils.isJSONRequest((HttpServletRequest) request)) {
			writeFailure(username, e, request, (HttpServletResponse) response);
			return false;
		}

		return super.onLoginFailure(token, e, request, response);
	}

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
		if (!(isLoginRequest(request, response) && isLoginSubmission(request, response))
				&& HttpServletUtils.isJSONRequest((HttpServletRequest) request) && !SecurityUtils.getSubject().isAuthenticated()) {
			writeError(MessageError.ERROR_NOAUTH, (HttpServletResponse) response);
			return false;
		}

		return super.onAccessDenied(request, response);
	}

	protected String getCaptcha(ServletRequest request) {
		return WebUtils.getCleanParam(request, jcaptchaValidateFilter.getCaptchaParam());
	}

	protected void writeFailure(String username, AuthenticationException e, ServletRequest request,
			HttpServletResponse response) {
		if (e instanceof IncorrectCaptchaException) {
			writeError(MessageError.ERROR_CAPTCHA, response);
			return;
		}

		if (e instanceof IncorrectCredentialsException || e instanceof UnknownAccountException) {
			if (loginAttemptsService.loginCaptchaRequired(username)) {
				writeError(MessageError.ERROR_AUTHCAPTCHA, response);
				return;
			}

			writeError(MessageError.ERROR_AUTH, response);
			return;
		}

		if (e instanceof DisabledAccountException) {
			writeError(MessageError.ERROR_DISABLED, response);
			return;
		}

		writeError(MessageError.ERROR_SYSTEM, response);
	}

	protected void writeError(MessageError errorCode, HttpServletResponse response) {
		HttpServletUtils.writeJson(String.format("{\"resultCode\": \"%s\", \"errorCode\": \"%s\",\"errors\":[\"%s\"]}",
				MessageCode.FAIL, errorCode, errorCode.getMsg()), response);
	}

	protected void writeSuccess(HttpServletResponse response) {
		HttpServletUtils.writeJson(String.format("{\"resultCode\": \"%s\"}", MessageCode.SUCCESS), response);
	}

}
