package com.xukaiqiang.gu.mgt.service.impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;

import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.CuUsSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsLoginSService;
import com.xukaiqiang.gu.mgt.service.CuUsPostSService;
import com.xukaiqiang.gu.mgt.service.CuUsRoSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuBrS;
import com.xukaiqiang.gu.orm.entity.CuUsHolL;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.entity.CuUsPostS;
import com.xukaiqiang.gu.orm.entity.CuUsRoS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuBrSRepository;
import com.xukaiqiang.gu.orm.repository.CuPostSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsHolLRepository;
import com.xukaiqiang.gu.orm.repository.CuUsLoginSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsPostSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository.Executor;
import com.xukaiqiang.gu.orm.util.CuUsHoLEnum;
import com.xukaiqiang.gu.orm.util.SateEnum;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.ParameterException;
import com.xukaiqiang.shiro.entity.ShiroUser;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;
import com.xukaiqiang.shiro.service.ShiroUserService;

@Transactional(readOnly = true)
@Service
public class CuUsSServiceImpl implements CuUsSService {
	private static final Logger LOG = LoggerFactory.getLogger(CuUsSServiceImpl.class);

	@Autowired
	private CuUsSRepository cuussRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsRoSService cuusross;
	@Autowired
	private CuUsPostSService cuuspostss;
	@Autowired
	private CuUsPostSRepository cpsr;
	@Autowired
	private CuPostSRepository cpr;
	@Autowired
	private CuRoSRepository crr;
	@Autowired
	private CuBrSRepository cbr;
	@Autowired
	private CuUsHolLRepository cuushol;
	@Autowired
	private ShiroUserService shiroUserService;
	@Autowired
	private CuUsLoginSService cuUsLoginSService;
	@Autowired
	private CuUsLoginSRepository cuUsLoginSrep;
	// @Autowired
	// private MessagePublishService messagePublishService;
	@Autowired
	private ShiroDbRealm shiroDbRealm;

