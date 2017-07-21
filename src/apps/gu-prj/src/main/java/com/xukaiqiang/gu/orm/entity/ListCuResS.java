package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.List;

public class ListCuResS implements Serializable {

	private static final long serialVersionUID = 1L;
	private List<CuResS> curesss;

	public List<CuResS> getCuresss() {
		return curesss;
	}

	public void setCuresss(List<CuResS> curesss) {
		this.curesss = curesss;
	}

}
