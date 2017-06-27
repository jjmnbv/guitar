package com.xukaiqiang.shared.entity;

import java.io.Serializable;
import java.util.Set;

import com.xukaiqiang.shiro.entity.ShiroUser;

public class MobileUser implements ShiroUser, Serializable {
	private static final long serialVersionUID = 1L;

	private String loginName;
	private String realName;
	private String password;
	private String salt;
	private String plainPassword;
	private boolean disabled;
	private Set<String> roleNames;
	private Set<String> permissionNames;

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public String getPlainPassword() {
		return plainPassword;
	}

	public void setPlainPassword(String plainPassword) {
		this.plainPassword = plainPassword;
	}

	public boolean isDisabled() {
		return disabled;
	}

	public void setDisabled(boolean disabled) {
		this.disabled = disabled;
	}

	public Set<String> getRoleNames() {
		return roleNames;
	}

	public void setRoleNames(Set<String> roleNames) {
		this.roleNames = roleNames;
	}

	public Set<String> getPermissionNames() {
		return permissionNames;
	}

	public void setPermissionNames(Set<String> permissionNames) {
		this.permissionNames = permissionNames;
	}

}
