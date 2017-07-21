package com.xukaiqiang.gb.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gb.orm.entity.Education;
import com.xukaiqiang.gb.orm.protocol.EducationFilterRequest;

public interface EducationService {

	/**
	 * 分页筛选教育
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Education> findEducationPage(Integer pageNumber, Integer pageSize, EducationFilterRequest filter);

	/**
	 * 筛选教育列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Education> findEducations(EducationFilterRequest filter);

	/**
	 * 使用唯一标识查询教育对象
	 * 
	 * @param id
	 * @return
	 */
	Education findEducation(Integer id);

	/**
	 * 新建教育
	 * 
	 * @param education
	 * @return
	 */
	Education createEducation(Education education);

	/**
	 * 修改教育
	 * 
	 * @param education
	 * @return
	 */
	Education updateEducation(Education education);

	/**
	 * 删除教育
	 * 
	 * @param id
	 */
	void removeEducation(Integer id);

}
