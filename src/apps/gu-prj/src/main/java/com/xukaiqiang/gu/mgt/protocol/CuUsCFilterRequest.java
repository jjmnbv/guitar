package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsCFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Integer ve;
	private String crDtFrom;
	private String crDtTo;
	private String crTm;
	private String laUpDtFrom;
	private String laUpDtTo;
	private Long laUpUsId;
	private Integer pwdLe;
	private String pwdAlgCd;
	private Integer loginErrQt;
	private String unlockTyCd;
	private Integer autoUnlockMinuQt;
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
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	 * @return 密码长度
	 */
	public Integer getPwdLe() {
		return pwdLe;
	}

	public void setPwdLe(Integer pwdLe) {
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
	public Integer getLoginErrQt() {
		return loginErrQt;
	}

	public void setLoginErrQt(Integer loginErrQt) {
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
	public Integer getAutoUnlockMinuQt() {
		return autoUnlockMinuQt;
	}

	public void setAutoUnlockMinuQt(Integer autoUnlockMinuQt) {
		this.autoUnlockMinuQt = autoUnlockMinuQt;
	}

}
