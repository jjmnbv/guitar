package com.xukaiqiang.shared.controller;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@ControllerAdvice
public class ControllerExceptionAdvice {
	private static final Logger LOG = LoggerFactory.getLogger(ControllerExceptionAdvice.class);

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	public void methodArgumentTypeMismatchExceptionHandler(HttpServletRequest request,
			MethodArgumentTypeMismatchException e) {
		LOG.error(
				"[\n\tURI={},\n\tParameterName={},\n\tParameterValue={},\n\tMethodArgumentTypeMismatchException={}\n]",
				request.getRequestURI(), e.getName(), e.getValue(), e.getMessage());
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(BindException.class)
	public void bindExceptionHandler(HttpServletRequest request, BindException e) {
		LOG.error("[\n\tURI={},\n\tBindException={}\n]", request.getRequestURI(), e.getMessage());
	}

}
