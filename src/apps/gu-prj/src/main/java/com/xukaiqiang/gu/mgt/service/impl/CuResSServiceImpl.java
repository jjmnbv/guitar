package com.xukaiqiang.gu.mgt.service.impl;

import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.SerializationUtils;
import org.apache.shiro.util.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.CuResActSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuResSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuResSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.mgt.service.ResourceService;
import com.xukaiqiang.gu.orm.entity.CuIconS;
import com.xukaiqiang.gu.orm.entity.CuResActS;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.gu.orm.entity.CuResS_;
import com.xukaiqiang.gu.orm.entity.CuRoRiS;
import com.xukaiqiang.gu.orm.entity.CuRoS;
import com.xukaiqiang.gu.orm.entity.CuSyC;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuIconSRepository;
import com.xukaiqiang.gu.orm.repository.CuResActSRepository;
import com.xukaiqiang.gu.orm.repository.CuResSRepository;
import com.xukaiqiang.gu.orm.repository.CuResSRepository.Executor;
import com.xukaiqiang.gu.orm.repository.CuRoRiSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoSRepository;
import com.xukaiqiang.gu.orm.repository.CuSyCRepository;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository;
import com.xukaiqiang.gu.orm.util.DCNs;
import com.xukaiqiang.gu.orm.util.MCNs;
import com.xukaiqiang.gu.orm.util.ResActCdEnum;
import com.xukaiqiang.gu.orm.util.YnState;
//import com.xukaiqiang.message.publish.mgt.service.MessagePublishService;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.shared.protocol.JsTreeNode;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.ParameterException;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;
import com.xukaiqiang.shiro.web.PathFilter;

@Transactional(readOnly = true)
@Service
public class CuResSServiceImpl implements CuResSService {
	private static final Logger LOG = LoggerFactory.getLogger(CuResSServiceImpl.class);

	@Autowired
	private CuResSRepository curessRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuIconSRepository cuIconSRepository;
	@Autowired
	private CuSyCRepository cuSyCRepository;
	@Autowired
	private CuUsSService cuUsSService;
	@Autowired
	private CuUsSRepository cuussRepos;
	@Autowired
	private PathFilter pathFilter;
	@Autowired
	private BeanFactory factory;
	@Autowired
	private CuRoSRepository curosrepos;
	@Autowired
	private CuRoRiSRepository curorisrepos;
	@Autowired
	private CuResActSRepository curesrep;
	// @Autowired
	// private MessagePublishService messagePublishService;
	@Autowired
	private CuResActSRepository curesactsRepos;
	@Autowired
	private CuResActSServiceImpl cuResActSService;
	@Autowired
	private CuVars appVars;
	@Autowired
	private ShiroDbRealm shiroDbRealm;
	@Autowired
	private ResourceService resourceService;

