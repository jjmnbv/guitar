package com.xukaiqiang.gb.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gb.orm.entity.Store;
import com.xukaiqiang.gb.orm.protocol.StoreFilterRequest;

public interface StoreService {

	/**
	 * 分页筛选门店
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Store> findStorePage(Integer pageNumber, Integer pageSize, StoreFilterRequest filter);

	/**
	 * 筛选门店列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Store> findStores(StoreFilterRequest filter);

	/**
	 * 使用唯一标识查询门店对象
	 * 
	 * @param id
	 * @return
	 */
	Store findStore(Integer id);

	/**
	 * 新建门店
	 * 
	 * @param store
	 * @return
	 */
	Store createStore(Store store);

	/**
	 * 修改门店
	 * 
	 * @param store
	 * @return
	 */
	Store updateStore(Store store);

	/**
	 * 删除门店
	 * 
	 * @param id
	 */
	void removeStore(Integer id);

}
