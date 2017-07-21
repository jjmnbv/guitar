package com.xukaiqiang.gb.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gb.orm.entity.Contract;
import com.xukaiqiang.gb.orm.protocol.ContractFilterRequest;

public interface ContractService {

	/**
	 * 分页筛选联系方式
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<Contract> findContractPage(Integer pageNumber, Integer pageSize, ContractFilterRequest filter);

	/**
	 * 筛选联系方式列表
	 * 
	 * @param filter
	 * @return
	 */
	List<Contract> findContracts(ContractFilterRequest filter);

	/**
	 * 使用唯一标识查询联系方式对象
	 * 
	 * @param id
	 * @return
	 */
	Contract findContract(Integer id);

	/**
	 * 新建联系方式
	 * 
	 * @param contract
	 * @return
	 */
	Contract createContract(Contract contract);

	/**
	 * 修改联系方式
	 * 
	 * @param contract
	 * @return
	 */
	Contract updateContract(Contract contract);

	/**
	 * 删除联系方式
	 * 
	 * @param id
	 */
	void removeContract(Integer id);

}
