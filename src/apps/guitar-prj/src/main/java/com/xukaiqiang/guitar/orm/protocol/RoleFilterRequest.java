package com.xukaiqiang.guitar.orm.protocol;

import java.io.Serializable;

public class RoleFilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String roleName;

	/**
	 * @return 
	 */
	public Integer getId() {
		return id;
	}

	/**
	 * 
	 *
	 * @param id
	 */
	public void setId(Integer id) {
		this.id = id;
	}

	/**
	 * @return 角色名称
	 */
	public String getRoleName() {
		return roleName;
	}

	/**
	 * 角色名称
	 *
	 * @param roleName
	 */
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

}
