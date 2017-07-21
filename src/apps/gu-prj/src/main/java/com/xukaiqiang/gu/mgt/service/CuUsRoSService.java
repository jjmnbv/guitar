package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsRoSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsRoS;

import org.springframework.data.domain.Page;

public interface CuUsRoSService {

	/**
	 * 分页筛选用户角色
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsRoS> findCuUsRoSPage(Integer pageNumber, Integer pageSize,
			CuUsRoSFilterRequest filter);

	/**
	 * 筛选用户角色列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsRoS> findCuUsRoSs(CuUsRoSFilterRequest filter);

	/**
	 * 使用唯一标识查询用户角色对象
	 * 
	 * @param usId
	 * @param roNo
	 * @return
	 */
	CuUsRoS findCuUsRoS(Long usId, String roNo);

	/**
	 * 新建用户角色
	 * 
	 * @param cuusros
	 * @return
	 */
	CuUsRoS createCuUsRoS(CuUsRoS cuusros);

	/**
	 * 修改用户角色
	 * 
	 * @param cuusros
	 * @return
	 */
	CuUsRoS updateCuUsRoS(CuUsRoS cuusros);

	/**
	 * 删除用户角色
	 * 
	 * @param usId
	 * @param roNo
	 */
	void removeCuUsRoS(Long usId, String roNo);

	/**
	 * 批量删除用户角色
	 * 
	 * @param curos
	 */
	void deleteInBatch(List<CuUsRoS> curos);

	/**
	 * 通过用户id删除用户角色
	 * 
	 * @param id
	 */
	void removeCuUsRoSByUsId(Long id);

}
