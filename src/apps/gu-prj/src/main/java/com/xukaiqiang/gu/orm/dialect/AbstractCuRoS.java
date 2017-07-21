package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuRoS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUROS_RONO)
	private String roNo;

	/**
	 * @return 角色编码
	 */
	public String getRoNo() {
		return roNo;
	}

	public void setRoNo(String roNo) {
		this.roNo = roNo;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUROS.RONO
		 */
		public static final String CUROS_RONO = "ro_no";
		/**
		 * CUROS.VE
		 */
		public static final String CUROS_VE = "ve";
		/**
		 * CUROS.CRDT
		 */
		public static final String CUROS_CRDT = "cr_dt";
		/**
		 * CUROS.CRTM
		 */
		public static final String CUROS_CRTM = "cr_tm";
		/**
		 * CUROS.LAUPDT
		 */
		public static final String CUROS_LAUPDT = "la_up_dt";
		/**
		 * CUROS.LAUPUSID
		 */
		public static final String CUROS_LAUPUSID = "la_up_us_id";
		/**
		 * CUROS.ST
		 */
		public static final String CUROS_ST = "st";
		/**
		 * CUROS.RONA
		 */
		public static final String CUROS_RONA = "ro_na";
		/**
		 * CUROS.STOUSEYN
		 */
		public static final String CUROS_STOUSEYN = "sto_use_yn";
		/**
		 * CUROS.CO
		 */
		public static final String CUROS_CO = "co";
	}

}
