package com.xukaiqiang.gb.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.gb.orm.dialect.AbstractEducation;
import com.xukaiqiang.gb.orm.dialect.Schema.Tables;

/**
 * 教育
 *
 */
@Entity
@Table(name = Tables.EDUCATION)
public class Education extends AbstractEducation implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.EDUCATION_USERID)
	private Integer userId;
	@Column(name = Columns.EDUCATION_SCHOOLNAME)
	private String schoolName;

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
	 * @return 学校名称
	 */
	public String getSchoolName() {
		return schoolName;
	}

	/**
	 * 学校名称
	 *
	 * @param schoolName
	 */
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

}
