package com.xukaiqiang.gb.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.gb.orm.dialect.AbstractJob;
import com.xukaiqiang.gb.orm.dialect.Schema.Tables;

/**
 * 工作
 *
 */
@Entity
@Table(name = Tables.JOB)
public class Job extends AbstractJob implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.JOB_USERID)
	private Integer userId;
	@Column(name = Columns.JOB_CATEGORY)
	private String category;
	@Column(name = Columns.JOB_WORKAGE)
	private String workAge;
	@Column(name = Columns.JOB_BEGINTIME)
	private String beginTime;
	@Column(name = Columns.JOB_ENDTIME)
	private String endTime;
	@Column(name = Columns.JOB_ADDRESSCITY)
	private String addressCity;
	@Column(name = Columns.JOB_ADDRESSAREA)
	private String addressArea;
	@Column(name = Columns.JOB_ADDRESSPROVINCE)
	private String addressProvince;
	@Column(name = Columns.JOB_ADDRESSDETAIL)
	private String addressDetail;
	@Column(name = Columns.JOB_SALARY)
	private String salary;
	@Column(name = Columns.JOB_COMMENT)
	private String comment;
	@Column(name = Columns.JOB_MUSICSTYLE)
	private String musicStyle;
	@Column(name = Columns.JOB_HAVEBAND)
	private String haveBand;
	@Column(name = Columns.JOB_BANDNAME)
	private String bandName;
	@Column(name = Columns.JOB_HAVEPRO)
	private String havePro;
	@Column(name = Columns.JOB_PRONAME)
	private String proName;

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

}
