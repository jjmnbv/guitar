// package com.xukaiqiang.oauth2.client.service.impl;
//
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
//
// import com.xukaiqiang.message.subscribe.mgt.service.MessageSubscribeService;
// import com.xukaiqiang.oauth2.auth.util.NoticeType;
// import com.xukaiqiang.oauth2.client.service.OAuthClientService;
// import com.xukaiqiang.shiro.realm.ShiroDbRealm;
// import com.xukaiqiang.shiro.web.PathFilter;
//
// @Service
// public class OAuthCacheMessageDelegate implements MessageSubscribeService {
//
// @Autowired
// private PathFilter pathFilter;
// @Autowired
// private ShiroDbRealm shiroDbRealm;
// @Autowired
// private OAuthClientService oauthclientService;
//
// @Override
// public void handleMessage(String message) {
// if (NoticeType.USERCACHE.name().equals(message)) {
// oauthclientService.clearAllMenuinfo();
// oauthclientService.clearAllUserinfo();
// shiroDbRealm.clearAllCachedAuthorizationInfo();
// }
// if (NoticeType.ACCESSCACHE.name().equals(message)) {
// oauthclientService.clearAllFilterchain();
// oauthclientService.clearAllMenuinfo();
// shiroDbRealm.clearAllCachedAuthorizationInfo();
// pathFilter.reload();
// }
// if (NoticeType.MENUCACHE.name().equals(message)) {
// oauthclientService.clearAllMenuinfo();
// }
// }
//
// }
