package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuPostS;

import org.springframework.data.domain.Page;

public interface CuPostSService {

	/**
	 * 分页筛选岗位
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuPostS> findCuPostSPage(Integer pageNumber, Integer pageSize,
			CuPostSFilterRequest filter);

	/**
	 * 筛选岗位列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuPostS> findCuPostSs(CuPostSFilterRequest filter);

	/**
	 * 使用唯一标识查询岗位对象
	 * 
	 * @param postNo
	 * @return
	 */
	CuPostS findCuPostS(String postNo);

	/**
	 * 新建岗位
	 * 
	 * @param cuposts
	 * @return
	 */
	CuPostS createCuPostS(CuPostS cuposts);

	/**
	 * 修改岗位
	 * 
	 * @param cuposts
	 * @return
	 */
	CuPostS updateCuPostS(CuPostS cuposts);

	/**
	 * 删除岗位
	 * 
	 * @param postNo
	 */
	void removeCuPostS(String postNo);

	/**
	 * 更新状态为 激活
	 * 
	 * @param postNo
	 */
	void updateJH(String postNo);

	/**
	 * 更新状态为 失效
	 * 
	 * @param postNo
	 */
	void updatesx(String postNo);

	/**
	 * 用户添加岗位保存
	 * 
	 * @param postNoList
	 */
	CuPostS findNaByNo(String postNo);

	/**
	 * 岗位是否存在
	 * 
	 * @param cuPost
	 * @return
	 */
	boolean exists(CuPostSFilterRequest cuPost);

	/**
	 * 岗位名称是否存在
	 * 
	 * @param postNa
	 * @return
	 */
	boolean postNaExist(CuPostS cuposts);

	/**
	 * 岗位编号是否存在
	 * 
	 * @param postNo
	 * @return
	 */
	boolean postNoExist(CuPostS cuposts);

	/**
	 * 查找激活下的岗位
	 * 
	 * @return
	 */
	List<CuPostS> findCuPostS();

	/**
	 * 获取下一个id
	 * 
	 * @return
	 */
	CuPostS nextId();

}
