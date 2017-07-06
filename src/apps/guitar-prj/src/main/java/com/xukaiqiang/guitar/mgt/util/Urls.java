package com.xukaiqiang.guitar.mgt.util;

public abstract class Urls {

	/**
	 * 联系管理首页
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#index()
	 */
	public static final String CON_INDEX = "/g/con/index";
	/**
	 * 联系首页／首屏数据
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CON = "/script/g/con";
	/**
	 * 联系列表分页
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#listPage(Integer,
	 *      Integer, com.xukaiqiang.guitar.mgt.protocol.ConFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CON_PAGE = "/g/con/page/{pageNumber}";
	/**
	 * 联系列表
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#list(com.xukaiqiang.guitar.mgt.protocol.ConFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CON_LIST = "/g/con/list";
	/**
	 * 查看联系
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#view(Integer,
	 *      java.util.Locale)
	 */
	public static final String CON_VIEW = "/g/con/view/{id}";
	/**
	 * 创建联系
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#create(com.xukaiqiang.guitar.mgt.protocol.ConCreateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Con, java.util.Locale)
	 */
	public static final String CON_CREATE = "/g/con/create";
	/**
	 * 修改联系
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#update(com.xukaiqiang.guitar.mgt.protocol.ConUpdateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Con, java.util.Locale)
	 */
	public static final String CON_UPDATE = "/g/con/update";
	/**
	 * 删除联系
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.ConController#remove(Integer,
	 *      java.util.Locale)
	 */
	public static final String CON_REMOVE = "/g/con/remove/{id}";

	/**
	 * 管理首页
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#index()
	 */
	public static final String EDU_INDEX = "/g/edu/index";
	/**
	 * 首页／首屏数据
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_EDU = "/script/g/edu";
	/**
	 * 列表分页
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#listPage(Integer,
	 *      Integer, com.xukaiqiang.guitar.mgt.protocol.EduFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String EDU_PAGE = "/g/edu/page/{pageNumber}";
	/**
	 * 列表
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#list(com.xukaiqiang.guitar.mgt.protocol.EduFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String EDU_LIST = "/g/edu/list";
	/**
	 * 查看
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#view(Integer,
	 *      java.util.Locale)
	 */
	public static final String EDU_VIEW = "/g/edu/view/{id}";
	/**
	 * 创建
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#create(com.xukaiqiang.guitar.mgt.protocol.EduCreateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Edu, java.util.Locale)
	 */
	public static final String EDU_CREATE = "/g/edu/create";
	/**
	 * 修改
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#update(com.xukaiqiang.guitar.mgt.protocol.EduUpdateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Edu, java.util.Locale)
	 */
	public static final String EDU_UPDATE = "/g/edu/update";
	/**
	 * 删除
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.EduController#remove(Integer,
	 *      java.util.Locale)
	 */
	public static final String EDU_REMOVE = "/g/edu/remove/{id}";

	/**
	 * 工作管理首页
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#index()
	 */
	public static final String JOB_INDEX = "/g/job/index";
	/**
	 * 工作首页／首屏数据
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_JOB = "/script/g/job";
	/**
	 * 工作列表分页
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#listPage(Integer,
	 *      Integer, com.xukaiqiang.guitar.mgt.protocol.JobFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String JOB_PAGE = "/g/job/page/{pageNumber}";
	/**
	 * 工作列表
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#list(com.xukaiqiang.guitar.mgt.protocol.JobFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String JOB_LIST = "/g/job/list";
	/**
	 * 查看工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#view(Integer,
	 *      java.util.Locale)
	 */
	public static final String JOB_VIEW = "/g/job/view/{id}";
	/**
	 * 创建工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#create(com.xukaiqiang.guitar.mgt.protocol.JobCreateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Job, java.util.Locale)
	 */
	public static final String JOB_CREATE = "/g/job/create";
	/**
	 * 修改工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#update(com.xukaiqiang.guitar.mgt.protocol.JobUpdateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Job, java.util.Locale)
	 */
	public static final String JOB_UPDATE = "/g/job/update";
	/**
	 * 删除工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.JobController#remove(Integer,
	 *      java.util.Locale)
	 */
	public static final String JOB_REMOVE = "/g/job/remove/{id}";

	/**
	 * 角色管理首页
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#index()
	 */
	public static final String ROLE_INDEX = "/g/role/index";
	/**
	 * 角色首页／首屏数据
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_ROLE = "/script/g/role";
	/**
	 * 角色列表分页
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#listPage(Integer,
	 *      Integer, com.xukaiqiang.guitar.mgt.protocol.RoleFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String ROLE_PAGE = "/g/role/page/{pageNumber}";
	/**
	 * 角色列表
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#list(com.xukaiqiang.guitar.mgt.protocol.RoleFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String ROLE_LIST = "/g/role/list";
	/**
	 * 查看角色
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#view(Integer,
	 *      java.util.Locale)
	 */
	public static final String ROLE_VIEW = "/g/role/view/{id}";
	/**
	 * 创建角色
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#create(com.xukaiqiang.guitar.mgt.protocol.RoleCreateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Role, java.util.Locale)
	 */
	public static final String ROLE_CREATE = "/g/role/create";
	/**
	 * 修改角色
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#update(com.xukaiqiang.guitar.mgt.protocol.RoleUpdateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Role, java.util.Locale)
	 */
	public static final String ROLE_UPDATE = "/g/role/update";
	/**
	 * 删除角色
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.RoleController#remove(Integer,
	 *      java.util.Locale)
	 */
	public static final String ROLE_REMOVE = "/g/role/remove/{id}";

