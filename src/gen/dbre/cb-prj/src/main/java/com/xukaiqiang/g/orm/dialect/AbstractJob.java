package com.xukaiqiang.g.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractJob implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.JOB_ID)
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
		 * JOB.ID
		 */
		public static final String JOB_ID = "id";
		/**
		 * JOB.USERID
		 */
		public static final String JOB_USERID = "user_id";
		/**
		 * JOB.CATEGORY
		 */
		public static final String JOB_CATEGORY = "category";
		/**
		 * JOB.WORKAGE
		 */
		public static final String JOB_WORKAGE = "work_age";
		/**
		 * JOB.BEGINTIME
		 */
		public static final String JOB_BEGINTIME = "begin_time";
		/**
		 * JOB.ENDTIME
		 */
		public static final String JOB_ENDTIME = "end_time";
		/**
		 * JOB.ADDRESSCITY
		 */
		public static final String JOB_ADDRESSCITY = "address_city";
		/**
		 * JOB.ADDRESSAREA
		 */
		public static final String JOB_ADDRESSAREA = "address_area";
		/**
		 * JOB.ADDRESSPROVINCE
		 */
		public static final String JOB_ADDRESSPROVINCE = "address_province";
		/**
		 * JOB.ADDRESSDETAIL
		 */
		public static final String JOB_ADDRESSDETAIL = "address_detail";
		/**
		 * JOB.SALARY
		 */
		public static final String JOB_SALARY = "salary";
		/**
		 * JOB.COMMONT
		 */
		public static final String JOB_COMMONT = "commont";
		/**
		 * JOB.MUSICSTYLE
		 */
		public static final String JOB_MUSICSTYLE = "music_style";
		/**
		 * JOB.HAVEBAND
		 */
		public static final String JOB_HAVEBAND = "have_band";
		/**
		 * JOB.BANDNAME
		 */
		public static final String JOB_BANDNAME = "band_name";
		/**
		 * JOB.HAVEPRO
		 */
		public static final String JOB_HAVEPRO = "have_pro";
		/**
		 * JOB.PRONAME
		 */
		public static final String JOB_PRONAME = "pro_name";
	}

}
