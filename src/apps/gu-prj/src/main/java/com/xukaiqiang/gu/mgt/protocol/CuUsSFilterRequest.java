package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.gu.orm.entity.CuUsS;

public class CuUsSFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Integer ve;
	private String crDtFrom;
	private String crDtTo;
	private String crTm;
	private String laUpDtFrom;
	private String laUpDtTo;
	private Long laUpUsId;
	private String st;
	private String loginNa;
	private String usNa;
	private String paTyCd;
	private String paNo;
	private String brNo;
	private String moNo;
	private String mailNo;
	private String exeYn;
	private String cuMaYn;
	private Long faExeUsId;
	private String holYn;
	private String holBeDtFrom;
	private String holBeDtTo;
	private String holEnDtFrom;
	private String holEnDtTo;
	private String co;
	private String sexCd;
	private String parentCuUsSNa;
	private CuUsS parent;
	private List<CuUsS> children = new ArrayList<>();
	private String newBrNo;
	private Long newFaexe;
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
	 * 所在机构
	 */
	public String getNewBrNo() {
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

	/**
	 * 上级主管名称
	 * 
	 * @return
	 */

	public String getParentCuUsSNa() {
		return parentCuUsSNa;
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
	 * @return
	 */
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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
	 * @return 创建日期 from
	 */
	public String getCrDtFrom() {
		return crDtFrom;
	}

	public void setCrDtFrom(String crDtFrom) {
		this.crDtFrom = crDtFrom;
	}

	/**
	 * @return 创建日期 to
	 */
	public String getCrDtTo() {
		return crDtTo;
	}

	public void setCrDtTo(String crDtTo) {
		this.crDtTo = crDtTo;
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
	 * @return 最后更新日期 from
	 */
	public String getLaUpDtFrom() {
		return laUpDtFrom;
	}

	public void setLaUpDtFrom(String laUpDtFrom) {
		this.laUpDtFrom = laUpDtFrom;
	}

	/**
	 * @return 最后更新日期 to
	 */
	public String getLaUpDtTo() {
		return laUpDtTo;
	}

	public void setLaUpDtTo(String laUpDtTo) {
		this.laUpDtTo = laUpDtTo;
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
	 * @return 休假开始日期 from
	 */
	public String getHolBeDtFrom() {
		return holBeDtFrom;
	}

	public void setHolBeDtFrom(String holBeDtFrom) {
		this.holBeDtFrom = holBeDtFrom;
	}

	/**
	 * @return 休假开始日期 to
	 */
	public String getHolBeDtTo() {
		return holBeDtTo;
	}

	public void setHolBeDtTo(String holBeDtTo) {
		this.holBeDtTo = holBeDtTo;
	}

	/**
	 * @return 休假结束日期 from
	 */
	public String getHolEnDtFrom() {
		return holEnDtFrom;
	}

	public void setHolEnDtFrom(String holEnDtFrom) {
		this.holEnDtFrom = holEnDtFrom;
	}

	/**
	 * @return 休假结束日期 to
	 */
	public String getHolEnDtTo() {
		return holEnDtTo;
	}

	public void setHolEnDtTo(String holEnDtTo) {
		this.holEnDtTo = holEnDtTo;
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

}
