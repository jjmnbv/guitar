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
import com.xukaiqiang.guitar.mgt.protocol.EduCreateRequest;
import com.xukaiqiang.guitar.mgt.protocol.EduListResponse;
import com.xukaiqiang.guitar.mgt.protocol.EduPageResponse;
import com.xukaiqiang.guitar.mgt.protocol.EduResponse;
import com.xukaiqiang.guitar.mgt.protocol.EduUpdateRequest;
import com.xukaiqiang.guitar.mgt.service.EduService;
import com.xukaiqiang.guitar.mgt.util.Urls;
import com.xukaiqiang.guitar.mgt.util.Views;
import com.xukaiqiang.guitar.orm.entity.Edu;
import com.xukaiqiang.guitar.orm.protocol.EduFilterRequest;

/**
 * 管理控制器
 */
@Controller
public class EduController extends BaseController {

	private static final String BINDING = "EDU_BINDING";

	@Autowired
	private EduService eduService;
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
	public Edu getBinding(@RequestParam(value = "id", required = false) Integer id) {
		if (!isBindingRequest()) {
			return new Edu();
		}
		return eduService.findEdu(id);
	}

	/**
	 * 管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.EDU_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.EDU_INDEX;
	}

	/**
	 * 首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_EDU, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_EDU;
	}

	/**
	 * 列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.EDU_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public EduPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final EduFilterRequest filter, Locale locale) {
		EduPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return eduService.findEduPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, EduPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<Edu> payload = (Page<Edu>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return EduPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.EDU_LIST, method = RequestMethod.GET)
	@ResponseBody
	public EduListResponse list(final EduFilterRequest filter, Locale locale) {
		EduListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return eduService.findEdus(filter);
			}
		}, messageSource, null, locale, EduListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<Edu> payload = (List<Edu>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return EduListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.EDU_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public EduResponse view(@PathVariable("id") final Integer id, Locale locale) {
		EduResponse eduResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return eduService.findEdu(id);
			}
		}, messageSource, null, locale, EduResponse.class);

		if (!eduResponse.isSuccess()) {
			return eduResponse;
		}

		Edu payload = (Edu) eduResponse.getPayload();
		if(payload == null) {
			return eduResponse;
		}

		eduResponse.setPayload(null);
		return EduResponse.buildResponse(eduResponse, payload);
	}

	/**
	 * 创建
	 * 
	 * @param edu
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.EDU_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public EduResponse create(@Valid EduCreateRequest createRequtest, BindingResult result, final Edu edu, Locale locale) {
		EduResponse eduResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return eduService.createEdu(edu);
			}
		}, messageSource, result, locale, EduResponse.class);

		if (!eduResponse.isSuccess()) {
			return eduResponse;
		}

		Edu payload = (Edu) eduResponse.getPayload();
		if(payload == null) {
			return eduResponse;
		}

		eduResponse.setId(payload.getId());
		eduResponse.setPayload(null);
		return eduResponse;
	}

	/**
	 * 修改
	 * 
	 * @param edu
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.EDU_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public EduResponse update(@Valid EduUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final Edu edu, Locale locale) {
		EduResponse eduResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return eduService.updateEdu(edu);
			}
		}, messageSource, result, locale, EduResponse.class);

		if (!eduResponse.isSuccess()) {
			return eduResponse;
		}

		Edu payload = (Edu) eduResponse.getPayload();
		if(payload == null) {
			return eduResponse;
		}

		eduResponse.setId(payload.getId());
		eduResponse.setPayload(null);
		return eduResponse;
	}

	/**
	 * 删除
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.EDU_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Integer id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				eduService.removeEdu(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
