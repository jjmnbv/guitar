package com.xukaiqiang.oauth2.client.protocol;

import java.io.Serializable;

public class OAuthRsRequest implements Serializable {

	private static final long serialVersionUID = 1L;

	private String access_token;
	private String openid;
	private String username;

	public String getAccess_token() {
		return access_token;
	}

	public void setAccess_token(String access_token) {
		this.access_token = access_token;
	}

	public String getOpenid() {
		return openid;
	}

	public void setOpenid(String openid) {
		this.openid = openid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}
