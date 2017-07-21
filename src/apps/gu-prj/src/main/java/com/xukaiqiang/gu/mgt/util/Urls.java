package com.xukaiqiang.gu.mgt.util;

public abstract class Urls {
	/**
	 * 首页
	 */
	public static final String INDEX = "/index";
	/**
	 * oauth_checkLogin
	 */
	public static final String OAUTH_CHECKLOGIN = "/cu/oauth2/checkLogin";
	/**
	 * 获取当前登录用户可用菜单
	 */
	public static final String SCRIPT_AVAILABLEMENUS = "/script/cu/availableMenus";
	/**
	 * script_app
	 */
	public static final String SCRIPT_APP = "/script/cu/app";
	/**
	 * 机构管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#index()
	 */
	public static final String CUBRS_INDEX = "/script/cu/cubrs";
	public static final String CUBRS_ADDINDEX = "/script/cu/addcubrs";
	public static final String CUBRS_UPDATEINDEX = "/script/cu/updatecubrs";
	/**
	 * 机构列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUBRS_PAGE = "/cu/cubrs/page/{pageNumber}";
	/**
	 * 用户选择机构列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSCUBRS_PAGE = "/cu/cuuscubrs/page/{pageNumber}";
	/**
	 * 机构列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#list(com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUBRS_LIST = "/cu/cubrs/list";
	/**
	 * 查看机构
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CUBRS_VIEW = "/cu/cubrs/view/{brNo}";
	/**
	 * 查看上级机构
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CUBRS_SHOWPREV = "/cu/cubrs/showview/{brLevQt}/{brNo}";
	/**
	 * 机构是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#notexists(String,
	 *      java.util.Locale)
	 */
	public static final String CuBrS_NOTEXISTS = "/cu/cubrs/notexists";

	/**
	 * 创建机构
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#create(com.xukaiqiang.gu.mgt.protocol.CuBrSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuBrS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUBRS_CREATE = "/cu/cubrs/create";
	/**
	 * 修改机构
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#update(com.xukaiqiang.gu.mgt.protocol.CuBrSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuBrS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUBRS_UPDATE = "/cu/cubrs/update";
	/**
	 * 删除机构
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#remove(String,
	 *      java.util.Locale)
	 */
	public static final String CUBRS_REMOVE = "/cu/cubrs/remove/{brNo}";

	/**
	 * 更新状态为激活
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#updateJH()
	 */
	public static final String CUBRS_UPDATEJH = "/cu/cubrs/updatejh/{brNo}";

	/**
	 * 更新状态为激活
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#updateSX()
	 */
	public static final String CUBRS_UPDATESX = "/cu/cubrs/updatesx/{brNo}";

	/**
	 * 机构编号是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#brNoExist()
	 */
	public static final String CUBRS_BRNOEXIST = "/cu/cubrs/brNoExist";

	/**
	 * 机构名称是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#brNaExist()
	 */
	public static final String CUBRS_BRNAEXIST = "/cu/cubrs/brNaExist";

	/**
	 * 获取下一个ID
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#nextId()
	 */
	public static final String CUBRS_NEXTID = "/cu/cubrs/nextId";

	/**
	 * 
	 * 岗位管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#index()
	 */
	public static final String CUPOSTS_INDEX = "/script/cu/cuposts";
	public static final String CUPOSTS_ADDINDEX = "/script/cu/addcuposts";
	public static final String CUPOSTS_UPDATEINDEX = "/script/cu/updatecuposts";
	/**
	 * 岗位列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_PAGE = "/cu/cuposts/page/{pageNumber}";
	/**
	 * 用户设置岗位列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#toListPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_CUUSPAGE = "/cu/cuposts/toListPage/{pageNumber}";
	/**
	 * 岗位列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#list(com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_LIST = "/cu/cuposts/list";
	/**
	 * 查看岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_VIEW = "/cu/cuposts/view/{postNo}";

	/**
	 * 岗位是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#notexists(String,
	 *      java.util.Locale)
	 */
	public static final String CuPostS_NOTEXISTS = "/cu/cuposts/notexists";
	/**
	 * 创建岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#create(com.xukaiqiang.gu.mgt.protocol.CuPostSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuPostS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUPOSTS_CREATE = "/cu/cuposts/create";
	/**
	 * 更新状态为 激活
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#updateJH(Long,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_UPDATEJH = "/cu/cuposts/updateJH/{postNo}";
	/**
	 * 更新状态为 失效
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#updateJH(Long,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_UPDATESX = "/cu/cuposts/updateSX/{postNo}";
	/**
	 * 修改岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#update(com.xukaiqiang.gu.mgt.protocol.CuPostSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuPostS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUPOSTS_UPDATE = "/cu/cuposts/update";
	/**
	 * 删除岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#remove(String,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_REMOVE = "/cu/cuposts/remove/{postNo}";

	/**
	 * 岗位名称是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#postNaExist(String,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_POSTNAEXIST = "/cu/cuposts/postNaExist";

	/**
	 * 获取下一个id
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#nextId(String,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_NEXTID = "/cu/cuposts/nextId";

	/**
	 * 岗位编号是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#postNoExist(String,
	 *      java.util.Locale)
	 */
	public static final String CUPOSTS_POSTNOEXIST = "/cu/cuposts/postNoExist";

