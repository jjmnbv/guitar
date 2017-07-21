package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuRoS;

import org.springframework.data.domain.Page;

public interface CuRoSService {

	/**
	 * 分页筛选岗位
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuRoS> findCuRoSPage(Integer pageNumber, Integer pageSize,
			CuRoSFilterRequest filter);

	/**
	 * 筛选岗位列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuRoS> findCuRoSs(CuRoSFilterRequest filter);

	/**
	 * 使用唯一标识查询岗位对象
	 * 
	 * @param roNo
	 * @return
	 */
	CuRoS findCuRoS(String roNo);

	/**
	 * 新建岗位
	 * 
	 * @param curos
	 * @return
	 */
	CuRoS createCuRoS(CuRoS curos);

	/**
	 * 修改岗位
	 * 
	 * @param curos
	 * @return
	 */
	CuRoS updateCuRoS(CuRoS curos);

	/**
	 * 删除岗位
	 * 
	 * @param roNo
	 */
	void removeCuRoS(String roNo);

	/**
	 * 更新状态为 激活
	 * 
	 * @param roNo
	 */
	void updateJH(String roNo);

	/**
	 * 更新状态为 失效
	 * 
	 * @param roNo
	 */
	void updateSX(String roNo);

	/**
	 * 用户选择的角色保存
	 * 
	 * @param roNo
	 */
	CuRoS findRoNoByRoNa(String roNo);

	/**
	 * 角色是否存在
	 * 
	 * @param cuRoS
	 * @return
	 */
	boolean exists(CuRoSFilterRequest cuRoS);

	/**
	 * 角色名称是否存在
	 * 
	 * @param cuRoS
	 * @return
	 */
	boolean ronaexists(CuRoSFilterRequest cuRoS);

	/**
	 * 角色名称是否存在
	 * 
	 * @param cuRoS
	 * @return
	 */
	boolean ronoexists(CuRoSFilterRequest cuRoS);

	/**
	 * 获取下一个id
	 * 
	 * @return
	 */
	CuRoS nextId();

	/**
	 * 修改 角色权限
	 * 
	 * @param curos
	 * @param roNo
	 * @return
	 */
	CuRoS updatePermissions(CuRoS curos, String roNo);

}
