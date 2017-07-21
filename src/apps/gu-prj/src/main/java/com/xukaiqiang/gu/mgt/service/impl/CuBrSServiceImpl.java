package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuBrSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuBrS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuBrSRepository;
import com.xukaiqiang.gu.orm.repository.CuBrSRepository.Executor;
import com.xukaiqiang.gu.orm.util.SateEnum;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.ParameterException;

import org.apache.shiro.util.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuBrSServiceImpl implements CuBrSService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuBrSServiceImpl.class);

	@Autowired
	private CuBrSRepository cubrsRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsSService cuUsSService;

	@Override
	public Page<CuBrS> findCuBrSPage(Integer pageNumber, Integer pageSize,
			CuBrSFilterRequest filter) {
		return new Executor(cubrsRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuBrS> findCuBrSs(CuBrSFilterRequest filter) {
		return new Executor(cubrsRepos).findAll(filter);
	}

	@Override
	public CuBrS findCuBrS(String brNo) {
		if (ObjectUtils.isEmpty(brNo)) {
			LOG.warn("brNo is empty.");
			return null;
		}
		return cubrsRepos.findOne(brNo);
	}

	@Transactional
	@Override
	public CuBrS createCuBrS(CuBrS cubrs) {
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cubrs.setCrDt(str1);
		cubrs.setSt(SateEnum.CS.name());
		cubrs.setCrTm(tm);
		cubrs.setLaUpDt(str1);
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		cubrs.setLaUpUsId(id);
		// 设置上级机构
		if (cubrs.getBrNo() != cubrs.toGetParentBrNo()) {
			CuBrS faCubrs = cubrsRepos.findOne(cubrs.toGetParentBrNo());
			cubrs.setParent(faCubrs);
		}
		// 设置金融机构代码
		cubrs.setBrAbbrNo(cubrs.getBrNo());
		// 设置省份代码
		cubrs.setProvCd(YnState.CODE_CUUS_PREV_CD);
		// 设置城市代码
		cubrs.setCityCd(YnState.CODE_CUUS_CITY_CD);
		CuBrS cuBrS2 = nextId();
		cubrs.setBrNo(cuBrS2.getBrNo());
		return cubrsRepos.save(cubrs);
	}

	@Transactional
	@Override
	public CuBrS updateCuBrS(CuBrS cubrs) {
		if (cubrs.getBrNo() == null) {
			LOG.warn("cubrs.brNo is null.");
			return null;
		}

		CuBrS target = cubrsRepos.findOne(cubrs.getBrNo());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		// 设置上级机构
			if (cubrs.getBrNo() != cubrs.toGetParentBrNo()) {
				CuBrS faCubrs = cubrsRepos.findOne(cubrs.toGetParentBrNo());
				cubrs.setParent(faCubrs);
			}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cubrs.setLaUpDt(str1);
		return cubrsRepos.save(cubrs);
	}

	@Transactional
	@Override
	public void removeCuBrS(String brNo) {
		if (ObjectUtils.isEmpty(brNo)) {
			LOG.warn("brNo is empty.");
			return;
		}
		CuBrS cubrs = cubrsRepos.findOne(brNo);
		if (cubrs == null) {
			LOG.warn("cubrs is null.");
			return;
		}
		if ("JH".equals(cubrs.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_REMOVE_CASCADE);
		}
		// 通过机构号查找用
		List<CuUsS> ch = cuUsSService.findByBrNotoUsers(brNo);
		if (CollectionUtils.isEmpty(ch) && CollectionUtils.isEmpty(cubrs.getChildren())) {
			cubrsRepos.delete(cubrs);
		} else
			throw new ParameterException(CuVars.CODE_ERROR_CUBRS_REMOVE_CASCADE);
	}

	@Transactional
	@Override
	public void updateJH(String brNo) {
		if (brNo == null) {
			LOG.warn("cubrs is null.");
			return;
		}
		CuBrS cuBrS = cubrsRepos.getOne(brNo);
		if (SateEnum.JH.name().equals(cuBrS.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_JH);
		}
		cuBrS.setSt(SateEnum.JH.name());
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuBrS.setLaUpDt(str1);
		cubrsRepos.save(cuBrS);
	}

	@Transactional
	@Override
	public void updateSX(String brNo) {
		if (brNo == null) {
			LOG.warn("cubrs is null.");
			return;
		}
		CuBrS cuBrS = cubrsRepos.getOne(brNo);
		if (SateEnum.SX.name().equals(cuBrS.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_SX);
		}
		cuBrS.setSt(SateEnum.SX.name());
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuBrS.setLaUpDt(str1);
		cubrsRepos.save(cuBrS);
	}

	@Override
	public CuBrS findBrNaByBrNo(String brNo) {
		if (ObjectUtils.isEmpty(brNo)) {
			LOG.warn("brNo is empty.");
			return null;
		}
		CuBrS cuBrS = cubrsRepos.findByBrNo(brNo);
		String brNa = cuBrS.getBrNa();
		CuBrS cuBrS2 = new CuBrS();
		cuBrS2.setBrNa(brNa);
		cuBrS2.setBrNo(brNo);
		return cuBrS2;
	}

	@Override
	public boolean exists(CuBrSFilterRequest cuBrS) {
		if (cuBrS == null) {
			LOG.warn("role is null.");
			return false;
		}

		CuBrS target = new Executor(cubrsRepos).findOne(cuBrS);
		if (target == null) {
			LOG.debug("target is null.");
			return false;
		}

		return !target.getBrNo().equals(cuBrS.getBrNo());
	}

	@Override
	public boolean brNoExist(CuBrS cubrs) {
		String brNo = cubrs.getBrNo();
		CuBrS cuBrss = cubrsRepos.findByBrNo(brNo);
		if (cuBrss == null) {
			LOG.debug("cuBrss is null.");
			return true;
		}
		return false;

	}

	@Override
	public boolean brNaExist(CuBrS cubrs) {
		String brNo = cubrs.getBrNo();
		String brNa = cubrs.getBrNa();

		// 按名字查找是否存在
		CuBrS cuBrss = cubrsRepos.findByBrNa(brNa);
		// 通过判断是否传了ID判断是否新增还是修改的唯一性名称验证
		// ID等于null为新增操作
		if (brNo.equals("")) {
			if (cuBrss == null) {
				LOG.debug("cuBrss is null.");
				return true;
			}
			// ID不等于null为修改操作
		} else {
			// 验证当前机构名的初始名称
			String brNa2 = cubrsRepos.findOne(brNo).getBrNa();
			if (cuBrss == null) {
				LOG.debug("cuBrss is null.");
				return true;
			} else {
				if (brNa.equals(brNa2)) {
					return true;
				}
			}
		}
		return false;
	}

	@Override
	public List<CuBrS> checkCuBrSList() {
		CuBrSFilterRequest filter = new CuBrSFilterRequest();
		filter.setBrLevQt(YnState.CODE_CUBRS_LEV_ONE);
		filter.setSt(SateEnum.JH.name());
		List<CuBrS> findAll = new Executor(cubrsRepos).findAll(filter);
		ArrayList<CuBrS> cuBrSList = new ArrayList<CuBrS>();
		if (!CollectionUtils.isEmpty(findAll)) {
			for (CuBrS cuBrS : findAll) {
				CuBrS cuBrS2 = new CuBrS();
				cuBrS2.setBrNo(cuBrS.getBrNo());
				cuBrS2.setBrNa(cuBrS.getBrNa());
				cuBrSList.add(cuBrS2);
			}
			return cuBrSList;
		}
		return null;

	}

	@Transactional
	@Override
	public List<CuBrS> findCuBrs(String brNo) {
		CuBrSFilterRequest filter = new CuBrSFilterRequest();
		filter.setSt(SateEnum.JH.name());
		filter.setBrNo(brNo);
		List<CuBrS> findAll = new Executor(cubrsRepos).findAll(filter);
		for (CuBrS cuBrS : findAll) {
			if (cuBrS.getParent() != null) {
				String newbrNo = cuBrS.getParent().getBrNo();
				cuBrS.setPrevBrNo(newbrNo);
			}
		}
		return findAll;

	}

	@Override
	public List<CuBrS> checkCuBrSList2() {
		CuBrSFilterRequest filter = new CuBrSFilterRequest();
		filter.setSt(SateEnum.JH.name());
		List<CuBrS> findAll = new Executor(cubrsRepos).findAll(filter);
		ArrayList<CuBrS> cuBrSList = new ArrayList<CuBrS>();
		if (!CollectionUtils.isEmpty(findAll)) {
			for (CuBrS cuBrS : findAll) {
				CuBrS cuBrS2 = new CuBrS();
				cuBrS2.setBrNo(cuBrS.getBrNo());
				cuBrS2.setBrNa(cuBrS.getBrNa());
				cuBrSList.add(cuBrS2);
			}
			return cuBrSList;
		}
		return null;
	}

	@Override
	public synchronized CuBrS nextId() {
		CuBrS cuBrS = new CuBrS();
		CuBrS id = cubrsRepos.findTop1ByOrderByBrNoDesc();
		if (id == null) {
			cuBrS.setBrNo(YnState.CODE_FIRST_NUMBER);
			return cuBrS;
		}
		String brNo = id.getBrNo();
		long parseLong = Long.parseLong(brNo) + 1;
		String nextId = YnState.CODE_CONTINE_NUMBER + parseLong;
		String nextID = nextId.substring(nextId.length() - 5, nextId.length());
		cuBrS.setBrNo(nextID);
		return cuBrS;
	}

	@Override
	public List<CuBrS> findPrevCuBrS(Integer brLevQt,String brNo) {
		if(1==brLevQt){
			return null;
		}
		CuBrSFilterRequest filter = new CuBrSFilterRequest();
		filter.setSt(SateEnum.JH.name());
		filter.setBrLevQt(brLevQt-1);
		List<CuBrS> findAll = new Executor(cubrsRepos).findAll(filter);
		ArrayList<CuBrS> cuBrSList = new ArrayList<CuBrS>();
		if (!CollectionUtils.isEmpty(findAll)) {
			for (CuBrS cuBrS : findAll) {
				if(!cuBrS.getBrNo().equals(brNo)){
					CuBrS cuBrS2 = new CuBrS();
					cuBrS2.setBrNo(cuBrS.getBrNo());
					cuBrS2.setBrNa(cuBrS.getBrNa());
					cuBrSList.add(cuBrS2);
				}
			}
			return cuBrSList;
		}
		return null;
	};

}
