package com.xukaiqiang.guitar.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractWorks implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.WORKS_ID)
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
		 * WORKS.ID
		 */
		public static final String WORKS_ID = "id";
		/**
		 * WORKS.USERID
		 */
		public static final String WORKS_USERID = "user_id";
		/**
		 * WORKS.NAME
		 */
		public static final String WORKS_NAME = "name";
		/**
		 * WORKS.URL
		 */
		public static final String WORKS_URL = "url";
	}

}
