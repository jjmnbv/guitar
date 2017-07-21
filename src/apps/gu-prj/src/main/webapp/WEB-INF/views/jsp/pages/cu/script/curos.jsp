<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};
/**
 * 数据模拟
 */
+function ($, app) {
  /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统配置',
            url: '#'
        },
        dd: [
             {
            text: '组织机构',
            url: '#'
            },
            {
                text: '角色管理',
                url: '/cu/role-management/role-management-list.html'
            }
        ]
    };
     /**
    * 引用地址:/script/curos
    * 状态：st
    */
  app.pathArray=[
  		{"code":"add" ,"flag":<spring:eval expression="@FN_CU.checkPath('/cu/curos/create')" /> },
	    {"code":"update","flag": <spring:eval expression="@FN_CU.checkPath('/cu/curos/update')" />},
	    {"code":"delete","flag": <spring:eval expression="@FN_CU.checkPath('/cu/curos/remove/*')" />},
	    {"code":"active","flag": <spring:eval expression="@FN_CU.checkPath('/cu/curos/updateJH/*')" />},
	    {"code":"deActive","flag": <spring:eval expression="@FN_CU.checkPath('/cu/curos/updateSX/*')" />}
    ];
  app.st = app.dicts.dict_28;
  $(function () {
     $(".loaderSel").selectloader(app);
    $('.main-page').pagination({
      "first-store": {
        "page": <spring:eval expression="@FN_CU.toJSON(page)" />
      }
    });
  });
}(window.jQuery, window.app);