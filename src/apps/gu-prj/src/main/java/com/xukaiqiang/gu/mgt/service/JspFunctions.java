package com.xukaiqiang.gu.mgt.service;

/**
 * jsp页面中可直接调用的接口
 * 
 */
public interface JspFunctions {

	/**
	 * Java对象转成JSON串
	 * 
	 * @param obj
	 * @return
	 */
	public String toJSON(Object obj);

	/**
	 * 是否有权限访问路径
	 * 
	 * @return
	 */
    public boolean checkPath(String path);
}
