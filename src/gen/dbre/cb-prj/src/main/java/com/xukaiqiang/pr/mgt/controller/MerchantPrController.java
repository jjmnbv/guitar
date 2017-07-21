package com.xukaiqiang.pr.mgt.controller;

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
import com.xukaiqiang.pr.mgt.protocol.MerchantPrCreateRequest;
import com.xukaiqiang.pr.mgt.protocol.MerchantPrListResponse;
import com.xukaiqiang.pr.mgt.protocol.MerchantPrPageResponse;
import com.xukaiqiang.pr.mgt.protocol.MerchantPrResponse;
import com.xukaiqiang.pr.mgt.protocol.MerchantPrUpdateRequest;
import com.xukaiqiang.pr.mgt.service.MerchantPrService;
import com.xukaiqiang.pr.mgt.util.Urls;
import com.xukaiqiang.pr.mgt.util.Views;
import com.xukaiqiang.pr.orm.entity.MerchantPr;
import com.xukaiqiang.pr.orm.protocol.MerchantPrFilterRequest;

/**
 * 商户管理控制器
 */
@Controller
public class MerchantPrController extends BaseController {

	private static final String BINDING = "MERCHANTPR_BINDING";

	@Autowired
	private MerchantPrService merchantprService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param coId
	 * @return
	 */
	@ModelAttribute(BINDING)
	public MerchantPr getBinding(@RequestParam(value = "coId", defaultValue = SharedVars.INVALID_IDSTRING) Long coId) {
		if (!isBindingRequest()) {
			return new MerchantPr();
		}
		return merchantprService.findMerchantPr(coId);
	}

	/**
	 * 商户管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.MERCHANTPR_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.MERCHANTPR_INDEX;
	}

	/**
	 * 商户首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_MERCHANTPR, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_MERCHANTPR;
	}

	/**
	 * 商户列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.MERCHANTPR_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public MerchantPrPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final MerchantPrFilterRequest filter, Locale locale) {
		MerchantPrPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return merchantprService.findMerchantPrPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, MerchantPrPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<MerchantPr> payload = (Page<MerchantPr>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return MerchantPrPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 商户列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.MERCHANTPR_LIST, method = RequestMethod.GET)
	@ResponseBody
	public MerchantPrListResponse list(final MerchantPrFilterRequest filter, Locale locale) {
		MerchantPrListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return merchantprService.findMerchantPrs(filter);
			}
		}, messageSource, null, locale, MerchantPrListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<MerchantPr> payload = (List<MerchantPr>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return MerchantPrListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看商户
	 * 
	 * @param coId
	 * @return
	 */
	@RequestMapping(value = Urls.MERCHANTPR_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public MerchantPrResponse view(@PathVariable("coId") final Long coId, Locale locale) {
		MerchantPrResponse merchantprResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return merchantprService.findMerchantPr(coId);
			}
		}, messageSource, null, locale, MerchantPrResponse.class);

		if (!merchantprResponse.isSuccess()) {
			return merchantprResponse;
		}

		MerchantPr payload = (MerchantPr) merchantprResponse.getPayload();
		if(payload == null) {
			return merchantprResponse;
		}

		merchantprResponse.setPayload(null);
		return MerchantPrResponse.buildResponse(merchantprResponse, payload);
	}

	/**
	 * 创建商户
	 * 
	 * @param merchantpr
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.MERCHANTPR_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public MerchantPrResponse create(@Valid MerchantPrCreateRequest createRequtest, BindingResult result, final MerchantPr merchantpr, Locale locale) {
		MerchantPrResponse merchantprResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return merchantprService.createMerchantPr(merchantpr);
			}
		}, messageSource, result, locale, MerchantPrResponse.class);

		if (!merchantprResponse.isSuccess()) {
			return merchantprResponse;
		}

		MerchantPr payload = (MerchantPr) merchantprResponse.getPayload();
		if(payload == null) {
			return merchantprResponse;
		}

		merchantprResponse.setCoId(payload.getCoId());
		merchantprResponse.setPayload(null);
		return merchantprResponse;
	}

	/**
	 * 修改商户
	 * 
	 * @param merchantpr
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.MERCHANTPR_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public MerchantPrResponse update(@Valid MerchantPrUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final MerchantPr merchantpr, Locale locale) {
		MerchantPrResponse merchantprResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return merchantprService.updateMerchantPr(merchantpr);
			}
		}, messageSource, result, locale, MerchantPrResponse.class);

		if (!merchantprResponse.isSuccess()) {
			return merchantprResponse;
		}

		MerchantPr payload = (MerchantPr) merchantprResponse.getPayload();
		if(payload == null) {
			return merchantprResponse;
		}

		merchantprResponse.setCoId(payload.getCoId());
		merchantprResponse.setPayload(null);
		return merchantprResponse;
	}

	/**
	 * 删除商户
	 * 
	 * @param coId
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.MERCHANTPR_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("coId") final Long coId, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				merchantprService.removeMerchantPr(coId);
				return null;
			}
		}, messageSource, null, locale);
	}

}
