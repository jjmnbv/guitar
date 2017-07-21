package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsC implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUUSC_ID)
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
		 * CUUSC.ID
		 */
		public static final String CUUSC_ID = "id";
		/**
		 * CUUSC.VE
		 */
		public static final String CUUSC_VE = "ve";
		/**
		 * CUUSC.CRDT
		 */
		public static final String CUUSC_CRDT = "cr_dt";
		/**
		 * CUUSC.CRTM
		 */
		public static final String CUUSC_CRTM = "cr_tm";
		/**
		 * CUUSC.LAUPDT
		 */
		public static final String CUUSC_LAUPDT = "la_up_dt";
		/**
		 * CUUSC.LAUPUSID
		 */
		public static final String CUUSC_LAUPUSID = "la_up_us_id";
		/**
		 * CUUSC.PWDLE
		 */
		public static final String CUUSC_PWDLE = "pwd_le";
		/**
		 * CUUSC.PWDALGCD
		 */
		public static final String CUUSC_PWDALGCD = "pwd_alg_cd";
		/**
		 * CUUSC.LOGINERRQT
		 */
		public static final String CUUSC_LOGINERRQT = "login_err_qt";
		/**
		 * CUUSC.UNLOCKTYCD
		 */
		public static final String CUUSC_UNLOCKTYCD = "unlock_ty_cd";
		/**
		 * CUUSC.AUTOUNLOCKMINUQT
		 */
		public static final String CUUSC_AUTOUNLOCKMINUQT = "auto_unlock_minu_qt";
	}

}
