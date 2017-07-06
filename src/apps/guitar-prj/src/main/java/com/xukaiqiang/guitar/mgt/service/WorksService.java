package com.xukaiqiang.guitar.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.guitar.orm.entity.Works;
import com.xukaiqiang.guitar.orm.protocol.WorksFilterRequest;

public interface WorksService {

	/**
	 * 分页筛选工作
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Works> findWorksPage(Integer pageNumber, Integer pageSize, WorksFilterRequest filter);

	/**
	 * 筛选工作列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Works> findWorkss(WorksFilterRequest filter);

	/**
	 * 使用唯一标识查询工作对象
	 * 
	 * @param id
	 * @return
	 */
	Works findWorks(Integer id);

	/**
	 * 新建工作
	 * 
	 * @param works
	 * @return
	 */
	Works createWorks(Works works);

	/**
	 * 修改工作
	 * 
	 * @param works
	 * @return
	 */
	Works updateWorks(Works works);

	/**
	 * 删除工作
	 * 
	 * @param id
	 */
	void removeWorks(Integer id);

}
