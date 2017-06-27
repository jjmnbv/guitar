package com.xukaiqiang.jcaptcha.service.impl;

import static com.xukaiqiang.shiro.ShiroVars.CACHE_JCAPTCHA;

import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import com.octo.captcha.service.captchastore.CaptchaAndLocale;
import com.xukaiqiang.jcaptcha.service.JCaptchaStoreService;
import com.xukaiqiang.redis.util.RedisUtils;

@Component
public class JCaptchaStoreServiceImpl implements JCaptchaStoreService {

	@Autowired
	@Qualifier("cacheManager")
	private CacheManager cacheManager;

	@Cacheable(value = CACHE_JCAPTCHA, key = "#id")
	@Override
	public CaptchaAndLocale get(String id) {
		return null;
	}

	@CachePut(value = CACHE_JCAPTCHA, key = "#id")
	@Override
	public CaptchaAndLocale put(String id, CaptchaAndLocale captchaAndLocale) {
		return captchaAndLocale;
	}

	@CacheEvict(value = CACHE_JCAPTCHA, key = "#id")
	@Override
	public void remove(String id) {
	}

	@CacheEvict(value = CACHE_JCAPTCHA, allEntries = true)
	@Override
	public void clear() {
	}

	@SuppressWarnings("unchecked")
	@Override
	public Collection<Object> getKeys() {
		Cache cache = cacheManager.getCache(CACHE_JCAPTCHA);
		if (cache.getNativeCache() instanceof com.google.common.cache.Cache) {
			return ((com.google.common.cache.Cache<Object, Object>) cache.getNativeCache()).asMap().keySet();
		}

		if (cache.getNativeCache() instanceof RedisTemplate) {
			return RedisUtils.keys(cache.getName(), (RedisTemplate<Object, Object>) cache.getNativeCache());
		}

		return Collections.emptySet();
	}

}
