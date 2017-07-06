package com.xukaiqiang.g;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class GVars {

	/**
	 * 表单日期格式
	 */
	public static final String FORM_FMT_DATE = "yyyy-MM-dd";

	/**
	 * 转JSON的地区
	 */
	public static final String JSON_FMT_LOCALE = "zh";

	/**
	 * 转JSON的时区
	 */
	public static final String JSON_FMT_TIMEZONE = "GMT+8";

	/**
	 * 转JSON的时间格式
	 */
	public static final String JSON_FMT_DATETIME = "yyyy-MM-dd HH:mm:ss";

	/** 
	 * 数据库日期format
	 */
	public static final DateFormat DB_DATE_FORMAT = new SimpleDateFormat(FORM_FMT_DATE);

	/**
	 * 从数据库获取日期
	 * 
	 * @param date
	 * @return
	 */
	public static Date getDateFormDb(String date) {
		try {
			return DB_DATE_FORMAT.parse(date);
		} catch (ParseException e) {
			return null;
		}
	}

}
