package com.xukaiqiang.gu.mgt.controller;

import java.text.ParseException;
import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import com.xukaiqiang.gu.mgt.protocol.CuUsSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsSResponse;
import com.xukaiqiang.gu.mgt.protocol.CuUsSUpdateRequest;
import com.xukaiqiang.gu.mgt.service.CuBrSService;
import com.xukaiqiang.gu.mgt.service.CuUsLoginLService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuBrS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.util.YnState;
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
 * 用户表管理控制器
 */
@Controller
public class CuUsSController extends BaseController{

	private static final String BINDING = "CUUSS_BINDING";

	@Autowired
	private CuUsSService cuussService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private CuBrSService cubrsService;
	@Autowired
	private SharedVars appVars;
	@Autowired
	private CuUsLoginLService cuusloginlService;
	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
	 * @param id
	 * @return
	 */
	@ModelAttribute(BINDING)
	public CuUsS getBinding(
			@RequestParam(value = "id", defaultValue = SharedVars.INVALID_IDSTRING) Long id) {
		if (!SharedVars.validateID(id)) {
			return new CuUsS();
		}
		return cuussService.findCuUsS(id);
	}

	/**
	 * 用户表管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_INDEX, method = RequestMethod.GET)
	public String index(CuUsSFilterRequest filter, Model model, Locale locale) {
		List<CuBrS> checkCuBrSList = cubrsService.checkCuBrSList2();
		model.addAttribute("checkCuBrSList", checkCuBrSList);
		listPage(null,null,null,locale).addAttributeTo(model);
		return Views.CUUSS_INDEX;
	}
	/**
	 * 用户管理添加首屏
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_ADDINDEX, method = RequestMethod.GET)
	public String addIndex(CuUsSFilterRequest filter, Model model, Locale locale) {
		List<CuBrS> checkCuBrSList = cubrsService.checkCuBrSList2();
		model.addAttribute("checkCuBrSList", checkCuBrSList);
		return Views.CUUSS_ADDINDEX;
	}
	/**
	 * 用户管理修改首屏
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_UPDATEINDEX, method = RequestMethod.GET)
	public String updateIndex(CuUsSFilterRequest filter, Model model, Locale locale) {
		List<CuBrS> checkCuBrSList = cubrsService.checkCuBrSList2();
		model.addAttribute("checkCuBrSList", checkCuBrSList);
		return Views.CUUSS_UPDATEINDEX;
	}
	/**
	 * 个人信息首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_INDEXSELF, method = RequestMethod.GET)
	public String indexSelf(CuUsSFilterRequest filter, Model model, Locale locale) {
		List<CuBrS> checkCuBrSList = cubrsService.checkCuBrSList2();
		model.addAttribute("checkCuBrSList", checkCuBrSList);
		return Views.CUUSS_INDEXSELF;
	}

	/**
	 * 用户表列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsSFilterRequest filter, Locale locale) {
		CuUsSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuussService.findCuUsSPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuUsSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuUsS> payload = (Page<CuUsS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 新增用户下的 主管信息查询
	 * 
	 * @param filter
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUS_FAEXE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsSPageResponse listfaexe(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuUsSFilterRequest filter, Locale locale) {
		    CuUsSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				filter.setExeYn(YnState.CODE_YN_YIN_Y);
				return cuussService.findCuUsSPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, CuUsSPageResponse.class);
		    if (!pageResponse.isSuccess()) {
				return pageResponse;
			}
		Page<CuUsS> payload = (Page<CuUsS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuUsSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 用户表列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUUSS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuUsSListResponse list(final CuUsSFilterRequest filter, Locale locale) {
		CuUsSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return null;
			}
		}, messageSource, null, locale, CuUsSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuUsS> payload = (List<CuUsS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuUsSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看用户表
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuUsSResponse view(@PathVariable("id") final Long id, Locale locale) {
		CuUsSResponse cuussResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuussService.findCuUsS(id);
			}
		}, messageSource, null, locale, CuUsSResponse.class);
		if (!cuussResponse.isSuccess()) {
			return cuussResponse;
		}
		CuUsS payload = (CuUsS) cuussResponse.getPayload();
		if (payload == null) {
			return cuussResponse;
		}

		cuussResponse.setPayload(null);
		return CuUsSResponse.buildResponse(cuussResponse, payload);
	}

	/**
	 * 登录用户信息
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_USERMESSAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuUsSResponse userMessage(Locale locale) {
		CuUsSResponse cuussResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuussService.userMessage();
			}
		}, messageSource, null, locale, CuUsSResponse.class);
		if (!cuussResponse.isSuccess()) {
			return cuussResponse;
		}
		CuUsS payload = (CuUsS) cuussResponse.getPayload();
		if (payload == null) {
			return cuussResponse;
		}

		cuussResponse.setPayload(null);
		return CuUsSResponse.buildResponse(cuussResponse, payload);
	}

	/**
	 * 创建用户表
	 * 
	 * @param cuuss
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuUsSResponse create(final CuUsS cuuss, BindingResult result,
			Locale locale) {
		CuUsSResponse cuussResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuussService.createCuUsS(cuuss);
			}
		}, messageSource, result, locale, CuUsSResponse.class);
		if (!cuussResponse.isSuccess()) {
			return cuussResponse;
		}
		CuUsS payload = (CuUsS) cuussResponse.getPayload();
		if (payload == null) {
			return cuussResponse;
		}
		cuussResponse.setId(payload.getId());
		cuussResponse.setPayload(null);
		return cuussResponse;
	}

	/**
	 * 修改用户表
	 * 
	 * @param cuuss
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage update(@Valid CuUsSUpdateRequest updateRequtest,
			BindingResult result, @ModelAttribute(BINDING) final CuUsS cuuss,
			Locale locale) {

		CuUsSResponse cuussResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuussService.updateToCuUsS(cuuss);
			}
		}, messageSource, result, locale, CuUsSResponse.class);
		if (!cuussResponse.isSuccess()) {
			return cuussResponse;
		}
		CuUsS payload = (CuUsS) cuussResponse.getPayload();
		if (payload == null) {
			return cuussResponse;
		}

		cuussResponse.setId(payload.getId());
		cuussResponse.setPayload(null);
		return cuussResponse;
	}

	/**
	 * 删除用户表
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Long id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuussService.removeCuUsS(id);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 修改个人信息
	 * 
	 * @param cuuss
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_UPDATECUUS, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateCuUs(@Valid CuUsSUpdateRequest updateRequtest,
			BindingResult result, @ModelAttribute(BINDING) final CuUsS cuuss,
			Locale locale) {
		CuUsSResponse cuussResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {

				return cuussService.updateCuUsS(cuuss);
			}
		}, messageSource, result, locale, CuUsSResponse.class);
		if (!cuussResponse.isSuccess()) {
			return cuussResponse;
		}
		CuUsS payload = (CuUsS) cuussResponse.getPayload();
		if (payload == null) {
			return cuussResponse;
		}

		cuussResponse.setId(payload.getId());
		cuussResponse.setPayload(null);
		return cuussResponse;
	}

	/**
	 * 激活状态
	 * 
	 * @param updateRequtest
	 * @param cuuss
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_UPDATEJH, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateJH(@Valid CuUsSUpdateRequest updateRequtest,
			BindingResult result, @PathVariable("id") final Long id,
			Locale locale) {
		CuUsSResponse cuussResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuussService.updateJH(id);
			}
		}, messageSource, result, locale, CuUsSResponse.class);

		if (cuussResponse.isSuccess()) {
			CuUsS payload = (CuUsS) cuussResponse.getPayload();
			if (payload == null) {
				return cuussResponse;
			}

			cuussResponse.setId(payload.getId());
			cuussResponse.setPayload(null);
		}
		return cuussResponse;
	}

	/**
	 * 状态失效
	 * 
	 * @param updateRequtest
	 * @param cuuss
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_UPDATESX, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage updateSX(@Valid CuUsSUpdateRequest updateRequtest,
			BindingResult result, @PathVariable("id") final Long id,
			Locale locale) {
		CuUsSResponse cuussResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuussService.updateSX(id);
			}
		}, messageSource, result, locale, CuUsSResponse.class);
		if (cuussResponse.isSuccess()) {
			CuUsS payload = (CuUsS) cuussResponse.getPayload();
			if (payload == null) {
				return cuussResponse;
			}

			cuussResponse.setId(payload.getId());
			cuussResponse.setPayload(null);
		}
		return cuussResponse;
	}

	/**
	 * 重置密码
	 * 
	 * @param updateRequtest
	 * @param id
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_RESETPWD, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage resetPwd(@PathVariable("id") final Long id,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuussService.resetPwd(id);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 用户编号是否存在
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_IDEXIST, method = RequestMethod.POST)
	@ResponseBody
	public boolean idExist(CuUsS cuuss) {
		return cuussService.idExist(cuuss);
	}

	/**
	 * 登录名称是否存在
	 * 
	 * @param loginNa
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_IOGINNAEXIST, method = RequestMethod.POST)
	@ResponseBody
	public boolean loginNaExist(CuUsS cuuss) {
		return cuussService.loginNaExist(cuuss);
	}

	/**
	 * 获取登录用户名
	 * 
	 * @param id
	 * @return
	 * @throws ParseException 
	 */
	@RequestMapping(value = Urls.CUUSS_LONGINNA, method = RequestMethod.GET)
	public String AllIndex(CuUsSFilterRequest filter, Model model, Locale locale) throws ParseException {
		CuUsS cuUsS = cuussService.userMessage();
		String loginNa = cuUsS.getLoginNa();
		String usNa = cuUsS.getUsNa();
		String brNa = cuUsS.getCubrs().getBrNa();
		model.addAttribute("loginNa", loginNa);
		model.addAttribute("usNa", usNa);
		model.addAttribute("brNa", brNa);
		String loginTime = cuusloginlService.findPrevLoginTm(cuUsS.getId());
		model.addAttribute("loginTime", loginTime);
		return Views.CUUSS_AllINDEX;
	}

	/**
	 * 修改密码面包屑数据
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_CHANGEPWD, method = RequestMethod.GET)
	public String changepwd(CuUsSFilterRequest filter, Model model,
			Locale locale) {
		return Views.CUUSS_CHANGEPWD;
	}

	/**
	 * 获取下一个ID
	 * 
	 * @param loginNa
	 * @return
	 */
	@RequestMapping(value = Urls.CUUSS_NEXTID, method = RequestMethod.GET)
	@ResponseBody
	public CuUsS nextId() {
		return cuussService.nextId();
	}
}
