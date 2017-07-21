package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsFavResSCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String usId;
	private String resNo;
	private String ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private String laUpUsId;

	/**
	 * @return 用户标识
	 */
	public String getUsId() {
		return usId;
	}

	public void setUsId(String usId) {
		this.usId = usId;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		return resNo;
	}

	public void setResNo(String resNo) {
		this.resNo = resNo;
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

}
