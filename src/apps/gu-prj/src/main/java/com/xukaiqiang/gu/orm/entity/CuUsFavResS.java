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
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsFavResS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.gu.orm.entity.id.CuUsFavResSId;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户菜单收藏
 * 
 */
@Entity
@Table(name = Tables.CUUSFAVRESS)
public class CuUsFavResS extends AbstractCuUsFavResS implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private CuUsFavResSId cuUsFavResSId;

	@Transient
	private Long usId;
	@Transient
	private String resNo;
	@Version
	@Column(name = Columns.CUUSFAVRESS_VE)
	private Integer ve;
	@Column(name = Columns.CUUSFAVRESS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSFAVRESS_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSFAVRESS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUUSFAVRESS_LAUPUSID)
	private Long laUpUsId;

	/**
	 * @return 主键
	 */
	public CuUsFavResSId getCuUsFavResSId() {
		return cuUsFavResSId;
	}

	public void setCuUsFavResSId(CuUsFavResSId cuUsFavResSId) {
		this.cuUsFavResSId = cuUsFavResSId;
	}

	/**
	 * @return 用户标识
	 */
	public Long getUsId() {
		if (usId == null && getCuUsFavResSId() != null) {
			usId = getCuUsFavResSId().getUsId();
		}
		return usId;
	}

	public void setUsId(Long usId) {
		if (usId != null) {
			if (getCuUsFavResSId() == null) {
				setCuUsFavResSId(new CuUsFavResSId());
			}
			getCuUsFavResSId().setUsId(usId);
		}
		this.usId = usId;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		if (resNo == null && getCuUsFavResSId() != null) {
			resNo = getCuUsFavResSId().getResNo();
		}
		return resNo;
	}

	public void setResNo(String resNo) {
		if (resNo != null) {
			if (getCuUsFavResSId() == null) {
				setCuUsFavResSId(new CuUsFavResSId());
			}
			getCuUsFavResSId().setResNo(resNo);
		}
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

}
