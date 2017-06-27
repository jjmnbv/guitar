package com.xukaiqiang.shared.service.impl;

import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.support.atomic.RedisAtomicLong;

import com.xukaiqiang.shared.service.SequenceService;

public class RedisSequenceServiceImpl implements SequenceService {

	@Autowired
	private RedisConnectionFactory redisConnectionFactory;

	private ConcurrentHashMap<String, RedisAtomicLong> map = new ConcurrentHashMap<String, RedisAtomicLong>();

	@Override
	public Long getNextSeq(String key) {
		RedisAtomicLong atomic = map.get(key);
		if (atomic == null) {
			atomic = map.putIfAbsent(key, new RedisAtomicLong(key, redisConnectionFactory));
		}
		if (atomic == null) {
			return null;
		}
		return atomic.incrementAndGet();
	}

	@Override
	public Long getSeq(String key) {
		RedisAtomicLong atomic = map.get(key);
		if (atomic == null) {
			atomic = map.putIfAbsent(key, new RedisAtomicLong(key, redisConnectionFactory));
		}
		if (atomic == null) {
			return null;
		}
		return atomic.get();
	}

	@Override
	public void setSeq(String key, Long value) {
		RedisAtomicLong atomic = map.get(key);
		if (atomic == null) {
			atomic = map.putIfAbsent(key, new RedisAtomicLong(key, redisConnectionFactory, value));
		} else {
			atomic.set(value);
		}
	}

}
