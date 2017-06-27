package com.xukaiqiang.shiro.entity;

public interface ShiroResource {

	/**
	 * @return url匹配模式
	 */
	public String getPattern();

	/**
	 * @return 权限
	 */
	public String getPermission();

}
