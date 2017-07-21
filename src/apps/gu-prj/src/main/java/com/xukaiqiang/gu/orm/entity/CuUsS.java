package com.xukaiqiang.gu.orm.entity;

import static javax.persistence.CascadeType.DETACH;
import static javax.persistence.CascadeType.REFRESH;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.shiro.entity.ShiroUser;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * 用户表
 * 
 */
@Entity
@Table(name = Tables.CUUSS)
public class CuUsS extends AbstractCuUsS implements ShiroUser, Serializable {
	private static final long serialVersionUID = 1L;
	@Version
	@Column(name = Columns.CUUSS_VE)
	private Integer ve;
	@Column(name = Columns.CUUSS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSS_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUUSS_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUUSS_ST)
	private String st;
	@Column(name = Columns.CUUSS_LOGINNA)
	private String loginNa;
	@Column(name = Columns.CUUSS_USNA)
	private String usNa;
	@Column(name = Columns.CUUSS_PATYCD)
	private String paTyCd;
	@Column(name = Columns.CUUSS_PANO)
	private String paNo;
	@Transient
	// @Column(name = Columns.CUUSS_BRNO)
	private String brNo;
	@Column(name = Columns.CUUSS_MONO)
	private String moNo;
	@Column(name = Columns.CUUSS_MAILNO)
	private String mailNo;
	@Column(name = Columns.CUUSS_EXEYN)
	private String exeYn;
	@Column(name = Columns.CUUSS_CUMAYN)
	private String cuMaYn;
	// @Column(name = Columns.CUUSS_FAEXEUSID)
	@Transient
	private Long faExeUsId;
	@Column(name = Columns.CUUSS_HOLYN)
	private String holYn;
	@Column(name = Columns.CUUSS_HOLBEDT)
	private String holBeDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date holBeDtAt;
	@Column(name = Columns.CUUSS_HOLENDT)
	private String holEnDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date holEnDtAt;
	@Column(name = Columns.CUUSS_CO)
	private String co;
	@Column(name = Columns.CUUSS_SEXCD)
	private String sexCd;
	@JsonIgnore
	@ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE, REFRESH,
			DETACH }, fetch = FetchType.EAGER)
	@JoinColumn(name = "brNo")
	private CuBrS cubrs;

	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER, cascade = { REFRESH, DETACH })
	@JoinTable(name = Tables.CUUSPOSTS, joinColumns = @JoinColumn(name = Columns.CUUSPOST_CUUSID), inverseJoinColumns = @JoinColumn(name = Columns.CUUSPOST_POSTID))
	private Set<CuPostS> postSet = new HashSet<CuPostS>();

	@JsonIgnore
	@ManyToMany(fetch = FetchType.EAGER, cascade = { REFRESH, DETACH })
	@JoinTable(name = Tables.CUUSROS, joinColumns = @JoinColumn(name = Columns.CUUSROS_CUUSID), inverseJoinColumns = @JoinColumn(name = Columns.CUUSROS_ROSID))
	private Set<CuRoS> rosSet = new HashSet<CuRoS>();

	@Transient
	private Set<String> roNas;
	@Transient
	private Set<String> postNas;

	@Transient
	private String brNa;
	/** 上级管理 */
	@ManyToOne
	@JoinColumn(name = "faExeUsId")
	private CuUsS parent;

	/** 子 */
	@JsonIgnore
	@OneToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE, REFRESH,
			DETACH }, fetch = FetchType.LAZY, mappedBy = "parent")
	private List<CuUsS> children = new ArrayList<>();

	@Transient
	private String newBrNo;

	@Transient
	private Long newFaexe;
	@Transient
	private String queryAllParamString;
	@Transient
	private String postNa;
	/**
	 * 所有岗位名称拼接
	 * @return
	 */
	public String getPostNa() {
		return postNa;
	}
	/**
	 * 所有岗位名称拼接
	 * @param postNa
	 */
	public void setPostNa(String postNa) {
		this.postNa = postNa;
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
	 * 前台传过来的上级主管
	 * 
	 * @return
	 */
	public Long getNewFaexe() {
		return newFaexe;
	}

	public void setNewFaexe(Long newFaexe) {
		this.newFaexe = newFaexe;
	}

	/**
	 * 所在机构 后台查询的get
	 */
	public String getNewBrNo() {
		if (cubrs != null) {
			return cubrs.getBrNo();
		} else {
			return null;
		}
	}

	/**
	 * 所在机构 前台查询的get
	 */
	public String getByNewBrNo() {
		return newBrNo;
	}

	public void setNewBrNo(String newBrNo) {
		this.newBrNo = newBrNo;
	}

	/**
	 * 上级管理
	 * 
	 * @return
	 */

	public CuUsS getParent() {
		return parent;
	}

	/**
	 * 上级管理
	 * 
	 * @param parent
	 */
	public void setParent(CuUsS parent) {
		this.parent = parent;
	}

	/**
	 * 子
	 * 
	 * @return
	 */
	public List<CuUsS> getChildren() {
		return children;
	}

	/**
	 * 子
	 * 
	 * @param children
	 */
	public void setChildren(List<CuUsS> children) {
		this.children = children;
	}

	@Transient
	private String parentCuUsSNa;

	/**
	 * 上级主管名称
	 * 
	 * @return
	 */
	public String getParentCuUsSNa() {
		if (parent != null) {
			return parent.getUsNa();
		}
		return null;
	}

	/**
	 * 上级主管名称
	 * 
	 * @param parentCuUsSNa
	 */
	public void setParentCuUsSNa(String parentCuUsSNa) {
		this.parentCuUsSNa = parentCuUsSNa;
	}

	/**
	 * 
	 * @return 性别
	 */
	public String getSexCd() {
		return sexCd;
	}

	public void setSexCd(String sexCd) {
		this.sexCd = sexCd;
	}

	/**
	 * 机构名称
	 * 
	 * @return
	 */
	public String getBrNa() {
		if (cubrs != null) {
			return cubrs.getBrNa();
		} else {
			return null;
		}
	}

	public void setBrNa(String brNa) {
		this.brNa = brNa;
	}

	/**
	 * 角色名称集合
	 * 
	 * @return
	 */
	public Set<String> getRoNas() {
		if (roNas == null && !getRosSet().isEmpty()) {
			HashSet<String> res = new HashSet<String>();
			for (CuRoS r : getRosSet()) {
				res.add(r.getRoNa());
			}
			setRoNas(res);
		}
		return roNas;
	}

	public void setRoNas(Set<String> roNas) {
		this.roNas = roNas;
	}

	/**
	 * 岗位名称集合
	 * 
	 * @return
	 */
	public Set<String> getPostNas() {
		return postNas;
	}

	public void setPostNas(Set<String> postNas) {
		this.postNas = postNas;
	}

	/**
	 * 机构
	 * 
	 * @return
	 */
	public CuBrS getCubrs() {
		return cubrs;
	}

	public void setCubrs(CuBrS cubrs) {
		this.cubrs = cubrs;
	}

	/**
	 * 岗位
	 * 
	 * @return
	 */
	public Set<CuPostS> getPostSet() {
		return postSet;
	}

	public void setPostSet(Set<CuPostS> postSet) {
		this.postSet = postSet;
	}

	/**
	 * 角色
	 * 
	 * @return
	 */
	public Set<CuRoS> getRosSet() {
		return rosSet;
	}

	public void setRosSet(Set<CuRoS> rosSet) {
		this.rosSet = rosSet;
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
	 * @return 状态<br>
	 *         CS 初始<br>
	 *         JH 激活<br>
	 *         参见 通用字典 状态分类28
	 */
	public String getSt() {
		return st;
	}

	public void setSt(String st) {
		this.st = st;
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

	/**
	 * @return 用户名称
	 */
	public String getUsNa() {
		return usNa;
	}

	public void setUsNa(String usNa) {
		this.usNa = usNa;
	}

	/**
	 * @return 证件类型<br>
	 *         参见字典类型 17
	 */
	public String getPaTyCd() {
		return paTyCd;
	}

	public void setPaTyCd(String paTyCd) {
		this.paTyCd = paTyCd;
	}

	/**
	 * @return 证件号码。
	 */
	public String getPaNo() {
		return paNo;
	}

	public void setPaNo(String paNo) {
		this.paNo = paNo;
	}

	/**
	 * @return 机构编号
	 */
	public String getBrNo() {
		return brNo;
	}

	public void setBrNo(String brNo) {
		this.brNo = brNo;
	}

	/**
	 * @return
	 */
	public String getMoNo() {
		return moNo;
	}

	public void setMoNo(String moNo) {
		this.moNo = moNo;
	}

	/**
	 * @return 邮箱号码
	 */
	public String getMailNo() {
		return mailNo;
	}

	public void setMailNo(String mailNo) {
		this.mailNo = mailNo;
	}

	/**
	 * @return 是否主观
	 */
	public String getExeYn() {
		return exeYn;
	}

	public void setExeYn(String exeYn) {
		this.exeYn = exeYn;
	}

	/**
	 * @return 是否客户经理
	 */
	public String getCuMaYn() {
		return cuMaYn;
	}

	public void setCuMaYn(String cuMaYn) {
		this.cuMaYn = cuMaYn;
	}

	/**
	 * @return 上级主管
	 */
	public Long getFaExeUsId() {
		return faExeUsId;
	}

	public void setFaExeUsId(Long faExeUsId) {
		this.faExeUsId = faExeUsId;
	}

	/**
	 * @return 是否休假
	 */
	public String getHolYn() {
		return holYn;
	}

	public void setHolYn(String holYn) {
		this.holYn = holYn;
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
	 * @return
	 */
	public String getCo() {
		return co;
	}

	public void setCo(String co) {
		this.co = co;
	}

	@Override
	public boolean isDisabled() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public String getLoginName() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Set<String> getRoleNames() {
		return getRoNas();
	}

	@Override
	public Set<String> getPermissionNames() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getSalt() {
		// TODO Auto-generated method stub
		return null;
	}

}
