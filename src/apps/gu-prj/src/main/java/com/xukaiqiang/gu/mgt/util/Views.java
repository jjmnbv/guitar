package com.xukaiqiang.gu.mgt.util;

public abstract class Views {
	/**
	 * script_app
	 */
	public static final String SCRIPT_APP = "cu/script/app";
	/**
	 * 机构管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuBrSController#index()
	 */
	public static final String CUBRS_INDEX = "cu/script/cubrs";
	public static final String CUBRS_ADDINDEX = "cu/script/addcubrs";
	public static final String CUBRS_UPDATEINDEX = "cu/script/updatecubrs";

	/**
	 * 岗位管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuPostSController#index()
	 */
	public static final String CUPOSTS_INDEX = "cu/script/cuposts";
	public static final String CUPOSTS_ADDINDEX = "cu/script/addcuposts";
	public static final String CUPOSTS_UPDATEINDEX = "cu/script/updatecuposts";

	/**
	 * 系统资源管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#index()
	 */
	public static final String CURESS_INDEX = "cu/script/curess";
	/**
	 * 系统资源管理/修改
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResSController#update()
	 */
	public static final String CURESS_UPDATE = "cu/curess/update";
	/**
	 * 角色权限管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoRiSController#index()
	 */
	public static final String CURORIS_INDEX = "cu/script/curoris";

	/**
	 * 岗位管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuRoSController#index()
	 */
	public static final String CUROS_INDEX = "cu/script/curos";
	public static final String CUROS_ADDINDEX = "cu/script/addcuros";
	public static final String CUROS_UPDATEINDEX = "cu/script/updatecuros";

	/**
	 * 系统配置管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyCController#index()
	 */
	public static final String CUSYC_INDEX = "cu/cusyc/index";

	/**
	 * 用户配置管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsCController#index()
	 */
	public static final String CUUSC_INDEX = "cu/cuusc/index";

	/**
	 * 用户登录系统信息管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsChPwdLController#index()
	 */
	public static final String CUUSCHPWDL_INDEX = "cu/cuuschpwdl/index";

	/**
	 * 用户菜单收藏管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsFavResSController#index()
	 */
	public static final String CUUSFAVRESS_INDEX = "cu/cuusfavress/index";

	/**
	 * 用户休假日志管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsHolLController#index()
	 */
	public static final String CUUSHOLL_INDEX = "cu/script/cuusholl";

	/**
	 * 用户表管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsPostSController#index()
	 */
	public static final String CUUSPOSTS_INDEX = "cu/cuusposts/index";

	/**
	 * 用户角色管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#index()
	 */
	public static final String CUUSROS_INDEX = "cu/cuusros/index";

	/**
	 * 用户表管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#index()
	 */
	public static final String CUUSS_INDEX = "cu/script/cuuss";
	public static final String CUUSS_ADDINDEX = "cu/script/addcuuss";
	public static final String CUUSS_UPDATEINDEX = "cu/script/updatecuuss";
	public static final String CUUSS_INDEXSELF = "cu/script/cuussself";

	/**
	 * 修改密码/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#changepwd()
	 */
	public static final String CUUSS_CHANGEPWD = "cu/script/changepwd";
	/**
	 * 用户表管理/修改
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsSController#update()
	 */
	public static final String CUUSS_UPDATE = "cu/cuuss/update";
	/**
	 * 用户管理/添加
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsRoSController#create()
	 */
	public static final String CUUSS_CREATE = "cu/cuuss/create";
	/**
	 * 资源操作配置表管理首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuResActController#index()
	 */
	public static final String CURESACT_INDEX = "cu/curesact/index";

	/**
	 * 系统资源管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#index()
	 */
	public static final String CUICONS_INDEX = "cu/cuicons/index";
	/**
	 * 系统资源首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuIconSController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CUICONS = "cu/script/cuicons";
	public static final String SCRIPT_ADDCUICONS = "cu/script/addcuicons";
	public static final String SCRIPT_UPDATECUICONS = "cu/script/updatecuicons";
	/**
	 * 资源操作配置管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#index()
	 */
	public static final String CURESACTS_INDEX = "cu/curesacts/index";
	/**
	 * 资源操作配置首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuResActSController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CURESACTS = "cu/script/curesacts";
	/**
	 * 用户登录系统信息管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#index()
	 */
	public static final String CUUSLOGINS_INDEX = "cu/cuuslogins/index";
	/**
	 * 用户登录系统信息首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.cuUsLoginSController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CUUSLOGINS = "cu/script/cuuslogins";
	/**
	 * 登录
	 */
	public static final String LOGIN = "login";
	/**
	 * 首页显示
	 */
	public static final String CUUSS_AllINDEX = "cu/script/allcuuss";
	/**
	 * 用户登录日志管理/首页
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#index()
	 */
	public static final String CUUSLOGINL_INDEX = "cu/cuusloginl/index";
	/**
	 * 用户登录日志首页／首屏数据
	 * 
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsLoginLController#index(org.springframework.ui.Model,
	 *      java.util.Locale)
	 */
	public static final String SCRIPT_CUUSLOGINL = "cu/script/cuusloginl";

	/**
	 * 用户操作信息
	<br>点击菜单以后，需要插入日志。管理/首页
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#index()
	 */
	public static final String CUUSOPL_INDEX = "cu/cuusopl/index";
	/**
	 * 用户操作信息
	<br>点击菜单以后，需要插入日志。首页／首屏数据
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuUsOpLController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_CUUSOPL = "cu/script/cuusopl";
	/**
	 * 系统操作日志管理/首页
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#index()
	 */
	public static final String CUSYOPL_INDEX = "cu/cusyopl/index";
	/**
	 * 系统操作日志首页／首屏数据
	 *
	 * @see com.xukaiqiang.gu.mgt.controller.CuSyOpLController#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_CUSYOPL = "cu/script/cusyopl";

}
