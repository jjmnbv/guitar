package com.xukaiqiang.oauth2.server.protocol;

import java.io.Serializable;

public class OAuthApprovalRequest implements Serializable {

	private static final long serialVersionUID = 1L;

	private String key;

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

}
