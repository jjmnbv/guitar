package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuRoRiSFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String roNo;
	private String resNo;
	private String resActCd;
	private Integer ve;
	private String crDtFrom;
	private String crDtTo;
	private String crTm;
	private String laUpDtFrom;
	private String laUpDtTo;
	private Long laUpUsId;
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
	public String getRoNo() {
		return roNo;
	}

	public void setRoNo(String roNo) {
		this.roNo = roNo;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		return resNo;
	}

	public void setResNo(String resNo) {
		this.resNo = resNo;
	}

	/**
	 * @return 资源动作码<br>ZJ 增加<br>XG 修改<br>SC 删除<br>CX 查询<br>FW 访问<br>参见字典分类代码：70
	 */
	public String getResActCd() {
		return resActCd;
	}

	public void setResActCd(String resActCd) {
		this.resActCd = resActCd;
	}

	/**
	 * @return 版本
	 */
	public Integer getVe() {
		return ve;
	}

	public void setVe(Integer ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期 from
	 */
	public String getCrDtFrom() {
		return crDtFrom;
	}

	public void setCrDtFrom(String crDtFrom) {
		this.crDtFrom = crDtFrom;
	}

	/**
	 * @return 创建日期 to
	 */
	public String getCrDtTo() {
		return crDtTo;
	}

	public void setCrDtTo(String crDtTo) {
		this.crDtTo = crDtTo;
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
	 * @return 最后更新日期 from
	 */
	public String getLaUpDtFrom() {
		return laUpDtFrom;
	}

	public void setLaUpDtFrom(String laUpDtFrom) {
		this.laUpDtFrom = laUpDtFrom;
	}

	/**
	 * @return 最后更新日期 to
	 */
	public String getLaUpDtTo() {
		return laUpDtTo;
	}

	public void setLaUpDtTo(String laUpDtTo) {
		this.laUpDtTo = laUpDtTo;
	}

	/**
	 * @return 最新更新用户
	 */
	public Long getLaUpUsId() {
		return laUpUsId;
	}

	public void setLaUpUsId(Long laUpUsId) {
		this.laUpUsId = laUpUsId;
	}

}
