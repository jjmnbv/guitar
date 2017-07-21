package com.xukaiqiang.oauth2.server.controller;

import java.util.Set;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.oltu.oauth2.as.issuer.MD5Generator;
import org.apache.oltu.oauth2.as.issuer.OAuthIssuer;
import org.apache.oltu.oauth2.as.issuer.OAuthIssuerImpl;
import org.apache.oltu.oauth2.as.issuer.ValueGenerator;
import org.apache.oltu.oauth2.as.request.OAuthAuthzRequest;
import org.apache.oltu.oauth2.as.response.OAuthASResponse;
import org.apache.oltu.oauth2.as.response.OAuthASResponse.OAuthAuthorizationResponseBuilder;
import org.apache.oltu.oauth2.common.OAuth;
import org.apache.oltu.oauth2.common.error.OAuthError;
import org.apache.oltu.oauth2.common.exception.OAuthProblemException;
import org.apache.oltu.oauth2.common.message.OAuthResponse;
import org.apache.oltu.oauth2.common.message.OAuthResponse.OAuthErrorResponseBuilder;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import net.sf.cglib.beans.BeanMap;

import com.xukaiqiang.oauth2.OAuth2Vars;
import com.xukaiqiang.oauth2.orm.entity.OAuthClientInfo;
import com.xukaiqiang.oauth2.server.protocol.OAuthApprovalRequest;
import com.xukaiqiang.oauth2.server.protocol.OAuthApprovalResponse;
import com.xukaiqiang.oauth2.server.protocol.OAuthCode;
import com.xukaiqiang.oauth2.server.service.OAuthServerService;
import com.xukaiqiang.oauth2.server.util.OAuth2Utils;
import com.xukaiqiang.oauth2.server.util.Urls;
import com.xukaiqiang.oauth2.server.util.Views;
import com.xukaiqiang.shared.util.CopierUtils;
import com.xukaiqiang.shared.util.HttpUtils;

@Controller
public class OAuthAuthorizeController {

	@Autowired
	private OAuthServerService oauthService;
	@Autowired
	private OAuth2Vars appVars;

	private ValueGenerator vg = new MD5Generator();
	private OAuthIssuer oauthIssuer = new OAuthIssuerImpl(vg);

