package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class CuSyCResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private String syCd;
	private Integer ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private Long laUpUsId;
	private String syNa;
	private String url;
	private String domNa;

	/**
	 * @return 系统代码
	 */
	public String getSyCd() {
		return syCd;
	}

	public void setSyCd(String syCd) {
		this.syCd = syCd;
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
	public Long getLaUpUsId() {
		return laUpUsId;
	}

	public void setLaUpUsId(Long laUpUsId) {
		this.laUpUsId = laUpUsId;
	}

	/**
	 * @return 系统名称
	 */
	public String getSyNa() {
		return syNa;
	}

	public void setSyNa(String syNa) {
		this.syNa = syNa;
	}

	/**
	 * @return url地址
	 */
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return 域名
	 */
	public String getDomNa() {
		return domNa;
	}

	public void setDomNa(String domNa) {
		this.domNa = domNa;
	}

	public static <E> CuSyCResponse buildResponse(CuSyCResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
