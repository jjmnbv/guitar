package com.xukaiqiang.gb.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gb.mgt.service.EducationService;
import com.xukaiqiang.gb.orm.entity.Education;
import com.xukaiqiang.gb.orm.protocol.EducationFilterRequest;
import com.xukaiqiang.gb.orm.repository.EducationRepository;
import com.xukaiqiang.gb.orm.repository.EducationRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class EducationServiceImpl implements EducationService {
	private static final Logger LOG = LoggerFactory.getLogger(EducationServiceImpl.class);

	@Autowired
	private EducationRepository educationRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Education> findEducationPage(Integer pageNumber, Integer pageSize, EducationFilterRequest filter) {
		return new Executor(educationRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Education> findEducations(EducationFilterRequest filter) {
		return new Executor(educationRepos).findAll(filter);
	}

	@Override
	public Education findEducation(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return educationRepos.findOne(id);
	}

	@Transactional
	@Override
	public Education createEducation(Education education) {
		//TODO 主键处理
		return educationRepos.save(education);
	}

	@Transactional
	@Override
	public Education updateEducation(Education education) {
		if (education.getId() == null) {
			LOG.warn("education.id is null.");
			return null;
		}

		Education target = educationRepos.findOne(education.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return educationRepos.save(education);
	}

	@Transactional
	@Override
	public void removeEducation(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Education education = educationRepos.findOne(id);
		if (education == null) {
			LOG.warn("education is null.");
			return;
		}
		educationRepos.delete(education);
	}

}
