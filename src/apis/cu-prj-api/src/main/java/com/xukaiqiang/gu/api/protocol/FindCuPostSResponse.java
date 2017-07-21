package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;

/**
 * 查找所有岗位.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonInclude(Include.NON_NULL)
public class FindCuPostSResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * @see com.xukaiqiang.gu.mgt.protocol.FindCuPostSResponse#getContent
	 */
	@JsonInclude(Include.NON_NULL)
	public static class Content implements Serializable {
		private static final long serialVersionUID = 1L;

		private String postNo;
		private String postNa;

		/**
		 * @return 岗位编号
		 */
		public String getPostNo() {
			return postNo;
		}
		/**
		 * @param postNo 岗位编号
		 */
		public void setPostNo(String postNo) {
			this.postNo = postNo;
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
	}

	private List<Content> content;

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