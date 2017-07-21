package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.xukaiqiang.gu.orm.entity.CuBrS;
import com.xukaiqiang.gu.orm.entity.CuPostS;
import com.xukaiqiang.gu.orm.entity.CuRoS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.shared.protocol.PageResponse;
import com.xukaiqiang.shared.util.CopierUtils;

import org.springframework.data.domain.Page;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuUsSPageResponse extends PageResponse implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Long id;
		private Integer ve;
		private String crDt;
		private String crTm;
		private String laUpDt;
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
		private String holBeDt;
		private String holEnDt;
		private String co;
		private CuBrS cuBrS;
		private String sexCd;
		private Set<CuRoS> rosSet = new HashSet<CuRoS>();
		private Set<CuPostS> postSet = new HashSet<CuPostS>();
		private String parentCuUsSNa;
		private CuUsS parent;
		private List<CuUsS> children = new ArrayList<>();
		private String newBrNo;
		private Long newFaexe;
		private String brNa;
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
		public String getBrNa() {
			return brNa;
		}

		public void setBrNa(String brNa) {
			this.brNa = brNa;
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
		 * @return 性别
		 */
		public String getSexCd() {
			return sexCd;
		}

		public void setSexCd(String sexCd) {
			this.sexCd = sexCd;
		}

		public CuBrS getCuBrS() {
			return cuBrS;
		}

		public void setCuBrS(CuBrS cuBrS) {
			this.cuBrS = cuBrS;
		}

		public Set<CuRoS> getRosSet() {
			return rosSet;
		}

		public void setRosSet(Set<CuRoS> rosSet) {
			this.rosSet = rosSet;
		}

		public Set<CuPostS> getPostSet() {
			return postSet;
		}

		public void setPostSet(Set<CuPostS> postSet) {
			this.postSet = postSet;
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
		 * @return 创建日期
		 */
		public String getCrDt() {
			return crDt;
		}

		public void setCrDt(String crDt) {
			this.crDt = crDt;
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
		 * @return 休假结束日期
		 */
		public String getHolEnDt() {
			return holEnDt;
		}

		public void setHolEnDt(String holEnDt) {
			this.holEnDt = holEnDt;
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

	private List<Element> content = new ArrayList<Element>();

	/**
	 * 记录列表
	 * 
	 * @return
	 */
	public List<Element> getContent() {
		return content;
	}

	public void setContent(List<Element> content) {
		this.content = content;
	}

	public static <E> CuUsSPageResponse buildPageResponse(
			CuUsSPageResponse pageResponse, Page<E> page, int displayPages) {
		pageResponse.buildPages(page, displayPages);

		for (E e : page.getContent()) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