	/**
	 * 系统资源管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#index()
	 */
	public static final String CURESS_INDEX = "/script/cu/curess";
	/**
	 * 系统资源列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuResSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CURESS_PAGE = "/cu/curess/page/{pageNumber}";
	/**
	 * 系统资源列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#list(com.xukaiqiang.gu.mgt.protocol.CuResSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CURESS_LIST = "/cu/curess/list";
	/**
	 * 查看系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_VIEW = "/cu/curess/view/{resNo}";
	/**
	 * 创建系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#create(com.xukaiqiang.gu.mgt.protocol.CuResSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuResS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CURESS_CREATE = "/cu/curess/create";
	/**
	 * 修改系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#update(com.xukaiqiang.gu.mgt.protocol.CuResSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuResS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CURESS_UPDATE = "/cu/curess/update";
	/**
	 * 删除系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#remove(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_REMOVE = "/cu/curess/remove/{resNo}";
	/**
	 * 编辑系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#edits(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_EDIT = "/cu/curess/edits/{resNo}";

	/**
	 * 菜单导航
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#menu(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_MENU = "/cu/curess/menu";

	/**
	 * 角色权限菜单导航
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#rorismenu(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_RORISMENU = "/cu/curess/rorismenu/{roNo}";
	/**
	 * 角色权限菜单导航
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#rorismenu(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_RONOMENU = "/cu/curess/ronomenu/{roNo}";
	/**
	 * 角色权限预览
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#viewallroris(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_VIEWALLRORIS = "/cu/curess/viewallroris/{allRoNo}";

	/**
	 * 菜单升降级和上下移动
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#menuHaul(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_MENUHAUL = "/cu/curess/menuHaul";

	/**
	 * 系统配置名称列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#resSyCdNames(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_RESSYCDNAMES = "/cu/curess/resSyCdNames";

	/**
	 * 菜单图标名称列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#cuIconSNames(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_CUICONSNAMES = "/cu/curess/cuIconSNames";

	/**
	 * 获取下一个ID
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#nextId(String,
	 *      java.util.Locale)
	 */
	public static final String CURESS_CUUSS_NEXTID = "/cu/curess/nextId";

	/**
	 * 角色权限管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#index()
	 */
	public static final String CURORIS_INDEX = "/script/cu/curoris";
	/**
	 * 角色权限列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuRoRiSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CURORIS_PAGE = "/cu/curoris/page/{pageNumber}";
	/**
	 * 角色权限列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#list(com.xukaiqiang.gu.mgt.protocol.CuRoRiSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CURORIS_LIST = "/cu/curoris/list";
	/**
	 * 查看角色权限
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#view(String, String,
	 *      String, java.util.Locale)
	 */
	public static final String CURORIS_VIEW = "/cu/curoris/view";
	/**
	 * 查看角色权限批量
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#viewList(String,
	 *      String, java.util.Locale)
	 */
	public static final String CURORIS_VIEWLIST = "/cu/curoris/viewList/{resNo}/{roNo}";
	/**
	 * 创建角色权限
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#create(com.xukaiqiang.gu.mgt.protocol.CuRoRiSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuRoRiS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CURORIS_CREATE = "/cu/curoris/create";
	/**
	 * 修改角色权限
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#update(com.xukaiqiang.gu.mgt.protocol.CuRoRiSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuRoRiS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CURORIS_UPDATE = "/cu/curoris/update";
	/**
	 * 删除角色权限
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#remove(String, String,
	 *      String, java.util.Locale)
	 */
	public static final String CURORIS_REMOVE = "/cu/curoris/remove";

