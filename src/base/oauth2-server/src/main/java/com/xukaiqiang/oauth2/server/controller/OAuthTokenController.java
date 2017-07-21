package com.xukaiqiang.oauth2.server.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.oltu.oauth2.as.issuer.MD5Generator;
import org.apache.oltu.oauth2.as.issuer.OAuthIssuer;
import org.apache.oltu.oauth2.as.issuer.OAuthIssuerImpl;
import org.apache.oltu.oauth2.as.issuer.ValueGenerator;
import org.apache.oltu.oauth2.as.request.OAuthTokenRequest;
import org.apache.oltu.oauth2.as.response.OAuthASResponse;
import org.apache.oltu.oauth2.as.response.OAuthASResponse.OAuthTokenResponseBuilder;
import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.error.OAuthError;
import org.apache.oltu.oauth2.common.exception.OAuthProblemException;
import org.apache.oltu.oauth2.common.message.OAuthResponse;
import org.apache.oltu.oauth2.common.message.OAuthResponse.OAuthErrorResponseBuilder;
import org.apache.oltu.oauth2.common.message.types.GrantType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.xukaiqiang.oauth2.OAuth2Vars;
import com.xukaiqiang.oauth2.orm.entity.OAuthClientInfo;
import com.xukaiqiang.oauth2.server.protocol.OAuthAccessToken;
import com.xukaiqiang.oauth2.server.protocol.OAuthCode;
import com.xukaiqiang.oauth2.server.service.OAuthServerService;
import com.xukaiqiang.oauth2.server.util.OAuth2Utils;
import com.xukaiqiang.oauth2.server.util.Urls;

@Controller
public class OAuthTokenController {

	@Autowired
	private OAuth2Vars appVars;
	@Autowired
	private OAuthServerService oauthService;

	private ValueGenerator vg = new MD5Generator();
	private OAuthIssuer oAuthIssuer = new OAuthIssuerImpl(vg);

