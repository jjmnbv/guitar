package com.xukaiqiang.gu.mgt.service;

import java.text.ParseException;
import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL;

import org.springframework.data.domain.Page;

public interface CuUsLoginLService {

	/**
	 * 分页筛选用户登录日志
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsLoginL> findCuUsLoginLPage(Integer pageNumber, Integer pageSize,
			CuUsLoginLFilterRequest filter);

	/**
	 * 筛选用户登录日志列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsLoginL> findCuUsLoginLs(CuUsLoginLFilterRequest filter);

	/**
	 * 使用唯一标识查询用户登录日志对象
	 * 
	 * @param loginTrId
	 * @return
	 */
	CuUsLoginL findCuUsLoginL(Long loginTrId);

	/**
	 * 新建用户登录日志
	 * 
	 * @param cuusloginl
	 * @return
	 */
	CuUsLoginL createCuUsLoginL(CuUsLoginL cuusloginl);

	/**
	 * 修改用户登录日志
	 * 
	 * @param cuusloginl
	 * @return
	 */
	CuUsLoginL updateCuUsLoginL(CuUsLoginL cuusloginl);

	/**
	 * 删除用户登录日志
	 * 
	 * @param loginTrId
	 */
	void removeCuUsLoginL(Long loginTrId);

	/**
	 * 获取上次登录日期
	 * 
	 * @param id
	 * @return
	 * @throws ParseException 
	 */
	String findPrevLoginTm(Long id) throws ParseException;

}
