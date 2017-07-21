package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsFavResS implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUUSFAVRESS.USID
		 */
		public static final String CUUSFAVRESS_USID = "us_id";
		/**
		 * CUUSFAVRESS.RESNO
		 */
		public static final String CUUSFAVRESS_RESNO = "res_no";
		/**
		 * CUUSFAVRESS.VE
		 */
		public static final String CUUSFAVRESS_VE = "ve";
		/**
		 * CUUSFAVRESS.CRDT
		 */
		public static final String CUUSFAVRESS_CRDT = "cr_dt";
		/**
		 * CUUSFAVRESS.CRTM
		 */
		public static final String CUUSFAVRESS_CRTM = "cr_tm";
		/**
		 * CUUSFAVRESS.LAUPDT
		 */
		public static final String CUUSFAVRESS_LAUPDT = "la_up_dt";
		/**
		 * CUUSFAVRESS.LAUPUSID
		 */
		public static final String CUUSFAVRESS_LAUPUSID = "la_up_us_id";
	}

}
