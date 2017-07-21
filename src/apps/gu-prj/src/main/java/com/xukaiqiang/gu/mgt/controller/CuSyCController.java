package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xukaiqiang.gu.mgt.protocol.CuSyCCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuSyCFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuSyCListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuSyCPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuSyCResponse;
import com.xukaiqiang.gu.mgt.protocol.CuSyCUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuSyCService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuSyC;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;

/**
 * 系统配置管理控制器
 */
@Controller
public class CuSyCController extends BaseController {

	private static final String BINDING = "CUSYC_BINDING";

	@Autowired
	private CuSyCService cusycService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param syCd
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuSyC getBinding(@RequestParam(value = "syCd", required = false) String syCd) {
		if (!isBindingRequest()) {
			return new CuSyC();
		}
		return cusycService.findCuSyC(syCd);
	}

	/**
	 * 系统配置管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYC_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUSYC_INDEX;
	}

	/**
	 * 系统配置列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUSYC_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuSyCPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuSyCFilterRequest filter, Locale locale) {
		CuSyCPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusycService.findCuSyCPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuSyCPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuSyC> payload = (Page<CuSyC>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuSyCPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 系统配置列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUSYC_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuSyCListResponse list(final CuSyCFilterRequest filter, Locale locale) {
		CuSyCListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusycService.findCuSyCs(filter);
			}
		}, messageSource, null, locale, CuSyCListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuSyC> payload = (List<CuSyC>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuSyCListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看系统配置
	 * 
	 * @param syCd
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYC_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuSyCResponse view(@RequestParam("syCd") final String syCd,
			Locale locale) {
		CuSyCResponse cusycResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusycService.findCuSyC(syCd);
			}
		}, messageSource, null, locale, CuSyCResponse.class);
		if (!cusycResponse.isSuccess()) {
			return cusycResponse;
		}
		CuSyC payload = (CuSyC) cusycResponse.getPayload();
		if (payload == null) {
			return cusycResponse;
		}

		cusycResponse.setPayload(null);
		return CuSyCResponse.buildResponse(cusycResponse, payload);
	}

	/**
	 * 创建系统配置
	 * 
	 * @param cusyc
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYC_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuSyCResponse create(@Valid CuSyCCreateRequest createRequtest,
			BindingResult result, final CuSyC cusyc, Locale locale) {
		CuSyCResponse cusycResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusycService.createCuSyC(cusyc);
			}
		}, messageSource, result, locale, CuSyCResponse.class);
		if (!cusycResponse.isSuccess()) {
			return cusycResponse;
		}
		CuSyC payload = (CuSyC) cusycResponse.getPayload();
		if (payload == null) {
			return cusycResponse;
		}

		cusycResponse.setSyCd(payload.getSyCd());
		cusycResponse.setPayload(null);
		return cusycResponse;
	}

	/**
	 * 修改系统配置
	 * 
	 * @param cusyc
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYC_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuSyCUpdateRequest updateRequtest,
			BindingResult result, @ModelAttribute(BINDING) final CuSyC cusyc, Locale locale) {
		CuSyCResponse cusycResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusycService.updateCuSyC(cusyc);
			}
		}, messageSource, result, locale, CuSyCResponse.class);
		if (!cusycResponse.isSuccess()) {
			return cusycResponse;
		}
		CuSyC payload = (CuSyC) cusycResponse.getPayload();
		if (payload == null) {
			return cusycResponse;
		}

		cusycResponse.setSyCd(payload.getSyCd());
		cusycResponse.setPayload(null);
		return cusycResponse;
	}

	/**
	 * 删除系统配置
	 * 
	 * @param syCd
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYC_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("syCd") final String syCd,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cusycService.removeCuSyC(syCd);
				return null;
			}
		}, messageSource, null, locale);
	}

}
