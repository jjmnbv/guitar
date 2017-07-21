package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 查找当前机构下的经理.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuMaYnsRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String brNo;

	/**
	 * @return 机构编号
	 */
	public String getBrNo() {
		return brNo;
	}
	/**
	 * @param brNo 机构编号
	 */
	public void setBrNo(String brNo) {
		this.brNo = brNo;
	}

}