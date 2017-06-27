<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
	// 二级审批进件历史：
    app.pathArray=[
        ];
	app.loanKindCodeList =app.dicts.dict_44;
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
        text: '贷款申请历史',
        url: '#'
      }
    ]
  };

} (window.jQuery, window.app);