	/**
	 * 岗位管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#index()
	 */
	public static final String CUROS_INDEX = "/script/cu/curos";
	public static final String CUROS_ADDINDEX = "/script/cu/addacuros";
	public static final String CUROS_UPDATEINDEX = "/script/cu/updatecuros";
	/**
	 * 岗位列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUROS_PAGE = "/cu/curos/page/{pageNumber}";
	/**
	 * 用户选择岗位列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSCUROS_PAGE = "/cu/cuuscuros/page/{pageNumber}";
	/**
	 * 岗位列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#list(com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUROS_LIST = "/cu/curos/list";
	public static final String CUROS_RORISLIST = "/cu/curos/rorislist";
	/**
	 * 更新状态为 激活
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#updateJH(com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUROS_UPDATEJH = "/cu/curos/updateJH/{roNo}";
	/**
	 * 更新状态为 失效
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#updateSX(com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUROS_UPDATESX = "/cu/curos/updateSX/{roNo}";
	/**
	 * 查看岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CUROS_VIEW = "/cu/curos/view/{roNo}";
	/**
	 * 角色是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CuRoS_NOTEXISTS = "/cu/curos/notexists";
	/**
	 * 创建岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#create(com.xukaiqiang.gu.mgt.protocol.CuRoSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuRoS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUROS_CREATE = "/cu/curos/create";
	/**
	 * 修改岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#update(com.xukaiqiang.gu.mgt.protocol.CuRoSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuRoS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUROS_UPDATE = "/cu/curos/update";
	/**
	 * 修改角色权限关联
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#updatePermissions(com.xukaiqiang.gu.mgt.protocol.CuRoSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuRoS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUROS_UPDATEPER = "/cu/curos/updatePermissions";
	/**
	 * 删除岗位
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#remove(String,
	 *      java.util.Locale)
	 */
	public static final String CUROS_REMOVE = "/cu/curos/remove/{roNo}";

	/**
	 * 系统配置管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#index()
	 */
	public static final String CUSYC_INDEX = "/cu/cusyc/index";
	/**
	 * 系统配置列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuSyCFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUSYC_PAGE = "/cu/cusyc/page/{pageNumber}";
	/**
	 * 系统配置列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#list(com.xukaiqiang.gu.mgt.protocol.CuSyCFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUSYC_LIST = "/cu/cusyc/list";
	/**
	 * 查看系统配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CUSYC_VIEW = "/cu/cusyc/view/{syCd}";
	/**
	 * 创建系统配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#create(com.xukaiqiang.gu.mgt.protocol.CuSyCCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuSyC,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUSYC_CREATE = "/cu/cusyc/create";
	/**
	 * 修改系统配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#update(com.xukaiqiang.gu.mgt.protocol.CuSyCUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuSyC,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUSYC_UPDATE = "/cu/cusyc/update";
	/**
	 * 删除系统配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#remove(String,
	 *      java.util.Locale)
	 */
	public static final String CUSYC_REMOVE = "/cu/cusyc/remove/{syCd}";

