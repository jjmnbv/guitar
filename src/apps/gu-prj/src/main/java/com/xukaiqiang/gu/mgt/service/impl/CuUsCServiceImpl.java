package com.xukaiqiang.gu.mgt.service.impl;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsCFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsCService;
import com.xukaiqiang.gu.orm.entity.CuUsC;
import com.xukaiqiang.gu.orm.repository.CuUsCRepository;
import com.xukaiqiang.gu.orm.repository.CuUsCRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuUsCServiceImpl implements CuUsCService {
	private static final Logger LOG = LoggerFactory.getLogger(CuUsCServiceImpl.class);

	@Autowired
	private CuUsCRepository cuuscRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<CuUsC> findCuUsCPage(Integer pageNumber, Integer pageSize, CuUsCFilterRequest filter) {
		return new Executor(cuuscRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsC> findCuUsCs(CuUsCFilterRequest filter) {
		return new Executor(cuuscRepos).findAll(filter);
	}

	@Override
	public CuUsC findCuUsC(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return cuuscRepos.findOne(id);
	}

	@Transactional
	@Override
	public CuUsC createCuUsC(CuUsC cuusc) {
		if (cuusc.getId() != null) {
			LOG.warn("cuusc.id={}", cuusc.getId());
			cuusc.setId(null);
		}
		return cuuscRepos.save(cuusc);
	}

	@Transactional
	@Override
	public CuUsC updateCuUsC(CuUsC cuusc) {
		if (cuusc.getId() == null) {
			LOG.warn("cuusc.id is null.");
			return null;
		}

		CuUsC target = cuuscRepos.findOne(cuusc.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return cuuscRepos.save(cuusc);
	}

	@Transactional
	@Override
	public void removeCuUsC(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		CuUsC cuusc = cuuscRepos.findOne(id);
		if (cuusc == null) {
			LOG.warn("cuusc is null.");
			return;
		}
		cuuscRepos.delete(cuusc);
	}

}
