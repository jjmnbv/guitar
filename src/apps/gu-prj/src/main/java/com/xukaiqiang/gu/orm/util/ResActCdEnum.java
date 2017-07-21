package com.xukaiqiang.gu.orm.util;

/**
 * 资源动作码
 */
public enum ResActCdEnum {
	/**
	 * 访问
	 */
	访问("/page/*", "0001"),
	/**
	 * 查询
	 */
	查询("/view/*", "0002"),
	/**
	 * 添加
	 */
	添加("/create", "0003"),
	/**
	 * 修改
	 */
	修改("/update", "0004"),
	/**
	 * 删除
	 */
	删除("/remove/*", "0005");
	private String status;
	private String comment;

	ResActCdEnum(String status, String comment) {
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
