package com.xukaiqiang.gb.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gb.mgt.service.StoreService;
import com.xukaiqiang.gb.orm.entity.Store;
import com.xukaiqiang.gb.orm.protocol.StoreFilterRequest;
import com.xukaiqiang.gb.orm.repository.StoreRepository;
import com.xukaiqiang.gb.orm.repository.StoreRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class StoreServiceImpl implements StoreService {
	private static final Logger LOG = LoggerFactory.getLogger(StoreServiceImpl.class);

	@Autowired
	private StoreRepository storeRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Store> findStorePage(Integer pageNumber, Integer pageSize, StoreFilterRequest filter) {
		return new Executor(storeRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Store> findStores(StoreFilterRequest filter) {
		return new Executor(storeRepos).findAll(filter);
	}

	@Override
	public Store findStore(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return storeRepos.findOne(id);
	}

	@Transactional
	@Override
	public Store createStore(Store store) {
		//TODO 主键处理
		return storeRepos.save(store);
	}

	@Transactional
	@Override
	public Store updateStore(Store store) {
		if (store.getId() == null) {
			LOG.warn("store.id is null.");
			return null;
		}

		Store target = storeRepos.findOne(store.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return storeRepos.save(store);
	}

	@Transactional
	@Override
	public void removeStore(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Store store = storeRepos.findOne(id);
		if (store == null) {
			LOG.warn("store is null.");
			return;
		}
		storeRepos.delete(store);
	}

}
