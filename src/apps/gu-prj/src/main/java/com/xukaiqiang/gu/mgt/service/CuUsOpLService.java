package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gu.mgt.protocol.CuUsOpLFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsOpL;

public interface CuUsOpLService {

	/**
	 * 分页筛选用户操作信息<br>点击菜单以后，需要插入日志。
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsOpL> findCuUsOpLPage(Integer pageNumber, Integer pageSize, CuUsOpLFilterRequest filter);

	/**
	 * 筛选用户操作信息<br>点击菜单以后，需要插入日志。列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsOpL> findCuUsOpLs(CuUsOpLFilterRequest filter);

	/**
	 * 使用唯一标识查询用户操作信息<br>点击菜单以后，需要插入日志。对象
	 * 
	 * @param id
	 * @return
	 */
	CuUsOpL findCuUsOpL(Long id);

	/**
	 * 新建用户操作信息<br>点击菜单以后，需要插入日志。
	 * 
	 * @param cuusopl
	 * @return
	 */
	CuUsOpL createCuUsOpL(CuUsOpL cuusopl);

	/**
	 * 修改用户操作信息<br>点击菜单以后，需要插入日志。
	 * 
	 * @param cuusopl
	 * @return
	 */
	CuUsOpL updateCuUsOpL(CuUsOpL cuusopl);

	/**
	 * 删除用户操作信息<br>点击菜单以后，需要插入日志。
	 * 
	 * @param id
	 */
	void removeCuUsOpL(Long id);

}
