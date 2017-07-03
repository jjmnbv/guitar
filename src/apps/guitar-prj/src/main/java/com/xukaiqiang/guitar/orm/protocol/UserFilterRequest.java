package com.xukaiqiang.guitar.orm.protocol;

import java.io.Serializable;

public class UserFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String userName;
	private String passWord;
	private Integer roleId;
	private Integer detailId;
	private String sex;
	private Integer age;
	private String nickName;
	private String code;
	private String encryptedData;
	private String iv;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getEncryptedData() {
		return encryptedData;
	}

	public void setEncryptedData(String encryptedData) {
		this.encryptedData = encryptedData;
	}

	public String getIv() {
		return iv;
	}

	public void setIv(String iv) {
		this.iv = iv;
	}

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
	 * @return 详情编号
	 */
	public Integer getDetailId() {
		return detailId;
	}

	/**
	 * 详情编号
	 *
	 * @param detailId
	 */
	public void setDetailId(Integer detailId) {
		this.detailId = detailId;
	}

	/**
	 * @return 性别 N男 V女
	 */
	public String getSex() {
		return sex;
	}

	/**
	 * 性别 N男 V女
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

}
