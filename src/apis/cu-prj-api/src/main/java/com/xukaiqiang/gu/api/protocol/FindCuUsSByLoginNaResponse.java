package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;

/**
 * 通过登录名查找用户.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonInclude(Include.NON_NULL)
public class FindCuUsSByLoginNaResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * @see com.xukaiqiang.gu.mgt.protocol.FindCuUsSByLoginNaResponse#getContent
	 */
	@JsonInclude(Include.NON_NULL)
	public static class Content implements Serializable {
		private static final long serialVersionUID = 1L;

		private String loginNa;
		private String usNa;
		private Long id;
		private String st;

		/**
		 * @return 登录名
		 */
		public String getLoginNa() {
			return loginNa;
		}
		/**
		 * @param loginNa 登录名
		 */
		public void setLoginNa(String loginNa) {
			this.loginNa = loginNa;
		}

		/**
		 * @return 真实姓名
		 */
		public String getUsNa() {
			return usNa;
		}
		/**
		 * @param usNa 真实姓名
		 */
		public void setUsNa(String usNa) {
			this.usNa = usNa;
		}

		/**
		 * @return 用户id
		 */
		public Long getId() {
			return id;
		}
		/**
		 * @param id 用户id
		 */
		public void setId(Long id) {
			this.id = id;
		}

		/**
		 * @return 状态
		 */
		public String getSt() {
			return st;
		}
		/**
		 * @param st 状态
		 */
		public void setSt(String st) {
			this.st = st;
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