package com.xukaiqiang.shared.service;

public interface LoginAttemptsService {

	/**
	 * 获取登录尝试次数
	 * 
	 * @param username
	 * @return
	 */
	public Integer findLoginAttempts(String username);

	/**
	 * 保存登录尝试次数
	 * 
	 * @param username
	 * @param attempts
	 * @return
	 */
	public Integer saveLoginAttempts(String username, Integer attempts);

	/**
	 * 登录尝试次数加1
	 * 
	 * @param username
	 */
	public void incrementLoginAttempts(String username);

	/**
	 * 清除登录尝试次数
	 * 
	 * @param username
	 */
	public void clearLoginAttempts(String username);

	/**
	 * 是否需要登录图形验证码
	 * 
	 * @param username
	 * @return
	 */
	public boolean loginCaptchaRequired(String username);

}
