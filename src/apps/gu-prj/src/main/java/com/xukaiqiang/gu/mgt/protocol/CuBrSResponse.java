package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuBrSResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private String brNo;
	private Integer ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private Long laUpUsId;
	private String brNa;
	private String st;
	private String brAbbrNo;
	private String conNa;
	private String conTelNo;
	private String postNo;
	private Integer brLevQt;
	private String prevBrNo;
	private String provCd;
	private String cityCd;
	private String parentBrNa;
	private String co;
	private String parentBrNo;
	private String conAdCa;
	private String legPeNa;
	private String conAdCaCo;
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
	 * 联系地址
	 * @return
	 */
	public String getConAdCa() {
		return conAdCa;
	}
	/**
	 * 联系地址
	 * @param conAdCa
	 */
	public void setConAdCa(String conAdCa) {
		this.conAdCa = conAdCa;
	}
	/**
	 * 机构法人
	 */
	public String getLegPeNa() {
		return legPeNa;
	}
	/**
	 * 机构法人
	 * @param legPeNa
	 */
	public void setLegPeNa(String legPeNa) {
		this.legPeNa = legPeNa;
	}
	/**
	 * 联系地址详细备注
	 * @return
	 */
	public String getConAdCaCo() {
		return conAdCaCo;
	}
	/**
	 * 联系地址详细备注
	 * @param conAdCaCo
	 */
	public void setConAdCaCo(String conAdCaCo) {
		this.conAdCaCo = conAdCaCo;
	}
	/**
	 * 上級机构编码
	 * 
	 * @return
	 */
	public String getParentBrNo() {
		return parentBrNo;
	}

	public void setParentBrNo(String parentBrNo) {
		this.parentBrNo = parentBrNo;
	}

	/**
	 * 备注
	 * 
	 * @return
	 */
	public String getCo() {
		return co;
	}

	public void setCo(String co) {
		this.co = co;
	}

	/**
	 * 上级机构名称
	 * 
	 * @return
	 */
	public String getParentBrNa() {
		return parentBrNa;
	}

	public void setParentBrNa(String parentBrNa) {
		this.parentBrNa = parentBrNa;
	}

	/**
	 * @return 机构编码
	 */
	public String getBrNo() {
		return brNo;
	}

	public void setBrNo(String brNo) {
		this.brNo = brNo;
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
	public Long getLaUpUsId() {
		return laUpUsId;
	}

	public void setLaUpUsId(Long laUpUsId) {
		this.laUpUsId = laUpUsId;
	}

	/**
	 * @return 机构名称
	 */
	public String getBrNa() {
		return brNa;
	}

	public void setBrNa(String brNa) {
		this.brNa = brNa;
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
	 * @return 金融机构简码
	 */
	public String getBrAbbrNo() {
		return brAbbrNo;
	}

	public void setBrAbbrNo(String brAbbrNo) {
		this.brAbbrNo = brAbbrNo;
	}

	/**
	 * @return 联系人
	 */
	public String getConNa() {
		return conNa;
	}

	public void setConNa(String conNa) {
		this.conNa = conNa;
	}

	/**
	 * @return 联系电话
	 */
	public String getConTelNo() {
		return conTelNo;
	}

	public void setConTelNo(String conTelNo) {
		this.conTelNo = conTelNo;
	}

	/**
	 * @return 邮编
	 */
	public String getPostNo() {
		return postNo;
	}

	public void setPostNo(String postNo) {
		this.postNo = postNo;
	}

	/**
	 * @return 机构级别1 表示1级机构 一般是总部2 表示2级机构。
	 */
	public Integer getBrLevQt() {
		return brLevQt;
	}

	public void setBrLevQt(Integer brLevQt) {
		this.brLevQt = brLevQt;
	}

	/**
	 * @return 上级机构编号
	 */
	public String getPrevBrNo() {
		return prevBrNo;
	}

	public void setPrevBrNo(String prevBrNo) {
		this.prevBrNo = prevBrNo;
	}

	/**
	 * @return 省份代码
	 */
	public String getProvCd() {
		return provCd;
	}

	public void setProvCd(String provCd) {
		this.provCd = provCd;
	}

	/**
	 * @return 城市代码
	 */
	public String getCityCd() {
		return cityCd;
	}

	public void setCityCd(String cityCd) {
		this.cityCd = cityCd;
	}

	public static <E> CuBrSResponse buildResponse(CuBrSResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
