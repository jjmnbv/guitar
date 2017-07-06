<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {

	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
	app.loanUseCodeList =app.dicts.dict_137; /*贷款用途*/
	app.paymentMethodIdList=app.dicts.dict_37;/*还款类型*/
	app.feeTypeCodeList=app.dicts.dict_1;		/*费用类型*/
	app.materialTypeCodeList=app.dicts.dict_52;/*材料类型代码*/
	app.marryCodeTypeList = app.dicts.dict_11;   /*婚姻状况代码*/
	app.papersTypeList = app.dicts.dict_17;   /*证件类型代码*/
	app.paymentFromList = app.dicts.dict_15;   /*还款来源*/
	app.homeLiveList = app.dicts.dict_12;   /*地址类型*/
	app.paymentMethodIdList=app.dicts.dict_41;/*还款方式*/
	app.makeloanmethodList=app.dicts.dict_125;/*放款方式*/
	app.paymentmethodList=app.dicts.dict_66;/*付款方式*/
	app.paydays=app.dicts.dict_62;/*每期还款日*/
	app.loanTypeList = '<%=request.getAttribute("loanType")%>';   /*贷款产品*/
	app.loanMakeLoanStatus=app.dicts.dict_64;/*放款状态*/
	app.registerTextHelper('loMlSt', app.loanMakeLoanStatus, 'code', 'name');
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
                text: '放款审查',
                url: '#'
            }
        ]
    };
 $(function () {
    $('.dictionarys').selectloader(app);
    $('#mainPage').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CB.toJSON(page)" />
      }
    });
  });

} (window.jQuery, window.app);

