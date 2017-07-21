package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsLoginSCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String usId;
	private String ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private String laUpUsId;
	private String st;
	private String pwd;
	private String pwdOvYn;
	private String pwdSalt;
	private String usLockYn;
	private String prevChPwdDt;
	private String nextChPwdDt;
	private String loginErrQt;
	private String lockDt;
	private String lockTm;
	private String autoUnlockDt;
	private String autoUnlockTm;
	private String loginNa;

	/**
	 * @return 用户Id
	 */
	public String getUsId() {
		return usId;
	}

	public void setUsId(String usId) {
		this.usId = usId;
	}

	/**
	 * @return 版本
	 */
	public String getVe() {
		return ve;
	}

	public void setVe(String ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期
	 */
	public String getCrDt() {
		return crDt;
	}

	public void setCrDt(String crDt) {
		this.crDt = crDt;
	}

	/**
	 * @return 创建时间
	 */
	public String getCrTm() {
		return crTm;
	}

	public void setCrTm(String crTm) {
		this.crTm = crTm;
	}

	/**
	 * @return 最后更新日期
	 */
	public String getLaUpDt() {
		return laUpDt;
	}

	public void setLaUpDt(String laUpDt) {
		this.laUpDt = laUpDt;
	}

	/**
	 * @return 最新更新用户
	 */
	public String getLaUpUsId() {
		return laUpUsId;
	}

	public void setLaUpUsId(String laUpUsId) {
		this.laUpUsId = laUpUsId;
	}

	/**
	 * @return 状态<br>CS 初始<br>JH 激活<br>参见 通用字典 状态分类28
	 */
	public String getSt() {
		return st;
	}

	public void setSt(String st) {
		this.st = st;
	}

	/**
	 * @return 密码
	 */
	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	/**
	 * @return 是否密码过期
	 */
	public String getPwdOvYn() {
		return pwdOvYn;
	}

	public void setPwdOvYn(String pwdOvYn) {
		this.pwdOvYn = pwdOvYn;
	}

	/**
	 * @return 密码盐
	 */
	public String getPwdSalt() {
		return pwdSalt;
	}

	public void setPwdSalt(String pwdSalt) {
		this.pwdSalt = pwdSalt;
	}

	/**
	 * @return 用户是否锁定
	 */
	public String getUsLockYn() {
		return usLockYn;
	}

	public void setUsLockYn(String usLockYn) {
		this.usLockYn = usLockYn;
	}

	/**
	 * @return 上次更改密码日期
	 */
	public String getPrevChPwdDt() {
		return prevChPwdDt;
	}

	public void setPrevChPwdDt(String prevChPwdDt) {
		this.prevChPwdDt = prevChPwdDt;
	}

	/**
	 * @return 下次更改密码日期
	 */
	public String getNextChPwdDt() {
		return nextChPwdDt;
	}

	public void setNextChPwdDt(String nextChPwdDt) {
		this.nextChPwdDt = nextChPwdDt;
	}

	/**
	 * @return 登录错误次数
	 */
	public String getLoginErrQt() {
		return loginErrQt;
	}

	public void setLoginErrQt(String loginErrQt) {
		this.loginErrQt = loginErrQt;
	}

	/**
	 * @return 上次锁定日期
	 */
	public String getLockDt() {
		return lockDt;
	}

	public void setLockDt(String lockDt) {
		this.lockDt = lockDt;
	}

	/**
	 * @return 锁定时间
	 */
	public String getLockTm() {
		return lockTm;
	}

	public void setLockTm(String lockTm) {
		this.lockTm = lockTm;
	}

	/**
	 * @return 自动解锁日期<br>
	 */
	public String getAutoUnlockDt() {
		return autoUnlockDt;
	}

	public void setAutoUnlockDt(String autoUnlockDt) {
		this.autoUnlockDt = autoUnlockDt;
	}

	/**
	 * @return 自动解锁时间
	 */
	public String getAutoUnlockTm() {
		return autoUnlockTm;
	}

	public void setAutoUnlockTm(String autoUnlockTm) {
		this.autoUnlockTm = autoUnlockTm;
	}

	/**
	 * @return 登录名
	 */
	public String getLoginNa() {
		return loginNa;
	}

	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

}
