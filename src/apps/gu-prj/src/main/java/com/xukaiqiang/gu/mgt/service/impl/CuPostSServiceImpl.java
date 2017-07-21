package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsPostSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuPostSService;
import com.xukaiqiang.gu.mgt.service.CuUsPostSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuPostS;
import com.xukaiqiang.gu.orm.entity.CuUsPostS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuPostSRepository;
import com.xukaiqiang.gu.orm.repository.CuPostSRepository.Executor;
import com.xukaiqiang.gu.orm.util.SateEnum;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.ParameterException;

import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuPostSServiceImpl implements CuPostSService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuPostSServiceImpl.class);

	@Autowired
	private CuPostSRepository cupostsRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsPostSService cuUsPostSService;
	@Autowired
	private CuUsSService cuUsSService;

	@Override
	public Page<CuPostS> findCuPostSPage(Integer pageNumber, Integer pageSize,
			CuPostSFilterRequest filter) {
		return new Executor(cupostsRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuPostS> findCuPostSs(CuPostSFilterRequest filter) {
		return new Executor(cupostsRepos).findAll(filter);
	}

	@Override
	public CuPostS findCuPostS(String postNo) {
		if (ObjectUtils.isEmpty(postNo)) {
			LOG.warn("postNo is empty.");
			return null;
		}
		return cupostsRepos.findOne(postNo);
	}

	@Transactional
	@Override
	public CuPostS createCuPostS(CuPostS cuposts) {
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuposts.setCrDt(str1);
		cuposts.setCrTm(tm);
		cuposts.setLaUpDt(str1);
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		cuposts.setLaUpUsId(id);
		cuposts.setSt(SateEnum.CS.name());
		CuPostS postS = nextId();
		cuposts.setPostNo(postS.getPostNo());
		return cupostsRepos.save(cuposts);
	}

	@Transactional
	@Override
	public CuPostS updateCuPostS(CuPostS cuposts) {
		if (cuposts.getPostNo() == null) {
			LOG.warn("cuposts.postNo is null.");
			return null;
		}
		CuPostS target = cupostsRepos.findOne(cuposts.getPostNo());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuposts.setLaUpDt(str1);
		return cupostsRepos.save(cuposts);
	}

	@Transactional
	@Override
	public void removeCuPostS(String postNo) {
		if (ObjectUtils.isEmpty(postNo)) {
			LOG.warn("postNo is empty.");
			return;
		}
		CuPostS cuposts = cupostsRepos.findOne(postNo);
		if (cuposts == null) {
			LOG.warn("cuposts is null.");
			return;
		}
		if (SateEnum.JH.name().equals(cuposts.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_REMOVE_CASCADE);
		}
		// 查询当前岗位下是否有员工
		CuUsPostSFilterRequest filter = new CuUsPostSFilterRequest();
		filter.setPostNo(postNo);
		List<CuUsPostS> ch = cuUsPostSService.findCuUsPostSs(filter);
		if (CollectionUtils.isEmpty(ch)) {
			cupostsRepos.delete(cuposts);
		} else
			throw new ParameterException(
					CuVars.CODE_ERROR_CUPOSTS_REMOVE_CASCADE);

	}

	@Transactional
	@Override
	public void updateJH(String postNo) {
		if (ObjectUtils.isEmpty(postNo)) {
			LOG.warn("postNo is empty.");
			return;
		}
		CuPostS cuPostS = cupostsRepos.findOne(postNo);
		if (cuPostS == null) {
			LOG.warn("target is null");
			return;
		}
		if (SateEnum.JH.name().equals(cuPostS.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_JH);
		}
		cuPostS.setSt(SateEnum.JH.name());
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuPostS.setLaUpDt(str1);
		cupostsRepos.save(cuPostS);

	}

	@Transactional
	@Override
	public void updatesx(String postNo) {
		if (ObjectUtils.isEmpty(postNo)) {
			LOG.warn("postNo is empty.");
			return;
		}
		CuPostS cuPostS = cupostsRepos.findOne(postNo);
		if (cuPostS == null) {
			LOG.warn("target is null");
			return;
		}
		if (SateEnum.SX.name().equals(cuPostS.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_SX);
		}
		cuPostS.setSt(SateEnum.SX.name());
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuPostS.setLaUpDt(str1);
		cupostsRepos.save(cuPostS);
	}

	@Override
	public CuPostS findNaByNo(String postNo) {
		if (ObjectUtils.isEmpty(postNo)) {
			LOG.warn("postNo is empty.");
			return null;
		}
		CuPostS cuPostS = cupostsRepos.findByPostNo(postNo);
		return cuPostS;
	}

	@Transactional
	@Override
	public boolean exists(CuPostSFilterRequest cuPost) {
		if (cuPost == null) {
			LOG.warn("role is null.");
			return false;
		}

		CuPostS target = new Executor(cupostsRepos).findOne(cuPost);
		if (target == null) {
			LOG.debug("target is null.");
			return false;
		}

		return !target.getPostNo().equals(cuPost.getPostNo());
	}

	@Transactional
	@Override
	public boolean postNaExist(CuPostS cupostss) {
		String postNa = cupostss.getPostNa();
		String postNo = cupostss.getPostNo();

		// 按名字查找是否存在
		CuPostS findBypostNa = cupostsRepos.findBypostNa(postNa);
		// 通过判断是否传了ID判断是否新增还是修改的唯一性名称验证
		// ID等于null为新增操作
		if (postNo.equals("")) {
			if (findBypostNa == null) {
				LOG.debug("CuPostS is null.");
				return true;
			}
			// ID不等于null为修改操作
		} else {
			// 验证当前岗位名的初始名称
			String postNa2 = cupostsRepos.findOne(postNo).getPostNa();
			if (findBypostNa == null) {
				LOG.debug("CuPostS is null.");
				return true;
			} else {
				if (postNa.equals(postNa2)) {
					return true;
				}
			}
		}
		return false;
	}

	@Transactional
	@Override
	public boolean postNoExist(CuPostS cupostss) {
		String postNo = cupostss.getPostNo();
		CuPostS cuposts = cupostsRepos.findByPostNo(postNo);
		if (cuposts == null) {
			LOG.warn("cuposts is null.");
			return true;
		}
		return false;
	}

	@Override
	public List<CuPostS> findCuPostS() {
		CuPostSFilterRequest filter = new CuPostSFilterRequest();
		filter.setSt(SateEnum.JH.name());
		return new Executor(cupostsRepos).findAll(filter);

	}

	@Override
	public synchronized CuPostS nextId() {
		CuPostS cuPostS = new CuPostS();
		CuPostS id = cupostsRepos.findTop1ByOrderByPostNoDesc();
		if (id == null) {
			cuPostS.setPostNo(YnState.CODE_FIRST_NUMBER);
			return cuPostS;
		}
		String PostNo = id.getPostNo();
		long parseLong = Long.parseLong(PostNo) + 1;
		String nextId = YnState.CODE_CONTINE_NUMBER + parseLong;
		String nextID = nextId.substring(nextId.length() - 5, nextId.length());
		cuPostS.setPostNo(nextID);
		return cuPostS;
	}

}
