package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsLoginLService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;

import org.springframework.beans.factory.annotation.Autowired;
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

/**
 * 用户登录日志管理控制器
 */
@Controller
public class CuUsLoginLController extends BaseController{

	private static final String BINDING = "CUUSLOGINL_BINDING";

	@Autowired
	private CuUsLoginLService cuusloginlService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param loginTrId
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsLoginL getBinding(@RequestParam(value = "loginTrId", defaultValue = SharedVars.INVALID_IDSTRING) Long loginTrId) {
		if (!SharedVars.validateID(loginTrId)) {
			return new CuUsLoginL();
		}
		return cuusloginlService.findCuUsLoginL(loginTrId);
	}

	/**
	 * 用户登录日志管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINL_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSLOGINL_INDEX;
	}

	/**
	 * 用户登录日志首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CUUSLOGINL, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_CUUSLOGINL;
	}

	/**
	 * 用户登录日志列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSLOGINL_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsLoginLPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final CuUsLoginLFilterRequest filter, Locale locale) {
		CuUsLoginLPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusloginlService.findCuUsLoginLPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuUsLoginLPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuUsLoginL> payload = (Page<CuUsLoginL>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsLoginLPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 用户登录日志列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSLOGINL_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsLoginLListResponse list(final CuUsLoginLFilterRequest filter, Locale locale) {
		CuUsLoginLListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusloginlService.findCuUsLoginLs(filter);
			}
		}, messageSource, null, locale, CuUsLoginLListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<CuUsLoginL> payload = (List<CuUsLoginL>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsLoginLListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户登录日志
	 * 
	 * @param loginTrId
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINL_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsLoginLResponse view(@PathVariable("loginTrId") final Long loginTrId, Locale locale) {
		CuUsLoginLResponse cuusloginlResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusloginlService.findCuUsLoginL(loginTrId);
			}
		}, messageSource, null, locale, CuUsLoginLResponse.class);

		if (!cuusloginlResponse.isSuccess()) {
			return cuusloginlResponse;
		}

		CuUsLoginL payload = (CuUsLoginL) cuusloginlResponse.getPayload();
		if(payload == null) {
			return cuusloginlResponse;
		}

		cuusloginlResponse.setPayload(null);
		return CuUsLoginLResponse.buildResponse(cuusloginlResponse, payload);
	}

	/**
	 * 创建用户登录日志
	 * 
	 * @param cuusloginl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINL_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsLoginLResponse create(@Valid CuUsLoginLCreateRequest createRequtest, BindingResult result, final CuUsLoginL cuusloginl, Locale locale) {
		CuUsLoginLResponse cuusloginlResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusloginlService.createCuUsLoginL(cuusloginl);
			}
		}, messageSource, result, locale, CuUsLoginLResponse.class);

		if (!cuusloginlResponse.isSuccess()) {
			return cuusloginlResponse;
		}

		CuUsLoginL payload = (CuUsLoginL) cuusloginlResponse.getPayload();
		if(payload == null) {
			return cuusloginlResponse;
		}

		cuusloginlResponse.setLoginTrId(payload.getLoginTrId());
		cuusloginlResponse.setPayload(null);
		return cuusloginlResponse;
	}

	/**
	 * 修改用户登录日志
	 * 
	 * @param cuusloginl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINL_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsLoginLResponse update(@Valid CuUsLoginLUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final CuUsLoginL cuusloginl, Locale locale) {
		CuUsLoginLResponse cuusloginlResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusloginlService.updateCuUsLoginL(cuusloginl);
			}
		}, messageSource, result, locale, CuUsLoginLResponse.class);

		if (!cuusloginlResponse.isSuccess()) {
			return cuusloginlResponse;
		}

		CuUsLoginL payload = (CuUsLoginL) cuusloginlResponse.getPayload();
		if(payload == null) {
			return cuusloginlResponse;
		}

		cuusloginlResponse.setLoginTrId(payload.getLoginTrId());
		cuusloginlResponse.setPayload(null);
		return cuusloginlResponse;
	}

	/**
	 * 删除用户登录日志
	 * 
	 * @param loginTrId
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSLOGINL_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("loginTrId") final Long loginTrId, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuusloginlService.removeCuUsLoginL(loginTrId);
				return null;
			}
		}, messageSource, null, locale);
	}

}
