package com.xukaiqiang.gb.mgt.util;

public abstract class Views {

	/**
	 * 联系方式管理/首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#index()
	 */
	public static final String CONTRACT_INDEX = "gb/contract/index";
	/**
	 * 联系方式首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_CONTRACT = "gb/script/contract";

	/**
	 * 教育管理/首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#index()
	 */
	public static final String EDUCATION_INDEX = "gb/education/index";
	/**
	 * 教育首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_EDUCATION = "gb/script/education";

	/**
	 * 工作管理/首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#index()
	 */
	public static final String JOB_INDEX = "gb/job/index";
	/**
	 * 工作首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_JOB = "gb/script/job";

	/**
	 * 门店管理/首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#index()
	 */
	public static final String STORE_INDEX = "gb/store/index";
	/**
	 * 门店首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_STORE = "gb/script/store";

	/**
	 * 作品管理/首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#index()
	 */
	public static final String WORKS_INDEX = "gb/works/index";
	/**
	 * 作品首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_WORKS = "gb/script/works";

}
