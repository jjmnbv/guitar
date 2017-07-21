package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class CuUsCResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private Integer ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private Long laUpUsId;
	private Integer pwdLe;
	private String pwdAlgCd;
	private Integer loginErrQt;
	private String unlockTyCd;
	private Integer autoUnlockMinuQt;

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

	public static <E> CuUsCResponse buildResponse(CuUsCResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
