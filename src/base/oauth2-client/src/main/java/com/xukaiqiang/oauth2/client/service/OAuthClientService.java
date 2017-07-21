package com.xukaiqiang.oauth2.client.service;

import com.xukaiqiang.oauth2.auth.service.OAuthRsService;
import com.xukaiqiang.oauth2.client.protocol.OAuthAccessTokenResponse;

public interface OAuthClientService extends OAuthRsService {

	public String findCode(String sessionId);

	public String findRefreshToken(String sessionId);

	public OAuthAccessTokenResponse findAccessToken(String sessionId);

	public OAuthAccessTokenResponse findAppAccessToken(String appid);

	public String saveCode(String sessionId, String code);

	public String saveRefreshToken(String sessionId, String refreshToken);

	public OAuthAccessTokenResponse saveAccessToken(String sessionId, OAuthAccessTokenResponse accessToken);

	public void clearUserinfo(String username);

	public void clearMenuinfo(String username);

	public void clearFilterchain(String clientId);

	public void clearAllUserinfo();

	public void clearAllMenuinfo();

	public void clearAllFilterchain();

}
