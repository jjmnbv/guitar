package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.mgt.protocol.Status;
import com.xukaiqiang.gu.orm.dialect.AbstractDictionary;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.gu.orm.entity.id.DictionaryId;

/**
 * 字典
 * 
 */
@Entity
@Table(name = Tables.DICTIONARY)
public class Dictionary extends AbstractDictionary implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private DictionaryId dictionaryId;

	@Transient
	private Long id;
	@Transient
	private String code;

	@Version
	@Column(name = Columns.DICTIONARY_VERSION)
	private Integer version;
	@Column(name = Columns.DICTIONARY_NAME)
	private String name;

	@Enumerated(EnumType.STRING)
	@Column(name = Columns.DICTIONARY_STATUS)
	private Status status = Status.CS;
	@Column(name = Columns.DICTIONARY_SUBID)
	private String subId;
	@Column(name = Columns.DICTIONARY_SUBCODE)
	private String subCode;
	@Column(name = Columns.DICTIONARY_DISPORDER)
	private Integer dispOrder = 9999;
	@Column(name = Columns.DICTIONARY_CICODE)
	private String ciCode;
	@Column(name = Columns.DICTIONARY_CREATEDATE)
	private String createDate;
	@Column(name = Columns.DICTIONARY_LASTUPDATE)
	private String lastUpdate;
	@Column(name = Columns.DICTIONARY_LASTUPDATEUSERID)
	private Long lastUpdateUserId;

	/**
	 * @return 主键
	 */
	public DictionaryId getDictionaryId() {
		return dictionaryId;
	}

	public void setDictionaryId(DictionaryId dictionaryId) {
		this.dictionaryId = dictionaryId;
	}

	/**
	 * @return 字典种类
	 */
	public Long getId() {
		if (id == null && getDictionaryId() != null) {
			id = getDictionaryId().getId();
		}
		return id;
	}

	public void setId(Long id) {
		if (id != null) {
			if (getDictionaryId() == null) {
				setDictionaryId(new DictionaryId());
			}
			getDictionaryId().setId(id);
		}
		this.id = id;
	}

	/**
	 * @return 字典代码
	 */
	public String getCode() {
		if (code == null && getDictionaryId() != null) {
			code = getDictionaryId().getCode();
		}
		return code;
	}

	public void setCode(String code) {
		if (code != null) {
			if (getDictionaryId() == null) {
				setDictionaryId(new DictionaryId());
			}
			getDictionaryId().setCode(code);
		}
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
