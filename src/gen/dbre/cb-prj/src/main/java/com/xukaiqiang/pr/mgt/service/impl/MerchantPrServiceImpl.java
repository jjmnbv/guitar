package com.xukaiqiang.pr.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.pr.mgt.service.MerchantPrService;
import com.xukaiqiang.pr.orm.entity.MerchantPr;
import com.xukaiqiang.pr.orm.protocol.MerchantPrFilterRequest;
import com.xukaiqiang.pr.orm.repository.MerchantPrRepository;
import com.xukaiqiang.pr.orm.repository.MerchantPrRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class MerchantPrServiceImpl implements MerchantPrService {
	private static final Logger LOG = LoggerFactory.getLogger(MerchantPrServiceImpl.class);

	@Autowired
	private MerchantPrRepository merchantprRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<MerchantPr> findMerchantPrPage(Integer pageNumber, Integer pageSize, MerchantPrFilterRequest filter) {
		return new Executor(merchantprRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<MerchantPr> findMerchantPrs(MerchantPrFilterRequest filter) {
		return new Executor(merchantprRepos).findAll(filter);
	}

	@Override
	public MerchantPr findMerchantPr(Long coId) {
		if (ObjectUtils.isEmpty(coId)) {
			LOG.warn("coId is empty.");
			return null;
		}
		return merchantprRepos.findOne(coId);
	}

	@Transactional
	@Override
	public MerchantPr createMerchantPr(MerchantPr merchantpr) {
		//TODO 主键处理
		return merchantprRepos.save(merchantpr);
	}

	@Transactional
	@Override
	public MerchantPr updateMerchantPr(MerchantPr merchantpr) {
		if (merchantpr.getCoId() == null) {
			LOG.warn("merchantpr.coId is null.");
			return null;
		}

		MerchantPr target = merchantprRepos.findOne(merchantpr.getCoId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return merchantprRepos.save(merchantpr);
	}

	@Transactional
	@Override
	public void removeMerchantPr(Long coId) {
		if (ObjectUtils.isEmpty(coId)) {
			LOG.warn("coId is empty.");
			return;
		}

		MerchantPr merchantpr = merchantprRepos.findOne(coId);
		if (merchantpr == null) {
			LOG.warn("merchantpr is null.");
			return;
		}
		merchantprRepos.delete(merchantpr);
	}

}
