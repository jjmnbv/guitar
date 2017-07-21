package com.xukaiqiang.gu.mgt.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;

import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsLoginLService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL_;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuUsLoginLRepository;
import com.xukaiqiang.gu.orm.repository.CuUsLoginLRepository.Executor;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository;
import com.xukaiqiang.shared.service.PageService;

import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuUsLoginLServiceImpl implements CuUsLoginLService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuUsLoginLServiceImpl.class);

	@Autowired
	private CuUsLoginLRepository cuusloginlRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsSService cuUsSService;
	@Autowired
	private CuUsSRepository cuussRepos;
	@Override
	public Page<CuUsLoginL> findCuUsLoginLPage(Integer pageNumber,
			Integer pageSize, CuUsLoginLFilterRequest filter) {
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		boolean flag = true;
		if(id != null){
			CuUsS cuUsS = cuussRepos.findOne(id);
			if(cuUsS != null){
				Set<String> roNas = cuUsS.getRoNas();
				if(! CollectionUtils.isEmpty(roNas)){
					for (String roNa : roNas) {
						if("ADMIN".equals(roNa)){
							flag=false;
						}
					}
				}
			}
			if(flag){
				if(filter == null){
					filter=new CuUsLoginLFilterRequest();
				}
				filter.setLoginNa(cuUsS.getLoginNa());
			}
		}
		Sort sort = new Sort(
				new Order(Direction.DESC, CuUsLoginL_.crDt.getName()),
				new Order(Direction.DESC, CuUsLoginL_.crTm.getName()));
		return new Executor(cuusloginlRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, sort));
	}

	@Override
	public List<CuUsLoginL> findCuUsLoginLs(CuUsLoginLFilterRequest filter) {
		return new Executor(cuusloginlRepos).findAll(filter);
	}

	@Override
	public CuUsLoginL findCuUsLoginL(Long loginTrId) {
		if (ObjectUtils.isEmpty(loginTrId)) {
			LOG.warn("loginTrId is empty.");
			return null;
		}
		return cuusloginlRepos.findOne(loginTrId);
	}

	@Transactional
	@Override
	public CuUsLoginL createCuUsLoginL(CuUsLoginL cuusloginl) {
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuusloginl.setCrDt(str1);
		cuusloginl.setCrTm(tm);
		return cuusloginlRepos.save(cuusloginl);
	}

	@Transactional
	@Override
	public CuUsLoginL updateCuUsLoginL(CuUsLoginL cuusloginl) {
		if (cuusloginl.getLoginTrId() == null) {
			LOG.warn("cuusloginl.loginTrId is null.");
			return null;
		}

		CuUsLoginL target = cuusloginlRepos.findOne(cuusloginl.getLoginTrId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuusloginl.setLoginOutDt(str1);
		cuusloginl.setLoginOutTm(tm);
		return cuusloginlRepos.save(cuusloginl);
	}

	@Transactional
	@Override
	public void removeCuUsLoginL(Long loginTrId) {
		if (ObjectUtils.isEmpty(loginTrId)) {
			LOG.warn("loginTrId is empty.");
			return;
		}

		CuUsLoginL cuusloginl = cuusloginlRepos.findOne(loginTrId);
		if (cuusloginl == null) {
			LOG.warn("cuusloginl is null.");
			return;
		}
		cuusloginlRepos.delete(cuusloginl);
	}

	@Override
	public String findPrevLoginTm(Long id) throws ParseException {
		CuUsLoginLFilterRequest filter = new CuUsLoginLFilterRequest();
		filter.setLoginId(id);
		List<CuUsLoginL> findAll = new Executor(cuusloginlRepos).findAll(filter);
		if (!CollectionUtils.isEmpty(findAll)) {
			CuUsLoginL cuUsLoginL = findAll.get(findAll.size()-1); //FIXME
			String tm = cuUsLoginL.getCrDt() + " " + cuUsLoginL.getCrTm();
			SimpleDateFormat dateformat2 = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
			SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			Date date = sdf1.parse(tm);
			String format = dateformat2.format(date);
			return format;
		}
		return null;
	}

}
