package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsChPwdLService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsChPwdL;
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
 * 用户登录系统信息管理控制器
 */
@Controller
public class CuUsChPwdLController extends BaseController{

	private static final String BINDING = "CUUSCHPWDL_BINDING";

	@Autowired
	private CuUsChPwdLService cuuschpwdlService;
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
	public CuUsChPwdL getBinding(
			@RequestParam(value = "id", defaultValue = SharedVars.INVALID_IDSTRING) Long id) {
		if (!SharedVars.validateID(id)) {
			return new CuUsChPwdL();
		}
		return cuuschpwdlService.findCuUsChPwdL(id);
	}

	/**
	 * 用户登录系统信息管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSCHPWDL_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSCHPWDL_INDEX;
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
	@RequestMapping(value = Urls.CUUSCHPWDL_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsChPwdLPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsChPwdLFilterRequest filter, Locale locale) {
		CuUsChPwdLPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuschpwdlService.findCuUsChPwdLPage(pageNumber,
						pageSize, filter);
			}
		}, messageSource, null, locale, CuUsChPwdLPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<CuUsChPwdL> payload = (Page<CuUsChPwdL>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsChPwdLPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户登录系统信息列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSCHPWDL_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsChPwdLListResponse list(final CuUsChPwdLFilterRequest filter,
			Locale locale) {
		CuUsChPwdLListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuschpwdlService.findCuUsChPwdLs(filter);
			}
		}, messageSource, null, locale, CuUsChPwdLListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<CuUsChPwdL> payload = (List<CuUsChPwdL>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsChPwdLListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户登录系统信息
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSCHPWDL_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsChPwdLResponse view(@RequestParam("id") final Long id,
			Locale locale) {
		CuUsChPwdLResponse cuuschpwdlResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuuschpwdlService.findCuUsChPwdL(id);
					}
				}, messageSource, null, locale, CuUsChPwdLResponse.class);
		if (!cuuschpwdlResponse.isSuccess()) {
			return cuuschpwdlResponse;
		}
		CuUsChPwdL payload = (CuUsChPwdL) cuuschpwdlResponse.getPayload();
		if (payload == null) {
			return cuuschpwdlResponse;
		}

		cuuschpwdlResponse.setPayload(null);
		return CuUsChPwdLResponse.buildResponse(cuuschpwdlResponse, payload);
	}

	/**
	 * 创建用户登录系统信息
	 * 
	 * @param cuuschpwdl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSCHPWDL_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsChPwdLResponse create(
			@Valid CuUsChPwdLCreateRequest createRequtest,
			BindingResult result, final CuUsChPwdL cuuschpwdl, Locale locale) {
		CuUsChPwdLResponse cuuschpwdlResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuuschpwdlService.createCuUsChPwdL(cuuschpwdl);
					}
				}, messageSource, result, locale, CuUsChPwdLResponse.class);
		if (!cuuschpwdlResponse.isSuccess()) {
			return cuuschpwdlResponse;
		}
		CuUsChPwdL payload = (CuUsChPwdL) cuuschpwdlResponse.getPayload();
		if (payload == null) {
			return cuuschpwdlResponse;
		}

		cuuschpwdlResponse.setId(payload.getId());
		cuuschpwdlResponse.setPayload(null);
		return cuuschpwdlResponse;
	}

	/**
	 * 修改用户登录系统信息
	 * 
	 * @param cuuschpwdl
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSCHPWDL_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuUsChPwdLUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuUsChPwdL cuuschpwdl, Locale locale) {
		CuUsChPwdLResponse cuuschpwdlResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuuschpwdlService.updateCuUsChPwdL(cuuschpwdl);
					}
				}, messageSource, result, locale, CuUsChPwdLResponse.class);
		if (!cuuschpwdlResponse.isSuccess()) {
			return cuuschpwdlResponse;
		}
		CuUsChPwdL payload = (CuUsChPwdL) cuuschpwdlResponse.getPayload();
		if (payload == null) {
			return cuuschpwdlResponse;
		}

		cuuschpwdlResponse.setId(payload.getId());
		cuuschpwdlResponse.setPayload(null);
		return cuuschpwdlResponse;
	}

	/**
	 * 删除用户登录系统信息
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSCHPWDL_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("id") final Long id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuuschpwdlService.removeCuUsChPwdL(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
