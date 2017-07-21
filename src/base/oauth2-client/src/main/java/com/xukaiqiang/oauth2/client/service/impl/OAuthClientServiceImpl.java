package com.xukaiqiang.oauth2.client.service.impl;

import org.apache.oltu.oauth2.common.message.types.GrantType;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.xukaiqiang.oauth2.OAuthClientVars;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsUserinfo;
import com.xukaiqiang.oauth2.client.protocol.OAuthAccessTokenRequest;
import com.xukaiqiang.oauth2.client.protocol.OAuthAccessTokenResponse;
import com.xukaiqiang.oauth2.client.protocol.OAuthRefreshTokenRequest;
import com.xukaiqiang.oauth2.client.protocol.OAuthRsFilterchainResponse;
import com.xukaiqiang.oauth2.client.protocol.OAuthRsMenuinfoResponse;
import com.xukaiqiang.oauth2.client.protocol.OAuthRsRequest;
import com.xukaiqiang.oauth2.client.protocol.OAuthRsUserinfoResponse;
import com.xukaiqiang.oauth2.client.service.OAuthClientService;
import com.xukaiqiang.oauth2.client.util.DCNs;
import com.xukaiqiang.shared.util.HttpUtils;

@Service
public class OAuthClientServiceImpl implements OAuthClientService {

	@Autowired
	private BeanFactory factory;
	@Autowired
	private OAuthClientVars appVars;

	@Cacheable(value = DCNs.OAUTH_CLIENTCODE, key = "#sessionId")
	@Override
	public String findCode(String sessionId) {
		return null;
	}

	@Cacheable(value = DCNs.OAUTH_CLIENTREFRESHTOKEN, key = "#sessionId")
	@Override
	public String findRefreshToken(String sessionId) {
		return null;
	}

	@Cacheable(value = DCNs.OAUTH_CLIENTACCESSTOKEN, key = "#sessionId")
	@Override
	public OAuthAccessTokenResponse findAccessToken(String sessionId) {
		String code = getSelf().findCode(sessionId);
		if (code == null) {
			return null;
		}

		OAuthAccessTokenRequest request = new OAuthAccessTokenRequest();
		request.setClient_id(appVars.clientId);
		request.setClient_secret(appVars.clientSecret);
		request.setGrant_type(GrantType.AUTHORIZATION_CODE.toString());
		request.setRedirect_uri(appVars.redirectUri);
		request.setCode(code);

		OAuthAccessTokenResponse accessTokenResponse = HttpUtils.postResponseBody(appVars.accessTokenUrl, request, OAuthAccessTokenResponse.class);

		if (accessTokenResponse == null) {
			return null;
		}

		getSelf().saveRefreshToken(sessionId, accessTokenResponse.getRefresh_token());

		return accessTokenResponse;
	}

	private OAuthAccessTokenResponse refreshAccessToken(String sessionId) {
		String refreshToken = getSelf().findRefreshToken(sessionId);
		if (refreshToken == null) {
			return null;
		}

		OAuthRefreshTokenRequest request = new OAuthRefreshTokenRequest();
		request.setClient_id(appVars.clientId);
		request.setGrant_type(GrantType.REFRESH_TOKEN.toString());
		request.setRefresh_token(refreshToken);

		OAuthAccessTokenResponse accessTokenResponse = HttpUtils.postResponseBody(appVars.refreshTokenUrl, request, OAuthAccessTokenResponse.class);

		if (accessTokenResponse == null) {
			return null;
		}

		getSelf().saveRefreshToken(sessionId, accessTokenResponse.getRefresh_token());
		getSelf().saveAccessToken(sessionId, accessTokenResponse);

		return accessTokenResponse;
	}

	@Cacheable(value = DCNs.OAUTH_CLIENTAPPACCESSTOKEN, key = "#appid")
	@Override
	public OAuthAccessTokenResponse findAppAccessToken(String appid) {
		OAuthAccessTokenRequest request = new OAuthAccessTokenRequest();
		request.setClient_id(appVars.clientId);
		request.setClient_secret(appVars.clientSecret);
		request.setGrant_type(GrantType.CLIENT_CREDENTIALS.toString());
		request.setRedirect_uri(appVars.redirectUri);

		return HttpUtils.postResponseBody(appVars.accessTokenUrl, request, OAuthAccessTokenResponse.class);
	}

