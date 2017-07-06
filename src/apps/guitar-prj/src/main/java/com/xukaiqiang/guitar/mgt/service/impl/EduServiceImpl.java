package com.xukaiqiang.guitar.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.guitar.mgt.service.EduService;
import com.xukaiqiang.guitar.orm.entity.Edu;
import com.xukaiqiang.guitar.orm.protocol.EduFilterRequest;
import com.xukaiqiang.guitar.orm.repository.EduRepository;
import com.xukaiqiang.guitar.orm.repository.EduRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class EduServiceImpl implements EduService {
	private static final Logger LOG = LoggerFactory.getLogger(EduServiceImpl.class);

	@Autowired
	private EduRepository eduRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Edu> findEduPage(Integer pageNumber, Integer pageSize, EduFilterRequest filter) {
		return new Executor(eduRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Edu> findEdus(EduFilterRequest filter) {
		return new Executor(eduRepos).findAll(filter);
	}

	@Override
	public Edu findEdu(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return eduRepos.findOne(id);
	}

	@Transactional
	@Override
	public Edu createEdu(Edu edu) {
		//TODO 主键处理
		return eduRepos.save(edu);
	}

	@Transactional
	@Override
	public Edu updateEdu(Edu edu) {
		if (edu.getId() == null) {
			LOG.warn("edu.id is null.");
			return null;
		}

		Edu target = eduRepos.findOne(edu.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return eduRepos.save(edu);
	}

	@Transactional
	@Override
	public void removeEdu(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Edu edu = eduRepos.findOne(id);
		if (edu == null) {
			LOG.warn("edu is null.");
			return;
		}
		eduRepos.delete(edu);
	}

}