package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuUsLoginS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.shiro.entity.ShiroUser;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 用户登录系统信息
 * 
 */
@Entity
@Table(name = Tables.CUUSLOGINS)
public class CuUsLoginS extends AbstractCuUsLoginS implements ShiroUser,
		Serializable {
	private static final long serialVersionUID = 1L;
	@Version
	@Column(name = Columns.CUUSLOGINS_VE)
	private Integer ve;
	@Column(name = Columns.CUUSLOGINS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CUUSLOGINS_CRTM)
	private String crTm;
	@Column(name = Columns.CUUSLOGINS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CUUSLOGINS_LAUPUSID)
	private Long laUpUsId;
	@Column(name = Columns.CUUSLOGINS_ST)
	private String st;
	@Column(name = Columns.CUUSLOGINS_PWD)
	private String pwd;
	@Column(name = Columns.CUUSLOGINS_PWDOVYN)
	private String pwdOvYn;
	@Column(name = Columns.CUUSLOGINS_PWDSALT)
	private String pwdSalt;
	@Column(name = Columns.CUUSLOGINS_USLOCKYN)
	private String usLockYn;
	@Column(name = Columns.CUUSLOGINS_PREVCHPWDDT)
	private String prevChPwdDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date prevChPwdDtAt;
	@Column(name = Columns.CUUSLOGINS_NEXTCHPWDDT)
	private String nextChPwdDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date nextChPwdDtAt;
	@Column(name = Columns.CUUSLOGINS_LOGINERRQT)
	private Integer loginErrQt;
	@Column(name = Columns.CUUSLOGINS_LOCKDT)
	private String lockDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date lockDtAt;
	@Column(name = Columns.CUUSLOGINS_LOCKTM)
	private String lockTm;
	@Column(name = Columns.CUUSLOGINS_AUTOUNLOCKDT)
	private String autoUnlockDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date autoUnlockDtAt;
	@Column(name = Columns.CUUSLOGINS_AUTOUNLOCKTM)
	private String autoUnlockTm;
	@Column(name = Columns.CUUSLOGINS_LOGINNA)
	private String loginNa;
	@Transient
	private Set<String> roleNames;
	@Transient
	private boolean disabled;

	/**
	 * 角色名称集合
	 * 
	 * @param roleNames
	 */
	public void setRoleNames(Set<String> roleNames) {
		this.roleNames = roleNames;
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
	 * @return 创建日期
	 */
	public Date getCrDtAt() {
		if (crDtAt == null && getCrDt() != null) {
			setCrDtAt(CuVars.getDateFormDb(getCrDt()));
		}
		return crDtAt;
	}

	public void setCrDtAt(Date crDtAt) {
		this.crDtAt = crDtAt;
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
	 * @return 最后更新日期
	 */
	public Date getLaUpDtAt() {
		if (laUpDtAt == null && getLaUpDt() != null) {
			setLaUpDtAt(CuVars.getDateFormDb(getLaUpDt()));
		}
		return laUpDtAt;
	}

	public void setLaUpDtAt(Date laUpDtAt) {
		this.laUpDtAt = laUpDtAt;
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

	/**
	 * @return 状态<br>
	 *         CS 初始<br>
	 *         JH 激活<br>
	 *         参见 通用字典 状态分类28
	 */
	public String getSt() {
		return st;
	}

	public void setSt(String st) {
		this.st = st;
	}

	/**
	 * @return 密码
	 */
	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	/**
	 * @return 是否密码过期
	 */
	public String getPwdOvYn() {
		return pwdOvYn;
	}

	public void setPwdOvYn(String pwdOvYn) {
		this.pwdOvYn = pwdOvYn;
	}

	/**
	 * @return 密码盐
	 */
	public String getPwdSalt() {
		return pwdSalt;
	}

	public void setPwdSalt(String pwdSalt) {
		this.pwdSalt = pwdSalt;
	}

	/**
	 * @return 用户是否锁定
	 */
	public String getUsLockYn() {
		return usLockYn;
	}

	public void setUsLockYn(String usLockYn) {
		this.usLockYn = usLockYn;
	}

	/**
	 * @return 上次更改密码日期
	 */
	public String getPrevChPwdDt() {
		return prevChPwdDt;
	}

	public void setPrevChPwdDt(String prevChPwdDt) {
		this.prevChPwdDt = prevChPwdDt;
	}

	/**
	 * @return 上次更改密码日期
	 */
	public Date getPrevChPwdDtAt() {
		if (prevChPwdDtAt == null && getPrevChPwdDt() != null) {
			setPrevChPwdDtAt(CuVars.getDateFormDb(getPrevChPwdDt()));
		}
		return prevChPwdDtAt;
	}

	public void setPrevChPwdDtAt(Date prevChPwdDtAt) {
		this.prevChPwdDtAt = prevChPwdDtAt;
	}

	/**
	 * @return 下次更改密码日期
	 */
	public String getNextChPwdDt() {
		return nextChPwdDt;
	}

	public void setNextChPwdDt(String nextChPwdDt) {
		this.nextChPwdDt = nextChPwdDt;
	}

	/**
	 * @return 下次更改密码日期
	 */
	public Date getNextChPwdDtAt() {
		if (nextChPwdDtAt == null && getNextChPwdDt() != null) {
			setNextChPwdDtAt(CuVars.getDateFormDb(getNextChPwdDt()));
		}
		return nextChPwdDtAt;
	}

	public void setNextChPwdDtAt(Date nextChPwdDtAt) {
		this.nextChPwdDtAt = nextChPwdDtAt;
	}

	/**
	 * @return 登录错误次数
	 */
	public Integer getLoginErrQt() {
		return loginErrQt;
	}

	public void setLoginErrQt(Integer loginErrQt) {
		this.loginErrQt = loginErrQt;
	}

	/**
	 * @return 上次锁定日期
	 */
	public String getLockDt() {
		return lockDt;
	}

	public void setLockDt(String lockDt) {
		this.lockDt = lockDt;
	}

	/**
	 * @return 上次锁定日期
	 */
	public Date getLockDtAt() {
		if (lockDtAt == null && getLockDt() != null) {
			setLockDtAt(CuVars.getDateFormDb(getLockDt()));
		}
		return lockDtAt;
	}

	public void setLockDtAt(Date lockDtAt) {
		this.lockDtAt = lockDtAt;
	}

	/**
	 * @return 锁定时间
	 */
	public String getLockTm() {
		return lockTm;
	}

	public void setLockTm(String lockTm) {
		this.lockTm = lockTm;
	}

	/**
	 * @return 自动解锁日期<br>
	 */
	public String getAutoUnlockDt() {
		return autoUnlockDt;
	}

	public void setAutoUnlockDt(String autoUnlockDt) {
		this.autoUnlockDt = autoUnlockDt;
	}

	/**
	 * @return 自动解锁日期<br>
	 */
	public Date getAutoUnlockDtAt() {
		if (autoUnlockDtAt == null && getAutoUnlockDt() != null) {
			setAutoUnlockDtAt(CuVars.getDateFormDb(getAutoUnlockDt()));
		}
		return autoUnlockDtAt;
	}

	public void setAutoUnlockDtAt(Date autoUnlockDtAt) {
		this.autoUnlockDtAt = autoUnlockDtAt;
	}

	/**
	 * @return 自动解锁时间
	 */
	public String getAutoUnlockTm() {
		return autoUnlockTm;
	}

	public void setAutoUnlockTm(String autoUnlockTm) {
		this.autoUnlockTm = autoUnlockTm;
	}

	/**
	 * @return 登录名
	 */
	public void setLoginNa(String loginNa) {
		this.loginNa = loginNa;
	}

	public String getLoginNa() {
		return loginNa;
	}

	@Override
	public boolean isDisabled() {
		boolean res = true;
		if (st.equals("JH")) {
			res = false;
		}
		setDisabled(res);
		return disabled;
	}

	/**
	 * 用户是否可用
	 * 
	 * @param disabled
	 */
	public void setDisabled(boolean disabled) {
		this.disabled = disabled;
	}

	@Override
	public String getLoginName() {
		return loginNa;
	}

	@Override
	public String getPassword() {
		return pwd;
	}

	@Override
	public Set<String> getRoleNames() {
		return roleNames;
	}

	@Override
	public Set<String> getPermissionNames() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getSalt() {
		return pwdSalt;
	}
}
