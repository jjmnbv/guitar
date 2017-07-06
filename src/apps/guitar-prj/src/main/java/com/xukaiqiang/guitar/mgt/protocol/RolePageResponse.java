package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.PageResponse;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class RolePageResponse extends PageResponse implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Integer id;
		private String roleName;

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
		 * @return 角色名称
		 */
		public String getRoleName() {
			return roleName;
		}

		/**
		 * 角色名称
		 *
		 * @param roleName
		 */
		public void setRoleName(String roleName) {
			this.roleName = roleName;
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

	public static <E> RolePageResponse buildPageResponse(RolePageResponse pageResponse, Page<E> page, int displayPages) {
		pageResponse.buildPages(page, displayPages);

		for(E e : page.getContent()) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
