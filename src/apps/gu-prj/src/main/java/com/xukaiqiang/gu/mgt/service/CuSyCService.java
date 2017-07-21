package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuSyCFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuSyC;

import org.springframework.data.domain.Page;

public interface CuSyCService {

	/**
	 * 分页筛选系统配置
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuSyC> findCuSyCPage(Integer pageNumber, Integer pageSize,
			CuSyCFilterRequest filter);

	/**
	 * 筛选系统配置列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuSyC> findCuSyCs(CuSyCFilterRequest filter);

	/**
	 * 使用唯一标识查询系统配置对象
	 * 
	 * @param syCd
	 * @return
	 */
	CuSyC findCuSyC(String syCd);

	/**
	 * 新建系统配置
	 * 
	 * @param cusyc
	 * @return
	 */
	CuSyC createCuSyC(CuSyC cusyc);

	/**
	 * 修改系统配置
	 * 
	 * @param cusyc
	 * @return
	 */
	CuSyC updateCuSyC(CuSyC cusyc);

	/**
	 * 删除系统配置
	 * 
	 * @param syCd
	 */
	void removeCuSyC(String syCd);

	/**
	 * 系统配置名称列表
	 * 
	 * @return
	 */
	List<CuSyC> resSyCdNames();

}
