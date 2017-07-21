package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsPostSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsPostS;

import org.springframework.data.domain.Page;

public interface CuUsPostSService {

	/**
	 * 分页筛选用户表
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsPostS> findCuUsPostSPage(Integer pageNumber, Integer pageSize,
			CuUsPostSFilterRequest filter);

	/**
	 * 筛选用户表列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsPostS> findCuUsPostSs(CuUsPostSFilterRequest filter);

	/**
	 * 使用唯一标识查询用户表对象
	 * 
	 * @param usId
	 * @return
	 */
	CuUsPostS findCuUsPostS(Long usId);

	/**
	 * 新建用户表
	 * 
	 * @param cuusposts
	 * @return
	 */
	CuUsPostS createCuUsPostS(CuUsPostS cuusposts);

	/**
	 * 修改用户表
	 * 
	 * @param cuusposts
	 * @return
	 */
	CuUsPostS updateCuUsPostS(CuUsPostS cuusposts);

	/**
	 * 删除用户表
	 * 
	 * @param usId
	 */
	void removeCuUsPostS(Long usId);

	/**
	 * 批量删除用户岗位
	 * 
	 * @param cups
	 */
	void deleteInBatch(List<CuUsPostS> cups);

}
