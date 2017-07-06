package com.xukaiqiang.g.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.g.mgt.service.RoleService;
import com.xukaiqiang.g.orm.entity.Role;
import com.xukaiqiang.g.orm.protocol.RoleFilterRequest;
import com.xukaiqiang.g.orm.repository.RoleRepository;
import com.xukaiqiang.g.orm.repository.RoleRepository.Executor;
import net.zkbc.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class RoleServiceImpl implements RoleService {
	private static final Logger LOG = LoggerFactory.getLogger(RoleServiceImpl.class);

	@Autowired
	private RoleRepository roleRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Role> findRolePage(Integer pageNumber, Integer pageSize, RoleFilterRequest filter) {
		return new Executor(roleRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Role> findRoles(RoleFilterRequest filter) {
		return new Executor(roleRepos).findAll(filter);
	}

	@Override
	public Role findRole(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return roleRepos.findOne(id);
	}

	@Transactional
	@Override
	public Role createRole(Role role) {
		//TODO 主键处理
		return roleRepos.save(role);
	}

	@Transactional
	@Override
	public Role updateRole(Role role) {
		if (role.getId() == null) {
			LOG.warn("role.id is null.");
			return null;
		}

		Role target = roleRepos.findOne(role.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return roleRepos.save(role);
	}

	@Transactional
	@Override
	public void removeRole(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Role role = roleRepos.findOne(id);
		if (role == null) {
			LOG.warn("role is null.");
			return;
		}
		roleRepos.delete(role);
	}

}
