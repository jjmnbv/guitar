package com.xukaiqiang.g.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.g.orm.entity.Edu;
import com.xukaiqiang.g.orm.protocol.EduFilterRequest;

public interface EduService {

	/**
	 * 分页筛选
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Edu> findEduPage(Integer pageNumber, Integer pageSize, EduFilterRequest filter);

	/**
	 * 筛选列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Edu> findEdus(EduFilterRequest filter);

	/**
	 * 使用唯一标识查询对象
	 * 
	 * @param id
	 * @return
	 */
	Edu findEdu(Integer id);

	/**
	 * 新建
	 * 
	 * @param edu
	 * @return
	 */
	Edu createEdu(Edu edu);

	/**
	 * 修改
	 * 
	 * @param edu
	 * @return
	 */
	Edu updateEdu(Edu edu);

	/**
	 * 删除
	 * 
	 * @param id
	 */
	void removeEdu(Integer id);

}
