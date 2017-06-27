<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
  //二级审批贷款信息：
  app.pathArray=[
        {"code":"saveData","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapplyExamFirst/update/two')" />}
      ];
	app.loanKindCodeList =app.dicts.dict_44;
	app.loanUseCodeList =app.dicts.dict_137;
	app.paymentMethodIdList=app.dicts.dict_37;
	app.feeTypeCodeList=app.dicts.dict_1;
	app.materialTypeCodeList=app.dicts.dict_52;
	app.goodsTypeList=app.dicts.dict_138;
	app.loanTypeList = '<%=request.getAttribute("loanType")%>';   /*贷款产品*/
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
        text: '二级审批',
        url: '/cb/two-levels-approval/two-levels-approval-list.html'
      },
      {
        text: '贷款信息',
        url: '/cb/two-levels-approval/two-loan-information.html'
      }
    ]
  };

} (window.jQuery, window.app);

