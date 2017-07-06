package com.xukaiqiang.guitar.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractEdu implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.EDU_ID)
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
		 * EDU.ID
		 */
		public static final String EDU_ID = "id";
		/**
		 * EDU.USERID
		 */
		public static final String EDU_USERID = "user_id";
		/**
		 * EDU.SCHOOLNAME
		 */
		public static final String EDU_SCHOOLNAME = "school_name";
	}

}
