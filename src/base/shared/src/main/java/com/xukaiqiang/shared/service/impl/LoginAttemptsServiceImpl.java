package com.xukaiqiang.shared.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.service.LoginAttemptsService;
import com.xukaiqiang.shared.util.DCNs;

@Service
public class LoginAttemptsServiceImpl implements LoginAttemptsService {

	private static final Logger LOG = LoggerFactory.getLogger(LoginAttemptsServiceImpl.class);

	@Autowired
	private SharedVars appVars;
	@Autowired
	private BeanFactory factory;

	@Cacheable(value = DCNs.CACHE_LOGIN_ATTEMPTS, key = "#username")
	@Override
	public Integer findLoginAttempts(String username) {
		return 0;
	}

	@CachePut(value = DCNs.CACHE_LOGIN_ATTEMPTS, key = "#username")
	@Override
	public Integer saveLoginAttempts(String username, Integer attempts) {
		return attempts;
	}

	@CacheEvict(value = DCNs.CACHE_LOGIN_ATTEMPTS, key = "#username")
	@Override
	public void clearLoginAttempts(String username) {
	}

	@Override
	public void incrementLoginAttempts(String username) {
		Integer attempts = getSelf().findLoginAttempts(username);
		LOG.debug("attempts={}", attempts);
		getSelf().saveLoginAttempts(username, attempts == null ? 1 : attempts + 1);
	}

	@Override
	public boolean loginCaptchaRequired(String username) {
		Integer attempts = getSelf().findLoginAttempts(username);
		LOG.debug("attempts={}", attempts);
		return attempts >= appVars.captchaForLoginfailMax;
	}

	private LoginAttemptsService getSelf() {
		return factory.getBean(LoginAttemptsService.class);
	}

}
