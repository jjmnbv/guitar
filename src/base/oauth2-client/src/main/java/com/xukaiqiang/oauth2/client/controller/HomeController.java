package com.xukaiqiang.oauth2.client.controller;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.oltu.oauth2.common.message.types.ResponseType;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.util.SavedRequest;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.xukaiqiang.oauth2.OAuthClientVars;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsUserinfo;
import com.xukaiqiang.oauth2.auth.util.OAuthScope;
import com.xukaiqiang.oauth2.client.protocol.OAuthAccessTokenResponse;
import com.xukaiqiang.oauth2.client.protocol.OAuthCodeRequest;
import com.xukaiqiang.oauth2.client.protocol.OAuthCodeResponse;
import com.xukaiqiang.oauth2.client.service.OAuthClientService;
import com.xukaiqiang.oauth2.client.service.OAuthUserService;
import com.xukaiqiang.oauth2.client.util.Urls;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.HttpServletUtils;
import com.xukaiqiang.shared.util.MessageCode;
import com.xukaiqiang.shared.util.MessageError;
import com.xukaiqiang.shiro.authc.UsernameOpenidToken;

/**
 * 无需登录验证的功能控制器
 */
@Controller
public class HomeController {
	private static final Logger LOG = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	private ShiroFilterFactoryBean shiroFilterFactoryBean;
	@Autowired
	private OAuthClientService oauthClientService;
	@Autowired
	private OAuthClientVars appVars;
	@Autowired
	private OAuthUserService oauthUserService;

	private ObjectMapper objectMapper = new ObjectMapper();

	private String toJSON(Object obj) {
		try {
			return objectMapper.writeValueAsString(obj);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}

		return "\"\":\"\"";
	}

	@RequestMapping(value = Urls.OAUTH_CODECALLBACK, method = RequestMethod.GET)
	public ResponseEntity<?> codecallback(OAuthCodeResponse oauthCodeResponse, HttpServletRequest request) {
		String code = oauthCodeResponse.getCode();
		if (StringUtils.isEmpty(code)) {
			LOG.warn("code is null.");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		Subject subject = SecurityUtils.getSubject();
		String redirectURI = oauthCodeResponse.getRedirectURI();

		String state = (String) subject.getSession().getAttribute(redirectURI);
		subject.getSession().removeAttribute(redirectURI);
		String sessionId = subject.getSession().getId().toString();
		LOG.debug("state[rstate={}, sstate={}, sessionId={}].", oauthCodeResponse.getState(), state, sessionId);

		if (!StringUtils.equals(state, oauthCodeResponse.getState())) {
			LOG.warn("state error.");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		oauthClientService.saveCode(sessionId, code);
		OAuthAccessTokenResponse token = oauthClientService.findAccessToken(sessionId);
		if (token == null) {
			LOG.warn("token is null.");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}

		subject.login(new UsernameOpenidToken(token.getUsername(), token.getOpenid(), request.getRemoteAddr()));

		return ResponseEntity.status(HttpStatus.FOUND).location(URI.create(redirectURI)).build();
	}

	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.OAUTH_LOGIN, method = RequestMethod.GET)
	public String login(RedirectAttributes redirectAttributes, HttpServletRequest request,
			@RequestParam(value = "redirectURI", defaultValue = "/") String redirectURI) {
		Subject subject = SecurityUtils.getSubject();
		if (subject.isAuthenticated()) {
			return "redirect:" + shiroFilterFactoryBean.getSuccessUrl();
		}

		if ("/".equals(redirectURI)) {
			SavedRequest savedRequest = WebUtils.getSavedRequest(request);
			if (savedRequest != null && savedRequest.getMethod().equalsIgnoreCase(AccessControlFilter.GET_METHOD)) {
				redirectURI = savedRequest.getRequestUrl();
			}
		}

		String state = String.valueOf(new java.util.Random().nextInt());
		subject.getSession().setAttribute(redirectURI, state);

		try {
			redirectURI = URLEncoder.encode(redirectURI, "UTF-8");
		} catch (UnsupportedEncodingException e) {
		}

		OAuthCodeRequest oauthcodeRequest = new OAuthCodeRequest();
		oauthcodeRequest.setClient_id(appVars.clientId);
		oauthcodeRequest.setRedirect_uri(appVars.redirectUri+"?redirectURI="+redirectURI);
		oauthcodeRequest.setResponse_type(ResponseType.CODE.toString());
		oauthcodeRequest.setScope(OAuthScope.userinfo.name());
		oauthcodeRequest.setState(state);
		LOG.debug("state[state={}, sessionId={}].", state, subject.getSession().getId().toString());

		redirectAttributes.asMap().putAll(BeanMap.create(oauthcodeRequest));

		return "redirect:" + appVars.authorizeUrl;
	}

	@RequestMapping(value = Urls.OAUTH_CHECKLOGIN, method = RequestMethod.GET)
	@ResponseBody
	public OutputMessage checkLogin() {
		OutputMessage out = new OutputMessage();
		Subject subject = SecurityUtils.getSubject();
		if (!subject.isAuthenticated()) {
			out.setErrorCode(MessageError.ERROR_NOAUTH);
			out.setResultCode(MessageCode.FAIL);
		}
		return out;
	}

	@RequestMapping(value = Urls.OAUTH_LOGOUT, method = RequestMethod.GET)
	public void logout(HttpServletResponse response) {
		Subject subject = SecurityUtils.getSubject();
		if (subject.isAuthenticated()) {
			subject.logout();
		}
		HttpServletUtils.writeText("logout", response);
	}

	@RequestMapping(value = Urls.SCRIPT_OAUTH_LOGINUSER, method = RequestMethod.GET)
	public void getLoginUser(HttpServletResponse response) {
		OAuthRsUserinfo loginUser = oauthUserService.getLoginUser();

		String text = "window.app = window.app || {};\n+function ($, app) {\n  app.userInfo = {\n    loginName:\"%s\",\n    usNa:\"%s\",\n    brNa:\"%s\",\n    loginTime:\"%s\"\n  };\n} (window.jQuery, window.app);";
		if (loginUser != null) {
			text = String.format(text, loginUser.getLoginName(), loginUser.getRealName(), loginUser.getOrganName(), loginUser.getPrevLoginTime());
		} else {
			text  = String.format(text, "", "", "", "");
		}

		HttpServletUtils.writeText(text, response);
	}

	/**
	 * 获取当前登录用户可用菜单
	 * 
	 * @param response
	 */
	@RequestMapping(value = Urls.SCRIPT_AVAILABLEMENUS, method = RequestMethod.GET)
	public void availableMenus(HttpServletResponse response) {
		String username = oauthUserService.getLoginUser().getLoginName();
		OAuthRsMenuinfo menu = oauthClientService.findMenuinfo(username);
		String text = "window.app = window.app || {};window.app.mainMenus = window.app.mainMenus || {};\n +function ($, app) {\n$.extend(app.mainMenus, %s);\n} (window.jQuery, window.app);";
		if (menu != null) {
			text = String.format(text, toJSON(menu.getChildren()));
		} else {
			text = String.format(text, "[]");
		}
		HttpServletUtils.writeText(text, response);
	}

}
