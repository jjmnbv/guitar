<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
app.pathArray=[

    ];
	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
	app.loanUseCodeList =app.dicts.dict_137; /*贷款用途*/
	app.paymentMethodIdList=app.dicts.dict_37;/*还款类型*/
	app.papersTypeList = app.dicts.dict_17;   /*证件类型代码*/
	app.paymentFromList = app.dicts.dict_15;   /*还款来源*/
	app.homeLiveList = app.dicts.dict_12;   /*地址类型*/
	app.paymentMethodIdList=app.dicts.dict_41;/*还款方式*/
	app.makeloanmethodList=app.dicts.dict_125;/*放款方式*/
	app.paymentmethodList=app.dicts.dict_66;/*付款方式*/
	app.paydays=app.dicts.dict_62;/*每期还款日*/
	app.refuseCode=app.dicts.dict_150;/*拒绝代码*/
	app.activitiCode=app.dicts.dict_151;/*激活代码*/
	app.auditFlowTypeCodeList=app.dicts.dict_162; /*业务类型*/
	
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
   	icon: 'business-processing',
    dt: {
      text: '我的任务',
      url: '#'
    },
    dd: [
      {
        text: '待办任务 ',
        url: '#'
      }
    ]
  };
  
    $(function () {
     app.registerTextHelper('handleOpinion.opinionId', app.refuseCode, 'code', 'name');
    $('#mainPage').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CB.toJSON(page)" />
      }
    });
    
    
  });

} (window.jQuery, window.app);
