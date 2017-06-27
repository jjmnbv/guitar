package com.xukaiqiang.shiro.cache.redis;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Set;

import org.apache.shiro.cache.CacheException;
import org.springframework.cache.Cache.ValueWrapper;
import org.springframework.data.redis.core.RedisTemplate;

import com.xukaiqiang.redis.util.RedisUtils;

public class RedisCache implements org.apache.shiro.cache.Cache<Object, Object> {

	private org.springframework.cache.Cache cache;

	public RedisCache(org.springframework.cache.Cache cache) {
		this.cache = cache;
	}

	@Override
	public Object get(Object key) throws CacheException {
		ValueWrapper wrap = cache.get(key);
		if (wrap == null) {
			return null;
		}
		return wrap.get();
	}

	@Override
	public Object put(Object key, Object value) throws CacheException {
		cache.put(key, value);
		return value;
	}

	@Override
	public Object remove(Object key) throws CacheException {
		Object value = get(key);
		cache.evict(key);
		return value;
	}

	@Override
	public void clear() throws CacheException {
		cache.clear();
	}

	@SuppressWarnings({ "unchecked" })
	@Override
	public Set<Object> keys() {
		return RedisUtils.keys(cache.getName(), (RedisTemplate<Object, Object>) cache.getNativeCache());
	}

	@Override
	public Collection<Object> values() {
		Set<Object> keys = keys();
		if (keys.isEmpty()) {
			return Collections.emptyList();
		}

		ArrayList<Object> values = new ArrayList<Object>();
		for (Object key : keys) {
			values.add(get(key));
		}

		return Collections.unmodifiableList(values);
	}

	@Override
	public int size() {
		return keys().size();
	}

}
