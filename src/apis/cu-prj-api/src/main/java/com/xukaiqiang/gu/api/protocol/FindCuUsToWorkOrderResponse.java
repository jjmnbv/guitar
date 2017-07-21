package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;
import java.util.List;

import com.xukaiqiang.shared.protocol.OutputMessage;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * 工单配置查询用户.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonInclude(Include.NON_NULL)
public class FindCuUsToWorkOrderResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * @see com.xukaiqiang.gu.mgt.protocol.FindCuUsToWorkOrderResponse#getContent
	 */
	@JsonInclude(Include.NON_NULL)
	public static class Content implements Serializable {
		private static final long serialVersionUID = 1L;

		private String usNa;
		private String postNa;
		private String brNa;

		/**
		 * @return 用户姓名
		 */
		public String getUsNa() {
			return usNa;
		}
		/**
		 * @param usNa 用户姓名
		 */
		public void setUsNa(String usNa) {
			this.usNa = usNa;
		}

		/**
		 * @return 岗位名称
		 */
		public String getPostNa() {
			return postNa;
		}
		/**
		 * @param postNa 岗位名称
		 */
		public void setPostNa(String postNa) {
			this.postNa = postNa;
		}

		/**
		 * @return 机构名称
		 */
		public String getBrNa() {
			return brNa;
		}
		/**
		 * @param brNa 机构名称
		 */
		public void setBrNa(String brNa) {
			this.brNa = brNa;
		}
	}

	private List<Content> content;
	private Integer totalPages;
	private Integer totalElements;
	private Integer number;
	private Integer size;
	private List<Integer> pages;

	public Integer getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(Integer totalPages) {
		this.totalPages = totalPages;
	}

	public Integer getTotalElements() {
		return totalElements;
	}

	public void setTotalElements(Integer totalElements) {
		this.totalElements = totalElements;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public Integer getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}

	public List<Integer> getPages() {
		return pages;
	}

	public void setPages(List<Integer> pages) {
		this.pages = pages;
	}
	/**
	 * @return 
	 */
	public List<Content> getContent() {
		return content;
	}
	/**
	 * @param content 
	 */
	public void setContent(List<Content> content) {
		this.content = content;
	}

}