	/**
	 * 用户配置管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#index()
	 */
	public static final String CUUSC_INDEX = "/cu/cuusc/index";
	/**
	 * 用户配置列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsCFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSC_PAGE = "/cu/cuusc/page/{pageNumber}";
	/**
	 * 用户配置列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#list(com.xukaiqiang.gu.mgt.protocol.CuUsCFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSC_LIST = "/cu/cuusc/list";
	/**
	 * 查看用户配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#view(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSC_VIEW = "/cu/cuusc/view/{id}";
	/**
	 * 创建用户配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#create(com.xukaiqiang.gu.mgt.protocol.CuUsCCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsC,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSC_CREATE = "/cu/cuusc/create";
	/**
	 * 修改用户配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#update(com.xukaiqiang.gu.mgt.protocol.CuUsCUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsC,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSC_UPDATE = "/cu/cuusc/update";
	/**
	 * 删除用户配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#remove(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSC_REMOVE = "/cu/cuusc/remove/{id}";

	/**
	 * 用户登录系统信息管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#index()
	 */
	public static final String CUUSCHPWDL_INDEX = "/cu/cuuschpwdl/index";
	/**
	 * 用户登录系统信息列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSCHPWDL_PAGE = "/cu/cuuschpwdl/page/{pageNumber}";
	/**
	 * 用户登录系统信息列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#list(com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSCHPWDL_LIST = "/cu/cuuschpwdl/list";
	/**
	 * 查看用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#view(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSCHPWDL_VIEW = "/cu/cuuschpwdl/view/{id}";
	/**
	 * 创建用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#create(com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsChPwdL,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSCHPWDL_CREATE = "/cu/cuuschpwdl/create";
	/**
	 * 修改用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#update(com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsChPwdL,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSCHPWDL_UPDATE = "/cu/cuuschpwdl/update";
	/**
	 * 删除用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#remove(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSCHPWDL_REMOVE = "/cu/cuuschpwdl/remove/{id}";

	/**
	 * 用户菜单收藏管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#index()
	 */
	public static final String CUUSFAVRESS_INDEX = "/cu/cuusfavress/index";
	/**
	 * 用户菜单收藏列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsFavResSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSFAVRESS_PAGE = "/cu/cuusfavress/page/{pageNumber}";
	/**
	 * 用户菜单收藏列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#list(com.xukaiqiang.gu.mgt.protocol.CuUsFavResSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSFAVRESS_LIST = "/cu/cuusfavress/list";
	/**
	 * 查看用户菜单收藏
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#view(Long, String,
	 *      java.util.Locale)
	 */
	public static final String CUUSFAVRESS_VIEW = "/cu/cuusfavress/view";
	/**
	 * 创建用户菜单收藏
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#create(com.xukaiqiang.gu.mgt.protocol.CuUsFavResSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsFavResS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSFAVRESS_CREATE = "/cu/cuusfavress/create";
	/**
	 * 修改用户菜单收藏
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#update(com.xukaiqiang.gu.mgt.protocol.CuUsFavResSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsFavResS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSFAVRESS_UPDATE = "/cu/cuusfavress/update";
	/**
	 * 删除用户菜单收藏
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#remove(Long,
	 *      String, java.util.Locale)
	 */
	public static final String CUUSFAVRESS_REMOVE = "/cu/cuusfavress/remove";

	/**
	 * 用户休假日志管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#index()
	 */
	public static final String CUUSHOLL_INDEX = "/script/cu/cuusholl";
	/**
	 * 用户休假日志列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsHolLFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSHOLL_PAGE = "/cu/cuusholl/page/{pageNumber}";
	/**
	 * 用户休假日志列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#list(com.xukaiqiang.gu.mgt.protocol.CuUsHolLFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSHOLL_LIST = "/cu/cuusholl/list";
	/**
	 * 查看用户休假日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#view(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSHOLL_VIEW = "/cu/cuusholl/view/{tr}";
	/**
	 * 创建用户休假日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#create(com.xukaiqiang.gu.mgt.protocol.CuUsHolLCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsHolL,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSHOLL_CREATE = "/cu/cuusholl/create";
	/**
	 * 修改用户休假日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#update(com.xukaiqiang.gu.mgt.protocol.CuUsHolLUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsHolL,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSHOLL_UPDATE = "/cu/cuusholl/update";
	/**
	 * 删除用户休假日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#remove(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSHOLL_REMOVE = "/cu/cuusholl/remove/{tr}";

	/**
	 * 获取上班日期
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#date(com.xukaiqiang.gu.mgt.protocol.CuUsHolLUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsHolL,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSHOLL_DATE = "/cu/cuusholl/date";

	/**
	 * 用户表管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#index()
	 */
	public static final String CUUSPOSTS_INDEX = "/cu/cuusposts/index";
	/**
	 * 用户表列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsPostSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSPOSTS_PAGE = "/cu/cuusposts/page/{pageNumber}";
	/**
	 * 用户表列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#list(com.xukaiqiang.gu.mgt.protocol.CuUsPostSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSPOSTS_LIST = "/cu/cuusposts/list";
	/**
	 * 查看用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#view(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSPOSTS_VIEW = "/cu/cuusposts/view/{usId}";
	/**
	 * 创建用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#create(com.xukaiqiang.gu.mgt.protocol.CuUsPostSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsPostS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSPOSTS_CREATE = "/cu/cuusposts/create";
	/**
	 * 修改用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#update(com.xukaiqiang.gu.mgt.protocol.CuUsPostSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsPostS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSPOSTS_UPDATE = "/cu/cuusposts/update";
	/**
	 * 删除用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#remove(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSPOSTS_REMOVE = "/cu/cuusposts/remove/{usId}";

	/**
	 * 用户角色管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#index()
	 */
	public static final String CUUSROS_INDEX = "/cu/cuusros/index";
	/**
	 * 用户角色列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsRoSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSROS_PAGE = "/cu/cuusros/page/{pageNumber}";
	/**
	 * 用户角色列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#list(com.xukaiqiang.gu.mgt.protocol.CuUsRoSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSROS_LIST = "/cu/cuusros/list";
	/**
	 * 查看用户角色
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#view(Long, String,
	 *      java.util.Locale)
	 */
	public static final String CUUSROS_VIEW = "/cu/cuusros/view";
	/**
	 * 创建用户角色
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#create(com.xukaiqiang.gu.mgt.protocol.CuUsRoSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsRoS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSROS_CREATE = "/cu/cuusros/create";
	/**
	 * 修改用户角色
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#update(com.xukaiqiang.gu.mgt.protocol.CuUsRoSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsRoS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSROS_UPDATE = "/cu/cuusros/update";
	/**
	 * 删除用户角色
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#remove(Long, String,
	 *      java.util.Locale)
	 */
	public static final String CUUSROS_REMOVE = "/cu/cuusros/remove";

