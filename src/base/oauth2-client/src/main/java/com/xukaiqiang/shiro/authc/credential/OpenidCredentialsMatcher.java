package com.xukaiqiang.shiro.authc.credential;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.xukaiqiang.oauth2.client.protocol.OAuthAccessTokenResponse;
import com.xukaiqiang.oauth2.client.service.OAuthClientService;
import com.xukaiqiang.shiro.ShiroVars;
import com.xukaiqiang.shiro.authc.UsernameOpenidToken;

@Component
public class OpenidCredentialsMatcher extends HashedCredentialsMatcher {
	@Autowired
	private OAuthClientService oauthClientService;

	@Autowired
	public OpenidCredentialsMatcher(ShiroVars appVars) {
		this.setHashAlgorithmName(appVars.hashAlgorithmName);
		this.setHashIterations(appVars.hashIterations);
	}

	@Override
	public boolean doCredentialsMatch(AuthenticationToken token, AuthenticationInfo info) {
		if (token instanceof UsernameOpenidToken) {
			UsernameOpenidToken userOpenidToken = (UsernameOpenidToken) token;
			OAuthAccessTokenResponse accessToken = oauthClientService
					.findAccessToken(SecurityUtils.getSubject().getSession().getId().toString());

			return userOpenidToken.getOpenid().equals(accessToken.getOpenid());
		}

		return super.doCredentialsMatch(token, info);
	}

}
