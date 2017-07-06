<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
   //合同签订贷款信息：
   app.pathArray=[
         {"code":"singed_contract","flag": <spring:eval expression="@FN_CB.checkPath('/cb/pushContractInfoToCs/')" />},
          {"code":"printPreview","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapplycontract/print/')" />},
           {"code":"nextPage","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapplyExamSignContract/update')" />}
       ];
	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
	app.loanUseCodeList =app.dicts.dict_137; /*贷款用途*/
	app.paymentMethodIdList=app.dicts.dict_37;/*还款类型*/
	app.papersTypeCodeList = app.dicts.dict_17;   /*证件类型代码*/
	app.matColCd = app.dicts.dict_122;   /*材料收集代码*/
	app.matTyCd = app.dicts.dict_52;   /*材料类型代码*/
	app.matPhCd = app.dicts.dict_51;   /*收取阶段代码*/
	app.feeTypeCodeList=app.dicts.dict_1;		/*费用类型*/
	app.paymentTypeList=app.dicts.dict_2;		/*费用收取类型*/
	app.useCodeList=app.dicts.dict_65;		/*账号用途*/
}(window.jQuery, window.app);	
 
  +function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'business-processing',
        dt: {
            text: '业务办理',
            url: '#'
        },
        dd: [
            {
                text: '贷款申请处理',
                url: '#'
            },
            {
                text: '合同签订',
                url: '/cb/contract/contract-list.html'
            },
            {
                text: '贷款信息',
                url: '/cb/contract/contract-signing.html'
            }
        ]
    };
  

}(window.jQuery, window.app);


