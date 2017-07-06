package com.xukaiqiang.g.orm.dialect;

public abstract class Schema {

	/**
	 * 表名
	 */
	public static interface Tables {
		/**
		 * 联系
		 */
		public String CON = "g_con";
		/**
		 * 
		 */
		public String EDU = "g_edu";
		/**
		 * 工作
		 */
		public String JOB = "g_job";
		/**
		 * 角色
		 */
		public String ROLE = "g_role";
		/**
		 * 门店
		 */
		public String STORE = "g_store";
		/**
		 * 用户
		 */
		public String USER = "g_user";
		/**
		 * 工作
		 */
		public String WORKS = "g_works";
	}

}
