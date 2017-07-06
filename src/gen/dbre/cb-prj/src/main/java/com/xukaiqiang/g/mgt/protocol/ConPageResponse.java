package com.xukaiqiang.g.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import net.zkbc.shared.protocol.PageResponse;
import net.zkbc.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class ConPageResponse extends PageResponse implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Integer id;
		private Integer userId;
		private String phone;
		private String wechat;
		private String qq;
		private String email;
		private String liveNum;
		private String liveName;

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
		 * @return 手机号码
		 */
		public String getPhone() {
			return phone;
		}

		/**
		 * 手机号码
		 *
		 * @param phone
		 */
		public void setPhone(String phone) {
			this.phone = phone;
		}

		/**
		 * @return 微信
		 */
		public String getWechat() {
			return wechat;
		}

		/**
		 * 微信
		 *
		 * @param wechat
		 */
		public void setWechat(String wechat) {
			this.wechat = wechat;
		}

		/**
		 * @return qq
		 */
		public String getQq() {
			return qq;
		}

		/**
		 * qq
		 *
		 * @param qq
		 */
		public void setQq(String qq) {
			this.qq = qq;
		}

		/**
		 * @return 邮箱
		 */
		public String getEmail() {
			return email;
		}

		/**
		 * 邮箱
		 *
		 * @param email
		 */
		public void setEmail(String email) {
			this.email = email;
		}

		/**
		 * @return 直播号
		 */
		public String getLiveNum() {
			return liveNum;
		}

		/**
		 * 直播号
		 *
		 * @param liveNum
		 */
		public void setLiveNum(String liveNum) {
			this.liveNum = liveNum;
		}

		/**
		 * @return 直播平台名
		 */
		public String getLiveName() {
			return liveName;
		}

		/**
		 * 直播平台名
		 *
		 * @param liveName
		 */
		public void setLiveName(String liveName) {
			this.liveName = liveName;
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

	public static <E> ConPageResponse buildPageResponse(ConPageResponse pageResponse, Page<E> page, int displayPages) {
		pageResponse.buildPages(page, displayPages);

		for(E e : page.getContent()) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
