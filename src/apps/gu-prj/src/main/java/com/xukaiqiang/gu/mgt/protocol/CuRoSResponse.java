package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.List;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuRoSResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private String roNo;
	private Integer ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private Long laUpUsId;
	private String st;
	private String roNa;
	private String stoUseYn;
	private String co;
	private List<String> selectIds;
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
	 * 选中的菜单和操作
	 * 
	 * @return
	 */
	public List<String> getSelectIds() {
		return selectIds;
	}

	public void setSelectIds(List<String> selectIds) {
		this.selectIds = selectIds;
	}

	/**
	 * @return 角色编码
	 */
	public String getRoNo() {
		return roNo;
	}

	public void setRoNo(String roNo) {
		this.roNo = roNo;
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
	 * @return 状态<br>
	 *         CS 初始<br>
	 *         JH 激活<br>
	 *         参见 通用字典 状态分类28
	 */
	public String getSt() {
		return st;
	}

	public void setSt(String st) {
		this.st = st;
	}

	/**
	 * @return 角色名称
	 */
	public String getRoNa() {
		return roNa;
	}

	public void setRoNa(String roNa) {
		this.roNa = roNa;
	}

	/**
	 * @return 商店专用
	 */
	public String getStoUseYn() {
		return stoUseYn;
	}

	public void setStoUseYn(String stoUseYn) {
		this.stoUseYn = stoUseYn;
	}

	/**
	 * @return 备注
	 */
	public String getCo() {
		return co;
	}

	public void setCo(String co) {
		this.co = co;
	}

	public static <E> CuRoSResponse buildResponse(CuRoSResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
