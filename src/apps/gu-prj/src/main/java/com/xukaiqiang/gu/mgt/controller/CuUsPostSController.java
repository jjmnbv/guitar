package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsPostSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsPostSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsPostSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsPostSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsPostSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsPostSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsPostSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsPostS;
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
 * 用户表管理控制器
 */
@Controller
public class CuUsPostSController extends BaseController{

	private static final String BINDING = "CUUSPOSTS_BINDING";

	@Autowired
	private CuUsPostSService cuuspostsService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param usId
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsPostS getBinding(
			@RequestParam(value = "usId", defaultValue = SharedVars.INVALID_IDSTRING) Long usId) {
		if (!SharedVars.validateID(usId)) {
			return new CuUsPostS();
		}
		return cuuspostsService.findCuUsPostS(usId);
	}

	/**
	 * 用户表管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSPOSTS_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSPOSTS_INDEX;
	}

	/**
	 * 用户表列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSPOSTS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsPostSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsPostSFilterRequest filter, Locale locale) {
			CuUsPostSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuspostsService.findCuUsPostSPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuUsPostSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuUsPostS> payload = (Page<CuUsPostS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsPostSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户表列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSPOSTS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsPostSListResponse list(final CuUsPostSFilterRequest filter,
			Locale locale) {
			CuUsPostSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuspostsService.findCuUsPostSs(filter);
			}
		}, messageSource, null, locale, CuUsPostSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuUsPostS> payload = (List<CuUsPostS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsPostSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户表
	 * 
	 * @param usId
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSPOSTS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsPostSResponse view(@RequestParam("usId") final Long usId,
			Locale locale) {
		CuUsPostSResponse cuuspostsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuspostsService.findCuUsPostS(usId);
			}
		}, messageSource, null, locale, CuUsPostSResponse.class);
		if (!cuuspostsResponse.isSuccess()) {
			return cuuspostsResponse;
		}
		CuUsPostS payload = (CuUsPostS) cuuspostsResponse.getPayload();
		if (payload == null) {
			return cuuspostsResponse;
		}

		cuuspostsResponse.setPayload(null);
		return CuUsPostSResponse.buildResponse(cuuspostsResponse, payload);
	}

	/**
	 * 创建用户表
	 * 
	 * @param cuusposts
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSPOSTS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsPostSResponse create(
			@Valid CuUsPostSCreateRequest createRequtest, BindingResult result,
			final CuUsPostS cuusposts, Locale locale) {
		CuUsPostSResponse cuuspostsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuspostsService.createCuUsPostS(cuusposts);
			}
		}, messageSource, result, locale, CuUsPostSResponse.class);
		if (!cuuspostsResponse.isSuccess()) {
			return cuuspostsResponse;
		}
		CuUsPostS payload = (CuUsPostS) cuuspostsResponse.getPayload();
		if (payload == null) {
			return cuuspostsResponse;
		}

		cuuspostsResponse.setUsId(payload.getId().getUsId());
		cuuspostsResponse.setPayload(null);
		return cuuspostsResponse;
	}

	/**
	 * 修改用户表
	 * 
	 * @param cuusposts
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSPOSTS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuUsPostSUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuUsPostS cuusposts, Locale locale) {
		CuUsPostSResponse cuuspostsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuuspostsService.updateCuUsPostS(cuusposts);
			}
		}, messageSource, result, locale, CuUsPostSResponse.class);
		if (!cuuspostsResponse.isSuccess()) {
			return cuuspostsResponse;
		}
		CuUsPostS payload = (CuUsPostS) cuuspostsResponse.getPayload();
		if (payload == null) {
			return cuuspostsResponse;
		}

		cuuspostsResponse.setUsId(payload.getId().getUsId());
		cuuspostsResponse.setPayload(null);
		return cuuspostsResponse;
	}

	/**
	 * 删除用户表
	 * 
	 * @param usId
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSPOSTS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("usId") final Long usId,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuuspostsService.removeCuUsPostS(usId);
				return null;
			}
		}, messageSource, null, locale);
	}

}
