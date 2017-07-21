package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;

public class DictionaryFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String code;
	private Integer version;
	private String name;
	private Status status;
	private String subId;
	private String subCode;
	private Integer dispOrder;
	private String ciCode;
	private String createDate;
	private String lastUpdate;
	private Long lastUpdateUserId;

	/**
	 * @return 字典种类
	 */
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return 字典代码
	 */
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	/**
	 * @return 版本
	 */
	public Integer getVersion() {
		return version;
	}

	public void setVersion(Integer version) {
		this.version = version;
	}

	/**
	 * @return 字典中文
	 */
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return 状态（CS 初始、JH 激活）
	 */
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	/**
	 * @return 子字典种类
	 */
	public String getSubId() {
		return subId;
	}

	public void setSubId(String subId) {
		this.subId = subId;
	}

	/**
	 * @return 子字典代码
	 */
	public String getSubCode() {
		return subCode;
	}

	public void setSubCode(String subCode) {
		this.subCode = subCode;
	}

	/**
	 * @return 显示顺序(在字典项目中的排序)
	 */
	public Integer getDispOrder() {
		return dispOrder;
	}

	public void setDispOrder(Integer dispOrder) {
		this.dispOrder = dispOrder;
	}

	/**
	 * @return 征信对应码(用于和人行征信对应)
	 */
	public String getCiCode() {
		return ciCode;
	}

	public void setCiCode(String ciCode) {
		this.ciCode = ciCode;
	}

	/**
	 * @return 创建日期
	 */
	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}

	/**
	 * @return 最后更新日期
	 */
	public String getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(String lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	/**
	 * @return 最后更新用户
	 */
	public Long getLastUpdateUserId() {
		return lastUpdateUserId;
	}

	public void setLastUpdateUserId(Long lastUpdateUserId) {
		this.lastUpdateUserId = lastUpdateUserId;
	}

}
