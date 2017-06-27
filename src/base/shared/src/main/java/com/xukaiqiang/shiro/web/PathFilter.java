package com.xukaiqiang.shiro.web;

public interface PathFilter {

	/**
	 * 判断是否有权访问指定路径
	 * 
	 * @param path
	 * @return
	 */
	public boolean isAccessAllowed(String path);
	
	/**
	 * 判断是否有权访问指定路径
	 * 
	 * @param path
	 * @param username
	 * @return
	 */
	public boolean isAccessAllowed(String path, String username);

	/**
	 * 动态修改配置后重新初始化过滤器
	 */
	public void reload();

}