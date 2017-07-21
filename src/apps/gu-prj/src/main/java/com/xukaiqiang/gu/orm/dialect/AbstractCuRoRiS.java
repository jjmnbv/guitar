package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuRoRiS implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CURORIS.RONO
		 */
		public static final String CURORIS_RONO = "ro_no";
		/**
		 * CURORIS.RESNO
		 */
		public static final String CURORIS_RESNO = "res_no";
		/**
		 * CURORIS.RESACTCD
		 */
		public static final String CURORIS_RESACTCD = "res_act_cd";
		/**
		 * CURORIS.VE
		 */
		public static final String CURORIS_VE = "ve";
		/**
		 * CURORIS.CRDT
		 */
		public static final String CURORIS_CRDT = "cr_dt";
		/**
		 * CURORIS.CRTM
		 */
		public static final String CURORIS_CRTM = "cr_tm";
		/**
		 * CURORIS.LAUPDT
		 */
		public static final String CURORIS_LAUPDT = "la_up_dt";
		/**
		 * CURORIS.LAUPUSID
		 */
		public static final String CURORIS_LAUPUSID = "la_up_us_id";
	}

}
