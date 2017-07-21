package com.xukaiqiang.gu.orm.util;

/**
 * 资源动作码
 */
public enum MenuActionEnum {
	/** 
	 * 菜单访问
	 */
	FW("菜单访问", "0001"),
	/** 
	 * 查询
	 */
	CX("查询", "0002"),
	/** 
	 * 新增
	 */
	XZ("新增", "0003"),
	/** 
	 * 修改
	 */
	XG("修改", "0004"),
	/** 
	 * 删除
	 */
	SC("删除", "0005");
	private String status;
	private String comment;

	MenuActionEnum(String status, String comment) {
		this.status = status;
		this.comment = comment;
	}

	public String getStatus() {
		return status;
	}

	public String getComment() {
		return comment;
	}
}
