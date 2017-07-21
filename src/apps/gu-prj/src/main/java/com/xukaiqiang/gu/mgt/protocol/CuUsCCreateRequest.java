package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsCCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private String laUpUsId;
	private String pwdLe;
	private String pwdAlgCd;
	private String loginErrQt;
	private String unlockTyCd;
	private String autoUnlockMinuQt;
	private String queryAllParamString;
	/**
	 * 全部查询条件
	 * @return
	 */
	public String getQueryAllParamString() {
		return queryAllParamString;
	}
	/**
	 * 全部查询条件
	 * @param queryAllParamString
	 */
	public void setQueryAllParamString(String queryAllParamString) {
		this.queryAllParamString = queryAllParamString;
	}
	/**
	 * @return 
	 */
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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
	 * @return 密码长度
	 */
	public String getPwdLe() {
		return pwdLe;
	}

	public void setPwdLe(String pwdLe) {
		this.pwdLe = pwdLe;
	}

	/**
	 * @return 加密算法<br>BZ 标准<br>
	 */
	public String getPwdAlgCd() {
		return pwdAlgCd;
	}

	public void setPwdAlgCd(String pwdAlgCd) {
		this.pwdAlgCd = pwdAlgCd;
	}

	/**
	 * @return 登录错误次数<br>密码错误3次 锁定
	 */
	public String getLoginErrQt() {
		return loginErrQt;
	}

	public void setLoginErrQt(String loginErrQt) {
		this.loginErrQt = loginErrQt;
	}

	/**
	 * @return 解锁类型代码<br>ZD  自动解锁<br>RG  人工解锁
	 */
	public String getUnlockTyCd() {
		return unlockTyCd;
	}

	public void setUnlockTyCd(String unlockTyCd) {
		this.unlockTyCd = unlockTyCd;
	}

	/**
	 * @return 自动解锁分钟<br>如果为自动解锁需要设置
	 */
	public String getAutoUnlockMinuQt() {
		return autoUnlockMinuQt;
	}

	public void setAutoUnlockMinuQt(String autoUnlockMinuQt) {
		this.autoUnlockMinuQt = autoUnlockMinuQt;
	}

}
