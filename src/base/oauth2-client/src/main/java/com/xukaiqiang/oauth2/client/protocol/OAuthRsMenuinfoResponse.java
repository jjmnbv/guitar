package com.xukaiqiang.oauth2.client.protocol;

import java.io.Serializable;

import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;

public class OAuthRsMenuinfoResponse extends OAuthRsResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private OAuthRsMenuinfo menuinfo;

	public OAuthRsMenuinfo getMenuinfo() {
		return menuinfo;
	}

	public void setMenuinfo(OAuthRsMenuinfo menuinfo) {
		this.menuinfo = menuinfo;
	}

}
