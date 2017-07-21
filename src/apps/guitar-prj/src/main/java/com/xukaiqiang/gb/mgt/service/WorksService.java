package com.xukaiqiang.gb.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gb.orm.entity.Works;
import com.xukaiqiang.gb.orm.protocol.WorksFilterRequest;

public interface WorksService {

	/**
	 * 分页筛选作品
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Works> findWorksPage(Integer pageNumber, Integer pageSize, WorksFilterRequest filter);

	/**
	 * 筛选作品列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Works> findWorkss(WorksFilterRequest filter);

	/**
	 * 使用唯一标识查询作品对象
	 * 
	 * @param id
	 * @return
	 */
	Works findWorks(Integer id);

	/**
	 * 新建作品
	 * 
	 * @param works
	 * @return
	 */
	Works createWorks(Works works);

	/**
	 * 修改作品
	 * 
	 * @param works
	 * @return
	 */
	Works updateWorks(Works works);

	/**
	 * 删除作品
	 * 
	 * @param id
	 */
	void removeWorks(Integer id);

}
