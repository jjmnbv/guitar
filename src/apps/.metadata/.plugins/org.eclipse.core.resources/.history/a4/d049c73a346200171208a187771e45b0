<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {

	app.loanKindCodeList =app.dicts.dict_44; /*贷款分类*/
		 app.pathArray=[
      {"code":"guaQi","flag": <spring:eval expression="@FN_CB.checkPath('/bpm/cancel/fraud')" />},
      {"code":"jiHuo","flag": <spring:eval expression="@FN_CB.checkPath('/bpm/active/fraud')" />}  
    ];
	
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
        text: '欺诈认定',
        url: '/cb/fraud-cognizance/fraud-list.html'
      }
    ]
  };

} (window.jQuery, window.app);

