package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.xukaiqiang.shared.util.Validators;

/**
 * 请求报文-修改登录密码
 */
public class ChangeLoginPasswordRequest implements Serializable {

	private static final long serialVersionUID = 1L;

	private String plainOldPassword;
	@Pattern(regexp = Validators.REGEXP_PWD)
	@Size(min = 6, max = 16)
	private String plainNewPassword;

	public String getPlainOldPassword() {
		return plainOldPassword;
	}

	public void setPlainOldPassword(String plainOldPassword) {
		this.plainOldPassword = plainOldPassword;
	}

	public String getPlainNewPassword() {
		return plainNewPassword;
	}

	public void setPlainNewPassword(String plainNewPassword) {
		this.plainNewPassword = plainNewPassword;
	}

}