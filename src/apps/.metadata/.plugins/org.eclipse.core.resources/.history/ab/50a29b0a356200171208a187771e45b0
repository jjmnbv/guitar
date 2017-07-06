package com.xukaiqiang.g.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.g.orm.entity.Job;
import com.xukaiqiang.g.orm.protocol.JobFilterRequest;

public interface JobService {

	/**
	 * 分页筛选工作
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Job> findJobPage(Integer pageNumber, Integer pageSize, JobFilterRequest filter);

	/**
	 * 筛选工作列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Job> findJobs(JobFilterRequest filter);

	/**
	 * 使用唯一标识查询工作对象
	 * 
	 * @param id
	 * @return
	 */
	Job findJob(Integer id);

	/**
	 * 新建工作
	 * 
	 * @param job
	 * @return
	 */
	Job createJob(Job job);

	/**
	 * 修改工作
	 * 
	 * @param job
	 * @return
	 */
	Job updateJob(Job job);

	/**
	 * 删除工作
	 * 
	 * @param id
	 */
	void removeJob(Integer id);

}
