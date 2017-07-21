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

import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;
import com.xukaiqiang.gb.mgt.protocol.ContractCreateRequest;
import com.xukaiqiang.gb.mgt.protocol.ContractListResponse;
import com.xukaiqiang.gb.mgt.protocol.ContractPageResponse;
import com.xukaiqiang.gb.mgt.protocol.ContractResponse;
import com.xukaiqiang.gb.mgt.protocol.ContractUpdateRequest;
import com.xukaiqiang.gb.mgt.service.ContractService;
import com.xukaiqiang.gb.mgt.util.Urls;
import com.xukaiqiang.gb.mgt.util.Views;
import com.xukaiqiang.gb.orm.entity.Contract;
import com.xukaiqiang.gb.orm.protocol.ContractFilterRequest;

/**
 * 联系方式管理控制器
 */
@Controller
public class ContractController extends BaseController {

	private static final String BINDING = "CONTRACT_BINDING";

	@Autowired
	private ContractService contractService;
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
	public Contract getBinding(@RequestParam(value = "id", required = false) Integer id) {
		if (!isBindingRequest()) {
			return new Contract();
		}
		return contractService.findContract(id);
	}

	/**
	 * 联系方式管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CONTRACT_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CONTRACT_INDEX;
	}

	/**
	 * 联系方式首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CONTRACT, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_CONTRACT;
	}

	/**
	 * 联系方式列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CONTRACT_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public ContractPageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final ContractFilterRequest filter, Locale locale) {
		ContractPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return contractService.findContractPage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, ContractPageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<Contract> payload = (Page<Contract>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return ContractPageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 联系方式列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CONTRACT_LIST, method = RequestMethod.GET)
	@ResponseBody
	public ContractListResponse list(final ContractFilterRequest filter, Locale locale) {
		ContractListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return contractService.findContracts(filter);
			}
		}, messageSource, null, locale, ContractListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<Contract> payload = (List<Contract>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return ContractListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看联系方式
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.CONTRACT_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public ContractResponse view(@PathVariable("id") final Integer id, Locale locale) {
		ContractResponse contractResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return contractService.findContract(id);
			}
		}, messageSource, null, locale, ContractResponse.class);

		if (!contractResponse.isSuccess()) {
			return contractResponse;
		}

		Contract payload = (Contract) contractResponse.getPayload();
		if(payload == null) {
			return contractResponse;
		}

		contractResponse.setPayload(null);
		return ContractResponse.buildResponse(contractResponse, payload);
	}

	/**
	 * 创建联系方式
	 * 
	 * @param contract
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CONTRACT_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public ContractResponse create(@Valid ContractCreateRequest createRequtest, BindingResult result, final Contract contract, Locale locale) {
		ContractResponse contractResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return contractService.createContract(contract);
			}
		}, messageSource, result, locale, ContractResponse.class);

		if (!contractResponse.isSuccess()) {
			return contractResponse;
		}

		Contract payload = (Contract) contractResponse.getPayload();
		if(payload == null) {
			return contractResponse;
		}

		contractResponse.setId(payload.getId());
		contractResponse.setPayload(null);
		return contractResponse;
	}

	/**
	 * 修改联系方式
	 * 
	 * @param contract
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CONTRACT_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public ContractResponse update(@Valid ContractUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final Contract contract, Locale locale) {
		ContractResponse contractResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return contractService.updateContract(contract);
			}
		}, messageSource, result, locale, ContractResponse.class);

		if (!contractResponse.isSuccess()) {
			return contractResponse;
		}

		Contract payload = (Contract) contractResponse.getPayload();
		if(payload == null) {
			return contractResponse;
		}

		contractResponse.setId(payload.getId());
		contractResponse.setPayload(null);
		return contractResponse;
	}

	/**
	 * 删除联系方式
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CONTRACT_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Integer id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				contractService.removeContract(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
