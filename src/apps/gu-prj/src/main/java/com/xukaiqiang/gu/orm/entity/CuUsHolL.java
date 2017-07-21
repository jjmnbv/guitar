package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsHolL;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户休假日志
 * 
 */
@Entity
@Table(name = Tables.CUUSHOLL)
public class CuUsHolL extends AbstractCuUsHolL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CUUSHOLL_USID)
	private Long usId;
	@Version
	@Column(name = Columns.CUUSHOLL_VE)
	private Integer ve;
	@Column(name = Columns.CUUSHOLL_WODT)
	private String woDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date woDtAt;
	@Column(name = Columns.CUUSHOLL_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSHOLL_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSHOLL_WOTM)
	private String woTm;
	@Column(name = Columns.CUUSHOLL_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUUSHOLL_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUUSHOLL_EFDT)
	private String efDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date efDtAt;
	@Column(name = Columns.CUUSHOLL_HOLBEDT)
	private String holBeDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date holBeDtAt;
	@Column(name = Columns.CUUSHOLL_HOLENDT)
	private String holEnDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date holEnDtAt;
	@Column(name = Columns.CUUSHOLL_HOLCD)
	private String holCd;
	@Column(name = Columns.CUUSHOLL_LOGINNA)
	private String loginNa;
	@Column(name = Columns.CUUSHOLL_LOGINTRID)
	private String loginTrId;
	@Column(name = Columns.CUUSHOLL_CO)
	private String co;
	@Column(name = Columns.CUUSHOLL_HOLCAUCA)
	private String holCauCa;
	@Transient
	private String RangeDate;

	/**
	 * 日期范围
	 * 
	 * @return
	 */
	public String getRangeDate() {
		if (getHolBeDt() == null) {
			return RangeDate;
		} else {
			return getHolBeDt() + "~" + getHolEnDt();
		}

	}

	public void setRangeDate(String rangeDate) {
		RangeDate = rangeDate;
	}

	/**
	 * 请假原因
	 * 
	 * @return
	 */
	public String getHolCauCa() {
		return holCauCa;
	}

	public void setHolCauCa(String holCauCa) {
		this.holCauCa = holCauCa;
	}

	/**
	 * 上班日期
	 * 
	 * @return
	 */
	public String getWoDt() {
		return woDt;
	}

	public void setWoDt(String woDt) {
		this.woDt = woDt;
	}

	/**
	 * 上班日期
	 * 
	 * @return
	 */
	public Date getWoDtAt() {
		return woDtAt;
	}

	public void setWoDtAt(Date woDtAt) {
		this.woDtAt = woDtAt;
	}

	/**
	 * 上班时间
	 * 
	 * @return
	 */
	public String getWoTm() {
		return woTm;
	}

	public void setWoTm(String woTm) {
		this.woTm = woTm;
	}

	/**
	 * @return 用户标识
	 */
	public Long getUsId() {
		return usId;
	}

	public void setUsId(Long usId) {
		this.usId = usId;
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
	 * @return 生效日期<br>
	 *         休假或者上班生效日期
	 */
	public String getEfDt() {
		return efDt;
	}

	public void setEfDt(String efDt) {
		this.efDt = efDt;
	}

	/**
	 * @return 生效日期<br>
	 *         休假或者上班生效日期
	 */
	public Date getEfDtAt() {
		if (efDtAt == null && getEfDt() != null) {
			setEfDtAt(CuVars.getDateFormDb(getEfDt()));
		}
		return efDtAt;
	}

	public void setEfDtAt(Date efDtAt) {
		this.efDtAt = efDtAt;
	}

	/**
	 * @return 休假开始日期
	 */
	public String getHolBeDt() {
		return holBeDt;
	}

	public void setHolBeDt(String holBeDt) {
		this.holBeDt = holBeDt;
	}

	/**
	 * @return 休假开始日期
	 */
	public Date getHolBeDtAt() {
		if (holBeDtAt == null && getHolBeDt() != null) {
			setHolBeDtAt(CuVars.getDateFormDb(getHolBeDt()));
		}
		return holBeDtAt;
	}

	public void setHolBeDtAt(Date holBeDtAt) {
		this.holBeDtAt = holBeDtAt;
	}

	/**
	 * @return 休假结束日期
	 */
	public String getHolEnDt() {
		return holEnDt;
	}

	public void setHolEnDt(String holEnDt) {
		this.holEnDt = holEnDt;
	}

	/**
	 * @return 休假结束日期
	 */
	public Date getHolEnDtAt() {
		if (holEnDtAt == null && getHolEnDt() != null) {
			setHolEnDtAt(CuVars.getDateFormDb(getHolEnDt()));
		}
		return holEnDtAt;
	}

	public void setHolEnDtAt(Date holEnDtAt) {
		this.holEnDtAt = holEnDtAt;
	}

	/**
	 * @return 休假代码<br>
	 *         XJ 休假 <br>
	 *         SB 上班
	 */
	public String getHolCd() {
		return holCd;
	}

	public void setHolCd(String holCd) {
		this.holCd = holCd;
	}

	/**
	 * 登录名
	 * 
	 * @return
	 */
	public String getLoginNa() {
		return loginNa;
	}

	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

	/**
	 * 登录流水号
	 * 
	 * @return
	 */
	public String getLoginTrId() {
		return loginTrId;
	}

	public void setLoginTrId(String loginTrId) {
		this.loginTrId = loginTrId;
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

}
