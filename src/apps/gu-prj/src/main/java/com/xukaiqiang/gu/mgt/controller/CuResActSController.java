package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuResActSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuResActSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuResActSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuResActSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuResActSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuResActSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuResActSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuResActS;
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
 * 资源操作配置管理控制器
 */
@Controller
public class CuResActSController extends BaseController{

	private static final String BINDING = "CURESACTS_BINDING";

	@Autowired
	private CuResActSService curesactsService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param resNo
	 * @param suId
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuResActS getBinding(@RequestParam(value = "resNo", required = false) String resNo, @RequestParam(value = "suId", required = false) Short suId) {
		if (!SharedVars.validateID(resNo)|| !SharedVars.validateID(suId)) {
			return new CuResActS();
		}
		return curesactsService.findCuResActS(resNo, suId);
	}

	/**
	 * 资源操作配置管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CURESACTS_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CURESACTS_INDEX;
	}

	/**
	 * 资源操作配置首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CURESACTS, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_CURESACTS;
	}

	/**
	 * 资源操作配置列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CURESACTS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuResActSPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final CuResActSFilterRequest filter, Locale locale) {
		CuResActSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curesactsService.findCuResActSPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuResActSPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<CuResActS> payload = (Page<CuResActS>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuResActSPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 资源操作配置列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CURESACTS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuResActSListResponse list(final CuResActSFilterRequest filter, Locale locale,@PathVariable("resNo") final String resNo) {
		CuResActSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				filter.setResNo(resNo);
				return curesactsService.findCuResActSs(filter);
			}
		}, messageSource, null, locale, CuResActSListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<CuResActS> payload = (List<CuResActS>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuResActSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看资源操作配置
	 * 
	 * @param resNo
	 * @param suId
	 * @return
	 */
	@RequestMapping(value = Urls.CURESACTS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuResActSResponse view(@RequestParam("resNo") final String resNo, @RequestParam("suId") final Short suId, Locale locale) {
		CuResActSResponse curesactsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curesactsService.findCuResActS(resNo, suId);
			}
		}, messageSource, null, locale, CuResActSResponse.class);

		if (!curesactsResponse.isSuccess()) {
			return curesactsResponse;
		}

		CuResActS payload = (CuResActS) curesactsResponse.getPayload();
		if(payload == null) {
			return curesactsResponse;
		}

		curesactsResponse.setPayload(null);
		return CuResActSResponse.buildResponse(curesactsResponse, payload);
	}

	/**
	 * 创建资源操作配置
	 * 
	 * @param curesacts
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURESACTS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuResActSResponse create(@Valid CuResActSCreateRequest createRequtest, BindingResult result, final CuResActS curesacts, Locale locale) {
		CuResActSResponse curesactsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curesactsService.createCuResActS(curesacts);
			}
		}, messageSource, result, locale, CuResActSResponse.class);

		if (!curesactsResponse.isSuccess()) {
			return curesactsResponse;
		}

		CuResActS payload = (CuResActS) curesactsResponse.getPayload();
		if(payload == null) {
			return curesactsResponse;
		}

		curesactsResponse.setResNo(payload.getResNo());
		curesactsResponse.setSuId(payload.getSuId());
		curesactsResponse.setPayload(null);
		return curesactsResponse;
	}

	/**
	 * 修改资源操作配置
	 * 
	 * @param curesacts
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURESACTS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public CuResActSResponse update(@Valid CuResActSUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final CuResActS curesacts, Locale locale) {
		CuResActSResponse curesactsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curesactsService.updateCuResActS(curesacts);
			}
		}, messageSource, result, locale, CuResActSResponse.class);

		if (!curesactsResponse.isSuccess()) {
			return curesactsResponse;
		}

		CuResActS payload = (CuResActS) curesactsResponse.getPayload();
		if(payload == null) {
			return curesactsResponse;
		}

		curesactsResponse.setResNo(payload.getResNo());
		curesactsResponse.setSuId(payload.getSuId());
		curesactsResponse.setPayload(null);
		return curesactsResponse;
	}

	/**
	 * 删除资源操作配置
	 * 
	 * @param resNo
	 * @param suId
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURESACTS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("resNo") final String resNo, @RequestParam("suId") final Short suId, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				curesactsService.removeCuResActS(resNo, suId);
				return null;
			}
		}, messageSource, null, locale);
	}

}
