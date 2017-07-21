package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuBrSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuBrSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuBrSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuBrSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuBrSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuBrSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuBrS;
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
 * 机构管理控制器
 */
@Controller
public class CuBrSController extends BaseController{

	private static final String BINDING = "CUBRS_BINDING";

	@Autowired
	private CuBrSService cubrsService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param brNo
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuBrS getBinding(
			@RequestParam(value = "brNo", required = false) String brNo) {
		if (!SharedVars.validateID(brNo)) {
			return new CuBrS();
		}
		return cubrsService.findCuBrS(brNo);
	}

	/**
	 * 机构管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_INDEX, method = RequestMethod.GET)
	public String index(CuBrSFilterRequest filter, Model model, Locale locale) {
		List<CuBrS> checkCuBrSList = cubrsService.checkCuBrSList();
		model.addAttribute("checkCuBrSList", checkCuBrSList);
		listPage(null, null, null, locale).addAttributeTo(model);
		return Views.CUBRS_INDEX;
	}
	/**
	 * 机构管理添加首屏
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_ADDINDEX, method = RequestMethod.GET)
	public String addIndex(CuBrSFilterRequest filter, Model model, Locale locale) {
		List<CuBrS> checkCuBrSList = cubrsService.checkCuBrSList();
		model.addAttribute("checkCuBrSList", checkCuBrSList);
		return Views.CUBRS_ADDINDEX;
	}
	
	/**
	 * 机构管理修改首屏
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_UPDATEINDEX, method = RequestMethod.GET)
	public String updateIndex(CuBrSFilterRequest filter, Model model, Locale locale) {
		List<CuBrS> checkCuBrSList = cubrsService.checkCuBrSList();
		model.addAttribute("checkCuBrSList", checkCuBrSList);
		return Views.CUBRS_UPDATEINDEX;
	}
	
	/**
	 * 机构列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUBRS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuBrSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuBrSFilterRequest filter, Locale locale) {
		CuBrSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cubrsService.findCuBrSPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuBrSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuBrS> payload = (Page<CuBrS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuBrSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户选择机构列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSCUBRS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuBrSPageResponse CuUSListPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuBrSFilterRequest filter, Locale locale) {
		CuBrSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cubrsService.findCuBrSPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuBrSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuBrS> payload = (Page<CuBrS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuBrSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 机构列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUBRS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuBrSListResponse list(final CuBrSFilterRequest filter, Locale locale) {
		CuBrSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cubrsService.findCuBrSs(filter);
			}
		}, messageSource, null, locale, CuBrSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuBrS> payload = (List<CuBrS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuBrSListResponse.buildListResponse(listResponse, payload);
	}
	/**
	 * 查看上级机构
	 * 
	 * @param brNo
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUBRS_SHOWPREV, method = RequestMethod.GET)
	@ResponseBody
	public CuBrSListResponse showPrev(@PathVariable("brLevQt") final Integer brLevQt,
			@PathVariable("brNo") final String brNo,
			Locale locale) {
		CuBrSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cubrsService.findPrevCuBrS(brLevQt,brNo);
			}
		}, messageSource, null, locale, CuBrSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuBrS> payload = (List<CuBrS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuBrSListResponse.buildListResponse(listResponse, payload);
	}
	/**
	 * 查看机构
	 * 
	 * @param brNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuBrSResponse view(@PathVariable("brNo") final String brNo,
			Locale locale) {
		CuBrSResponse cubrsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cubrsService.findCuBrS(brNo);
			}
		}, messageSource, null, locale, CuBrSResponse.class);

		if (!cubrsResponse.isSuccess()) {
			return cubrsResponse;
		}
		CuBrS payload = (CuBrS) cubrsResponse.getPayload();
		if (payload == null) {
			return cubrsResponse;
		}

		cubrsResponse.setPayload(null);
		return CuBrSResponse.buildResponse(cubrsResponse, payload);
	}

	/**
	 * 机构是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CuBrS_NOTEXISTS, method = RequestMethod.POST)
	@ResponseBody
	public Boolean notexists(CuBrSFilterRequest cuBrS) {
		return !cubrsService.exists(cuBrS);
	}

	/**
	 * 创建机构
	 * 
	 * @param cubrs
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuBrSResponse create(@Valid CuBrSCreateRequest createRequtest,
			BindingResult result, final CuBrS cubrs, Locale locale) {
		CuBrSResponse cubrsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cubrsService.createCuBrS(cubrs);
			}
		}, messageSource, result, locale, CuBrSResponse.class);

		if (!cubrsResponse.isSuccess()) {
			return cubrsResponse;
		}
		CuBrS payload = (CuBrS) cubrsResponse.getPayload();
		if (payload == null) {
			return cubrsResponse;
		}

		cubrsResponse.setBrNo(payload.getBrNo());
		cubrsResponse.setPayload(null);
		return cubrsResponse;
	}

	/**
	 * 修改机构
	 * 
	 * @param cubrs
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuBrSUpdateRequest updateRequtest,
			BindingResult result, @ModelAttribute(BINDING) final CuBrS cubrs,
			Locale locale) {
		CuBrSResponse cubrsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cubrsService.updateCuBrS(cubrs);
			}
		}, messageSource, result, locale, CuBrSResponse.class);

		if (!cubrsResponse.isSuccess()) {
			return cubrsResponse;
		}
		CuBrS payload = (CuBrS) cubrsResponse.getPayload();
		if (payload == null) {
			return cubrsResponse;
		}

		cubrsResponse.setBrNo(payload.getBrNo());
		cubrsResponse.setPayload(null);
		return cubrsResponse;
	}

	/**
	 * 删除机构
	 * 
	 * @param brNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("brNo") final String brNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cubrsService.removeCuBrS(brNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 更新状态为激活状态
	 * 
	 * @param
	 * @param
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_UPDATEJH, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateJH(@PathVariable("brNo") final String brNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cubrsService.updateJH(brNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 更新状态为失效
	 * 
	 * @param
	 * @param
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_UPDATESX, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateSX(@PathVariable("brNo") final String brNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cubrsService.updateSX(brNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 机构编号是否存在
	 * 
	 * @param brNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_BRNOEXIST, method = RequestMethod.POST)
	@ResponseBody
	public boolean brNoExist(CuBrS cubrs) {
		return cubrsService.brNoExist(cubrs);
	}

	/**
	 * 机构名称是否存在
	 * 
	 * @param brNa
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_BRNAEXIST, method = RequestMethod.POST)
	@ResponseBody
	public boolean brNaExist(CuBrS cubrs) {
		return cubrsService.brNaExist(cubrs);
	}

	/**
	 * 获取nextId
	 * 
	 * @param brNa
	 * @return
	 */
	@RequestMapping(value = Urls.CUBRS_NEXTID, method = RequestMethod.GET)
	@ResponseBody
	public CuBrS nextId() {
		return cubrsService.nextId();
	}
}
