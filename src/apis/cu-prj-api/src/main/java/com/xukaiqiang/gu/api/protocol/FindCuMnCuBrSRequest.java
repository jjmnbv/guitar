package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 根据客户经理查找机构.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuMnCuBrSRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String loginNa;

	/**
	 * @return 客户登录名
	 */
	public String getLoginNa() {
		return loginNa;
	}
	/**
	 * @param loginNa 客户登录名
	 */
	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

}