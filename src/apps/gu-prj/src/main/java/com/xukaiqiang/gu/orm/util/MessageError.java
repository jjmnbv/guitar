package com.xukaiqiang.gu.orm.util;

/**
 * 报文错误码
 * 
 */
public enum MessageError {
	ERROR_UPDATEPW("请修改密码"),
	ERROR_NOAUTH("未登录"),
	ERROR_OVERPW("密码已过期请修改密码"),
	ERROR_AUTHED("已经登录");
	private String msg;

	private MessageError(String msg) {
		this.msg = msg;
	}

	public String getMsg() {
		return msg;
	}

}
