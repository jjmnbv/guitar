package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.xukaiqiang.gu.mgt.protocol.CuUsOpLFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsOpLService;
import com.xukaiqiang.gu.orm.entity.CuResActS;
import com.xukaiqiang.gu.orm.entity.CuUsOpL;
import com.xukaiqiang.gu.orm.repository.CuResActSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsOpLRepository;
import com.xukaiqiang.gu.orm.repository.CuUsOpLRepository.Executor;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.session.InvalidSessionException;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.subject.support.WebDelegatingSubject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuUsOpLServiceImpl implements CuUsOpLService {
	private static final Logger LOG = LoggerFactory.getLogger(CuUsOpLServiceImpl.class);

	@Autowired
	private CuUsOpLRepository cuusoplRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuResActSRepository curesactsRepos;
	@Override
	public Page<CuUsOpL> findCuUsOpLPage(Integer pageNumber, Integer pageSize, CuUsOpLFilterRequest filter) {
		return new Executor(cuusoplRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsOpL> findCuUsOpLs(CuUsOpLFilterRequest filter) {
		return new Executor(cuusoplRepos).findAll(filter);
	}

	@Override
	public CuUsOpL findCuUsOpL(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return cuusoplRepos.findOne(id);
	}
	@Transactional
	@Async
	@Override
	public CuUsOpL createCuUsOpL(CuUsOpL cuusopl) {
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String crdt = sdf1.format(rightNow.getTime());
		String crTm = sdf2.format(rightNow.getTime());
		Long loginTrId=getLoginTrId();
		String url=getUrl();
		if(loginTrId==null || url==null){
			return null;
		}
		CuResActS curesacts=curesactsRepos.findByUrl(url);
		cuusopl.setLoginTrId(loginTrId);
		cuusopl.setCrDt(crdt);
		cuusopl.setCrTm(crTm);
		cuusopl.setResNo(curesacts.getResNo());
		return cuusoplRepos.save(cuusopl);
	}

	private String getUrl() {
		Subject subject = getSubject();
		if(subject==null || !subject.isAuthenticated()){
			return null;
		}
		WebDelegatingSubject webSubject = (WebDelegatingSubject)subject;
		HttpServletRequest reqeust =(HttpServletRequest)webSubject.getServletRequest();
		return reqeust.getServletPath().toString();
	}

	private Long getLoginTrId() {
		try {
			Subject subject = getSubject();
			if(subject==null || !subject.isAuthenticated()){
				return null;
			}
			Session session = subject.getSession(false);
			if(session!=null){}
			Object trId = session.getAttribute(YnState.CODE_CUUSLOGIN_TRID);
			if(trId==null){
				return null;
			}
			 return (Long)trId;
		} catch (InvalidSessionException e) {
			LOG.error(e.getMessage(),e);
		}
		return null;
	}


	private Subject getSubject() {
		try {
			return  SecurityUtils.getSubject();
		} catch (Exception e) {
			return null;
		}
	}

	@Transactional
	@Override
	public CuUsOpL updateCuUsOpL(CuUsOpL cuusopl) {
		if (cuusopl.getId() == null) {
			LOG.warn("cuusopl.id is null.");
			return null;
		}

		CuUsOpL target = cuusoplRepos.findOne(cuusopl.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return cuusoplRepos.save(cuusopl);
	}

	@Transactional
	@Override
	public void removeCuUsOpL(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		CuUsOpL cuusopl = cuusoplRepos.findOne(id);
		if (cuusopl == null) {
			LOG.warn("cuusopl is null.");
			return;
		}
		cuusoplRepos.delete(cuusopl);
	}

}
