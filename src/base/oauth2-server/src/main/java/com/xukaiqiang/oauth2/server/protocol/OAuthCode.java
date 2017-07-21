package com.xukaiqiang.oauth2.server.protocol;

import java.io.Serializable;

public class OAuthCode implements Serializable {

	private static final long serialVersionUID = 1L;

	private String code;
	private String username;
	private String clientId;
	private String scope;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
	}

}
