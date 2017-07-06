package com.xukaiqiang.g.mgt.controller;

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

import net.zkbc.shared.SharedVars;
import net.zkbc.shared.controller.BaseController;
import net.zkbc.shared.protocol.OutputMessage;
import net.zkbc.shared.util.Executor;
import com.xukaiqiang.g.mgt.protocol.JobCreateRequest;
import com.xukaiqiang.g.mgt.protocol.JobListResponse;
import com.xukaiqiang.g.mgt.protocol.JobPageResponse;
import com.xukaiqiang.g.mgt.protocol.JobResponse;
import com.xukaiqiang.g.mgt.protocol.JobUpdateRequest;
import com.xukaiqiang.g.mgt.service.JobService;
import com.xukaiqiang.g.mgt.util.Urls;
import com.xukaiqiang.g.mgt.util.Views;
import com.xukaiqiang.g.orm.entity.Job;
import com.xukaiqiang.g.orm.protocol.JobFilterRequest;

/**
 * 工作管理控制器
 */
@Controller
public class JobController extends BaseController {

	private static final String BINDING = "JOB_BINDING";

	@Autowired
	private JobService jobService;
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
	public Job getBinding(@RequestParam(value = "id", required = false) Integer id) {
		if (!isBindingRequest()) {
			return new Job();
		}
		return jobService.findJob(id);
	}

	/**
	 * 工作管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.JOB_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.JOB_INDEX;
	}

	/**
	 * 工作首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_JOB, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_JOB;
	}

	/**
	 * 工作列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.JOB_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public JobPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final JobFilterRequest filter, Locale locale) {
		JobPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return jobService.findJobPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, JobPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<Job> payload = (Page<Job>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return JobPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 工作列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.JOB_LIST, method = RequestMethod.GET)
	@ResponseBody
	public JobListResponse list(final JobFilterRequest filter, Locale locale) {
		JobListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return jobService.findJobs(filter);
			}
		}, messageSource, null, locale, JobListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<Job> payload = (List<Job>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return JobListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看工作
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.JOB_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public JobResponse view(@PathVariable("id") final Integer id, Locale locale) {
		JobResponse jobResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return jobService.findJob(id);
			}
		}, messageSource, null, locale, JobResponse.class);

		if (!jobResponse.isSuccess()) {
			return jobResponse;
		}

		Job payload = (Job) jobResponse.getPayload();
		if(payload == null) {
			return jobResponse;
		}

		jobResponse.setPayload(null);
		return JobResponse.buildResponse(jobResponse, payload);
	}

	/**
	 * 创建工作
	 * 
	 * @param job
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.JOB_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public JobResponse create(@Valid JobCreateRequest createRequtest, BindingResult result, final Job job, Locale locale) {
		JobResponse jobResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return jobService.createJob(job);
			}
		}, messageSource, result, locale, JobResponse.class);

		if (!jobResponse.isSuccess()) {
			return jobResponse;
		}

		Job payload = (Job) jobResponse.getPayload();
		if(payload == null) {
			return jobResponse;
		}

		jobResponse.setId(payload.getId());
		jobResponse.setPayload(null);
		return jobResponse;
	}

	/**
	 * 修改工作
	 * 
	 * @param job
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.JOB_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public JobResponse update(@Valid JobUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final Job job, Locale locale) {
		JobResponse jobResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return jobService.updateJob(job);
			}
		}, messageSource, result, locale, JobResponse.class);

		if (!jobResponse.isSuccess()) {
			return jobResponse;
		}

		Job payload = (Job) jobResponse.getPayload();
		if(payload == null) {
			return jobResponse;
		}

		jobResponse.setId(payload.getId());
		jobResponse.setPayload(null);
		return jobResponse;
	}

	/**
	 * 删除工作
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.JOB_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Integer id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				jobService.removeJob(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
