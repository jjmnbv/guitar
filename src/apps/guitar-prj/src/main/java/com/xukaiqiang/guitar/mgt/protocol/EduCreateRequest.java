package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;

public class EduCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String userId;
	private String schoolName;

	/**
	 * @return 
	 */
	public String getId() {
		return id;
	}

	/**
	 * 
	 *
	 * @param id
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return 用户编号
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * 用户编号
	 *
	 * @param userId
	 */
	public void setUserId(String userId) {
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
