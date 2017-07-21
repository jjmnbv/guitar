package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;

/**
 * 通过id查找名称.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonInclude(Include.NON_NULL)
public class FindCuUsByIdResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private String usNa;
	private String loginNa;

	/**
	 * @return 用户名称
	 */
	public String getUsNa() {
		return usNa;
	}
	/**
	 * @param usNa 用户名称
	 */
	public void setUsNa(String usNa) {
		this.usNa = usNa;
	}

	/**
	 * @return 登录名
	 */
	public String getLoginNa() {
		return loginNa;
	}
	/**
	 * @param loginNa 登录名
	 */
	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

}