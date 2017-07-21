package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.OrderBy;

@MappedSuperclass
public abstract class AbstractCuIconS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.CUICONS_ICONNO)
	@OrderBy
	private String iconNo;

	/**
	 * @return 图标编号
	 */
	public String getIconNo() {
		return iconNo;
	}

	public void setIconNo(String iconNo) {
		this.iconNo = iconNo;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * CUICONS.ICONNO
		 */
		public static final String CUICONS_ICONNO = "icon_no";
		/**
		 * CUICONS.VE
		 */
		public static final String CUICONS_VE = "ve";
		/**
		 * CUICONS.CRDT
		 */
		public static final String CUICONS_CRDT = "cr_dt";
		/**
		 * CUICONS.CRTM
		 */
		public static final String CUICONS_CRTM = "cr_tm";
		/**
		 * CUICONS.LAUPDT
		 */
		public static final String CUICONS_LAUPDT = "la_up_dt";
		/**
		 * CUICONS.LAUPUSID
		 */
		public static final String CUICONS_LAUPUSID = "la_up_us_id";
		/**
		 * CUICONS.ICONNA
		 */
		public static final String CUICONS_ICONNA = "icon_na";
		/**
		 * CUICONS.ICONADCA
		 */
		public static final String CUICONS_ICONADCA = "icon_ad_ca";
		/**
		 * CUICONS.CO
		 */
		public static final String CUICONS_CO = "co";
	}

}
