package com.xukaiqiang.jcaptcha.util;

import javax.servlet.ServletRequest;

import org.apache.shiro.SecurityUtils;

import com.xukaiqiang.jcaptcha.filter.JCaptchaValidateFilter;

public abstract class JCaptchaUtils {

	public static final String JCAPTCHA_ACCESS_DENIED = JCaptchaValidateFilter.class + ".ACCESS_DENIED";

	public static final String JCAPTCHA_PARAM_DEFAULT = "jcaptcha";

	public static final String JCAPTCHA_TYPE_LOGIN = "login";

	public static String getCaptchaID(String captchaType) {
		return SecurityUtils.getSubject().getSession().getId() + "_" + captchaType;
	}

	public static String getLoginCaptchaID() {
		return getCaptchaID(JCAPTCHA_TYPE_LOGIN);
	}

	public static boolean isAccessDenied(ServletRequest request) {
		return Boolean.TRUE.equals(request.getAttribute(JCaptchaUtils.JCAPTCHA_ACCESS_DENIED));
	}

	public static void setAccessDenied(ServletRequest request) {
		request.setAttribute(JCAPTCHA_ACCESS_DENIED, Boolean.TRUE);
	}

}
