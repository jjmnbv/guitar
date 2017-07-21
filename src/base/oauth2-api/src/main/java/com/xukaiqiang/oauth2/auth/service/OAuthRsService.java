package com.xukaiqiang.oauth2.auth.service;

import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsUserinfo;

public interface OAuthRsService {

	public OAuthRsUserinfo findUserinfo(String username);

	public OAuthRsMenuinfo findMenuinfo(String username);

	public OAuthRsFilterchain findFilterchain(String clientId);

}
