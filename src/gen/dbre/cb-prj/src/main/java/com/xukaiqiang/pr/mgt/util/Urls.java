package com.xukaiqiang.pr.mgt.util;

public abstract class Urls {

	/** 
	 * 商户管理首页
	 *
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#index()
	 */
	public static final String MERCHANTPR_INDEX = "/pr/merchantpr/index";
	/** 
	 * 商户首页／首屏数据
	 *
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_MERCHANTPR = "/script/pr/merchantpr";
	/** 
	 * 商户列表分页
	 * 
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#listPage(Integer, Integer, com.xukaiqiang.pr.mgt.protocol.MerchantPrFilterRequest, java.util.Locale)
	 */
	public static final String MERCHANTPR_PAGE = "/pr/merchantpr/page/{pageNumber}";
	/** 
	 * 商户列表
	 * 
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#list(com.xukaiqiang.pr.mgt.protocol.MerchantPrFilterRequest, java.util.Locale)
	 */
	public static final String MERCHANTPR_LIST = "/pr/merchantpr/list";
	/** 
	 * 查看商户
	 * 
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#view(Long, java.util.Locale)
	 */
	public static final String MERCHANTPR_VIEW = "/pr/merchantpr/view/{coId}";
	/** 
	 * 创建商户
	 * 
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#create(com.xukaiqiang.pr.mgt.protocol.MerchantPrCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.pr.orm.entity.MerchantPr, java.util.Locale)
	 */
	public static final String MERCHANTPR_CREATE = "/pr/merchantpr/create";
	/** 
	 * 修改商户
	 * 
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#update(com.xukaiqiang.pr.mgt.protocol.MerchantPrUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.pr.orm.entity.MerchantPr, java.util.Locale)
	 */
	public static final String MERCHANTPR_UPDATE = "/pr/merchantpr/update";
	/** 
	 * 删除商户
	 * 
	 * @see com.xukaiqiang.pr.mgt.controller.MerchantPrController#remove(Long, java.util.Locale)
	 */
	public static final String MERCHANTPR_REMOVE = "/pr/merchantpr/remove/{coId}";

}
