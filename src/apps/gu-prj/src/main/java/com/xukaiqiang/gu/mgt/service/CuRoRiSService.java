package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuRoRiSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuRoRiS;

import org.springframework.data.domain.Page;

public interface CuRoRiSService {

	/**
	 * 分页筛选角色权限
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuRoRiS> findCuRoRiSPage(Integer pageNumber, Integer pageSize,
			CuRoRiSFilterRequest filter);

	/**
	 * 筛选角色权限列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuRoRiS> findCuRoRiSs(CuRoRiSFilterRequest filter);

	/**
	 * 使用唯一标识查询角色权限对象
	 * 
	 * @param roNo
	 * @param resNo
	 * @param resActCd
	 * @return
	 */
	CuRoRiS findCuRoRiS(String roNo, String resNo, String resActCd);

	/**
	 * 新建角色权限
	 * 
	 * @param curoris
	 * @return
	 */
	CuRoRiS createCuRoRiS(CuRoRiS curoris);

	/**
	 * 修改角色权限,不带pathFilter
	 * 
	 * @param curoris
	 * @return
	 */
	CuRoRiS updateCuRoRiS(CuRoRiS curoris);

	/**
	 * 删除角色权限
	 * 
	 * @param roNo
	 * @param resNo
	 * @param resActCd
	 */
	void removeCuRoRiS(String roNo, String resNo, String resActCd);

	/**
	 * 批量查询角色权限
	 * 
	 * @param roNo
	 * @param resNo
	 * @return
	 */
	CuRoRiS findCuRoRiSList(String roNo, String resNo);

	/**
	 * 修改用户角色，带pathFilter
	 * 
	 * @param curoris
	 * @return
	 */
	CuRoRiS roupdateCuRoRiS(CuRoRiS curoris);

}
