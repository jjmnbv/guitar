package com.xukaiqiang.g.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.g.mgt.service.JobService;
import com.xukaiqiang.g.orm.entity.Job;
import com.xukaiqiang.g.orm.protocol.JobFilterRequest;
import com.xukaiqiang.g.orm.repository.JobRepository;
import com.xukaiqiang.g.orm.repository.JobRepository.Executor;
import net.zkbc.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class JobServiceImpl implements JobService {
	private static final Logger LOG = LoggerFactory.getLogger(JobServiceImpl.class);

	@Autowired
	private JobRepository jobRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Job> findJobPage(Integer pageNumber, Integer pageSize, JobFilterRequest filter) {
		return new Executor(jobRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Job> findJobs(JobFilterRequest filter) {
		return new Executor(jobRepos).findAll(filter);
	}

	@Override
	public Job findJob(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return jobRepos.findOne(id);
	}

	@Transactional
	@Override
	public Job createJob(Job job) {
		//TODO 主键处理
		return jobRepos.save(job);
	}

	@Transactional
	@Override
	public Job updateJob(Job job) {
		if (job.getId() == null) {
			LOG.warn("job.id is null.");
			return null;
		}

		Job target = jobRepos.findOne(job.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return jobRepos.save(job);
	}

	@Transactional
	@Override
	public void removeJob(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Job job = jobRepos.findOne(id);
		if (job == null) {
			LOG.warn("job is null.");
			return;
		}
		jobRepos.delete(job);
	}

}
