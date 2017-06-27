package com.xukaiqiang.shiro.cache.redis;

import org.apache.shiro.cache.AbstractCacheManager;
import org.apache.shiro.cache.CacheException;

public class RedisCacheManager extends AbstractCacheManager {

	private org.springframework.data.redis.cache.RedisCacheManager cacheManager;

	@SuppressWarnings("rawtypes")
	@Override
	protected org.apache.shiro.cache.Cache createCache(String name) throws CacheException {
		return new RedisCache(cacheManager.getCache(name));
	}

	public org.springframework.data.redis.cache.RedisCacheManager getCacheManager() {
		return cacheManager;
	}

	public void setCacheManager(org.springframework.data.redis.cache.RedisCacheManager cacheManager) {
		this.cacheManager = cacheManager;
	}

}
