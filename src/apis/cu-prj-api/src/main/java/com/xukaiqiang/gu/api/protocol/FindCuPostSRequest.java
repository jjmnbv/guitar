package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 查找所有岗位.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuPostSRequest implements Serializable {
	private static final long serialVersionUID = 1L;
    private String auPostYn;
    /**
     * 是否审批岗位
     * @return
     */
	public String getAuPostYn() {
		return auPostYn;
	}
	/**
	 * 是否审批岗位
	 * @param auPostYn
	 */
	public void setAuPostYn(String auPostYn) {
		this.auPostYn = auPostYn;
	}
    

}