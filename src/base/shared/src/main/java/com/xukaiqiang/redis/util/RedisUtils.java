package com.xukaiqiang.redis.util;

import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.data.redis.cache.DefaultRedisCachePrefix;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.RedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

public abstract class RedisUtils {

	@SuppressWarnings("unchecked")
	public static Set<Object> keys(String cacheName, RedisTemplate<Object, Object> cache) {
		final byte[] pattern = (new StringRedisSerializer()).serialize(cacheName.concat("*"));
		Set<byte[]> rawKeys = cache.execute(new RedisCallback<Set<byte[]>>() {
			public Set<byte[]> doInRedis(RedisConnection connection) {
				return connection.keys(pattern);
			}
		}, true);

		if (rawKeys == null || rawKeys.isEmpty()) {
			return Collections.emptySet();
		}

		Set<Object> keys = new LinkedHashSet<Object>(rawKeys.size());
		byte[] prefix = new DefaultRedisCachePrefix().prefix(cacheName);
		RedisSerializer<Object> keySerializer = (RedisSerializer<Object>) cache.getKeySerializer();
		for (byte[] bs : rawKeys) {
			keys.add(keySerializer.deserialize(Arrays.copyOfRange(bs, prefix.length, bs.length)));
		}
		return keys;
	}

}
