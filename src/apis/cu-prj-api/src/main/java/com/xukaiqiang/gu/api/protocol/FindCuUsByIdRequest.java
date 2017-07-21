package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 通过id查找名称.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuUsByIdRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;

	/**
	 * @return ID
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id ID
	 */
	public void setId(Long id) {
		this.id = id;
	}

}