	/**
	 * 门店管理首页
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#index()
	 */
	public static final String STORE_INDEX = "/g/store/index";
	/**
	 * 门店首页／首屏数据
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_STORE = "/script/g/store";
	/**
	 * 门店列表分页
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#listPage(Integer,
	 *      Integer, com.xukaiqiang.guitar.mgt.protocol.StoreFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String STORE_PAGE = "/g/store/page/{pageNumber}";
	/**
	 * 门店列表
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#list(com.xukaiqiang.guitar.mgt.protocol.StoreFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String STORE_LIST = "/g/store/list";
	/**
	 * 查看门店
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#view(Integer,
	 *      java.util.Locale)
	 */
	public static final String STORE_VIEW = "/g/store/view/{id}";
	/**
	 * 创建门店
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#create(com.xukaiqiang.guitar.mgt.protocol.StoreCreateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Store, java.util.Locale)
	 */
	public static final String STORE_CREATE = "/g/store/create";
	/**
	 * 修改门店
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#update(com.xukaiqiang.guitar.mgt.protocol.StoreUpdateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Store, java.util.Locale)
	 */
	public static final String STORE_UPDATE = "/g/store/update";
	/**
	 * 删除门店
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.StoreController#remove(Integer,
	 *      java.util.Locale)
	 */
	public static final String STORE_REMOVE = "/g/store/remove/{id}";

	/**
	 * 用户管理首页
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#index()
	 */
	public static final String USER_INDEX = "/g/user/index";
	/**
	 * 用户首页／首屏数据
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_USER = "/script/g/user";
	/**
	 * 用户列表分页
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#listPage(Integer,
	 *      Integer, com.xukaiqiang.guitar.mgt.protocol.UserFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String USER_PAGE = "/g/user/page/{pageNumber}";
	/**
	 * 用户列表
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#list(com.xukaiqiang.guitar.mgt.protocol.UserFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String USER_LIST = "/g/user/list";
	/**
	 * 查看用户
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#view(Integer,
	 *      java.util.Locale)
	 */
	public static final String USER_VIEW = "/g/user/view/{id}";
	/**
	 * 创建用户
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#create(com.xukaiqiang.guitar.mgt.protocol.UserCreateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.User, java.util.Locale)
	 */
	public static final String USER_CREATE = "/g/user/create";
	/**
	 * 修改用户
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#update(com.xukaiqiang.guitar.mgt.protocol.UserUpdateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.User, java.util.Locale)
	 */
	public static final String USER_UPDATE = "/g/user/update";
	/**
	 * 删除用户
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.UserController#remove(Integer,
	 *      java.util.Locale)
	 */
	public static final String USER_REMOVE = "/g/user/remove/{id}";

	/**
	 * 工作管理首页
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#index()
	 */
	public static final String WORKS_INDEX = "/g/works/index";
	/**
	 * 工作首页／首屏数据
	 *
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_WORKS = "/script/g/works";
	/**
	 * 工作列表分页
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#listPage(Integer,
	 *      Integer, com.xukaiqiang.guitar.mgt.protocol.WorksFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String WORKS_PAGE = "/g/works/page/{pageNumber}";
	/**
	 * 工作列表
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#list(com.xukaiqiang.guitar.mgt.protocol.WorksFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String WORKS_LIST = "/g/works/list";
	/**
	 * 查看工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#view(Integer,
	 *      java.util.Locale)
	 */
	public static final String WORKS_VIEW = "/g/works/view/{id}";
	/**
	 * 创建工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#create(com.xukaiqiang.guitar.mgt.protocol.WorksCreateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Works, java.util.Locale)
	 */
	public static final String WORKS_CREATE = "/g/works/create";
	/**
	 * 修改工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#update(com.xukaiqiang.guitar.mgt.protocol.WorksUpdateRequest,
	 *      org.springframework.validation.BindingResult,
	 *      com.xukaiqiang.guitar.orm.entity.Works, java.util.Locale)
	 */
	public static final String WORKS_UPDATE = "/g/works/update";
	/**
	 * 删除工作
	 * 
	 * @see com.xukaiqiang.guitar.mgt.controller.WorksController#remove(Integer,
	 *      java.util.Locale)
	 */
	public static final String WORKS_REMOVE = "/g/works/remove/{id}";

}
