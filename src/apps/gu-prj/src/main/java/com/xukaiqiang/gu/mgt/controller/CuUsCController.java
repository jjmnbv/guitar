package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsCCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsCFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsCListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsCPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsCResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsCUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsCService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsC;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;

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

/**
 * 用户配置管理控制器
 */
@Controller
public class CuUsCController extends BaseController{

	private static final String BINDING = "CUUSC_BINDING";

	@Autowired
	private CuUsCService cuuscService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param id
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsC getBinding(
			@RequestParam(value = "id", defaultValue = SharedVars.INVALID_IDSTRING) Long id) {
		if (!SharedVars.validateID(id)) {
			return new CuUsC();
		}
		return cuuscService.findCuUsC(id);
	}

	/**
	 * 用户配置管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSC_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSC_INDEX;
	}

	/**
	 * 用户配置列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSC_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsCPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsCFilterRequest filter, Locale locale) {
		CuUsCPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuscService.findCuUsCPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuUsCPageResponse.class);
		Page<CuUsC> payload = (Page<CuUsC>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}
		pageResponse.setPayload(null);
		return CuUsCPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户配置列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSC_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsCListResponse list(final CuUsCFilterRequest filter, Locale locale) {
		CuUsCListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuscService.findCuUsCs(filter);
			}
		}, messageSource, null, locale, CuUsCListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuUsC> payload = (List<CuUsC>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsCListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户配置
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSC_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsCResponse view(@RequestParam("id") final Long id, Locale locale) {
		CuUsCResponse cuuscResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuscService.findCuUsC(id);
			}
		}, messageSource, null, locale, CuUsCResponse.class);
		if (!cuuscResponse.isSuccess()) {
			return cuuscResponse;
		}
		CuUsC payload = (CuUsC) cuuscResponse.getPayload();
		if (payload == null) {
			return cuuscResponse;
		}

		cuuscResponse.setPayload(null);
		return CuUsCResponse.buildResponse(cuuscResponse, payload);
	}

	/**
	 * 创建用户配置
	 * 
	 * @param cuusc
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSC_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsCResponse create(@Valid CuUsCCreateRequest createRequtest,
			BindingResult result, final CuUsC cuusc, Locale locale) {
		CuUsCResponse cuuscResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuscService.createCuUsC(cuusc);
			}
		}, messageSource, result, locale, CuUsCResponse.class);
		if (!cuuscResponse.isSuccess()) {
			return cuuscResponse;
		}

		CuUsC payload = (CuUsC) cuuscResponse.getPayload();
		if (payload == null) {
			return cuuscResponse;
		}

		cuuscResponse.setId(payload.getId());
		cuuscResponse.setPayload(null);
		return cuuscResponse;
	}

	/**
	 * 修改用户配置
	 * 
	 * @param cuusc
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSC_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuUsCUpdateRequest updateRequtest,
			BindingResult result, @ModelAttribute(BINDING) final CuUsC cuusc,
			Locale locale) {
		CuUsCResponse cuuscResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuscService.updateCuUsC(cuusc);
			}
		}, messageSource, result, locale, CuUsCResponse.class);
		if (!cuuscResponse.isSuccess()) {
			return cuuscResponse;
		}

		CuUsC payload = (CuUsC) cuuscResponse.getPayload();
		if (payload == null) {
			return cuuscResponse;
		}
		cuuscResponse.setId(payload.getId());
		cuuscResponse.setPayload(null);
		return cuuscResponse;
	}

	/**
	 * 删除用户配置
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSC_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("id") final Long id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuuscService.removeCuUsC(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
