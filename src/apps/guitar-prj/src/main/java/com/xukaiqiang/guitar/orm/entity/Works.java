package com.xukaiqiang.guitar.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.guitar.orm.dialect.AbstractWorks;
import com.xukaiqiang.guitar.orm.dialect.Schema.Tables;

/**
 * 工作
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

}
