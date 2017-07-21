package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsLoginSFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long usId;
	private Integer ve;
	private String crDtFrom;
	private String crDtTo;
	private String crTm;
	private String laUpDtFrom;
	private String laUpDtTo;
	private Long laUpUsId;
	private String st;
	private String pwd;
	private String pwdOvYn;
	private String pwdSalt;
	private String usLockYn;
	private String prevChPwdDtFrom;
	private String prevChPwdDtTo;
	private String nextChPwdDtFrom;
	private String nextChPwdDtTo;
	private Integer loginErrQt;
	private String lockDtFrom;
	private String lockDtTo;
	private String lockTm;
	private String autoUnlockDtFrom;
	private String autoUnlockDtTo;
	private String autoUnlockTm;
	private String loginNa;

	/**
	 * @return 用户Id
	 */
	public Long getUsId() {
		return usId;
	}

	public void setUsId(Long usId) {
		this.usId = usId;
	}

	/**
	 * @return 版本
	 */
	public Integer getVe() {
		return ve;
	}

	public void setVe(Integer ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期 from
	 */
	public String getCrDtFrom() {
		return crDtFrom;
	}

	public void setCrDtFrom(String crDtFrom) {
		this.crDtFrom = crDtFrom;
	}

	/**
	 * @return 创建日期 to
	 */
	public String getCrDtTo() {
		return crDtTo;
	}

	public void setCrDtTo(String crDtTo) {
		this.crDtTo = crDtTo;
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
	 * @return 最后更新日期 from
	 */
	public String getLaUpDtFrom() {
		return laUpDtFrom;
	}

	public void setLaUpDtFrom(String laUpDtFrom) {
		this.laUpDtFrom = laUpDtFrom;
	}

	/**
	 * @return 最后更新日期 to
	 */
	public String getLaUpDtTo() {
		return laUpDtTo;
	}

	public void setLaUpDtTo(String laUpDtTo) {
		this.laUpDtTo = laUpDtTo;
	}

	/**
	 * @return 最新更新用户
	 */
	public Long getLaUpUsId() {
		return laUpUsId;
	}

	public void setLaUpUsId(Long laUpUsId) {
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
	 * @return 上次更改密码日期 from
	 */
	public String getPrevChPwdDtFrom() {
		return prevChPwdDtFrom;
	}

	public void setPrevChPwdDtFrom(String prevChPwdDtFrom) {
		this.prevChPwdDtFrom = prevChPwdDtFrom;
	}

	/**
	 * @return 上次更改密码日期 to
	 */
	public String getPrevChPwdDtTo() {
		return prevChPwdDtTo;
	}

	public void setPrevChPwdDtTo(String prevChPwdDtTo) {
		this.prevChPwdDtTo = prevChPwdDtTo;
	}

	/**
	 * @return 下次更改密码日期 from
	 */
	public String getNextChPwdDtFrom() {
		return nextChPwdDtFrom;
	}

	public void setNextChPwdDtFrom(String nextChPwdDtFrom) {
		this.nextChPwdDtFrom = nextChPwdDtFrom;
	}

	/**
	 * @return 下次更改密码日期 to
	 */
	public String getNextChPwdDtTo() {
		return nextChPwdDtTo;
	}

	public void setNextChPwdDtTo(String nextChPwdDtTo) {
		this.nextChPwdDtTo = nextChPwdDtTo;
	}

	/**
	 * @return 登录错误次数
	 */
	public Integer getLoginErrQt() {
		return loginErrQt;
	}

	public void setLoginErrQt(Integer loginErrQt) {
		this.loginErrQt = loginErrQt;
	}

	/**
	 * @return 上次锁定日期 from
	 */
	public String getLockDtFrom() {
		return lockDtFrom;
	}

	public void setLockDtFrom(String lockDtFrom) {
		this.lockDtFrom = lockDtFrom;
	}

	/**
	 * @return 上次锁定日期 to
	 */
	public String getLockDtTo() {
		return lockDtTo;
	}

	public void setLockDtTo(String lockDtTo) {
		this.lockDtTo = lockDtTo;
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
	 * @return 自动解锁日期<br> from
	 */
	public String getAutoUnlockDtFrom() {
		return autoUnlockDtFrom;
	}

	public void setAutoUnlockDtFrom(String autoUnlockDtFrom) {
		this.autoUnlockDtFrom = autoUnlockDtFrom;
	}

	/**
	 * @return 自动解锁日期<br> to
	 */
	public String getAutoUnlockDtTo() {
		return autoUnlockDtTo;
	}

	public void setAutoUnlockDtTo(String autoUnlockDtTo) {
		this.autoUnlockDtTo = autoUnlockDtTo;
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
