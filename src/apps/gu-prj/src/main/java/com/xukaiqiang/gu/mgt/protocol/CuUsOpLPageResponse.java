package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.shared.protocol.PageResponse;
import com.xukaiqiang.shared.util.CopierUtils;

import org.springframework.data.domain.Page;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuUsOpLPageResponse extends PageResponse implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Long id;
		private Long loginTrId;
		private Integer ve;
		private String crDt;
		private String crTm;
		private String resNo;
		private String resNa;
		private String co;
		private String queryAllParamString;
		private String resActCa;
		private String resActCd;
		private String opIp;
		private String showcrTm;
		/**
		 * 显示时间
		 * @return
		 */
		public String getShowcrTm() {
			return showcrTm;
		}
		/**
		 * 显示时间
		 * @param showcrTm
		 */
		public void setShowcrTm(String showcrTm) {
			this.showcrTm = showcrTm;
		}
		/**
		 * 操作明细
		 * @return
		 */
		public String getResActCa() {
			return resActCa;
		}
		/**
		 * 操作明细
		 * @param resActCa
		 */
		public void setResActCa(String resActCa) {
			this.resActCa = resActCa;
		}
		/**
		 * 操作代号
		 * @return
		 */
		public String getResActCd() {
			return resActCd;
		}
		/**
		 * 操作代号
		 * @param resActCd
		 */
		public void setResActCd(String resActCd) {
			this.resActCd = resActCd;
		}
		/**
		 * 登录ip
		 * @return
		 */
		public String getOpIp() {
			return opIp;
		}
		/**
		 * 登录ip
		 * @param opIp
		 */
		public void setOpIp(String opIp) {
			this.opIp = opIp;
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
		 * @return 登录Id
		 */
		public Long getId() {
			return id;
		}

		/**
		 * 登录Id
		 *
		 * @param id
		 */
		public void setId(Long id) {
			this.id = id;
		}

		/**
		 * @return 登录流水Id
		 */
		public Long getLoginTrId() {
			return loginTrId;
		}

		/**
		 * 登录流水Id
		 *
		 * @param loginTrId
		 */
		public void setLoginTrId(Long loginTrId) {
			this.loginTrId = loginTrId;
		}

		/**
		 * @return 版本
		 */
		public Integer getVe() {
			return ve;
		}

		/**
		 * 版本
		 *
		 * @param ve
		 */
		public void setVe(Integer ve) {
			this.ve = ve;
		}

		/**
		 * @return 创建日期
		 */
		public String getCrDt() {
			return crDt;
		}

		/**
		 * 创建日期
		 *
		 * @param crDt
		 */
		public void setCrDt(String crDt) {
			this.crDt = crDt;
		}

		/**
		 * @return 创建时间
		 */
		public String getCrTm() {
			return crTm;
		}

		/**
		 * 创建时间
		 *
		 * @param crTm
		 */
		public void setCrTm(String crTm) {
			this.crTm = crTm;
		}

		/**
		 * @return 资源编号
		 */
		public String getResNo() {
			return resNo;
		}

		/**
		 * 资源编号
		 *
		 * @param resNo
		 */
		public void setResNo(String resNo) {
			this.resNo = resNo;
		}

		/**
		 * @return 资源名称
		 */
		public String getResNa() {
			return resNa;
		}

		/**
		 * 资源名称
		 *
		 * @param resNa
		 */
		public void setResNa(String resNa) {
			this.resNa = resNa;
		}

		/**
		 * @return 
		 */
		public String getCo() {
			return co;
		}

		/**
		 * 
		 *
		 * @param co
		 */
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

	/**
	 * 记录列表
	 *
	 * @param content
	 */
	public void setContent(List<Element> content) {
		this.content = content;
	}

	public static <E> CuUsOpLPageResponse buildPageResponse(CuUsOpLPageResponse pageResponse, Page<E> page, int displayPages) {
		pageResponse.buildPages(page, displayPages);

		for(E e : page.getContent()) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
