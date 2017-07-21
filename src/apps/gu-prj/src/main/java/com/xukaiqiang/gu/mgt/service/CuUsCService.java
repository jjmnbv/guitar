package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gu.mgt.protocol.CuUsCFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsC;

public interface CuUsCService {

	/**
	 * 分页筛选用户配置
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsC> findCuUsCPage(Integer pageNumber, Integer pageSize, CuUsCFilterRequest filter);

	/**
	 * 筛选用户配置列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsC> findCuUsCs(CuUsCFilterRequest filter);

	/**
	 * 使用唯一标识查询用户配置对象
	 * 
	 * @param id
	 * @return
	 */
	CuUsC findCuUsC(Long id);

	/**
	 * 新建用户配置
	 * 
	 * @param cuusc
	 * @return
	 */
	CuUsC createCuUsC(CuUsC cuusc);

	/**
	 * 修改用户配置
	 * 
	 * @param cuusc
	 * @return
	 */
	CuUsC updateCuUsC(CuUsC cuusc);

	/**
	 * 删除用户配置
	 * 
	 * @param id
	 */
	void removeCuUsC(Long id);

}
