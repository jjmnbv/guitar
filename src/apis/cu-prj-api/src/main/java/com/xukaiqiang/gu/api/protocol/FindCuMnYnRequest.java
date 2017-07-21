package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 判断是否客户经理.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuMnYnRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	/**
	 * @return 客户ID
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id 客户ID
	 */
	public void setId(Long id) {
		this.id = id;
	}

}