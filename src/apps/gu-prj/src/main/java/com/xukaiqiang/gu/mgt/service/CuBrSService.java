package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuBrS;

import org.springframework.data.domain.Page;

public interface CuBrSService {

	/**
	 * 分页筛选机构
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuBrS> findCuBrSPage(Integer pageNumber, Integer pageSize,
			CuBrSFilterRequest filter);

	/**
	 * 筛选机构列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuBrS> findCuBrSs(CuBrSFilterRequest filter);

	/**
	 * 使用唯一标识查询机构对象
	 * 
	 * @param brNo
	 * @return
	 */
	CuBrS findCuBrS(String brNo);

	/**
	 * 新建机构
	 * 
	 * @param cubrs
	 * @return
	 */
	CuBrS createCuBrS(CuBrS cubrs);

	/**
	 * 修改机构
	 * 
	 * @param cubrs
	 * @return
	 */
	CuBrS updateCuBrS(CuBrS cubrs);

	/**
	 * 删除机构
	 * 
	 * @param brNo
	 */
	void removeCuBrS(String brNo);

	/**
	 * 更新状态为激活
	 * 
	 * @param brNo
	 */
	void updateJH(String brNo);

	/**
	 * 更新状态为失效
	 * 
	 * @param brNo
	 */
	void updateSX(String brNo);

	/**
	 * 保存选择的机构
	 * 
	 * @param brNo
	 */
	CuBrS findBrNaByBrNo(String brNo);

	/**
	 * 机构是否存在
	 * 
	 * @param cuBrS
	 * @return
	 */
	boolean exists(CuBrSFilterRequest cuBrS);

	/**
	 * 机构编号是否存在
	 * 
	 * @param brNo
	 * @return
	 */
	boolean brNoExist(CuBrS cubrs);

	/**
	 * 机构名称是否存在
	 * 
	 * @param brNa
	 * @return
	 */
	boolean brNaExist(CuBrS cubrs);

	/**
	 * 机构列表选择
	 * 
	 * @return
	 */
	List<CuBrS> checkCuBrSList();

	/**
	 * 查找激活状态下的机构列表
	 * 
	 * @return
	 */
	List<CuBrS> findCuBrs(String brNo);

	List<CuBrS> checkCuBrSList2();

	/**
	 * 获取id
	 * 
	 * @return
	 */
	CuBrS nextId();
	/**
	 * 选择上级机构
	 * @param brLevQt
	 * @param brNo 
	 * @return
	 */
	List<CuBrS> findPrevCuBrS(Integer brLevQt, String brNo);

}
