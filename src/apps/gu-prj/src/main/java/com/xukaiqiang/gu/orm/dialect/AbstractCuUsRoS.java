package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsRoS implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUUSROS.USID
		 */
		public static final String CUUSROS_USID = "us_id";
		/**
		 * CUUSROS.RONO
		 */
		public static final String CUUSROS_RONO = "ro_no";
		/**
		 * CUUSROS.VE
		 */
		public static final String CUUSROS_VE = "ve";
		/**
		 * CUUSROS.CRDT
		 */
		public static final String CUUSROS_CRDT = "cr_dt";
		/**
		 * CUUSROS.CRTM
		 */
		public static final String CUUSROS_CRTM = "cr_tm";
		/**
		 * CUUSROS.LAUPDT
		 */
		public static final String CUUSROS_LAUPDT = "la_up_dt";
		/**
		 * CUUSROS.LAUPUSID
		 */
		public static final String CUUSROS_LAUPUSID = "la_up_us_id";
		/**
		 * CUUSROS.LOGINNA
		 */
		public static final String CUUSROS_LOGINNA = "login_na";
	}

}
