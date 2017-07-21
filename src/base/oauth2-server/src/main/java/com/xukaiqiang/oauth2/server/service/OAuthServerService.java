
package com.xukaiqiang.oauth2.server.service;

import com.xukaiqiang.oauth2.orm.entity.OAuthClientInfo;
import com.xukaiqiang.oauth2.server.protocol.OAuthAccessToken;
import com.xukaiqiang.oauth2.server.protocol.OAuthCode;

public interface OAuthServerService {

	/**
	 * 查询客户端信息
	 * 
	 * @param clientId
	 * @return
	 */
	public OAuthClientInfo findClientInfo(String clientId);

	/**
	 * 查询缓存的code信息
	 * 
	 * @param code
	 * @return
	 */
	public OAuthCode findCode(String code);

	/**
	 * 查询缓存的AccessToken
	 * 
	 * @param accessToken
	 * @return
	 */
	public OAuthAccessToken findAccessToken(String accessToken);

	/**
	 * 查询刷新令牌
	 * 
	 * @param token
	 * @return
	 */
	public OAuthAccessToken findRefreshToken(String token);

	/**
	 * 查询缓存的授权码请求
	 * 
	 * @param key
	 * @return
	 */
	public String findCodeUsername(String key);

	/**
	 * 查询登录用户名
	 * 
	 * @param key
	 * @return
	 */
	public String findLoginUsername(String key);

	/**
	 * 缓存授权码
	 * 
	 * @param code
	 * @return
	 */
	public OAuthCode saveCode(OAuthCode code);

	/**
	 * 缓存访问令牌
	 * 
	 * @param token
	 * @return
	 */
	public OAuthAccessToken saveAccessToken(OAuthAccessToken token);

	/**
	 * 缓存刷新令牌
	 * 
	 * @param token
	 * @return
	 */
	public OAuthAccessToken saveRefreshToken(OAuthAccessToken token);

	/**
	 * 缓存授权码与用户对应关系
	 * 
	 * @param key
	 * @param username
	 * @return
	 */
	public String saveCodeUsername(String key, String username);

	/**
	 * 缓存登录用户名
	 * 
	 * @param key
	 * @param username
	 * @return
	 */
	public String saveLoginUsername(String key, String username);

	/**
	 * 清除刷新令牌缓存
	 * 
	 * @param token
	 */
	public void clearRefreshToken(OAuthAccessToken token);

}
