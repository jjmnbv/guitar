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
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsPostS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.gu.orm.entity.id.CuUPostSId;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户表
 * 
 */
@Entity
@Table(name = Tables.CUUSPOSTS)
public class CuUsPostS extends AbstractCuUsPostS implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private CuUPostSId id;
	@Transient
	private Long usId;
	@Transient
	private String postNo;
	@Version
	@Column(name = Columns.CUUSPOSTS_VE)
	private Integer ve = 0;
	@Column(name = Columns.CUUSPOSTS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSPOSTS_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSPOSTS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUUSPOSTS_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUUSPOSTS_LOGINNA)
	private String loginNa;

	/**
	 * 用户编号
	 * 
	 * @return
	 */
	public Long getUsId() {
		if (usId == null && getId() != null) {
			usId = getId().getUsId();
		}
		return usId;
	}

	public void setUsId(Long usId) {
		if (usId != null) {
			if (getId() == null) {
				setId(new CuUPostSId());
			}
			getId().setUsId(usId);
		}
		this.usId = usId;
	}

	/**
	 * 机构编号
	 * 
	 * @return
	 */
	public String getPostNo() {
		if (postNo == null && getId() != null) {
			postNo = getId().getPostNo();
		}
		return postNo;
	}

	public void setPostNo(String postNo) {
		if (postNo != null) {
			if (getId() == null) {
				setId(new CuUPostSId());
			}
			getId().setPostNo(postNo);
		}
		this.postNo = postNo;
	}

	/**
	 * 联合主键
	 * 
	 * @return
	 */
	public CuUPostSId getId() {
		return id;
	}

	public void setId(CuUPostSId id) {
		this.id = id;
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
