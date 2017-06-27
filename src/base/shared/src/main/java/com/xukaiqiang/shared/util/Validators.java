package com.xukaiqiang.shared.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.xukaiqiang.shared.protocol.MobileResponse;
import com.xukaiqiang.shared.protocol.OutputMessage;

public abstract class Validators {

	private static final Logger LOG = LoggerFactory.getLogger(Validators.class);

	/**
	 * 正则：邮编
	 */
	public static final String REGEXP_ZIP = "^[0-9]{6}$";
	/**
	 * 正则：手机号
	 */
	public static final String REGEXP_PHONENUMBER = "^1[3|5|7|8|][0-9]{9}$";
	/**
	 * 正则：身份证
	 */
	public static final String REGEXP_IDCARD = "^(\\d{18})|(\\d{15})$";
	/**
	 * 正则：银行卡
	 */
	public static final String REGEXP_BANKCARD = "^[0-9]+$";
	/**
	 * 正则：中文
	 */
	public static final String REGEXP_CHINESE = "^[\u4e00-\u9fa5]+$";
	/**
	 * 正则：QQ号
	 */
	public static final String REGEXP_QQ = "^[1-9][0-9]{4,10}$";

	/**
	 * 正则：密码
	 */
	public static final String REGEXP_PWD = "^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]+$";

	/**
	 * 添加参数校验错误到输出消息
	 * 
	 * @param output
	 * @param result
	 * @param messageSource
	 * @param locale
	 */
	public static void addParameterErrors(OutputMessage output, BindingResult result, MessageSource messageSource,
			Locale locale) {
		List<String> errors = new ArrayList<String>();
		for (FieldError error : result.getFieldErrors()) {
			String[] codes = error.getCodes();
			if (codes != null) {
				LOG.info("校验失败：{}", codes[0]);
			}
			errors.add(messageSource.getMessage(error, locale));
		}
		output.setParameterErrors(errors);
	}

	/**
	 * 添加参数校验错误码到输出消息
	 * 
	 * @param output
	 * @param code
	 * @param messageSource
	 * @param locale
	 */
	public static void addParameterErrors(OutputMessage output, String code, MessageSource messageSource,
			Locale locale) {
		LOG.info("校验失败：{}", code);
		if (code == null) {
			return;
		}
		output.setParameterErrors(messageSource.getMessage(code, null, code, locale));
	}

	public static void addParameterErrors(MobileResponse response, BindingResult result, MessageSource messageSource,
			Locale locale) {
		List<String> errors = new ArrayList<String>();
		for (FieldError error : result.getFieldErrors()) {
			String[] codes = error.getCodes();
			if (codes != null) {
				LOG.info("校验失败：{}", codes[0]);
			}
			errors.add(messageSource.getMessage(error, locale));
		}
		response.error(MessageError.ERROR_PARAM.name(), errors.toString());
	}

	public static void addParameterErrors(MobileResponse response, String code, MessageSource messageSource,
			Locale locale) {
		LOG.info("校验失败：{}", code);
		if (code == null) {
			return;
		}
		response.error(code, messageSource.getMessage(code, null, code, locale));
	}

}
