package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsHolLCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsHolLFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsHolLListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsHolLPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsHolLResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsHolLUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsHolLService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsHolL;
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
 * 用户休假日志管理控制器
 */
@Controller
public class CuUsHolLController extends BaseController{

	private static final String BINDING = "CUUSHOLL_BINDING";

	@Autowired
	private CuUsHolLService cuushollService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param tr
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsHolL getBinding(
			@RequestParam(value = "tr", defaultValue = SharedVars.INVALID_IDSTRING) Long tr) {
		if (!SharedVars.validateID(tr)) {
			return new CuUsHolL();
		}
		return cuushollService.findCuUsHolL(tr);
	}

	/**
	 * 用户休假日志管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSHOLL_INDEX, method = RequestMethod.GET)
	public String index( Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);
		return Views.CUUSHOLL_INDEX;
	}

	/**
	 * 用户休假日志列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSHOLL_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsHolLPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsHolLFilterRequest filter, Locale locale) {
		CuUsHolLPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuushollService.findCuUsHolLPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuUsHolLPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuUsHolL> payload = (Page<CuUsHolL>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsHolLPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户休假日志列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSHOLL_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsHolLListResponse list(final CuUsHolLFilterRequest filter,
			Locale locale) {
		CuUsHolLListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuushollService.findCuUsHolLs(filter);
			}
		}, messageSource, null, locale, CuUsHolLListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuUsHolL> payload = (List<CuUsHolL>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsHolLListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户休假日志
	 * 
	 * @param tr
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSHOLL_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsHolLResponse view(@PathVariable("tr") final Long tr,
			Locale locale) {
		CuUsHolLResponse cuushollResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuushollService.findCuUsHolL(tr);
			}
		}, messageSource, null, locale, CuUsHolLResponse.class);
		if (!cuushollResponse.isSuccess()) {
			return cuushollResponse;
		}
		CuUsHolL payload = (CuUsHolL) cuushollResponse.getPayload();
		if (payload == null) {
			return cuushollResponse;
		}

		cuushollResponse.setPayload(null);
		return CuUsHolLResponse.buildResponse(cuushollResponse, payload);
	}

	/**
	 * 创建用户休假日志
	 * 
	 * @param cuusholl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSHOLL_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsHolLResponse create(@Valid CuUsHolLCreateRequest createRequtest,
			BindingResult result, final CuUsHolL cuusholl, Locale locale) {
		CuUsHolLResponse cuushollResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuushollService.createCuUsHolL(cuusholl);
			}
		}, messageSource, result, locale, CuUsHolLResponse.class);
		if (!cuushollResponse.isSuccess()) {
			return cuushollResponse;
		}
		CuUsHolL payload = (CuUsHolL) cuushollResponse.getPayload();
		if (payload == null) {
			return cuushollResponse;
		}

		cuushollResponse.setTr(payload.getTr());
		cuushollResponse.setPayload(null);
		return cuushollResponse;
	}

	/**
	 * 修改用户休假日志
	 * 
	 * @param cuusholl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSHOLL_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuUsHolLUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuUsHolL cuusholl, Locale locale) {
		CuUsHolLResponse cuushollResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuushollService.updateCuUsHolL(cuusholl);
			}
		}, messageSource, result, locale, CuUsHolLResponse.class);
		if (!cuushollResponse.isSuccess()) {
			return cuushollResponse;
		}
		CuUsHolL payload = (CuUsHolL) cuushollResponse.getPayload();
		if (payload == null) {
			return cuushollResponse;
		}

		cuushollResponse.setTr(payload.getTr());
		cuushollResponse.setPayload(null);
		return cuushollResponse;
	}

	/**
	 * 删除用户休假日志
	 * 
	 * @param tr
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSHOLL_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("tr") final Long tr, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuushollService.removeCuUsHolL(tr);
				return null;
			}
		}, messageSource, null, locale);
	}

	@RequestMapping(value = Urls.CUUSHOLL_DATE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsHolLResponse date(Locale locale) {
		CuUsHolLResponse cuushollResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuushollService.date();
			}
		}, messageSource, null, locale, CuUsHolLResponse.class);
		if (!cuushollResponse.isSuccess()) {
			return cuushollResponse;
		}
		CuUsHolL payload = (CuUsHolL) cuushollResponse.getPayload();
		if (payload == null) {
			return cuushollResponse;
		}

		cuushollResponse.setPayload(null);
		return CuUsHolLResponse.buildResponse(cuushollResponse, payload);
	}
}
