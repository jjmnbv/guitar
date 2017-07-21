package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsLoginLUpdateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String loginTrId;
	private String loginId;
	private String ve;
	private String crDt;
	private String crTm;
	private String loginOutDt;
	private String loginOutTm;
	private String loginNa;
    private String loginIp;
	private String ctdtEnd;
	private String queryAllParamString;
	 /**
     * 查询条件登录时间
     * @return
     */
    public String getCtdtEnd() {
		return ctdtEnd;
	}
    /**
     * 查询条件登录时间
     * @param ctdtEnd
     */
	public void setCtdtEnd(String ctdtEnd) {
		this.ctdtEnd = ctdtEnd;
	}
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
     * 登陆ip
     * @return
     */
	public String getLoginIp() {
		return loginIp;
	}
    /**
     * 登陆ip
     * @param loginIp
     */
	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}

	/**
	 * @return 登录流水Id
	 */
	public String getLoginTrId() {
		return loginTrId;
	}

	/**
	 * 登录流水Id
	 *
	 * @param loginTrId
	 */
	public void setLoginTrId(String loginTrId) {
		this.loginTrId = loginTrId;
	}

	/**
	 * @return 登录Id
	 */
	public String getLoginId() {
		return loginId;
	}

	/**
	 * 登录Id
	 *
	 * @param loginId
	 */
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	/**
	 * @return 版本
	 */
	public String getVe() {
		return ve;
	}

	/**
	 * 版本
	 *
	 * @param ve
	 */
	public void setVe(String ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期
	 */
	public String getCrDt() {
		return crDt;
	}

	/**
	 * 创建日期
	 *
	 * @param crDt
	 */
	public void setCrDt(String crDt) {
		this.crDt = crDt;
	}

	/**
	 * @return 创建时间
	 */
	public String getCrTm() {
		return crTm;
	}

	/**
	 * 创建时间
	 *
	 * @param crTm
	 */
	public void setCrTm(String crTm) {
		this.crTm = crTm;
	}

	/**
	 * @return 登录退出日期
	 */
	public String getLoginOutDt() {
		return loginOutDt;
	}

	/**
	 * 登录退出日期
	 *
	 * @param loginOutDt
	 */
	public void setLoginOutDt(String loginOutDt) {
		this.loginOutDt = loginOutDt;
	}

	/**
	 * @return 登录退出时间
	 */
	public String getLoginOutTm() {
		return loginOutTm;
	}

	/**
	 * 登录退出时间
	 *
	 * @param loginOutTm
	 */
	public void setLoginOutTm(String loginOutTm) {
		this.loginOutTm = loginOutTm;
	}

	/**
	 * @return 登录名
	 */
	public String getLoginNa() {
		return loginNa;
	}

	/**
	 * 登录名
	 *
	 * @param loginNa
	 */
	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

}
