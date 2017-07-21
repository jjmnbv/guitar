package com.xukaiqiang.gu.mgt.service.impl;

import java.text.ParseException;
import java.util.HashSet;
import java.util.Set;

import com.xukaiqiang.gu.mgt.service.CuResSService;
import com.xukaiqiang.gu.mgt.service.CuUsLoginLService;
import com.xukaiqiang.gu.mgt.service.ResourceService;
import com.xukaiqiang.gu.orm.entity.CuPostS;
import com.xukaiqiang.gu.orm.entity.CuRoS;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuUsLoginSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsUserinfo;
import com.xukaiqiang.oauth2.auth.service.OAuthRsService;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OAuthRsServiceImpl implements OAuthRsService {
	@Autowired
	private CuUsSRepository cuussRepos;
	@Autowired
	private CuUsLoginSRepository culogin;
	@Autowired
	private CuUsLoginLService cuusloginlService;
	@Autowired
	private CuResSService curesSService;
	@Autowired
	private ResourceService resourceService;

	@Override
	public OAuthRsUserinfo findUserinfo(String username) {
		CuUsS cuuss = cuussRepos.findByLoginNa(username);
		if (cuuss != null) {
			OAuthRsUserinfo oAuthRsUserinfo = new OAuthRsUserinfo();
			oAuthRsUserinfo.setEmail(cuuss.getMailNo());
			oAuthRsUserinfo.setId(cuuss.getId());
			oAuthRsUserinfo.setLoginName(username);
			oAuthRsUserinfo.setOrganId(cuuss.getCubrs().getBrNo());
			oAuthRsUserinfo.setOrganName(cuuss.getCubrs().getBrNa());
			CuUsLoginS loginS = culogin.findOne(cuuss.getId());
			if (loginS != null) {
				oAuthRsUserinfo.setPassword(loginS.getPwd());
				oAuthRsUserinfo.setSalt(loginS.getPwdSalt());

			}
			oAuthRsUserinfo.setPhoneNumber(cuuss.getMoNo());
			oAuthRsUserinfo.setRealName(cuuss.getUsNa());
			Set<CuRoS> rosSet = cuuss.getRosSet();
			HashSet<String> roleNames = new HashSet<String>();
			if (!CollectionUtils.isEmpty(rosSet)) {
				for (CuRoS ros : rosSet) {
					roleNames.add(ros.getRoNa());
				}
			}
			oAuthRsUserinfo.setRoleNames(roleNames);
			Set<CuPostS> postSet = cuuss.getPostSet();
			HashSet<String> cupostSet = new HashSet<String>();
			if (!CollectionUtils.isEmpty(postSet)) {
				for (CuPostS post : postSet) {
					cupostSet.add(post.getPostNo());
				}
			}
			oAuthRsUserinfo.setPositionNames(cupostSet);
			oAuthRsUserinfo.setSex(cuuss.getSexCd());
			try {
				oAuthRsUserinfo.setPrevLoginTime(cuusloginlService.findPrevLoginTm(cuuss.getId()));
			} catch (Exception e) {
			}
			return oAuthRsUserinfo;
		} else {
			return null;
		}
	}

	@Override
	public OAuthRsMenuinfo findMenuinfo(String username) {
		return curesSService.getOAuthRsMenuinfo(username);
	}

	@Override
	public OAuthRsFilterchain findFilterchain(String clientId) {
		OAuthRsFilterchain filterchain = new OAuthRsFilterchain();
		filterchain.setResources(resourceService.findAll());
		return filterchain;
	}

}
