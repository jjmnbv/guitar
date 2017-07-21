package com.xukaiqiang.oauth2;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class OAuth2Vars {

	/**
	 * 访问令牌缓存过期时间
	 */
	@Value("${expires.OAuthAccessToken:7200}")
	public Long expiresInOfOAuthAccessToken;

	/**
	 * 登录页面
	 */
	@Value("${oauth.loginUrl:http://localhost:7000/login}")
	public String loginUrl;

}
