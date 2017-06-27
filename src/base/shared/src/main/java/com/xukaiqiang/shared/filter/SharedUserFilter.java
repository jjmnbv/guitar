package com.xukaiqiang.shared.filter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.web.filter.authc.UserFilter;

import com.xukaiqiang.shared.util.HttpServletUtils;
import com.xukaiqiang.shared.util.MessageCode;
import com.xukaiqiang.shared.util.MessageError;

public class SharedUserFilter extends UserFilter {

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
		if (HttpServletUtils.isJSONRequest((HttpServletRequest) request)) {
			MessageError errorCode = MessageError.ERROR_NOAUTH;
			HttpServletUtils
					.writeJson(String.format("{\"resultCode\": \"%s\", \"errorCode\": \"%s\",\"errors\":[\"%s\"]}",
							MessageCode.FAIL, errorCode, errorCode.getMsg()), (HttpServletResponse) response);
			return false;
		}
		return super.onAccessDenied(request, response);
	}

}
