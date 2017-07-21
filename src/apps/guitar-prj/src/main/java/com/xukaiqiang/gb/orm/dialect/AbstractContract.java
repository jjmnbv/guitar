package com.xukaiqiang.gb.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractContract implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CONTRACT_ID)
	private Integer id;

	/**
	 * @return 编号
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
		 * CONTRACT.ID
		 */
		public static final String CONTRACT_ID = "id";
		/**
		 * CONTRACT.USERID
		 */
		public static final String CONTRACT_USERID = "user_id";
		/**
		 * CONTRACT.PHONE
		 */
		public static final String CONTRACT_PHONE = "phone";
		/**
		 * CONTRACT.WECHAT
		 */
		public static final String CONTRACT_WECHAT = "wechat";
		/**
		 * CONTRACT.QQ
		 */
		public static final String CONTRACT_QQ = "qq";
		/**
		 * CONTRACT.EMAIL
		 */
		public static final String CONTRACT_EMAIL = "email";
		/**
		 * CONTRACT.LIVENUM
		 */
		public static final String CONTRACT_LIVENUM = "live_num";
		/**
		 * CONTRACT.LIVENAME
		 */
		public static final String CONTRACT_LIVENAME = "live_name";
	}

}
