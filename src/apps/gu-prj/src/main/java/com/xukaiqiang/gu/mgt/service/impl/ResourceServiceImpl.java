package com.xukaiqiang.gu.mgt.service.impl;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.service.ResourceService;
import com.xukaiqiang.gu.orm.entity.CuResActS;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.gu.orm.entity.CuRoRiS;
import com.xukaiqiang.gu.orm.entity.CuRoS;
import com.xukaiqiang.gu.orm.repository.CuResActSRepository;
import com.xukaiqiang.gu.orm.repository.CuResSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoRiSRepository;
import com.xukaiqiang.gu.orm.repository.CuRoSRepository;
import com.xukaiqiang.gu.orm.util.DCNs;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain.Resource;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.map.MultiValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

@Transactional(readOnly = true)
@Service
public class ResourceServiceImpl implements ResourceService {
	private static final Logger LOG = LoggerFactory
			.getLogger(ResourceServiceImpl.class);

	@Autowired
	private CuRoRiSRepository curorisRepos;
	@Autowired
	private CuRoSRepository curosRepos;
	@Autowired
	private CuResSRepository curessRepos;
	@Autowired
	private CuResActSRepository curesactsRepos;
	@Autowired
	private CuVars appVars;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Cacheable(value = DCNs.CACHE_RESOURCE, key = "'findAll'")
	@Override
	public List<Resource> findAll() {
		List<CuRoRiS> curorislist = curorisRepos.findAll();
		OAuthRsFilterchain filterchain = new OAuthRsFilterchain();
		Map<String, CuRoS> roleMap = roleMap();
		Map<String, CuResS> menuMap = menuMap();
		Map<String, MultiValueMap> actionMap2 = actionMap();
		
		MultiValueMap baseAction = actionMap2.get("baseAction");
		MultiValueMap actionMap = actionMap2.get("actionResCdMap");
		MultiValueMap actionDefRiYnMap = actionMap2.get("actionDefRiYnMap");
		HashMap<String,String> map = new HashMap<>();
		for (CuRoRiS curoris : curorislist) {
			CuRoS role = roleMap.get(curoris.getRoNo());
			if (role == null) {
				continue;
			}
			CuResS menu = menuMap.get(curoris.getResNo());
//			map.put(curoris.getResNo()+"-"+curoris.getRoNo(), "fuck");
			if("fuck".equals(map.get(curoris.getResNo()+"-"+curoris.getRoNo()))){
				continue;
			}
			if (menu == null || (menu != null && StringUtils.isEmpty(menu.getResUrlCa()))) {
				LOG.warn("cuResS[resNo={}] is null or ResUrlCa[menu.getResUrlCa()={}] is null",curoris.getResNo());
			} else {
				String url = menu.getResUrlCa();
				Collection actsList = actionDefRiYnMap.getCollection(menu.getResNo()+"-"+YnState.CODE_YN_YIN_Y);
				Collection actsListN = actionDefRiYnMap.getCollection(menu.getResNo()+"-"+YnState.CODE_YN_YIN_N);
				//
				filterchain.addResource(url, "anyRoles["+ appVars.adminRole + "," + role.getRoNa()+ "]");
				if(!CollectionUtils.isEmpty(actsList)){
					if(!CollectionUtils.isEmpty(actsListN)){
						actsList.addAll(actsListN);
					}
					for (Object curesact : actsList) {
						CuResActS cuResActS=(CuResActS)curesact;
						if(!appVars.CODE_CURES_BASECD.equals(cuResActS.getResActCd())){
							filterchain.addResource(cuResActS.getUrl(), "anyRoles["+ appVars.adminRole + "," + role.getRoNa()+ "]");
						}
					}
				}
			}
			//短暂注掉
//			Collection collection = actionMap.getCollection(curoris.getResNo()+ "-" + curoris.getResActCd());
//			if (CollectionUtils.isEmpty(collection)) {
//				LOG.warn("CuResActS[resNo={}, resActCd={}] is null.",curoris.getResNo(), curoris.getResActCd());
//			} else {
//				for (Object object : collection) {
//					CuResActS action = (CuResActS) object;
//					String url = action.getUrl();
//					if (StringUtils.isEmpty(url)) {
//						LOG.warn("url is empty.");
//					} else {
//						filterchain.addResource(url, "anyRoles["+ appVars.adminRole + "," + role.getRoNa()+ "]");
//					}
//				}
//			}
			map.put(curoris.getResNo()+"-"+curoris.getRoNo(), "fuck");
		}
		//把基本的操作权限直接给user(基本操作权限的标识把res_act_cd字段指定为998，不能在角色权限表添加998的数据)
		Collection baseCollection = baseAction.getCollection("baseAction");
		if(!CollectionUtils.isEmpty(baseCollection)){
			for(Object object : baseCollection) {
				CuResActS cuResActS=(CuResActS)object;
				 filterchain.addResource(cuResActS.getUrl(), "user");
			}
		}
//		List<CuResActS> baseAct=curesactsRepos.findByResActCd(appVars.CODE_CURES_BASECD);
//    	if(!CollectionUtils.isEmpty(baseAct)){
//    		for (CuResActS cuResActS : baseAct) {
//		        filterchain.addResource(cuResActS.getUrl(), "user"); // TODO
//    		}
//    	}
		filterchain.addResource("/**", "user,anyRoles[" + appVars.adminRole+ "]"); // TODO
		return filterchain.getResources();
	}

	private Map<String, CuRoS> roleMap() {
		Map<String, CuRoS> roleMap = new HashMap<String, CuRoS>();
		List<CuRoS> roles = curosRepos.findAll();
		for (CuRoS role : roles) {
			roleMap.put(role.getRoNo(), role);
		}
		return roleMap;
	}

	private Map<String, CuResS> menuMap() {
		Map<String, CuResS> menuMap = new HashMap<String, CuResS>();
		List<CuResS> menus = curessRepos.findAll();
		for (CuResS menu : menus) {
			menuMap.put(menu.getResNo(), menu);
		}
		return menuMap;
	}

	private Map<String,MultiValueMap> actionMap() {
		HashMap<String,MultiValueMap> actionMap = new HashMap<String, MultiValueMap>();
		MultiValueMap actionResCdMap = new MultiValueMap();
		MultiValueMap actionDefRiYnMap = new MultiValueMap();
		MultiValueMap baseAction = new MultiValueMap();
		List<CuResActS> actions = curesactsRepos.findAll();
		for (CuResActS action : actions) {
			if(appVars.CODE_CURES_BASECD.equals(action.getResActCd())){
				baseAction.put("baseAction", action);
			}
			actionResCdMap.put(action.getResNo() + "-" + action.getResActCd(),
					action);
			if(!appVars.CODE_CURES_BASECD.equals(action.getResActCd())){
				actionDefRiYnMap.put(action.getResNo() + "-" + action.getDefRiYn(),
						action);
			}
		}
		actionMap.put("baseAction", baseAction);
		actionMap.put("actionResCdMap", actionResCdMap);
		actionMap.put("actionDefRiYnMap", actionDefRiYnMap);
		return actionMap;
	}
	
	@CacheEvict(value = DCNs.CACHE_RESOURCE, allEntries = true)
	@Override
	public void clearCacheMenus() {
		
	}
}
