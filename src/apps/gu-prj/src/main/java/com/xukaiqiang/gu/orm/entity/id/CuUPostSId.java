package com.xukaiqiang.gu.orm.entity.id;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.xukaiqiang.gu.orm.dialect.AbstractCuUsPostS.Columns;

@Embeddable
public class CuUPostSId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CUUSPOSTS_USID)
	private Long usId;

	@Column(name = Columns.CUUSPOSTS_POSTNO)
	private String postNo;

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
	public String getPostNo() {
		return postNo;
	}

	public void setPostNo(String postNo) {
		this.postNo = postNo;
	}

}
