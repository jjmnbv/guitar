+ function ($, app) {
  "use strict ";

	//var base = 'http://localhost:8082';
  $.extend(app, {
    // 实体信息

	CRRILOCUB_LIST: app.base+'/cr/crrilocub/list.json',
	CRRILOCUB_VIEW: app.base+'/cr/crrilocub/view/',
	//条件参数导出
	CRRILOCUB_EXPORT:app.base+'/cr/crrilocub/crrilocubExport',
	/*添加一个导出实体信息excel的方法start*/
	CRRILOCUB_EXPORTEXCEL:app.base+'/cr/crrilocub/crdiccExportExcel',
	/*添加一个导出实体信息excel的方法end*/
	/*添加一个导出申请信息的excel的方法start*/
	CRRIDLB_VIEWEXPORT:app.base+'/cr/crridlb/view/export',
	/*添加一个导出申请信息的excel的方法end*/
	/*添加一个贷款信息的excel的方法start*/
	CASHLOAN_VIEWEXPORT:app.base+'/cr/applyScoreReport/view/export',
	/*添加一个贷款信息信息的excel的方法end*/
	
	/*添加一个申请评分信息的excel的方法start*/
	CASHLOAN_APPLYEXPORT:app.base+'/cr/applyScoreReport/apply/export',
	/*添加一个申请评分信息信息的excel的方法end*/
	
    //业务申请信息
	CRRIDLB_LIST: app.base+'/cr/crridlb/list.json',
	CRRIDLB_VIEW: app.base+'/cr/crridlb/view/',
	CRRIDLB_EXPORT: app.base+'/cr/crridlb/crridlbExport',
//    BIZ_APPLICATION_INFO_LIST: app.base+'/cr/bizApplicationInfo/bizApplicationInfo.json',//mock
    
	
	//准入规则
	//检验规则
    VALIDATION_RULES_LIST: app.base+'/cr/accessRules/validationRules.json',
	//检验规则下载
    VALIDATION_RULES_EXPORT: app.base+'/cr/accessRules/validationRulesExport',
    //规则报告1
    RULE_REPORT_1_LIST: app.base+'/cr/accessRules/ruleReport1.json',
    //规则报告1导出
    RULE_REPORT1_EXPORT: app.base+'/cr/accessRules/ruleReport1Export',
    //规则报告2
    RULE_REPORT_2_LIST: app.base+'/cr/accessRules/ruleReport2.json',
    //规则报告2导出
    RULE_REPORT2_EXPORT: app.base+'/cr/accessRules/ruleReport2Export',
    //征信报告
    CREDIT_REPORT_LIST: app.base+'/cr/accessRules/creditReport.json',


    //现金贷
    CASHLOAN_LIST: app.base+'/cr/applyScoreReport/list.json',
    CASHLOAN_VIEW: app.base+'/cr/applyScoreReport/view/',
    CASHLOAN_EXPORT:app.base+'/cr/applyScoreReport/applyExport',
    //授信额度
    CREDITLIMIT_LIST: app.base+'/cr/creditLimit/creditLimit_list.json',
    CREDITLIMIT_VIEW: app.base+'/cr/creditLimit/creditLimit_view.json',

    //行为评分
    BEHAVIORGRADE_LIST: app.base+'/cr/behaviorGrade/behaviorGrade_list.json',
    BEHAVIORGRADE_VIEW: app.base+'/cr/behaviorGrade/behaviorGrade_view/',

    //贷前预警1
    PRELOANWARNING_LIST1: app.base+'/cr/earlyWarning/preLoanWarning1/list.json',
    PRELOANWARNING_VIEW1: app.base+'/cr/earlyWarning/preLoanWarning1/view/',
    PRELOANWARNING_EXPORT1: app.base+'/cr/earlyWarning/preLoanWarning1/export',
    /*新增一个导出预警信息的路径 start*/
    PRELOANWARNING1_EXPORT1: app.base+'/cr/earlyWarning/preLoanWarning1/export/export1',
    /*新增一个导出预警信息的路径 end*/
    //贷前预警2
    PRELOANWARNING_LIST2: app.base+'/cr/earlyWarning/preLoanWarning2/preLoanWarning_list.json',
    PRELOANWARNING_VIEW2: app.base+'/cr/earlyWarning/preLoanWarning2/preLoanWarning_view/',
    PRELOANWARNING_EXPORT2: app.base+'/cr/earlyWarning/preLoanWarning2/preloanwarning_export',
    //贷后预警
    AFTERLOANWARNING_LIST: app.base+'/cr/earlyWarning/afterLoanWarning/afterLoanWarning_list.json',
    AFTERLOANWARNING_VIEW: app.base+'/cr/earlyWarning/afterLoanWarning/afterLoanWarning_view/',
    
    //条件参数删除
    CRDICC_REMOVE:app.base+'/cr/crdicc/remove',
    //条件参数修改
    CRDICC_UPDATE:app.base+'/cr/crdicc/update',
    //条件参数新增
    CRDICC_CREATE:app.base+'/cr/crdicc/create/',
    //条件参数导出
    CRDICC_EXPORT:app.base+'/cr/crdicc/crdiccExport',
    
    //条件类型查询
    CRDICC_LIST: app.base+'/cr/riskParams/conditionParams/identifyTyp/list/',
    CRDICC_VIEW: app.base+'/cr/riskParams/conditionParams/identifyTyp/view/',
    
    
    //维度参数删除
    CRDIMC_REMOVE:app.base+'/cr/crdimc/remove',
    //维度参数修改
    CRDIMC_UPDATE:app.base+'/cr/crdimc/update',
    //维度参数新增
    CRDIMC_CREATE:app.base+'/cr/crdimc/create/',
    //维度参数导出
    CRDIMC_EXPORT:app.base+'/cr/crdimc/crdimcExport',
    //维度参数查询
    CRDIMC_LIST: app.base+'/cr/riskParams/dimensionParams/productTyp/list/',
    CRDIMC_VIEW: app.base+'/cr/riskParams/dimensionParams/productTyp/view/',
    
    //授信额度查询
    CREDIT_LIST: app.base+'/cr/creditLimit/creditLimit_list.json',
    
    //详情检查测试
    DETAIL_CHECK : app.base+'/cr/check/detailCheck',
    //详情检查测试
    ACTIVE_CHECK : app.base+'/cr/check/activeCheck',
    //详情检查测试
    CREDIT_CHECK : app.base+'/cr/check/creditCheck',
    
    
    
  });

  $('form').each(function () {
    if (!this.action) {
      return true;
    }

    var i = this.action.lastIndexOf('/');
    if (i == -1) {
      return true;
    }

    var path = this.action.substring(i + 1);
    if (!app[path]) {
      return true;
    }

    this.action = this.action.substring(0, i) + app[path];
  });

  $('[data-page-url]').each(function () {
    var pageUrl = $(this).data('pageUrl');
    if (!pageUrl) {
      return true;
    }

    var i = pageUrl.lastIndexOf('/');
    if (i == -1) {
      return true;
    }

    var path = pageUrl.substring(i + 1);
    if (!app[path]) {
      return true;
    }

    $(this).data('pageUrl', pageUrl.substring(0, i) + app[path]);
  });

} (window.jQuery, window.app);