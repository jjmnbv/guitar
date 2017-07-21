package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuResActS implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CURESACTS.RESNO
		 */
		public static final String CURESACTS_RESNO = "res_no";
		/**
		 * CURESACTS.SUID
		 */
		public static final String CURESACTS_SUID = "su_id";
		/**
		 * CURESACTS.VE
		 */
		public static final String CURESACTS_VE = "ve";
		/**
		 * CURESACTS.URL
		 */
		public static final String CURESACTS_URL = "url";
		/**
		 * CURESACTS.RESACTCD
		 */
		public static final String CURESACTS_RESACTCD = "res_act_cd";
		/**
		 * CURESACTS.RESACTCA
		 */
		public static final String CURESACTS_RESACTCA = "res_act_ca";
		/**
		 * CURESACTS.CRDT
		 */
		public static final String CURESACTS_CRDT = "cr_dt";
		/**
		 * CURESACTS.LAUPDT
		 */
		public static final String CURESACTS_LAUPDT = "la_up_dt";
		/**
		 * CURESACTS.LAUPUSID
		 */
		public static final String CURESACTS_LAUPUSID = "la_up_us_id";
		 /**
		 * CURESACTS.LAUPUSID
		 */
		public static final String CURESACTS_DEFRIYN = "def_ri_yn";
	}

}
