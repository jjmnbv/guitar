package com.xukaiqiang.guitar.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.guitar.mgt.service.UserService;
import com.xukaiqiang.guitar.orm.entity.User;
import com.xukaiqiang.guitar.orm.protocol.UserFilterRequest;
import com.xukaiqiang.guitar.orm.repository.UserRepository;
import com.xukaiqiang.guitar.orm.repository.UserRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class UserServiceImpl implements UserService {
	private static final Logger LOG = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<User> findUserPage(Integer pageNumber, Integer pageSize, UserFilterRequest filter) {
		return new Executor(userRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<User> findUsers(UserFilterRequest filter) {
		return new Executor(userRepos).findAll(filter);
	}

	@Override
	public User findUser(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return userRepos.findOne(id);
	}

	@Transactional
	@Override
	public User createUser(User user) {
		//TODO 主键处理
		return userRepos.save(user);
	}

	@Transactional
	@Override
	public User updateUser(User user) {
		if (user.getId() == null) {
			LOG.warn("user.id is null.");
			return null;
		}

		User target = userRepos.findOne(user.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return userRepos.save(user);
	}

	@Transactional
	@Override
	public void removeUser(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		User user = userRepos.findOne(id);
		if (user == null) {
			LOG.warn("user is null.");
			return;
		}
		userRepos.delete(user);
	}

}
