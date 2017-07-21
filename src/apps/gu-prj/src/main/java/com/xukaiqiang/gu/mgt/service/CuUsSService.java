package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.entity.CuUsS;

import org.springframework.data.domain.Page;

public interface CuUsSService {

	/**
	 * 分页筛选用户表
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsS> findCuUsSPage(Integer pageNumber, Integer pageSize,
			CuUsSFilterRequest filter);

	/**
	 * 使用唯一标识查询用户表对象
	 * 
	 * @param id
	 * @return
	 */
	CuUsS findCuUsS(Long id);

	/**
	 * 新建用户表
	 * 
	 * @param cuuss
	 * @return
	 */
	CuUsS createCuUsS(CuUsS cuuss);

	/**
	 * 修改个人信息
	 * 
	 * @param cuuss
	 * @return
	 */
	CuUsS updateCuUsS(CuUsS cuuss);

	/**
	 * 修改用户表信息
	 * 
	 * @param cuuss
	 * @return
	 */
	CuUsS updateToCuUsS(CuUsS cuuss);

	/**
	 * 删除用户表
	 * 
	 * @param id
	 */
	void removeCuUsS(Long id);

	/**
	 * 筛选用户主管表列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsS> findCuFaExe(CuUsSFilterRequest filter);

	/**
	 * 用户主管表列表查询名称
	 * 
	 * @param id
	 * @return
	 */
	CuUsS findUsNaById(long id);

	/**
	 * 激活状态
	 * 
	 * @param id
	 * @return
	 */
	CuUsS updateJH(long id);

	/**
	 * 状态失效
	 * 
	 * @param id
	 * @return
	 */
	CuUsS updateSX(long id);

	/**
	 * 添加用户信息
	 * 
	 * @param cuuss
	 * @return
	 */
	CuUsS save(CuUsS cuuss);

	/**
	 * 通过机构编号查找用是经理的用户
	 * 
	 * @param brNo
	 * @return
	 */
	List<CuUsS> findByBrNo(String brNo);

	/**
	 * 通过机构编号查找所有用户
	 * 
	 * @param brNo
	 * @return
	 */
	List<CuUsS> findByBrNotoUsers(String brNo);

	/**
	 * 登录用户信息
	 * 
	 * @return
	 */
	CuUsS userMessage();

	/**
	 * 重置密码
	 * 
	 * @param id
	 * @return
	 */
	CuUsLoginS resetPwd(Long id);

	/**
	 * 通过岗位编号查找用户
	 * 
	 * @param brNo
	 * @return
	 */
	List<CuUsS> findBypostNo(String postNo);

	/**
	 * 通过登录名查找用户
	 * 
	 * @param brNo
	 * @return
	 */
	CuUsS findByloginNa(String loginNa);

	/**
	 * 用户编号是否存在
	 * 
	 * @param cuuss
	 * @return
	 */
	boolean idExist(CuUsS cuuss);

	/**
	 * 登录名称是否存在
	 * 
	 * @param cuuss
	 * @return
	 */
	boolean loginNaExist(CuUsS cuuss);

	/**
	 * 获取下一个id
	 * 
	 * @return
	 */
	CuUsS nextId();

}
