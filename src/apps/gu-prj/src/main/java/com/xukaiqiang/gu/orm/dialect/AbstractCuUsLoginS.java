package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCuUsLoginS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUUSLOGINS_USID)
	private Long usId;

	/**
	 * @return 用户Id
	 */
	public Long getUsId() {
		return usId;
	}

	public void setUsId(Long usId) {
		this.usId = usId;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUUSLOGINS.USID
		 */
		public static final String CUUSLOGINS_USID = "us_id";
		/**
		 * CUUSLOGINS.VE
		 */
		public static final String CUUSLOGINS_VE = "ve";
		/**
		 * CUUSLOGINS.CRDT
		 */
		public static final String CUUSLOGINS_CRDT = "cr_dt";
		/**
		 * CUUSLOGINS.CRTM
		 */
		public static final String CUUSLOGINS_CRTM = "cr_tm";
		/**
		 * CUUSLOGINS.LAUPDT
		 */
		public static final String CUUSLOGINS_LAUPDT = "la_up_dt";
		/**
		 * CUUSLOGINS.LAUPUSID
		 */
		public static final String CUUSLOGINS_LAUPUSID = "la_up_us_id";
		/**
		 * CUUSLOGINS.ST
		 */
		public static final String CUUSLOGINS_ST = "st";
		/**
		 * CUUSLOGINS.PWD
		 */
		public static final String CUUSLOGINS_PWD = "pwd";
		/**
		 * CUUSLOGINS.PWDOVYN
		 */
		public static final String CUUSLOGINS_PWDOVYN = "pwd_ov_yn";
		/**
		 * CUUSLOGINS.PWDSALT
		 */
		public static final String CUUSLOGINS_PWDSALT = "pwd_salt";
		/**
		 * CUUSLOGINS.USLOCKYN
		 */
		public static final String CUUSLOGINS_USLOCKYN = "us_lock_yn";
		/**
		 * CUUSLOGINS.PREVCHPWDDT
		 */
		public static final String CUUSLOGINS_PREVCHPWDDT = "prev_ch_pwd_dt";
		/**
		 * CUUSLOGINS.NEXTCHPWDDT
		 */
		public static final String CUUSLOGINS_NEXTCHPWDDT = "next_ch_pwd_dt";
		/**
		 * CUUSLOGINS.LOGINERRQT
		 */
		public static final String CUUSLOGINS_LOGINERRQT = "login_err_qt";
		/**
		 * CUUSLOGINS.LOCKDT
		 */
		public static final String CUUSLOGINS_LOCKDT = "lock_dt";
		/**
		 * CUUSLOGINS.LOCKTM
		 */
		public static final String CUUSLOGINS_LOCKTM = "lock_tm";
		/**
		 * CUUSLOGINS.AUTOUNLOCKDT
		 */
		public static final String CUUSLOGINS_AUTOUNLOCKDT = "auto_unlock_dt";
		/**
		 * CUUSLOGINS.AUTOUNLOCKTM
		 */
		public static final String CUUSLOGINS_AUTOUNLOCKTM = "auto_unlock_tm";
		/**
		 * CUUSLOGINS.LOGINNA
		 */
		public static final String CUUSLOGINS_LOGINNA = "login_na";
	}

}
