package com.xukaiqiang.gu.orm.entity.id;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.xukaiqiang.gu.orm.dialect.AbstractCuUsFavResS.Columns;

@Embeddable
public class CuUsFavResSId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CUUSFAVRESS_USID)
	private Long usId;
	@Column(name = Columns.CUUSFAVRESS_RESNO)
	private String resNo;

	/**
	 * @return 用户标识
	 */
	public Long getUsId() {
		return usId;
	}

	public void setUsId(Long usId) {
		this.usId = usId;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		return resNo;
	}

	public void setResNo(String resNo) {
		this.resNo = resNo;
	}

}
