package com.xukaiqiang.gu.mgt.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuSyCFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuSyCService;
import com.xukaiqiang.gu.orm.entity.CuSyC;
import com.xukaiqiang.gu.orm.repository.CuSyCRepository;
import com.xukaiqiang.gu.orm.repository.CuSyCRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

import org.apache.shiro.util.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuSyCServiceImpl implements CuSyCService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuSyCServiceImpl.class);

	@Autowired
	private CuSyCRepository cusycRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<CuSyC> findCuSyCPage(Integer pageNumber, Integer pageSize,
			CuSyCFilterRequest filter) {
		return new Executor(cusycRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuSyC> findCuSyCs(CuSyCFilterRequest filter) {
		return new Executor(cusycRepos).findAll(filter);
	}

	@Override
	public CuSyC findCuSyC(String syCd) {
		if (ObjectUtils.isEmpty(syCd)) {
			LOG.warn("syCd is empty.");
			return null;
		}
		return cusycRepos.findOne(syCd);
	}

	@Transactional
	@Override
	public CuSyC createCuSyC(CuSyC cusyc) {
		if (cusyc.getSyCd() != null) {
			LOG.warn("cusyc.syCd={}", cusyc.getSyCd());
			cusyc.setSyCd(null);
		}
		return cusycRepos.save(cusyc);
	}

	@Transactional
	@Override
	public CuSyC updateCuSyC(CuSyC cusyc) {
		if (cusyc.getSyCd() == null) {
			LOG.warn("cusyc.syCd is null.");
			return null;
		}

		CuSyC target = cusycRepos.findOne(cusyc.getSyCd());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return cusycRepos.save(cusyc);
	}

	@Transactional
	@Override
	public void removeCuSyC(String syCd) {
		if (ObjectUtils.isEmpty(syCd)) {
			LOG.warn("syCd is empty.");
			return;
		}

		CuSyC cusyc = cusycRepos.findOne(syCd);
		if (cusyc == null) {
			LOG.warn("cusyc is null.");
			return;
		}
		cusycRepos.delete(cusyc);
	}

	@Override
	public List<CuSyC> resSyCdNames() {
		List<CuSyC> findAll = cusycRepos.findAll();
		if (CollectionUtils.isEmpty(findAll)) {
			LOG.warn("CuSyC is null");
			return null;
		}
		List<CuSyC> resSyCdNames = new ArrayList<>();
		for (CuSyC cuSyC : findAll) {
			CuSyC cusy = new CuSyC();
			cusy.setSyCd(cuSyC.getSyCd());
			cusy.setSyNa(cuSyC.getSyNa());
			resSyCdNames.add(cusy);
		}
		return resSyCdNames;
	}

}
