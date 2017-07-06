<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {

	app.pathArray=[
      {"code":"update","flag": <spring:eval expression="@FN_CB.checkPath('/cb/applymoney/viewAll/*')" />}
    ];
	app.loMlStList =app.dicts.dict_64; /*放款状态*/
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
        text: '用款申请',
        url: '/cb/spent-loan/spent-loan-list.html'
      }
    ]
  };
    $(function () {
    //翻译产品类型
    app.registerTextHelper('loMlSt', app.loMlStList, 'code', 'name');
    $('.dictionarys').selectloader(app);
    $('#mainPage').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CB.toJSON(page)" />
      }
    });
  });
} (window.jQuery, window.app);