	@Cacheable(value = DCNs.OAUTH_CLIENTUSERINFO, key = "#username")
	@Override
	public OAuthRsUserinfo findUserinfo(String username) {
		OAuthRsRequest request = getOAuthAppRsRequest();
		if (request == null) {
			return null;
		}

		request.setUsername(username);
		OAuthRsUserinfoResponse response = HttpUtils.getResponseBody(appVars.userinfoUrl, request,
				OAuthRsUserinfoResponse.class);
		if (response == null) {
			return null;
		}

		return response.getUserinfo();
	}

	@Cacheable(value = DCNs.OAUTH_CLIENTMENUINFO, key = "#username")
	@Override
	public OAuthRsMenuinfo findMenuinfo(String username) {
		OAuthRsRequest request = getOAuthRsRequest();
		if (request == null) {
			return null;
		}

		OAuthRsMenuinfoResponse response = HttpUtils.getResponseBody(appVars.menuinfoUrl, request,
				OAuthRsMenuinfoResponse.class);
		if (response == null) {
			return null;
		}

		return response.getMenuinfo();
	}

	@Cacheable(value = DCNs.OAUTH_CLIENTFILTERCHAIN, key = "#clientId")
	@Override
	public OAuthRsFilterchain findFilterchain(String clientId) {
		OAuthRsRequest request = getOAuthAppRsRequest();
		if (request == null) {
			return null;
		}

		OAuthRsFilterchainResponse response = HttpUtils.getResponseBody(appVars.filterchainUrl, request,
				OAuthRsFilterchainResponse.class);
		if (response == null) {
			return null;
		}

		return response.getFilterchain();
	}

	@CachePut(value = DCNs.OAUTH_CLIENTCODE, key = "#sessionId")
	@Override
	public String saveCode(String sessionId, String code) {
		return code;
	}

	@CachePut(value = DCNs.OAUTH_CLIENTREFRESHTOKEN, key = "#sessionId")
	@Override
	public String saveRefreshToken(String sessionId, String refreshToken) {
		return refreshToken;
	}

	@CachePut(value = DCNs.OAUTH_CLIENTACCESSTOKEN, key = "#sessionId")
	@Override
	public OAuthAccessTokenResponse saveAccessToken(String sessionId, OAuthAccessTokenResponse accessToken) {
		return accessToken;
	}

	@CacheEvict(value = DCNs.OAUTH_CLIENTUSERINFO, key = "#username")
	@Override
	public void clearUserinfo(String username) {
	}

	@CacheEvict(value = DCNs.OAUTH_CLIENTMENUINFO, key = "#username")
	@Override
	public void clearMenuinfo(String username) {
	}

	@CacheEvict(value = DCNs.OAUTH_CLIENTFILTERCHAIN, key = "#clientId")
	@Override
	public void clearFilterchain(String clientId) {
	}

	@CacheEvict(value = DCNs.OAUTH_CLIENTUSERINFO, allEntries = true)
	@Override
	public void clearAllUserinfo() {
	}

	@CacheEvict(value = DCNs.OAUTH_CLIENTMENUINFO, allEntries = true)
	@Override
	public void clearAllMenuinfo() {
	}

	@CacheEvict(value = DCNs.OAUTH_CLIENTFILTERCHAIN, allEntries = true)
	@Override
	public void clearAllFilterchain() {
	}

	private OAuthRsRequest getOAuthRsRequest() {
		String sessionId = SecurityUtils.getSubject().getSession().getId().toString();
		OAuthAccessTokenResponse token = getSelf().findAccessToken(sessionId);
		if (token == null) {
			token = refreshAccessToken(sessionId);
			if (token == null) {
				return null;
			}
		}

		OAuthRsRequest request = new OAuthRsRequest();
		request.setAccess_token(token.getAccess_token());
		request.setOpenid(token.getOpenid());
		return request;
	}

	private OAuthRsRequest getOAuthAppRsRequest() {
		String appid = appVars.clientId;
		OAuthAccessTokenResponse token = getSelf().findAppAccessToken(appid);
		if (token == null) {
			return null;
		}

		OAuthRsRequest request = new OAuthRsRequest();
		request.setAccess_token(token.getAccess_token());
		request.setOpenid(token.getOpenid());
		return request;
	}

	private OAuthClientService getSelf() {
		return factory.getBean(OAuthClientService.class);
	}

}
