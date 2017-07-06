package com.xukaiqiang.g.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import net.zkbc.shared.protocol.OutputMessage;
import net.zkbc.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class StoreListResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Integer id;
		private Integer userId;
		private String name;
		private String address;

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
		 * @return 用户编号
		 */
		public Integer getUserId() {
			return userId;
		}

		/**
		 * 用户编号
		 *
		 * @param userId
		 */
		public void setUserId(Integer userId) {
			this.userId = userId;
		}

		/**
		 * @return 门店名称
		 */
		public String getName() {
			return name;
		}

		/**
		 * 门店名称
		 *
		 * @param name
		 */
		public void setName(String name) {
			this.name = name;
		}

		/**
		 * @return 门店地址
		 */
		public String getAddress() {
			return address;
		}

		/**
		 * 门店地址
		 *
		 * @param address
		 */
		public void setAddress(String address) {
			this.address = address;
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

	public static <E> StoreListResponse buildListResponse(StoreListResponse pageResponse, List<E> list) {
		for(E e : list) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
