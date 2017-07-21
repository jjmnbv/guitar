package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * 工单配置查询用户.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class FindCuUsToWorkOrderRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String usNa;
	private String postNo;
	private String brNo;
	private Integer pageNumber;

	private Integer pageSize;

	public Integer getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(Integer pageNumber) {
		this.pageNumber = pageNumber;
	}

	public Integer getPageSize() {
		return pageSize;
	}

	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	/**
	 * @return 用户姓名
	 */
	public String getUsNa() {
		return usNa;
	}
	/**
	 * @param usNa 用户姓名
	 */
	public void setUsNa(String usNa) {
		this.usNa = usNa;
	}

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