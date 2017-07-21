package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsRoSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuRoSService;
import com.xukaiqiang.gu.mgt.service.CuUsRoSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.mgt.service.ResourceService;
import com.xukaiqiang.gu.orm.entity.CuResActS;
import com.xukaiqiang.gu.orm.entity.CuRoRiS;
import com.xukaiqiang.gu.orm.entity.CuRoS;
import com.xukaiqiang.gu.orm.entity.CuUsRoS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.entity.id.CuRoRiSId;
import com.xukaiqiang.gu.orm.repository.CuResActSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoRiSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoSRepository.Executor;
import com.xukaiqiang.gu.orm.repository.DictionaryRepository;
import com.xukaiqiang.gu.orm.util.SateEnum;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.ParameterException;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;
import com.xukaiqiang.shiro.web.PathFilter;

@Transactional(readOnly = true)
@Service
public class CuRoSServiceImpl implements CuRoSService {
	private static final Logger LOG = LoggerFactory.getLogger(CuRoSServiceImpl.class);

	@Autowired
	private CuRoSRepository curosRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsRoSService cuUsRoSService;
	@Autowired
	private CuUsSService cuUsSService;
	@Autowired
	private CuRoRiSRepository curorisRepos;
	@Autowired
	private DictionaryRepository dictionaryRepos;
	@Autowired
	private ShiroDbRealm shiroDbRealm;
	@Autowired
	private PathFilter pathFilter;
	// @Autowired
	// private MessagePublishService messagePublishService;
	@Autowired
	private CuResActSRepository curesactsRepos;
	@Autowired
	private CuResActSServiceImpl curesactsservice;
	@Autowired
	private CuVars appVars;
	@Autowired
	private ResourceService resourceService;

	@Override
	public Page<CuRoS> findCuRoSPage(Integer pageNumber, Integer pageSize, CuRoSFilterRequest filter) {
		return new Executor(curosRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuRoS> findCuRoSs(CuRoSFilterRequest filter) {
		filter.setSt(SateEnum.JH.name());
		List<CuRoS> cuRoSList = new Executor(curosRepos).findAll(filter);
		ArrayList<CuRoS> list = new ArrayList<CuRoS>();
		for (CuRoS cuRoS : cuRoSList) {
			if ("ADMIN".equals(cuRoS.getRoNa())) {
				continue;
			}
			CuRoS roS = new CuRoS();
			roS.setRoNa(cuRoS.getRoNa());
			roS.setRoNo(cuRoS.getRoNo());
			list.add(roS);
		}
		return list;
	}

	@Override
	public CuRoS findCuRoS(String roNo) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return null;
		}
		return curosRepos.findOne(roNo);
	}

	@Transactional
	@Override
	public CuRoS createCuRoS(CuRoS curos) {
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		curos.setCrDt(str1);
		curos.setCrTm(tm);
		curos.setLaUpDt(str1);
		curos.setStoUseYn(YnState.CODE_YN_YIN_Y);
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		curos.setLaUpUsId(id);
		curos.setSt(SateEnum.CS.name());
		// TODO:建標
		CuRoS cuRoS2 = nextId();
		curos.setRoNo(cuRoS2.getRoNo());
		return curosRepos.save(curos);
	}

	@Transactional
	@Override
	public CuRoS updateCuRoS(CuRoS curos) {
		if (curos.getRoNo() == null) {
			LOG.warn("curos.roNo is null.");
			return null;
		}

		CuRoS target = curosRepos.findOne(curos.getRoNo());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		curos.setLaUpDt(str1);
		return curosRepos.save(curos);
	}

