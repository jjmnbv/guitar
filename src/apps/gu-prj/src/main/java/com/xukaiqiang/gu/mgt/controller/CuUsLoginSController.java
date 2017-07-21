package com.xukaiqiang.gu.mgt.controller;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.ChangeLoginPasswordRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuResSService;
import com.xukaiqiang.gu.mgt.service.CuUsLoginSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.util.MessageError;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.service.LoginAttemptsService;
import com.xukaiqiang.shared.util.Executor;
import com.xukaiqiang.shared.util.HttpServletUtils;
import com.xukaiqiang.shared.util.MessageCode;
import com.xukaiqiang.shiro.authc.IncorrectCaptchaException;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 * 用户登录系统信息管理控制器
 */
@Controller
public class CuUsLoginSController extends BaseController{

	private static final String BINDING = "CUUSLOGINS_BINDING";
	private static final Logger LOG = LoggerFactory
			.getLogger(CuUsLoginSController.class);
	@Autowired
	private CuUsLoginSService cuusloginsService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;
	@Autowired
	@Qualifier("authc")
	private FormAuthenticationFilter authcFilter;
	@Autowired
	private LoginAttemptsService loginAttemptsService;
	@Autowired
	private CuUsSService cuUsSService;
	@Autowired
	private CuResSService curesSService;
	@Autowired
	private CuUsSController cuusCon;
	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param usId
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsLoginS getBinding(
			@RequestParam(value = "usId", defaultValue = SharedVars.INVALID_IDSTRING) Long usId) {
		if (!SharedVars.validateID(usId)) {
			return new CuUsLoginS();
		}
		return cuusloginsService.findCuUsLoginS(usId);
	}

