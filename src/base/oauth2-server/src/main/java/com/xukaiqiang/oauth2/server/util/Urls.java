package com.xukaiqiang.oauth2.server.util;

public abstract class Urls {

	/**
	 * 登录页
	 */
	public static final String LOGIN = "/{system}/oauth2/login";
	/**
	 * 用户授权页
	 */
	public static final String APPROVAL = "/{system}/oauth2/approval";
	/**
	 * 获取授权码
	 */
	public static final String AUTHORIZE = "/{system}/oauth2/authorize";
	/**
	 * 获取访问令牌
	 */
	public static final String ACCESSTOKEN = "/{system}/oauth2/access_token";
	/**
	 * 获取刷新令牌
	 */
	public static final String REFRESHTOKEN = "/{system}/oauth2/refresh_token";
	/**
	 * 获取用户信息
	 */
	public static final String RS_USERINFO = "/{system}/oauth2/rs/userinfo";
	/**
	 * 获取菜单信息
	 */
	public static final String RS_MENUINFO = "/{system}/oauth2/rs/menuinfo";
	/**
	 * 获取权限过滤链
	 */
	public static final String RS_FILTERCHAIN = "/{system}/oauth2/rs/filterchain";

}
