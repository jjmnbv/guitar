package com.xukaiqiang.gu.mgt.service.impl;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.mgt.SessionsSecurityManager;
import org.apache.shiro.session.Session;
import org.apache.shiro.session.mgt.DefaultSessionManager;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsLoginSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuUsChPwdL;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuUsChPwdLRepository;
import com.xukaiqiang.gu.orm.repository.CuUsLoginSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsLoginSRepository.Executor;
import com.xukaiqiang.gu.orm.util.SateEnum;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.ParameterException;
import com.xukaiqiang.shiro.entity.ShiroUser;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;
import com.xukaiqiang.shiro.service.AbstractShiroUserService;
import com.xukaiqiang.shiro.service.ShiroUserService;

@Transactional(readOnly = true)
@Service
public class CuUsLoginSServiceImpl extends AbstractShiroUserService implements CuUsLoginSService, ShiroUserService {
	private static final Logger LOG = LoggerFactory.getLogger(CuUsLoginSServiceImpl.class);

	@Autowired
	private CuUsLoginSRepository cuusloginsRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsSService cuUsSService;
	// @Autowired
	// private MessagePublishService messagePublishService;
	@Autowired
	private ShiroDbRealm shiroDbRealm;
	@Autowired
	private CuUsChPwdLRepository cucpwdRepos;
	@Autowired
	@Qualifier("defaultSecurityManager")
	private SessionsSecurityManager securityManager;

	@Override
	public CuUsLoginS getLoginUser() {
		return (CuUsLoginS) super.getLoginUser();
	}

	@Override
	public Page<CuUsLoginS> findCuUsLoginSPage(Integer pageNumber, Integer pageSize, CuUsLoginSFilterRequest filter) {
		return new Executor(cuusloginsRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsLoginS> findCuUsLoginSs(CuUsLoginSFilterRequest filter) {
		return new Executor(cuusloginsRepos).findAll(filter);
	}

	@Override
	public CuUsLoginS findCuUsLoginS(Long usId) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return null;
		}
		return cuusloginsRepos.findOne(usId);
	}

	@Transactional
	@Override
	public CuUsLoginS createCuUsLoginS(CuUsLoginS cuuslogins) {
		Calendar rightNow = Calendar.getInstance();
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_MONTH, CuVars.CHPWDDT);
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String str2 = sdf1.format(calendar.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuuslogins.setCrDt(str1);
		cuuslogins.setCrTm(tm);
		cuuslogins.setLaUpDt(str1);
		cuuslogins.setSt(SateEnum.CS.name());
		String encodePassword = encodePassword(YnState.CODE_CUUSLOGIN_PW, null);
		cuuslogins.setPwd(encodePassword);
		cuuslogins.setPwdSalt(null);
		cuuslogins.setPwdOvYn(YnState.CODE_YN_YIN_N);
		cuuslogins.setUsLockYn(YnState.CODE_YN_YIN_N);
		cuuslogins.setPrevChPwdDt(CuVars.FIRSTPWD);
		cuuslogins.setNextChPwdDt(str2);
		cuuslogins.setLoginErrQt(YnState.CODE_ERROR_NUMBER);
		return cuusloginsRepos.save(cuuslogins);
	}

	@Transactional
	@Override
	public CuUsLoginS updateCuUsLoginS(CuUsLoginS cuuslogins) {
		if (cuuslogins.getUsId() == null) {
			LOG.warn("cuuslogins.usId is null.");
			return null;
		}

		CuUsLoginS target = cuusloginsRepos.findOne(cuuslogins.getUsId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuuslogins.setLaUpDt(str1);
		// messagePublishService.publish(NoticeType.USERCACHE.name(),
		// NoticeType.USERCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		return cuusloginsRepos.save(cuuslogins);
	}

	@Transactional
	@Override
	public void removeCuUsLoginS(Long usId) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return;
		}

