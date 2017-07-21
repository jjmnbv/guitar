package com.xukaiqiang.gu.filter;

import java.text.ParseException;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.subject.support.WebDelegatingSubject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.xukaiqiang.gu.mgt.service.CuUsLoginLService;
import com.xukaiqiang.gu.mgt.service.CuUsLoginSService;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.util.MessageError;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.filter.SharedFormAuthenticationFilter;
import com.xukaiqiang.shared.util.HttpServletUtils;
import com.xukaiqiang.shared.util.MessageCode;

@Lazy(false)
@Component(AuthcFilter.INSTNAME)
public class AuthcFilter extends SharedFormAuthenticationFilter {

	public static final String INSTNAME = "authc";

	@Autowired
	private CuUsLoginSService cuusloginsService;
	@Autowired
	CuUsLoginLService cuusloginlservice;

	@Override
	protected boolean onLoginSuccess(AuthenticationToken token, Subject subject, ServletRequest request,
			ServletResponse response) throws Exception {
		CuUsLoginS loginUser = cuusloginsService.getLoginUser();
		CuUsLoginL cuUsLoginL = new CuUsLoginL();
		cuUsLoginL.setLoginId(loginUser.getUsId());
		cuUsLoginL.setLoginNa(loginUser.getLoginNa());
		WebDelegatingSubject webSubject = (WebDelegatingSubject) subject;
		cuUsLoginL.setLoginIp(webSubject.getHost());
		CuUsLoginL loginL = cuusloginlservice.createCuUsLoginL(cuUsLoginL);
		Session session = subject.getSession();
		session.setAttribute(YnState.CODE_CUUSLOGIN_TRID, loginL.getLoginTrId());
		boolean state = check(loginUser, token, request, response);
		if (!state) {
			String username = (String) token.getPrincipal();
			loginAttemptsService.clearLoginAttempts(username);
			return state;
		}
		return super.onLoginSuccess(token, subject, request, response);
	}

	private boolean check(CuUsLoginS loginUser, AuthenticationToken token, ServletRequest request,
			ServletResponse response) throws Exception {
		if (HttpServletUtils.isJSONRequest((HttpServletRequest) request)) {
			if (cuusloginsService.checkPW(loginUser)) {
				writePWSuccess(MessageError.ERROR_UPDATEPW, (HttpServletResponse) response);
				return false;
			}
			if (cuusloginsService.checkOverPW(loginUser)) {
				writePWSuccess(MessageError.ERROR_OVERPW, (HttpServletResponse) response);
				return false;
			}
		}
		return true;
	}

	private void writePWSuccess(MessageError errorCode, HttpServletResponse response) {
		HttpServletUtils.writeJson(String.format("{\"resultCode\": \"%s\", \"errorCode\": \"%s\",\"errors\":[\"%s\"]}",
				MessageCode.SUCCESS, errorCode, errorCode.getMsg()), response);
	}

	@Override
	protected boolean onLoginFailure(AuthenticationToken token, AuthenticationException e, ServletRequest request,
			ServletResponse response) {
		return super.onLoginFailure(token, e, request, response);
	}

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
		CuUsLoginS loginUser = cuusloginsService.getLoginUser();
		if (!(isLoginRequest(request, response) && isLoginSubmission(request, response))
				&& HttpServletUtils.isJSONRequest((HttpServletRequest) request)
				&& SecurityUtils.getSubject().isAuthenticated()) {
			boolean state = checkErr(loginUser, request, response);
			if (!state) {
				return state;
			}
		}
		return super.onAccessDenied(request, response);
	}

	private boolean checkErr(CuUsLoginS loginUser, ServletRequest request, ServletResponse response)
			throws ParseException {
		if (cuusloginsService.checkPW(loginUser)) {
			writeErrorCheck(MessageError.ERROR_UPDATEPW, (HttpServletResponse) response);
			return false;
		}
		if (cuusloginsService.checkOverPW(loginUser)) {
			writeErrorCheck(MessageError.ERROR_OVERPW, (HttpServletResponse) response);
			return false;
		}
		return true;
	}

	private void writeErrorCheck(MessageError errorCode, HttpServletResponse response) {
		HttpServletUtils.writeJson(String.format("{\"resultCode\": \"%s\", \"errorCode\": \"%s\",\"errors\":[\"%s\"]}",
				MessageCode.FAIL, errorCode, errorCode.getMsg()), response);
	}
}
