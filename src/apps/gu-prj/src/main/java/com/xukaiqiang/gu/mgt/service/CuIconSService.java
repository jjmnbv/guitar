package com.xukaiqiang.gu.mgt.service;

import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuIconSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuIconS;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

public interface CuIconSService {

	/**
	 * 分页筛选系统资源
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<CuIconS> findCuIconSPage(Integer pageNumber, Integer pageSize,
			CuIconSFilterRequest filter);

	/**
	 * 筛选系统资源列表
	 * 
	 * @param filter
	 * @return
	 */
	List<CuIconS> findCuIconSs(CuIconSFilterRequest filter);

	/**
	 * 使用唯一标识查询系统资源对象
	 * 
	 * @param iconNo
	 * @return
	 */
	CuIconS findCuIconS(String iconNo);

	/**
	 * 新建系统资源
	 * 
	 * @param cuicons
	 * @return
	 */
	CuIconS createCuIconS(String bizType, MultipartFile file);

	/**
	 * 修改系统资源
	 * 
	 * @param cuicons
	 * @return
	 */
	CuIconS updateCuIconS(String bizType, MultipartFile file, String iconNo);

	/**
	 * 删除系统资源
	 * 
	 * @param iconNo
	 */
	void removeCuIconS(String iconNo);

	/**
	 * 删除图标
	 * 
	 * @param iconNo
	 */
	CuIconS deletePic(String iconNo);

	/**
	 * 菜单图标名称列表
	 * 
	 * @return
	 */
	List<CuIconS> cuIconSNames();

	/**
	 * 通过图表编号查找图标地址
	 * 
	 * @param iconNo
	 */
	String findCuIconsUrl(String iconNo);

	/**
	 * 获取下一个ID
	 * 
	 * @return
	 */
	String nextId();

}
