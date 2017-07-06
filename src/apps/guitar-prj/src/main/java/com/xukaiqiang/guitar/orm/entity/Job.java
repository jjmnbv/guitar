package com.xukaiqiang.guitar.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.guitar.orm.dialect.AbstractJob;
import com.xukaiqiang.guitar.orm.dialect.Schema.Tables;

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
	@Column(name = Columns.JOB_COMMONT)
	private String commont;
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
	 * @return 用户id
	 */
	public Integer getUserId() {
		return userId;
	}

	/**
	 * 用户id
	 *
	 * @param userId
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	/**
	 * @return 工作性质 GR个人  GQ国企 SQ私企
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * 工作性质 GR个人  GQ国企 SQ私企
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
	 * @return 工作开始时间
	 */
	public String getBeginTime() {
		return beginTime;
	}

	/**
	 * 工作开始时间
	 *
	 * @param beginTime
	 */
	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	/**
	 * @return 工作结束时间
	 */
	public String getEndTime() {
		return endTime;
	}

	/**
	 * 工作结束时间
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
	 * @return 详细地址
	 */
	public String getAddressDetail() {
		return addressDetail;
	}

	/**
	 * 详细地址
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
	 * @return 工作描述
	 */
	public String getCommont() {
		return commont;
	}

	/**
	 * 工作描述
	 *
	 * @param commont
	 */
	public void setCommont(String commont) {
		this.commont = commont;
	}

	/**
	 * @return 音乐类型  MY民谣 电吉他DJT 古典吉他GD
	 */
	public String getMusicStyle() {
		return musicStyle;
	}

	/**
	 * 音乐类型  MY民谣 电吉他DJT 古典吉他GD
	 *
	 * @param musicStyle
	 */
	public void setMusicStyle(String musicStyle) {
		this.musicStyle = musicStyle;
	}

	/**
	 * @return 是否有乐队  Y是  N否
	 */
	public String getHaveBand() {
		return haveBand;
	}

	/**
	 * 是否有乐队  Y是  N否
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
	 * @return 是否有作品 Y是N否
	 */
	public String getHavePro() {
		return havePro;
	}

	/**
	 * 是否有作品 Y是N否
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