	/**
	 * 用户表管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#index()
	 */
	public static final String CUUSS_INDEX = "/script/cu/cuuss";
	public static final String CUUSS_ADDINDEX = "/script/cu/addcuuss";
	public static final String CUUSS_UPDATEINDEX = "/script/cu/updatecuuss";
	public static final String CUUSS_INDEXSELF = "/script/cu/cuusss/self";

	/**
	 * 修改密码面包屑数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#changepwd()
	 */
	public static final String CUUSS_CHANGEPWD = "/script/cu/changepwd";

	/**
	 * 用户表列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSS_PAGE = "/cu/cuuss/page/{pageNumber}";
	/**
	 * 用户表列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#list(com.xukaiqiang.gu.mgt.protocol.CuUsSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSS_LIST = "/cu/cuuss/list";
	/**
	 * 查看用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#view(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSS_VIEW = "/cu/cuuss/view/{id}";

	/**
	 * 获取登录用户名
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#loginNa(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSS_LONGINNA = "/cu/cuuss/loginNa";

	/**
	 * 登录用户信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#useMessage(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSS_USERMESSAGE = "/cu/cuuss/useMessage";
	/**
	 * 创建用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#create(com.xukaiqiang.gu.mgt.protocol.CuUsSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSS_CREATE = "/cu/cuuss/create";
	/**
	 * 修改用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#update(com.xukaiqiang.gu.mgt.protocol.CuUsSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSS_UPDATE = "/cu/cuuss/update";
	/**
	 * 修改个人信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#updateCuUs(com.xukaiqiang.gu.mgt.protocol.CuUsSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSS_UPDATECUUS = "/cu/cuuss/updateCuUs";

	/**
	 * 激活状态
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#updateJH(com.xukaiqiang.gu.mgt.protocol.CuUsSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSS_UPDATEJH = "/cu/cuuss/updateJH/{id}";

	/**
	 * 重置密码
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#resetPwd(com.xukaiqiang.gu.mgt.protocol.CuUsSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSS_RESETPWD = "/cu/cuuss/resetPwd/{id}";

	/**
	 * 
	 * 状态失效
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#updateSX(com.xukaiqiang.gu.mgt.protocol.CuUsSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSS_UPDATESX = "/cu/cuuss/updateSX/{id}";
	/**
	 * 删除用户表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#remove(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSS_REMOVE = "/cu/cuuss/remove/{id}";

	/**
	 * 用户编号是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#idExist()
	 */
	public static final String CUUSS_IDEXIST = "/cu/cuuss/idExist";

	/**
	 * 获取下一个id
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#nextId()
	 */
	public static final String CUUSS_NEXTID = "/cu/cuuss/nextId";

	/**
	 * 登录名称是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#loginNaExist()
	 */
	public static final String CUUSS_IOGINNAEXIST = "/cu/cubrs/loginNaExist";

