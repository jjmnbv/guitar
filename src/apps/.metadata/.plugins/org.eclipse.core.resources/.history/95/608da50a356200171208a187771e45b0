package com.xukaiqiang.g.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.g.orm.dialect.AbstractStore;
import com.xukaiqiang.g.orm.dialect.Schema.Tables;

/**
 * 门店
 *
 */
@Entity
@Table(name = Tables.STORE)
public class Store extends AbstractStore implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.STORE_USERID)
	private Integer userId;
	@Column(name = Columns.STORE_NAME)
	private String name;
	@Column(name = Columns.STORE_ADDRESS)
	private String address;

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
