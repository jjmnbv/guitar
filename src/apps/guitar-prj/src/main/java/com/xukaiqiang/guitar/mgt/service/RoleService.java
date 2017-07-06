package com.xukaiqiang.guitar.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.guitar.orm.entity.Role;
import com.xukaiqiang.guitar.orm.protocol.RoleFilterRequest;

public interface RoleService {

	/**
	 * 分页筛选角色
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Role> findRolePage(Integer pageNumber, Integer pageSize, RoleFilterRequest filter);

	/**
	 * 筛选角色列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Role> findRoles(RoleFilterRequest filter);

	/**
	 * 使用唯一标识查询角色对象
	 * 
	 * @param id
	 * @return
	 */
	Role findRole(Integer id);

	/**
	 * 新建角色
	 * 
	 * @param role
	 * @return
	 */
	Role createRole(Role role);

	/**
	 * 修改角色
	 * 
	 * @param role
	 * @return
	 */
	Role updateRole(Role role);

	/**
	 * 删除角色
	 * 
	 * @param id
	 */
	void removeRole(Integer id);

}
