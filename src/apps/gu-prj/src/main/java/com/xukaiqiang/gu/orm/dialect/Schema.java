package com.xukaiqiang.gu.orm.dialect;

public abstract class Schema {

	/**
	 * 表名
	 */
	public static interface Tables {
		/**
		 * 系统操作日志
		 */
		public String CUSYOPL = "cu_sy_op_l";
		/**
		 * 字典
		 */
		public String DICTIONARY = "cs_di_c";
		/**
		 * 机构
		 */
		public String CUBRS = "cu_br_s";
		/**
		 * 用户登陆
		 */
		public String CUUSLOGINS = "cu_us_login_s";
		/**
		 * 岗位
		 */
		public String CUPOSTS = "cu_post_s";
		/**
		 * 系统资源
		 */
		public String CURESS = "cu_res_s";
		/**
		 * 角色权限
		 */
		public String CURORIS = "cu_ro_ri_s";
		/**
		 * 岗位
		 */
		public String CUROS = "cu_ro_s";
		/**
		 * 系统配置
		 */
		public String CUSYC = "cu_sy_c";
		/**
		 * 用户配置
		 */
		public String CUUSC = "cu_us_c";
		/**
		 * 用户登录系统信息
		 */
		public String CUUSCHPWDL = "cu_us_ch_pwd_l";
		/**
		 * 用户菜单收藏
		 */
		public String CUUSFAVRESS = "cu_us_fav_res_s";
		/**
		 * 用户休假日志
		 */
		public String CUUSHOLL = "cu_us_hol_l";
		/**
		 * 用户表
		 */
		public String CUUSPOSTS = "cu_us_post_s";
		/**
		 * 用户角色
		 */
		public String CUUSROS = "cu_us_ro_s";
		/**
		 * 用户表
		 */
		public String CUUSS = "cu_us_s";
		/**
		 * 用户岗位中间表
		 */
		public String CUUSCUPOSTS = "cuuscuposts";
		/**
		 * 资源操作配置表
		 */
		public String CUUSCUROS = "cuuscuros";
		/**
		 * 用户岗位中间表
		 */
		public String CURESACT = "cu_res_act_s";

		/**
		 * 系统资源
		 */
		public String CUICONS = "cu_icon_s";
		/**
		 * 资源操作配置
		 */
		public String CURESACTS = "cu_res_act_s";
		/**
		 * 资源操作配置
		 */
		public String CUUSLOGINL = "cu_us_login_l";
		/**
		 * 用户操作日志
		 */
		public String CUUSOPL = "cu_us_op_l";
	}
}