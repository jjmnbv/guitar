package com.xukaiqiang.gb.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gb.mgt.service.WorksService;
import com.xukaiqiang.gb.orm.entity.Works;
import com.xukaiqiang.gb.orm.protocol.WorksFilterRequest;
import com.xukaiqiang.gb.orm.repository.WorksRepository;
import com.xukaiqiang.gb.orm.repository.WorksRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class WorksServiceImpl implements WorksService {
	private static final Logger LOG = LoggerFactory.getLogger(WorksServiceImpl.class);

	@Autowired
	private WorksRepository worksRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Works> findWorksPage(Integer pageNumber, Integer pageSize, WorksFilterRequest filter) {
		return new Executor(worksRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Works> findWorkss(WorksFilterRequest filter) {
		return new Executor(worksRepos).findAll(filter);
	}

	@Override
	public Works findWorks(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return worksRepos.findOne(id);
	}

	@Transactional
	@Override
	public Works createWorks(Works works) {
		//TODO 主键处理
		return worksRepos.save(works);
	}

	@Transactional
	@Override
	public Works updateWorks(Works works) {
		if (works.getId() == null) {
			LOG.warn("works.id is null.");
			return null;
		}

		Works target = worksRepos.findOne(works.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return worksRepos.save(works);
	}

	@Transactional
	@Override
	public void removeWorks(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Works works = worksRepos.findOne(id);
		if (works == null) {
			LOG.warn("works is null.");
			return;
		}
		worksRepos.delete(works);
	}

}
