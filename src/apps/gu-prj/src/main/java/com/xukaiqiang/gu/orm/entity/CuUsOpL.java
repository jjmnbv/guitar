package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsOpL;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import org.apache.commons.lang3.StringUtils;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户操作信息<br>点击菜单以后，需要插入日志。
 *
 */
@Entity
@Table(name = Tables.CUUSOPL)
public class CuUsOpL extends AbstractCuUsOpL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CUUSOPL_LOGINTRID)
	private Long loginTrId;
	@Column(name = Columns.CUUSOPL_VE)
	@Version
	private Integer ve;
	@Column(name = Columns.CUUSOPL_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSOPL_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSOPL_RESNO)
	private String resNo;
	@Column(name = Columns.CUUSOPL_RESNA)
	private String resNa;
	@Column(name = Columns.CUUSOPL_CO)
	private String co;
	@Column(name = Columns.CUUSOPL_RESACTCA)
	private String resActCa;
	@Column(name = Columns.CUUSOPL_RESACTCD)
	private String resActCd;
	@Column(name = Columns.CUUSOPL_OPIP)
	private String opIp;
	@Transient
	private String queryAllParamString;
	@Transient
	private String showcrTm;
	
	/**
	 * 显示时间
	 * @return
	 */
	public String getShowcrTm() {
		if(crDt!=null && !StringUtils.isEmpty(crTm)){
			showcrTm=crDt+" "+crTm;
			return crDt+" "+crTm;
		}
		return showcrTm;
	}
	/**
	 * 显示时间
	 * @param showcrTm
	 */
	public void setShowcrTm(String showcrTm) {
		this.showcrTm = showcrTm;
	}
	/**
	 * 操作明细
	 * @return
	 */
	public String getResActCa() {
		return resActCa;
	}
	/**
	 * 操作明细
	 * @param resActCa
	 */
	public void setResActCa(String resActCa) {
		this.resActCa = resActCa;
	}
	/**
	 * 操作代号
	 * @return
	 */
	public String getResActCd() {
		return resActCd;
	}
	/**
	 * 操作代号
	 * @param resActCd
	 */
	public void setResActCd(String resActCd) {
		this.resActCd = resActCd;
	}
	/**
	 * 登录ip
	 * @return
	 */
	public String getOpIp() {
		return opIp;
	}
	/**
	 * 登录ip
	 * @param opIp
	 */
	public void setOpIp(String opIp) {
		this.opIp = opIp;
	}
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
	 * @return 登录流水Id
	 */
	public Long getLoginTrId() {
		return loginTrId;
	}

	/**
	 * 登录流水Id
	 *
	 * @param loginTrId
	 */
	public void setLoginTrId(Long loginTrId) {
		this.loginTrId = loginTrId;
	}

	/**
	 * @return 版本
	 */
	public Integer getVe() {
		return ve;
	}

	/**
	 * 版本
	 *
	 * @param ve
	 */
	public void setVe(Integer ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期
	 */
	public String getCrDt() {
		return crDt;
	}

	/**
	 * 创建日期
	 *
	 * @param crDt
	 */
	public void setCrDt(String crDt) {
		this.crDt = crDt;
	}

	/**
	 * @return 创建日期
	 */
	public Date getCrDtAt() {
		if(crDtAt == null && getCrDt() != null) {
			setCrDtAt(CuVars.getDateFormDb(getCrDt()));
		}
		return crDtAt;
	}

	/**
	 * 创建日期
	 *
	 * @param crDtAt
	 */
	public void setCrDtAt(Date crDtAt) {
		this.crDtAt = crDtAt;
	}

	/**
	 * @return 创建时间
	 */
	public String getCrTm() {
		return crTm;
	}

	/**
	 * 创建时间
	 *
	 * @param crTm
	 */
	public void setCrTm(String crTm) {
		this.crTm = crTm;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		return resNo;
	}

	/**
	 * 资源编号
	 *
	 * @param resNo
	 */
	public void setResNo(String resNo) {
		this.resNo = resNo;
	}

	/**
	 * @return 资源名称
	 */
	public String getResNa() {
		return resNa;
	}

	/**
	 * 资源名称
	 *
	 * @param resNa
	 */
	public void setResNa(String resNa) {
		this.resNa = resNa;
	}

	/**
	 * @return 
	 */
	public String getCo() {
		return co;
	}

	/**
	 * 
	 *
	 * @param co
	 */
	public void setCo(String co) {
		this.co = co;
	}

}
