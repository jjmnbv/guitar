package com.xukaiqiang.shared.protocol;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.ui.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(Include.NON_NULL)
public class PageContext<T> implements Serializable {

	public static final String PAGE_NUMBER = "pageNumber";
	public static final String PAGE_SIZE = "pageSize";

	private static final long serialVersionUID = 1L;

	private Page<T> page;
	private List<Integer> pages;

	public Page<T> getPage() {
		return page;
	}

	public void setPage(Page<T> page) {
		this.page = page;
	}

	public List<Integer> getPages() {
		return pages;
	}

	public void setPages(List<Integer> pages) {
		this.pages = pages;
	}

	public void addAttributeTo(Model model) {
		if (pages != null) {
			model.addAttribute("pages", pages);
		}
		if (page != null) {
			model.addAttribute("page", page);
		}
	}

}
