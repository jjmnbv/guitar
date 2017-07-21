package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsRoS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.gu.orm.entity.id.CuUsRoSId;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户角色
 * 
 */
@Entity
@Table(name = Tables.CUUSROS)
public class CuUsRoS extends AbstractCuUsRoS implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private CuUsRoSId cuUsRoSId;

	@Transient
	private Long usId;
	@Transient
	private String roNo;
	@Version
	@Column(name = Columns.CUUSROS_VE)
	private Integer ve = 0;
	@Column(name = Columns.CUUSROS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSROS_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSROS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUUSROS_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUUSROS_LOGINNA)
	private String loginNa;


	/**
	 * @return 主键
	 */

	public CuUsRoSId getCuUsRoSId() {
		return cuUsRoSId;
	}

	public void setCuUsRoSId(CuUsRoSId cuUsRoSId) {
		this.cuUsRoSId = cuUsRoSId;
	}

	/**
	 * @return 用户标识
	 */

	public Long getUsId() {
		if (usId == null && getCuUsRoSId() != null) {
			usId = getCuUsRoSId().getUsId();
		}
		return usId;
	}

	public void setUsId(Long usId) {
		if (usId != null) {
			if (getCuUsRoSId() == null) {
				setCuUsRoSId(new CuUsRoSId());
			}
			getCuUsRoSId().setUsId(usId);
		}
		this.usId = usId;
	}

	/**
	 * @return 岗位编号
	 */
	public String getRoNo() {
		if (roNo == null && getCuUsRoSId() != null) {
			roNo = getCuUsRoSId().getRoNo();
		}
		return roNo;
	}

	public void setRoNo(String roNo) {
		if (roNo != null) {
			if (getCuUsRoSId() == null) {
				setCuUsRoSId(new CuUsRoSId());
			}
			getCuUsRoSId().setRoNo(roNo);
		}
		this.roNo = roNo;
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
	 * @return 登录名称
	 */
	public String getLoginNa() {
		return loginNa;
	}

	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

}
