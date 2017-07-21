package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.oauth2.auth.protocol.OAuthRsFilterchain.Resource;
import com.xukaiqiang.shiro.service.ShiroResourceService;

/**
 * 资源服务接口
 */
public interface ResourceService extends ShiroResourceService {

	List<Resource> findAll();
	/**
	 * 清楚资源
	 */
	void clearCacheMenus();

}
