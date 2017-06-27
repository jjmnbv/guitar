<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
    //放款审查影像：
    app.pathArray=[
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
        text: '放款审查',
        url: '/cb/loan-review/loan-review-list.html'
      },
      {
        text: '影像信息',
        url: '#'
      }
    ]
  };

} (window.jQuery, window.app);
