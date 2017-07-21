package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuBrS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 机构
 * 
 */
@Entity
@Table(name = Tables.CUBRS)
public class CuBrS extends AbstractCuBrS implements Serializable {
	private static final long serialVersionUID = 1L;
	@Version
	@Column(name = Columns.CUBRS_VE)
	private Integer ve;
	@Column(name = Columns.CUBRS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUBRS_CRTM)
	private String crTm;
	@Column(name = Columns.CUBRS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUBRS_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUBRS_BRNA)
	private String brNa;
	@Column(name = Columns.CUBRS_ST)
	private String st;
	@Column(name = Columns.CUBRS_BRABBRNO)
	private String brAbbrNo;
	@Column(name = Columns.CUBRS_CONNA)
	private String conNa;
	@Column(name = Columns.CUBRS_CONTELNO)
	private String conTelNo;
	@Column(name = Columns.CUBRS_POSTNO)
	private String postNo;
	@Column(name = Columns.CUBRS_BRLEVQT)
	private Integer brLevQt;
	// @Column(name = Columns.CUBRS_PREVBRNO)
	@Transient
	private String prevBrNo;
	@Column(name = Columns.CUBRS_PROVCD)
	private String provCd;
	@Column(name = Columns.CUBRS_CITYCD)
	private String cityCd;
	@Column(name = Columns.CUBRS_CO)
	private String co;

	/** 父机构 */
	@ManyToOne
	@JoinColumn(name = "prevBrNo")
	private CuBrS parent;

	/** 子组机构 */
	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "parent")
	private List<CuBrS> children = new ArrayList<>();

	@Transient
	private String parentBrNa;
	@Transient
	private String parentBrNo;
	@Transient
	private List<CuUsS> users = new ArrayList<>();;
	@Column(name = Columns.CUBRS_CONADCA)
	private String conAdCa;
	@Column(name = Columns.CUBRS_LEGPENA)
	private String legPeNa;
	@Column(name = Columns.CUBRS_CONADCACO)
	private String conAdCaCo;
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
	 * 联系地址
	 * @return
	 */
	public String getConAdCa() {
		return conAdCa;
	}
	/**
	 * 联系地址
	 * @param conAdCa
	 */
	public void setConAdCa(String conAdCa) {
		this.conAdCa = conAdCa;
	}
	/**
	 * 机构法人
	 */
	public String getLegPeNa() {
		return legPeNa;
	}
	/**
	 * 机构法人
	 * @param legPeNa
	 */
	public void setLegPeNa(String legPeNa) {
		this.legPeNa = legPeNa;
	}
	/**
	 * 联系地址详细备注
	 * @return
	 */
	public String getConAdCaCo() {
		return conAdCaCo;
	}
	/**
	 * 联系地址详细备注
	 * @param conAdCaCo
	 */
	public void setConAdCaCo(String conAdCaCo) {
		this.conAdCaCo = conAdCaCo;
	}

	/**
	 * 用户
	 * 
	 * @return
	 */
	public List<CuUsS> getUsers() {
		return users;
	}

	public void setUsers(List<CuUsS> users) {
		this.users = users;
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

	/**
	 * 上级机构编码
	 * 
	 * @return
	 */
	public String getParentBrNo() {
		if (parent != null) {
			return parent.getBrNo();
		}
		return null;
	}

	public String toGetParentBrNo() {
		return parentBrNo;
	}

	/**
	 * 上级机构编码
	 * 
	 * @param parentBrNo
	 */
	public void setParentBrNo(String parentBrNo) {
		this.parentBrNo = parentBrNo;
	}

	/**
	 * 上级机构名称
	 * 
	 * @return
	 */
	public String getParentBrNa() {
		if (parent != null) {
			return parent.getBrNa();
		}
		return null;
	}

	public void setParentBrNa(String parentBrNa) {
		this.parentBrNa = parentBrNa;
	}

	/**
	 * 上级机构
	 * 
	 * @return
	 */
	public CuBrS getParent() {
		return parent;
	}

	/**
	 * 上级机构
	 * 
	 * @return
	 */
	public void setParent(CuBrS parent) {
		this.parent = parent;
	}

	/**
	 * 下级机构
	 * 
	 * @return
	 */
	public List<CuBrS> getChildren() {
		return children;
	}

	/**
	 * 下级机构
	 * 
	 * @return
	 */
	public void setChildren(List<CuBrS> children) {
		this.children = children;
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
	 * @return 机构名称
	 */
	public String getBrNa() {
		return brNa;
	}

	public void setBrNa(String brNa) {
		this.brNa = brNa;
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
	 * @return 金融机构简码
	 */
	public String getBrAbbrNo() {
		return brAbbrNo;
	}

	public void setBrAbbrNo(String brAbbrNo) {
		this.brAbbrNo = brAbbrNo;
	}

	/**
	 * @return 联系人
	 */
	public String getConNa() {
		return conNa;
	}

	public void setConNa(String conNa) {
		this.conNa = conNa;
	}

	/**
	 * @return 联系电话
	 */
	public String getConTelNo() {
		return conTelNo;
	}

	public void setConTelNo(String conTelNo) {
		this.conTelNo = conTelNo;
	}

	/**
	 * @return 邮编
	 */
	public String getPostNo() {
		return postNo;
	}

	public void setPostNo(String postNo) {
		this.postNo = postNo;
	}

	/**
	 * @return 机构级别1 表示1级机构 一般是总部2 表示2级机构。
	 */
	public Integer getBrLevQt() {
		return brLevQt;
	}

	public void setBrLevQt(Integer brLevQt) {
		this.brLevQt = brLevQt;
	}

	/**
	 * @return 上级机构编号
	 */
	public String getPrevBrNo() {
		return prevBrNo;
	}

	public void setPrevBrNo(String prevBrNo) {
		this.prevBrNo = prevBrNo;
	}

	/**
	 * @return 省份代码
	 */
	public String getProvCd() {
		return provCd;
	}

	public void setProvCd(String provCd) {
		this.provCd = provCd;
	}

	/**
	 * @return 城市代码
	 */
	public String getCityCd() {
		return cityCd;
	}

	public void setCityCd(String cityCd) {
		this.cityCd = cityCd;
	}

}
