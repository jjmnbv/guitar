package com.xukaiqiang.shiro.authc;

import org.apache.shiro.authc.UsernamePasswordToken;

public class UsernameOpenidToken extends UsernamePasswordToken {
	private static final long serialVersionUID = 1L;

	private String openid;

	public UsernameOpenidToken(String username, String openid, String host) {
		super(username, openid, host);
		this.openid = openid;
	}

	public String getOpenid() {
		return openid;
	}

	public void setOpenid(String openid) {
		this.openid = openid;
	}

}