		CuUsLoginS cuuslogins = cuusloginsRepos.findOne(usId);
		if (cuuslogins == null) {
			LOG.warn("cuuslogins is null.");
			return;
		}
		cuusloginsRepos.delete(cuuslogins);
	}

	@Override
	public ShiroUser findUserByLoginName(String loginName) {
		CuUsLoginS cuuslogins = cuusloginsRepos.findByLoginNa(loginName);
		if (cuuslogins == null) {
			return null;
		}
		CuUsS cuuss = cuUsSService.findCuUsS(cuuslogins.getUsId());
		cuuslogins.setRoleNames(cuuss.getRoleNames());
		return cuuslogins;
	}

	@Transactional
	@Override
	public CuUsLoginS resetPwd(Long id) {
		Calendar rightNow = Calendar.getInstance();
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_MONTH, CuVars.CHPWDDT);
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		String str2 = sdf1.format(calendar.getTime());
		String encodePassword = encodePassword(YnState.CODE_CUUSLOGIN_PW, null);
		CuUsLoginS CuUsLoginS2 = cuusloginsRepos.findOne(id);
		CuUsLoginS2.setPwd(encodePassword);
		CuUsLoginS2.setPwdSalt(null);
		CuUsLoginS2.setLaUpDt(str1);
		CuUsLoginS2.setLaUpUsId(cuUsSService.userMessage().getId());
		CuUsLoginS2.setPrevChPwdDt(CuVars.FIRSTPWD);
		CuUsLoginS2.setNextChPwdDt(str2);
		inform(CuUsLoginS2.getLoginNa());
		return updateCuUsLoginS(CuUsLoginS2);
	}

	/**
	 * 通知用户退出
	 * 
	 * @param loginNa
	 */
	private void inform(String loginNa) {
		if (org.springframework.util.StringUtils.isEmpty(loginNa)) {
			LOG.warn("loginNa is empty.");
			return;
		}
		Collection<Session> activeSessions = ((DefaultSessionManager) securityManager.getSessionManager())
				.getSessionDAO().getActiveSessions();
		for (Session session : activeSessions) {
			Subject subject = getSubject(session.getId());
			String loginName = getLoginName(subject);
			if (loginNa.equals(loginName)) {
				subject.logout();
			}
		}
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

	private Subject getSubject(Serializable sessionId) {
		SecurityUtils.setSecurityManager(securityManager);
		return new Subject.Builder().sessionId(sessionId).buildSubject();
	}

	@Transactional
	@Override
	public void updateMyLoginPassword(Long id, String plainOldPassword, String plainNewPassword) {
		Calendar rightNow = Calendar.getInstance();
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.DAY_OF_MONTH, CuVars.CHPWDDT);
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String str2 = sdf1.format(calendar.getTime());
		String tm = sdf2.format(rightNow.getTime());
		CuUsLoginS one = cuusloginsRepos.findOne(id);
		String encodePassword = encodePassword(plainOldPassword, getSaltBytes(one));
		String pwd = one.getPwd();
		if (!pwd.equals(encodePassword)) {
			throw new ParameterException(CuVars.CODE_ERROR_USER_CHGPWD_OLDPWD);
		}
		if (plainOldPassword.equals(plainNewPassword)) {
			throw new ParameterException(CuVars.CODE_ERROR_USER_CHGPWD_ONEPWD);
		}
		one.setPwdSalt(getSalt());
		String encodePassword2 = encodePassword(plainNewPassword, getSaltBytes(one));
		one.setPwd(encodePassword2);
		one.setLaUpDt(str1);
		one.setLaUpUsId(id);
		one.setPrevChPwdDt(str1);
		one.setNextChPwdDt(str2);
		cuusloginsRepos.save(one);
		// 密码日志
		CuUsChPwdL cuUsChPwdL = new CuUsChPwdL();
		cuUsChPwdL.setUsId(id);
		cuUsChPwdL.setCrDt(str1);
		cuUsChPwdL.setCrTm(tm);
		cuUsChPwdL.setLaUpDt(str1);
		cuUsChPwdL.setLaUpUsId(id);
		cuUsChPwdL.setPwd(encodePassword2);
		cucpwdRepos.save(cuUsChPwdL);
		inform(one.getLoginNa());
	}

	@Override
	public boolean verifyPwd() {
		CuUsS loginUser = cuUsSService.userMessage();
		Long id = loginUser.getId();
		CuUsLoginS cuusLogins = cuusloginsRepos.findOne(id);
		String pwd = cuusLogins.getPwd();
		String encodePassword = encodePassword(YnState.CODE_CUUSLOGIN_PW, null);
		if (encodePassword.equals(pwd)) {
			return true;
		} else {
			return false;
		}

	}

	@Override
	public boolean checkPW(CuUsLoginS cuuslogins) {
		CuUsLoginS findOne = cuusloginsRepos.findOne(cuUsSService.userMessage().getId());
		boolean i = false;
		if (findOne != null) {
			if (CuVars.FIRSTPWD.equals(findOne.getPrevChPwdDt())) {
				i = true;
			}
		}
		return i;
	}

	@Override
	public boolean checkOverPW(CuUsLoginS cuuslogins) {
		boolean i = false;
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		try {
			Date parse = sdf1.parse(str1);
			Date parse2 = sdf1.parse(cuuslogins.getNextChPwdDt());
			if (parse.getTime() > parse2.getTime()) {
				i = true;
			}
			return i;
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}

	@Override
	public boolean alterPW(CuUsS userMessage) {
		boolean i = false;
		CuUsLoginS cuUsLoginS = cuusloginsRepos.findOne(userMessage.getId());
		if (checkPW(cuUsLoginS)) {
			i = true;
			throw new ParameterException(CuVars.CODE_ERROR_CUUS_LOGIN_FIRSTPW);
		}
		if (checkOverPW(cuUsLoginS)) {
			i = true;
			throw new ParameterException(CuVars.CODE_ERROR_CUUS_LOGIN_OVERPW);
		}
		return i;
	}
}
