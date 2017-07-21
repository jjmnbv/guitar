package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gu.mgt.protocol.CuUsRoSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsRoSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuUsRoS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuUsRoSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsRoSRepository.Executor;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;

@Transactional(readOnly = true)
@Service
public class CuUsRoSServiceImpl implements CuUsRoSService {
	private static final Logger LOG = LoggerFactory.getLogger(CuUsRoSServiceImpl.class);

	@Autowired
	private CuUsRoSRepository cuusrosRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsSService cuUsSService;
	// @Autowired
	// private MessagePublishService messagePublishService;
	@Autowired
	private ShiroDbRealm shiroDbRealm;

	@Override
	public Page<CuUsRoS> findCuUsRoSPage(Integer pageNumber, Integer pageSize, CuUsRoSFilterRequest filter) {
		return new Executor(cuusrosRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsRoS> findCuUsRoSs(CuUsRoSFilterRequest filter) {
		return new Executor(cuusrosRepos).findAll(filter);
	}

	@Override
	public CuUsRoS findCuUsRoS(Long usId, String roNo) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return null;
		}
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return null;
		}
		return new Executor(cuusrosRepos).findOne(usId, roNo);
	}

	@Transactional
	@Override
	public CuUsRoS createCuUsRoS(CuUsRoS cuusros) {
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuusros.setCrDt(str1);
		cuusros.setCrTm(tm);
		cuusros.setLaUpDt(str1);
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		cuusros.setLaUpUsId(id);
		// messagePublishService.publish(NoticeType.USERCACHE.name(),
		// NoticeType.USERCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		return cuusrosRepos.save(cuusros);
	}

	@Transactional
	@Override
	public CuUsRoS updateCuUsRoS(CuUsRoS cuusros) {
		if (cuusros.getCuUsRoSId() == null) {
			LOG.warn("cuusros.CuUsRoSId is null.");
			return null;
		}

		CuUsRoS target = cuusrosRepos.findOne(cuusros.getCuUsRoSId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuusros.setLaUpDt(str1);
		// messagePublishService.publish(NoticeType.USERCACHE.name(),
		// NoticeType.USERCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		return cuusrosRepos.save(cuusros);
	}

	@Transactional
	@Override
	public void removeCuUsRoS(Long usId, String roNo) {
		if (ObjectUtils.isEmpty(usId)) {
			LOG.warn("usId is empty.");
			return;
		}
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return;
		}

		CuUsRoS cuusros = new Executor(cuusrosRepos).findOne(usId, roNo);
		if (cuusros == null) {
			LOG.warn("cuusros is null.");
			return;
		}
		cuusrosRepos.delete(cuusros);
		// messagePublishService.publish(NoticeType.USERCACHE.name(),
		// NoticeType.USERCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	@Override
	public void deleteInBatch(List<CuUsRoS> curos) {
		cuusrosRepos.deleteInBatch(curos);
		// messagePublishService.publish(NoticeType.USERCACHE.name(),
		// NoticeType.USERCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
	}

	@Override
	public void removeCuUsRoSByUsId(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("usId is empty.");
			return;
		}
		List<CuUsRoS> rosList = cuusrosRepos.findByCuUsRoSIdUsId(id);
		if (CollectionUtils.isEmpty(rosList)) {
			for (CuUsRoS cuUsRoS : rosList) {
				cuusrosRepos.delete(cuUsRoS);
			}
		}
		// messagePublishService.publish(NoticeType.USERCACHE.name(),
		// NoticeType.USERCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
	}

}
