package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
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

import com.xukaiqiang.gu.mgt.protocol.CuRoRiSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuRoRiSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.gu.orm.entity.CuRoRiS;
import com.xukaiqiang.gu.orm.entity.id.CuRoRiSId;
import com.xukaiqiang.gu.orm.repository.CuResSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoRiSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoRiSRepository.Executor;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.CopierUtils;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;
import com.xukaiqiang.shiro.web.PathFilter;

@Transactional(readOnly = true)
@Service
public class CuRoRiSServiceImpl implements CuRoRiSService {
	private static final Logger LOG = LoggerFactory.getLogger(CuRoRiSServiceImpl.class);

	@Autowired
	private CuRoRiSRepository curorisRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuResSRepository curp;
	@Autowired
	private ShiroDbRealm shiroDbRealm;
	@Autowired
	private PathFilter pathFilter;
	// @Autowired
	// private MessagePublishService messagePublishService;
	@Autowired
	private CuUsSService cuUsSService;

	@Override
	public Page<CuRoRiS> findCuRoRiSPage(Integer pageNumber, Integer pageSize, CuRoRiSFilterRequest filter) {
		return new Executor(curorisRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuRoRiS> findCuRoRiSs(CuRoRiSFilterRequest filter) {
		return new Executor(curorisRepos).findAll(filter);
	}

	@Override
	public CuRoRiS findCuRoRiS(String roNo, String resNo, String resActCd) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return null;
		}
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return null;
		}
		if (ObjectUtils.isEmpty(resActCd)) {
			LOG.warn("resActCd is empty.");
			return null;
		}
		return new Executor(curorisRepos).findOne(roNo, resNo, resActCd);
	}

	@Transactional
	@Override
	public CuRoRiS createCuRoRiS(CuRoRiS curoris) {
		String resNo = curoris.getResNo();
		List<CuResS> curesList = curp.findByParentResNo(resNo);
		if (CollectionUtils.isEmpty(curesList)) {
			toCreateCuRoRiS(curoris);
		} else {
			toCreateCuRoRiS(curoris);
			for (CuResS cuResS : curesList) {
				curoris.setResNo(cuResS.getResNo());
				createCuRoRiS(curoris);
			}
		}
		// messagePublishService.publish(NoticeType.ACCESSCACHE.name(),
		// NoticeType.ACCESSCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		pathFilter.reload();
		return curoris;
	}

	/**
	 * 角色权限的保存工具
	 * 
	 * @param curoris
	 * @return
	 */
	private CuRoRiS toCreateCuRoRiS(CuRoRiS curoris) {
		// 创建时间
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		curoris.setCrDt(str1);
		curoris.setCrTm(tm);
		curoris.setLaUpDt(str1);
		curoris.setLaUpUsId(cuUsSService.userMessage().getId());
		int i = 0;
		List<String> resActCdList = curoris.getResActCdList();
		if (!CollectionUtils.isEmpty(resActCdList)) {
			for (String resActCd : resActCdList) {
				if (++i < resActCdList.size()) {
					CuRoRiS cuRoRiS2 = new CuRoRiS();
					CopierUtils.copy(curoris, cuRoRiS2);
					cuRoRiS2.setResActCd(resActCd);
					curorisRepos.saveAndFlush(cuRoRiS2);
				} else {
					CuRoRiS cuRoRiS2 = new CuRoRiS();
					CopierUtils.copy(curoris, cuRoRiS2);
					cuRoRiS2.setResActCd(resActCd);
					curorisRepos.saveAndFlush(cuRoRiS2);
					cuRoRiS2.setResActCdList(resActCdList);
					return cuRoRiS2;
				}
			}
		}
		return null;
	}

	@Transactional
	@Override
	public CuRoRiS roupdateCuRoRiS(CuRoRiS curoris) {
		CuRoRiS updateCuRoRiS = updateCuRoRiS(curoris);
		// messagePublishService.publish(NoticeType.ACCESSCACHE.name(),
		// NoticeType.ACCESSCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		pathFilter.reload();
		return updateCuRoRiS;
	}

	@Transactional
	@Override
	public CuRoRiS updateCuRoRiS(CuRoRiS curoris) {
		if (curoris.getResNo() == null || curoris.getRoNo() == null) {
			LOG.warn("curoris.CuRoRiSId is null.");
			return null;
		}
		String resNo = curoris.getResNo();
		List<CuResS> curesList = curp.findByParentResNo(resNo);
		if (CollectionUtils.isEmpty(curesList)) {
			toUpdateCuRoRiS(curoris);
		} else {
			toUpdateCuRoRiS(curoris);
			for (CuResS cuResS : curesList) {
				curoris.setResNo(cuResS.getResNo());
				toUpdateCuRoRiS(curoris);
				updateCuRoRiS(curoris);
			}
		}
		return curoris;

	}

	/**
	 * 角色权限的更新
	 * 
	 * @param curoris
	 * @return
	 */
	private CuRoRiS toUpdateCuRoRiS(CuRoRiS curoris) {
		if (curoris.getResNo() == null || curoris.getRoNo() == null) {
			LOG.warn("curoris.CuRoRiSId is null.");
			return null;
		}
		// 通过资源编码和角色编码查询出角色集合A（1，3，5）
		List<CuRoRiS> cuRoRiSList = curorisRepos.findByCuRoRiSIdResNoAndCuRoRiSIdRoNo(curoris.getResNo(),
				curoris.getRoNo());
		// 前台传过来的操作码集合B(1,2,6)
		List<String> resActCdList = curoris.getResActCdList();
		if (resActCdList == null) {
			LOG.warn("curoris.ActCdList is null.");
			return null;
		}
		// 时间
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		int hour = rightNow.get(Calendar.HOUR_OF_DAY);
		int minutes = rightNow.get(Calendar.MINUTE);
		int seconds = rightNow.get(Calendar.SECOND);
		String tm = hour + ":" + minutes + ":" + seconds;
		curoris.setLaUpUsId(cuUsSService.userMessage().getId());
		// 删除A的补集(3,5)
		if (cuRoRiSList != null) {
			for (CuRoRiS OldResActCd : cuRoRiSList) {
				int i = 0;
				if (resActCdList != null) {
					for (String newResActCd : resActCdList) {
						if (!newResActCd.equals(OldResActCd.getResActCd())) {
							if (++i == resActCdList.size()) {
								curorisRepos.delete(OldResActCd);
							}
						}
					}
				}
			}
		}
		// 添加和更新
		if (resActCdList != null) {
			for (String newResActCd : resActCdList) {
				if (!CollectionUtils.isEmpty(cuRoRiSList)) {
					int i = 0;
					for (int a = 0; a < cuRoRiSList.size(); a++) {
						CuRoRiS OldResActCd = cuRoRiSList.get(a);
						// 添加B中补集(2,6)
						if (!newResActCd.equals(OldResActCd.getResActCd())) {
							if (++i == cuRoRiSList.size()) {
								CuRoRiS cuRoRiS2 = new CuRoRiS();
								CuRoRiSId cuRoRiSId = new CuRoRiSId();
								cuRoRiSId.setResActCd(newResActCd);
								cuRoRiSId.setResNo(OldResActCd.getResNo());
								cuRoRiSId.setRoNo(OldResActCd.getRoNo());
								cuRoRiS2.setCuRoRiSId(cuRoRiSId);
								cuRoRiS2.setCrDt(str1);
								cuRoRiS2.setCrTm(tm);
								cuRoRiS2.setResActCd(newResActCd);
								cuRoRiS2.setLaUpDt(str1);
								cuRoRiS2.setLaUpUsId(cuUsSService.userMessage().getId());
								curorisRepos.save(cuRoRiS2);
							}
						} else {
							// 更新交集(1)
							OldResActCd.setLaUpDt(str1);
							curorisRepos.save(OldResActCd);
						}
					}
				} else {
					// 数据库没有值，，执行添加保存
					return toCreateCuRoRiS(curoris);
				}

			}
		}
		return curoris;
	}

	@Transactional(propagation = Propagation.NOT_SUPPORTED)
	@Override
	public void removeCuRoRiS(String roNo, String resNo, String resActCd) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return;
		}
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return;
		}
		if (ObjectUtils.isEmpty(resActCd)) {
			LOG.warn("resActCd is empty.");
			return;
		}

		CuRoRiS curoris = new Executor(curorisRepos).findOne(roNo, resNo, resActCd);
		if (curoris == null) {
			LOG.warn("curoris is null.");
			return;
		}
		curorisRepos.delete(curoris);
		// messagePublishService.publish(NoticeType.ACCESSCACHE.name(),
		// NoticeType.ACCESSCACHE.name());
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		pathFilter.reload();
	}

	@Override
	public CuRoRiS findCuRoRiSList(String roNo, String resNo) {
		if (ObjectUtils.isEmpty(roNo)) {
			LOG.warn("roNo is empty.");
			return null;
		}
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return null;
		}
		List<CuRoRiS> cuRoRiSList = curorisRepos.findByCuRoRiSIdResNoAndCuRoRiSIdRoNo(resNo, roNo);
		List<String> resActCdList = new ArrayList<String>();
		int i = 0;
		if (!CollectionUtils.isEmpty(resActCdList)) {
			for (CuRoRiS cuRoRiS : cuRoRiSList) {
				if (++i < cuRoRiSList.size()) {
					resActCdList.add(cuRoRiS.getResActCd());
				} else {
					resActCdList.add(cuRoRiS.getResActCd());
					cuRoRiS.setResActCdList(resActCdList);
					return cuRoRiS;
				}
			}
		}
		return null;
	}

}
