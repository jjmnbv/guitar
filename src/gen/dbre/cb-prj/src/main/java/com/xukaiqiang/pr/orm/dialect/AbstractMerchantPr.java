package com.xukaiqiang.pr.orm.dialect;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class AbstractMerchantPr implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = Columns.MERCHANTPR_COID)
	private Long coId;

	/**
	 * @return 
	 */
	public Long getCoId() {
		return coId;
	}

	public void setCoId(Long coId) {
		this.coId = coId;
	}

	/**
	 * 列名
	 */
	public static interface Columns {
		/**
		 * MERCHANTPR.COID
		 */
		public static final String MERCHANTPR_COID = "co_id";
		/**
		 * MERCHANTPR.ANNUALTURNOVER
		 */
		public static final String MERCHANTPR_ANNUALTURNOVER = "annual_turnover";
		/**
		 * MERCHANTPR.AREACODE
		 */
		public static final String MERCHANTPR_AREACODE = "area_code";
		/**
		 * MERCHANTPR.ATTENDANCE
		 */
		public static final String MERCHANTPR_ATTENDANCE = "attendance";
		/**
		 * MERCHANTPR.AVERHOURFEE
		 */
		public static final String MERCHANTPR_AVERHOURFEE = "aver_hour_fee";
		/**
		 * MERCHANTPR.BRANCHNUM
		 */
		public static final String MERCHANTPR_BRANCHNUM = "branch_num";
		/**
		 * MERCHANTPR.CHURNRATE
		 */
		public static final String MERCHANTPR_CHURNRATE = "churn_rate";
		/**
		 * MERCHANTPR.COABBNA
		 */
		public static final String MERCHANTPR_COABBNA = "co_abb_na";
		/**
		 * MERCHANTPR.COASSID
		 */
		public static final String MERCHANTPR_COASSID = "co_ass_id";
		/**
		 * MERCHANTPR.COATTRCA
		 */
		public static final String MERCHANTPR_COATTRCA = "co_attr_ca";
		/**
		 * MERCHANTPR.COATTRCD
		 */
		public static final String MERCHANTPR_COATTRCD = "co_attr_cd";
		/**
		 * MERCHANTPR.COBULICNO
		 */
		public static final String MERCHANTPR_COBULICNO = "co_bu_lic_no";
		/**
		 * MERCHANTPR.COINDKICA
		 */
		public static final String MERCHANTPR_COINDKICA = "co_ind_ki_ca";
		/**
		 * MERCHANTPR.COINDKICD
		 */
		public static final String MERCHANTPR_COINDKICD = "co_ind_ki_cd";
		/**
		 * MERCHANTPR.CONA
		 */
		public static final String MERCHANTPR_CONA = "co_na";
		/**
		 * MERCHANTPR.CORUTYCA
		 */
		public static final String MERCHANTPR_CORUTYCA = "co_ru_ty_ca";
		/**
		 * MERCHANTPR.CORUTYCD
		 */
		public static final String MERCHANTPR_CORUTYCD = "co_ru_ty_cd";
		/**
		 * MERCHANTPR.COMPLAINTRATE
		 */
		public static final String MERCHANTPR_COMPLAINTRATE = "complaint_rate";
		/**
		 * MERCHANTPR.COVERAGEAREA
		 */
		public static final String MERCHANTPR_COVERAGEAREA = "coverage_area";
		/**
		 * MERCHANTPR.CULTURECYCLE
		 */
		public static final String MERCHANTPR_CULTURECYCLE = "culture_cycle";
		/**
		 * MERCHANTPR.EQUIPMENTRATIO
		 */
		public static final String MERCHANTPR_EQUIPMENTRATIO = "equipment_ratio";
		/**
		 * MERCHANTPR.ESTYEARS
		 */
		public static final String MERCHANTPR_ESTYEARS = "est_years";
		/**
		 * MERCHANTPR.EXTNU
		 */
		public static final String MERCHANTPR_EXTNU = "ext_nu";
		/**
		 * MERCHANTPR.GGNA
		 */
		public static final String MERCHANTPR_GGNA = "gg_na";
		/**
		 * MERCHANTPR.GROWTHRATE
		 */
		public static final String MERCHANTPR_GROWTHRATE = "growth_rate";
		/**
		 * MERCHANTPR.HOSTNU
		 */
		public static final String MERCHANTPR_HOSTNU = "host_nu";
		/**
		 * MERCHANTPR.LEGALPANO
		 */
		public static final String MERCHANTPR_LEGALPANO = "legal_pa_no";
		/**
		 * MERCHANTPR.LEGALPENA
		 */
		public static final String MERCHANTPR_LEGALPENA = "legal_pe_na";
		/**
		 * MERCHANTPR.OPERPASSRATE
		 */
		public static final String MERCHANTPR_OPERPASSRATE = "oper_pass_rate";
		/**
		 * MERCHANTPR.PERSONRATIO
		 */
		public static final String MERCHANTPR_PERSONRATIO = "person_ratio";
		/**
		 * MERCHANTPR.PROPORTION
		 */
		public static final String MERCHANTPR_PROPORTION = "proportion";
		/**
		 * MERCHANTPR.PROVINCE
		 */
		public static final String MERCHANTPR_PROVINCE = "province";
		/**
		 * MERCHANTPR.QUALRATE
		 */
		public static final String MERCHANTPR_QUALRATE = "qual_rate";
		/**
		 * MERCHANTPR.REGISTERCAPIAL
		 */
		public static final String MERCHANTPR_REGISTERCAPIAL = "register_capial";
		/**
		 * MERCHANTPR.RETRAINRATE
		 */
		public static final String MERCHANTPR_RETRAINRATE = "retrain_rate";
		/**
		 * MERCHANTPR.RETURNRATE
		 */
		public static final String MERCHANTPR_RETURNRATE = "return_rate";
		/**
		 * MERCHANTPR.SHAREHOLDERNA
		 */
		public static final String MERCHANTPR_SHAREHOLDERNA = "shareholder_na";
		/**
		 * MERCHANTPR.SHAREHOLDERPANO
		 */
		public static final String MERCHANTPR_SHAREHOLDERPANO = "shareholder_pa_no";
		/**
		 * MERCHANTPR.TEACHAREA
		 */
		public static final String MERCHANTPR_TEACHAREA = "teach_area";
		/**
		 * MERCHANTPR.TEACHGROUNDENVIR
		 */
		public static final String MERCHANTPR_TEACHGROUNDENVIR = "teach_ground_envir";
		/**
		 * MERCHANTPR.TEACHGROUNDNATURE
		 */
		public static final String MERCHANTPR_TEACHGROUNDNATURE = "teach_ground_nature";
		/**
		 * MERCHANTPR.TESTPASSRATE
		 */
		public static final String MERCHANTPR_TESTPASSRATE = "test_pass_rate";
		/**
		 * MERCHANTPR.TRAININCOME
		 */
		public static final String MERCHANTPR_TRAININCOME = "train_income";
		/**
		 * MERCHANTPR.TRAINNUM
		 */
		public static final String MERCHANTPR_TRAINNUM = "train_num";
		/**
		 * MERCHANTPR.TRAINTIMES
		 */
		public static final String MERCHANTPR_TRAINTIMES = "train_times";
		/**
		 * MERCHANTPR.WORKYEARS
		 */
		public static final String MERCHANTPR_WORKYEARS = "work_years";
	}

}
