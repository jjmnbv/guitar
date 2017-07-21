package com.xukaiqiang.gu.orm.entity.id;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.xukaiqiang.gu.orm.dialect.AbstractDictionary.Columns;

@Embeddable
public class DictionaryId implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = Columns.DICTIONARY_ID)
	private Long id;
	@Column(name = Columns.DICTIONARY_CODE)
	private String code;

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

}
