package com.xukaiqiang.guitar.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.guitar.orm.dialect.AbstractUser;
import com.xukaiqiang.guitar.orm.dialect.Schema.Tables;

/**
 * 用户
 *
 */
@Entity
@Table(name = Tables.USER)
public class User extends AbstractUser implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.USER_USERNAME)
	private String userName;
	@Column(name = Columns.USER_PASSWORD)
	private String passWord;
	@Column(name = Columns.USER_ROLEID)
	private Integer roleId;
	@Column(name = Columns.USER_DETAILID)
	private Integer detailId;
	@Column(name = Columns.USER_SEX)
	private String sex;
	@Column(name = Columns.USER_AGE)
	private Integer age;
	@Column(name = Columns.USER_NICKNAME)
	private String nickName;

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

}
