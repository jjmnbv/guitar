package com.xukaiqiang.shared.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.protocol.PageContext;
import com.xukaiqiang.shared.service.PageService;

@Service
public class PageServiceImpl implements PageService {

	@Autowired
	private SharedVars appVars;

	@Override
	public Pageable getPageable(Integer pageNumber, Integer pageSize, Sort sort) {
		if (pageNumber == null || pageNumber < 0) {
			pageNumber = 0;
		}
		if (pageSize == null || pageSize < 1) {
			pageSize = appVars.defaultPageSize;
		}
		if (pageSize > appVars.maxPageSize) {
			pageSize = appVars.maxPageSize;
		}

		return new PageRequest(pageNumber, pageSize, sort);
	}

	@Override
	public <T> PageContext<T> buildPageContext(Page<T> page) {
		Integer startPage = Math.max(0, page.getNumber() - this.appVars.displayPages / 2);
		Integer endPage = Math.min(
				Math.max(page.getNumber() + this.appVars.displayPages / 2 - 1, this.appVars.displayPages - 1),
				page.getTotalPages() - 1);

		List<Integer> pages = new ArrayList<Integer>();
		for (int i = startPage + 1; i <= endPage + 1; i++) {
			pages.add(i);
		}

		PageContext<T> pageContext = new PageContext<T>();
		pageContext.setPage(page);
		pageContext.setPages(pages);

		return pageContext;
	}

}
