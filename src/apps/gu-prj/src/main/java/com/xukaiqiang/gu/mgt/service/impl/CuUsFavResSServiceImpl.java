package com.xukaiqiang.gu.mgt.service.impl;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsFavResSService;
import com.xukaiqiang.gu.orm.entity.CuUsFavResS;
import com.xukaiqiang.gu.orm.repository.CuUsFavResSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsFavResSRepository.Executor;
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
public class CuUsFavResSServiceImpl implements CuUsFavResSService {
	private static final Logger LOG = LoggerFactory.getLogger(CuUsFavResSServiceImpl.class);

	@Autowired
	private CuUsFavResSRepository cuusfavressRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<CuUsFavResS> findCuUsFavResSPage(Integer pageNumber, Integer pageSize, CuUsFavResSFilterRequest filter) {
		return new Executor(cuusfavressRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsFavResS> findCuUsFavResSs(CuUsFavResSFilterRequest filter) {
		return new Executor(cuusfavressRepos).findAll(filter);
	}

	@Override
	public CuUsFavResS findCuUsFavResS(Long usId, String resNo) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return null;
		}
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return null;
		}
		return new Executor(cuusfavressRepos).findOne(usId, resNo);
	}

	@Transactional
	@Override
	public CuUsFavResS createCuUsFavResS(CuUsFavResS cuusfavress) {
		//TODO 主键处理
		return cuusfavressRepos.save(cuusfavress);
	}

	@Transactional
	@Override
	public CuUsFavResS updateCuUsFavResS(CuUsFavResS cuusfavress) {
		if (cuusfavress.getCuUsFavResSId() == null) {
			LOG.warn("cuusfavress.CuUsFavResSId is null.");
			return null;
		}

		CuUsFavResS target = cuusfavressRepos.findOne(cuusfavress.getCuUsFavResSId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return cuusfavressRepos.save(cuusfavress);
	}

	@Transactional
	@Override
	public void removeCuUsFavResS(Long usId, String resNo) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return;
		}
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return;
		}

		CuUsFavResS cuusfavress = new Executor(cuusfavressRepos).findOne(usId, resNo);
		if (cuusfavress == null) {
			LOG.warn("cuusfavress is null.");
			return;
		}
		cuusfavressRepos.delete(cuusfavress);
	}

}
