package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

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

import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;
import com.xukaiqiang.gu.mgt.protocol.CuSyOpLCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuSyOpLListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuSyOpLPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuSyOpLResponse;
import com.xukaiqiang.gu.mgt.protocol.CuSyOpLUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuSyOpLService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuSyOpL;
import com.xukaiqiang.gu.orm.protocol.CuSyOpLFilterRequest;

/**
 * 系统操作日志管理控制器
 */
@Controller
public class CuSyOpLController extends BaseController {

	private static final String BINDING = "CUSYOPL_BINDING";

	@Autowired
	private CuSyOpLService cusyoplService;
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
	public CuSyOpL getBinding(@RequestParam(value = "id", defaultValue = SharedVars.INVALID_IDSTRING) Long id) {
		if (!isBindingRequest()) {
			return new CuSyOpL();
		}
		return cusyoplService.findCuSyOpL(id);
	}

	/**
	 * 系统操作日志管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYOPL_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUSYOPL_INDEX;
	}

	/**
	 * 系统操作日志首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CUSYOPL, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_CUSYOPL;
	}

	/**
	 * 系统操作日志列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUSYOPL_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuSyOpLPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final CuSyOpLFilterRequest filter, Locale locale) {
		CuSyOpLPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusyoplService.findCuSyOpLPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuSyOpLPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<CuSyOpL> payload = (Page<CuSyOpL>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuSyOpLPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 系统操作日志列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUSYOPL_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuSyOpLListResponse list(final CuSyOpLFilterRequest filter, Locale locale) {
		CuSyOpLListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusyoplService.findCuSyOpLs(filter);
			}
		}, messageSource, null, locale, CuSyOpLListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<CuSyOpL> payload = (List<CuSyOpL>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuSyOpLListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看系统操作日志
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYOPL_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuSyOpLResponse view(@PathVariable("id") final Long id, Locale locale) {
		CuSyOpLResponse cusyoplResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusyoplService.findCuSyOpL(id);
			}
		}, messageSource, null, locale, CuSyOpLResponse.class);

		if (!cusyoplResponse.isSuccess()) {
			return cusyoplResponse;
		}

		CuSyOpL payload = (CuSyOpL) cusyoplResponse.getPayload();
		if(payload == null) {
			return cusyoplResponse;
		}

		cusyoplResponse.setPayload(null);
		return CuSyOpLResponse.buildResponse(cusyoplResponse, payload);
	}

	/**
	 * 创建系统操作日志
	 * 
	 * @param cusyopl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYOPL_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuSyOpLResponse create(@Valid CuSyOpLCreateRequest createRequtest, BindingResult result, final CuSyOpL cusyopl, Locale locale) {
		CuSyOpLResponse cusyoplResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusyoplService.createCuSyOpL(cusyopl);
			}
		}, messageSource, result, locale, CuSyOpLResponse.class);

		if (!cusyoplResponse.isSuccess()) {
			return cusyoplResponse;
		}

		CuSyOpL payload = (CuSyOpL) cusyoplResponse.getPayload();
		if(payload == null) {
			return cusyoplResponse;
		}

		cusyoplResponse.setId(payload.getId());
		cusyoplResponse.setPayload(null);
		return cusyoplResponse;
	}

	/**
	 * 修改系统操作日志
	 * 
	 * @param cusyopl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYOPL_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public CuSyOpLResponse update(@Valid CuSyOpLUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final CuSyOpL cusyopl, Locale locale) {
		CuSyOpLResponse cusyoplResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cusyoplService.updateCuSyOpL(cusyopl);
			}
		}, messageSource, result, locale, CuSyOpLResponse.class);

		if (!cusyoplResponse.isSuccess()) {
			return cusyoplResponse;
		}

		CuSyOpL payload = (CuSyOpL) cusyoplResponse.getPayload();
		if(payload == null) {
			return cusyoplResponse;
		}

		cusyoplResponse.setId(payload.getId());
		cusyoplResponse.setPayload(null);
		return cusyoplResponse;
	}

	/**
	 * 删除系统操作日志
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUSYOPL_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Long id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cusyoplService.removeCuSyOpL(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
