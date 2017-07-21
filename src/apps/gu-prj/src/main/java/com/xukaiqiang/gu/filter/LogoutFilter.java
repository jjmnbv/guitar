package com.xukaiqiang.gu.filter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import com.xukaiqiang.gu.mgt.service.CuUsLoginLService;
import com.xukaiqiang.gu.mgt.service.CuUsLoginSService;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL;
import com.xukaiqiang.gu.orm.util.YnState;

import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Lazy(false)
@Component(LogoutFilter.INSTNAME)
public class LogoutFilter extends
		org.apache.shiro.web.filter.authc.LogoutFilter {

	public static final String INSTNAME = "logout";

	@Autowired
	private CuUsLoginSService cuusloginsService;
	@Autowired
	CuUsLoginLService cuusloginlservice;

	@Override
	protected boolean preHandle(ServletRequest request, ServletResponse response)
			throws Exception {
		Subject subject = getSubject(request, response);
		Long loginTrId = (Long) subject.getSession().getAttribute(YnState.CODE_CUUSLOGIN_TRID);
		subject.getSession().removeAttribute(loginTrId);
		CuUsLoginL loginL = cuusloginlservice.findCuUsLoginL(loginTrId);
		if (loginL != null) {
			cuusloginlservice.updateCuUsLoginL(loginL);
		}
		return super.preHandle(request, response);
	}

}