	/**
	 * 转向用户确认授权页
	 * 
	 * <pre>
	 * <strong>
	 * http://server.example.com/oauth2/approval?key=abc
	 * </strong>
	 * key：    授权请求的缓存key
	 * </pre>
	 * 
	 * @param request
	 * @param model
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.APPROVAL, method = RequestMethod.GET)
	public String approval(OAuthApprovalRequest request, Model model) {
		OAuthApprovalResponse response = CopierUtils.convert(oauthService.findCodeUsername(request.getKey()),
				OAuthApprovalResponse.class);
		model.asMap().putAll(BeanMap.create(response));

		return Views.APPROVAL;
	}

	/**
	 * <pre>
	 * <strong>
	 * http://server.example.com/oauth2/authorize?client_id=s6BhdRkqt3&response_type=code&redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb&scope=userinfo&state=xyz
	 * </strong>
	 * client_id：    客户端ID
	 * response_type：授权类型，此处的值固定为"code" 
	 * redirect_uri： 重定向URI
	 * scope：        申请的权限范围，目前支持userinfo
	 * state：        客户端的当前状态，可以指定任意值，认证服务器会原封不动地返回这个值。
	 * </pre>
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = Urls.AUTHORIZE, method = RequestMethod.GET)
	public ResponseEntity<String> authorize(HttpServletRequest request) throws Exception {
		return OAuth2Utils.createResponse(buildCodeResponse(request));
	}

	/**
	 * 构造code响应
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	private OAuthResponse buildCodeResponse(HttpServletRequest request) throws Exception {
		try {
			OAuthResponse error = validateCodeRequest(request);
			if (error != null) {
				return error;
			}

			OAuthAuthzRequest req = new OAuthAuthzRequest(request);
			String clientId = req.getClientId();
			String username = getLoginUsername(clientId, request);
			String redirectURI = req.getRedirectURI();

			OAuthCode code = new OAuthCode();
			code.setClientId(clientId);
			code.setCode(oauthIssuer.authorizationCode());
			code.setUsername(username);
			oauthService.saveCode(code);

			OAuthAuthorizationResponseBuilder builder = OAuthASResponse
					.authorizationResponse(request, HttpServletResponse.SC_FOUND)
					.location(HttpUtils.getHttpUrlLocation(redirectURI)).setCode(code.getCode());
			OAuth2Utils.setRedirectURI(redirectURI, builder);
			return builder.buildQueryMessage();

		} catch (OAuthProblemException e) {
			OAuthErrorResponseBuilder builder = OAuthASResponse.errorResponse(HttpServletResponse.SC_FOUND)
					.location(e.getRedirectUri()).error(e);
			return builder.buildQueryMessage();
		}
	}

	/**
	 * 校验code请求
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	private OAuthResponse validateCodeRequest(HttpServletRequest request) throws Exception {
		OAuthAuthzRequest req = new OAuthAuthzRequest(request);

		// 校验client_id
		String clientId = req.getClientId();
		OAuthClientInfo clientInfo = oauthService.findClientInfo(clientId);
		if (clientInfo == null) {
			return OAuth2Utils.invalidClientId(clientId);
		}

		// 校验redirect_uri
		String redirectURI = req.getRedirectURI();
		if (StringUtils.isEmpty(redirectURI) || !redirectURI.startsWith(clientInfo.getRedirectUri())) {
			OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_FOUND)
					.location(clientInfo.getRedirectUri()).setError(OAuthError.CodeResponse.INVALID_REQUEST)
					.setErrorDescription("Invalid redirect_uri: " + redirectURI);
			return builder.buildQueryMessage();
		}

		// 校验state
		String state = req.getState();
		if (StringUtils.isEmpty(state)) {
			OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_FOUND)
					.location(redirectURI).setError(OAuthError.CodeResponse.INVALID_REQUEST)
					.setErrorDescription("Parameter 'state'  is required");
			return builder.buildQueryMessage();
		}

		// 校验username
		String username = getLoginUsername(clientId, request);
		if (StringUtils.isEmpty(username)) {
			WebUtils.saveRequest(request);
			OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_FOUND)
					.location(appVars.loginUrl);
			OAuth2Utils.setRedirectURI(redirectURI, builder);
			return builder.buildQueryMessage();
		}

		if (StringUtils.isEmpty(req.getParam(OAuth.OAUTH_SCOPE))) {// 默认授权
			return null;
		}

		if (getSavedCodeUsername(request) != null) {// 用户已确认授权
			return null;
		}

		Set<String> scopes = req.getScopes();
		for (String scope : scopes) {
			if (clientInfo.getScope() == null || !clientInfo.getScope().contains(scope)) {// scope无效
				OAuthErrorResponseBuilder builder = OAuthResponse.errorResponse(HttpServletResponse.SC_FOUND)
						.location(redirectURI).setError(OAuthError.CodeResponse.INVALID_SCOPE)
						.setErrorDescription("Invalid scope: " + scope);
				return builder.buildQueryMessage();
			}

			if (clientInfo.getDefaultScope() == null || !clientInfo.getDefaultScope().contains(scope)) {// 需要用户主动授权
				OAuthErrorResponseBuilder builder = OAuthASResponse.errorResponse(HttpServletResponse.SC_FOUND)
						.location(Urls.APPROVAL);
				String key = UUID.randomUUID().toString();
				oauthService.saveCodeUsername(key, username);
				OAuth2Utils.setCodeUsernameKey(key, builder);

				return builder.buildQueryMessage();
			}
		}

		return null;
	}

	private String getLoginUsername(String clientId, HttpServletRequest request) {

		// 客户端主动跟踪的session
		String sessionId = OAuth2Utils.getSessionId(request);
		if (!StringUtils.isEmpty(sessionId)) {
			String username = oauthService.findLoginUsername(sessionId);
			if (username != null) {// 远程客户端已登录
				return username;
			}
		}

		// 浏览器跟踪的session
		Subject subject = SecurityUtils.getSubject();
		if (subject.isAuthenticated()) {// 本地已登录
			String username = (String) subject.getPrincipal();
			return username;
		}

		// code跟踪的session
		String username = getSavedCodeUsername(request);
		if (username != null) {// 用户主动授权前已登录
			return username;
		}

		return null;
	}

	private String getSavedCodeUsername(HttpServletRequest request) {
		String key = OAuth2Utils.getCodeUsernameKey(request);
		if (StringUtils.isEmpty(key)) {
			return null;
		}
		return oauthService.findCodeUsername(key);
	}

}
