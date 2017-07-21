package com.xukaiqiang.gb.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractEducation implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.EDUCATION_ID)
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
		 * EDUCATION.ID
		 */
		public static final String EDUCATION_ID = "id";
		/**
		 * EDUCATION.USERID
		 */
		public static final String EDUCATION_USERID = "user_id";
		/**
		 * EDUCATION.SCHOOLNAME
		 */
		public static final String EDUCATION_SCHOOLNAME = "school_name";
	}

}
