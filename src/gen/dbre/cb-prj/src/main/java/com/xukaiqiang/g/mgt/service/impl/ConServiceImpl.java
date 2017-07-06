package com.xukaiqiang.g.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.g.mgt.service.ConService;
import com.xukaiqiang.g.orm.entity.Con;
import com.xukaiqiang.g.orm.protocol.ConFilterRequest;
import com.xukaiqiang.g.orm.repository.ConRepository;
import com.xukaiqiang.g.orm.repository.ConRepository.Executor;
import net.zkbc.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class ConServiceImpl implements ConService {
	private static final Logger LOG = LoggerFactory.getLogger(ConServiceImpl.class);

	@Autowired
	private ConRepository conRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Con> findConPage(Integer pageNumber, Integer pageSize, ConFilterRequest filter) {
		return new Executor(conRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Con> findCons(ConFilterRequest filter) {
		return new Executor(conRepos).findAll(filter);
	}

	@Override
	public Con findCon(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return conRepos.findOne(id);
	}

	@Transactional
	@Override
	public Con createCon(Con con) {
		//TODO 主键处理
		return conRepos.save(con);
	}

	@Transactional
	@Override
	public Con updateCon(Con con) {
		if (con.getId() == null) {
			LOG.warn("con.id is null.");
			return null;
		}

		Con target = conRepos.findOne(con.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return conRepos.save(con);
	}

	@Transactional
	@Override
	public void removeCon(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Con con = conRepos.findOne(id);
		if (con == null) {
			LOG.warn("con is null.");
			return;
		}
		conRepos.delete(con);
	}

}