package com.xukaiqiang.oauth2.server.protocol;

import java.io.Serializable;
import java.util.Map;
import java.util.Set;

import com.xukaiqiang.oauth2.orm.entity.OAuthClientInfo;
import com.xukaiqiang.oauth2.server.util.OAuth2Utils;

/**
 * 用户授权页响应数据
 *
 */
public class OAuthApprovalResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private String key;
	private OAuthClientInfo clientInfo;
	private String responseType;
	private String redirectUri;
	private Set<String> scopes;
	private String state;

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public OAuthClientInfo getClientInfo() {
		return clientInfo;
	}

	public void setClientInfo(OAuthClientInfo clientInfo) {
		this.clientInfo = clientInfo;
	}

	public String getResponseType() {
		return responseType;
	}

	public void setResponseType(String responseType) {
		this.responseType = responseType;
	}

	public String getRedirectUri() {
		return redirectUri;
	}

	public void setRedirectUri(String redirectUri) {
		this.redirectUri = redirectUri;
	}

	public Set<String> getScopes() {
		return scopes;
	}

	public void setScopes(Set<String> scopes) {
		this.scopes = scopes;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Map<String, String> getCodeRequestParams() {
		return OAuth2Utils.getCodeParams(this);
	}

}
