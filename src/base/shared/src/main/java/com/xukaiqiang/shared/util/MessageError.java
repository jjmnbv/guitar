package com.xukaiqiang.shared.util;

/**
 * 报文错误码
 *
 */
public enum MessageError {

	ERROR_CONCURRENT("您已在别处登录此处已下线"),

	ERROR_ATTEMPTS("超出最大登陆次数"),

	ERROR_DISABLED("账户已禁用"),

	ERROR_AUTH("用户名或密码错误"),

	ERROR_AUTHCAPTCHA("用户名或密码错误"),

	ERROR_CAPTCHA("验证码错误"),

	ERROR_NOAUTH("未登录"),

	ERROR_TIMEOUT("登录超时"),

	ERROR_PARAM("参数错误"),

	ERROR_SYSTEM("内部错误"),

	ERROR_EXISTS("数据已存在"),

	ERROR_NULL("数据不存在");

	private String msg;

	private MessageError(String msg) {
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

}
