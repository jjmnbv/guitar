package com.xukaiqiang.gb.mgt.controller;

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

import com.wordnik.swagger.annotations.ApiOperation;
import com.xukaiqiang.gb.mgt.protocol.EducationCreateRequest;
import com.xukaiqiang.gb.mgt.protocol.EducationListResponse;
import com.xukaiqiang.gb.mgt.protocol.EducationPageResponse;
import com.xukaiqiang.gb.mgt.protocol.EducationResponse;
import com.xukaiqiang.gb.mgt.protocol.EducationUpdateRequest;
import com.xukaiqiang.gb.mgt.service.EducationService;
import com.xukaiqiang.gb.mgt.util.Urls;
import com.xukaiqiang.gb.mgt.util.Views;
import com.xukaiqiang.gb.orm.entity.Education;
import com.xukaiqiang.gb.orm.protocol.EducationFilterRequest;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;

/**
 * 教育管理控制器
 */
@Controller
public class EducationController extends BaseController {

	private static final String BINDING = "EDUCATION_BINDING";

	@Autowired
	private EducationService educationService;
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
	public Education getBinding(@RequestParam(value = "id", required = false) Integer id) {
		if (!isBindingRequest()) {
			return new Education();
		}
		return educationService.findEducation(id);
	}

	/**
	 * 教育管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.EDUCATION_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.EDUCATION_INDEX;
	}

	/**
	 * 教育首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_EDUCATION, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_EDUCATION;
	}

	/**
	 * 教育列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.EDUCATION_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public EducationPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final EducationFilterRequest filter, Locale locale) {
		EducationPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return educationService.findEducationPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, EducationPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<Education> payload = (Page<Education>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return EducationPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 教育列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.EDUCATION_LIST, method = RequestMethod.GET)
	@ResponseBody
	@ApiOperation(value = "根据用户名获取用户对象", httpMethod = "GET", response = EducationListResponse.class, notes = "根据用户名获取用户对象")
	public EducationListResponse list(final EducationFilterRequest filter, Locale locale) {
		EducationListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return educationService.findEducations(filter);
			}
		}, messageSource, null, locale, EducationListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<Education> payload = (List<Education>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return EducationListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看教育
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.EDUCATION_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public EducationResponse view(@PathVariable("id") final Integer id, Locale locale) {
		EducationResponse educationResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return educationService.findEducation(id);
			}
		}, messageSource, null, locale, EducationResponse.class);

		if (!educationResponse.isSuccess()) {
			return educationResponse;
		}

		Education payload = (Education) educationResponse.getPayload();
		if (payload == null) {
			return educationResponse;
		}

		educationResponse.setPayload(null);
		return EducationResponse.buildResponse(educationResponse, payload);
	}

	/**
	 * 创建教育
	 * 
	 * @param education
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.EDUCATION_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public EducationResponse create(@Valid EducationCreateRequest createRequtest, BindingResult result,
			final Education education, Locale locale) {
		EducationResponse educationResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return educationService.createEducation(education);
			}
		}, messageSource, result, locale, EducationResponse.class);

		if (!educationResponse.isSuccess()) {
			return educationResponse;
		}

		Education payload = (Education) educationResponse.getPayload();
		if (payload == null) {
			return educationResponse;
		}

		educationResponse.setId(payload.getId());
		educationResponse.setPayload(null);
		return educationResponse;
	}

	/**
	 * 修改教育
	 * 
	 * @param education
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.EDUCATION_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public EducationResponse update(@Valid EducationUpdateRequest updateRequtest, BindingResult result,
			@ModelAttribute(BINDING) final Education education, Locale locale) {
		EducationResponse educationResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return educationService.updateEducation(education);
			}
		}, messageSource, result, locale, EducationResponse.class);

		if (!educationResponse.isSuccess()) {
			return educationResponse;
		}

		Education payload = (Education) educationResponse.getPayload();
		if (payload == null) {
			return educationResponse;
		}

		educationResponse.setId(payload.getId());
		educationResponse.setPayload(null);
		return educationResponse;
	}

	/**
	 * 删除教育
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.EDUCATION_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Integer id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				educationService.removeEducation(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
