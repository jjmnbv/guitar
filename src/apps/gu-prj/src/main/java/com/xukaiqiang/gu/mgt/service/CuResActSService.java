package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gu.mgt.protocol.CuResActSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuResActS;

public interface CuResActSService {

	/**
	 * 分页筛选资源操作配置
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuResActS> findCuResActSPage(Integer pageNumber, Integer pageSize, CuResActSFilterRequest filter);

	/**
	 * 筛选资源操作配置列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuResActS> findCuResActSs(CuResActSFilterRequest filter);

	/**
	 * 使用唯一标识查询资源操作配置对象
	 * 
	 * @param resNo
	 * @param suId
	 * @return
	 */
	CuResActS findCuResActS(String resNo, Short suId);

	/**
	 * 新建资源操作配置
	 * 
	 * @param curesacts
	 * @return
	 */
	CuResActS createCuResActS(CuResActS curesacts);

	/**
	 * 修改资源操作配置
	 * 
	 * @param curesacts
	 * @return
	 */
	CuResActS updateCuResActS(CuResActS curesacts);

	/**
	 * 删除资源操作配置
	 * 
	 * @param resNo
	 * @param suId
	 */
	void removeCuResActS(String resNo, Short suId);

}
