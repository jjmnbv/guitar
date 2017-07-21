package com.xukaiqiang.oauth2.client.service.impl;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xukaiqiang.oauth2.OAuthClientVars;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain;
import com.xukaiqiang.oauth2.client.service.OAuthClientService;
import com.xukaiqiang.shiro.entity.ShiroResource;
import com.xukaiqiang.shiro.service.ShiroResourceService;

@Service
public class OAuthResourceServiceImpl implements ShiroResourceService {

	@Autowired
	private OAuthClientService oauthClientService;
	@Autowired
	private OAuthClientVars appVars;

	@Override
	public List<? extends ShiroResource> findAll() {
		OAuthRsFilterchain filterchain = oauthClientService.findFilterchain(appVars.clientId);
		if (filterchain == null) {
			return Collections.emptyList();
		}

		return filterchain.getResources();
	}

}
