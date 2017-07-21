package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsHolLFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsHolL;

import org.springframework.data.domain.Page;

public interface CuUsHolLService {

	/**
	 * 分页筛选用户休假日志
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsHolL> findCuUsHolLPage(Integer pageNumber, Integer pageSize,
			CuUsHolLFilterRequest filter);

	/**
	 * 筛选用户休假日志列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsHolL> findCuUsHolLs(CuUsHolLFilterRequest filter);

	/**
	 * 使用唯一标识查询用户休假日志对象
	 * 
	 * @param tr
	 * @return
	 */
	CuUsHolL findCuUsHolL(Long tr);

	/**
	 * 新建用户休假日志
	 * 
	 * @param cuusholl
	 * @param id
	 * @return
	 */
	CuUsHolL createCuUsHolL(CuUsHolL cuusholl);

	/**
	 * 修改用户休假日志
	 * 
	 * @param cuusholl
	 * @return
	 */
	CuUsHolL updateCuUsHolL(CuUsHolL cuusholl);

	/**
	 * 删除用户休假日志
	 * 
	 * @param tr
	 */
	void removeCuUsHolL(Long tr);

	/**
	 * 获取日期
	 * 
	 * @return
	 */
	CuUsHolL date();

}
