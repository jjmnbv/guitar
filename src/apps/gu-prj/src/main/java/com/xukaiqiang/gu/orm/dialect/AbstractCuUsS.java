package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUUSS_ID)
	private Long id;

	/**
	 * @return
	 */
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUUSS.ID
		 */
		public static final String CUUSS_ID = "id";
		/**
		 * CUUSS.VE
		 */
		public static final String CUUSS_VE = "ve";
		/**
		 * CUUSS.CRDT
		 */
		public static final String CUUSS_CRDT = "cr_dt";
		/**
		 * CUUSS.CRTM
		 */
		public static final String CUUSS_CRTM = "cr_tm";
		/**
		 * CUUSS.LAUPDT
		 */
		public static final String CUUSS_LAUPDT = "la_up_dt";
		/**
		 * CUUSS.LAUPUSID
		 */
		public static final String CUUSS_LAUPUSID = "la_up_us_id";
		/**
		 * CUUSS.ST
		 */
		public static final String CUUSS_ST = "st";
		/**
		 * CUUSS.LOGINNA
		 */
		public static final String CUUSS_LOGINNA = "login_na";
		/**
		 * CUUSS.USNA
		 */
		public static final String CUUSS_USNA = "us_na";
		/**
		 * CUUSS.PATYCD
		 */
		public static final String CUUSS_PATYCD = "pa_ty_cd";
		/**
		 * CUUSS.PANO
		 */
		public static final String CUUSS_PANO = "pa_no";
		/**
		 * CUUSS.BRNO
		 */
		public static final String CUUSS_BRNO = "br_no";
		/**
		 * CUUSS.MONO
		 */
		public static final String CUUSS_MONO = "mo_no";
		/**
		 * CUUSS.MAILNO
		 */
		public static final String CUUSS_MAILNO = "mail_no";
		/**
		 * CUUSS.EXEYN
		 */
		public static final String CUUSS_EXEYN = "exe_yn";
		/**
		 * CUUSS.CUMAYN
		 */
		public static final String CUUSS_CUMAYN = "cu_ma_yn";
		/**
		 * CUUSS.FAEXEUSID
		 */
		public static final String CUUSS_FAEXEUSID = "fa_exe_us_id";
		/**
		 * CUUSS.HOLYN
		 */
		public static final String CUUSS_HOLYN = "hol_yn";
		/**
		 * CUUSS.HOLBEDT
		 */
		public static final String CUUSS_HOLBEDT = "hol_be_dt";
		/**
		 * CUUSS.HOLENDT
		 */
		public static final String CUUSS_HOLENDT = "hol_en_dt";
		/**
		 * CUUSS.CO
		 */
		public static final String CUUSS_CO = "co";
		/**
		 * CUUSS_SEXCD
		 */
		public static final String CUUSS_SEXCD = "sex_cd";

		/**
		 * CUUSPOST.CUUSID
		 */
		public static final String CUUSPOST_CUUSID = "us_id";
		/**
		 * CUUSPOST.POSTID
		 */
		public static final String CUUSPOST_POSTID = "post_no";
		/**
		 * CUUSPOST.CUUSTID
		 */
		public static final String CUUSROS_CUUSID = "us_id";
		/**
		 * CUUSPOST.CUUSTID
		 */
		public static final String CUUSROS_ROSID = "ro_no";

	}

}
