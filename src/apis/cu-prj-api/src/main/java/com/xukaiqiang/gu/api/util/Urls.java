package com.xukaiqiang.gu.api.util;

/**
 * 报文Url
 * 
 * @author 代码生成器v1.0
 */
public abstract class Urls {

	private static final String PREFIX = "cu/api";

	/**
	 * 查找所有机构
	 */
	public static final String FINDCUBRS = PREFIX + "/findCuBrs";
	/**
	 * 查找所有一级机构
	 */
	public static final String FINDTOPCUBRS = PREFIX + "/findTopCuBrs";
	/**
	 * 查找当前机构下的经理
	 */
	public static final String FINDCUMAYNS = PREFIX + "/findCuMaYns";
	/**
	 * 查找所有岗位
	 */
	public static final String FINDCUPOSTS = PREFIX + "/findCuPostS";
	/**
	 * 通过岗位查找用户
	 */
	public static final String FINDCUUSSBYPOSTNO = PREFIX + "/findCuUsSByPostNo";
	/**
	 * 通过登录名查找用户
	 */
	public static final String FINDCUUSSBYLOGINNA = PREFIX + "/findCuUsSByLoginNa";
	/**
	 * 查找当前机构下的用户
	 */
	public static final String FINDCUBRSTOCUUS = PREFIX + "/findCuBrSToCuUs";
	/**
	 * 查找有客户经理的机构
	 */
	public static final String FINDMNCUUSCUBRS = PREFIX + "/findMnCuUsCuBrS";
	/**
	 * 查找所有的客户经理
	 */
	public static final String FINDCUMNCUUS = PREFIX + "/findCuMnCuUs";
	/**
	 * 根据客户经理查找机构
	 */
	public static final String FINDCUMNCUBRS = PREFIX + "/findCuMnCuBrS";
	/**
	 * 判断是否客户经理
	 */
	public static final String FINDCUMNYN = PREFIX + "/findCuMnYn";
	/**
	 * 通过id查找名称
	 */
	public static final String FINDCUUSBYID = PREFIX + "/findCuUsById";
	/**
	 * 工单配置查询用户
	 */
	public static final String FINDCUUSTOWORKORDER = PREFIX + "/findCuUsToWorkOrder";

}
