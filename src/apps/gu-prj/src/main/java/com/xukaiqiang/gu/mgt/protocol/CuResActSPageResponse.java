package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.gu.orm.entity.CuResActS;
import com.xukaiqiang.shared.protocol.PageResponse;
import com.xukaiqiang.shared.util.CopierUtils;

import org.springframework.data.domain.Page;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuResActSPageResponse extends PageResponse implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private String resNo;
		private Short suId;
		private Integer ve;
		private String url;
		private String resActCd;
		private String resActCa;
		private String crDt;
		private String laUpDt;
		private Long laUpUsId;
		private List<CuResActS> cuResActS;
		private String defRiYn;
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
		 * 是否预授权
		 * @return
		 */
		public String getDefRiYn() {
			return defRiYn;
		}
		/**
		 * 是否预授权
		 * @param defRiYn
		 */
		public void setDefRiYn(String defRiYn) {
			this.defRiYn = defRiYn;
		}
		/**
		 * 批量资源
		 * @return
		 */
		public List<CuResActS> getCuResActS() {
			return cuResActS;
		}
		/**
		 * 批量资源
		 * @param cuResActS
		 */
		public void setCuResActS(List<CuResActS> cuResActS) {
			this.cuResActS = cuResActS;
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
		 * @return 子序号
		 */
		public Short getSuId() {
			return suId;
		}

		/**
		 * 子序号
		 *
		 * @param suId
		 */
		public void setSuId(Short suId) {
			this.suId = suId;
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
		 * @return url地址
		 */
		public String getUrl() {
			return url;
		}

		/**
		 * url地址
		 *
		 * @param url
		 */
		public void setUrl(String url) {
			this.url = url;
		}

		/**
		 * @return 资源动作码<br>ZJ 增加<br>XG 修改<br>SC 删除<br>CX 查询<br>FW 访问<br>参见字典分类代码：70
		 */
		public String getResActCd() {
			return resActCd;
		}

		/**
		 * 资源动作码<br>ZJ 增加<br>XG 修改<br>SC 删除<br>CX 查询<br>FW 访问<br>参见字典分类代码：70
		 *
		 * @param resActCd
		 */
		public void setResActCd(String resActCd) {
			this.resActCd = resActCd;
		}

		/**
		 * @return 资源动作中文
		 */
		public String getResActCa() {
			return resActCa;
		}

		/**
		 * 资源动作中文
		 *
		 * @param resActCa
		 */
		public void setResActCa(String resActCa) {
			this.resActCa = resActCa;
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
		 * @return 最后更新日期
		 */
		public String getLaUpDt() {
			return laUpDt;
		}

		/**
		 * 最后更新日期
		 *
		 * @param laUpDt
		 */
		public void setLaUpDt(String laUpDt) {
			this.laUpDt = laUpDt;
		}

		/**
		 * @return 最新更新用户
		 */
		public Long getLaUpUsId() {
			return laUpUsId;
		}

		/**
		 * 最新更新用户
		 *
		 * @param laUpUsId
		 */
		public void setLaUpUsId(Long laUpUsId) {
			this.laUpUsId = laUpUsId;
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

	public static <E> CuResActSPageResponse buildPageResponse(CuResActSPageResponse pageResponse, Page<E> page, int displayPages) {
		pageResponse.buildPages(page, displayPages);

		for(E e : page.getContent()) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
