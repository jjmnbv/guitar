package com.xukaiqiang.shiro.entity;

import java.util.Collection;

public interface ShiroUser {

	/**
	 * @return 是否禁用
	 */
	public boolean isDisabled();

	/**
	 * @return 登录名称
	 */
	public String getLoginName();

	/**
	 * @return 登录密码
	 */
	public String getPassword();

	/**
	 * @return 角色集
	 */
	public Collection<String> getRoleNames();

	/**
	 * @return 权限集
	 */
	public Collection<String> getPermissionNames();

	/**
	 * @return 密码填充
	 */
	public String getSalt();

}
