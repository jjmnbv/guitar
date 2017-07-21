package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class CuUsRoSListResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Long usId;
		private String roNo;
		private Integer ve;
		private String crDt;
		private String crTm;
		private String laUpDt;
		private Long laUpUsId;
		private String loginNa;

		/**
		 * @return 用户标识
		 */
		public Long getUsId() {
			return usId;
		}

		public void setUsId(Long usId) {
			this.usId = usId;
		}

		/**
		 * @return 岗位编号
		 */
		public String getRoNo() {
			return roNo;
		}

		public void setRoNo(String roNo) {
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
		 * @return 登录名称
		 */
		public String getLoginNa() {
			return loginNa;
		}

		public void setLoginNa(String loginNa) {
			this.loginNa = loginNa;
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

	public static <E> CuUsRoSListResponse buildListResponse(CuUsRoSListResponse pageResponse, List<E> list) {
		for(E e : list) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
