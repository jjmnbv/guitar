package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuSyOpLListResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Long id;
		private Integer ve;
		private String crDt;
		private String crTm;
		private String syOpCd;
		private String syCd;
		private String co;
		private String usLoginNa;
		private Long tenaId;
		private String queryAllParamString;
		private String crdtEnd;
		/**
		 * 全部查询
		 * @return
		 */
		public String getQueryAllParamString() {
			return queryAllParamString;
		}
	    /**
	     * 全部查询
	     * @param queryAllParamString
	     */
		public void setQueryAllParamString(String queryAllParamString) {
			this.queryAllParamString = queryAllParamString;
		}
	    /**
	     * 创建时间查询条件
	     * @return
	     */
		public String getCrdtEnd() {
			return crdtEnd;
		}
	    /**
	     * 创建时间查询条件
	     * @param crdtEnd
	     */
		public void setCrdtEnd(String crdtEnd) {
			this.crdtEnd = crdtEnd;
		}
		/**
		 * @return 标识
		 */
		public Long getId() {
			return id;
		}

		/**
		 * 标识
		 *
		 * @param id
		 */
		public void setId(Long id) {
			this.id = id;
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
		 * @return 系统操作代码<br>QD 系统启动<br>GB 关闭<br>ZJ  用户增减<br>QX 权限变更<br>XN 性能异常<br>GN 功能异常<br>YJ硬件异常<br>YL 网络异常<br>WX 危险<br>QT 其他
		 */
		public String getSyOpCd() {
			return syOpCd;
		}

		/**
		 * 系统操作代码<br>QD 系统启动<br>GB 关闭<br>ZJ  用户增减<br>QX 权限变更<br>XN 性能异常<br>GN 功能异常<br>YJ硬件异常<br>YL 网络异常<br>WX 危险<br>QT 其他
		 *
		 * @param syOpCd
		 */
		public void setSyOpCd(String syOpCd) {
			this.syOpCd = syOpCd;
		}

		/**
		 * @return 系统代码<br>参见其他的系统代码配置。
		 */
		public String getSyCd() {
			return syCd;
		}

		/**
		 * 系统代码<br>参见其他的系统代码配置。
		 *
		 * @param syCd
		 */
		public void setSyCd(String syCd) {
			this.syCd = syCd;
		}

		/**
		 * @return 备注
		 */
		public String getCo() {
			return co;
		}

		/**
		 * 备注
		 *
		 * @param co
		 */
		public void setCo(String co) {
			this.co = co;
		}

		/**
		 * @return 用户登录名
		 */
		public String getUsLoginNa() {
			return usLoginNa;
		}

		/**
		 * 用户登录名
		 *
		 * @param usLoginNa
		 */
		public void setUsLoginNa(String usLoginNa) {
			this.usLoginNa = usLoginNa;
		}

		/**
		 * @return 租户Id
		 */
		public Long getTenaId() {
			return tenaId;
		}

		/**
		 * 租户Id
		 *
		 * @param tenaId
		 */
		public void setTenaId(Long tenaId) {
			this.tenaId = tenaId;
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

	public static <E> CuSyOpLListResponse buildListResponse(CuSyOpLListResponse pageResponse, List<E> list) {
		for(E e : list) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
