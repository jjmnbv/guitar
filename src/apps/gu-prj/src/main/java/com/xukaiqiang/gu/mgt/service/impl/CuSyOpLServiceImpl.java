package com.xukaiqiang.gu.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gu.mgt.service.CuSyOpLService;
import com.xukaiqiang.gu.orm.entity.CuSyOpL;
import com.xukaiqiang.gu.orm.protocol.CuSyOpLFilterRequest;
import com.xukaiqiang.gu.orm.repository.CuSyOpLRepository;
import com.xukaiqiang.gu.orm.repository.CuSyOpLRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class CuSyOpLServiceImpl implements CuSyOpLService {
	private static final Logger LOG = LoggerFactory.getLogger(CuSyOpLServiceImpl.class);

	@Autowired
	private CuSyOpLRepository cusyoplRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<CuSyOpL> findCuSyOpLPage(Integer pageNumber, Integer pageSize, CuSyOpLFilterRequest filter) {
		return new Executor(cusyoplRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuSyOpL> findCuSyOpLs(CuSyOpLFilterRequest filter) {
		return new Executor(cusyoplRepos).findAll(filter);
	}

	@Override
	public CuSyOpL findCuSyOpL(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return cusyoplRepos.findOne(id);
	}

	@Transactional
	@Override
	public CuSyOpL createCuSyOpL(CuSyOpL cusyopl) {
		//TODO 主键处理
		return cusyoplRepos.save(cusyopl);
	}

	@Transactional
	@Override
	public CuSyOpL updateCuSyOpL(CuSyOpL cusyopl) {
		if (cusyopl.getId() == null) {
			LOG.warn("cusyopl.id is null.");
			return null;
		}

		CuSyOpL target = cusyoplRepos.findOne(cusyopl.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return cusyoplRepos.save(cusyopl);
	}

	@Transactional
	@Override
	public void removeCuSyOpL(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		CuSyOpL cusyopl = cusyoplRepos.findOne(id);
		if (cusyopl == null) {
			LOG.warn("cusyopl is null.");
			return;
		}
		cusyoplRepos.delete(cusyopl);
	}

}
