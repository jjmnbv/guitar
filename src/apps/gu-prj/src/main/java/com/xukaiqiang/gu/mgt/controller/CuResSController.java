package com.xukaiqiang.gu.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuIconSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuIconSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuResSCreateRequest;
import com.xukaiqiang.gu.mgt.protocol.CuResSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuResSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuResSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuResSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuResSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuIconSService;
import com.xukaiqiang.gu.mgt.service.CuResSService;
import com.xukaiqiang.gu.mgt.service.CuSyCService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuIconS;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.gu.orm.entity.CuSyC;
import com.xukaiqiang.gu.orm.entity.ListCuResS;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.JsTreeNode;
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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 系统资源管理控制器
 */
@Controller
public class CuResSController extends BaseController{

	private static final String BINDING = "CURESS_BINDING";

	@Autowired
	private CuResSService curessService;
	@Autowired
	private CuSyCService cusycservice;
	@Autowired
	private CuIconSService cuiconsService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param resNo
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuResS getBinding(
			@RequestParam(value = "resNo", required = false) String resNo,
			ListCuResS list, HttpServletRequest request) {
		if (!SharedVars.validateID(resNo)) {
			return new CuResS();
		}
		return curessService.findCuResS(resNo);
	}

	/**
	 * 系统资源管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_INDEX, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		List<CuSyC> resSyCdNames = cusycservice.resSyCdNames();
		List<CuIconS> cuIconSNames = cuiconsService.cuIconSNames();
		model.addAttribute("resSyCdNames", resSyCdNames);
		model.addAttribute("cuIconSNames", cuIconSNames);
		listPage(null, null, null, locale).addAttributeTo(model);
		return Views.CURESS_INDEX;
	}

	/**
	 * 系统资源列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CURESS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuResSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuResSFilterRequest filter, Locale locale) {
		CuResSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curessService.findCuResSPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuResSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuResS> payload = (Page<CuResS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuResSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 系统资源列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CURESS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuResSListResponse list(final CuResSFilterRequest filter,
			Locale locale) {
		CuResSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curessService.findCuResSs(filter);
			}
		}, messageSource, null, locale, CuResSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuResS> payload = (List<CuResS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuResSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看系统资源
	 * 
	 * @param resNo
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuResSResponse view(@PathVariable("resNo") final String resNo,
			Locale locale) {
		CuResSResponse curessResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curessService.findCuResS(resNo);
			}
		}, messageSource, null, locale, CuResSResponse.class);
		if (!curessResponse.isSuccess()) {
			return curessResponse;
		}
		CuResS payload = (CuResS) curessResponse.getPayload();
		if (payload == null) {
			return curessResponse;
		}

		curessResponse.setPayload(null);
		return CuResSResponse.buildResponse(curessResponse, payload);
	}

	/**
	 * 菜单名称是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_RESNAEXISTS, method = RequestMethod.POST)
	@ResponseBody
	public Boolean resnaexists(CuResSFilterRequest cuResS) {
		return curessService.resnaexists(cuResS);
	}

	/**
	 * 菜单编号是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_RESNOEXISTS, method = RequestMethod.POST)
	@ResponseBody
	public Boolean resnoexists(CuResSFilterRequest cuResS) {
		return curessService.resnoexists(cuResS);
	}

	/**
	 * 创建系统资源
	 * 
	 * @param curess
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuResSResponse create(@Valid CuResSCreateRequest createRequtest,
			BindingResult result, final CuResS curess, Locale locale) {
		CuResSResponse curessResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curessService.createCuResS(curess);
			}
		}, messageSource, result, locale, CuResSResponse.class);
		if (!curessResponse.isSuccess()) {
			return curessResponse;
		}
		CuResS payload = (CuResS) curessResponse.getPayload();
		if (payload == null) {
			return curessResponse;
		}

		curessResponse.setResNo(payload.getResNo());
		curessResponse.setPayload(null);
		return curessResponse;
	}

	/**
	 * 修改系统资源
	 * 
	 * @param curess
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuResSUpdateRequest updateRequtest,
			BindingResult result, @ModelAttribute(BINDING) final CuResS curess,
			Locale locale) {
		CuResSResponse curessResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return curessService.updateCuResS(curess);
			}
		}, messageSource, result, locale, CuResSResponse.class);
		if (!curessResponse.isSuccess()) {
			return curessResponse;
		}
		CuResS payload = (CuResS) curessResponse.getPayload();
		if (payload == null) {
			return curessResponse;
		}

		curessResponse.setResNo(payload.getResNo());
		curessResponse.setPayload(null);
		return curessResponse;
	}

	/**
	 * 删除系统资源
	 * 
	 * @param resNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("resNo") final String resNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				curessService.removeCuResS(resNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 菜单导航
	 * 
	 * 
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_MENU, method = RequestMethod.GET)
	@ResponseBody
	public JsTreeNode menu(Locale locale) {
		return curessService.menuJsTrees();
	}

	/**
	 * 角色权限菜单导航
	 * 
	 * 
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_RORISMENU, method = RequestMethod.GET)
	@ResponseBody
	public JsTreeNode rorismenu(@PathVariable(value = "roNo") String roNo,
			Locale locale) {
		return curessService.findUserTree(roNo);
	}
	/**
	 * 角色权限菜单预览
	 * 
	 * 
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_VIEWALLRORIS, method = RequestMethod.GET)
	@ResponseBody
	public JsTreeNode viewAllRoRiS(@PathVariable(value = "allRoNo") String allRoNo) {
		return curessService.findRonoTree(allRoNo);
	}
	
	
	/**
	 * 菜单升降级和上下移动
	 * 
	 * @param updateRequtest
	 * @param curesss
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_MENUHAUL, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage menuHaul(@RequestBody final List<CuResS> curesss,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				CuResS cuResS = curesss.get(0);
				System.out.println(cuResS.getDispOr());
				curessService.menuHaul(curesss);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 菜单图标名称列表
	 * 
	 * @param filter
	 * @param locale
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CURESS_CUICONSNAMES, method = RequestMethod.GET)
	@ResponseBody
	public CuIconSListResponse cuIconSNames(final CuIconSFilterRequest filter,
			Locale locale) {
		CuIconSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuiconsService.cuIconSNames();
			}
		}, messageSource, null, locale, CuIconSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuIconS> payload = (List<CuIconS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuIconSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 获取下一个ID
	 * 
	 * @param loginNa
	 * @return
	 */
	@RequestMapping(value = Urls.CURESS_CUUSS_NEXTID, method = RequestMethod.GET)
	@ResponseBody
	public CuResS nextId() {
		return curessService.nextId();
	}

}
