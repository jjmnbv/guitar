package com.xukaiqiang.oauth2.client.service;

import com.xukaiqiang.oauth2.auth.protocol.OAuthRsUserinfo;
import com.xukaiqiang.shiro.service.ShiroUserService;

public interface OAuthUserService extends ShiroUserService {

	OAuthRsUserinfo getLoginUser();

}
