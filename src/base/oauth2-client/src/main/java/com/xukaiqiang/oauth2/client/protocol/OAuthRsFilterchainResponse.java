package com.xukaiqiang.oauth2.client.protocol;

import java.io.Serializable;

import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain;

public class OAuthRsFilterchainResponse extends OAuthRsResponse implements Serializable {

	private static final long serialVersionUID = 1L;

	private OAuthRsFilterchain filterchain;

	public OAuthRsFilterchain getFilterchain() {
		return filterchain;
	}

	public void setFilterchain(OAuthRsFilterchain filterchain) {
		this.filterchain = filterchain;
	}

}
