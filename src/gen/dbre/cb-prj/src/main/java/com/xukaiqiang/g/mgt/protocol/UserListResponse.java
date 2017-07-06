package com.xukaiqiang.g.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import net.zkbc.shared.protocol.OutputMessage;
import net.zkbc.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class UserListResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

		private Integer id;
		private String loginName;
		private String passWord;
		private String sex;
		private Integer age;
		private String nickName;
		private String realName;
		private Integer roleId;
		private String remarks;

		/**
		 * @return 主键
		 */
		public Integer getId() {
			return id;
		}

		/**
		 * 主键
		 *
		 * @param id
		 */
		public void setId(Integer id) {
			this.id = id;
		}

		/**
		 * @return 用户名
		 */
		public String getLoginName() {
			return loginName;
		}

		/**
		 * 用户名
		 *
		 * @param loginName
		 */
		public void setLoginName(String loginName) {
			this.loginName = loginName;
		}

		/**
		 * @return 
		 */
		public String getPassWord() {
			return passWord;
		}

		/**
		 * 
		 *
		 * @param passWord
		 */
		public void setPassWord(String passWord) {
			this.passWord = passWord;
		}

		/**
		 * @return 性别  N男 V女
		 */
		public String getSex() {
			return sex;
		}

		/**
		 * 性别  N男 V女
		 *
		 * @param sex
		 */
		public void setSex(String sex) {
			this.sex = sex;
		}

		/**
		 * @return 年龄
		 */
		public Integer getAge() {
			return age;
		}

		/**
		 * 年龄
		 *
		 * @param age
		 */
		public void setAge(Integer age) {
			this.age = age;
		}

		/**
		 * @return 昵称
		 */
		public String getNickName() {
			return nickName;
		}

		/**
		 * 昵称
		 *
		 * @param nickName
		 */
		public void setNickName(String nickName) {
			this.nickName = nickName;
		}

		/**
		 * @return 真实姓名
		 */
		public String getRealName() {
			return realName;
		}

		/**
		 * 真实姓名
		 *
		 * @param realName
		 */
		public void setRealName(String realName) {
			this.realName = realName;
		}

		/**
		 * @return 角色编号
		 */
		public Integer getRoleId() {
			return roleId;
		}

		/**
		 * 角色编号
		 *
		 * @param roleId
		 */
		public void setRoleId(Integer roleId) {
			this.roleId = roleId;
		}

		/**
		 * @return 备注
		 */
		public String getRemarks() {
			return remarks;
		}

		/**
		 * 备注
		 *
		 * @param remarks
		 */
		public void setRemarks(String remarks) {
			this.remarks = remarks;
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

	public static <E> UserListResponse buildListResponse(UserListResponse pageResponse, List<E> list) {
		for(E e : list) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
