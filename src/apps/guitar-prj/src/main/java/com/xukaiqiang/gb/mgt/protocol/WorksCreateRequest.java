package com.xukaiqiang.gb.mgt.protocol;

import java.io.Serializable;

public class WorksCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String userId;
	private String name;
	private String url;

	/**
	 * @return 编号
	 */
	public String getId() {
		return id;
	}

	/**
	 * 编号
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
	 * @return 访问地址
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * 访问地址
	 *
	 * @param url
	 */
	public void setUrl(String url) {
		this.url = url;
	}

}
