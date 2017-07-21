package com.xukaiqiang.oauth2.client.util;

public abstract class Urls {
	/**
	 * oauth获取code回调地址
	 */
	public static final String OAUTH_CODECALLBACK = "/{system}/oauth2/client/codecallback";
	/**
	 * oauth_login
	 */
	public static final String OAUTH_LOGIN = "/{system}/login";
	/**
	 * oauth_checkLogin
	 */
	public static final String OAUTH_CHECKLOGIN = "/{system}/oauth2/checkLogin";
	/**
	 * oauth_logout
	 */
	public static final String OAUTH_LOGOUT = "/{system}/oauth2/logout";
	/**
	 * script_oauth_loginUser
	 */
	public static final String SCRIPT_OAUTH_LOGINUSER = "/script/{system}/oauth2/loginUser";
	/**
	 * 获取当前登录用户可用菜单
	 */
	public static final String SCRIPT_AVAILABLEMENUS = "/script/{system}/availableMenus";

}
