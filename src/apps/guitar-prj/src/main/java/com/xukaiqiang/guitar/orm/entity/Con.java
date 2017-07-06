package com.xukaiqiang.guitar.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.guitar.orm.dialect.AbstractCon;
import com.xukaiqiang.guitar.orm.dialect.Schema.Tables;

/**
 * 联系
 *
 */
@Entity
@Table(name = Tables.CON)
public class Con extends AbstractCon implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CON_USERID)
	private Integer userId;
	@Column(name = Columns.CON_PHONE)
	private String phone;
	@Column(name = Columns.CON_WECHAT)
	private String wechat;
	@Column(name = Columns.CON_QQ)
	private String qq;
	@Column(name = Columns.CON_EMAIL)
	private String email;
	@Column(name = Columns.CON_LIVENUM)
	private String liveNum;
	@Column(name = Columns.CON_LIVENAME)
	private String liveName;

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
	 * @return 手机号码
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * 手机号码
	 *
	 * @param phone
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}

	/**
	 * @return 微信
	 */
	public String getWechat() {
		return wechat;
	}

	/**
	 * 微信
	 *
	 * @param wechat
	 */
	public void setWechat(String wechat) {
		this.wechat = wechat;
	}

	/**
	 * @return qq
	 */
	public String getQq() {
		return qq;
	}

	/**
	 * qq
	 *
	 * @param qq
	 */
	public void setQq(String qq) {
		this.qq = qq;
	}

	/**
	 * @return 邮箱
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * 邮箱
	 *
	 * @param email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return 直播号
	 */
	public String getLiveNum() {
		return liveNum;
	}

	/**
	 * 直播号
	 *
	 * @param liveNum
	 */
	public void setLiveNum(String liveNum) {
		this.liveNum = liveNum;
	}

	/**
	 * @return 直播平台名
	 */
	public String getLiveName() {
		return liveName;
	}

	/**
	 * 直播平台名
	 *
	 * @param liveName
	 */
	public void setLiveName(String liveName) {
		this.liveName = liveName;
	}

}
