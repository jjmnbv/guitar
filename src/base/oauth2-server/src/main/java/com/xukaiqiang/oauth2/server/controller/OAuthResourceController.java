package com.xukaiqiang.oauth2.server.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.oltu.oauth2.common.error.OAuthError;
import org.apache.oltu.oauth2.common.exception.OAuthProblemException;
import org.apache.oltu.oauth2.common.message.OAuthResponse;
import org.apache.oltu.oauth2.common.message.OAuthResponse.OAuthErrorResponseBuilder;
import org.apache.oltu.oauth2.common.message.types.ParameterStyle;
import org.apache.oltu.oauth2.rs.request.OAuthAccessResourceRequest;
import org.apache.oltu.oauth2.rs.response.OAuthRSResponse;
import org.apache.oltu.oauth2.rs.response.OAuthRSResponse.OAuthRSResponseBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.xukaiqiang.oauth2.auth.service.OAuthRsService;
import com.xukaiqiang.oauth2.server.protocol.OAuthAccessToken;
import com.xukaiqiang.oauth2.server.service.OAuthServerService;
import com.xukaiqiang.oauth2.server.util.OAuth2Utils;
import com.xukaiqiang.oauth2.server.util.Urls;

@Controller
public class OAuthResourceController {

	@Autowired
	private OAuthServerService oauthService;
	@Autowired
	private OAuthRsService oauthRsService;

	private enum RsType {
		USERINFO, MENUINFO, FILTERCHAIN
	}

	/**
	 * <pre>
	 * <strong>
	 * http://server.example.com/rs/userinfo?access_token=SplxlOBeZQQYbYS6WxSbIA&openid=ohnhruNEH3LTOOxbZjTVQeNo2J14
	 * </strong>
	 * access_token： 通过access_token获取到的access_token。
	 * openid：       通过access_token获取到的openid。
	 * </pre>
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = Urls.RS_USERINFO, method = RequestMethod.GET)
	public ResponseEntity<String> userinfo(HttpServletRequest request) throws Exception {
		return createResponse(request, RsType.USERINFO);
	}

	/**
	 * <pre>
	 * <strong>
	 * http://server.example.com/rs/menuinfo?access_token=SplxlOBeZQQYbYS6WxSbIA&openid=ohnhruNEH3LTOOxbZjTVQeNo2J14
	 * </strong>
	 * access_token： 通过access_token获取到的access_token。
	 * openid：       通过access_token获取到的openid。
	 * </pre>
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = Urls.RS_MENUINFO, method = RequestMethod.GET)
	public ResponseEntity<String> menuinfo(HttpServletRequest request) throws Exception {
		return createResponse(request, RsType.MENUINFO);
	}

	/**
	 * <pre>
	 * <strong>
	 * http://server.example.com/rs/filterchain?access_token=SplxlOBeZQQYbYS6WxSbIA&openid=ohnhruNEH3LTOOxbZjTVQeNo2J14
	 * </strong>
	 * access_token： 通过access_token获取到的access_token。
	 * openid：       通过access_token获取到的openid。
	 * </pre>
	 * 
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = Urls.RS_FILTERCHAIN, method = RequestMethod.GET)
	public ResponseEntity<String> filterchain(HttpServletRequest request) throws Exception {
		return createResponse(request, RsType.FILTERCHAIN);
	}

	private ResponseEntity<String> createResponse(HttpServletRequest request, RsType rsType) throws Exception {
		return OAuth2Utils.createResponse(buildResourceResponse(request, rsType));
	}

	private OAuthResponse buildResourceResponse(HttpServletRequest request, RsType rsType) throws Exception {
		OAuthErrorResponseBuilder error = OAuthRSResponse.errorResponse(HttpServletResponse.SC_UNAUTHORIZED);
		OAuth2Utils.setRealm(error);
		try {
			OAuthAccessResourceRequest req = new OAuthAccessResourceRequest(request, ParameterStyle.QUERY);
			OAuthAccessToken accessToken = oauthService.findAccessToken(req.getAccessToken());
			if (accessToken == null) {
				return error.setError(OAuthError.ResourceResponse.INVALID_TOKEN).buildHeaderMessage();
			}

			String username = OAuth2Utils.getUsername(request);
			OAuthRSResponseBuilder builder = getBuilder(accessToken, username, rsType);
			OAuth2Utils.setOpenid(accessToken.getOpenid(), builder);

			return builder.buildJSONMessage();

		} catch (OAuthProblemException e) {
			if (StringUtils.isEmpty(e.getError())) {
				return error.buildJSONMessage();
			}

			return error.setError(e.getError()).setErrorDescription(e.getDescription()).setErrorUri(e.getUri())
					.buildJSONMessage();
		} catch (Exception e) {
			return error.setError(e.getMessage()).buildJSONMessage();
		}
	}

	private OAuthRSResponseBuilder getBuilder(OAuthAccessToken accessToken, String username, RsType rsType) {
		switch (rsType) {
		case USERINFO:
			return OAuth2Utils.setUserinfo(oauthRsService.findUserinfo(username));
		case MENUINFO:
			return OAuth2Utils.setMenuinfo(oauthRsService.findMenuinfo(accessToken.getUsername()));
		case FILTERCHAIN:
			return OAuth2Utils.setFilterchain(oauthRsService.findFilterchain(accessToken.getClientId()));
		default:
			return null;
		}
	}

}
