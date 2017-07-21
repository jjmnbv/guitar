package com.xukaiqiang.oauth2.client.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xukaiqiang.oauth2.auth.protocol.OAuthRsUserinfo;
import com.xukaiqiang.oauth2.client.service.OAuthClientService;
import com.xukaiqiang.oauth2.client.service.OAuthUserService;
import com.xukaiqiang.shiro.service.AbstractShiroUserService;

@Service
public class OAuthUserServiceImpl extends AbstractShiroUserService implements OAuthUserService {

	@Autowired
	private OAuthClientService oauthClientService;

	@Override
	public OAuthRsUserinfo findUserByLoginName(String loginName) {
		return oauthClientService.findUserinfo(loginName);
	}

	@Override
	public OAuthRsUserinfo getLoginUser() {
		return (OAuthRsUserinfo) super.getLoginUser();
	}

}
