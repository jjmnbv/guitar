package com.xukaiqiang.shiro;

import org.apache.shiro.session.Session;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ShiroVars {

	public static final String CACHE_JCAPTCHA = "JCAPTCHA";

	public static final String LOGIN_USER_IN_SESSION = ShiroVars.class.getName() + ".LoginUser";

	public static Object getLoginUser(Session session) {
		return session.getAttribute(ShiroVars.LOGIN_USER_IN_SESSION);
	}

	public static void setLoginUser(Object loginUser, Session session) {
		session.setAttribute(ShiroVars.LOGIN_USER_IN_SESSION, loginUser);
	}

	/**
	 * 用户密码hash算法
	 */
	@Value("${shiro.hashAlgorithmName:SHA-1}")
	public String hashAlgorithmName;

	/**
	 * 用户密码hash次数
	 */
	@Value("${shiro.hashIterations:1}")
	public int hashIterations;

	/**
	 * 需要安全控制的路径（逗号分隔）
	 */
	@Value("${shiro.includes:/**}")
	public String includes;

	/**
	 * 不需要安全控制的路径（逗号分隔）
	 */
	@Value("${shiro.excludes:/app/**}")
	public String excludes;

	/**
	 * 是否可并发登录
	 */
	@Value("${shiro.concurrent:true}")
	public boolean concurrent;

	/**
	 * 记住登录cipherkey
	 */
	@Value("${shiro.rememberMeCipherkey:Ul7XhPoIX91QMWVIFfzudg==}")
	public String rememberMeCipherkey;

	/**
	 * 登录rememberMe天数
	 */
	@Value("${shiro.rememberMeDays:7}")
	public int rememberMeDays;

	/**
	 * 会话超时时间（秒）
	 */
	@Value("${shiro.sessionTimeout:1800}")
	public int sessionTimeout;

	/**
	 * session缓存名称
	 */
	@Value("${shiro.activeSessionsCacheName:shiro-activeSessionCache}")
	public String activeSessionsCacheName;

	/**
	 * sessionIdCookie名称
	 */
	@Value("${shiro.sessionIdCookieName:SHIROSESSIONID}")
	public String sessionIdCookieName;

}
