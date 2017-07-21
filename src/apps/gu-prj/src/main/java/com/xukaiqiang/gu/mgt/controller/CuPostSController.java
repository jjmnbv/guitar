package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuPostSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuPostSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuPostSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuPostSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuPostSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuPostSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuPostS;
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
 * 岗位管理控制器
 */
@Controller
public class CuPostSController extends BaseController{

	private static final String BINDING = "CUPOSTS_BINDING";

	@Autowired
	private CuPostSService cupostsService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param postNo
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuPostS getBinding(
			@RequestParam(value = "postNo", required = false) String postNo) {
		if (!SharedVars.validateID(postNo)) {
			return new CuPostS();
		}
		return cupostsService.findCuPostS(postNo);
	}

	/**
	 * 岗位管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_INDEX, method = RequestMethod.GET)
	public String index(CuPostSFilterRequest filter, Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);
		return Views.CUPOSTS_INDEX;
	}
	
	/**
	 * 岗位管理首屏/添加
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_ADDINDEX, method = RequestMethod.GET)
	public String addIndex(CuPostSFilterRequest filter, Model model, Locale locale) {
		return Views.CUPOSTS_ADDINDEX;
	}
	
	/**
	 * 岗位管理首屏/添加
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_UPDATEINDEX, method = RequestMethod.GET)
	public String updateIndex(CuPostSFilterRequest filter, Model model, Locale locale) {
		return Views.CUPOSTS_UPDATEINDEX;
	}
	
	/**
	 * 岗位列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUPOSTS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuPostSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuPostSFilterRequest filter, Locale locale) {
		CuPostSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cupostsService.findCuPostSPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuPostSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuPostS> payload = (Page<CuPostS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuPostSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户设置岗位
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @param locale
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUPOSTS_CUUSPAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuPostSPageResponse toListPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuPostSFilterRequest filter, Locale locale) {
		CuPostSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cupostsService.findCuPostSPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuPostSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuPostS> payload = (Page<CuPostS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuPostSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 岗位列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUPOSTS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuPostSListResponse list(final CuPostSFilterRequest filter,
			Locale locale) {
		CuPostSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cupostsService.findCuPostSs(filter);
			}
		}, messageSource, null, locale, CuPostSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuPostS> payload = (List<CuPostS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuPostSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看岗位
	 * 
	 * @param postNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuPostSResponse view(@PathVariable("postNo") final String postNo,
			Locale locale) {
		CuPostSResponse cupostsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cupostsService.findNaByNo(postNo);
			}
		}, messageSource, null, locale, CuPostSResponse.class);
		if (!cupostsResponse.isSuccess()) {
			return cupostsResponse;
		}
		CuPostS payload = (CuPostS) cupostsResponse.getPayload();
		if (payload == null) {
			return cupostsResponse;
		}

		cupostsResponse.setPayload(null);
		return CuPostSResponse.buildResponse(cupostsResponse, payload);
	}

	/**
	 * 岗位是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CuPostS_NOTEXISTS, method = RequestMethod.POST)
	@ResponseBody
	public Boolean notexists(CuPostSFilterRequest cuPost) {
		return !cupostsService.exists(cuPost);
	}

	/**
	 * 创建岗位
	 * 
	 * @param cuposts
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuPostSResponse create(@Valid CuPostSCreateRequest createRequtest,
			BindingResult result, final CuPostS cuposts, Locale locale) {
		CuPostSResponse cupostsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cupostsService.createCuPostS(cuposts);
			}
		}, messageSource, result, locale, CuPostSResponse.class);
		if (!cupostsResponse.isSuccess()) {
			return cupostsResponse;
		}
		CuPostS payload = (CuPostS) cupostsResponse.getPayload();
		if (payload == null) {
			return cupostsResponse;
		}

		cupostsResponse.setPostNo(payload.getPostNo());
		cupostsResponse.setPayload(null);
		return cupostsResponse;
	}

	/**
	 * 修改岗位
	 * 
	 * @param cuposts
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuPostSUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuPostS cuposts, Locale locale) {
		CuPostSResponse cupostsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cupostsService.updateCuPostS(cuposts);
			}
		}, messageSource, result, locale, CuPostSResponse.class);
		if (!cupostsResponse.isSuccess()) {
			return cupostsResponse;
		}
		CuPostS payload = (CuPostS) cupostsResponse.getPayload();
		if (payload == null) {
			return cupostsResponse;
		}

		cupostsResponse.setPostNo(payload.getPostNo());
		cupostsResponse.setPayload(null);
		return cupostsResponse;
	}

	/**
	 * 删除岗位
	 * 
	 * @param postNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("postNo") final String postNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cupostsService.removeCuPostS(postNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 更新状态为 激活
	 * 
	 * @param postNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_UPDATEJH, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateJH(@PathVariable("postNo") final String postNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cupostsService.updateJH(postNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 更新状态为 失效
	 * 
	 * @param postNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_UPDATESX, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateSX(@PathVariable("postNo") final String postNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cupostsService.updatesx(postNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 岗位名称是否存在
	 * 
	 * @param postNa
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_POSTNAEXIST, method = RequestMethod.POST)
	@ResponseBody
	public boolean postNaExist(CuPostS cuposts) {
		return cupostsService.postNaExist(cuposts);
	}

	/**
	 * 岗位编号是否存在
	 * 
	 * @param postNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_POSTNOEXIST, method = RequestMethod.POST)
	@ResponseBody
	public boolean postNoExist(CuPostS cuposts) {
		return cupostsService.postNoExist(cuposts);
	}

	/**
	 * 获取nextId
	 * 
	 * @param postNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUPOSTS_NEXTID, method = RequestMethod.GET)
	@ResponseBody
	public CuPostS nextId() {
		return cupostsService.nextId();
	}
}
