package com.xukaiqiang.oauth2.server.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.xukaiqiang.oauth2.orm.entity.OAuthClientInfo;
import com.xukaiqiang.oauth2.orm.repository.OAuthClientInfoRepository;
import com.xukaiqiang.oauth2.server.protocol.OAuthAccessToken;
import com.xukaiqiang.oauth2.server.protocol.OAuthCode;
import com.xukaiqiang.oauth2.server.service.OAuthServerService;
import com.xukaiqiang.oauth2.server.util.DCNs;

@Service
public class OAuthServerServiceImpl implements OAuthServerService {

	@Autowired
	private OAuthClientInfoRepository clientInfoRepos;

	@Override
	public OAuthClientInfo findClientInfo(String clientId) {
		return clientInfoRepos.findByClientId(clientId);
	}

	@Cacheable(value = DCNs.OAUTH_CODE, key = "#code")
	@Override
	public OAuthCode findCode(String code) {
		return null;
	}

	@CacheEvict(value = DCNs.OAUTH_REFRESHTOKEN, key = "#refreshToken.refreshToken")
	@Override
	public void clearRefreshToken(OAuthAccessToken refreshToken) {
	}

	@Cacheable(value = DCNs.OAUTH_ACCESSTOKEN, key = "#accessToken")
	@Override
	public OAuthAccessToken findAccessToken(String accessToken) {
		return null;
	}

	@CachePut(value = DCNs.OAUTH_ACCESSTOKEN, key = "#accessToken.accessToken")
	@Override
	public OAuthAccessToken saveAccessToken(OAuthAccessToken accessToken) {
		return accessToken;
	}

	@Cacheable(value = DCNs.OAUTH_REFRESHTOKEN, key = "#refreshToken")
	@Override
	public OAuthAccessToken findRefreshToken(String refreshToken) {
		return null;
	}

	@CachePut(value = DCNs.OAUTH_REFRESHTOKEN, key = "#refreshToken.refreshToken")
	@Override
	public OAuthAccessToken saveRefreshToken(OAuthAccessToken refreshToken) {
		return refreshToken;
	}

	@Cacheable(value = DCNs.OAUTH_CODEUSERNAME, key = "#key")
	@Override
	public String findCodeUsername(String key) {
		return null;
	}

	@CachePut(value = DCNs.OAUTH_CODE, key = "#code.code")
	@Override
	public OAuthCode saveCode(OAuthCode code) {
		return code;
	}

	@CachePut(value = DCNs.OAUTH_CODEUSERNAME, key = "#key")
	@Override
	public String saveCodeUsername(String key, String username) {
		return username;
	}

	@Cacheable(value = DCNs.OAUTH_LOGINUSERNAME, key = "#key")
	@Override
	public String findLoginUsername(String key) {
		return null;
	}

	@CachePut(value = DCNs.OAUTH_LOGINUSERNAME, key = "#key")
	@Override
	public String saveLoginUsername(String key, String username) {
		return username;
	}

}
