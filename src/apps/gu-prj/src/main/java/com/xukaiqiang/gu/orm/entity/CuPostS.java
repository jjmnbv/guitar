package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuPostS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 岗位
 * 
 */
@Entity
@Table(name = Tables.CUPOSTS)
public class CuPostS extends AbstractCuPostS implements Serializable {
	private static final long serialVersionUID = 1L;
	@Version
	@Column(name = Columns.CUPOSTS_VE)
	private Integer ve;
	@Column(name = Columns.CUPOSTS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUPOSTS_CRTM)
	private String crTm;
	@Column(name = Columns.CUPOSTS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUPOSTS_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUPOSTS_POSTNA)
	private String postNa;
	@Column(name = Columns.CUPOSTS_ST)
	private String st;
	@Column(name = Columns.CUPOSTS_STOUSEYN)
	private String stoUseYn;
	@Column(name = Columns.CUPOSTS_AUPOSTYN)
	private String auPostYn;
	@Column(name = Columns.CUPOSTS_COPOSTYN)
	private String coPostYn;
	@Column(name = Columns.CUPOSTS_CO)
	private String co;
	@Transient
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
	 * @return 创建日期
	 */
	public Date getCrDtAt() {
		if (crDtAt == null && getCrDt() != null) {
			setCrDtAt(CuVars.getDateFormDb(getCrDt()));
		}
		return crDtAt;
	}

	public void setCrDtAt(Date crDtAt) {
		this.crDtAt = crDtAt;
	}

	/**
	 * @return 创建时间
	 */
	public String getCrTm() {
		if (crTm == null) {
			return crTm;
		} else {
			return getCrDt() + " " + crTm.split(":")[0] + ":"
					+ crTm.split(":")[1];
		}

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
	 * @return 最后更新日期
	 */
	public Date getLaUpDtAt() {
		if (laUpDtAt == null && getLaUpDt() != null) {
			setLaUpDtAt(CuVars.getDateFormDb(getLaUpDt()));
		}
		return laUpDtAt;
	}

	public void setLaUpDtAt(Date laUpDtAt) {
		this.laUpDtAt = laUpDtAt;
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
