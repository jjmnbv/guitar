package com.xukaiqiang.shared.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public abstract class BaseController {

	protected boolean isBindingRequest() {
		return matches("/.*/.*/update.*");
	}

	protected boolean matches(String regex) {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		String servletPath = request.getServletPath();
		return servletPath.matches(regex);
	}

}
