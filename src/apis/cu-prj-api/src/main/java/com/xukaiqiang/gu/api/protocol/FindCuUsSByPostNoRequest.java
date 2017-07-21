package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 通过岗位查找用户.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuUsSByPostNoRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String postNo;

	/**
	 * @return 岗位编号
	 */
	public String getPostNo() {
		return postNo;
	}
	/**
	 * @param postNo 岗位编号
	 */
	public void setPostNo(String postNo) {
		this.postNo = postNo;
	}

}