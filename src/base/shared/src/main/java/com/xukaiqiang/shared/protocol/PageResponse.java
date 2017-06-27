package com.xukaiqiang.shared.protocol;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.ui.Model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public abstract class PageResponse extends OutputMessage {
	private static final long serialVersionUID = 1L;

	private int totalPages;
	private long totalElements;
	private int number;
	private int size;
	private List<Integer> pages;

	/**
	 * 总页数
	 * 
	 * @return
	 */
	public int getTotalPages() {
		return totalPages;
	}
	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}

	/**
	 * 总记录数
	 * 
	 * @return
	 */
	public long getTotalElements() {
		return totalElements;
	}
	public void setTotalElements(long totalElements) {
		this.totalElements = totalElements;
	}

	/**
	 * 当前页码(0开始)
	 * 
	 * @return
	 */
	public int getNumber() {
		return number;
	}
	public void setNumber(int number) {
		this.number = number;
	}

	/**
	 * 每页记录数
	 * 
	 * @return
	 */
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}

	/**
	 * 连续分页页码
	 * 
	 * @return
	 */
	public List<Integer> getPages() {
		return pages;
	}
	public void setPages(List<Integer> pages) {
		this.pages = pages;
	}

	public <E> void buildPages(Page<E> page, int displayPages) {
		this.setTotalPages(page.getTotalPages());
		this.setTotalElements(page.getTotalElements());
		this.setNumber(page.getNumber());
		this.setSize(page.getSize());

		Integer startPage = Math.max(0, page.getNumber() - displayPages / 2);
		Integer endPage = Math.min(
				Math.max(page.getNumber() + displayPages / 2 - 1, displayPages - 1),
				page.getTotalPages() - 1);

		List<Integer> pages = new ArrayList<Integer>();
		for (int i = startPage + 1; i <= endPage + 1; i++) {
			pages.add(i);
		}
		this.setPages(pages);
	}

	public void addAttributeTo(Model model) {
		model.addAttribute("page", this);
	}

}
