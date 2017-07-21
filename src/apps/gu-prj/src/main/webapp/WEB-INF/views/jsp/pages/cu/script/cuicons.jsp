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
        text: '菜单图标管理',
        url: '/cu/menu-picture/menu-picture-list.html'
      }
    ]
  };
  app.pathArray=[
  		{"code":"add" ,"flag":<spring:eval expression="@FN_CU.checkPath('/cu/cuicons/create')" /> },
	    {"code":"update","flag": <spring:eval expression="@FN_CU.checkPath('/cu/cuicons/update/*')" />},
	    {"code":"delete","flag": <spring:eval expression="@FN_CU.checkPath('/cu/cuicons/remove/*')" />}
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

