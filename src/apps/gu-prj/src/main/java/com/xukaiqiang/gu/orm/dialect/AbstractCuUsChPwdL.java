package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsChPwdL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = Columns.CUUSCHPWDL_ID)
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
		 * CUUSCHPWDL.ID
		 */
		public static final String CUUSCHPWDL_ID = "id";
		/**
		 * CUUSCHPWDL.USID
		 */
		public static final String CUUSCHPWDL_USID = "us_id";
		/**
		 * CUUSCHPWDL.VE
		 */
		public static final String CUUSCHPWDL_VE = "ve";
		/**
		 * CUUSCHPWDL.CRDT
		 */
		public static final String CUUSCHPWDL_CRDT = "cr_dt";
		/**
		 * CUUSCHPWDL.CRTM
		 */
		public static final String CUUSCHPWDL_CRTM = "cr_tm";
		/**
		 * CUUSCHPWDL.LAUPDT
		 */
		public static final String CUUSCHPWDL_LAUPDT = "la_up_dt";
		/**
		 * CUUSCHPWDL.LAUPUSID
		 */
		public static final String CUUSCHPWDL_LAUPUSID = "la_up_us_id";
		/**
		 * CUUSCHPWDL.PWD
		 */
		public static final String CUUSCHPWDL_PWD = "pwd";
	}

}
