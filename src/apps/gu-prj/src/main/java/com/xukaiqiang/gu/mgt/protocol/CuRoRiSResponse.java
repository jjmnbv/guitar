package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonInclude(Include.NON_NULL)
public class CuRoRiSResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	private String roNo;
	private String resNo;
	private String resActCd;
	private Integer ve;
	private String crDt;
	private String crTm;
	private String laUpDt;
	private Long laUpUsId;
	private List<String> resActCdList = new ArrayList<String>();

	/**
	 * 操作码集合
	 * 
	 * @return
	 */
	public List<String> getResActCdList() {
		return resActCdList;
	}

	public void setResActCdList(List<String> resActCdList) {
		this.resActCdList = resActCdList;
	}

	/**
	 * @return 岗位编号
	 */
	public String getRoNo() {
		return roNo;
	}

	public void setRoNo(String roNo) {
		this.roNo = roNo;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		return resNo;
	}

	public void setResNo(String resNo) {
		this.resNo = resNo;
	}

	/**
	 * @return 资源动作码<br>
	 *         ZJ 增加<br>
	 *         XG 修改<br>
	 *         SC 删除<br>
	 *         CX 查询<br>
	 *         FW 访问<br>
	 *         参见字典分类代码：70
	 */
	public String getResActCd() {
		return resActCd;
	}

	public void setResActCd(String resActCd) {
		this.resActCd = resActCd;
	}

	/**
	 * @return 版本
	 */
	public Integer getVe() {
		return ve;
	}

	public void setVe(Integer ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期
	 */
	public String getCrDt() {
		return crDt;
	}

	public void setCrDt(String crDt) {
		this.crDt = crDt;
	}

	/**
	 * @return 创建时间
	 */
	public String getCrTm() {
		return crTm;
	}

	public void setCrTm(String crTm) {
		this.crTm = crTm;
	}

	/**
	 * @return 最后更新日期
	 */
	public String getLaUpDt() {
		return laUpDt;
	}

	public void setLaUpDt(String laUpDt) {
		this.laUpDt = laUpDt;
	}

	/**
	 * @return 最新更新用户
	 */
	public Long getLaUpUsId() {
		return laUpUsId;
	}

	public void setLaUpUsId(Long laUpUsId) {
		this.laUpUsId = laUpUsId;
	}

	public static <E> CuRoRiSResponse buildResponse(CuRoRiSResponse response,
			E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
