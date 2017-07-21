package com.xukaiqiang.oauth2.client.protocol;

import java.io.Serializable;

public class OAuthAccessTokenResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long expires_in;
	private String tokenType;
	private String access_token;
	private String refresh_token;
	private String clientId;
	private String scope;
	private String username;
	private String openid;
	private String error;
	private String error_description;

	public Long getExpires_in() {
		return expires_in;
	}

	public void setExpires_in(Long expiresIn) {
		this.expires_in = expiresIn;
	}

	public String getTokenType() {
		return tokenType;
	}

	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	public String getAccess_token() {
		return access_token;
	}

	public void setAccess_token(String accessToken) {
		this.access_token = accessToken;
	}

	public String getRefresh_token() {
		return refresh_token;
	}

	public void setRefresh_token(String refreshToken) {
		this.refresh_token = refreshToken;
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

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getOpenid() {
		return openid;
	}

	public void setOpenid(String openid) {
		this.openid = openid;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getError_description() {
		return error_description;
	}

	public void setError_description(String error_description) {
		this.error_description = error_description;
	}

}
