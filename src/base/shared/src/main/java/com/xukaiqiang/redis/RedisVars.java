package com.xukaiqiang.redis;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class RedisVars {

	@Value("${redis.mode:Single}")
	public String redisMode;

	@Value("${redis.host:127.0.0.1}")
	public String redisHost;

	@Value("${redis.port:6379}")
	public int redisPort;

	@Value("${redis.cluster.nodes:127.0.0.1:26379,127.0.0.1:26380}")
	public String redisClusterNodes;

	@Value("${redis.sentinel.master:mymaster}")
	public String redisSentinelMaster;

	@Value("${redis.sentinel.nodes:127.0.0.1:26379,127.0.0.1:26380}")
	public String redisSentinelNodes;

}
