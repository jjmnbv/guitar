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

	@Column(name = Columns.USER_LOGINNAME)
	private String loginName;
	@Column(name = Columns.USER_PASSWORD)
	private String passWord;
	@Column(name = Columns.USER_SEX)
	private String sex;
	@Column(name = Columns.USER_AGE)
	private Integer age;
	@Column(name = Columns.USER_NICKNAME)
	private String nickName;
	@Column(name = Columns.USER_REALNAME)
	private String realName;
	@Column(name = Columns.USER_ROLEID)
	private Integer roleId;
	@Column(name = Columns.USER_REMARKS)
	private String remarks;

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
