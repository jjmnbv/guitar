package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuPostSUpdateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String postNo;
	private String ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private String laUpUsId;
	private String postNa;
	private String st;
	private String stoUseYn;
	private String auPostYn;
	private String coPostYn;
	private String co;
	private String queryAllParamString;
	/**
	 * 全部查询条件
	 * @return
	 */
	public String getQueryAllParamString() {
		return queryAllParamString;
	}
	/**
	 * 全部查询条件
	 * @param queryAllParamString
	 */
	public void setQueryAllParamString(String queryAllParamString) {
		this.queryAllParamString = queryAllParamString;
	}
	/**
	 * @return 岗位编号
	 */
	public String getPostNo() {
		return postNo;
	}

	public void setPostNo(String postNo) {
		this.postNo = postNo;
	}

	/**
	 * @return 版本
	 */
	public String getVe() {
		return ve;
	}

	public void setVe(String ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期
	 */
	public String getCrDt() {
		return crDt;
	}

	public void setCrDt(String crDt) {
		this.crDt = crDt;
	}

	/**
	 * @return 创建时间
	 */
	public String getCrTm() {
		return crTm;
	}

	public void setCrTm(String crTm) {
		this.crTm = crTm;
	}

	/**
	 * @return 最后更新日期
	 */
	public String getLaUpDt() {
		return laUpDt;
	}

	public void setLaUpDt(String laUpDt) {
		this.laUpDt = laUpDt;
	}

	/**
	 * @return 最新更新用户
	 */
	public String getLaUpUsId() {
		return laUpUsId;
	}

	public void setLaUpUsId(String laUpUsId) {
		this.laUpUsId = laUpUsId;
	}

	/**
	 * @return 岗位名称
	 */
	public String getPostNa() {
		return postNa;
	}

	public void setPostNa(String postNa) {
		this.postNa = postNa;
	}

	/**
	 * @return 状态CS 初始JH 激活参见 通用字典 状态分类28
	 */
	public String getSt() {
		return st;
	}

	public void setSt(String st) {
		this.st = st;
	}

	/**
	 * @return 是否商店使用
	 */
	public String getStoUseYn() {
		return stoUseYn;
	}

	public void setStoUseYn(String stoUseYn) {
		this.stoUseYn = stoUseYn;
	}

	/**
	 * @return 是否审批岗位
	 */
	public String getAuPostYn() {
		return auPostYn;
	}

	public void setAuPostYn(String auPostYn) {
		this.auPostYn = auPostYn;
	}

	/**
	 * @return 是否催收岗
	 */
	public String getCoPostYn() {
		return coPostYn;
	}

	public void setCoPostYn(String coPostYn) {
		this.coPostYn = coPostYn;
	}

	/**
	 * @return 备注
	 */
	public String getCo() {
		return co;
	}

	public void setCo(String co) {
		this.co = co;
	}

}
