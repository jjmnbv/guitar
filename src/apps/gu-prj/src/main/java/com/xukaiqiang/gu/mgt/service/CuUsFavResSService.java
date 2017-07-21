package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsFavResS;

public interface CuUsFavResSService {

	/**
	 * 分页筛选用户菜单收藏
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuUsFavResS> findCuUsFavResSPage(Integer pageNumber, Integer pageSize, CuUsFavResSFilterRequest filter);

	/**
	 * 筛选用户菜单收藏列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuUsFavResS> findCuUsFavResSs(CuUsFavResSFilterRequest filter);

	/**
	 * 使用唯一标识查询用户菜单收藏对象
	 * 
	 * @param usId
	 * @param resNo
	 * @return
	 */
	CuUsFavResS findCuUsFavResS(Long usId, String resNo);

	/**
	 * 新建用户菜单收藏
	 * 
	 * @param cuusfavress
	 * @return
	 */
	CuUsFavResS createCuUsFavResS(CuUsFavResS cuusfavress);

	/**
	 * 修改用户菜单收藏
	 * 
	 * @param cuusfavress
	 * @return
	 */
	CuUsFavResS updateCuUsFavResS(CuUsFavResS cuusfavress);

	/**
	 * 删除用户菜单收藏
	 * 
	 * @param usId
	 * @param resNo
	 */
	void removeCuUsFavResS(Long usId, String resNo);

}
