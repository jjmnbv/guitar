package com.xukaiqiang.gu.api.service;

import com.xukaiqiang.gu.api.protocol.FindCuBrsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuBrsResponse;
import com.xukaiqiang.gu.api.protocol.FindTopCuBrsRequest;
import com.xukaiqiang.gu.api.protocol.FindTopCuBrsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMaYnsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMaYnsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuPostSRequest;
import com.xukaiqiang.gu.api.protocol.FindCuPostSResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByPostNoRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByPostNoResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByLoginNaRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByLoginNaResponse;
import com.xukaiqiang.gu.api.protocol.FindCuBrSToCuUsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuBrSToCuUsResponse;
import com.xukaiqiang.gu.api.protocol.FindMnCuUsCuBrSRequest;
import com.xukaiqiang.gu.api.protocol.FindMnCuUsCuBrSResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuUsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuUsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuBrSRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuBrSResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnYnRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnYnResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsByIdRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsByIdResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsToWorkOrderRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsToWorkOrderResponse;

/**
 * 报文Service接口
 * 
 * @author 代码生成器v1.0
 */
public interface MessageService {

	/**
	 * 查找所有机构
	 */
	public FindCuBrsResponse findCuBrs(FindCuBrsRequest request);
	/**
	 * 查找所有一级机构
	 */
	public FindTopCuBrsResponse findTopCuBrs(FindTopCuBrsRequest request);
	/**
	 * 查找当前机构下的经理
	 */
	public FindCuMaYnsResponse findCuMaYns(FindCuMaYnsRequest request);
	/**
	 * 查找所有岗位
	 */
	public FindCuPostSResponse findCuPostS(FindCuPostSRequest request);
	/**
	 * 通过岗位查找用户
	 */
	public FindCuUsSByPostNoResponse findCuUsSByPostNo(FindCuUsSByPostNoRequest request);
	/**
	 * 通过登录名查找用户
	 */
	public FindCuUsSByLoginNaResponse findCuUsSByLoginNa(FindCuUsSByLoginNaRequest request);
	/**
	 * 查找当前机构下的用户
	 */
	public FindCuBrSToCuUsResponse findCuBrSToCuUs(FindCuBrSToCuUsRequest request);
	/**
	 * 查找有客户经理的机构
	 */
	public FindMnCuUsCuBrSResponse findMnCuUsCuBrS(FindMnCuUsCuBrSRequest request);
	/**
	 * 查找所有的客户经理
	 */
	public FindCuMnCuUsResponse findCuMnCuUs(FindCuMnCuUsRequest request);
	/**
	 * 根据客户经理查找机构
	 */
	public FindCuMnCuBrSResponse findCuMnCuBrS(FindCuMnCuBrSRequest request);
	/**
	 * 判断是否客户经理
	 */
	public FindCuMnYnResponse findCuMnYn(FindCuMnYnRequest request);
	/**
	 * 通过id查找名称
	 */
	public FindCuUsByIdResponse findCuUsById(FindCuUsByIdRequest request);
	/**
	 * 工单配置查询用户
	 */
	public FindCuUsToWorkOrderResponse findCuUsToWorkOrder(FindCuUsToWorkOrderRequest request);

}
