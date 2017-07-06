package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class WorksListResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Integer id;
		private Integer userId;
		private String name;
		private String url;

		/**
		 * @return 
		 */
		public Integer getId() {
			return id;
		}

		/**
		 * 
		 *
		 * @param id
		 */
		public void setId(Integer id) {
			this.id = id;
		}

		/**
		 * @return 
		 */
		public Integer getUserId() {
			return userId;
		}

		/**
		 * 
		 *
		 * @param userId
		 */
		public void setUserId(Integer userId) {
			this.userId = userId;
		}

		/**
		 * @return 作品名称
		 */
		public String getName() {
			return name;
		}

		/**
		 * 作品名称
		 *
		 * @param name
		 */
		public void setName(String name) {
			this.name = name;
		}

		/**
		 * @return 作品地址
		 */
		public String getUrl() {
			return url;
		}

		/**
		 * 作品地址
		 *
		 * @param url
		 */
		public void setUrl(String url) {
			this.url = url;
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

	public static <E> WorksListResponse buildListResponse(WorksListResponse pageResponse, List<E> list) {
		for(E e : list) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
