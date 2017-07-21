package com.xukaiqiang.gb.orm.dialect;

public abstract class Schema {

	/**
	 * 表名
	 */
	public static interface Tables {
		/**
		 * 联系方式
		 */
		public String CONTRACT = "gb_con";
		/**
		 * 教育
		 */
		public String EDUCATION = "gb_edu";
		/**
		 * 工作
		 */
		public String JOB = "gb_job";
		/**
		 * 门店
		 */
		public String STORE = "gb_store";
		/**
		 * 作品
		 */
		public String WORKS = "gb_works";
	}

}
