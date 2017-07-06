package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;

public class RoleUpdateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String id;
	private String roleName;

	/**
	 * @return 
	 */
	public String getId() {
		return id;
	}

	/**
	 * 
	 *
	 * @param id
	 */
	public void setId(String id) {
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
