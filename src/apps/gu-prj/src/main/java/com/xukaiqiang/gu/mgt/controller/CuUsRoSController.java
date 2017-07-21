package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsRoSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsRoSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsRoSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsRoSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsRoSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsRoSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuUsRoSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuUsRoS;
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
 * 用户角色管理控制器
 */
@Controller
public class CuUsRoSController extends BaseController{

	private static final String BINDING = "CUUSROS_BINDING";

	@Autowired
	private CuUsRoSService cuusrosService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param usId
	 * @param roNo
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsRoS getBinding(
			@RequestParam(value = "usId", defaultValue = SharedVars.INVALID_IDSTRING) Long usId,
			@RequestParam(value = "roNo", required = false) String roNo) {
		if (!SharedVars.validateID(usId) || !SharedVars.validateID(roNo)) {
			return new CuUsRoS();
		}

		return cuusrosService.findCuUsRoS(usId, roNo);
	}

	/**
	 * 用户角色管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSROS_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUUSROS_INDEX;
	}

	/**
	 * 用户角色列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSROS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsRoSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsRoSFilterRequest filter, Locale locale) {
		CuUsRoSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusrosService.findCuUsRoSPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuUsRoSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuUsRoS> payload = (Page<CuUsRoS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsRoSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户角色列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSROS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsRoSListResponse list(final CuUsRoSFilterRequest filter,
			Locale locale) {
		CuUsRoSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusrosService.findCuUsRoSs(filter);
			}
		}, messageSource, null, locale, CuUsRoSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuUsRoS> payload = (List<CuUsRoS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsRoSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户角色
	 * 
	 * @param usId
	 * @param roNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSROS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsRoSResponse view(@RequestParam("usId") final Long usId,
			@RequestParam("roNo") final String roNo, Locale locale) {
		CuUsRoSResponse cuusrosResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusrosService.findCuUsRoS(usId, roNo);
			}
		}, messageSource, null, locale, CuUsRoSResponse.class);
		if (!cuusrosResponse.isSuccess()) {
			return cuusrosResponse;
		}
		CuUsRoS payload = (CuUsRoS) cuusrosResponse.getPayload();
		if (payload == null) {
			return cuusrosResponse;
		}

		cuusrosResponse.setPayload(null);
		return CuUsRoSResponse.buildResponse(cuusrosResponse, payload);
	}

	/**
	 * 创建用户角色
	 * 
	 * @param cuusros
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSROS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsRoSResponse create(@Valid CuUsRoSCreateRequest createRequtest,
			BindingResult result, final CuUsRoS cuusros, Locale locale) {
		CuUsRoSResponse cuusrosResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusrosService.createCuUsRoS(cuusros);
			}
		}, messageSource, result, locale, CuUsRoSResponse.class);
		if (!cuusrosResponse.isSuccess()) {
			return cuusrosResponse;
		}
		CuUsRoS payload = (CuUsRoS) cuusrosResponse.getPayload();
		if (payload == null) {
			return cuusrosResponse;
		}

		cuusrosResponse.setUsId(payload.getUsId());
		cuusrosResponse.setPayload(null);
		return cuusrosResponse;
	}

	/**
	 * 修改用户角色
	 * 
	 * @param cuusros
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSROS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuUsRoSUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuUsRoS cuusros, Locale locale) {
		CuUsRoSResponse cuusrosResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuusrosService.updateCuUsRoS(cuusros);
			}
		}, messageSource, result, locale, CuUsRoSResponse.class);
		if (!cuusrosResponse.isSuccess()) {
			return cuusrosResponse;
		}
		CuUsRoS payload = (CuUsRoS) cuusrosResponse.getPayload();
		if (payload == null) {
			return cuusrosResponse;
		}

		cuusrosResponse.setUsId(payload.getUsId());
		cuusrosResponse.setPayload(null);
		return cuusrosResponse;
	}

	/**
	 * 删除用户角色
	 * 
	 * @param usId
	 * @param roNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSROS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("usId") final Long usId,
			@RequestParam("roNo") final String roNo, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuusrosService.removeCuUsRoS(usId, roNo);
				return null;
			}
		}, messageSource, null, locale);
	}

}
