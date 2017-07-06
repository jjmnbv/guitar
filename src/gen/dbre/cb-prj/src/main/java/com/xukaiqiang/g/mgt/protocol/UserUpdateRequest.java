package com.xukaiqiang.g.mgt.protocol;

import java.io.Serializable;

public class UserUpdateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String loginName;
	private String passWord;
	private String sex;
	private String age;
	private String nickName;
	private String realName;
	private String roleId;
	private String remarks;

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
