package com.xukaiqiang.guitar.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractRole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.ROLE_ID)
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
		 * ROLE.ID
		 */
		public static final String ROLE_ID = "id";
		/**
		 * ROLE.ROLENAME
		 */
		public static final String ROLE_ROLENAME = "role_name";
	}

}
