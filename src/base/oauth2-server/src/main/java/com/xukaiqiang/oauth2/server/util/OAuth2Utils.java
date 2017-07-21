package com.xukaiqiang.oauth2.server.util;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.oltu.oauth2.as.issuer.ValueGenerator;
import org.apache.oltu.oauth2.as.response.OAuthASResponse.OAuthTokenResponseBuilder;
import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.error.OAuthError;
import org.apache.oltu.oauth2.common.exception.OAuthSystemException;
import org.apache.oltu.oauth2.common.message.OAuthResponse;
import org.apache.oltu.oauth2.common.message.OAuthResponse.OAuthErrorResponseBuilder;
import org.apache.oltu.oauth2.common.message.OAuthResponse.OAuthResponseBuilder;
import org.apache.oltu.oauth2.rs.response.OAuthRSResponse.OAuthRSResponseBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.ImmutableMap;
import com.xukaiqiang.oauth2.server.protocol.OAuthAccessToken;
import com.xukaiqiang.oauth2.server.protocol.OAuthApprovalResponse;
import com.xukaiqiang.shared.util.HttpUtils;

public abstract class OAuth2Utils {

	private static class OAuthNestedRSResponseBuilder extends OAuthRSResponseBuilder {
		private final static ObjectMapper objectMapper = new ObjectMapper();

		private OAuthNestedRSResponseBuilder(int responseCode) {
			super(responseCode);
		}

		@Override
		public OAuthResponse buildJSONMessage() throws OAuthSystemException {
			OAuthResponse response = super.buildJSONMessage();
			try {
				response.setBody(objectMapper.writeValueAsString(parameters));
			} catch (Exception e) {
			}
			return response;
		}

		public void setObject(String name, Object value) {
			parameters.put(name, value);
		}
	}

	private static final Logger LOG = LoggerFactory.getLogger(OAuth2Utils.class);

	private static final String OPENID = "openid";
	private static final String REDIRECTURI = "redirectURI";
	private static final String USERNAME = "username";
	private static final String USERINFO = "userinfo";
	private static final String MENUINFO = "menuinfo";
	private static final String FILTERCHAIN = "filterchain";
	private static final String REALMDEFAULT = "OAuth Protected Service";

	public static String getCodeUsernameKey(HttpServletRequest request) {
		return request.getParameter(RPNs.CODEUSERNAMEKEY);
	}

	public static String getSessionId(HttpServletRequest request) {
		return request.getParameter(RPNs.SESSIONID);
	}

	public static String getUsername(HttpServletRequest request) {
		return request.getParameter(USERNAME);
	}

	/**
	 * 创建http响应
	 * 
	 * @param oauthResponse
	 * @return
	 */
	public static ResponseEntity<String> createResponse(OAuthResponse oauthResponse) {
		return createResponse(oauthResponse.getResponseStatus(), getHeaders(oauthResponse), oauthResponse.getBody());
	}

	public static OAuthResponse invalidClientId(String clientId) throws Exception {
		OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_BAD_REQUEST)
				.setError(OAuthError.TokenResponse.INVALID_CLIENT)
				.setErrorDescription("Invalid client_id: " + clientId);
		return builder.buildJSONMessage();
	}

	public static String generateOpenid(String clientId, String username, ValueGenerator vg)
			throws OAuthSystemException {
		return vg.generateValue(ImmutableMap.of(RPNs.CLIENT_ID, clientId, OAuth.OAUTH_USERNAME, username).toString());
	}

	public static OAuthErrorResponseBuilder setRealm(OAuthErrorResponseBuilder builder) {
		builder.setRealm(REALMDEFAULT);
		return builder;
	}

	public static OAuthResponseBuilder setCodeUsernameKey(String key, OAuthResponseBuilder builder) {
		builder.setParam(RPNs.CODEUSERNAMEKEY, key);
		return builder;
	}

	public static OAuthTokenResponseBuilder setAccessToken(OAuthAccessToken token, OAuthTokenResponseBuilder builder) {
		builder.setAccessToken(token.getAccessToken());
		builder.setRefreshToken(token.getRefreshToken());
		builder.setExpiresIn(String.valueOf(token.getExpiresIn()));
		builder.setParam(USERNAME, token.getUsername());
		setOpenid(token.getOpenid(), builder);
		return builder;
	}

	public static OAuthResponseBuilder setOpenid(String openid, OAuthResponseBuilder builder) {
		builder.setParam(OPENID, openid);
		return builder;
	}

	public static OAuthResponseBuilder setRedirectURI(String redirectURI, OAuthResponseBuilder builder) {
		redirectURI = HttpUtils.getQueryParam(redirectURI, REDIRECTURI);
		if (!StringUtils.isEmpty(redirectURI)) {
			try {
				redirectURI = URLDecoder.decode(redirectURI, "UTF-8");
			} catch (UnsupportedEncodingException e) {
			}
		}
		builder.setParam(REDIRECTURI, redirectURI);
		return builder;
	}

	public static OAuthRSResponseBuilder setUserinfo(final Object userinfo) {
		return setRsResponseParam(USERINFO, userinfo);
	}

	public static OAuthRSResponseBuilder setMenuinfo(final Object menuinfo) {
		return setRsResponseParam(MENUINFO, menuinfo);
	}

	public static OAuthRSResponseBuilder setFilterchain(final Object filterchain) {
		return setRsResponseParam(FILTERCHAIN, filterchain);
	}

	public static OAuthRSResponseBuilder setRsResponseParam(String name, Object param) {
		OAuthNestedRSResponseBuilder builder = new OAuthNestedRSResponseBuilder(HttpServletResponse.SC_OK);
		builder.setObject(name, param);
		return builder;
	}

	public static Map<String, String> getCodeParams(OAuthApprovalResponse resp) {
		Map<String, String> params = new HashMap<String, String>();
		params.put(RPNs.CODEUSERNAMEKEY, resp.getKey());
		params.put(RPNs.CLIENT_ID, resp.getClientInfo().getClientId());
		params.put(RPNs.RESPONSE_TYPE, resp.getResponseType());
		params.put(RPNs.REDIRECT_URI, resp.getRedirectUri());
		params.put(RPNs.STATE, resp.getState());
		return params;
	}

	private static ResponseEntity<String> createResponse(int statusCode, HttpHeaders headers, String body) {
		LOG.debug("body={},headers={}，statusCode={}", body, headers, statusCode);

		return new ResponseEntity<String>(body, headers, HttpStatus.valueOf(statusCode));
	}

	private static HttpHeaders getHeaders(OAuthResponse resp) {
		HttpHeaders httpHeaders = new HttpHeaders();

		Map<String, String> oauthHeaders = resp.getHeaders();
		if (!oauthHeaders.isEmpty()) {
			httpHeaders.setAll(oauthHeaders);
		}

		String locationUri = resp.getLocationUri();
		if (!StringUtils.isEmpty(locationUri)) {
			try {
				httpHeaders.setLocation(new URI(locationUri));
			} catch (URISyntaxException e) {
				LOG.error(e.getMessage(), e);
				throw new RuntimeException(e.getMessage(), e);
			}
		}

		return httpHeaders;
	}

}
