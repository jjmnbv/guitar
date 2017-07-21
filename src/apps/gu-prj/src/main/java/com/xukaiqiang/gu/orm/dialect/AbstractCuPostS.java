package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuPostS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUPOSTS_POSTNO)
	private String postNo;

	/**
	 * @return 岗位编号
	 */
	public String getPostNo() {
		return postNo;
	}

	public void setPostNo(String postNo) {
		this.postNo = postNo;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUPOSTS.POSTNO
		 */
		public static final String CUPOSTS_POSTNO = "post_no";
		/**
		 * CUPOSTS.VE
		 */
		public static final String CUPOSTS_VE = "ve";
		/**
		 * CUPOSTS.CRDT
		 */
		public static final String CUPOSTS_CRDT = "cr_dt";
		/**
		 * CUPOSTS.CRTM
		 */
		public static final String CUPOSTS_CRTM = "cr_tm";
		/**
		 * CUPOSTS.LAUPDT
		 */
		public static final String CUPOSTS_LAUPDT = "la_up_dt";
		/**
		 * CUPOSTS.LAUPUSID
		 */
		public static final String CUPOSTS_LAUPUSID = "la_up_us_id";
		/**
		 * CUPOSTS.POSTNA
		 */
		public static final String CUPOSTS_POSTNA = "post_na";
		/**
		 * CUPOSTS.ST
		 */
		public static final String CUPOSTS_ST = "st";
		/**
		 * CUPOSTS.STOUSEYN
		 */
		public static final String CUPOSTS_STOUSEYN = "sto_use_yn";
		/**
		 * CUPOSTS.AUPOSTYN
		 */
		public static final String CUPOSTS_AUPOSTYN = "au_post_yn";
		/**
		 * CUPOSTS.COPOSTYN
		 */
		public static final String CUPOSTS_COPOSTYN = "co_post_yn";
		/**
		 * CUPOSTS.CO
		 */
		public static final String CUPOSTS_CO = "co";
	}

}
