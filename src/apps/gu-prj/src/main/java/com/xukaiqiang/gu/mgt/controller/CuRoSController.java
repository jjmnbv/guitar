package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuRoSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuRoSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuRoSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuRoSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuRoSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuRoSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuRoS;
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
 * 角色管理控制器
 */
@Controller
public class CuRoSController extends BaseController{

	private static final String BINDING = "CUROS_BINDING";

	@Autowired
	private CuRoSService curosService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param roNo
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuRoS getBinding(
			@RequestParam(value = "roNo", required = false) String roNo) {
		if (!SharedVars.validateID(roNo)) {
			return new CuRoS();
		}
		return curosService.findCuRoS(roNo);
	}

	/**
	 * 角色管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_INDEX, method = RequestMethod.GET)
	public String index(CuRoSFilterRequest filter, Model model, Locale locale) {
		listPage(null, null, filter, locale).addAttributeTo(model);
		return Views.CUROS_INDEX;
	}
	
	/**
	 * 角色管理首屏/添加
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_ADDINDEX, method = RequestMethod.GET)
	public String addIndex(CuRoSFilterRequest filter, Model model, Locale locale) {
		return Views.CUROS_ADDINDEX;
	}
	
	/**
	 * 角色管理首屏/修改
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_UPDATEINDEX, method = RequestMethod.GET)
	public String updateIndex(CuRoSFilterRequest filter, Model model, Locale locale) {
		return Views.CUROS_UPDATEINDEX;
	}
	
	/**
	 * 角色列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUROS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuRoSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuRoSFilterRequest filter, Locale locale) {
		CuRoSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.findCuRoSPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuRoSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuRoS> payload = (Page<CuRoS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuRoSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户选择角色列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSCUROS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuRoSPageResponse cuusListPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuRoSFilterRequest filter, Locale locale) {
		CuRoSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.findCuRoSPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuRoSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuRoS> payload = (Page<CuRoS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuRoSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 角色列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUROS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuRoSListResponse list(final CuRoSFilterRequest filter, Locale locale) {
		CuRoSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.findCuRoSs(filter);
			}
		}, messageSource, null, locale, CuRoSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuRoS> payload = (List<CuRoS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuRoSListResponse.buildListResponse(listResponse, payload);
	}
	/**
	 * 权限管理角色列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUROS_RORISLIST, method = RequestMethod.GET)
	@ResponseBody
	public CuRoSListResponse roRiSList(final CuRoSFilterRequest filter, Locale locale) {
		CuRoSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.findCuRoSs(filter);
			}
		}, messageSource, null, locale, CuRoSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuRoS> payload = (List<CuRoS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuRoSListResponse.buildListResponse(listResponse, payload);
	}
	/**
	 * 查看角色
	 * 
	 * @param roNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuRoSResponse view(@PathVariable("roNo") final String roNo,
			Locale locale) {
		CuRoSResponse curosResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.findCuRoS(roNo);
			}
		}, messageSource, null, locale, CuRoSResponse.class);
		if (!curosResponse.isSuccess()) {
			return curosResponse;
		}
		CuRoS payload = (CuRoS) curosResponse.getPayload();
		if (payload == null) {
			return curosResponse;
		}

		curosResponse.setPayload(null);
		return CuRoSResponse.buildResponse(curosResponse, payload);
	}

	/**
	 * 角色是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CuRoS_NOTEXISTS, method = RequestMethod.POST)
	@ResponseBody
	public Boolean notexists(CuRoSFilterRequest cuRoS) {
		return curosService.exists(cuRoS);
	}

	/**
	 * 角色名称是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_RONAEXISTS, method = RequestMethod.POST)
	@ResponseBody
	public Boolean ronaexists(CuRoSFilterRequest cuRoS) {
		return curosService.ronaexists(cuRoS);
	}

	/**
	 * 角色编号是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_RONOEXISTS, method = RequestMethod.POST)
	@ResponseBody
	public Boolean ronoexists(CuRoSFilterRequest cuRoS) {
		return curosService.ronoexists(cuRoS);
	}

	/**
	 * 创建角色
	 * 
	 * @param curos
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuRoSResponse create(@Valid CuRoSCreateRequest createRequtest,
			BindingResult result, final CuRoS curos, Locale locale) {
		CuRoSResponse curosResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.createCuRoS(curos);
			}
		}, messageSource, result, locale, CuRoSResponse.class);
		if (!curosResponse.isSuccess()) {
			return curosResponse;
		}
		CuRoS payload = (CuRoS) curosResponse.getPayload();
		if (payload == null) {
			return curosResponse;
		}

		curosResponse.setRoNo(payload.getRoNo());
		curosResponse.setPayload(null);
		return curosResponse;
	}

	/**
	 * 修改角色
	 * 
	 * @param curos
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuRoSUpdateRequest updateRequtest,
			BindingResult result, @ModelAttribute(BINDING) final CuRoS curos,
			Locale locale) {
		CuRoSResponse curosResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.updateCuRoS(curos);
			}
		}, messageSource, result, locale, CuRoSResponse.class);
		if (!curosResponse.isSuccess()) {
			return curosResponse;
		}
		CuRoS payload = (CuRoS) curosResponse.getPayload();
		if (payload == null) {
			return curosResponse;
		}

		curosResponse.setRoNo(payload.getRoNo());
		curosResponse.setPayload(null);
		return curosResponse;
	}

	/**
	 * 修改角色权限关联
	 * 
	 * @param curos
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_UPDATEPER, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updatePermissions(
			@Valid CuRoSUpdateRequest updateRequtest, BindingResult result,
			@ModelAttribute final CuRoS curos,
			@RequestParam("roNo") final String roNo, Locale locale) {
		CuRoSResponse curosResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curosService.updatePermissions(curos, roNo);
			}
		}, messageSource, result, locale, CuRoSResponse.class);
		if (!curosResponse.isSuccess()) {
			return curosResponse;
		}
		CuRoS payload = (CuRoS) curosResponse.getPayload();
		if (payload == null) {
			return curosResponse;
		}

		curosResponse.setRoNo(payload.getRoNo());
		curosResponse.setPayload(null);
		return curosResponse;
	}

	/**
	 * 删除角色
	 * 
	 * @param roNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("roNo") final String roNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				curosService.removeCuRoS(roNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 更新角色为 激活
	 * 
	 * @param
	 * @param
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_UPDATEJH, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateJH(@PathVariable("roNo") final String roNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				curosService.updateJH(roNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 更新角色为 失效
	 * 
	 * @param
	 * @param
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_UPDATESX, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateSX(@PathVariable("roNo") final String roNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				curosService.updateSX(roNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 获取下一个ID
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CUROS_NEXTID, method = RequestMethod.GET)
	@ResponseBody
	public CuRoS nextId() {
		return curosService.nextId();
	}

}
