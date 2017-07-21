package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuResAct implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CURESACT.RESNO
		 */
		public static final String CURESACT_RESNO = "res_no";
		/**
		 * CURESACT.RESACTCD
		 */
		public static final String CURESACT_RESACTCD = "res_act_cd";
		/**
		 * CURESACT.VE
		 */
		public static final String CURESACT_VE = "ve";
		/**
		 * CURESACT.CRDT
		 */
		public static final String CURESACT_CRDT = "cr_dt";
		/**
		 * CURESACT.LAUPDT
		 */
		public static final String CURESACT_LAUPDT = "la_up_dt";
		/**
		 * CURESACT.LAUPUSID
		 */
		public static final String CURESACT_LAUPUSID = "la_up_us_id";
		/**
		 * CURESACT.URL
		 */
		public static final String CURESACT_URL = "url";
		/**
		 * CURORIS.RESNO
		 */
		public static final String CURORIS_RESNO = "res_no";
		/**
		 * CURORIS.RESACTCD
		 */
		public static final String CURORIS_RESACTCD = "res_act_cd";
		/**
		 * CURORIS.RONO
		 */
		public static final String CURORIS_RONO = "ro_no";
	}

}
