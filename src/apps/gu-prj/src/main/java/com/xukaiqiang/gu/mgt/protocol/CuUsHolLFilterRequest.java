package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class CuUsHolLFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long tr;
	private Long usId;
	private Integer ve;
	private String crDtFrom;
	private String crDtTo;
	private String crTm;
	private String laUpDtFrom;
	private String laUpDtTo;
	private Long laUpUsId;
	private String efDtFrom;
	private String efDtTo;
	private String holBeDtFrom;
	private String holBeDtTo;
	private String holEnDtFrom;
	private String holEnDtTo;
	private String holCd;
	private String woDt;
	private String woTm;
	private String loginNa;
	private String loginTrId;
	private String co;
	private String holCauCa;

	/**
	 * 请假原因
	 * 
	 * @return
	 */
	public String getHolCauCa() {
		return holCauCa;
	}

	public void setHolCauCa(String holCauCa) {
		this.holCauCa = holCauCa;
	}

	/**
	 * 登录名
	 * 
	 * @return
	 */
	public String getLoginNa() {
		return loginNa;
	}

	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

	/**
	 * 登录流水号
	 * 
	 * @return
	 */
	public String getLoginTrId() {
		return loginTrId;
	}

	public void setLoginTrId(String loginTrId) {
		this.loginTrId = loginTrId;
	}

	/**
	 * 备注
	 * 
	 * @return
	 */
	public String getCo() {
		return co;
	}

	public void setCo(String co) {
		this.co = co;
	}

	/**
	 * 上班日期
	 * 
	 * @return
	 */
	public String getWoDt() {
		return woDt;
	}

	public void setWoDt(String woDt) {
		this.woDt = woDt;
	}

	/**
	 * 上班时间
	 * 
	 * @return
	 */
	public String getWoTm() {
		return woTm;
	}

	public void setWoTm(String woTm) {
		this.woTm = woTm;
	}

	/**
	 * @return 申请请假流水
	 */
	public Long getTr() {
		return tr;
	}

	public void setTr(Long tr) {
		this.tr = tr;
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
	 * @return 生效日期<br>
	 *         休假或者上班生效日期 from
	 */
	public String getEfDtFrom() {
		return efDtFrom;
	}

	public void setEfDtFrom(String efDtFrom) {
		this.efDtFrom = efDtFrom;
	}

	/**
	 * @return 生效日期<br>
	 *         休假或者上班生效日期 to
	 */
	public String getEfDtTo() {
		return efDtTo;
	}

	public void setEfDtTo(String efDtTo) {
		this.efDtTo = efDtTo;
	}

	/**
	 * @return 休假开始日期 from
	 */
	public String getHolBeDtFrom() {
		return holBeDtFrom;
	}

	public void setHolBeDtFrom(String holBeDtFrom) {
		this.holBeDtFrom = holBeDtFrom;
	}

	/**
	 * @return 休假开始日期 to
	 */
	public String getHolBeDtTo() {
		return holBeDtTo;
	}

	public void setHolBeDtTo(String holBeDtTo) {
		this.holBeDtTo = holBeDtTo;
	}

	/**
	 * @return 休假结束日期 from
	 */
	public String getHolEnDtFrom() {
		return holEnDtFrom;
	}

	public void setHolEnDtFrom(String holEnDtFrom) {
		this.holEnDtFrom = holEnDtFrom;
	}

	/**
	 * @return 休假结束日期 to
	 */
	public String getHolEnDtTo() {
		return holEnDtTo;
	}

	public void setHolEnDtTo(String holEnDtTo) {
		this.holEnDtTo = holEnDtTo;
	}

	/**
	 * @return 休假代码<br>
	 *         XJ 休假 <br>
	 *         SB 上班
	 */
	public String getHolCd() {
		return holCd;
	}

	public void setHolCd(String holCd) {
		this.holCd = holCd;
	}

}
