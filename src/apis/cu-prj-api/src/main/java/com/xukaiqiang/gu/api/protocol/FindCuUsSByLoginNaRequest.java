package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 通过登录名查找用户.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuUsSByLoginNaRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String loginNa;

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