package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuRoRiSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuRoRiSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuRoRiSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuRoRiSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuRoRiSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuRoRiSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuRoRiSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuRoRiS;
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
 * 角色权限管理控制器
 */
@Controller
public class CuRoRiSController extends BaseController{

	private static final String BINDING = "CURORIS_BINDING";

	@Autowired
	private CuRoRiSService curorisService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param roNo
	 * @param resNo
	 * @param resActCd
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuRoRiS getBinding(
			@RequestParam(value = "roNo", required = false) String roNo,
			@RequestParam(value = "resNo", required = false) String resNo,
			@RequestParam(value = "resActCd", required = false) String resActCd) {
		if (!SharedVars.validateID(roNo) || !SharedVars.validateID(resNo)
				|| !SharedVars.validateID(resActCd)) {
			return new CuRoRiS();
		}
		return curorisService.findCuRoRiS(roNo, resNo, resActCd);
	}

	/**
	 * 角色权限管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CURORIS_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CURORIS_INDEX;
	}

	/**
	 * 角色权限列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CURORIS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuRoRiSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuRoRiSFilterRequest filter, Locale locale) {
		CuRoRiSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curorisService.findCuRoRiSPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuRoRiSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuRoRiS> payload = (Page<CuRoRiS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuRoRiSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 角色权限列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CURORIS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuRoRiSListResponse list(final CuRoRiSFilterRequest filter,
			Locale locale) {
		CuRoRiSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curorisService.findCuRoRiSs(filter);
			}
		}, messageSource, null, locale, CuRoRiSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuRoRiS> payload = (List<CuRoRiS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuRoRiSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看角色权限
	 * 
	 * @param roNo
	 * @param resNo
	 * @param resActCd
	 * @return
	 */
	@RequestMapping(value = Urls.CURORIS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuRoRiSResponse view(@RequestParam("roNo") final String roNo,
			@RequestParam("resNo") final String resNo,
			@RequestParam("resActCd") final String resActCd, Locale locale) {
		CuRoRiSResponse curorisResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curorisService.findCuRoRiS(roNo, resNo, resActCd);
			}
		}, messageSource, null, locale, CuRoRiSResponse.class);
		if (!curorisResponse.isSuccess()) {
			return curorisResponse;
		}
		CuRoRiS payload = (CuRoRiS) curorisResponse.getPayload();
		if (payload == null) {
			return curorisResponse;
		}

		curorisResponse.setPayload(null);
		return CuRoRiSResponse.buildResponse(curorisResponse, payload);
	}

	/**
	 * 创建角色权限
	 * 
	 * @param curoris
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURORIS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuRoRiSResponse create(@Valid CuRoRiSCreateRequest createRequtest,
			BindingResult result, final CuRoRiS curoris, Locale locale) {
		CuRoRiSResponse curorisResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curorisService.createCuRoRiS(curoris);
			}
		}, messageSource, result, locale, CuRoRiSResponse.class);
		if (!curorisResponse.isSuccess()) {
			return curorisResponse;
		}
		CuRoRiS payload = (CuRoRiS) curorisResponse.getPayload();
		if (payload == null) {
			return curorisResponse;
		}

		curorisResponse.setRoNo(payload.getRoNo());
		curorisResponse.setResNo(payload.getResNo());
		curorisResponse.setResActCd(payload.getResActCd());
		curorisResponse.setResActCdList(payload.getResActCdList());
		curorisResponse.setPayload(null);
		return curorisResponse;
	}

	/**
	 * 修改角色权限
	 * 
	 * @param curoris
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURORIS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuRoRiSUpdateRequest updateRequtest,
			BindingResult result,
			@ModelAttribute(BINDING) final CuRoRiS curoris, Locale locale) {
		CuRoRiSResponse curorisResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curorisService.roupdateCuRoRiS(curoris);
			}
		}, messageSource, result, locale, CuRoRiSResponse.class);
		if (!curorisResponse.isSuccess()) {
			return curorisResponse;
		}
		CuRoRiS payload = (CuRoRiS) curorisResponse.getPayload();
		if (payload == null) {
			return curorisResponse;
		}

		curorisResponse.setRoNo(payload.getRoNo());
		curorisResponse.setResNo(payload.getResNo());
		curorisResponse.setResActCd(payload.getResActCd());
		curorisResponse.setResActCdList(payload.getResActCdList());
		curorisResponse.setPayload(null);
		return curorisResponse;
	}

	/**
	 * 删除角色权限
	 * 
	 * @param roNo
	 * @param resNo
	 * @param resActCd
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURORIS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@RequestParam("roNo") final String roNo,
			@RequestParam("resNo") final String resNo,
			@RequestParam("resActCd") final String resActCd, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				curorisService.removeCuRoRiS(roNo, resNo, resActCd);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 查看角色权限批量
	 * 
	 * @param roNo
	 * @param resNo
	 * @param resActCd
	 * @return
	 */
	@RequestMapping(value = Urls.CURORIS_VIEWLIST, method = RequestMethod.GET)
	@ResponseBody
	public CuRoRiSResponse viewList(@PathVariable("roNo") final String roNo,
			@PathVariable("resNo") final String resNo, Locale locale) {
		CuRoRiSResponse curorisResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curorisService.findCuRoRiSList(roNo, resNo);
			}
		}, messageSource, null, locale, CuRoRiSResponse.class);
		if (!curorisResponse.isSuccess()) {
			return curorisResponse;
		}
		CuRoRiS payload = (CuRoRiS) curorisResponse.getPayload();
		if (payload == null) {
			return curorisResponse;
		}

		curorisResponse.setPayload(null);
		return CuRoRiSResponse.buildResponse(curorisResponse, payload);
	}

}
