package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsPostS implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUUSPOSTS.USID
		 */
		public static final String CUUSPOSTS_USID = "us_id";
		/**
		 * CUUSPOSTS.POSTNO
		 */
		public static final String CUUSPOSTS_POSTNO = "post_no";
		/**
		 * CUUSPOSTS.VE
		 */
		public static final String CUUSPOSTS_VE = "ve";
		/**
		 * CUUSPOSTS.CRDT
		 */
		public static final String CUUSPOSTS_CRDT = "cr_dt";
		/**
		 * CUUSPOSTS.CRTM
		 */
		public static final String CUUSPOSTS_CRTM = "cr_tm";
		/**
		 * CUUSPOSTS.LAUPDT
		 */
		public static final String CUUSPOSTS_LAUPDT = "la_up_dt";
		/**
		 * CUUSPOSTS.LAUPUSID
		 */
		public static final String CUUSPOSTS_LAUPUSID = "la_up_us_id";
		/**
		 * CUUSPOSTS.LOGINNA
		 */
		public static final String CUUSPOSTS_LOGINNA = "login_na";
	}

}
