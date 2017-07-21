package com.xukaiqiang.gu.orm.entity.id;

import java.io.Serializable;


import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.xukaiqiang.gu.orm.dialect.AbstractCuResActS.Columns;

@Embeddable
public class CuResActSId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CURESACTS_RESNO)
	private String resNo;
	@Column(name = Columns.CURESACTS_SUID)
	private Short suId;

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		return resNo;
	}

	/**
	 * 资源编号
	 *
	 * @param resNo
	 */
	public void setResNo(String resNo) {
		this.resNo = resNo;
	}

	/**
	 * @return 子序号
	 */
	public Short getSuId() {
		return suId;
	}

	/**
	 * 子序号
	 *
	 * @param suId
	 */
	public void setSuId(Short suId) {
		this.suId = suId;
	}

}
