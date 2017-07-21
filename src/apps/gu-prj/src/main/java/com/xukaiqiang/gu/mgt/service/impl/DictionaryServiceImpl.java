package com.xukaiqiang.gu.mgt.service.impl;

import java.util.Date;
import java.util.List;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.DictTree;
import com.xukaiqiang.gu.mgt.protocol.DictionaryFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.Status;
import com.xukaiqiang.gu.mgt.service.DictionaryService;
import com.xukaiqiang.gu.orm.entity.Dictionary;
import com.xukaiqiang.gu.orm.entity.Dictionary_;
import com.xukaiqiang.gu.orm.repository.DictionaryRepository;
import com.xukaiqiang.gu.orm.repository.DictionaryRepository.Executor;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.CopierUtils;

import org.apache.commons.lang3.time.DateFormatUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

@Transactional(readOnly = true)
@Component
public class DictionaryServiceImpl implements DictionaryService {
	private static final Logger LOG = LoggerFactory.getLogger(DictionaryServiceImpl.class);

	private static final String CACHE_FIND_DICTTREE = "CU_FIND_DICTTREE";

	@Autowired
	private DictionaryRepository dictionaryRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private BeanFactory factory;

	@Override
	public Page<Dictionary> findDictionarys(Integer pageNumber, Integer pageSize, DictionaryFilterRequest filter) {
		Sort sort = new Sort(new Order(Sort.Direction.DESC, Dictionary_.dispOrder.getName()));
		return new Executor(dictionaryRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, sort));
	}

	@Override
	public List<Dictionary> findDcitionarys(DictionaryFilterRequest filter) {
		return new Executor(dictionaryRepos).findAll(filter);
	}

	@Override
	public Dictionary findDictionary(Long id, String code) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		if (ObjectUtils.isEmpty(code)) {
			LOG.warn("code is empty.");
			return null;
		}
		return new Executor(dictionaryRepos).findOne(id, code);
	}

	@Transactional
	@Override
	public Dictionary createDictionary(Dictionary dictionary) {
		if (dictionary.getDictionaryId() == null) {
			LOG.warn("dictionary.dictionaryId is null.");
			return null;
		}
		dictionary.setCreateDate(DateFormatUtils.format(new Date(), CuVars.FORM_FMT_DATE));
		dictionary.setLastUpdate(DateFormatUtils.format(new Date(), CuVars.FORM_FMT_DATE));
		return dictionaryRepos.save(dictionary);
	}

	@Transactional
	@Override
	public Dictionary updateDictionary(Dictionary dictionary) {
		if (dictionary.getDictionaryId() == null) {
			LOG.warn("dictionary.dictionaryId is null.");
			return null;
		}

		Dictionary target = dictionaryRepos.findOne(dictionary.getDictionaryId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		dictionary.setLastUpdate(DateFormatUtils.format(new Date(), CuVars.FORM_FMT_DATE));
		getSelf().clearDictTree();
		return dictionaryRepos.save(dictionary);
	}

	@Cacheable(value = CACHE_FIND_DICTTREE, key = "#id")
	@Override
	public DictTree findDictTree(Long id) {
		DictTree dictTree = new DictTree();
		dictTree.setId(id);
		List<Dictionary> dictionarys = findDictionaryOfJH(id);
		for (Dictionary d : dictionarys) {
			DictTree.Dict dict = new DictTree.Dict();
			buildDicts(dict, d);
			dictTree.getDicts().add(dict);
		}
		return dictTree;
	}

	@CacheEvict(value = CACHE_FIND_DICTTREE, allEntries = true)
	@Override
	public void clearDictTree() {
	}

	private void buildDicts(DictTree.Dict dict, Dictionary d) {
		CopierUtils.copy(d, dict);
		if (!StringUtils.isEmpty(d.getSubId())) {
			List<Dictionary> children = findDictionaryOfJH(Long.parseLong(d
					.getSubId()));
			for (Dictionary c : children) {
				DictTree.Dict child = new DictTree.Dict();
				buildDicts(child, c);
				dict.getChildren().add(child);
			}
		}
	}

	private List<Dictionary> findDictionaryOfJH(Long id) {
		DictionaryFilterRequest filter = new DictionaryFilterRequest();
		filter.setId(id);
		filter.setStatus(Status.JH);
		return findDcitionarys(filter);
	}

	private DictionaryService getSelf() {
		return factory.getBean(DictionaryService.class);
	}

}
