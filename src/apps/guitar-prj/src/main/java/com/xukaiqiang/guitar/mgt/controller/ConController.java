package com.xukaiqiang.guitar.mgt.controller;

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
import com.xukaiqiang.guitar.mgt.protocol.ConCreateRequest;
import com.xukaiqiang.guitar.mgt.protocol.ConListResponse;
import com.xukaiqiang.guitar.mgt.protocol.ConPageResponse;
import com.xukaiqiang.guitar.mgt.protocol.ConResponse;
import com.xukaiqiang.guitar.mgt.protocol.ConUpdateRequest;
import com.xukaiqiang.guitar.mgt.service.ConService;
import com.xukaiqiang.guitar.mgt.util.Urls;
import com.xukaiqiang.guitar.mgt.util.Views;
import com.xukaiqiang.guitar.orm.entity.Con;
import com.xukaiqiang.guitar.orm.protocol.ConFilterRequest;

/**
 * 联系管理控制器
 */
@Controller
public class ConController extends BaseController {

	private static final String BINDING = "CON_BINDING";

	@Autowired
	private ConService conService;
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
	public Con getBinding(@RequestParam(value = "id", required = false) Integer id) {
		if (!isBindingRequest()) {
			return new Con();
		}
		return conService.findCon(id);
	}

	/**
	 * 联系管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CON_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CON_INDEX;
	}

	/**
	 * 联系首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CON, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_CON;
	}

	/**
	 * 联系列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CON_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public ConPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final ConFilterRequest filter, Locale locale) {
		ConPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return conService.findConPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, ConPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<Con> payload = (Page<Con>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return ConPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 联系列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CON_LIST, method = RequestMethod.GET)
	@ResponseBody
	public ConListResponse list(final ConFilterRequest filter, Locale locale) {
		ConListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return conService.findCons(filter);
			}
		}, messageSource, null, locale, ConListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<Con> payload = (List<Con>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return ConListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看联系
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CON_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public ConResponse view(@PathVariable("id") final Integer id, Locale locale) {
		ConResponse conResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return conService.findCon(id);
			}
		}, messageSource, null, locale, ConResponse.class);

		if (!conResponse.isSuccess()) {
			return conResponse;
		}

		Con payload = (Con) conResponse.getPayload();
		if(payload == null) {
			return conResponse;
		}

		conResponse.setPayload(null);
		return ConResponse.buildResponse(conResponse, payload);
	}

	/**
	 * 创建联系
	 * 
	 * @param con
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CON_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public ConResponse create(@Valid ConCreateRequest createRequtest, BindingResult result, final Con con, Locale locale) {
		ConResponse conResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return conService.createCon(con);
			}
		}, messageSource, result, locale, ConResponse.class);

		if (!conResponse.isSuccess()) {
			return conResponse;
		}

		Con payload = (Con) conResponse.getPayload();
		if(payload == null) {
			return conResponse;
		}

		conResponse.setId(payload.getId());
		conResponse.setPayload(null);
		return conResponse;
	}

	/**
	 * 修改联系
	 * 
	 * @param con
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CON_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public ConResponse update(@Valid ConUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final Con con, Locale locale) {
		ConResponse conResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return conService.updateCon(con);
			}
		}, messageSource, result, locale, ConResponse.class);

		if (!conResponse.isSuccess()) {
			return conResponse;
		}

		Con payload = (Con) conResponse.getPayload();
		if(payload == null) {
			return conResponse;
		}

		conResponse.setId(payload.getId());
		conResponse.setPayload(null);
		return conResponse;
	}

	/**
	 * 删除联系
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CON_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Integer id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				conService.removeCon(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}