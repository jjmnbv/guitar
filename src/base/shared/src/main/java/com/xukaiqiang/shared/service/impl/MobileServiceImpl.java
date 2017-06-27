package com.xukaiqiang.shared.service.impl;

import java.io.Serializable;
import java.util.Collection;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.mgt.SessionsSecurityManager;
import org.apache.shiro.session.ExpiredSessionException;
import org.apache.shiro.session.InvalidSessionException;
import org.apache.shiro.session.Session;
import org.apache.shiro.session.mgt.DefaultSessionManager;
import org.apache.shiro.session.mgt.ValidatingSession;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ThreadContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.xukaiqiang.shared.protocol.MobileRequest;
import com.xukaiqiang.shared.protocol.MobileResponse;
import com.xukaiqiang.shared.service.MobileService;
import com.xukaiqiang.shared.util.MessageError;
import com.xukaiqiang.shiro.ShiroVars;

@Service
public class MobileServiceImpl implements MobileService {
	private static final Logger LOG = LoggerFactory.getLogger(MobileServiceImpl.class);

	private static String getSessionKey(String name) {
		return MobileService.class.getName() + "." + name;
	}

	private static final String CONCURRENT = getSessionKey("concurrent");

	@Autowired
	private ShiroVars appVars;
	@Autowired
	@Qualifier("defaultSecurityManager")
	private SessionsSecurityManager securityManager;

	@Override
	public <REQUEST extends MobileRequest, RESPONSE extends MobileResponse> RESPONSE serviceForAuthcForm(
			String loginName, String password, REQUEST request, RESPONSE response) {

		try {
			String sessionId = login(loginName, password).toString();
			request.setSessionId(sessionId);
			response.setSessionId(sessionId);
		} catch (UnknownAccountException e) {
			LOG.debug(e.getMessage(), e);
			response.error(MessageError.ERROR_AUTH);
		} catch (DisabledAccountException e) {
			LOG.debug(e.getMessage(), e);
			response.error(MessageError.ERROR_DISABLED);
		} catch (IncorrectCredentialsException e) {
			LOG.debug(e.getMessage(), e);
			response.error(MessageError.ERROR_AUTH);
		} catch (ExcessiveAttemptsException e) {
			LOG.debug(e.getMessage(), e);
			response.error(MessageError.ERROR_ATTEMPTS);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			response.error();
		}

		return response;
	}

	@Override
	public <REQUEST extends MobileRequest, RESPONSE extends MobileResponse> RESPONSE serviceForAuthc(REQUEST request,
			RESPONSE response) {
		try {
			String sessionId = request.getSessionId();

			if (isExpired(sessionId)) {
				response.error(MessageError.ERROR_TIMEOUT);
				return response;
			}

			if (!SecurityUtils.getSubject().isAuthenticated()) {
				response.error(MessageError.ERROR_NOAUTH);
				return response;
			}

			if (!appVars.concurrent && isConcurrent()) {
				SecurityUtils.getSubject().logout();
				response.error(MessageError.ERROR_CONCURRENT);
				return response;
			}

			response.setSessionId(sessionId);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			response.error();
		}

		return response;
	}

	@Override
	public void bindSubject(String sessionId) {
		Subject subject = getSubject(sessionId);
		ThreadContext.bind(subject);
	}

	@Override
	public String getLoginName() {
		return getLoginName(SecurityUtils.getSubject());
	}

	private Serializable login(String loginName, String password) {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
				.getRequest();

		UsernamePasswordToken token = new UsernamePasswordToken(loginName, password, request.getRemoteAddr());

		Subject subject = SecurityUtils.getSubject();
		try {
			subject.login(token);
		} catch (InvalidSessionException e) {
			subject.logout();
			subject.login(token);
		}

		Session session = subject.getSession();
		Serializable sessionId = session.getId();

		LOG.debug("Session with id [{}] startTimestamp:{}", sessionId, session.getStartTimestamp().getTime());

		try {
			Thread.sleep(100);
		} catch (Exception ignored) {
		}

		session.touch();

		LOG.debug("Session with id [{}] lastAccessTime:{}", sessionId, session.getLastAccessTime().getTime());

		processConcurrentSessions();

		return sessionId;
	}

	private void processConcurrentSessions() {
		if (appVars.concurrent) {
			return;
		}

		try {
			Subject subject = SecurityUtils.getSubject();

			String loginName = getLoginName(subject);
			if (loginName == null) {
				return;
			}

			Serializable sessionId = subject.getSession().getId();

			Collection<Session> activeSessions = ((DefaultSessionManager) securityManager.getSessionManager())
					.getSessionDAO().getActiveSessions();
			for (Session activeSession : activeSessions) {
				if (!activeSession.getId().equals(sessionId)) {
					processConcurrentSession(activeSession.getId(), loginName);
				}
			}
		} catch (Exception e) {
			LOG.debug(e.getMessage(), e);
		}
	}

	private void processConcurrentSession(Serializable sessionId, String loginName) {
		Subject subject = getSubject(sessionId);

		if (!loginName.equals(getLoginName(subject))) {
			return;
		}

		Session session = subject.getSession();
		if (isExpired(session)) {
			return;
		}

		session.setAttribute(CONCURRENT, true);

	}

	private String getLoginName(Subject subject) {
		if (!subject.isAuthenticated()) {
			return null;
		}

		PrincipalCollection principals = subject.getPrincipals();
		if (principals != null && !principals.isEmpty()) {
			return (String) principals.getPrimaryPrincipal();
		}

		return null;
	}

	private boolean isConcurrent() {
		Session session = SecurityUtils.getSubject().getSession();
		if (session == null) {
			return false;
		}

		Object concurrent = session.getAttribute(CONCURRENT);
		if (concurrent == null || !(concurrent instanceof Boolean)) {
			return false;
		}

		return (Boolean) concurrent;
	}

	private boolean isExpired(Serializable sessionId) {
		if (sessionId == null) {
			return false;
		}

		try {
			return isExpired(getSubject(sessionId).getSession());
		} catch (Exception e) {
			LOG.debug(e.getMessage(), e);
			return false;
		}
	}

	private boolean isExpired(Session session) {
		if (!(session instanceof ValidatingSession)) {
			session.touch();
			return false;
		}

		try {
			((ValidatingSession) session).validate();
		} catch (ExpiredSessionException e) {
			return true;
		} catch (InvalidSessionException e) {
			return true;
		}

		session.touch();

		return false;
	}

	private Subject getSubject(Serializable sessionId) {
		SecurityUtils.setSecurityManager(securityManager);
		return new Subject.Builder().sessionId(sessionId).buildSubject();
	}

}
