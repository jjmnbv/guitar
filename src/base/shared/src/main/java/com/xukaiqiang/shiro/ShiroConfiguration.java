package com.xukaiqiang.shiro;

import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.codec.Base64;
import org.apache.shiro.crypto.AesCipherService;
import org.apache.shiro.session.mgt.DefaultSessionManager;
import org.apache.shiro.session.mgt.eis.EnterpriseCacheSessionDAO;
import org.apache.shiro.web.mgt.CookieRememberMeManager;
import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShiroConfiguration {

	public static void main(String[] args) {
		System.out.println(Base64.encodeToString(new AesCipherService().generateNewKey().getEncoded()));
	}

	@Bean
	@Autowired
	public HashedCredentialsMatcher hashedCredentialsMatcher(ShiroVars appVars) {
		HashedCredentialsMatcher credentialsMatcher = new HashedCredentialsMatcher();
		credentialsMatcher.setHashAlgorithmName(appVars.hashAlgorithmName);
		credentialsMatcher.setHashIterations(appVars.hashIterations);
		return credentialsMatcher;
	}

	@Bean
	@Autowired
	public CookieRememberMeManager cookieRememberMeManager(ShiroVars appVars) {
		CookieRememberMeManager rememberMeManager = new CookieRememberMeManager();
		rememberMeManager.setCipherKey(Base64.decode(appVars.rememberMeCipherkey));
		rememberMeManager.getCookie().setMaxAge(appVars.rememberMeDays * 24 * 3600);

		return rememberMeManager;
	}

	@Bean
	@Autowired
	public DefaultWebSessionManager defaultWebSessionManager(ShiroVars appVars) {
		DefaultWebSessionManager sessionManager = new DefaultWebSessionManager();
		sessionManager.getSessionIdCookie().setName(appVars.sessionIdCookieName);
		sessionManager.setGlobalSessionTimeout(appVars.sessionTimeout * 1000);

		EnterpriseCacheSessionDAO sessionDAO = new EnterpriseCacheSessionDAO();
		sessionDAO.setActiveSessionsCacheName(appVars.activeSessionsCacheName);
		sessionManager.setSessionDAO(sessionDAO);
		sessionManager.setSessionValidationInterval(appVars.sessionTimeout * 2000);

		return sessionManager;
	}

	@Bean
	@Autowired
	public DefaultSessionManager defaultSessionManager(ShiroVars appVars) {
		DefaultSessionManager sessionManager = new DefaultSessionManager();
		sessionManager.setGlobalSessionTimeout(appVars.sessionTimeout * 1000);

		EnterpriseCacheSessionDAO sessionDAO = new EnterpriseCacheSessionDAO();
		sessionDAO.setActiveSessionsCacheName(appVars.activeSessionsCacheName);
		sessionManager.setSessionDAO(sessionDAO);
		sessionManager.setSessionValidationInterval(appVars.sessionTimeout * 2000);

		return sessionManager;
	}

}
