<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
	 app.processNodes=app.dicts.dict_84;/*流程节点*/
	 app.statusList=app.dicts.dict_9;/*状态*/  //***************错误，暂时没有字典项
	 //app.workOrderStatusList=app.dicts.dict_9;/*工单状态*///***************错误，暂时没有字典项 
	 //工单分配
	 app.pathArray=[
      {"code":"gongdanfenpei","flag": <spring:eval expression="@FN_CB.checkPath('/cb/workorder/ajax/manualWorkOrder/0')" />}
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
        text: '人工分单',
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
