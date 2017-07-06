package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;

public class StoreCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String userId;
	private String name;
	private String address;

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
	 * @return 门店名称
	 */
	public String getName() {
		return name;
	}

	/**
	 * 门店名称
	 *
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return 门店地址
	 */
	public String getAddress() {
		return address;
	}

	/**
	 * 门店地址
	 *
	 * @param address
	 */
	public void setAddress(String address) {
		this.address = address;
	}

}