	@Transactional
	@Override
	public void removeCuRoS(String roNo) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return;
		}
		CuRoS curos = curosRepos.findOne(roNo);
		if (curos == null) {
			LOG.warn("curos is null.");
			return;
		}
		if (SateEnum.JH.name().equals(curos.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_REMOVE_CASCADE);
		}
		CuUsRoSFilterRequest filter = new CuUsRoSFilterRequest();
		filter.setRoNo(roNo);
		List<CuUsRoS> ch = cuUsRoSService.findCuUsRoSs(filter);
		if (CollectionUtils.isEmpty(ch)) {
			curosRepos.delete(curos);
		} else
			throw new ParameterException(CuVars.CODE_ERROR_CUROS_REMOVE_CASCADE);

	}

	@Transactional
	@Override
	public void updateJH(String roNo) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return;
		}
		CuRoS curos = curosRepos.findOne(roNo);
		if (curos == null) {
			LOG.warn("curos is null.");
			return;
		}
		if (SateEnum.JH.name().equals(curos.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_JH);
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf2.format(rightNow.getTime());
		curos.setLaUpDt(str1);
		curos.setSt(SateEnum.JH.name());
		curosRepos.save(curos);
	}

	@Transactional
	@Override
	public void updateSX(String roNo) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return;
		}
		CuRoS curos = curosRepos.findOne(roNo);
		if (curos == null) {
			LOG.warn("curos is null.");
			return;
		}
		if (SateEnum.SX.name().equals(curos.getSt())) {
			throw new ParameterException(CuVars.CODE_ERROR_JHST_UPDTAE_SX);
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		curos.setLaUpDt(str1);
		curos.setSt(SateEnum.SX.name());
		curosRepos.save(curos);
	}

	@Transactional
	@Override
	public CuRoS findRoNoByRoNa(String roNo) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return null;
		}
		CuRoS cuRoS = curosRepos.findByRoNo(roNo);
		String roNa = cuRoS.getRoNa();
		CuRoS cuRoS2 = new CuRoS();
		cuRoS2.setRoNa(roNa);
		cuRoS2.setRoNo(roNo);
		return cuRoS2;
	}

	@Override
	public boolean exists(CuRoSFilterRequest cuRoS) {
		if (cuRoS == null) {
			LOG.warn("role is null.");
			return false;
		}

		CuRoS target = new Executor(curosRepos).findOne(cuRoS);
		if (target == null) {
			LOG.debug("target is null.");
			return false;
		}

		return !target.getRoNo().equals(cuRoS.getRoNo());
	}

	@Override
	public boolean ronaexists(CuRoSFilterRequest cuRoS) {
		String roNo = cuRoS.getRoNo();
		String roNa = cuRoS.getRoNa();

		// 按名字查找是否存在
		CuRoS findByRoNa = curosRepos.findByRoNa(roNa);
		// 通过判断是否传了ID判断是否新增还是修改的唯一性名称验证
		// ID等于null为新增操作
		if (roNo.equals("")) {
			if (findByRoNa == null) {
				LOG.debug("CuRoS is null.");
				return true;
			}
			// ID等于null为修改操作
		} else {
			// 验证当前机构名的初始名称
			String roNa2 = curosRepos.findOne(roNo).getRoNa();
			if (findByRoNa == null) {
				LOG.debug("CuRoS is null.");
				return true;
			} else {
				if (roNa.equals(roNa2)) {
					return true;
				}
			}
		}
		return false;
	}

	@Override
	public boolean ronoexists(CuRoSFilterRequest cuRoS) {
		CuRoS newCuRoS = curosRepos.findByRoNo(cuRoS.getRoNo());
		if (newCuRoS == null) {
			return true;
		} else {
			return false;
		}
	}

	@Override
	public synchronized CuRoS nextId() {
		CuRoS id = curosRepos.findTop1ByOrderByRoNoDesc();
		CuRoS CuRoS = new CuRoS();
		if (id == null) {
			CuRoS.setRoNo(YnState.CODE_FIRST_NUMBER);
			return CuRoS;
		}
		String roNo = id.getRoNo();
		long parseLong = Long.parseLong(roNo) + 1;
		String nextId = YnState.CODE_CONTINE_NUMBER + parseLong;
		String nextID = nextId.substring(nextId.length() - 5, nextId.length());
		CuRoS.setRoNo(nextID);
		return CuRoS;
	}

	@Transactional
	@Override
	public CuRoS updatePermissions(CuRoS curos, String roNo) {
		List<CuRoRiS> list = new ArrayList<CuRoRiS>();
		List<CuRoRiS> curoris = curorisRepos.findByCuRoRiSIdRoNo(curos.getRoNo());
		list.addAll(curoris);
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		CuUsS userMessage = cuUsSService.userMessage();
		Long id2 = userMessage.getId();
		List<CuRoRiS> rorisSet = new ArrayList<CuRoRiS>();
		List<CuRoRiS> menurorisSet = new ArrayList<CuRoRiS>();
		// 菜单的访问权限
		List<CuRoRiS> menuroris = curorisRepos.findByCuRoRiSIdResActCdAndCuRoRiSIdRoNo(appVars.CODE_CURES_RESACTCD,
				curos.getRoNo());
		for (String id : curos.getSelectIds()) {
			CuRoRiS cuRoRiS2 = new CuRoRiS();
			cuRoRiS2.setRoNo(roNo);
			cuRoRiS2.setCrDt(str1);
			cuRoRiS2.setCrTm(tm);
			cuRoRiS2.setLaUpDt(str1);
			cuRoRiS2.setLaUpUsId(id2);
			if (id.startsWith(CuVars.NODE_ACTION_IDPFX)) {
				String res = id.substring(2);
				String[] split = res.split("_");
				LOG.error(id);
				CuResActS cuResActS = curesactsRepos.findByCuResActSIdResNoAndResActCd(split[0], split[1]);
				if (cuResActS != null) {
					cuRoRiS2.setResNo(split[0]);
					cuRoRiS2.setResActCd(cuResActS.getResActCd());
					rorisSet.add(cuRoRiS2);
				}
			}
			if (id.startsWith(CuVars.NODE_MENU_IDPFX)) {
				String res = id.substring(2);
				CuRoRiSId cuRoRiSId = new CuRoRiSId();
				cuRoRiSId.setResActCd(appVars.CODE_CURES_RESACTCD);
				cuRoRiSId.setRoNo(roNo);
				cuRoRiSId.setResNo(res);
				CuRoRiS roRiS = curorisRepos.findOne(cuRoRiSId);
				if (roRiS == null) {
					cuRoRiS2.setResNo(res);
					cuRoRiS2.setResActCd(appVars.CODE_CURES_RESACTCD);
					menurorisSet.add(cuRoRiS2);
				}
				Iterator<CuRoRiS> iterator = menuroris.iterator();
				while (iterator.hasNext()) {
					CuRoRiS cuRoRiS3 = iterator.next();
					if (cuRoRiS3.getResNo().equals(res)) {
						iterator.remove();
					}
				}
			}
		}
		// 添加菜单访问权限
		if (!CollectionUtils.isEmpty(menurorisSet)) {
			curorisRepos.save(menurorisSet);
		}
		// 删除菜单访问权限
		if (!CollectionUtils.isEmpty(menuroris)) {
			curorisRepos.deleteInBatch(menuroris);
		}
		// 删除操作权限
		List<CuRoRiS> deleteRoRiS = deleteRoRiS(curoris, rorisSet);
		if (!CollectionUtils.isEmpty(deleteRoRiS)) {
			curorisRepos.deleteInBatch(deleteRoRiS);
		}
		// 更新操作权限
		List<CuRoRiS> roRiS = deleteRoRiS(list, deleteRoRiS);
		if (!CollectionUtils.isEmpty(roRiS)) {
			for (CuRoRiS cuRoRiS2 : roRiS) {
				cuRoRiS2.setLaUpDt(str1);
				cuRoRiS2.setLaUpUsId(id2);
			}
		}
		if (!CollectionUtils.isEmpty(roRiS)) {
			curorisRepos.save(roRiS);
		}
		// 添加操作权限
		List<CuRoRiS> riS = deleteRoRiS(rorisSet, roRiS);
		if (!CollectionUtils.isEmpty(riS)) {
			curorisRepos.save(riS);
		}
		resourceService.clearCacheMenus();
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		pathFilter.reload();
		// messagePublishService.publish(NoticeType.ACCESSCACHE.name(),
		// NoticeType.ACCESSCACHE.name());
		return curos;
	}

	private List<CuRoRiS> deleteRoRiS(List<CuRoRiS> curoris, List<CuRoRiS> rorisSet) {
		if (CollectionUtils.isEmpty(curoris)) {
			return null;
		}
		if (CollectionUtils.isEmpty(rorisSet)) {
			Iterator<CuRoRiS> iterator = curoris.iterator();
			while (iterator.hasNext()) {
				CuRoRiS cuRoRiS3 = iterator.next();
				if (appVars.CODE_CURES_RESACTCD.equals(cuRoRiS3.getCuRoRiSId().getResActCd())) {
					iterator.remove();
				}
			}
			return curoris;
		}
		List<CuRoRiS> set = new ArrayList<CuRoRiS>();
		for (CuRoRiS cuRoRiS2 : curoris) {
			int a = 0;
			for (CuRoRiS cuRoRiS3 : rorisSet) {
				++a;
				if (!appVars.CODE_CURES_RESACTCD.equals(cuRoRiS2.getCuRoRiSId().getResActCd())
						&& (!cuRoRiS2.getCuRoRiSId().getResActCd().equals(cuRoRiS3.getCuRoRiSId().getResActCd())
								|| !cuRoRiS2.getCuRoRiSId().getResNo().equals(cuRoRiS3.getCuRoRiSId().getResNo())
								|| !cuRoRiS2.getCuRoRiSId().getRoNo().equals(cuRoRiS3.getCuRoRiSId().getRoNo()))
						&& a == rorisSet.size()) {
					set.add(cuRoRiS2);
				} else if ((cuRoRiS2.getCuRoRiSId().getResActCd().equals(cuRoRiS3.getCuRoRiSId().getResActCd())
						&& cuRoRiS2.getCuRoRiSId().getResNo().equals(cuRoRiS3.getCuRoRiSId().getResNo())
						&& cuRoRiS2.getCuRoRiSId().getRoNo().equals(cuRoRiS3.getCuRoRiSId().getRoNo()))) {
					break;
				}
			}
		}
		return set;
	}
}
