package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsC;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户配置
 * 
 */
@Entity
@Table(name = Tables.CUUSC)
public class CuUsC extends AbstractCuUsC implements Serializable {
	private static final long serialVersionUID = 1L;
	@Version
	@Column(name = Columns.CUUSC_VE)
	private Integer ve;
	@Column(name = Columns.CUUSC_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSC_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSC_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUUSC_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUUSC_PWDLE)
	private Integer pwdLe;
	@Column(name = Columns.CUUSC_PWDALGCD)
	private String pwdAlgCd;
	@Column(name = Columns.CUUSC_LOGINERRQT)
	private Integer loginErrQt;
	@Column(name = Columns.CUUSC_UNLOCKTYCD)
	private String unlockTyCd;
	@Column(name = Columns.CUUSC_AUTOUNLOCKMINUQT)
	private Integer autoUnlockMinuQt;

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
	 * @return 密码长度
	 */
	public Integer getPwdLe() {
		return pwdLe;
	}

	public void setPwdLe(Integer pwdLe) {
		this.pwdLe = pwdLe;
	}

	/**
	 * @return 加密算法<br>
	 *         BZ 标准<br>
	 */
	public String getPwdAlgCd() {
		return pwdAlgCd;
	}

	public void setPwdAlgCd(String pwdAlgCd) {
		this.pwdAlgCd = pwdAlgCd;
	}

	/**
	 * @return 登录错误次数<br>
	 *         密码错误3次 锁定
	 */
	public Integer getLoginErrQt() {
		return loginErrQt;
	}

	public void setLoginErrQt(Integer loginErrQt) {
		this.loginErrQt = loginErrQt;
	}

	/**
	 * @return 解锁类型代码<br>
	 *         ZD 自动解锁<br>
	 *         RG 人工解锁
	 */
	public String getUnlockTyCd() {
		return unlockTyCd;
	}

	public void setUnlockTyCd(String unlockTyCd) {
		this.unlockTyCd = unlockTyCd;
	}

	/**
	 * @return 自动解锁分钟<br>
	 *         如果为自动解锁需要设置
	 */
	public Integer getAutoUnlockMinuQt() {
		return autoUnlockMinuQt;
	}

	public void setAutoUnlockMinuQt(Integer autoUnlockMinuQt) {
		this.autoUnlockMinuQt = autoUnlockMinuQt;
	}

}
