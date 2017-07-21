package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsFavResSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsFavResS;
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
 * 用户菜单收藏管理控制器
 */
@Controller
public class CuUsFavResSController extends BaseController{

	private static final String BINDING = "CUUSFAVRESS_BINDING";

	@Autowired
	private CuUsFavResSService cuusfavressService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param usId
	 * @param resNo
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsFavResS getBinding(
			@RequestParam(value = "usId", defaultValue = SharedVars.INVALID_IDSTRING) Long usId,
			@RequestParam(value = "resNo", required = false) String resNo) {
		if (!SharedVars.validateID(usId) || !SharedVars.validateID(resNo)) {
			return new CuUsFavResS();
		}
		return cuusfavressService.findCuUsFavResS(usId, resNo);
	}

	/**
	 * 用户菜单收藏管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSFAVRESS_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSFAVRESS_INDEX;
	}

	/**
	 * 用户菜单收藏列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSFAVRESS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsFavResSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsFavResSFilterRequest filter, Locale locale) {
		CuUsFavResSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusfavressService.findCuUsFavResSPage(pageNumber,
						pageSize, filter);
			}
		}, messageSource, null, locale, CuUsFavResSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuUsFavResS> payload = (Page<CuUsFavResS>) pageResponse
				.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsFavResSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户菜单收藏列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSFAVRESS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsFavResSListResponse list(final CuUsFavResSFilterRequest filter,
			Locale locale) {
		CuUsFavResSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusfavressService.findCuUsFavResSs(filter);
			}
		}, messageSource, null, locale, CuUsFavResSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuUsFavResS> payload = (List<CuUsFavResS>) listResponse
				.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsFavResSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户菜单收藏
	 * 
	 * @param usId
	 * @param resNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSFAVRESS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsFavResSResponse view(@RequestParam("usId") final Long usId,
			@RequestParam("resNo") final String resNo, Locale locale) {
		CuUsFavResSResponse cuusfavressResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuusfavressService.findCuUsFavResS(usId, resNo);
					}
				}, messageSource, null, locale, CuUsFavResSResponse.class);
		if (!cuusfavressResponse.isSuccess()) {
			return cuusfavressResponse;
		}
		CuUsFavResS payload = (CuUsFavResS) cuusfavressResponse.getPayload();
		if (payload == null) {
			return cuusfavressResponse;
		}

		cuusfavressResponse.setPayload(null);
		return CuUsFavResSResponse.buildResponse(cuusfavressResponse, payload);
	}

	/**
	 * 创建用户菜单收藏
	 * 
	 * @param cuusfavress
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSFAVRESS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsFavResSResponse create(
			@Valid CuUsFavResSCreateRequest createRequtest,
			BindingResult result, final CuUsFavResS cuusfavress, Locale locale) {
		CuUsFavResSResponse cuusfavressResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuusfavressService
								.createCuUsFavResS(cuusfavress);
					}
				}, messageSource, result, locale, CuUsFavResSResponse.class);
		if (!cuusfavressResponse.isSuccess()) {
			return cuusfavressResponse;
		}
		CuUsFavResS payload = (CuUsFavResS) cuusfavressResponse.getPayload();
		if (payload == null) {
			return cuusfavressResponse;
		}

		cuusfavressResponse.setUsId(payload.getUsId());
		cuusfavressResponse.setResNo(payload.getResNo());
		cuusfavressResponse.setPayload(null);
		return cuusfavressResponse;
	}

	/**
	 * 修改用户菜单收藏
	 * 
	 * @param cuusfavress
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSFAVRESS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuUsFavResSUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuUsFavResS cuusfavress,
			Locale locale) {
		CuUsFavResSResponse cuusfavressResponse = Executor.execute(
				new Executor() {
					@Override
					protected Object execute() {
						return cuusfavressService
								.updateCuUsFavResS(cuusfavress);
					}
				}, messageSource, result, locale, CuUsFavResSResponse.class);
		if (!cuusfavressResponse.isSuccess()) {
			return cuusfavressResponse;
		}
		CuUsFavResS payload = (CuUsFavResS) cuusfavressResponse.getPayload();
		if (payload == null) {
			return cuusfavressResponse;
		}

		cuusfavressResponse.setUsId(payload.getUsId());
		cuusfavressResponse.setResNo(payload.getResNo());
		cuusfavressResponse.setPayload(null);
		return cuusfavressResponse;
	}

	/**
	 * 删除用户菜单收藏
	 * 
	 * @param usId
	 * @param resNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSFAVRESS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("usId") final Long usId,
			@RequestParam("resNo") final String resNo, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuusfavressService.removeCuUsFavResS(usId, resNo);
				return null;
			}
		}, messageSource, null, locale);
	}

}
