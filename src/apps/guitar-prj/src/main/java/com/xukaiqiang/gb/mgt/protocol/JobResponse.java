package com.xukaiqiang.gb.mgt.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class JobResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer userId;
	private String category;
	private String workAge;
	private String beginTime;
	private String endTime;
	private String addressCity;
	private String addressArea;
	private String addressProvince;
	private String addressDetail;
	private String salary;
	private String comment;
	private String musicStyle;
	private String haveBand;
	private String bandName;
	private String havePro;
	private String proName;

	/**
	 * @return 编号
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * 编号
	 *
	 * @param id
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return 用户编号
	 */
	public Integer getUserId() {
		return userId;
	}

	/**
	 * 用户编号
	 *
	 * @param userId
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	/**
	 * @return 工作性质
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * 工作性质
	 *
	 * @param category
	 */
	public void setCategory(String category) {
		this.category = category;
	}

	/**
	 * @return 工龄
	 */
	public String getWorkAge() {
		return workAge;
	}

	/**
	 * 工龄
	 *
	 * @param workAge
	 */
	public void setWorkAge(String workAge) {
		this.workAge = workAge;
	}

	/**
	 * @return 开始时间
	 */
	public String getBeginTime() {
		return beginTime;
	}

	/**
	 * 开始时间
	 *
	 * @param beginTime
	 */
	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	/**
	 * @return 结束时间
	 */
	public String getEndTime() {
		return endTime;
	}

	/**
	 * 结束时间
	 *
	 * @param endTime
	 */
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	/**
	 * @return 市
	 */
	public String getAddressCity() {
		return addressCity;
	}

	/**
	 * 市
	 *
	 * @param addressCity
	 */
	public void setAddressCity(String addressCity) {
		this.addressCity = addressCity;
	}

	/**
	 * @return 地区
	 */
	public String getAddressArea() {
		return addressArea;
	}

	/**
	 * 地区
	 *
	 * @param addressArea
	 */
	public void setAddressArea(String addressArea) {
		this.addressArea = addressArea;
	}

	/**
	 * @return 省
	 */
	public String getAddressProvince() {
		return addressProvince;
	}

	/**
	 * 省
	 *
	 * @param addressProvince
	 */
	public void setAddressProvince(String addressProvince) {
		this.addressProvince = addressProvince;
	}

	/**
	 * @return 地址详情
	 */
	public String getAddressDetail() {
		return addressDetail;
	}

	/**
	 * 地址详情
	 *
	 * @param addressDetail
	 */
	public void setAddressDetail(String addressDetail) {
		this.addressDetail = addressDetail;
	}

	/**
	 * @return 薪水
	 */
	public String getSalary() {
		return salary;
	}

	/**
	 * 薪水
	 *
	 * @param salary
	 */
	public void setSalary(String salary) {
		this.salary = salary;
	}

	/**
	 * @return 备注
	 */
	public String getComment() {
		return comment;
	}

	/**
	 * 备注
	 *
	 * @param comment
	 */
	public void setComment(String comment) {
		this.comment = comment;
	}

	/**
	 * @return 音乐分类
	 */
	public String getMusicStyle() {
		return musicStyle;
	}

	/**
	 * 音乐分类
	 *
	 * @param musicStyle
	 */
	public void setMusicStyle(String musicStyle) {
		this.musicStyle = musicStyle;
	}

	/**
	 * @return 是否有乐队
	 */
	public String getHaveBand() {
		return haveBand;
	}

	/**
	 * 是否有乐队
	 *
	 * @param haveBand
	 */
	public void setHaveBand(String haveBand) {
		this.haveBand = haveBand;
	}

	/**
	 * @return 乐队名称
	 */
	public String getBandName() {
		return bandName;
	}

	/**
	 * 乐队名称
	 *
	 * @param bandName
	 */
	public void setBandName(String bandName) {
		this.bandName = bandName;
	}

	/**
	 * @return 是否有作品
	 */
	public String getHavePro() {
		return havePro;
	}

	/**
	 * 是否有作品
	 *
	 * @param havePro
	 */
	public void setHavePro(String havePro) {
		this.havePro = havePro;
	}

	/**
	 * @return 作品名称
	 */
	public String getProName() {
		return proName;
	}

	/**
	 * 作品名称
	 *
	 * @param proName
	 */
	public void setProName(String proName) {
		this.proName = proName;
	}

	public static <E> JobResponse buildResponse(JobResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
