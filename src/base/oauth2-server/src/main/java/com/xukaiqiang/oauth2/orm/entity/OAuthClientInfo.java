package com.xukaiqiang.oauth2.orm.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.oauth2.orm.dialect.AbstractOAuthClientInfo;
import com.xukaiqiang.oauth2.orm.dialect.Schema.Tables;

@Entity
@Table(name = Tables.CLIENTINFO)
public class OAuthClientInfo extends AbstractOAuthClientInfo implements Serializable {

	private static final long serialVersionUID = 1L;

	private String name;
	private String clientId;
	private String clientSecret;
	private String redirectUri;
	private String clientUri;
	private String description;
	private String iconUri;
	private Long issuedAt;
	private Long expiresIn;
	private String scope;
	private String defaultScope;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getClientSecret() {
		return clientSecret;
	}

	public void setClientSecret(String clientSecret) {
		this.clientSecret = clientSecret;
	}

	public String getRedirectUri() {
		return redirectUri;
	}

	public void setRedirectUri(String redirectUri) {
		this.redirectUri = redirectUri;
	}

	public String getClientUri() {
		return clientUri;
	}

	public void setClientUri(String clientUri) {
		this.clientUri = clientUri;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getIconUri() {
		return iconUri;
	}

	public void setIconUri(String iconUri) {
		this.iconUri = iconUri;
	}

	public Long getIssuedAt() {
		return issuedAt;
	}

	public void setIssuedAt(Long issuedAt) {
		this.issuedAt = issuedAt;
	}

	public Long getExpiresIn() {
		return expiresIn;
	}

	public void setExpiresIn(Long expiresIn) {
		this.expiresIn = expiresIn;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
	}

	public String getDefaultScope() {
		return defaultScope;
	}

	public void setDefaultScope(String defaultScope) {
		this.defaultScope = defaultScope;
	}

}
