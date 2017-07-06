package com.xukaiqiang.g.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractStore implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.STORE_ID)
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
		 * STORE.ID
		 */
		public static final String STORE_ID = "id";
		/**
		 * STORE.USERID
		 */
		public static final String STORE_USERID = "user_id";
		/**
		 * STORE.NAME
		 */
		public static final String STORE_NAME = "name";
		/**
		 * STORE.ADDRESS
		 */
		public static final String STORE_ADDRESS = "address";
	}

}
