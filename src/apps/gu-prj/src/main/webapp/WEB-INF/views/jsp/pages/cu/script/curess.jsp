<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
    dt: {
      text: '系统配置',
      url: '#'
    },
    dd: [
     {
      text: '菜单管理',
      url: '#'
      },
      {
        text: '菜单配置',
        url: '/cu/menu-management/menu-management.html'
      }
    ]
  };
   /**
    * 所属系统：resSyCdNames
    * 菜单图标：cuIconSNames
    */
  app.pathArray=[
  		{"code":"add" ,"flag":<spring:eval expression="@FN_CU.checkPath('/cu/curesacts/create')" /> },
	    {"code":"update","flag": <spring:eval expression="@FN_CU.checkPath('/cu/curess/update')" />},
	    {"code":"delete","flag": <spring:eval expression="@FN_CU.checkPath('/cu/curesacts/remove/*/*')" />}
    ];
 
  app.resSyCdNames=<spring:eval expression="@FN_CU.toJSON(resSyCdNames)" />;
  app.cuIconSNames=<spring:eval expression="@FN_CU.toJSON(cuIconSNames)" />;
  $('#mainPage').find('.pagination-reload').click();
   app.pageMarkYn=[
        {"code":"N","name":"否"},
        {"code":"Y","name":"是"},
    ];
    app.defRiYn=[
        {"code":"Y","name":"是"},
        {"code":"N","name":"否"},
    ]; 
  $(function () {
     $(".loaderSel").selectloader(app);
    $('.main-page').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CU.toJSON(page)" />
      }
    });
  });
}(window.jQuery, window.app);

