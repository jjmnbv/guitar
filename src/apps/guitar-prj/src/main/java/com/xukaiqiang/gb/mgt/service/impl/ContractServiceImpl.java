package com.xukaiqiang.gb.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import com.xukaiqiang.gb.mgt.service.ContractService;
import com.xukaiqiang.gb.orm.entity.Contract;
import com.xukaiqiang.gb.orm.protocol.ContractFilterRequest;
import com.xukaiqiang.gb.orm.repository.ContractRepository;
import com.xukaiqiang.gb.orm.repository.ContractRepository.Executor;
import com.xukaiqiang.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class ContractServiceImpl implements ContractService {
	private static final Logger LOG = LoggerFactory.getLogger(ContractServiceImpl.class);

	@Autowired
	private ContractRepository contractRepos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<Contract> findContractPage(Integer pageNumber, Integer pageSize, ContractFilterRequest filter) {
		return new Executor(contractRepos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<Contract> findContracts(ContractFilterRequest filter) {
		return new Executor(contractRepos).findAll(filter);
	}

	@Override
	public Contract findContract(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return null;
		}
		return contractRepos.findOne(id);
	}

	@Transactional
	@Override
	public Contract createContract(Contract contract) {
		//TODO 主键处理
		return contractRepos.save(contract);
	}

	@Transactional
	@Override
	public Contract updateContract(Contract contract) {
		if (contract.getId() == null) {
			LOG.warn("contract.id is null.");
			return null;
		}

		Contract target = contractRepos.findOne(contract.getId());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return contractRepos.save(contract);
	}

	@Transactional
	@Override
	public void removeContract(Integer id) {
		if (ObjectUtils.isEmpty(id)) {
			LOG.warn("id is empty.");
			return;
		}

		Contract contract = contractRepos.findOne(id);
		if (contract == null) {
			LOG.warn("contract is null.");
			return;
		}
		contractRepos.delete(contract);
	}

}
