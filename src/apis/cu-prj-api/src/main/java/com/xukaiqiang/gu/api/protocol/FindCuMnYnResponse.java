package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;

/**
 * 判断是否客户经理.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonInclude(Include.NON_NULL)
public class FindCuMnYnResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private String cuMaYn;

	/**
	 * @return 是否客户经理
	 */
	public String getCuMaYn() {
		return cuMaYn;
	}
	/**
	 * @param cuMaYn 是否客户经理
	 */
	public void setCuMaYn(String cuMaYn) {
		this.cuMaYn = cuMaYn;
	}

}