	/**
	 * 保存机构列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#save(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUS_BRS_SAVE = "/cu/cubrs/save";

	/**
	 * 岗位信息列表保存
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#postsave(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUS_POST_SAVE = "/cu/cupost/postsave";

	/**
	 * 角色信息列表保存
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#rossave(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUS_ROS_SAVE = "/cu/curos/rossave";
	/**
	 * 选择主管信息列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#edits(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUS_EDIT = "/cu/cuus/edit/{id}";
	/**
	 * 选择主管信息列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#listfaexe(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUS_FAEXE = "/cu/cufaexe/list/{pageNumber}";
	/**
	 * 主管信息列表保存
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#faexeSave(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUS_FAEXE_SAVE = "/cu/cufaexe/faexeSave";
	/**
	 * 修改登录密码
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#updateMyLoginPassword(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSS_PASSWORD = "/cu/update/loginpwd";

	/**
	 * 资源操作配置表管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#index()
	 */
	public static final String CURESACT_INDEX = "/cu/curesact/index";
	/**
	 * 资源操作配置表管理分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#listPage()
	 */
	public static final String CURESACT_PAGE = "/cu/curesact/listPage";
	/**
	 * 资源操作配置表管理列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#list()
	 */
	public static final String CURESACT_LIST = "/cu/curesact/list";
	/**
	 * 查看资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#view()
	 */
	public static final String CURESACT_VIEW = "/cu/curesact/view";
	/**
	 * 创建资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#create()
	 */
	public static final String CURESACT_CREATE = "/cu/curesact/create";
	/**
	 * 修改资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#update()
	 */
	public static final String CURESACT_UPDATE = "/cu/curesact/update";
	/**
	 * 删除资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#remove()
	 */
	public static final String CURESACT_REMOVE = "/cu/curesact/remove";
	/**
	 * 判断角色名称是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#ronaexists()
	 */
	public static final String CUROS_RONAEXISTS = "/cu/curos/ronaexists";
	/**
	 * 判断角色编号是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#ronoexists()
	 */
	public static final String CUROS_RONOEXISTS = "/cu/curos/ronoexists";

	/**
	 * 获取下一个Id
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#nextId()
	 */
	public static final String CUROS_NEXTID = "/cu/curos/nextId";
	/**
	 * 判断菜单名称是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#resnaexists()
	 */
	public static final String CURESS_RESNAEXISTS = "/cu/curess/resnaexists";
	/**
	 * 判断菜单编号是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#resnoexists()
	 */
	public static final String CURESS_RESNOEXISTS = "/cu/curess/resnoexists";

	/**
	 * 系统资源管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#index()
	 */
	public static final String CUICONS_INDEX = "/cu/cuicons/index";
	/**
	 * 系统资源首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CUICONS = "/script/cu/cuicons";
	public static final String SCRIPT_ADDCUICONS = "/script/cu/addcuicons";
	public static final String SCRIPT_UPDATECUICONS = "/script/cu/updatecuicons";
	/**
	 * 系统资源列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuIconSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUICONS_PAGE = "/cu/cuicons/page/{pageNumber}";
	/**
	 * 系统资源列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#list(com.xukaiqiang.gu.mgt.protocol.CuIconSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUICONS_LIST = "/cu/cuicons/list";
	/**
	 * 查看系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#view(String,
	 *      java.util.Locale)
	 */
	public static final String CUICONS_VIEW = "/cu/cuicons/view/{iconNo}";

	/**
	 * 修改系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#update(com.xukaiqiang.gu.mgt.protocol.CuIconSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuIconS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUICONS_UPDATE = "/cu/cuicons/update/{iconNo}";
	/**
	 * 删除系统资源
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#remove(String,
	 *      java.util.Locale)
	 */
	public static final String CUICONS_REMOVE = "/cu/cuicons/remove/{iconNo}";

	/**
	 * 上传图标
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#upload(com.xukaiqiang.gu.mgt.protocol.CuIconSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuIconS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUICONS_UPLOAD = "/cu/cuicons/upload";

	/**
	 * 删除菜单图片
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#deletePic(String,
	 *      java.util.Locale)
	 */
	public static final String CUICONS_DELETEPIC = "/cu/cuicons/deletePic/{iconNo}";

	/**
	 * 文件上传（图片）
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#create(String,
	 *      java.util.Locale)
	 */
	public static final String CUICONS_CREATE = "/cu/cuicons/create";

