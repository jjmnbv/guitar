package com.xukaiqiang.gu.orm.entity.id;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.xukaiqiang.gu.orm.dialect.AbstractCuUsRoS.Columns;

@Embeddable
public class CuUsRoSId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CUUSROS_USID)
	private Long usId;

	@Column(name = Columns.CUUSROS_RONO)
	private String roNo;

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
	 * @return 岗位编号
	 */
	public String getRoNo() {
		return roNo;
	}

	public void setRoNo(String roNo) {
		this.roNo = roNo;
	}

	@Override
	public String toString() {
		return "CuUsRoSId [usId=" + usId + ", roNo=" + roNo + "]";
	}

}
