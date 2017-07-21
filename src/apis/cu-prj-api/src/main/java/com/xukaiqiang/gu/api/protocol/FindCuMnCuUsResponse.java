package com.xukaiqiang.gu.api.protocol;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;

/**
 * 查找所有的客户经理.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonInclude(Include.NON_NULL)
public class FindCuMnCuUsResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * @see com.xukaiqiang.gu.mgt.protocol.FindCuMnCuUsResponse#getContent
	 */
	@JsonInclude(Include.NON_NULL)
	public static class Content implements Serializable {
		private static final long serialVersionUID = 1L;

		private Long id;
		private String usNa;
		private String moNo;
		private String loginNa;

		/**
		 * @return ID
		 */
		public Long getId() {
			return id;
		}
		/**
		 * @param id ID
		 */
		public void setId(Long id) {
			this.id = id;
		}

		/**
		 * @return 用户名称
		 */
		public String getUsNa() {
			return usNa;
		}
		/**
		 * @param usNa 用户名称
		 */
		public void setUsNa(String usNa) {
			this.usNa = usNa;
		}

		/**
		 * @return 用户电话
		 */
		public String getMoNo() {
			return moNo;
		}
		/**
		 * @param moNo 用户电话
		 */
		public void setMoNo(String moNo) {
			this.moNo = moNo;
		}

		/**
		 * @return 登录名称
		 */
		public String getLoginNa() {
			return loginNa;
		}
		/**
		 * @param loginNa 登录名称
		 */
		public void setLoginNa(String loginNa) {
			this.loginNa = loginNa;
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