package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuResSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.shared.protocol.JsTreeNode;

import org.springframework.data.domain.Page;

public interface CuResSService {

	/**
	 * 分页筛选系统资源
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuResS> findCuResSPage(Integer pageNumber, Integer pageSize,
			CuResSFilterRequest filter);

	/**
	 * 筛选系统资源列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuResS> findCuResSs(CuResSFilterRequest filter);

	/**
	 * 使用唯一标识查询系统资源对象
	 * 
	 * @param resNo
	 * @return
	 */
	CuResS findCuResS(String resNo);

	/**
	 * 新建系统资源
	 * 
	 * @param curess
	 * @return
	 */
	CuResS createCuResS(CuResS curess);

	/**
	 * 修改系统资源
	 * 
	 * @param curess
	 * @return
	 */
	CuResS updateCuResS(CuResS curess);

	/**
	 * 删除系统资源
	 * 
	 * @param resNo
	 */
	void removeCuResS(String resNo);

	/**
	 * 菜单升降级和上下移动
	 * 
	 * @param curesss
	 */
	void menuHaul(List<CuResS> curesss);

	/**
	 * 菜单名称是否存在
	 * 
	 * @param cuResS
	 * @return
	 */
	boolean resnaexists(CuResSFilterRequest cuResS);

	/**
	 * 菜单编号是否存在
	 * 
	 * @param cuResS
	 * @return
	 */
	boolean resnoexists(CuResSFilterRequest cuResS);

	/**
	 * 节点菜单导航
	 * 
	 * @return
	 */
	JsTreeNode menuJsTrees();

	/**
	 * 当前用户菜单
	 * 
	 * @return
	 */
	OAuthRsMenuinfo findMyTopMenus();

	/**
	 * 获取username用户的菜单
	 * 
	 * @param username
	 * @return
	 */
	OAuthRsMenuinfo getOAuthRsMenuinfo(String username);

	/**
	 * 全部菜单 (缓存)
	 * 
	 * @return
	 */
	List<CuResS> findAllTopMenus();

	/**
	 * 清楚菜单缓存
	 */
	void clearCacheMenus();

	/**
	 * 构建角色用户jsTree
	 * 
	 * @param resNo
	 * @return
	 */
	JsTreeNode findUserTree(String roNo);

	/**
	 * 获取下一个ID
	 * 
	 * @return
	 */
	CuResS nextId();
	/**
	 * 权限预览
	 * @param allroNo
	 * @return
	 */
	JsTreeNode findRonoTree(String allroNo);

}
