package com.xukaiqiang.gb.mgt.util;

public abstract class Urls {

	/** 
	 * 联系方式管理首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#index()
	 */
	public static final String CONTRACT_INDEX = "/gb/contract/index";
	/** 
	 * 联系方式首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_CONTRACT = "/script/gb/contract";
	/** 
	 * 联系方式列表分页
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#listPage(Integer, Integer, com.xukaiqiang.gb.mgt.protocol.ContractFilterRequest, java.util.Locale)
	 */
	public static final String CONTRACT_PAGE = "/gb/contract/page/{pageNumber}";
	/** 
	 * 联系方式列表
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#list(com.xukaiqiang.gb.mgt.protocol.ContractFilterRequest, java.util.Locale)
	 */
	public static final String CONTRACT_LIST = "/gb/contract/list";
	/** 
	 * 查看联系方式
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#view(Integer, java.util.Locale)
	 */
	public static final String CONTRACT_VIEW = "/gb/contract/view/{id}";
	/** 
	 * 创建联系方式
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#create(com.xukaiqiang.gb.mgt.protocol.ContractCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Contract, java.util.Locale)
	 */
	public static final String CONTRACT_CREATE = "/gb/contract/create";
	/** 
	 * 修改联系方式
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#update(com.xukaiqiang.gb.mgt.protocol.ContractUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Contract, java.util.Locale)
	 */
	public static final String CONTRACT_UPDATE = "/gb/contract/update";
	/** 
	 * 删除联系方式
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.ContractController#remove(Integer, java.util.Locale)
	 */
	public static final String CONTRACT_REMOVE = "/gb/contract/remove/{id}";

	/** 
	 * 教育管理首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#index()
	 */
	public static final String EDUCATION_INDEX = "/gb/education/index";
	/** 
	 * 教育首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_EDUCATION = "/script/gb/education";
	/** 
	 * 教育列表分页
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#listPage(Integer, Integer, com.xukaiqiang.gb.mgt.protocol.EducationFilterRequest, java.util.Locale)
	 */
	public static final String EDUCATION_PAGE = "/gb/education/page/{pageNumber}";
	/** 
	 * 教育列表
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#list(com.xukaiqiang.gb.mgt.protocol.EducationFilterRequest, java.util.Locale)
	 */
	public static final String EDUCATION_LIST = "/gb/education/list";
	/** 
	 * 查看教育
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#view(Integer, java.util.Locale)
	 */
	public static final String EDUCATION_VIEW = "/gb/education/view/{id}";
	/** 
	 * 创建教育
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#create(com.xukaiqiang.gb.mgt.protocol.EducationCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Education, java.util.Locale)
	 */
	public static final String EDUCATION_CREATE = "/gb/education/create";
	/** 
	 * 修改教育
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#update(com.xukaiqiang.gb.mgt.protocol.EducationUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Education, java.util.Locale)
	 */
	public static final String EDUCATION_UPDATE = "/gb/education/update";
	/** 
	 * 删除教育
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.EducationController#remove(Integer, java.util.Locale)
	 */
	public static final String EDUCATION_REMOVE = "/gb/education/remove/{id}";

	/** 
	 * 工作管理首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#index()
	 */
	public static final String JOB_INDEX = "/gb/job/index";
	/** 
	 * 工作首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_JOB = "/script/gb/job";
	/** 
	 * 工作列表分页
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#listPage(Integer, Integer, com.xukaiqiang.gb.mgt.protocol.JobFilterRequest, java.util.Locale)
	 */
	public static final String JOB_PAGE = "/gb/job/page/{pageNumber}";
	/** 
	 * 工作列表
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#list(com.xukaiqiang.gb.mgt.protocol.JobFilterRequest, java.util.Locale)
	 */
	public static final String JOB_LIST = "/gb/job/list";
	/** 
	 * 查看工作
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#view(Integer, java.util.Locale)
	 */
	public static final String JOB_VIEW = "/gb/job/view/{id}";
	/** 
	 * 创建工作
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#create(com.xukaiqiang.gb.mgt.protocol.JobCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Job, java.util.Locale)
	 */
	public static final String JOB_CREATE = "/gb/job/create";
	/** 
	 * 修改工作
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#update(com.xukaiqiang.gb.mgt.protocol.JobUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Job, java.util.Locale)
	 */
	public static final String JOB_UPDATE = "/gb/job/update";
	/** 
	 * 删除工作
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.JobController#remove(Integer, java.util.Locale)
	 */
	public static final String JOB_REMOVE = "/gb/job/remove/{id}";

	/** 
	 * 门店管理首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#index()
	 */
	public static final String STORE_INDEX = "/gb/store/index";
	/** 
	 * 门店首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_STORE = "/script/gb/store";
	/** 
	 * 门店列表分页
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#listPage(Integer, Integer, com.xukaiqiang.gb.mgt.protocol.StoreFilterRequest, java.util.Locale)
	 */
	public static final String STORE_PAGE = "/gb/store/page/{pageNumber}";
	/** 
	 * 门店列表
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#list(com.xukaiqiang.gb.mgt.protocol.StoreFilterRequest, java.util.Locale)
	 */
	public static final String STORE_LIST = "/gb/store/list";
	/** 
	 * 查看门店
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#view(Integer, java.util.Locale)
	 */
	public static final String STORE_VIEW = "/gb/store/view/{id}";
	/** 
	 * 创建门店
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#create(com.xukaiqiang.gb.mgt.protocol.StoreCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Store, java.util.Locale)
	 */
	public static final String STORE_CREATE = "/gb/store/create";
	/** 
	 * 修改门店
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#update(com.xukaiqiang.gb.mgt.protocol.StoreUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Store, java.util.Locale)
	 */
	public static final String STORE_UPDATE = "/gb/store/update";
	/** 
	 * 删除门店
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.StoreController#remove(Integer, java.util.Locale)
	 */
	public static final String STORE_REMOVE = "/gb/store/remove/{id}";

	/** 
	 * 作品管理首页
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#index()
	 */
	public static final String WORKS_INDEX = "/gb/works/index";
	/** 
	 * 作品首页／首屏数据
	 *
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_WORKS = "/script/gb/works";
	/** 
	 * 作品列表分页
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#listPage(Integer, Integer, com.xukaiqiang.gb.mgt.protocol.WorksFilterRequest, java.util.Locale)
	 */
	public static final String WORKS_PAGE = "/gb/works/page/{pageNumber}";
	/** 
	 * 作品列表
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#list(com.xukaiqiang.gb.mgt.protocol.WorksFilterRequest, java.util.Locale)
	 */
	public static final String WORKS_LIST = "/gb/works/list";
	/** 
	 * 查看作品
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#view(Integer, java.util.Locale)
	 */
	public static final String WORKS_VIEW = "/gb/works/view/{id}";
	/** 
	 * 创建作品
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#create(com.xukaiqiang.gb.mgt.protocol.WorksCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Works, java.util.Locale)
	 */
	public static final String WORKS_CREATE = "/gb/works/create";
	/** 
	 * 修改作品
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#update(com.xukaiqiang.gb.mgt.protocol.WorksUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gb.orm.entity.Works, java.util.Locale)
	 */
	public static final String WORKS_UPDATE = "/gb/works/update";
	/** 
	 * 删除作品
	 * 
	 * @see com.xukaiqiang.gb.mgt.controller.WorksController#remove(Integer, java.util.Locale)
	 */
	public static final String WORKS_REMOVE = "/gb/works/remove/{id}";

}
