package com.xukaiqiang.oauth2.client.protocol;

import java.io.Serializable;

import com.xukaiqiang.oauth2.auth.protocol.OAuthRsUserinfo;

public class OAuthRsUserinfoResponse extends OAuthRsResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private OAuthRsUserinfo userinfo;

	public OAuthRsUserinfo getUserinfo() {
		return userinfo;
	}

	public void setUserinfo(OAuthRsUserinfo userinfo) {
		this.userinfo = userinfo;
	}

}
