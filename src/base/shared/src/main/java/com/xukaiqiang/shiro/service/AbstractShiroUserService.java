package com.xukaiqiang.shiro.service;

import java.nio.ByteBuffer;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.codec.Hex;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.xukaiqiang.shiro.ShiroVars;
import com.xukaiqiang.shiro.entity.ShiroUser;

public abstract class AbstractShiroUserService {

	protected final Logger LOG = LoggerFactory.getLogger(getClass());

	protected static String getSalt() {
		UUID uuid = UUID.randomUUID();
		long m = uuid.getMostSignificantBits(), l = uuid.getLeastSignificantBits();

		return Hex.encodeToString(ByteBuffer.allocate(16).putLong(m).putLong(l).array());
	}

	@Autowired
	protected ShiroVars appVars;

	public byte[] getSaltBytes(ShiroUser user) {
		String salt = user.getSalt();
		if (StringUtils.isEmpty(salt)) {
			return null;
		}
		return Hex.decode(salt);
	}

	public ShiroUser getLoginUser() {
		try {
			Subject subject = getSubject();
			if (subject == null) {
				return null;
			}

			Session session = subject.getSession(false);
			if (session == null) {
				return null;
			}

			ShiroUser loginUser = (ShiroUser) ShiroVars.getLoginUser(session);
			if (loginUser == null) {
				loginUser = findUserByLoginName((String) subject.getPrincipal());
				ShiroVars.setLoginUser(loginUser, session);
			}
			return loginUser;
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			return null;
		}
	}

	public String encodePassword(String plainPassword, byte[] salt) {
		return new SimpleHash(appVars.hashAlgorithmName, plainPassword, salt, appVars.hashIterations).toString();
	}

	public abstract ShiroUser findUserByLoginName(String loginName);

	private Subject getSubject() {
		try {
			return SecurityUtils.getSubject();
		} catch (Exception e) {
			return null;
		}
	}

}
