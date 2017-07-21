package com.xukaiqiang.oauth2.auth.protocol;

import java.io.Serializable;
import java.util.Set;

import com.xukaiqiang.shiro.entity.ShiroUser;

public class OAuthRsUserinfo implements ShiroUser, Serializable {

	public static enum Status {
		/**
		 * 正常
		 */
		NORMAL,
		/**
		 * 无效
		 */
		INVALID,
		/**
		 * 锁定：需要管理员解锁
		 */
		LOCKED,
		/**
		 * 解锁：需要提示修改密码
		 */
		UNLOCK;
	}

	private static final long serialVersionUID = 1L;

	private Long id;
	private String organId;
	private String organName;
	private String loginName;
	private String password;
	private String salt;
	private String realName;
	private String phoneNumber;
	private String email;
	private String sex;
	private String birthday;
	private String job;
	private String empno;
	private Set<String> roleNames;
	private Set<String> permissionNames;
	private Set<String> positionNames;
	private boolean disabled;
	private Status status = Status.NORMAL;
	private String prevLoginTime;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public boolean isDisabled() {
		setDisabled(!Status.NORMAL.equals(status) && !Status.UNLOCK.equals(status));
		return disabled;
	}

	public void setDisabled(boolean disabled) {
		this.disabled = disabled;
	}

	public String getOrganId() {
		return organId;
	}

	public void setOrganId(String organId) {
		this.organId = organId;
	}

	public String getOrganName() {
		return organName;
	}

	public void setOrganName(String organName) {
		this.organName = organName;
	}

	@Override
	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	@Override
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getEmpno() {
		return empno;
	}

	public void setEmpno(String empno) {
		this.empno = empno;
	}

	@Override
	public Set<String> getRoleNames() {
		return roleNames;
	}

	public void setRoleNames(Set<String> roleNames) {
		this.roleNames = roleNames;
	}

	@Override
	public Set<String> getPermissionNames() {
		return permissionNames;
	}

	public void setPermissionNames(Set<String> permissionNames) {
		this.permissionNames = permissionNames;
	}

	public Set<String> getPositionNames() {
		return positionNames;
	}

	public void setPositionNames(Set<String> positionNames) {
		this.positionNames = positionNames;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	/**
	 * @return 上次登录时间
	 */
	public String getPrevLoginTime() {
		return prevLoginTime;
	}

	/**
	 * 上次登录时间
	 */
	public void setPrevLoginTime(String prevLoginTime) {
		this.prevLoginTime = prevLoginTime;
	}

}
