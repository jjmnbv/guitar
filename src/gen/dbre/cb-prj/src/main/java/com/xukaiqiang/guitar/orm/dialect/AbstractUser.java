package com.xukaiqiang.guitar.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractUser implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.USER_ID)
	private Integer id;

	/**
	 * @return 主键
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
		 * USER.ID
		 */
		public static final String USER_ID = "id";
		/**
		 * USER.USERNAME
		 */
		public static final String USER_USERNAME = "user_name";
		/**
		 * USER.PASSWORD
		 */
		public static final String USER_PASSWORD = "pass_word";
		/**
		 * USER.ROLEID
		 */
		public static final String USER_ROLEID = "role_Id";
		/**
		 * USER.DETAILID
		 */
		public static final String USER_DETAILID = "detail_Id";
		/**
		 * USER.SEX
		 */
		public static final String USER_SEX = "sex";
		/**
		 * USER.AGE
		 */
		public static final String USER_AGE = "age";
		/**
		 * USER.NICKNAME
		 */
		public static final String USER_NICKNAME = "nick_name";
	}

}
