package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuResS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 系统资源
 * 
 */
@Entity
@Table(name = Tables.CURESS)
public class CuResS extends AbstractCuResS implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CURESS_VE)
	@Version
	private Integer ve;
	@Column(name = Columns.CURESS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CURESS_CRTM)
	private String crTm;
	@Column(name = Columns.CURESS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CURESS_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CURESS_RESNA)
	private String resNa;
	@Transient
	// @Column(name = Columns.CURESS_FARESNO)
	private String faResNo;
	@Column(name = Columns.CURESS_RESURLCA)
	private String resUrlCa;
	@OrderBy
	@Column(name = Columns.CURESS_DISPOR)
	private Short dispOr;
	@Column(name = Columns.CURESS_PAGEMARKYN)
	private String pageMarkYn;
	@Column(name = Columns.CURESS_CO)
	private String co;
	@Transient
	private Map<String, Object> styleObject;
	@Transient
	private List<CuResS> ch = new ArrayList<CuResS>();
	//
	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = Columns.CURESS_RESSYCD)
	private CuSyC cusyc;
	//
	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = Columns.CURESS_RESICONNO)
	private CuIconS cuicos;

	@Transient
	private String iconNo;

	@Transient
	private String syCd;
	/** 父菜单 */
	@JsonIgnore
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "faResNo")
	private CuResS parent;
	@Transient
	private Set<CuResS> listCh;

	@Transient
	private Integer level;
	@Transient
	private String domNa;
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
	 * 子菜单
	 * 
	 * @return
	 */
	public Set<CuResS> getListCh() {
		return listCh;
	}

	public void setListCh(Set<CuResS> listCh) {
		this.listCh = listCh;
	}

	/**
	 * 父菜单
	 * 
	 * @return
	 */
	public CuResS getParent() {
		return parent;
	}

	public void setParent(CuResS parent) {
		this.parent = parent;
	}

	/**
	 * 图标编号
	 * 
	 * @return
	 */

	public String getIconNo() {
		if (iconNo == null && getCuicos() != null) {
			setIconNo(getCuicos().getIconNo());
		}
		return iconNo;
	}

	public void setIconNo(String iconNo) {
		this.iconNo = iconNo;
	}

	/**
	 * 系统编号
	 * 
	 * @return
	 */
	public String getSyCd() {
		return syCd;
	}

	public void setSyCd(String syCd) {
		this.syCd = syCd;
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
	 * 
	 * @return 样式对象
	 */
	public Map<String, Object> getStyleObject() {
		return styleObject;
	}

	public void setStyleObject(Map<String, Object> styleObject) {
		this.styleObject = styleObject;
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
	 * @return 资源名称
	 */
	public String getResNa() {
		return resNa;
	}

	public void setResNa(String resNa) {
		this.resNa = resNa;
	}

	/**
	 * @return 上级资源编号
	 */
	public String getFaResNo() {
		if (faResNo == null && getParent() != null) {
			setFaResNo(getParent().getResNo());
		}
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

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public String getDomNa() {
		if (domNa == null && getCusyc() != null) {
			setDomNa(getCusyc().getDomNa());
		}
		return domNa;
	}

	public void setDomNa(String domNa) {
		this.domNa = domNa;
	}

	@Override
	public String toString() {
		return "CuResS [resNa=" + resNa + ", ch=" + ch + "]";
	}

}
