package com.xukaiqiang.gu.orm.dialect;

import java.io.Serializable;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractDictionary implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * DICTIONARY.ID
		 */
		public static final String DICTIONARY_ID = "di_ki_id";
		/**
		 * DICTIONARY.CODE
		 */
		public static final String DICTIONARY_CODE = "di_cd";
		/**
		 * DICTIONARY.VERSION
		 */
		public static final String DICTIONARY_VERSION = "ve";
		/**
		 * DICTIONARY.NAME
		 */
		public static final String DICTIONARY_NAME = "di_ca";
		/**
		 * DICTIONARY.STATUS
		 */
		public static final String DICTIONARY_STATUS = "st";
		/**
		 * DICTIONARY.SUBID
		 */
		public static final String DICTIONARY_SUBID = "su_di_ki_id";
		/**
		 * DICTIONARY.SUBCODE
		 */
		public static final String DICTIONARY_SUBCODE = "su_di_cd";
		/**
		 * DICTIONARY.DISPORDER
		 */
		public static final String DICTIONARY_DISPORDER = "disp_or";
		/**
		 * DICTIONARY.CICODE
		 */
		public static final String DICTIONARY_CICODE = "ci_cd";
		/**
		 * DICTIONARY.CREATEDATE
		 */
		public static final String DICTIONARY_CREATEDATE = "cr_dt";
		/**
		 * DICTIONARY.LASTUPDATE
		 */
		public static final String DICTIONARY_LASTUPDATE = "la_up_dt";
		/**
		 * DICTIONARY.LASTUPDATEUSERID
		 */
		public static final String DICTIONARY_LASTUPDATEUSERID = "la_up_us_id";
	}

}
