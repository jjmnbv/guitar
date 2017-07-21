package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuRoRiS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.gu.orm.entity.id.CuRoRiSId;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 角色权限
 * 
 */
@Entity
@Table(name = Tables.CURORIS)
public class CuRoRiS extends AbstractCuRoRiS implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private CuRoRiSId cuRoRiSId;

	@Transient
	private String roNo;
	@Transient
	private String resNo;
	@Transient
	private String resActCd;
	@Version
	@Column(name = Columns.CURORIS_VE)
	private Integer ve;
	@Column(name = Columns.CURORIS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CURORIS_CRTM)
	private String crTm;
	@Column(name = Columns.CURORIS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CURORIS_LAUPUSID)
	private Long laUpUsId;

	@Transient
	private List<String> resActCdList = new ArrayList<String>();

	/**
	 * 操作码集合
	 * 
	 * @return
	 */
	public List<String> getResActCdList() {
		return resActCdList;
	}

	public void setResActCdList(List<String> resActCdList) {
		this.resActCdList = resActCdList;
	}

	/**
	 * @return 主键
	 */
	public CuRoRiSId getCuRoRiSId() {
		return cuRoRiSId;
	}

	public void setCuRoRiSId(CuRoRiSId cuRoRiSId) {
		this.cuRoRiSId = cuRoRiSId;
	}

	/**
	 * @return 岗位编号
	 */
	public String getRoNo() {
		if (roNo == null && getCuRoRiSId() != null) {
			roNo = getCuRoRiSId().getRoNo();
		}
		return roNo;
	}

	public void setRoNo(String roNo) {
		if (roNo != null) {
			if (getCuRoRiSId() == null) {
				setCuRoRiSId(new CuRoRiSId());
			}
			getCuRoRiSId().setRoNo(roNo);
		}
		this.roNo = roNo;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		if (resNo == null && getCuRoRiSId() != null) {
			resNo = getCuRoRiSId().getResNo();
		}
		return resNo;
	}

	public void setResNo(String resNo) {
		if (resNo != null) {
			if (getCuRoRiSId() == null) {
				setCuRoRiSId(new CuRoRiSId());
			}
			getCuRoRiSId().setResNo(resNo);
		}
		this.resNo = resNo;
	}

	/**
	 * @return 资源动作码<br>
	 *         ZJ 增加<br>
	 *         XG 修改<br>
	 *         SC 删除<br>
	 *         CX 查询<br>
	 *         FW 访问<br>
	 *         参见字典分类代码：70
	 */
	public String getResActCd() {
		if (resActCd == null && getCuRoRiSId() != null) {
			resActCd = getCuRoRiSId().getResActCd();
		}
		return resActCd;
	}

	public void setResActCd(String resActCd) {
		if (resActCd != null) {
			if (getCuRoRiSId() == null) {
				setCuRoRiSId(new CuRoRiSId());
			}
			getCuRoRiSId().setResActCd(resActCd);
		}
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
