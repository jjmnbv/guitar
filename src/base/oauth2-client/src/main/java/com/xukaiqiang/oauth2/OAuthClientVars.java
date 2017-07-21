package com.xukaiqiang.oauth2;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class OAuthClientVars {

	/**
	 * 应用标识
	 */
	@Value("${oauth.appid}")
	public String clientId;
	/**
	 * 应用秘钥
	 */
	@Value("${oauth.appkey}")
	public String clientSecret;
	/**
	 * 重定向地址
	 */
	@Value("${oauth.redirectUri:http://localhost:8080/oauth2/client/codecallback}")
	public String redirectUri;
	/**
	 * 授权码访问地址
	 */
	@Value("${oauth.authorizeUrl:http://localhost:7000/oauth2/authorize}")
	public String authorizeUrl;
	/**
	 * 令牌访问地址
	 */
	@Value("${oauth.accessTokenUrl:http://localhost:7000/oauth2/access_token}")
	public String accessTokenUrl;
	/**
	 * 刷新令牌访问地址
	 */
	@Value("${oauth.refreshTokenUrl:http://localhost:7000/oauth2/refresh_token}")
	public String refreshTokenUrl;
	/**
	 * 用户信息访问地址
	 */
	@Value("${oauth.userinfoUrl:http://localhost:7000/oauth2/rs/userinfo}")
	public String userinfoUrl;
	/**
	 * 菜单信息访问地址
	 */
	@Value("${oauth.menuinfoUrl:http://localhost:7000/oauth2/rs/menuinfo}")
	public String menuinfoUrl;
	/**
	 * 权限过滤链访问地址
	 */
	@Value("${oauth.filterchainUrl:http://localhost:7000/oauth2/rs/filterchain}")
	public String filterchainUrl;

}
