package com.xukaiqiang.redis;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisClusterConfiguration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisSentinelConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;

@Configuration
public class RedisConfiguration {

	@Bean(name = "jedisConnectionFactory")
	@Autowired
	public RedisConnectionFactory jedisConnectionFactory(RedisVars appVars) {
		switch (RedisMode.valueOf(appVars.redisMode)) {
		case MasterSlave:
		case Sentinel:
			RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
					.master(appVars.redisSentinelMaster);
			for (String node : appVars.redisSentinelNodes.split(",")) {
				String[] args = node.split(":");
				sentinelConfig = sentinelConfig.sentinel(args[0], Integer.parseInt(args[1]));
			}
			JedisConnectionFactory sentinelFactory = new JedisConnectionFactory(sentinelConfig);
			return sentinelFactory;
		case Cluster:
			RedisClusterConfiguration clusterConfig = new RedisClusterConfiguration(
					Arrays.asList(appVars.redisClusterNodes.split(",")));
			return new JedisConnectionFactory(clusterConfig);
		default:
			JedisConnectionFactory factory = new JedisConnectionFactory();
			factory.setHostName(appVars.redisHost);
			factory.setPort(appVars.redisPort);
			return factory;
		}
	}
}
