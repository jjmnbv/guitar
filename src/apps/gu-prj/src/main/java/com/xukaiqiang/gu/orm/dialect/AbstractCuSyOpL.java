package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuSyOpL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUSYOPL_ID)
	private Long id;

	/**
	 * @return 标识
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
		 * CUSYOPL.ID
		 */
		public static final String CUSYOPL_ID = "id";
		/**
		 * CUSYOPL.VE
		 */
		public static final String CUSYOPL_VE = "ve";
		/**
		 * CUSYOPL.CRDT
		 */
		public static final String CUSYOPL_CRDT = "cr_dt";
		/**
		 * CUSYOPL.CRTM
		 */
		public static final String CUSYOPL_CRTM = "cr_tm";
		/**
		 * CUSYOPL.SYOPCD
		 */
		public static final String CUSYOPL_SYOPCD = "sy_op_cd";
		/**
		 * CUSYOPL.SYCD
		 */
		public static final String CUSYOPL_SYCD = "sy_cd";
		/**
		 * CUSYOPL.CO
		 */
		public static final String CUSYOPL_CO = "co";
		/**
		 * CUSYOPL.USLOGINNA
		 */
		public static final String CUSYOPL_USLOGINNA = "us_login_na";
		/**
		 * CUSYOPL.TENAID
		 */
		public static final String CUSYOPL_TENAID = "tena_id";
	}

}
