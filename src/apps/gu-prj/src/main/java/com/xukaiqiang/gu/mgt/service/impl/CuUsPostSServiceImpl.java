package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsPostSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsPostSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuUsPostS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuUsPostSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsPostSRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuUsPostSServiceImpl implements CuUsPostSService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuUsPostSServiceImpl.class);

	@Autowired
	private CuUsPostSRepository cuuspostsRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsSService cuUsSService;

	@Override
	public Page<CuUsPostS> findCuUsPostSPage(Integer pageNumber,
			Integer pageSize, CuUsPostSFilterRequest filter) {
		return new Executor(cuuspostsRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsPostS> findCuUsPostSs(CuUsPostSFilterRequest filter) {
		return new Executor(cuuspostsRepos).findAll(filter);
	}

	@Override
	public CuUsPostS findCuUsPostS(Long usId) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return null;
		}
		return cuuspostsRepos.findOne(usId);
	}

	@Transactional
	@Override
	public CuUsPostS createCuUsPostS(CuUsPostS cuusposts) {
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuusposts.setCrDt(str1);
		cuusposts.setCrTm(tm);
		cuusposts.setLaUpDt(str1);
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		cuusposts.setLaUpUsId(id);
		return cuuspostsRepos.save(cuusposts);
	}

	@Transactional
	@Override
	public CuUsPostS updateCuUsPostS(CuUsPostS cuusposts) {
		if (cuusposts.getId().getUsId() == null) {
			LOG.warn("cuusposts.usId is null.");
			return null;
		}

		CuUsPostS target = cuuspostsRepos.findById(cuusposts.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuusposts.setLaUpDt(str1);
		return cuuspostsRepos.save(cuusposts);
	}

	@Transactional
	@Override
	public void removeCuUsPostS(Long usId) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return;
		}
		List<CuUsPostS> cupList = cuuspostsRepos.findByIdUsId(usId);
		if (cupList.size() == 0) {
			LOG.warn("cuusposts is null.");
			return;
		}
		for (CuUsPostS cuusposts : cupList) {
			cuuspostsRepos.delete(cuusposts);
		}
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	@Override
	public void deleteInBatch(List<CuUsPostS> cups) {
		cuuspostsRepos.deleteInBatch(cups);
	}

}