	/**
	 * 用户登录系统信息管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINS_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSLOGINS_INDEX;
	}

	/**
	 * 用户登录系统信息首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CUUSLOGINS, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_CUUSLOGINS;
	}

	/**
	 * 用户登录系统信息列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSLOGINS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsLoginSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsLoginSFilterRequest filter, Locale locale) {
		CuUsLoginSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusloginsService.findCuUsLoginSPage(pageNumber,
						pageSize, filter);
			}
		}, messageSource, null, locale, CuUsLoginSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuUsLoginS> payload = (Page<CuUsLoginS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsLoginSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户登录系统信息列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSLOGINS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsLoginSListResponse list(final CuUsLoginSFilterRequest filter,
			Locale locale) {
		CuUsLoginSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusloginsService.findCuUsLoginSs(filter);
			}
		}, messageSource, null, locale, CuUsLoginSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuUsLoginS> payload = (List<CuUsLoginS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsLoginSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户登录系统信息
	 * 
	 * @param usId
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsLoginSResponse view(@PathVariable("usId") final Long usId,
			Locale locale) {
		CuUsLoginSResponse cuusloginsResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuusloginsService.findCuUsLoginS(usId);
					}
				}, messageSource, null, locale, CuUsLoginSResponse.class);
		if (!cuusloginsResponse.isSuccess()) {
			return cuusloginsResponse;
		}
		CuUsLoginS payload = (CuUsLoginS) cuusloginsResponse.getPayload();
		if (payload == null) {
			return cuusloginsResponse;
		}

		cuusloginsResponse.setPayload(null);
		return CuUsLoginSResponse.buildResponse(cuusloginsResponse, payload);
	}

	/**
	 * 获取菜单
	 * 
	 * @param username
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINS_MENU, method = RequestMethod.GET)
	@ResponseBody
	public Object getMenu(Locale locale, final HttpServletResponse response) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curesSService.findMyTopMenus();
			}
		}, messageSource, null, locale);
	}

	protected List<OAuthRsMenuinfo> findAllCh(OAuthRsMenuinfo menuinfo) {
		List<OAuthRsMenuinfo> allCh = new ArrayList<OAuthRsMenuinfo>();
		if (menuinfo.getStyleObject() != null) {
			allCh.add(menuinfo);
		}
		List<OAuthRsMenuinfo> children = menuinfo.getChildren();
		if (children != null) {
			for (OAuthRsMenuinfo oAuthRsMenuinfo : children) {
				findAllCh(oAuthRsMenuinfo);
			}
		}

		return allCh;
	}

	/**
	 * 创建用户登录系统信息
	 * 
	 * @param cuuslogins
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsLoginSResponse create(
			@Valid CuUsLoginSCreateRequest createRequtest,
			BindingResult result, final CuUsLoginS cuuslogins, Locale locale) {
		CuUsLoginSResponse cuusloginsResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuusloginsService.createCuUsLoginS(cuuslogins);
					}
				}, messageSource, result, locale, CuUsLoginSResponse.class);
		if (!cuusloginsResponse.isSuccess()) {
			return cuusloginsResponse;
		}
		CuUsLoginS payload = (CuUsLoginS) cuusloginsResponse.getPayload();
		if (payload == null) {
			return cuusloginsResponse;
		}

		cuusloginsResponse.setUsId(payload.getUsId());
		cuusloginsResponse.setPayload(null);
		return cuusloginsResponse;
	}

	/**
	 * 修改用户登录系统信息
	 * 
	 * @param cuuslogins
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsLoginSResponse update(
			@Valid CuUsLoginSUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuUsLoginS cuuslogins, Locale locale) {
			CuUsLoginSResponse cuusloginsResponse = Executor.execute(new Executor() {
				@Override
				protected Object execute() {
					return cuusloginsService.updateCuUsLoginS(cuuslogins);
						}
				}, messageSource, result, locale, CuUsLoginSResponse.class);
			if (!cuusloginsResponse.isSuccess()) {
				return cuusloginsResponse;
			}
			CuUsLoginS payload = (CuUsLoginS) cuusloginsResponse.getPayload();
			if (payload == null) {
				return cuusloginsResponse;
			}
	
			cuusloginsResponse.setUsId(payload.getUsId());
			cuusloginsResponse.setPayload(null);
			return cuusloginsResponse;
	}

	/**
	 * 删除用户登录系统信息
	 * 
	 * @param usId
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("usId") final Long usId,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuusloginsService.removeCuUsLoginS(usId);
				return null;
			}
		}, messageSource, null, locale);
	}

	@RequestMapping(value = Urls.LOGIN, method = RequestMethod.GET)
	public String loginForm() {

		Subject subject = SecurityUtils.getSubject();
		if (subject.isAuthenticated()) {
			return "redirect:" + Urls.INDEX;
		}

		return Views.LOGIN;
	}

	/**
	 * 登录
	 * 
	 * @param redirectAttributes
	 * @param request
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.LOGIN, method = RequestMethod.POST)
	public String login(RedirectAttributes redirectAttributes,ServletResponse response,
			HttpServletRequest request, Locale locale) {
		if(SecurityUtils.getSubject().isAuthenticated()){
			writeSuccess((HttpServletResponse) response,MessageError.ERROR_AUTHED);
			return null;
		}
		String username = request.getParameter(authcFilter.getUsernameParam());

		LOG.info("{} Login failed.", username);

		String className = (String) request.getAttribute(authcFilter
				.getFailureKeyAttribute());

		if (IncorrectCaptchaException.class.getName().equals(className)) {
			redirectAttributes.addFlashAttribute("error", messageSource
					.getMessage("Valid.HomeController.login.captcha", null,
							null, locale));
		} else {
			redirectAttributes.addFlashAttribute("error", messageSource
					.getMessage("Valid.HomeController.login.fail", null, null,
							locale));
		}

		if (loginAttemptsService.loginCaptchaRequired(username)) {
			redirectAttributes.addFlashAttribute("loginCaptchaRequired",
					"required");
		}

		return "redirect:" + Urls.LOGIN;
	}
	protected void writeSuccess(HttpServletResponse response,MessageError errorCode) {
		HttpServletUtils.writeJson(String.format("{\"resultCode\": \"%s\", \"errorCode\": \"%s\",\"errors\":[\"%s\"]}",
				MessageCode.FAIL, errorCode, errorCode.getMsg()), response);
	}
	/**
	 * 修改当前用户登录密码
	 * 
	 * @param input
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_PASSWORD, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateMyLoginPassword(
			@Valid final ChangeLoginPasswordRequest input,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				CuUsS userMessage = cuUsSService.userMessage();
				Long id = userMessage.getId();
				cuusloginsService.updateMyLoginPassword(id,
						input.getPlainOldPassword(),
						input.getPlainNewPassword());
				return null;
			}
		}, messageSource, result, locale);
	}
	/**
	 * 首次登陆，密码过期,改密码
	 * @return
	 * @throws ParseException
	 */
	@RequestMapping(value = Urls.CUUSS_CHECKPW, method = RequestMethod.GET)
	@ResponseBody
	public OutputMessage checkPw(Locale locale){
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				CuUsS userMessage = cuUsSService.userMessage();
				cuusloginsService.alterPW(userMessage);
				return null;
			}
		}, messageSource, null, locale);
	}
}
