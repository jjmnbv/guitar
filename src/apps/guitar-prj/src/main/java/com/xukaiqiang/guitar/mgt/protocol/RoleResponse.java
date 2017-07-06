package com.xukaiqiang.guitar.mgt.protocol;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class RoleResponse extends OutputMessage implements Serializable {
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

	public static <E> RoleResponse buildResponse(RoleResponse response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
