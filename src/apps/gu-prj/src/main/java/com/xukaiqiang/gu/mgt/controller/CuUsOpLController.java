package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsOpLCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsOpLFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsOpLListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsOpLPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsOpLResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsOpLUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsOpLService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsOpL;
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
 * 用户操作信息<br>点击菜单以后，需要插入日志。管理控制器
 */
@Controller
public class CuUsOpLController extends BaseController{

	private static final String BINDING = "CUUSOPL_BINDING";

	@Autowired
	private CuUsOpLService cuusoplService;
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
	public CuUsOpL getBinding(@RequestParam(value = "id", defaultValue = SharedVars.INVALID_IDSTRING) Long id) {
		if (!SharedVars.validateID(id)) {
			return new CuUsOpL();
		}
		return cuusoplService.findCuUsOpL(id);
	}

	/**
	 * 用户操作信息	<br>点击菜单以后，需要插入日志。管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSOPL_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSOPL_INDEX;
	}

	/**
	 * 用户操作信息	<br>点击菜单以后，需要插入日志。首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CUUSOPL, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null,null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_CUUSOPL;
	}

	/**
	 * 用户操作信息	<br>点击菜单以后，需要插入日志。列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSOPL_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsOpLPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,@RequestParam("loginTrId") final Long loginTrId,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final CuUsOpLFilterRequest filter, Locale locale) {
		CuUsOpLPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				filter.setLoginTrId(loginTrId);
				return cuusoplService.findCuUsOpLPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuUsOpLPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<CuUsOpL> payload = (Page<CuUsOpL>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsOpLPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 用户操作信息	<br>点击菜单以后，需要插入日志。列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSOPL_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsOpLListResponse list(final CuUsOpLFilterRequest filter, Locale locale) {
		CuUsOpLListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusoplService.findCuUsOpLs(filter);
			}
		}, messageSource, null, locale, CuUsOpLListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<CuUsOpL> payload = (List<CuUsOpL>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsOpLListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户操作信息	<br>点击菜单以后，需要插入日志。
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSOPL_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsOpLResponse view(@PathVariable("id") final Long id, Locale locale) {
		CuUsOpLResponse cuusoplResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusoplService.findCuUsOpL(id);
			}
		}, messageSource, null, locale, CuUsOpLResponse.class);

		if (!cuusoplResponse.isSuccess()) {
			return cuusoplResponse;
		}

		CuUsOpL payload = (CuUsOpL) cuusoplResponse.getPayload();
		if(payload == null) {
			return cuusoplResponse;
		}

		cuusoplResponse.setPayload(null);
		return CuUsOpLResponse.buildResponse(cuusoplResponse, payload);
	}

	/**
	 * 创建用户操作信息	<br>点击菜单以后，需要插入日志。
	 * 
	 * @param cuusopl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSOPL_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsOpLResponse create(@Valid CuUsOpLCreateRequest createRequtest, BindingResult result, final CuUsOpL cuusopl, Locale locale) {
		CuUsOpLResponse cuusoplResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusoplService.createCuUsOpL(cuusopl);
			}
		}, messageSource, result, locale, CuUsOpLResponse.class);

		if (!cuusoplResponse.isSuccess()) {
			return cuusoplResponse;
		}

		CuUsOpL payload = (CuUsOpL) cuusoplResponse.getPayload();
		if(payload == null) {
			return cuusoplResponse;
		}

		cuusoplResponse.setId(payload.getId());
		cuusoplResponse.setPayload(null);
		return cuusoplResponse;
	}

	/**
	 * 修改用户操作信息	<br>点击菜单以后，需要插入日志。
	 * 
	 * @param cuusopl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSOPL_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsOpLResponse update(@Valid CuUsOpLUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final CuUsOpL cuusopl, Locale locale) {
		CuUsOpLResponse cuusoplResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusoplService.updateCuUsOpL(cuusopl);
			}
		}, messageSource, result, locale, CuUsOpLResponse.class);

		if (!cuusoplResponse.isSuccess()) {
			return cuusoplResponse;
		}

		CuUsOpL payload = (CuUsOpL) cuusoplResponse.getPayload();
		if(payload == null) {
			return cuusoplResponse;
		}

		cuusoplResponse.setId(payload.getId());
		cuusoplResponse.setPayload(null);
		return cuusoplResponse;
	}

	/**
	 * 删除用户操作信息	<br>点击菜单以后，需要插入日志。
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSOPL_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Long id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuusoplService.removeCuUsOpL(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
