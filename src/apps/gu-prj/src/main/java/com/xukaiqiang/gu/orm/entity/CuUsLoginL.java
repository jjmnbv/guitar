package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsLoginL;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;

import org.apache.commons.lang3.StringUtils;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户登录日志
 * 
 */
@Entity
@Table(name = Tables.CUUSLOGINL)
public class CuUsLoginL extends AbstractCuUsLoginL implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = Columns.CUUSLOGINL_LOGINID)
	private Long loginId;
	@Version
	@Column(name = Columns.CUUSLOGINL_VE)
	private Integer ve;
	@OrderBy
	@Column(name = Columns.CUUSLOGINL_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSLOGINL_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSLOGINL_LOGINOUTDT)
	private String loginOutDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date loginOutDtAt;
	@Column(name = Columns.CUUSLOGINL_LOGINOUTTM)
	private String loginOutTm;
	@Column(name = Columns.CUUSLOGINL_LOGINNA)
	private String loginNa;
    @Column(name=Columns.CUUSLOGINL_IP)
    private String loginIp;
    @Transient
   	private String ctdtEnd;
    @Transient
	private String queryAllParamString;
    @Transient
    private String showLoginTm;
    @Transient
    private String showLogoutTm;
    
    /**
     * 页面显示的登录时间
     * @return
     */
    public String getShowLoginTm() {
    	if(crDt!= null && !StringUtils.isEmpty(crTm)){
    		showLoginTm=crDt+" "+crTm;
    		return crDt+" "+crTm;
    	}
		return showLoginTm;
	}
    /**
     * 页面显示的登录时间
     * @param showLoginTm
     */
	public void setShowLoginTm(String showLoginTm) {
		this.showLoginTm = showLoginTm;
	}
	/**
	 * 页面显示的退出时间
	 * @return
	 */
	public String getShowLogoutTm() {
		if(loginOutDt != null && !StringUtils.isEmpty(loginOutTm)){
			showLogoutTm=loginOutDt+" "+loginOutTm;
			return loginOutDt+" "+loginOutTm;
		}
		return showLogoutTm;
	}
	/**
	 * 页面显示的退出时间
	 * @param showLogoutTm
	 */
	public void setShowLogoutTm(String showLogoutTm) {
		this.showLogoutTm = showLogoutTm;
	}
	/**
     * 查询条件登录时间
     * @return
     */
    public String getCtdtEnd() {
		return ctdtEnd;
	}
    /**
     * 查询条件登录时间
     * @param ctdtEnd
     */
	public void setCtdtEnd(String ctdtEnd) {
		this.ctdtEnd = ctdtEnd;
	}
	/**
	 * 全部查询条件
	 * @return
	 */
	public String getQueryAllParamString() {
		return queryAllParamString;
	}
	/**
	 * 全部查询条件
	 * @param queryAllParamString
	 */
	public void setQueryAllParamString(String queryAllParamString) {
		this.queryAllParamString = queryAllParamString;
	}
	/**
     * 登陆ip
     * @return
     */
	public String getLoginIp() {
		return loginIp;
	}
    /**
     * 登陆ip
     * @param loginIp
     */
	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}

	/**
	 * @return 登录Id
	 */
	public Long getLoginId() {
		return loginId;
	}

	/**
	 * 登录Id
	 * 
	 * @param loginId
	 */
	public void setLoginId(Long loginId) {
		this.loginId = loginId;
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
	 * @param ceDt
	 */
	public void setCrDt(String crDt) {
		this.crDt = crDt;
	}

	/**
	 * @return 创建日期
	 */
	public Date getCrDtAt() {
		if (crDtAt == null && getCrDt() != null) {
			setCrDtAt(CuVars.getDateFormDb(getCrDt()));
		}
		return crDtAt;
	}

	/**
	 * 创建日期
	 * 
	 * @param ceDtAt
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
	 * @return 登录退出日期
	 */
	public String getLoginOutDt() {
		return loginOutDt;
	}

	/**
	 * 登录退出日期
	 * 
	 * @param loginOutDt
	 */
	public void setLoginOutDt(String loginOutDt) {
		this.loginOutDt = loginOutDt;
	}

	/**
	 * @return 登录退出日期
	 */
	public Date getLoginOutDtAt() {
		if (loginOutDtAt == null && getLoginOutDt() != null) {
			setLoginOutDtAt(CuVars.getDateFormDb(getLoginOutDt()));
		}
		return loginOutDtAt;
	}

	/**
	 * 登录退出日期
	 * 
	 * @param loginOutDtAt
	 */
	public void setLoginOutDtAt(Date loginOutDtAt) {
		this.loginOutDtAt = loginOutDtAt;
	}

	/**
	 * @return 登录退出时间
	 */
	public String getLoginOutTm() {
		return loginOutTm;
	}

	/**
	 * 登录退出时间
	 * 
	 * @param loginOutTm
	 */
	public void setLoginOutTm(String loginOutTm) {
		this.loginOutTm = loginOutTm;
	}

	/**
	 * @return 登录名
	 */
	public String getLoginNa() {
		return loginNa;
	}

	/**
	 * 登录名
	 * 
	 * @param loginNa
	 */
	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

}
