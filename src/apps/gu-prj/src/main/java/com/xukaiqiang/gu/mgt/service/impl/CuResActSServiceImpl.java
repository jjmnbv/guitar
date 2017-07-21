package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.apache.shiro.util.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gu.mgt.protocol.CuResActSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuResActSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.mgt.service.ResourceService;
import com.xukaiqiang.gu.orm.entity.CuResActS;
import com.xukaiqiang.gu.orm.entity.id.CuResActSId;
import com.xukaiqiang.gu.orm.repository.CuResActSRepository;
import com.xukaiqiang.gu.orm.repository.CuResActSRepository.Executor;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;
import com.xukaiqiang.shiro.web.PathFilter;

@Transactional(readOnly = true)
@Service
public class CuResActSServiceImpl implements CuResActSService {
	private static final Logger LOG = LoggerFactory.getLogger(CuResActSServiceImpl.class);

	@Autowired
	private CuResActSRepository curesactsRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsSService cuUsSService;
	@Autowired
	private ShiroDbRealm shiroDbRealm;
	@Autowired
	private PathFilter pathFilter;
	@Autowired
	private ResourceService resourceService;

	// @Autowired
	// private MessagePublishService messagePublishService;
	@Override
	public Page<CuResActS> findCuResActSPage(Integer pageNumber, Integer pageSize, CuResActSFilterRequest filter) {
		return new Executor(curesactsRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuResActS> findCuResActSs(CuResActSFilterRequest filter) {
		return new Executor(curesactsRepos).findAll(filter);
	}

	@Override
	public CuResActS findCuResActS(String resNo, Short suId) {
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return null;
		}
		if (ObjectUtils.isEmpty(suId)) {
			LOG.warn("suId is empty.");
			return null;
		}
		return new Executor(curesactsRepos).findOne(resNo, suId);
	}

	@Transactional
	@Override
	public synchronized CuResActS createCuResActS(CuResActS curesacts) {
		CuResActS curesacts2 = curesactsRepos.findTop1ByOrderByCuResActSIdSuIdDesc();
		// CuResActS curesacts3=curesactsRepos.findTop1ByOrderByResActCdDesc();
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		List<CuResActS> resActS = curesactsRepos.findByCuResActSIdResNo(curesacts.getResNo());
		List<CuResActS> cuResActS4 = curesacts.getCuResActS();
		List<CuResActS> oldCuResActS = convert(resActS, cuResActS4);
		if (!CollectionUtils.isEmpty(oldCuResActS)) {
			curesactsRepos.deleteInBatch(oldCuResActS);
		}
		List<CuResActS> list = convert(cuResActS4, oldCuResActS);
		ArrayList<CuResActS> arrayList = new ArrayList<CuResActS>();
		if (!CollectionUtils.isEmpty(list)) {
			for (CuResActS cuResActS2 : list) {
				CuResActSId cuResActSId = new CuResActSId();
				cuResActSId.setResNo(curesacts.getResNo());
				cuResActSId.setSuId(cuResActS2.getSuId());
				CuResActS actS = curesactsRepos.findOne(cuResActSId);
				if (actS != null) {
					actS.setResActCa(cuResActS2.getResActCa());
					actS.setUrl(cuResActS2.getUrl());
					actS.setDefRiYn(cuResActS2.getDefRiYn());
					actS.setLaUpDt(str1);
					actS.setLaUpUsId(cuUsSService.userMessage().getId());
					arrayList.add(actS);
				}
			}
		}
		if (!CollectionUtils.isEmpty(arrayList)) {
			curesactsRepos.save(arrayList);
		}
		List<CuResActS> list2 = convert(cuResActS4, resActS);
		arrayList.clear();
		// String actCd=null;
		// if(curesacts3==null){
		// actCd=YnState.CODE_RSACTCD_NUMBER;
		// }else{
		// actCd=dealActCd(curesacts3.getResActCd());
		// }
		Short suId = dealAct(curesacts2);
		if (!CollectionUtils.isEmpty(list2)) {
			for (CuResActS cuResActS2 : list2) {
				cuResActS2.setLaUpDt(str1);
				cuResActS2.setCrDt(str1);
				cuResActS2.setLaUpUsId(cuUsSService.userMessage().getId());
				cuResActS2.setSuId(suId);
				cuResActS2.setResActCd(suId + "");
				cuResActS2.setResNo(curesacts.getResNo());
				arrayList.add(cuResActS2);
				suId = (short) (suId + 1);
				// actCd=dealActCd(actCd);
			}
			curesactsRepos.save(arrayList);
		}
		resourceService.clearCacheMenus();
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		pathFilter.reload();
		// messagePublishService.publish(NoticeType.ACCESSCACHE.name(),
		// NoticeType.ACCESSCACHE.name());
		return curesacts;
	}

	private List<CuResActS> convert(List<CuResActS> resActS, List<CuResActS> cuResActS4) {
		if (CollectionUtils.isEmpty(resActS)) {
			return null;
		}
		if (CollectionUtils.isEmpty(cuResActS4)) {
			return resActS;
		}
		ArrayList<CuResActS> list = new ArrayList<CuResActS>();
		for (CuResActS cuResActS : resActS) {
			int a = 0;
			for (CuResActS cuResActS2 : cuResActS4) {
				++a;
				if (cuResActS.getSuId() == null) {
					list.add(cuResActS);
					continue;
				}
				if (!cuResActS.getCuResActSId().getSuId().equals(cuResActS2.getSuId()) && a == cuResActS4.size()) {
					list.add(cuResActS);
				}
				if (cuResActS.getCuResActSId().getSuId().equals(cuResActS2.getSuId())) {
					break;
				}
			}
		}
		return list;
	}

	public String dealActCd(String resActCd) {
		if (resActCd == null) {
			return YnState.CODE_RSACTCD_NUMBER;
		}
		long parseLong = Long.parseLong(resActCd) + 1;
		String nextId = YnState.CODE_RSACTCD_CONNUMBER + parseLong;
		String nextID = nextId.substring(nextId.length() - 4, nextId.length());
		return nextID;
	}

	public Short dealAct(CuResActS curesacts2) {
		if (curesacts2 == null) {
			return YnState.CODE_SHID_CONNUMBER;
		}
		Short suId = curesacts2.getSuId();
		return (short) (suId + 1);
	}

	@Transactional
	@Override
	public CuResActS updateCuResActS(CuResActS curesacts) {
		if (curesacts.getCuResActSId() == null) {
			LOG.warn("curesacts.CuResActSId is null.");
			return null;
		}

		CuResActS target = curesactsRepos.findOne(curesacts.getCuResActSId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return curesactsRepos.save(curesacts);
	}

	@Transactional
	@Override
	public void removeCuResActS(String resNo, Short suId) {
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return;
		}
		if (ObjectUtils.isEmpty(suId)) {
			LOG.warn("suId is empty.");
			return;
		}

		CuResActS curesacts = new Executor(curesactsRepos).findOne(resNo, suId);
		if (curesacts == null) {
			LOG.warn("curesacts is null.");
			return;
		}
		curesactsRepos.delete(curesacts);
	}
}
