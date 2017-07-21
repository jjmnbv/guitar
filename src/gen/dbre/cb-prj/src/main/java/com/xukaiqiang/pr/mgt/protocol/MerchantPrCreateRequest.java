package com.xukaiqiang.pr.mgt.protocol;

import java.io.Serializable;

public class MerchantPrCreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String coId;
	private String annualTurnover;
	private String areaCode;
	private String attendance;
	private String averHourFee;
	private String branchNum;
	private String churnRate;
	private String coAbbNa;
	private String coAssId;
	private String coAttrCa;
	private String coAttrCd;
	private String coBuLicNo;
	private String coIndKiCa;
	private String coIndKiCd;
	private String coNa;
	private String coRuTyCa;
	private String coRuTyCd;
	private String complaintRate;
	private String coverageArea;
	private String cultureCycle;
	private String equipmentRatio;
	private String estYears;
	private String extNu;
	private String ggNa;
	private String growthRate;
	private String hostNu;
	private String legalPaNo;
	private String legalPeNa;
	private String operPassRate;
	private String personRatio;
	private String proportion;
	private String province;
	private String qualRate;
	private String registerCapial;
	private String retrainRate;
	private String returnRate;
	private String shareholderNa;
	private String shareholderPaNo;
	private String teachArea;
	private String teachGroundEnvir;
	private String teachGroundNature;
	private String testPassRate;
	private String trainIncome;
	private String trainNum;
	private String trainTimes;
	private String workYears;

	/**
	 * @return 
	 */
	public String getCoId() {
		return coId;
	}

	/**
	 * 
	 *
	 * @param coId
	 */
	public void setCoId(String coId) {
		this.coId = coId;
	}

	/**
	 * @return 年成交额
	 */
	public String getAnnualTurnover() {
		return annualTurnover;
	}

	/**
	 * 年成交额
	 *
	 * @param annualTurnover
	 */
	public void setAnnualTurnover(String annualTurnover) {
		this.annualTurnover = annualTurnover;
	}

	/**
	 * @return 商户电话-区号
	 */
	public String getAreaCode() {
		return areaCode;
	}

	/**
	 * 商户电话-区号
	 *
	 * @param areaCode
	 */
	public void setAreaCode(String areaCode) {
		this.areaCode = areaCode;
	}

	/**
	 * @return 学员出勤率
	 */
	public String getAttendance() {
		return attendance;
	}

	/**
	 * 学员出勤率
	 *
	 * @param attendance
	 */
	public void setAttendance(String attendance) {
		this.attendance = attendance;
	}

	/**
	 * @return 教师平均课时费
	 */
	public String getAverHourFee() {
		return averHourFee;
	}

	/**
	 * 教师平均课时费
	 *
	 * @param averHourFee
	 */
	public void setAverHourFee(String averHourFee) {
		this.averHourFee = averHourFee;
	}

	/**
	 * @return 分支机构总数
	 */
	public String getBranchNum() {
		return branchNum;
	}

	/**
	 * 分支机构总数
	 *
	 * @param branchNum
	 */
	public void setBranchNum(String branchNum) {
		this.branchNum = branchNum;
	}

	/**
	 * @return 教师流失率
	 */
	public String getChurnRate() {
		return churnRate;
	}

	/**
	 * 教师流失率
	 *
	 * @param churnRate
	 */
	public void setChurnRate(String churnRate) {
		this.churnRate = churnRate;
	}

	/**
	 * @return 商户简称
	 */
	public String getCoAbbNa() {
		return coAbbNa;
	}

	/**
	 * 商户简称
	 *
	 * @param coAbbNa
	 */
	public void setCoAbbNa(String coAbbNa) {
		this.coAbbNa = coAbbNa;
	}

	/**
	 * @return 商户id
	 */
	public String getCoAssId() {
		return coAssId;
	}

	/**
	 * 商户id
	 *
	 * @param coAssId
	 */
	public void setCoAssId(String coAssId) {
		this.coAssId = coAssId;
	}

	/**
	 * @return 公司属性名称
	 */
	public String getCoAttrCa() {
		return coAttrCa;
	}

	/**
	 * 公司属性名称
	 *
	 * @param coAttrCa
	 */
	public void setCoAttrCa(String coAttrCa) {
		this.coAttrCa = coAttrCa;
	}

	/**
	 * @return 公司属性编码
	 */
	public String getCoAttrCd() {
		return coAttrCd;
	}

	/**
	 * 公司属性编码
	 *
	 * @param coAttrCd
	 */
	public void setCoAttrCd(String coAttrCd) {
		this.coAttrCd = coAttrCd;
	}

	/**
	 * @return 商户证件编码
	 */
	public String getCoBuLicNo() {
		return coBuLicNo;
	}

	/**
	 * 商户证件编码
	 *
	 * @param coBuLicNo
	 */
	public void setCoBuLicNo(String coBuLicNo) {
		this.coBuLicNo = coBuLicNo;
	}

	/**
	 * @return 商户类型名称
	 */
	public String getCoIndKiCa() {
		return coIndKiCa;
	}

	/**
	 * 商户类型名称
	 *
	 * @param coIndKiCa
	 */
	public void setCoIndKiCa(String coIndKiCa) {
		this.coIndKiCa = coIndKiCa;
	}

	/**
	 * @return 商户类型编码
	 */
	public String getCoIndKiCd() {
		return coIndKiCd;
	}

	/**
	 * 商户类型编码
	 *
	 * @param coIndKiCd
	 */
	public void setCoIndKiCd(String coIndKiCd) {
		this.coIndKiCd = coIndKiCd;
	}

	/**
	 * @return 商户名称
	 */
	public String getCoNa() {
		return coNa;
	}

	/**
	 * 商户名称
	 *
	 * @param coNa
	 */
	public void setCoNa(String coNa) {
		this.coNa = coNa;
	}

	/**
	 * @return 经营方式名称
	 */
	public String getCoRuTyCa() {
		return coRuTyCa;
	}

	/**
	 * 经营方式名称
	 *
	 * @param coRuTyCa
	 */
	public void setCoRuTyCa(String coRuTyCa) {
		this.coRuTyCa = coRuTyCa;
	}

	/**
	 * @return 经营方式编码
	 */
	public String getCoRuTyCd() {
		return coRuTyCd;
	}

	/**
	 * 经营方式编码
	 *
	 * @param coRuTyCd
	 */
	public void setCoRuTyCd(String coRuTyCd) {
		this.coRuTyCd = coRuTyCd;
	}

	/**
	 * @return 学员投诉率
	 */
	public String getComplaintRate() {
		return complaintRate;
	}

	/**
	 * 学员投诉率
	 *
	 * @param complaintRate
	 */
	public void setComplaintRate(String complaintRate) {
		this.complaintRate = complaintRate;
	}

	/**
	 * @return 覆盖区域
	 */
	public String getCoverageArea() {
		return coverageArea;
	}

	/**
	 * 覆盖区域
	 *
	 * @param coverageArea
	 */
	public void setCoverageArea(String coverageArea) {
		this.coverageArea = coverageArea;
	}

	/**
	 * @return 
	 */
	public String getCultureCycle() {
		return cultureCycle;
	}

	/**
	 * 
	 *
	 * @param cultureCycle
	 */
	public void setCultureCycle(String cultureCycle) {
		this.cultureCycle = cultureCycle;
	}

	/**
	 * @return 教学设备配比
	 */
	public String getEquipmentRatio() {
		return equipmentRatio;
	}

	/**
	 * 教学设备配比
	 *
	 * @param equipmentRatio
	 */
	public void setEquipmentRatio(String equipmentRatio) {
		this.equipmentRatio = equipmentRatio;
	}

	/**
	 * @return 成立年限
	 */
	public String getEstYears() {
		return estYears;
	}

	/**
	 * 成立年限
	 *
	 * @param estYears
	 */
	public void setEstYears(String estYears) {
		this.estYears = estYears;
	}

	/**
	 * @return 商户电话-分机号码
	 */
	public String getExtNu() {
		return extNu;
	}

	/**
	 * 商户电话-分机号码
	 *
	 * @param extNu
	 */
	public void setExtNu(String extNu) {
		this.extNu = extNu;
	}

	/**
	 * @return 高管姓名
	 */
	public String getGgNa() {
		return ggNa;
	}

	/**
	 * 高管姓名
	 *
	 * @param ggNa
	 */
	public void setGgNa(String ggNa) {
		this.ggNa = ggNa;
	}

	/**
	 * @return 近3年招生增长率
	 */
	public String getGrowthRate() {
		return growthRate;
	}

	/**
	 * 近3年招生增长率
	 *
	 * @param growthRate
	 */
	public void setGrowthRate(String growthRate) {
		this.growthRate = growthRate;
	}

	/**
	 * @return 商户电话-主机号码
	 */
	public String getHostNu() {
		return hostNu;
	}

	/**
	 * 商户电话-主机号码
	 *
	 * @param hostNu
	 */
	public void setHostNu(String hostNu) {
		this.hostNu = hostNu;
	}

	/**
	 * @return 法人身份证号
	 */
	public String getLegalPaNo() {
		return legalPaNo;
	}

	/**
	 * 法人身份证号
	 *
	 * @param legalPaNo
	 */
	public void setLegalPaNo(String legalPaNo) {
		this.legalPaNo = legalPaNo;
	}

	/**
	 * @return 法人姓名
	 */
	public String getLegalPeNa() {
		return legalPeNa;
	}

	/**
	 * 法人姓名
	 *
	 * @param legalPeNa
	 */
	public void setLegalPeNa(String legalPeNa) {
		this.legalPeNa = legalPeNa;
	}

	/**
	 * @return 实操通过率
	 */
	public String getOperPassRate() {
		return operPassRate;
	}

	/**
	 * 实操通过率
	 *
	 * @param operPassRate
	 */
	public void setOperPassRate(String operPassRate) {
		this.operPassRate = operPassRate;
	}

	/**
	 * @return 教务员与讲师配比
	 */
	public String getPersonRatio() {
		return personRatio;
	}

	/**
	 * 教务员与讲师配比
	 *
	 * @param personRatio
	 */
	public void setPersonRatio(String personRatio) {
		this.personRatio = personRatio;
	}

	/**
	 * @return 讲师团队自有比例
	 */
	public String getProportion() {
		return proportion;
	}

	/**
	 * 讲师团队自有比例
	 *
	 * @param proportion
	 */
	public void setProportion(String proportion) {
		this.proportion = proportion;
	}

	/**
	 * @return 遍布省份
	 */
	public String getProvince() {
		return province;
	}

	/**
	 * 遍布省份
	 *
	 * @param province
	 */
	public void setProvince(String province) {
		this.province = province;
	}

	/**
	 * @return 抽样合格率
	 */
	public String getQualRate() {
		return qualRate;
	}

	/**
	 * 抽样合格率
	 *
	 * @param qualRate
	 */
	public void setQualRate(String qualRate) {
		this.qualRate = qualRate;
	}

	/**
	 * @return 注册资金
	 */
	public String getRegisterCapial() {
		return registerCapial;
	}

	/**
	 * 注册资金
	 *
	 * @param registerCapial
	 */
	public void setRegisterCapial(String registerCapial) {
		this.registerCapial = registerCapial;
	}

	/**
	 * @return 再培训频率
	 */
	public String getRetrainRate() {
		return retrainRate;
	}

	/**
	 * 再培训频率
	 *
	 * @param retrainRate
	 */
	public void setRetrainRate(String retrainRate) {
		this.retrainRate = retrainRate;
	}

	/**
	 * @return 退课率
	 */
	public String getReturnRate() {
		return returnRate;
	}

	/**
	 * 退课率
	 *
	 * @param returnRate
	 */
	public void setReturnRate(String returnRate) {
		this.returnRate = returnRate;
	}

	/**
	 * @return 主要股东姓名
	 */
	public String getShareholderNa() {
		return shareholderNa;
	}

	/**
	 * 主要股东姓名
	 *
	 * @param shareholderNa
	 */
	public void setShareholderNa(String shareholderNa) {
		this.shareholderNa = shareholderNa;
	}

	/**
	 * @return 主要股东身份证号码
	 */
	public String getShareholderPaNo() {
		return shareholderPaNo;
	}

	/**
	 * 主要股东身份证号码
	 *
	 * @param shareholderPaNo
	 */
	public void setShareholderPaNo(String shareholderPaNo) {
		this.shareholderPaNo = shareholderPaNo;
	}

	/**
	 * @return 教学面积
	 */
	public String getTeachArea() {
		return teachArea;
	}

	/**
	 * 教学面积
	 *
	 * @param teachArea
	 */
	public void setTeachArea(String teachArea) {
		this.teachArea = teachArea;
	}

	/**
	 * @return 教学场地环境
	 */
	public String getTeachGroundEnvir() {
		return teachGroundEnvir;
	}

	/**
	 * 教学场地环境
	 *
	 * @param teachGroundEnvir
	 */
	public void setTeachGroundEnvir(String teachGroundEnvir) {
		this.teachGroundEnvir = teachGroundEnvir;
	}

	/**
	 * @return 教学场地性质
	 */
	public String getTeachGroundNature() {
		return teachGroundNature;
	}

	/**
	 * 教学场地性质
	 *
	 * @param teachGroundNature
	 */
	public void setTeachGroundNature(String teachGroundNature) {
		this.teachGroundNature = teachGroundNature;
	}

	/**
	 * @return 测评通过率
	 */
	public String getTestPassRate() {
		return testPassRate;
	}

	/**
	 * 测评通过率
	 *
	 * @param testPassRate
	 */
	public void setTestPassRate(String testPassRate) {
		this.testPassRate = testPassRate;
	}

	/**
	 * @return 年培训收入
	 */
	public String getTrainIncome() {
		return trainIncome;
	}

	/**
	 * 年培训收入
	 *
	 * @param trainIncome
	 */
	public void setTrainIncome(String trainIncome) {
		this.trainIncome = trainIncome;
	}

	/**
	 * @return 年培训人数
	 */
	public String getTrainNum() {
		return trainNum;
	}

	/**
	 * 年培训人数
	 *
	 * @param trainNum
	 */
	public void setTrainNum(String trainNum) {
		this.trainNum = trainNum;
	}

	/**
	 * @return 学期内培训次数
	 */
	public String getTrainTimes() {
		return trainTimes;
	}

	/**
	 * 学期内培训次数
	 *
	 * @param trainTimes
	 */
	public void setTrainTimes(String trainTimes) {
		this.trainTimes = trainTimes;
	}

	/**
	 * @return 主讲老师平均授课年限
	 */
	public String getWorkYears() {
		return workYears;
	}

	/**
	 * 主讲老师平均授课年限
	 *
	 * @param workYears
	 */
	public void setWorkYears(String workYears) {
		this.workYears = workYears;
	}

}
