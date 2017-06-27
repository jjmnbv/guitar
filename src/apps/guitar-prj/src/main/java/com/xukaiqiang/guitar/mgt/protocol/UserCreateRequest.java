package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;

public class UserCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String userName;
	private String passWord;
	private String roleId;
	private String detailId;
	private String sex;
	private String age;
	private String nickName;

	/**
	 * @return 主键
	 */
	public String getId() {
		return id;
	}

	/**
	 * 主键
	 *
	 * @param id
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return 用户名
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * 用户名
	 *
	 * @param userName
	 */
	public void setUserName(String userName) {
		this.userName = userName;
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
	 * @return 角色编号
	 */
	public String getRoleId() {
		return roleId;
	}

	/**
	 * 角色编号
	 *
	 * @param roleId
	 */
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	/**
	 * @return 详情编号
	 */
	public String getDetailId() {
		return detailId;
	}

	/**
	 * 详情编号
	 *
	 * @param detailId
	 */
	public void setDetailId(String detailId) {
		this.detailId = detailId;
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
	public String getAge() {
		return age;
	}

	/**
	 * 年龄
	 *
	 * @param age
	 */
	public void setAge(String age) {
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

}
