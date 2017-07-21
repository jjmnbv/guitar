package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuSyOpL;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 系统操作日志
 *
 */
@Entity
@Table(name = Tables.CUSYOPL)
public class CuSyOpL extends AbstractCuSyOpL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CUSYOPL_VE)
	private Integer ve;
	@Column(name = Columns.CUSYOPL_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUSYOPL_CRTM)
	private String crTm;
	@Column(name = Columns.CUSYOPL_SYOPCD)
	private String syOpCd;
	@Column(name = Columns.CUSYOPL_SYCD)
	private String syCd;
	@Column(name = Columns.CUSYOPL_CO)
	private String co;
	@Column(name = Columns.CUSYOPL_USLOGINNA)
	private String usLoginNa;
	@Column(name = Columns.CUSYOPL_TENAID)
	private Long tenaId;
	@Transient
	private String queryAllParamString;
	@Transient
	private String crdtEnd;
	/**
	 * 全部查询
	 * @return
	 */
	public String getQueryAllParamString() {
		return queryAllParamString;
	}
    /**
     * 全部查询
     * @param queryAllParamString
     */
	public void setQueryAllParamString(String queryAllParamString) {
		this.queryAllParamString = queryAllParamString;
	}
    /**
     * 创建时间查询条件
     * @return
     */
	public String getCrdtEnd() {
		return crdtEnd;
	}
    /**
     * 创建时间查询条件
     * @param crdtEnd
     */
	public void setCrdtEnd(String crdtEnd) {
		this.crdtEnd = crdtEnd;
	}

	/**
	 * @return 版本
	 */
	public Integer getVe() {
		return ve;
	}

	/**
	 * 版本
	 *
	 * @param ve
	 */
	public void setVe(Integer ve) {
		this.ve = ve;
	}

	/**
	 * @return 创建日期
	 */
	public String getCrDt() {
		return crDt;
	}

	/**
	 * 创建日期
	 *
	 * @param crDt
	 */
	public void setCrDt(String crDt) {
		this.crDt = crDt;
	}

	/**
	 * @return 创建日期
	 */
	public Date getCrDtAt() {
		if(crDtAt == null && getCrDt() != null) {
			setCrDtAt(CuVars.getDateFormDb(getCrDt()));
		}
		return crDtAt;
	}

	/**
	 * 创建日期
	 *
	 * @param crDtAt
	 */
	public void setCrDtAt(Date crDtAt) {
		this.crDtAt = crDtAt;
	}

	/**
	 * @return 创建时间
	 */
	public String getCrTm() {
		return crTm;
	}

	/**
	 * 创建时间
	 *
	 * @param crTm
	 */
	public void setCrTm(String crTm) {
		this.crTm = crTm;
	}

	/**
	 * @return 系统操作代码<br>QD 系统启动<br>GB 关闭<br>ZJ  用户增减<br>QX 权限变更<br>XN 性能异常<br>GN 功能异常<br>YJ硬件异常<br>YL 网络异常<br>WX 危险<br>QT 其他
	 */
	public String getSyOpCd() {
		return syOpCd;
	}

	/**
	 * 系统操作代码<br>QD 系统启动<br>GB 关闭<br>ZJ  用户增减<br>QX 权限变更<br>XN 性能异常<br>GN 功能异常<br>YJ硬件异常<br>YL 网络异常<br>WX 危险<br>QT 其他
	 *
	 * @param syOpCd
	 */
	public void setSyOpCd(String syOpCd) {
		this.syOpCd = syOpCd;
	}

	/**
	 * @return 系统代码<br>参见其他的系统代码配置。
	 */
	public String getSyCd() {
		return syCd;
	}

	/**
	 * 系统代码<br>参见其他的系统代码配置。
	 *
	 * @param syCd
	 */
	public void setSyCd(String syCd) {
		this.syCd = syCd;
	}

	/**
	 * @return 备注
	 */
	public String getCo() {
		return co;
	}

	/**
	 * 备注
	 *
	 * @param co
	 */
	public void setCo(String co) {
		this.co = co;
	}

	/**
	 * @return 用户登录名
	 */
	public String getUsLoginNa() {
		return usLoginNa;
	}

	/**
	 * 用户登录名
	 *
	 * @param usLoginNa
	 */
	public void setUsLoginNa(String usLoginNa) {
		this.usLoginNa = usLoginNa;
	}

	/**
	 * @return 租户Id
	 */
	public Long getTenaId() {
		return tenaId;
	}

	/**
	 * 租户Id
	 *
	 * @param tenaId
	 */
	public void setTenaId(Long tenaId) {
		this.tenaId = tenaId;
	}

}
