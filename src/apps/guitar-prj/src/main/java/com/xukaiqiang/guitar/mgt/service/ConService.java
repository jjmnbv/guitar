package com.xukaiqiang.guitar.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.guitar.orm.entity.Con;
import com.xukaiqiang.guitar.orm.protocol.ConFilterRequest;

public interface ConService {

	/**
	 * 分页筛选联系
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Con> findConPage(Integer pageNumber, Integer pageSize, ConFilterRequest filter);

	/**
	 * 筛选联系列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Con> findCons(ConFilterRequest filter);

	/**
	 * 使用唯一标识查询联系对象
	 * 
	 * @param id
	 * @return
	 */
	Con findCon(Integer id);

	/**
	 * 新建联系
	 * 
	 * @param con
	 * @return
	 */
	Con createCon(Con con);

	/**
	 * 修改联系
	 * 
	 * @param con
	 * @return
	 */
	Con updateCon(Con con);

	/**
	 * 删除联系
	 * 
	 * @param id
	 */
	void removeCon(Integer id);

}
