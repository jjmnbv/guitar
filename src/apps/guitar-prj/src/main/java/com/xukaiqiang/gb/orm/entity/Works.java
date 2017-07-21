package com.xukaiqiang.gb.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.gb.orm.dialect.AbstractWorks;
import com.xukaiqiang.gb.orm.dialect.Schema.Tables;

/**
 * 作品
 *
 */
@Entity
@Table(name = Tables.WORKS)
public class Works extends AbstractWorks implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.WORKS_USERID)
	private Integer userId;
	@Column(name = Columns.WORKS_NAME)
	private String name;
	@Column(name = Columns.WORKS_URL)
	private String url;

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
