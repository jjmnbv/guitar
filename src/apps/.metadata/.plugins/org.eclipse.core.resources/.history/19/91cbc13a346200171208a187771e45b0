<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
/*详情录入影像修改：*/
    app.pathArray=[
          {"code":"submitData","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapplymaterial/update')" />},
          {"code":"rollbackBtn","flag": <spring:eval expression="@FN_CB.checkPath('/workflow/rollbackwithcomment/rect3')" />}
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
        text: '贷款申请详情录入',
        url: '/cb/loan-application/detail-list.html'
      },
      {
        text: '影像信息',
        url: '#'
      }
    ]
  };

} (window.jQuery, window.app);
