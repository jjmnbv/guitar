package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsOpL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = Columns.CUUSOPL_ID)
	private Long id;

	/**
	 * @return 登录Id
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
		 * CUUSOPL.ID
		 */
		public static final String CUUSOPL_ID = "id";
		/**
		 * CUUSOPL.LOGINTRID
		 */
		public static final String CUUSOPL_LOGINTRID = "login_tr_id";
		/**
		 * CUUSOPL.VE
		 */
		public static final String CUUSOPL_VE = "ve";
		/**
		 * CUUSOPL.CRDT
		 */
		public static final String CUUSOPL_CRDT = "cr_dt";
		/**
		 * CUUSOPL.CRTM
		 */
		public static final String CUUSOPL_CRTM = "cr_tm";
		/**
		 * CUUSOPL.RESNO
		 */
		public static final String CUUSOPL_RESNO = "res_no";
		/**
		 * CUUSOPL.RESNA
		 */
		public static final String CUUSOPL_RESNA = "res_na";
		/**
		 * CUUSOPL.CO
		 */
		public static final String CUUSOPL_CO = "co";
		public static final String CUUSOPL_RESACTCA = "res_act_ca";
		public static final String CUUSOPL_RESACTCD = "res_act_cd";
		public static final String CUUSOPL_OPIP = "op_ip";
	}

}
