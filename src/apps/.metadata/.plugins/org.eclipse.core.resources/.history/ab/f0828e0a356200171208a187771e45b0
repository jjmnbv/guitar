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
import com.xukaiqiang.g.mgt.protocol.StoreCreateRequest;
import com.xukaiqiang.g.mgt.protocol.StoreListResponse;
import com.xukaiqiang.g.mgt.protocol.StorePageResponse;
import com.xukaiqiang.g.mgt.protocol.StoreResponse;
import com.xukaiqiang.g.mgt.protocol.StoreUpdateRequest;
import com.xukaiqiang.g.mgt.service.StoreService;
import com.xukaiqiang.g.mgt.util.Urls;
import com.xukaiqiang.g.mgt.util.Views;
import com.xukaiqiang.g.orm.entity.Store;
import com.xukaiqiang.g.orm.protocol.StoreFilterRequest;

/**
 * 门店管理控制器
 */
@Controller
public class StoreController extends BaseController {

	private static final String BINDING = "STORE_BINDING";

	@Autowired
	private StoreService storeService;
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
	public Store getBinding(@RequestParam(value = "id", required = false) Integer id) {
		if (!isBindingRequest()) {
			return new Store();
		}
		return storeService.findStore(id);
	}

	/**
	 * 门店管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.STORE_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.STORE_INDEX;
	}

	/**
	 * 门店首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_STORE, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_STORE;
	}

	/**
	 * 门店列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.STORE_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public StorePageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final StoreFilterRequest filter, Locale locale) {
		StorePageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return storeService.findStorePage(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, StorePageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<Store> payload = (Page<Store>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return StorePageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * 门店列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.STORE_LIST, method = RequestMethod.GET)
	@ResponseBody
	public StoreListResponse list(final StoreFilterRequest filter, Locale locale) {
		StoreListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return storeService.findStores(filter);
			}
		}, messageSource, null, locale, StoreListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<Store> payload = (List<Store>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return StoreListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看门店
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value = Urls.STORE_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public StoreResponse view(@PathVariable("id") final Integer id, Locale locale) {
		StoreResponse storeResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return storeService.findStore(id);
			}
		}, messageSource, null, locale, StoreResponse.class);

		if (!storeResponse.isSuccess()) {
			return storeResponse;
		}

		Store payload = (Store) storeResponse.getPayload();
		if(payload == null) {
			return storeResponse;
		}

		storeResponse.setPayload(null);
		return StoreResponse.buildResponse(storeResponse, payload);
	}

	/**
	 * 创建门店
	 * 
	 * @param store
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.STORE_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public StoreResponse create(@Valid StoreCreateRequest createRequtest, BindingResult result, final Store store, Locale locale) {
		StoreResponse storeResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return storeService.createStore(store);
			}
		}, messageSource, result, locale, StoreResponse.class);

		if (!storeResponse.isSuccess()) {
			return storeResponse;
		}

		Store payload = (Store) storeResponse.getPayload();
		if(payload == null) {
			return storeResponse;
		}

		storeResponse.setId(payload.getId());
		storeResponse.setPayload(null);
		return storeResponse;
	}

	/**
	 * 修改门店
	 * 
	 * @param store
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.STORE_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public StoreResponse update(@Valid StoreUpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final Store store, Locale locale) {
		StoreResponse storeResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return storeService.updateStore(store);
			}
		}, messageSource, result, locale, StoreResponse.class);

		if (!storeResponse.isSuccess()) {
			return storeResponse;
		}

		Store payload = (Store) storeResponse.getPayload();
		if(payload == null) {
			return storeResponse;
		}

		storeResponse.setId(payload.getId());
		storeResponse.setPayload(null);
		return storeResponse;
	}

	/**
	 * 删除门店
	 * 
	 * @param id
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.STORE_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("id") final Integer id, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				storeService.removeStore(id);
				return null;
			}
		}, messageSource, null, locale);
	}

}
