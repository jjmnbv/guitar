package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsChPwdLFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Long usId;
	private Integer ve;
	private String crDtFrom;
	private String crDtTo;
	private String crTm;
	private String laUpDtFrom;
	private String laUpDtTo;
	private Long laUpUsId;
	private String pwd;

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
	 * @return 用户标识
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
	 * @return 密码
	 */
	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

}
