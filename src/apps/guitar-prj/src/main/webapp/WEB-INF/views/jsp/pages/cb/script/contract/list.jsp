<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {

	 app.pathArray=[
      {"code":"guaQi","flag": <spring:eval expression="@FN_CB.checkPath('/bpm/cancel/contract')" />},
      {"code":"jiHuo","flag": <spring:eval expression="@FN_CB.checkPath('/bpm/active/contract')" />}  
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
        text: '合同签订',
        url: '/cb/contract/contract-list.html'
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

