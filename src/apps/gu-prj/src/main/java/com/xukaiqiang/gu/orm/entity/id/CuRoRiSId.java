package com.xukaiqiang.gu.orm.entity.id;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.xukaiqiang.gu.orm.dialect.AbstractCuRoRiS.Columns;

@Embeddable
public class CuRoRiSId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CURORIS_RONO)
	private String roNo;
	@Column(name = Columns.CURORIS_RESNO)
	private String resNo;
	@Column(name = Columns.CURORIS_RESACTCD)
	private String resActCd;

	/**
	 * @return 岗位编号
	 */
	public String getRoNo() {
		return roNo;
	}

	public void setRoNo(String roNo) {
		this.roNo = roNo;
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

	/**
	 * @return 资源动作码<br>ZJ 增加<br>XG 修改<br>SC 删除<br>CX 查询<br>FW 访问<br>参见字典分类代码：70
	 */
	public String getResActCd() {
		return resActCd;
	}

	public void setResActCd(String resActCd) {
		this.resActCd = resActCd;
	}

}
