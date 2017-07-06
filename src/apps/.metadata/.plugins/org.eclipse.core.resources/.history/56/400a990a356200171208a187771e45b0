package com.xukaiqiang.g.mgt.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import net.zkbc.shared.protocol.OutputMessage;
import net.zkbc.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class WorksResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private Integer userId;
	private String name;
	private String url;

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
	 * @return 
	 */
	public Integer getUserId() {
		return userId;
	}

	/**
	 * 
	 *
	 * @param userId
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	/**
	 * @return 作品名称
	 */
	public String getName() {
		return name;
	}

	/**
	 * 作品名称
	 *
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return 作品地址
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * 作品地址
	 *
	 * @param url
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	public static <E> WorksResponse buildResponse(WorksResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