	@Override
	public Page<CuResS> findCuResSPage(Integer pageNumber, Integer pageSize, CuResSFilterRequest filter) {
		filter.setResUrlCa("/");
		return new Executor(curessRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuResS> findCuResSs(CuResSFilterRequest filter) {
		return new Executor(curessRepos).findAll(filter);
	}

	@Override
	public CuResS findCuResS(String resNo) {
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return null;
		}
		return curessRepos.findOne(resNo);
	}

	@Transactional
	@Override
	public CuResS createCuResS(CuResS curess) {
		String iconNo = curess.getIconNo();
		CuIconS findOne = cuIconSRepository.findOne(iconNo);
		curess.setCuicos(findOne);
		String syCd = curess.getSyCd();
		CuSyC findOne2 = cuSyCRepository.findOne(syCd);
		curess.setCusyc(findOne2);
		CuResS findOne3 = curessRepos.findOne(curess.getFaResNo());
		curess.setParent(findOne3);
		List<CuResS> resNo = curessRepos.findByParentResNo(findOne3.getResNo());
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		curess.setCrDt(str1);
		curess.setCrTm(tm);
		curess.setLaUpDt(str1);
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		curess.setLaUpUsId(id);
		curess.setDispOr((short) resNo.size());
		CuResS cuResS2 = nextId();
		cuResS2.setResNo(cuResS2.getResNo());
		saveCuResActS(str1, id, curess);
		getSelf().clearCacheMenus();
		resourceService.clearCacheMenus();
		shiroDbRealm.clearAllCachedAuthorizationInfo();
		pathFilter.reload();
		// messagePublishService.publish(NoticeType.ACCESSCACHE.name(),
		// NoticeType.ACCESSCACHE.name());
		return curessRepos.save(curess);
	}

	/**
	 * 添加基础的操作配置
	 * 
	 * @param str1
	 * @param id
	 * @param curess
	 */
	private void saveCuResActS(String str1, Long id, CuResS curess) {
		CuResActS curesacts2 = curesactsRepos.findTop1ByOrderByCuResActSIdSuIdDesc();
		Short suId = cuResActSService.dealAct(curesacts2);
		ArrayList<CuResActS> list = new ArrayList<CuResActS>();
		CuResActS cuResActS = new CuResActS();
		cuResActS.setCrDt(str1);
		cuResActS.setLaUpDt(str1);
		cuResActS.setResNo(curess.getResNo());
		cuResActS.setLaUpUsId(id);
		cuResActS.setSuId(suId);
		cuResActS.setDefRiYn(YnState.CODE_YN_YIN_N);
		cuResActS.setUrl(curess.getResUrlCa());
		cuResActS.setResActCa(YnState.CODE_CURES_RESACTCA);
		cuResActS.setResActCd(appVars.CODE_CURES_RESACTCD);
		list.add(cuResActS);
		ResActCdEnum[] values = ResActCdEnum.values();
		String resUrlCa = curess.getResUrlCa();
		String[] split = resUrlCa.split("/");
		int i = 0;
		String resActUrl = null;
		for (String string : split) {
			if (++i < split.length) {
				resActUrl = resActUrl + string;
			}
		}
		if (split.length > 2) {
			for (ResActCdEnum resActCdEnum : values) {
				suId = (short) (suId + 1);
				CuResActS cuResActS1 = new CuResActS();
				cuResActS1.setCrDt(str1);
				cuResActS1.setLaUpDt(str1);
				cuResActS1.setResNo(curess.getResNo());
				cuResActS1.setLaUpUsId(id);
				cuResActS1.setDefRiYn(YnState.CODE_YN_YIN_N);
				cuResActS1.setSuId(suId);
				cuResActS1.setUrl(resActUrl + resActCdEnum.getStatus());
				cuResActS1.setResActCa(resActCdEnum.name());
				cuResActS1.setResActCd(resActCdEnum.getComment());
				list.add(cuResActS1);
			}
		}
		curesactsRepos.save(list);

	}

	@Transactional
	@Override
	public CuResS updateCuResS(CuResS curess) {
		if (curess.getResNo() == null) {
			LOG.warn("curess.resNo is null.");
			return null;
		}
		String iconNo = curess.getIconNo();
		CuIconS findOne = cuIconSRepository.findOne(iconNo);
		curess.setCuicos(findOne);

		String syCd = curess.getSyCd();
		CuSyC findOne2 = cuSyCRepository.findOne(syCd);
		curess.setCusyc(findOne2);

		CuResS target = curessRepos.findOne(curess.getResNo());

		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		curess.setLaUpDt(str1);

		getSelf().clearCacheMenus();
		resourceService.clearCacheMenus();
		pathFilter.reload();
		// messagePublishService.publish(NoticeType.ACCESSCACHE.name(),
		// NoticeType.ACCESSCACHE.name());
		return curessRepos.save(curess);
	}

	/**
	 * 删除方法
	 */
	@Transactional
	@Override
	public void removeCuResS(String resNo) {
		if (ObjectUtils.isEmpty(resNo)) {
			LOG.warn("resNo is empty.");
			return;
		}
		CuResS curess = curessRepos.findOne(resNo);
		if (curess == null) {
			LOG.warn("curess is null.");
			return;
		}
		List<CuResS> ch = curessRepos.findByParentResNo(resNo);
		if (CollectionUtils.isEmpty(ch)) {
			if (resNo.equals(YnState.CODE_CURES_ROOT_ID)) {
				throw new ParameterException(CuVars.CODE_ERROR_CURESS_REMOVE_CASCADE);
			} else {
				List<CuRoRiS> rori = curorisrepos.findByCuRoRiSIdResNo(curess.getResNo());
				if (!CollectionUtils.isEmpty(rori)) {
					for (CuRoRiS cuRoRiS : rori) {
						curorisrepos.delete(cuRoRiS);
					}
				}
				curessRepos.delete(curess);
				List<CuResActS> list = curesactsRepos.findByCuResActSIdResNo(curess.getResNo());
				if (!CollectionUtils.isEmpty(list)) {
					curesactsRepos.deleteInBatch(list);
				}
				getSelf().clearCacheMenus();
				// messagePublishService.publish(NoticeType.MENUCACHE.name(),
				// NoticeType.MENUCACHE.name());
			}
		} else {
			throw new ParameterException(CuVars.CODE_ERROR_CURESS_REMOVE_CASCADE);
		}
	}

	/**
	 * tree工具方法
	 */
	@SuppressWarnings("unchecked")
	@Transactional
	@Override
	public JsTreeNode menuJsTrees() {
		JsTreeNode root = new JsTreeNode(YnState.CODE_CURES_TREEROOT_ID, YnState.CODE_CURES_TREEROOT_TEXT);
		root.getState().setOpened(true);
		List<CuResS> menus = (List<CuResS>) SerializationUtils.clone((Serializable) getSelf().findAllTopMenus());
		buildJsTree(root, menus);
		return root;
	}

	/**
	 * 构建菜单tree
	 * 
	 * @param parent
	 * @param CuResSs
	 */
	private void buildJsTree(JsTreeNode parent, List<CuResS> CuResSs) {
		for (CuResS curess : CuResSs) {
			JsTreeNode children = new JsTreeNode(curess.getResNo(), curess.getResNa());
			parent.getChildren().add(children);
			buildJsTree(children, curess.getCh());
		}
	}

	/**
	 * 菜单升降级和上下移动
	 */
	@Transactional
	@Override
	public void menuHaul(List<CuResS> curesss) {
		if (curesss.get(0).getFaResNo() == null) {
			throw new ParameterException(CuVars.CODE_ERROR_CURESS_MOVE_ROOT);
		} else {
			for (CuResS cuResS : curesss) {
				CuResS findOne = curessRepos.findOne(cuResS.getResNo());
				if (findOne == null) {
					LOG.warn("CuResS is null");
					return;
				}
				Date date = new Date();
				SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
				String str1 = sdf1.format(date);
				findOne.setLaUpDt(str1);
				findOne.setDispOr(cuResS.getDispOr());
				CuResS findOne2 = curessRepos.findOne(cuResS.getFaResNo());
				findOne.setParent(findOne2);
				curessRepos.save(findOne);
				getSelf().clearCacheMenus();
				// messagePublishService.publish(NoticeType.MENUCACHE.name(),
				// NoticeType.MENUCACHE.name());
			}
		}

	}

	@Override
	public boolean resnaexists(CuResSFilterRequest cuResS) {
		String resNa = cuResS.getResNa();
		String resNo = cuResS.getResNo();
		// 按名字查找是否存在
		CuResS findByResNa = curessRepos.findByResNa(resNa);
		// 通过判断是否传了ID判断是否新增还是修改的唯一性名称验证
		// ID等于null为新增操作
		if (resNo.equals("")) {
			if (findByResNa == null) {
				LOG.debug("CuResS is null.");
				return true;
			}
			// ID不等于null为修改操作
		} else {
			// 验证当前机构名的初始名称
			String resNa2 = curessRepos.findOne(resNo).getResNa();
			if (findByResNa == null) {
				LOG.debug("CuResS is null.");
				return true;
			} else {
				if (resNa.equals(resNa2)) {
					return true;
				}
			}
		}
		return false;
	}

	@Override
	public boolean resnoexists(CuResSFilterRequest cuResS) {
		CuResS newCuResS = curessRepos.findByResNo(cuResS.getResNo());
		if (newCuResS == null) {
			return true;
		} else {
			return false;
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public OAuthRsMenuinfo findMyTopMenus() {
		List<CuResS> menus = (List<CuResS>) SerializationUtils.clone((Serializable) getSelf().findAllTopMenus());
		OAuthRsMenuinfo oauthrsmenuinfo = menusToOAuthRsMenuinfo(menus);
		filter(oauthrsmenuinfo.getChildren());
		return oauthrsmenuinfo;
	}

	@SuppressWarnings("unchecked")
	@Override
	public OAuthRsMenuinfo getOAuthRsMenuinfo(String username) {
		List<CuResS> menus = (List<CuResS>) SerializationUtils.clone((Serializable) getSelf().findAllTopMenus());
		OAuthRsMenuinfo oauthrsmenuinfo = menusToOAuthRsMenuinfo(menus);
		filter(oauthrsmenuinfo.getChildren(), username);
		return oauthrsmenuinfo;
	}

	private OAuthRsMenuinfo menusToOAuthRsMenuinfo(List<CuResS> menus) {
		OAuthRsMenuinfo oauthrsmenuinfo = new OAuthRsMenuinfo();
		oauthrsmenuinfo.setText("root");
		oauthrsmenuinfo.setLevel(0);
		oauthrsmenuinfo.setChildren(new ArrayList<OAuthRsMenuinfo>());
		converterMenus(oauthrsmenuinfo, menus);
		return oauthrsmenuinfo;
	}

	private void converterMenus(OAuthRsMenuinfo oauthrsmenuinfo, List<CuResS> menus) {
		for (CuResS menu : menus) {
			OAuthRsMenuinfo child = new OAuthRsMenuinfo();
			child.setId(menu.getResNo());
			child.setText(menu.getResNa());
			child.setUri(menu.getResUrlCa());
			String domNa = menu.getDomNa();
			if (StringUtils.isEmpty(domNa)) {
				throw new ParameterException(MCNs.CODE_ERROR_MENU_DOMAIN_EMPTY);
			}
			child.setUrl(domNa + menu.getResUrlCa());
			child.setLevel(menu.getLevel());
			child.setStyleObject(menu.getStyleObject());
			child.setChildren(new ArrayList<OAuthRsMenuinfo>());
			oauthrsmenuinfo.getChildren().add(child);
			converterMenus(child, menu.getCh());
		}
	}

	private List<OAuthRsMenuinfo> filter(List<OAuthRsMenuinfo> menus) {
		try {
			Iterator<OAuthRsMenuinfo> itr = menus.iterator();
			while (itr.hasNext()) {
				OAuthRsMenuinfo menu = itr.next();
				List<OAuthRsMenuinfo> children = menu.getChildren();
				if (CollectionUtils.isEmpty(children)) {
					if (!pathFilter.isAccessAllowed(menu.getUri())) {
						itr.remove();
					}
				} else if (filter(children).isEmpty()) {
					itr.remove();
				}
			}
			return menus;
		} catch (Exception e) {
			LOG.debug(e.getMessage(), e);
			return Collections.emptyList();
		}
	}

	private List<OAuthRsMenuinfo> filter(List<OAuthRsMenuinfo> menus, String username) {
		try {
			Iterator<OAuthRsMenuinfo> itr = menus.iterator();
			while (itr.hasNext()) {
				OAuthRsMenuinfo menu = itr.next();
				List<OAuthRsMenuinfo> children = menu.getChildren();
				if (CollectionUtils.isEmpty(children)) {
					if (!pathFilter.isAccessAllowed(menu.getUri(), username)) {
						itr.remove();
					}
				} else if (filter(children, username).isEmpty()) {
					itr.remove();
				}
			}
			return menus;
		} catch (Exception e) {
			LOG.debug(e.getMessage(), e);
			return Collections.emptyList();
		}
	}

	@Cacheable(value = DCNs.CACHE_MENUS, key = "'findAllTopMenus'")
	@Override
	public List<CuResS> findAllTopMenus() {
		Sort s = new Sort(Direction.ASC, CuResS_.dispOr.getName());
		List<CuResS> source = curessRepos.findAll(s);
		List<CuResS> menus = new ArrayList<CuResS>();
		if (CollectionUtils.isEmpty(source)) {
			return menus;
		}

		String rootId = findRootId(source);
		if (rootId == null) {
			return menus;
		}

		buildMenusTree(menus, source, rootId, 1);

		for (CuResS menu : menus) {
			Map<String, Object> styleObject = new HashMap<String, Object>();
			styleObject.put(YnState.CODE_ICONNAME_CONNUMBER, menu.getIconNo());
			menu.setStyleObject(styleObject);
		}

		return menus;
	}

	private void buildMenusTree(List<CuResS> menus, List<CuResS> source, String parentId, Integer level) {
		for (CuResS menu : source) {
			if (parentId.equals(menu.getFaResNo())) {
				menu.setLevel(level);
				menus.add(menu);
				buildMenusTree(menu.getCh(), source, menu.getResNo(), level + 1);
			}
		}
	}

	private String findRootId(List<CuResS> source) {
		for (CuResS menu : source) {
			if (StringUtils.isEmpty(menu.getFaResNo())) {
				return menu.getResNo();
			}
		}
		return null;
	}

	@CacheEvict(value = DCNs.CACHE_MENUS, allEntries = true)
	@Override
	public void clearCacheMenus() {
	}

	private CuResSService getSelf() {
		return factory.getBean(CuResSService.class);
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public JsTreeNode findUserTree(String roNo) {
		if (roNo == null) {
			LOG.warn("roNo is null.");
			return null;
		}
		CuRoS cuRoS = curosrepos.findOne(roNo);
		if (cuRoS == null) {
			LOG.warn("cuRoS is null.");
			return null;
		}
		List<CuResS> menus = (List<CuResS>) SerializationUtils.clone((Serializable) getSelf().findAllTopMenus());
		Map dealSelect = dealSelect(roNo);
		JsTreeNode root = new JsTreeNode("1", YnState.CODE_CURES_TREEROOT_TEXT, 0);
		root.getState().setOpened(true);
		root.getState().setDisabled(false);
		buildMenuResourceJsTree(root, menus, (Set<CuResS>) dealSelect.get("cures"),
				(Set<CuResActS>) dealSelect.get("curesact"));
		return root;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	private Map dealSelect(String roNo) {
		HashMap map = new HashMap();
		List<CuRoRiS> curorisList = curorisrepos.findByCuRoRiSIdRoNo(roNo);
		Set<CuResS> curesSet = new HashSet<CuResS>();
		Set<CuResActS> curesactSet = new HashSet<CuResActS>();
		if (!CollectionUtils.isEmpty(curorisList)) {
			for (CuRoRiS cuRoRiS : curorisList) {
				CuResS cuResS = curessRepos.findOne(cuRoRiS.getResNo());
				if (cuResS != null) {
					curesSet.add(cuResS);
				}
				CuResActSFilterRequest filter = new CuResActSFilterRequest();
				filter.setResActCd(cuRoRiS.getResActCd());
				filter.setResNo(cuRoRiS.getResNo());
				List<CuResActS> resActS = new CuResActSRepository.Executor(curesrep).findAll(filter);
				if (!CollectionUtils.isEmpty(resActS)) {
					curesactSet.addAll(resActS);
				}
			}
		}
		map.put("cures", curesSet);
		map.put("curesact", curesactSet);
		return map;
	}

	/**
	 * 权限管理的操作配置
	 * 
	 * @param root
	 * @param menus
	 * @param curesSet
	 * @param curesactSet
	 */
	private void buildMenuResourceJsTree(JsTreeNode root, List<CuResS> menus, Set<CuResS> curesSet,
			Collection<CuResActS> curesactSet) {
		for (CuResS cuResS : menus) {
			if (appVars.CODE_CURES_RESNO.equals(cuResS.getResNo())) {
				break;
			}
			JsTreeNode child = new JsTreeNode(CuVars.NODE_MENU_IDPFX + cuResS.getResNo().toString(), cuResS.getResNa(),
					CuVars.NODE_MENU, isSelectedResource(cuResS.getResNo(), curesSet));
			root.getChildren().add(child);
			List<CuResActS> actList = curesrep.findByCuResActSIdResNo(cuResS.getResNo());
			for (CuResActS cuResActS : actList) {
				if (YnState.CODE_YN_YIN_Y.equals(cuResActS.getDefRiYn())) {
					continue;
				}
				if (!appVars.CODE_CURES_RESACTCD.equals(cuResActS.getResActCd())
						&& !appVars.CODE_CURES_BASECD.equals(cuResActS.getResActCd())) {
					boolean actionIsSelected = isSelectedResact(cuResActS.getUrl(), curesactSet);
					if (!actionIsSelected) {
						child.getState().setSelected(false);
						root.getState().setSelected(false);
					}
					JsTreeNode n = new JsTreeNode(
							CuVars.NODE_ACTION_IDPFX + cuResActS.getCuResActSId().getResNo() + "_"
									+ cuResActS.getResActCd().toString(),
							cuResActS.getResActCa(), CuVars.NODE_ACTION, actionIsSelected);
					n.setIcon(null);
					child.getChildren().add(n);
				}
			}
			buildMenuResourceJsTree(child, cuResS.getCh(), curesSet, curesactSet);
		}

	}

	/**
	 * 权限预览的操作配置
	 * 
	 * @param root
	 * @param menus
	 * @param curesSet
	 * @param curesactSet
	 */
	private void buildRoNoResourceJsTree(JsTreeNode root, List<CuResS> menus, Set<CuResS> curesSet,
			Collection<CuResActS> curesactSet) {
		for (CuResS cuResS : menus) {
			if (appVars.CODE_CURES_RESNO.equals(cuResS.getResNo())) {
				break;
			}
			JsTreeNode child = new JsTreeNode(CuVars.NODE_MENU_IDPFX + cuResS.getResNo().toString(), cuResS.getResNa(),
					CuVars.NODE_MENU, isSelectedResource(cuResS.getResNo(), curesSet));
			child.getState().setDisabled(true);
			root.getChildren().add(child);
			List<CuResActS> actList = curesrep.findByCuResActSIdResNo(cuResS.getResNo());
			for (CuResActS cuResActS : actList) {
				if (YnState.CODE_YN_YIN_Y.equals(cuResActS.getDefRiYn())) {
					continue;
				}
				if (!appVars.CODE_CURES_RESACTCD.equals(cuResActS.getResActCd())) {
					boolean actionIsSelected = isSelectedResact(cuResActS.getUrl(), curesactSet);
					if (!actionIsSelected) {
						child.getState().setSelected(false);
						root.getState().setSelected(false);
					}
					JsTreeNode n = new JsTreeNode(
							CuVars.NODE_ACTION_IDPFX + cuResActS.getCuResActSId().getResNo() + "_"
									+ cuResActS.getResActCd().toString(),
							cuResActS.getResActCa(), CuVars.NODE_ACTION, actionIsSelected);
					n.setIcon(null);
					n.getState().setDisabled(true);
					child.getChildren().add(n);
				}
			}
			buildRoNoResourceJsTree(child, cuResS.getCh(), curesSet, curesactSet);
		}

	}

	private boolean isSelectedResact(String url, Collection<CuResActS> curesactSet) {
		if (CollectionUtils.isEmpty(curesactSet) || StringUtils.isEmpty(url)) {
			LOG.warn("curesSet is null or url is null");
			return false;
		}
		for (CuResActS cuResActS : curesactSet) {
			if (cuResActS.getUrl().equals(url)) {
				return true;
			}
		}
		return false;
	}

	private boolean isSelectedResource(String resNo, Set<CuResS> curesSet) {
		if (CollectionUtils.isEmpty(curesSet) || StringUtils.isEmpty(resNo)) {
			LOG.warn("curesSet is null or resNo is null");
			return false;
		}
		for (CuResS cuResS : curesSet) {
			if (cuResS.getResNo().equals(resNo)) {
				return true;
			}
		}
		return false;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public JsTreeNode findRonoTree(String allRoNo) {
		if (allRoNo == null) {
			LOG.warn("allRoNo is null.");
			return null;
		}
		String[] split = allRoNo.split("_");
		Set<CuResS> allCuResS = new HashSet<CuResS>();
		Set<CuResActS> allActS = new HashSet<CuResActS>();
		if (split != null && split.length > 0) {
			for (String roNo : split) {
				Map dealSelect = dealSelect(roNo);
				allCuResS.addAll((Set<CuResS>) dealSelect.get("cures"));
				allActS.addAll((Set<CuResActS>) dealSelect.get("curesact"));
			}
		}
		List<CuResS> menus = (List<CuResS>) SerializationUtils.clone((Serializable) getSelf().findAllTopMenus());
		JsTreeNode root = new JsTreeNode("1", YnState.CODE_CURES_TREEROOT_TEXT, 0);
		root.getState().setOpened(true);
		root.getState().setDisabled(true);
		buildRoNoResourceJsTree(root, menus, allCuResS, allActS);
		return root;
	}

	@Override
	public synchronized CuResS nextId() {
		CuResS id = curessRepos.findTop1ByOrderByResNoDesc();
		CuResS CuResS = new CuResS();
		if (id == null) {
			CuResS.setResNo(YnState.CODE_FIRST_NUMBER);
			return CuResS;
		}
		String resNo = id.getResNo();
		long parseLong = Long.parseLong(resNo) + 1;
		String nextId = YnState.CODE_CONTINE_NUMBER + parseLong;
		String nextID = nextId.substring(nextId.length() - 5, nextId.length());
		CuResS.setResNo(nextID);
		return CuResS;
	}

}
