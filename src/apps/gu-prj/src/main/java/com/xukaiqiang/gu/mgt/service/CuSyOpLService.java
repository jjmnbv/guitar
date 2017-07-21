package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gu.orm.entity.CuSyOpL;
import com.xukaiqiang.gu.orm.protocol.CuSyOpLFilterRequest;

public interface CuSyOpLService {

	/**
	 * 分页筛选系统操作日志
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuSyOpL> findCuSyOpLPage(Integer pageNumber, Integer pageSize, CuSyOpLFilterRequest filter);

	/**
	 * 筛选系统操作日志列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuSyOpL> findCuSyOpLs(CuSyOpLFilterRequest filter);

	/**
	 * 使用唯一标识查询系统操作日志对象
	 * 
	 * @param id
	 * @return
	 */
	CuSyOpL findCuSyOpL(Long id);

	/**
	 * 新建系统操作日志
	 * 
	 * @param cusyopl
	 * @return
	 */
	CuSyOpL createCuSyOpL(CuSyOpL cusyopl);

	/**
	 * 修改系统操作日志
	 * 
	 * @param cusyopl
	 * @return
	 */
	CuSyOpL updateCuSyOpL(CuSyOpL cusyopl);

	/**
	 * 删除系统操作日志
	 * 
	 * @param id
	 */
	void removeCuSyOpL(Long id);

}