	/**
	 * <pre>
	 * <strong>
	 * http://server.example.com/oauth2/access_token?client_id=s6BhdRkqt3&client_secret=d8346ea2&grant_type=authorization_code&code=SplxlOBeZQQYbYS6WxSbIA
	 * </strong>
	 * client_id：     客户端ID。
	 * client_secret： 客户端key。
	 * grant_type：    授权模式，此处的值固定为"authorization_code"。
	 * code：          上一步获得的授权码。
	 * </pre>
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = Urls.ACCESSTOKEN, method = RequestMethod.POST)
	public ResponseEntity<String> accessToken(HttpServletRequest request) throws Exception {
		return OAuth2Utils.createResponse(buildAccessTokenResponse(request));
	}

	/**
	 * <pre>
	 * <strong>
	 * http://server.example.com/oauth2/refresh_token?client_id=s6BhdRkqt3&grant_type=refresh_token&refresh_token=SplxlOBeZQQYbYS6WxSbIA
	 * </strong>
	 * client_id：     客户端ID。
	 * grant_type：    授权模式，此处的值固定为"refresh_token"。
	 * refresh_token： 通过access_token获取到的refresh_token。
	 * </pre>
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = Urls.REFRESHTOKEN, method = RequestMethod.POST)
	public ResponseEntity<String> refreshToken(HttpServletRequest request) throws Exception {
		return OAuth2Utils.createResponse(buildRefreshTokenResponse(request));
	}

	private OAuthResponse buildAccessTokenResponse(HttpServletRequest request) throws Exception {
		try {
			OAuthTokenRequest req = new OAuthTokenRequest(request);

			OAuthResponse error = validateAccessTokenReq(req);
			if (error != null) {
				return error;
			}

			// 客户端模式，可用于api调用
			if (GrantType.CLIENT_CREDENTIALS.toString().equals(req.getGrantType())) {
				return accessToken(req.getClientId(), req.getClientId(), req.getParam(OAuth.OAUTH_SCOPE));
			}

			// 授权码模式
			OAuthCode code = oauthService.findCode(req.getCode());
			if (code == null) {
				OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_BAD_REQUEST)
						.setError(OAuthError.TokenResponse.INVALID_GRANT)
						.setErrorDescription("Invalid code: " + req.getCode());
				return builder.buildJSONMessage();
			}

			return accessToken(req.getClientId(), code.getUsername(), code.getScope());

		} catch (OAuthProblemException e) {
			return OAuthASResponse.errorResponse(HttpServletResponse.SC_BAD_REQUEST).error(e).buildJSONMessage();
		}
	}

	private OAuthResponse buildRefreshTokenResponse(HttpServletRequest request) throws Exception {
		try {
			OAuthTokenRequest req = new OAuthTokenRequest(request);

			OAuthResponse error = validateRefreshTokenReq(req);
			if (error != null) {
				return error;
			}

			OAuthAccessToken refreshToken = oauthService.findRefreshToken(req.getRefreshToken());
			if (refreshToken == null) {
				OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_BAD_REQUEST)
						.setError(OAuthError.TokenResponse.INVALID_GRANT)
						.setErrorDescription("Invalid refresh_token: " + req.getRefreshToken());
				return builder.buildJSONMessage();
			}

			oauthService.clearRefreshToken(refreshToken);

			return accessToken(req.getClientId(), refreshToken.getUsername(), refreshToken.getScope());

		} catch (OAuthProblemException e) {
			return OAuthASResponse.errorResponse(HttpServletResponse.SC_BAD_REQUEST).error(e).buildJSONMessage();
		}
	}

	/**
	 * 校验AccessToken请求
	 * 
	 * @param req
	 * @return
	 * @throws Exception
	 */
	private OAuthResponse validateAccessTokenReq(OAuthTokenRequest req) throws Exception {
		// 校验客户端
		OAuthClientInfo clientInfo = oauthService.findClientInfo(req.getClientId());
		if (clientInfo == null) {
			return OAuth2Utils.invalidClientId(req.getClientId());
		}

		// 校验客户端私钥
		String clientSecret = req.getClientSecret();
		if (!clientInfo.getClientSecret().equals(clientSecret)) {
			OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_UNAUTHORIZED)
					.setError(OAuthError.TokenResponse.UNAUTHORIZED_CLIENT)
					.setErrorDescription("Invalid client_secret by client_id: " + clientInfo.getClientId());
			return builder.buildJSONMessage();
		}

		return null;
	}

	/**
	 * 校验RefreshToken请求
	 * 
	 * @param req
	 * @return
	 * @throws Exception
	 */
	private OAuthResponse validateRefreshTokenReq(OAuthTokenRequest req) throws Exception {
		OAuthClientInfo clientInfo = oauthService.findClientInfo(req.getClientId());
		if (clientInfo == null) {
			return OAuth2Utils.invalidClientId(req.getClientId());
		}

		return null;
	}

	private OAuthResponse accessToken(String clientId, String username, String scope) throws Exception {
		OAuthAccessToken accessToken = new OAuthAccessToken();
		accessToken.setClientId(clientId);
		accessToken.setExpiresIn(appVars.expiresInOfOAuthAccessToken);
		accessToken.setAccessToken(oAuthIssuer.accessToken());
		accessToken.setRefreshToken(oAuthIssuer.refreshToken());
		accessToken.setUsername(username);
		accessToken.setScope(scope);
		accessToken.setOpenid(OAuth2Utils.generateOpenid(clientId, username, vg));
		oauthService.saveAccessToken(accessToken);

		OAuthAccessToken refreshToken = new OAuthAccessToken();
		refreshToken.setClientId(clientId);
		refreshToken.setRefreshToken(accessToken.getRefreshToken());
		refreshToken.setUsername(accessToken.getUsername());
		refreshToken.setScope(scope);
		oauthService.saveRefreshToken(refreshToken);

		OAuthTokenResponseBuilder builder = OAuthASResponse.tokenResponse(HttpServletResponse.SC_OK);
		OAuth2Utils.setAccessToken(accessToken, builder);

		return builder.buildJSONMessage();
	}

}
