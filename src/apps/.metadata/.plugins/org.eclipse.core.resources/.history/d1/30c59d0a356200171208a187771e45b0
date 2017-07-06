package com.xukaiqiang.g.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractCon implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CON_ID)
	private Integer id;

	/**
	 * @return 
	 */
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CON.ID
		 */
		public static final String CON_ID = "id";
		/**
		 * CON.USERID
		 */
		public static final String CON_USERID = "user_id";
		/**
		 * CON.PHONE
		 */
		public static final String CON_PHONE = "phone";
		/**
		 * CON.WECHAT
		 */
		public static final String CON_WECHAT = "wechat";
		/**
		 * CON.QQ
		 */
		public static final String CON_QQ = "qq";
		/**
		 * CON.EMAIL
		 */
		public static final String CON_EMAIL = "email";
		/**
		 * CON.LIVENUM
		 */
		public static final String CON_LIVENUM = "live_num";
		/**
		 * CON.LIVENAME
		 */
		public static final String CON_LIVENAME = "live_name";
	}

}
