package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.DictTree;
import com.xukaiqiang.gu.mgt.protocol.DictionaryFilterRequest;
import com.xukaiqiang.gu.orm.entity.Dictionary;

import org.springframework.data.domain.Page;

public interface DictionaryService {

	/**
	 * 分页筛选字典名称
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Dictionary> findDictionarys(Integer pageNumber, Integer pageSize,
			DictionaryFilterRequest filter);

	/**
	 * 筛选字典名称
	 * 
	 * @param filter
	 * @return
	 */
	List<Dictionary> findDcitionarys(DictionaryFilterRequest filter);

	/**
	 * 使用唯一标识查询字典名称对象
	 * 
	 * @param id
	 * @param code
	 * @return
	 */
	Dictionary findDictionary(Long id, String code);

	/**
	 * 新建字典名称
	 * 
	 * @param dictionary
	 * @return
	 */
	Dictionary createDictionary(Dictionary dictionary);

	/**
	 * 修改字典名称
	 * 
	 * @param dictionary
	 * @return
	 */
	Dictionary updateDictionary(Dictionary dictionary);

	/**
	 * 根据id查询字典树（缓存）
	 * 
	 * @param id
	 * @return
	 */
	DictTree findDictTree(Long id);

	/**
	 * 清除字典树（缓存）
	 */
	void clearDictTree();

}
