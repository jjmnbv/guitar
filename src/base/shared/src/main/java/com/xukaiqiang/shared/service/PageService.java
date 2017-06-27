package com.xukaiqiang.shared.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import com.xukaiqiang.shared.protocol.PageContext;

public interface PageService {

	/**
	 * 构造分页参数
	 * 
	 * @param pageNumber
	 *            页码，0开始
	 * @param pageSize
	 *            页大小
	 * @param sort
	 *            排序
	 * @return
	 */
	public Pageable getPageable(Integer pageNumber, Integer pageSize, Sort sort);

	/**
	 * 构造分页上下文对象
	 * 
	 * @param page
	 * @return
	 */
	public <T> PageContext<T> buildPageContext(Page<T> page);

}