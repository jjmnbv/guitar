package com.xukaiqiang.pr.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.pr.orm.entity.MerchantPr;
import com.xukaiqiang.pr.orm.protocol.MerchantPrFilterRequest;

public interface MerchantPrService {

	/**
	 * 分页筛选商户
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<MerchantPr> findMerchantPrPage(Integer pageNumber, Integer pageSize, MerchantPrFilterRequest filter);

	/**
	 * 筛选商户列表
	 * 
	 * @param filter
	 * @return
	 */
	List<MerchantPr> findMerchantPrs(MerchantPrFilterRequest filter);

	/**
	 * 使用唯一标识查询商户对象
	 * 
	 * @param coId
	 * @return
	 */
	MerchantPr findMerchantPr(Long coId);

	/**
	 * 新建商户
	 * 
	 * @param merchantpr
	 * @return
	 */
	MerchantPr createMerchantPr(MerchantPr merchantpr);

	/**
	 * 修改商户
	 * 
	 * @param merchantpr
	 * @return
	 */
	MerchantPr updateMerchantPr(MerchantPr merchantpr);

	/**
	 * 删除商户
	 * 
	 * @param coId
	 */
	void removeMerchantPr(Long coId);

}
