package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuResS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CURESS_RESNO)
	private String resNo;

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		return resNo;
	}

	public void setResNo(String resNo) {
		this.resNo = resNo;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CURORIS.RESNO
		 */
		public static final String CURORIS_RESNO = "res_no";

		/**
		 * CURORIS.RONO
		 */
		public static final String CURORIS_RONO = "ro_no";

		/**
		 * CURESS.RESNO
		 */
		public static final String CURESS_RESNO = "res_no";
		/**
		 * CURESS.VE
		 */
		public static final String CURESS_VE = "ve";
		/**
		 * CURESS.CRDT
		 */
		public static final String CURESS_CRDT = "cr_dt";
		/**
		 * CURESS.CRTM
		 */
		public static final String CURESS_CRTM = "cr_tm";
		/**
		 * CURESS.LAUPDT
		 */
		public static final String CURESS_LAUPDT = "la_up_dt";
		/**
		 * CURESS.LAUPUSID
		 */
		public static final String CURESS_LAUPUSID = "la_up_us_id";
		/**
		 * CURESS.RESNA
		 */
		public static final String CURESS_RESNA = "res_na";
		/**
		 * CURESS.RESSYCD
		 */
		public static final String CURESS_RESSYCD = "res_sy_cd";
		/**
		 * CURESS.FARESNO
		 */
		public static final String CURESS_FARESNO = "fa_res_no";
		/**
		 * CURESS.RESURLCA
		 */
		public static final String CURESS_RESURLCA = "res_url_ca";
		/**
		 * CURESS.RESICONNO
		 */
		public static final String CURESS_RESICONNO = "res_icon_no";
		/**
		 * CURESS.DISPOR
		 */
		public static final String CURESS_DISPOR = "disp_or";
		/**
		 * CURESS.PAGEMARKYN
		 */
		public static final String CURESS_PAGEMARKYN = "page_mark_yn";
		/**
		 * CURESS.CO
		 */
		public static final String CURESS_CO = "co";
	}

}
