package com.xukaiqiang.gu.mgt.service.impl;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsChPwdLService;
import com.xukaiqiang.gu.orm.entity.CuUsChPwdL;
import com.xukaiqiang.gu.orm.repository.CuUsChPwdLRepository;
import com.xukaiqiang.gu.orm.repository.CuUsChPwdLRepository.Executor;
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
public class CuUsChPwdLServiceImpl implements CuUsChPwdLService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuUsChPwdLServiceImpl.class);

	@Autowired
	private CuUsChPwdLRepository cuuschpwdlRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<CuUsChPwdL> findCuUsChPwdLPage(Integer pageNumber,
			Integer pageSize, CuUsChPwdLFilterRequest filter) {
		return new Executor(cuuschpwdlRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsChPwdL> findCuUsChPwdLs(CuUsChPwdLFilterRequest filter) {
		return new Executor(cuuschpwdlRepos).findAll(filter);
	}

	@Override
	public CuUsChPwdL findCuUsChPwdL(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return cuuschpwdlRepos.findOne(id);
	}

	@Transactional
	@Override
	public CuUsChPwdL createCuUsChPwdL(CuUsChPwdL cuuschpwdl) {
		if (cuuschpwdl.getId() != null) {
			LOG.warn("cuuschpwdl.id={}", cuuschpwdl.getId());
			cuuschpwdl.setId(null);
		}
		return cuuschpwdlRepos.save(cuuschpwdl);
	}

	@Transactional
	@Override
	public CuUsChPwdL updateCuUsChPwdL(CuUsChPwdL cuuschpwdl) {
		if (cuuschpwdl.getId() == null) {
			LOG.warn("cuuschpwdl.id is null.");
			return null;
		}

		CuUsChPwdL target = cuuschpwdlRepos.findOne(cuuschpwdl.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return cuuschpwdlRepos.save(cuuschpwdl);
	}

	@Transactional
	@Override
	public void removeCuUsChPwdL(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		CuUsChPwdL cuuschpwdl = cuuschpwdlRepos.findOne(id);
		if (cuuschpwdl == null) {
			LOG.warn("cuuschpwdl is null.");
			return;
		}
		cuuschpwdlRepos.delete(cuuschpwdl);
	}


}
