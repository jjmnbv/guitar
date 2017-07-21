package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsChPwdL;

import org.springframework.data.domain.Page;

public interface CuUsChPwdLService {

	/**
	 * 分页筛选用户登录系统信息
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsChPwdL> findCuUsChPwdLPage(Integer pageNumber, Integer pageSize,
			CuUsChPwdLFilterRequest filter);

	/**
	 * 筛选用户登录系统信息列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsChPwdL> findCuUsChPwdLs(CuUsChPwdLFilterRequest filter);

	/**
	 * 使用唯一标识查询用户登录系统信息对象
	 * 
	 * @param id
	 * @return
	 */
	CuUsChPwdL findCuUsChPwdL(Long id);

	/**
	 * 新建用户登录系统信息
	 * 
	 * @param cuuschpwdl
	 * @return
	 */
	CuUsChPwdL createCuUsChPwdL(CuUsChPwdL cuuschpwdl);

	/**
	 * 修改用户登录系统信息
	 * 
	 * @param cuuschpwdl
	 * @return
	 */
	CuUsChPwdL updateCuUsChPwdL(CuUsChPwdL cuuschpwdl);

	/**
	 * 删除用户登录系统信息
	 * 
	 * @param id
	 */
	void removeCuUsChPwdL(Long id);

}
