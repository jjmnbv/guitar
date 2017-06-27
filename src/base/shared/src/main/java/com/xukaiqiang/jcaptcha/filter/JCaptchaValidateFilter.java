package com.xukaiqiang.jcaptcha.filter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.octo.captcha.service.CaptchaServiceException;
import com.xukaiqiang.jcaptcha.util.JCaptchaUtils;
import com.xukaiqiang.shiro.service.ShiroCaptchaService;

@Component("jcaptchaVf")
@Lazy(false)
public class JCaptchaValidateFilter extends AccessControlFilter {

	private String captchaParam = JCaptchaUtils.JCAPTCHA_PARAM_DEFAULT;

	@Autowired(required = false)
	private ShiroCaptchaService captchaService;

	public String getCaptchaParam() {
		return captchaParam;
	}

	public void setCaptchaParam(String captchaParam) {
		this.captchaParam = captchaParam;
	}

	@Override
	protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object mappedValue)
			throws Exception {

		HttpServletRequest req = WebUtils.toHttp(request);

		if (!"post".equalsIgnoreCase(req.getMethod())) {
			return true;
		}

		if (req.getSession(false) == null) {
			return false;
		}

		String[] captchaConfig = (String[]) mappedValue;

		String captchaType = captchaConfig[0];
		boolean last = captchaConfig.length > 1 && "true".equalsIgnoreCase(captchaConfig[1]);
		try {
			return captchaService
					.validate(JCaptchaUtils.getCaptchaID(captchaType), req.getParameter(captchaParam), last)
					.booleanValue();
		} catch (CaptchaServiceException e) {
			return false;
		}
	}

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
		JCaptchaUtils.setAccessDenied(request);
		return true;
	}

}
