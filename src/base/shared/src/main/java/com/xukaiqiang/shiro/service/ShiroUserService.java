package com.xukaiqiang.shiro.service;

import com.xukaiqiang.shiro.entity.ShiroUser;

public interface ShiroUserService {

	public ShiroUser findUserByLoginName(String loginName);

	public byte[] getSaltBytes(ShiroUser user);

	public ShiroUser getLoginUser();

	public String encodePassword(String plainPassword, byte[] salt);

}
