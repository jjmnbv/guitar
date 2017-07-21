package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.OrderBy;

@MappedSuperclass
public abstract class AbstractCuBrS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@OrderBy
	@Column(name = Columns.CUBRS_BRNO)
	private String brNo;

	/**
	 * @return 机构编码
	 */
	public String getBrNo() {
		return brNo;
	}

	public void setBrNo(String brNo) {
		this.brNo = brNo;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUBRS.BRNO
		 */
		public static final String CUBRS_BRNO = "br_no";
		/**
		 * CUBRS.VE
		 */
		public static final String CUBRS_VE = "ve";
		/**
		 * CUBRS.CRDT
		 */
		public static final String CUBRS_CRDT = "cr_dt";
		/**
		 * CUBRS.CRTM
		 */
		public static final String CUBRS_CRTM = "cr_tm";
		/**
		 * CUBRS.LAUPDT
		 */
		public static final String CUBRS_LAUPDT = "la_up_dt";
		/**
		 * CUBRS.LAUPUSID
		 */
		public static final String CUBRS_LAUPUSID = "la_up_us_id";
		/**
		 * CUBRS.BRNA
		 */
		public static final String CUBRS_BRNA = "br_na";
		/**
		 * CUBRS.ST
		 */
		public static final String CUBRS_ST = "st";
		/**
		 * CUBRS.BRABBRNO
		 */
		public static final String CUBRS_BRABBRNO = "br_abbr_no";
		/**
		 * CUBRS.CONNA
		 */
		public static final String CUBRS_CONNA = "con_na";
		/**
		 * CUBRS.CONTELNO
		 */
		public static final String CUBRS_CONTELNO = "con_tel_no";
		/**
		 * CUBRS.POSTNO
		 */
		public static final String CUBRS_POSTNO = "post_no";
		/**
		 * CUBRS.BRLEVQT
		 */
		public static final String CUBRS_BRLEVQT = "br_lev_qt";
		/**
		 * CUBRS.PREVBRNO
		 */
		public static final String CUBRS_PREVBRNO = "prev_br_no";
		/**
		 * CUBRS.PROVCD
		 */
		public static final String CUBRS_PROVCD = "prov_cd";
		/**
		 * CUBRS.CITYCD
		 */
		public static final String CUBRS_CITYCD = "city_cd";
		/**
		 * CUBRS.CO
		 */
		public static final String CUBRS_CO = "co";
		/**
		 * CUBRS.CONADCA
		 */
		public static final String CUBRS_CONADCA = "con_ad_ca";
		/**
		 * CUBRS.LEGPENA
		 */
		public static final String CUBRS_LEGPENA = "leg_pe_na";
		/**
		 * CUBRS.CONADCACO
		 */
		public static final String CUBRS_CONADCACO = "con_ad_ca_co";
	}

}
