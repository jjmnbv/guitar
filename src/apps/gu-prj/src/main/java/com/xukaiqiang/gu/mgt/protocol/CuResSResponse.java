package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.gu.orm.entity.CuIconS;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.gu.orm.entity.CuSyC;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuResSResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private String resNo;
	private Integer ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private Long laUpUsId;
	private String resNa;
	private String resSyCd;
	private String faResNo;
	private String resUrlCa;
	private String resIconNo;
	private Short dispOr;
	private String pageMarkYn;
	private String co;
	private List<CuResS> ch = new ArrayList<CuResS>();
	private CuSyC cusyc;
	private CuIconS cuicos;
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
	 * 系統配置
	 * 
	 * @return
	 */
	public CuSyC getCusyc() {
		return cusyc;
	}

	public void setCusyc(CuSyC cusyc) {
		this.cusyc = cusyc;
	}

	/**
	 * 图标配置
	 * 
	 * @return
	 */
	public CuIconS getCuicos() {
		return cuicos;
	}

	public void setCuicos(CuIconS cuicos) {
		this.cuicos = cuicos;
	}

	/**
	 * 
	 * @return 子菜单集
	 */
	public List<CuResS> getCh() {
		return ch;
	}

	public void setCh(List<CuResS> ch) {
		this.ch = ch;
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
	 * @return 资源名称
	 */
	public String getResNa() {
		return resNa;
	}

	public void setResNa(String resNa) {
		this.resNa = resNa;
	}

	/**
	 * @return 资源系统代码<br>
	 *         参见cu_sy_c
	 */
	public String getResSyCd() {
		return resSyCd;
	}

	public void setResSyCd(String resSyCd) {
		this.resSyCd = resSyCd;
	}

	/**
	 * @return 上级资源编号
	 */
	public String getFaResNo() {
		return faResNo;
	}

	public void setFaResNo(String faResNo) {
		this.faResNo = faResNo;
	}

	/**
	 * @return 资源的url地址<br>
	 *         不需要包含ip地址。<br>
	 */
	public String getResUrlCa() {
		return resUrlCa;
	}

	public void setResUrlCa(String resUrlCa) {
		this.resUrlCa = resUrlCa;
	}

	/**
	 * @return 不能为空，否则是默认图标
	 */
	public String getResIconNo() {
		return resIconNo;
	}

	public void setResIconNo(String resIconNo) {
		this.resIconNo = resIconNo;
	}

	/**
	 * @return 显示顺序排序
	 */
	public Short getDispOr() {
		return dispOr;
	}

	public void setDispOr(Short dispOr) {
		this.dispOr = dispOr;
	}

	/**
	 * @return 是否页面留痕
	 */
	public String getPageMarkYn() {
		return pageMarkYn;
	}

	public void setPageMarkYn(String pageMarkYn) {
		this.pageMarkYn = pageMarkYn;
	}

	/**
	 * @return
	 */
	public String getCo() {
		return co;
	}

	public void setCo(String co) {
		this.co = co;
	}

	public static <E> CuResSResponse buildResponse(CuResSResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
