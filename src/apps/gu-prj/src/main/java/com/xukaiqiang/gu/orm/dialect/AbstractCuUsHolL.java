package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsHolL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = Columns.CUUSHOLL_TR)
	private Long tr;

	/**
	 * @return 申请请假流水
	 */
	public Long getTr() {
		return tr;
	}

	public void setTr(Long tr) {
		this.tr = tr;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUUSHOLL.TR
		 */
		public static final String CUUSHOLL_TR = "tr";
		/**
		 * CUUSHOLL.USID
		 */
		public static final String CUUSHOLL_USID = "us_id";
		/**
		 * CUUSHOLL.VE
		 */
		public static final String CUUSHOLL_VE = "ve";
		/**
		 * CUUSHOLL.CRDT
		 */
		public static final String CUUSHOLL_CRDT = "cr_dt";
		/**
		 * CUUSHOLL.WODT
		 */
		public static final String CUUSHOLL_WODT = "wo_dt";
		/**
		 * CUUSHOLL.CRTM
		 */
		public static final String CUUSHOLL_CRTM = "cr_tm";
		/**
		 * CUUSHOLL.WOTM
		 */
		public static final String CUUSHOLL_WOTM = "wo_tm";
		/**
		 * CUUSHOLL.LAUPDT
		 */
		public static final String CUUSHOLL_LAUPDT = "la_up_dt";
		/**
		 * CUUSHOLL.LAUPUSID
		 */
		public static final String CUUSHOLL_LAUPUSID = "la_up_us_id";
		/**
		 * CUUSHOLL.EFDT
		 */
		public static final String CUUSHOLL_EFDT = "ef_dt";
		/**
		 * CUUSHOLL.HOLBEDT
		 */
		public static final String CUUSHOLL_HOLBEDT = "hol_be_dt";
		/**
		 * CUUSHOLL.HOLENDT
		 */
		public static final String CUUSHOLL_HOLENDT = "hol_en_dt";
		/**
		 * CUUSHOLL.HOLCD
		 */
		public static final String CUUSHOLL_HOLCD = "hol_cd";
		/**
		 * CUUSHOLL.LOGINNA
		 */
		public static final String CUUSHOLL_LOGINNA = "login_na";
		/**
		 * CUUSHOLL.LOGINTRID
		 */
		public static final String CUUSHOLL_LOGINTRID = "login_tr_id";
		/**
		 * CUUSHOLL.HOLCAUCA
		 */
		public static final String CUUSHOLL_CO = "co";

		public static final String CUUSHOLL_HOLCAUCA = "hol_cau_ca";
	}

}
