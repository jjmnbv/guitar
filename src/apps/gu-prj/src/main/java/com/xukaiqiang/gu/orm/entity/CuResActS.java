package com.xukaiqiang.gu.orm.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.Version;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.orm.dialect.AbstractCuResActS;
import com.xukaiqiang.gu.orm.dialect.Schema.Tables;
import com.xukaiqiang.gu.orm.entity.id.CuResActSId;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 资源操作配置
 *
 */
@Entity
@Table(name = Tables.CURESACTS)
public class CuResActS extends AbstractCuResActS implements Serializable {
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private CuResActSId cuResActSId;

	@Transient
	private String resNo;
	@Transient
	private Short suId;
    @Version
	@Column(name = Columns.CURESACTS_VE)
	private Integer ve;
	@Column(name = Columns.CURESACTS_URL)
	private String url;
	@Column(name = Columns.CURESACTS_RESACTCD)
	private String resActCd;
	@Column(name = Columns.CURESACTS_RESACTCA)
	private String resActCa;
	@Column(name = Columns.CURESACTS_CRDT)
	private String crDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date crDtAt;
	@Column(name = Columns.CURESACTS_LAUPDT)
	private String laUpDt;
	@Transient
	@JsonFormat(locale = CuVars.JSON_FMT_LOCALE, timezone = CuVars.JSON_FMT_TIMEZONE, pattern = CuVars.FORM_FMT_DATE)
	private Date laUpDtAt;
	@Column(name = Columns.CURESACTS_LAUPUSID)
	private Long laUpUsId;
	@Transient
	private List<CuResActS> cuResActS;
	@Column(name = Columns.CURESACTS_DEFRIYN)
	private String defRiYn;
	/**
	 * 是否预授权
	 * @return
	 */
	public String getDefRiYn() {
		return defRiYn;
	}
	/**
	 * 是否预授权
	 * @param defRiYn
	 */
	public void setDefRiYn(String defRiYn) {
		this.defRiYn = defRiYn;
	}
	/**
	 * 批量资源
	 * @return
	 */
	public List<CuResActS> getCuResActS() {
		return cuResActS;
	}
	/**
	 * 批量资源
	 * @param cuResActS
	 */
	public void setCuResActS(List<CuResActS> cuResActS) {
		this.cuResActS = cuResActS;
	}

	/**
	 * @return 主键
	 */
	public CuResActSId getCuResActSId() {
		return cuResActSId;
	}

	/**
	 * 主键
	 *
	 * @param cuResActSId
	 */
	public void setCuResActSId(CuResActSId cuResActSId) {
		this.cuResActSId = cuResActSId;
	}

	/**
	 * @return 资源编号
	 */
	public String getResNo() {
		if(resNo == null && getCuResActSId() != null) {
			resNo = getCuResActSId().getResNo();
		}
		return resNo;
	}

	/**
	 * 资源编号
	 *
	 * @param resNo
	 */
	public void setResNo(String resNo) {
		if(resNo != null) {
			if(getCuResActSId() == null) {
				setCuResActSId(new CuResActSId());
			}
			getCuResActSId().setResNo(resNo);
		}
		this.resNo = resNo;
	}
	/**
	 * @return 子序号
	 */
	public Short getSuId() {
		if(suId == null && getCuResActSId() != null) {
			suId = getCuResActSId().getSuId();
		}
		return suId;
	}

	/**
	 * 子序号
	 *
	 * @param suId
	 */
	public void setSuId(Short suId) {
		if(suId != null) {
			if(getCuResActSId() == null) {
				setCuResActSId(new CuResActSId());
			}
			getCuResActSId().setSuId(suId);
		}
		this.suId = suId;
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
	 * @return url地址
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * url地址
	 *
	 * @param url
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return 资源动作码<br>ZJ 增加<br>XG 修改<br>SC 删除<br>CX 查询<br>FW 访问<br>参见字典分类代码：70
	 */
	public String getResActCd() {
		return resActCd;
	}

	/**
	 * 资源动作码<br>ZJ 增加<br>XG 修改<br>SC 删除<br>CX 查询<br>FW 访问<br>参见字典分类代码：70
	 *
	 * @param resActCd
	 */
	public void setResActCd(String resActCd) {
		this.resActCd = resActCd;
	}

	/**
	 * @return 资源动作中文
	 */
	public String getResActCa() {
		return resActCa;
	}

	/**
	 * 资源动作中文
	 *
	 * @param resActCa
	 */
	public void setResActCa(String resActCa) {
		this.resActCa = resActCa;
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
	 * @return 最后更新日期
	 */
	public String getLaUpDt() {
		return laUpDt;
	}

	/**
	 * 最后更新日期
	 *
	 * @param laUpDt
	 */
	public void setLaUpDt(String laUpDt) {
		this.laUpDt = laUpDt;
	}

	/**
	 * @return 最后更新日期
	 */
	public Date getLaUpDtAt() {
		if(laUpDtAt == null && getLaUpDt() != null) {
			setLaUpDtAt(CuVars.getDateFormDb(getLaUpDt()));
		}
		return laUpDtAt;
	}

	/**
	 * 最后更新日期
	 *
	 * @param laUpDtAt
	 */
	public void setLaUpDtAt(Date laUpDtAt) {
		this.laUpDtAt = laUpDtAt;
	}

	/**
	 * @return 最新更新用户
	 */
	public Long getLaUpUsId() {
		return laUpUsId;
	}

	/**
	 * 最新更新用户
	 *
	 * @param laUpUsId
	 */
	public void setLaUpUsId(Long laUpUsId) {
		this.laUpUsId = laUpUsId;
	}

}
