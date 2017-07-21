package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuSyC implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUSYC_SYCD)
	private String syCd;

	/**
	 * @return 系统代码
	 */
	public String getSyCd() {
		return syCd;
	}

	public void setSyCd(String syCd) {
		this.syCd = syCd;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUSYC.SYCD
		 */
		public static final String CUSYC_SYCD = "sy_cd";
		/**
		 * CUSYC.VE
		 */
		public static final String CUSYC_VE = "ve";
		/**
		 * CUSYC.CRDT
		 */
		public static final String CUSYC_CRDT = "cr_dt";
		/**
		 * CUSYC.CRTM
		 */
		public static final String CUSYC_CRTM = "cr_tm";
		/**
		 * CUSYC.LAUPDT
		 */
		public static final String CUSYC_LAUPDT = "la_up_dt";
		/**
		 * CUSYC.LAUPUSID
		 */
		public static final String CUSYC_LAUPUSID = "la_up_us_id";
		/**
		 * CUSYC.SYNA
		 */
		public static final String CUSYC_SYNA = "sy_na";
		/**
		 * CUSYC.URL
		 */
		public static final String CUSYC_URL = "url";
		/**
		 * CUSYC.DOMNA
		 */
		public static final String CUSYC_DOMNA = "dom_na";
	}

}
