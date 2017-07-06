package com.xukaiqiang.g.mgt.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import net.zkbc.shared.protocol.OutputMessage;
import net.zkbc.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class EduResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer userId;
	private String schoolName;

	/**
	 * @return 
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * 
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

	public static <E> EduResponse buildResponse(EduResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