	/**
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#loadImage(String,
	 *      java.util.Locale)
	 * 
	 *      读取图片流
	 */
	public static final String CUICONS_LOADIMAGE = "/cu/cuicons/loadImage";
	/**
	 * 资源操作配置管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#index()
	 */
	public static final String CURESACTS_INDEX = "/cu/curesacts/index";
	/**
	 * 资源操作配置首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CURESACTS = "/script/cu/curesacts";
	/**
	 * 资源操作配置列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.cuResActSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CURESACTS_PAGE = "/cu/curesacts/page/{pageNumber}";
	/**
	 * 资源操作配置列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#list(com.xukaiqiang.gu.mgt.protocol.cuResActSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CURESACTS_LIST = "/cu/curesacts/list/{resNo}";
	/**
	 * 查看资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#view(String, String,
	 *      java.util.Locale)
	 */
	public static final String CURESACTS_VIEW = "/cu/curesacts/view/{resNo}/{url}";
	/**
	 * 创建资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#create(com.xukaiqiang.gu.mgt.protocol.cuResActSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.cuResActS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CURESACTS_CREATE = "/cu/curesacts/create";
	/**
	 * 修改资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#update(com.xukaiqiang.gu.mgt.protocol.cuResActSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.cuResActS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CURESACTS_UPDATE = "/cu/curesacts/update";
	/**
	 * 删除资源操作配置
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#remove(String,
	 *      String, java.util.Locale)
	 */
	public static final String CURESACTS_REMOVE = "/cu/curesacts/remove/{resNo}/{url}";
	/**
	 * 菜单下的资源动作中文是否存在
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#remove(String,
	 *      String, java.util.Locale)
	 */
	public static final String CURESACTS_RESACTCDEXIT = "/cu/curesacts/resActCdExit";
	/**
	 * 用户登录系统信息管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#index()
	 */
	public static final String CUUSLOGINS_INDEX = "/cu/cuuslogins/index";
	/**
	 * 用户登录系统信息首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CUUSLOGINS = "/script/cu/cuuslogins";
	/**
	 * 用户登录系统信息列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.cuUsLoginSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINS_PAGE = "/cu/cuuslogins/page/{pageNumber}";
	/**
	 * 用户登录系统信息列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#list(com.xukaiqiang.gu.mgt.protocol.cuUsLoginSFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINS_LIST = "/cu/cuuslogins/list";
	/**
	 * 查看用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#view(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINS_VIEW = "/cu/cuuslogins/view/{loginTrId}";
	/**
	 * 创建用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#create(com.xukaiqiang.gu.mgt.protocol.cuUsLoginSCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.cuUsLoginS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSLOGINS_CREATE = "/cu/cuuslogins/create";
	/**
	 * 修改用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#update(com.xukaiqiang.gu.mgt.protocol.cuUsLoginSUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.cuUsLoginS,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSLOGINS_UPDATE = "/cu/cuuslogins/update";
	/**
	 * 删除用户登录系统信息
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#remove(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINS_REMOVE = "/cu/cuuslogins/remove/{loginTrId}";
	/**
	 * 登录
	 */
	public static final String LOGIN = "/login";
	public static final String CUUSLOGINS_MENU = "/cu/cuuslogins/getMenu";
	public static final String SCRIPT_DICTS = "/script/cu/dicts";
	/**
	 * 检查是否首次登陆与密码是否过期
	 */
	public static final String CUUSS_CHECKPW = "/cu/cuuslogins/checkPW";
	/**
	 * 用户登录日志管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#index()
	 */
	public static final String CUUSLOGINL_INDEX = "/cu/cuusloginl/index";
	/**
	 * 用户登录日志首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CUUSLOGINL = "/script/cu/cuusloginl";
	/**
	 * 用户登录日志列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#listPage(Integer,
	 *      Integer, com.xukaiqiang.gu.mgt.protocol.CuUsLoginLFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINL_PAGE = "/cu/cuusloginl/page/{pageNumber}";
	/**
	 * 用户登录日志列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#list(com.xukaiqiang.gu.mgt.protocol.CuUsLoginLFilterRequest,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINL_LIST = "/cu/cuusloginl/list";
	/**
	 * 查看用户登录日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#view(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINL_VIEW = "/cu/cuusloginl/view/{loginTrId}";
	/**
	 * 创建用户登录日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#create(com.xukaiqiang.gu.mgt.protocol.CuUsLoginLCreateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsLoginL,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSLOGINL_CREATE = "/cu/cuusloginl/create";
	/**
	 * 修改用户登录日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#update(com.xukaiqiang.gu.mgt.protocol.CuUsLoginLUpdateRequest,
	 *      com.xukaiqiang.gu.orm.entity.CuUsLoginL,
	 *      org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String CUUSLOGINL_UPDATE = "/cu/cuusloginl/update";
	/**
	 * 删除用户登录日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#remove(Long,
	 *      java.util.Locale)
	 */
	public static final String CUUSLOGINL_REMOVE = "/cu/cuusloginl/remove/{loginTrId}";
	
