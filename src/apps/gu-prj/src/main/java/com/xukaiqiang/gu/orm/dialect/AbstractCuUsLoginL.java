package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsLoginL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = Columns.CUUSLOGINL_LOGINTRID)
	private Long loginTrId;

	/**
	 * @return 登录流水Id
	 */
	public Long getLoginTrId() {
		return loginTrId;
	}

	public void setLoginTrId(Long loginTrId) {
		this.loginTrId = loginTrId;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUUSLOGINL.LOGINTRID
		 */
		public static final String CUUSLOGINL_LOGINTRID = "login_tr_id";
		/**
		 * CUUSLOGINL.LOGINID
		 */
		public static final String CUUSLOGINL_LOGINID = "login_id";
		/**
		 * CUUSLOGINL.VE
		 */
		public static final String CUUSLOGINL_VE = "ve";
		/**
		 * CUUSLOGINL.CEDT
		 */
		public static final String CUUSLOGINL_CRDT = "cr_dt";
		/**
		 * CUUSLOGINL.CRTM
		 */
		public static final String CUUSLOGINL_CRTM = "cr_tm";
		/**
		 * CUUSLOGINL.LOGINOUTDT
		 */
		public static final String CUUSLOGINL_LOGINOUTDT = "login_out_dt";
		/**
		 * CUUSLOGINL.LOGINOUTTM
		 */
		public static final String CUUSLOGINL_LOGINOUTTM = "login_out_tm";
		/**
		 * CUUSLOGINL.LOGINNA
		 */
		public static final String CUUSLOGINL_LOGINNA = "login_na";
		/**
		 * CUUSLOGINL.IP
		 */
		public static final String CUUSLOGINL_IP = "login_ip";
	}

}