	@Override
	public Page<CuUsS> findCuUsSPage(Integer pageNumber, Integer pageSize, CuUsSFilterRequest filter) {
		return new Executor(cuussRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public CuUsS findCuUsS(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		CuUsS CuUsS = cuussRepos.findOne(id);
		if (CuUsS == null) {
			LOG.warn("CuUsS is empty" + ":" + id);
			return null;
		}
		CuUsHolL cuUsHol = cuushol.findTop1ByUsIdOrderByTrDesc(id);
		if (cuUsHol != null) {
			try {
				String tm = cuUsHol.getHolBeDt();
				Calendar rightNow = Calendar.getInstance();
				SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
				String str1 = sdf1.format(rightNow.getTime());
				Date parse = sdf1.parse(str1);
				Date parse2 = sdf1.parse(tm);
				Date parse3 = sdf1.parse(cuUsHol.getHolEnDt());
				if (parse.getTime() > parse2.getTime() || parse.getTime() == parse2.getTime()) {
					CuUsS.setHolYn(YnState.CODE_YN_YIN_N);
				}
				if (CuUsHoLEnum.SB.name().equals(cuUsHol.getHolCd())) {
					CuUsS.setHolYn(YnState.CODE_YN_YIN_Y);
				} else if (parse.getTime() > parse3.getTime()) {
					CuUsS.setHolYn(YnState.CODE_YN_YIN_Y);
				}

			} catch (ParseException e) {
				e.printStackTrace();
			}
			return CuUsS;
		}
		return CuUsS;
	}

	@Transactional
	@Override
	public CuUsS save(CuUsS cuuss) {
		return cuussRepos.save(cuuss);
	}

	@Transactional
	@Override
	public CuUsS createCuUsS(CuUsS cuuss) {
		// 创建时间
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuuss.setCrDt(str1);
		cuuss.setCrTm(tm);
		cuuss.setLaUpDt(str1);
		CuUsS userMessage = userMessage();
		Long id2 = userMessage.getId();
		cuuss.setLaUpUsId(id2);
		cuuss.setSt(SateEnum.CS.name());
		cuuss.setHolYn(YnState.CODE_YN_YIN_Y);
		cuuss.setVe(YnState.CODE_CUUS_VE);
		// 添加机构
		if (cuuss.getBrNo() != null) {
			String brNo = cuuss.getBrNo();
			CuBrS cuBrS = cbr.getOne(brNo);
			cuuss.setCubrs(cuBrS);
		}
		// 更新上级主管
		if (cuuss.getFaExeUsId() != null && cuuss.getFaExeUsId() != cuuss.getId()) {
			CuUsS usS = cuussRepos.getOne(cuuss.getFaExeUsId());
			cuuss.setParent(usS);
		} else {
			cuuss.setParent(null);
		}
		CuUsS cuUsS2 = nextId();
		cuuss.setId(cuUsS2.getId());
		CuUsS usS = save(cuuss);
		// 保存用户登录表
		CuUsLoginS cuUsLogins = new CuUsLoginS();
		Long id3 = cuuss.getId();
		cuUsLogins.setUsId(id3);
		cuUsLogins.setLoginNa(usS.getLoginNa());
		cuUsLogins.setLaUpUsId(id2);
		cuUsLoginSService.createCuUsLoginS(cuUsLogins);

		// 更新用户角色表的时间
		Long id = cuuss.getId();
		Set<String> roNas = cuuss.getRoNas();
		if (!CollectionUtils.isEmpty(roNas)) {
			for (String roNo : roNas) {
				CuUsRoS cuUsRoS = new CuUsRoS();
				cuUsRoS.setRoNo(roNo);
				cuUsRoS.setUsId(id);
				cuUsRoS.setLoginNa(cuuss.getLoginNa());
				cuusross.createCuUsRoS(cuUsRoS);
			}
		}
		// 更新用户岗位表的时间
		Set<String> postNas = cuuss.getPostNas();
		if (!CollectionUtils.isEmpty(postNas)) {
			for (String postNo : postNas) {
				CuUsPostS cuUsPostS = new CuUsPostS();
				cuUsPostS.setPostNo(postNo);
				cuUsPostS.setUsId(id);
				cuUsPostS.setLoginNa(cuuss.getLoginNa());
				cuuspostss.createCuUsPostS(cuUsPostS);
			}
		}
		return usS;
	}

	@Transactional
	@Override
	public CuUsS updateCuUsS(CuUsS cuuss) {
		CuUsS userMessage = userMessage();
		Long id2 = userMessage.getId();
		CuUsS target = cuussRepos.findOne(id2);
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		target.setMoNo(cuuss.getMoNo());
		target.setMailNo(cuuss.getMailNo());
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		target.setLaUpDt(str1);
		return cuussRepos.save(target);
	}

	@Transactional
	@Override
	public CuUsS updateToCuUsS(CuUsS cuuss) {
		if (cuuss.getId() == null) {
			LOG.warn("cuuss.id is null.");
			return null;
		}

		CuUsS target = cuussRepos.findOne(cuuss.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		CuUsS userMessage = userMessage();
		Long id2 = userMessage.getId();
		cuuss.setLaUpUsId(id2);
		// 更新时间
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuuss.setLaUpDt(str1);
		// 更新机构
		if (cuuss.getByNewBrNo() != null) {
			String brNo = cuuss.getByNewBrNo();
			CuBrS cuBrS = cbr.getOne(brNo);
			cuuss.setCubrs(cuBrS);
		}
		// 更新上级主管
		if (cuuss.getNewFaexe() != null && !cuuss.getNewFaexe().equals(cuuss.getId())) {
			cuuss.setFaExeUsId(cuuss.getNewFaexe());
			cuuss.setParent(cuussRepos.findOne(cuuss.getNewFaexe()));
		}
		Long id = cuuss.getId();
		cuuss.getRosSet().clear();
		cuuss.getPostSet().clear();
		CuUsS usS = cuussRepos.save(cuuss);

		// 更新用户角色表的时间
		Set<String> roNas = cuuss.getRoNas();
		if (!CollectionUtils.isEmpty(roNas)) {
			for (String roNo : roNas) {
				CuUsRoS cuUsRoS = new CuUsRoS();
				cuUsRoS.setRoNo(roNo);
				cuUsRoS.setUsId(id);
				cuUsRoS.setLoginNa(cuuss.getLoginNa());
				cuusross.createCuUsRoS(cuUsRoS);
			}
		}
		// 更新用户岗位 表
		Set<String> postNas = cuuss.getPostNas();
		if (postNas.size() > 0) {
			for (String postno : postNas) {
				CuUsPostS cuUsPostS = new CuUsPostS();
				cuUsPostS.setPostNo(postno);
				cuUsPostS.setUsId(id);
				cuUsPostS.setLoginNa(cuuss.getLoginNa());
				cuuspostss.createCuUsPostS(cuUsPostS);
			}
		}
		// messagePublishService.publish(NoticeType.USERCACHE.name(),
		// NoticeType.USERCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		return usS;
	}

	@Transactional
	@Override
	public void removeCuUsS(Long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}
		CuUsS cuuss = cuussRepos.findOne(id);
		if (cuuss == null) {
			LOG.warn("cuuss is null.");
			return;
		}
		if (SateEnum.JH.name().equals(cuuss.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_REMOVE_CASCADE);
		} else {
			if (cuuss.getChildren() == null) {
				cuussRepos.delete(cuuss.getId());
			} else {
				List<CuUsS> children = cuuss.getChildren();
				for (CuUsS cuUsS2 : children) {
					cuUsS2.setParent(null);
				}
				cuussRepos.delete(cuuss.getId());
			}
			CuUsLoginS loginS = cuUsLoginSrep.findOne(id);
			if (loginS != null) {
				cuUsLoginSrep.delete(loginS);
			}
		}
	}

	@Override
	public List<CuUsS> findCuFaExe(CuUsSFilterRequest filter) {
		return new Executor(cuussRepos).findCuFaExe(filter);

	}

	@Override
	public CuUsS findUsNaById(long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		CuUsS cuUsS = cuussRepos.findById(id);
		String usNa = cuUsS.getUsNa();
		CuUsS cuUsS2 = new CuUsS();
		cuUsS2.setUsNa(usNa);
		cuUsS2.setId(id);
		return cuUsS2;
	}

	@Transactional
	@Override
	public CuUsS updateJH(long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		CuUsS cuUsS = cuussRepos.findOne(id);
		if (SateEnum.JH.name().equals(cuUsS.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_JH);
		} else {
			cuUsS.setSt(SateEnum.JH.name());
			CuUsLoginS findOne = cuUsLoginSrep.findOne(id);
			if (findOne != null) {
				findOne.setSt(SateEnum.JH.name());
				cuUsLoginSrep.save(findOne);
			}
			Calendar rightNow = Calendar.getInstance();
			SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
			String str1 = sdf1.format(rightNow.getTime());
			cuUsS.setLaUpDt(str1);
			cuussRepos.save(cuUsS);
		}
		return cuUsS;
	}

	@Transactional
	@Override
	public CuUsS updateSX(long id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		CuUsS cuUsS = cuussRepos.findOne(id);
		if (SateEnum.SX.name().equals(cuUsS.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_SX);
		}
		cuUsS.setSt(SateEnum.SX.name());
		CuUsLoginS findOne = cuUsLoginSrep.findOne(id);
		if (findOne != null) {
			findOne.setSt(SateEnum.SX.name());
			cuUsLoginSrep.save(findOne);
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuUsS.setLaUpDt(str1);
		cuussRepos.save(cuUsS);
		return cuUsS;
	}

	@Override
	public List<CuUsS> findByBrNo(String brNo) {
		CuUsSFilterRequest filter = new CuUsSFilterRequest();
		if (brNo != null) {
			filter.setBrNo(brNo);
		}
		filter.setCuMaYn(YnState.CODE_YN_YIN_Y);
		filter.setSt(SateEnum.JH.name());
		return new Executor(cuussRepos).findAll(filter);
	}

	@Override
	public CuUsS userMessage() {
		ShiroUser loginUser = shiroUserService.getLoginUser();
		String loginName = loginUser.getLoginName();
		CuUsS cuuss = cuussRepos.findByLoginNa(loginName);
		CuUsHolL cuUsHol = cuushol.findTop1ByUsIdOrderByTrDesc(cuuss.getId());
		if (cuUsHol != null) {
			try {
				String tm = cuUsHol.getHolBeDt();
				Calendar rightNow = Calendar.getInstance();
				SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
				String str1 = sdf1.format(rightNow.getTime());
				Date parse = sdf1.parse(str1);
				Date parse2 = sdf1.parse(tm);
				Date parse3 = sdf1.parse(cuUsHol.getHolEnDt());
				if (parse.getTime() > parse2.getTime() || parse.getTime() == parse2.getTime()) {
					cuuss.setHolYn(YnState.CODE_YN_YIN_N);
				}
				if (CuUsHoLEnum.SB.name().equals(cuUsHol.getHolCd())) {
					cuuss.setHolYn(YnState.CODE_YN_YIN_Y);
				} else if (parse.getTime() > parse3.getTime()) {
					cuuss.setHolYn(YnState.CODE_YN_YIN_Y);
				}

			} catch (ParseException e) {
				e.printStackTrace();
			}
			return cuuss;
		}
		return cuuss;
	}

	@Transactional
	@Override
	public CuUsLoginS resetPwd(Long id) {
		return cuUsLoginSService.resetPwd(id);

	}

	@Override
	public List<CuUsS> findByBrNotoUsers(String brNo) {
		CuUsSFilterRequest filter = new CuUsSFilterRequest();
		if (brNo != null) {
			filter.setBrNo(brNo);
		}
		return new Executor(cuussRepos).findAll(filter);
	}

	@Override
	public List<CuUsS> findBypostNo(String postNo) {
		List<CuUsPostS> findByIdpostNo = cpsr.findByIdPostNo(postNo);
		List<CuUsS> cuuss = new ArrayList<>();
		for (CuUsPostS cuUsPostS : findByIdpostNo) {
			Long usId = cuUsPostS.getId().getUsId();
			CuUsS findOne = cuussRepos.findOne(usId);
			if (findOne.getSt().equals(SateEnum.JH.name())) {
				findOne.setSt(YnState.CODE_CUUS_JH);
				cuuss.add(findOne);
			}

		}
		return cuuss;
	}

	@Override
	public CuUsS findByloginNa(String loginNa) {
		CuUsS cuus = cuussRepos.findByLoginNa(loginNa);
		return cuus;
	}

	@Override
	public boolean idExist(CuUsS cuuss) {
		Long id = cuuss.getId();
		CuUsS findOne = cuussRepos.findOne(id);
		if (findOne == null) {
			LOG.debug("cuBrss is null.");
			return true;
		}
		return false;
	}

	@Override
	public boolean loginNaExist(CuUsS cuuss) {
		String loginNa = cuuss.getLoginNa();
		CuUsS cuus = cuussRepos.findByLoginNa(loginNa);
		if (cuus == null) {
			LOG.debug("cuBrss is null.");
			return true;
		}
		return false;
	}

	@Override
	public synchronized CuUsS nextId() {
		CuUsS CuUsS = new CuUsS();
		CuUsS id = cuussRepos.findTop1ByOrderByIdDesc();
		if (id == null) {
			CuUsS.setId(YnState.CODE_CUUS_ID);
			return CuUsS;
		}
		Long ID = id.getId();
		long parseLong = ID + 1;
		String nextId = YnState.CODE_CONTINE_NUMBER + parseLong;
		String nextID = nextId.substring(nextId.length() - 5, nextId.length());
		long id2 = Long.parseLong(nextID);
		CuUsS.setId(id2);
		return CuUsS;
	}
}
