package com.xukaiqiang.gu.mgt.service;

import java.text.ParseException;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.entity.CuUsS;

import org.springframework.data.domain.Page;

public interface CuUsLoginSService {

	public CuUsLoginS getLoginUser();

	/**
	 * 分页筛选用户登录系统信息
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsLoginS> findCuUsLoginSPage(Integer pageNumber, Integer pageSize,
			CuUsLoginSFilterRequest filter);

	/**
	 * 筛选用户登录系统信息列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsLoginS> findCuUsLoginSs(CuUsLoginSFilterRequest filter);

	/**
	 * 使用唯一标识查询用户登录系统信息对象
	 * 
	 * @param usId
	 * @return
	 */
	CuUsLoginS findCuUsLoginS(Long usId);

	/**
	 * 新建用户登录系统信息
	 * 
	 * @param cuuslogins
	 * @return
	 */
	CuUsLoginS createCuUsLoginS(CuUsLoginS cuuslogins);

	/**
	 * 修改用户登录系统信息
	 * 
	 * @param cuuslogins
	 * @return
	 */
	CuUsLoginS updateCuUsLoginS(CuUsLoginS cuuslogins);

	/**
	 * 删除用户登录系统信息
	 * 
	 * @param usId
	 */
	void removeCuUsLoginS(Long usId);

	/**
	 * 重置密码
	 * 
	 * @param id
	 */
	CuUsLoginS resetPwd(Long id);

	/**
	 * 修改当前用户密码
	 * 
	 * @param id
	 * 
	 * @param plainOldPassword
	 * @param plainNewPassword
	 */

	void updateMyLoginPassword(Long id, String plainOldPassword,
			String plainNewPassword);

	/**
	 * 效验是否初始密码
	 */
	boolean verifyPwd();

	/**
	 * 检查是否首次登陆
	 * 
	 * @return
	 * 
	 */
	public boolean checkPW(CuUsLoginS cuuslogins);

	/**
	 * 密码是否过期
	 * 
	 * @param cuuslogins
	 * @return
	 * @throws ParseException
	 */
	public boolean checkOverPW(CuUsLoginS cuuslogins) throws ParseException;
	/**
	 * 首页检查是否首次登陆与密码是否过期
	 * @param userMessage
	 * @return
	 * @throws ParseException 
	 */
	public boolean alterPW(CuUsS userMessage);
}
