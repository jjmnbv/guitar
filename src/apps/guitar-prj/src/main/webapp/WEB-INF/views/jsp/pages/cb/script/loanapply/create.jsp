<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
//简要录入添加：
app.pathArray=[
      {"code":"saveData" ,"flag":<spring:eval expression="@FN_CB.checkPath('/cb/loanapply/create')" /> },
      {"code":"submitData","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapply/create')" />}
    ];
	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
	app.loanUseCodeList =app.dicts.dict_137; /*贷款用途*/
	app.paymentMethodIdList=app.dicts.dict_37;/*还款类型*/
	app.feeTypeCodeList=app.dicts.dict_1;		/*费用类型*/
	app.materialTypeCodeList=app.dicts.dict_52;/*材料类型代码*/
	app.marryCodeTypeList = app.dicts.dict_11;   /*婚姻状况代码*/
	app.papersTypeList = app.dicts.dict_17;   /*证件类型代码*/
	app.paymentFromList = app.dicts.dict_15;   /*还款来源*/
	app.homeLiveList = app.dicts.dict_12;   /*地址类型*/
	app.relationshipList = app.dicts.dict_16;   /*于申请人关系*/
	app.educationalNameCodeList = app.dicts.dict_73;   /*学历性质*/
	app.educationalCodeList = app.dicts.dict_13;   /*学历代码*/
	
	app.corporationPropertyList = app.dicts.dict_14;   /*工作单位性质代码*/
	app.workPropertyList = app.dicts.dict_68;   /*工作性质代码*/
	app.positionList = app.dicts.dict_20;   /*职位代码*/
	app.industryCodeList = app.dicts.dict_22;   /*行业代码*/
	app.housingPropertyList = app.dicts.dict_12;   /*住房类型*/
	app.wageDateList = $.parseJSON(aa());
	
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
        text: '贷款申请处理 ',
        url: '#'
      },
      {
        text: '贷款申请简要录入',
        url: '/cb/loan-application/brief-entry.html'
      },
      {
        text: '新增',
        url: '#'
      }
    ]
  };

} (window.jQuery, window.app);


function aa(){
		var jsonTemp = '[';
		for(var i = 1;i<=31;i++){
			if(i == 1){
				jsonTemp += '{"name":"'+i+'","code":"'+i+'"}';
			}else{
				jsonTemp += ',{"name":"'+i+'","code":"'+i+'"}';
			}
		}
		jsonTemp += ']';
		return jsonTemp;
	}