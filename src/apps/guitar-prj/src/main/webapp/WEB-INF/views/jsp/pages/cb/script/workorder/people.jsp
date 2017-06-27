<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
	 app.processNodes=app.dicts.dict_84;/*流程节点*/
	 app.pathArray=[
      {"code":"gongdandiaopei","flag": <spring:eval expression="@FN_CB.checkPath('/cb/workorder/ajax/manualWorkOrder/1')" />}
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
        text: '人工调单',
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
