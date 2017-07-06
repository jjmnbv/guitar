package com.xukaiqiang.g.orm.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.xukaiqiang.g.orm.dialect.AbstractRole;
import com.xukaiqiang.g.orm.dialect.Schema.Tables;

/**
 * 角色
 *
 */
@Entity
@Table(name = Tables.ROLE)
public class Role extends AbstractRole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.ROLE_ROLENAME)
	private String roleName;

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