	/** 
	 * 用户操作信息
	<br>点击菜单以后，需要插入日志。管理首页
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#index()
	 */
	public static final String CUUSOPL_INDEX = "/cu/cuusopl/index";
	/** 
	 * 用户操作信息
	<br>点击菜单以后，需要插入日志。首页／首屏数据
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_CUUSOPL = "/script/cu/cuusopl";
	/** 
	 * 用户操作信息
	<br>点击菜单以后，需要插入日志。列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#listPage(Integer, Integer, com.xukaiqiang.gu.mgt.protocol.CuUsOpLFilterRequest, java.util.Locale)
	 */
	public static final String CUUSOPL_PAGE = "/cu/cuusopl/page/{pageNumber}";
	/** 
	 * 用户操作信息
	<br>点击菜单以后，需要插入日志。列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#list(com.xukaiqiang.gu.mgt.protocol.CuUsOpLFilterRequest, java.util.Locale)
	 */
	public static final String CUUSOPL_LIST = "/cu/cuusopl/list";
	/** 
	 * 查看用户操作信息
	<br>点击菜单以后，需要插入日志。
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#view(Long, java.util.Locale)
	 */
	public static final String CUUSOPL_VIEW = "/cu/cuusopl/view/{id}";
	/** 
	 * 创建用户操作信息
	<br>点击菜单以后，需要插入日志。
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#create(com.xukaiqiang.gu.mgt.protocol.CuUsOpLCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gu.orm.entity.CuUsOpL, java.util.Locale)
	 */
	public static final String CUUSOPL_CREATE = "/cu/cuusopl/create";
	/** 
	 * 修改用户操作信息
	<br>点击菜单以后，需要插入日志。
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#update(com.xukaiqiang.gu.mgt.protocol.CuUsOpLUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gu.orm.entity.CuUsOpL, java.util.Locale)
	 */
	public static final String CUUSOPL_UPDATE = "/cu/cuusopl/update";
	/** 
	 * 删除用户操作信息
	<br>点击菜单以后，需要插入日志。
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#remove(Long, java.util.Locale)
	 */
	public static final String CUUSOPL_REMOVE = "/cu/cuusopl/remove/{id}";
	/** 
	 * 系统操作日志管理首页
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#index()
	 */
	public static final String CUSYOPL_INDEX = "/cu/cusyopl/index";
	/** 
	 * 系统操作日志首页／首屏数据
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_CUSYOPL = "/script/cu/cusyopl";
	/** 
	 * 系统操作日志列表分页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#listPage(Integer, Integer, com.xukaiqiang.gu.mgt.protocol.CuSyOpLFilterRequest, java.util.Locale)
	 */
	public static final String CUSYOPL_PAGE = "/cu/cusyopl/page/{pageNumber}";
	/** 
	 * 系统操作日志列表
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#list(com.xukaiqiang.gu.mgt.protocol.CuSyOpLFilterRequest, java.util.Locale)
	 */
	public static final String CUSYOPL_LIST = "/cu/cusyopl/list";
	/** 
	 * 查看系统操作日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#view(Long, java.util.Locale)
	 */
	public static final String CUSYOPL_VIEW = "/cu/cusyopl/view/{id}";
	/** 
	 * 创建系统操作日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#create(com.xukaiqiang.gu.mgt.protocol.CuSyOpLCreateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gu.orm.entity.CuSyOpL, java.util.Locale)
	 */
	public static final String CUSYOPL_CREATE = "/cu/cusyopl/create";
	/** 
	 * 修改系统操作日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#update(com.xukaiqiang.gu.mgt.protocol.CuSyOpLUpdateRequest, org.springframework.validation.BindingResult, com.xukaiqiang.gu.orm.entity.CuSyOpL, java.util.Locale)
	 */
	public static final String CUSYOPL_UPDATE = "/cu/cusyopl/update";
	/** 
	 * 删除系统操作日志
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#remove(Long, java.util.Locale)
	 */
	public static final String CUSYOPL_REMOVE = "/cu/cusyopl/remove/{id}";
}
