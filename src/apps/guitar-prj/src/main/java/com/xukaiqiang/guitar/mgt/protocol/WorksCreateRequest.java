package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;

public class WorksCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String userId;
	private String name;
	private String url;

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
	 * @return 
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * 
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

}
