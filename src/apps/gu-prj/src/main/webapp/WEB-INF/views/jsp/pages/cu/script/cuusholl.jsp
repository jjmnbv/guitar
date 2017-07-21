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
            text: '个人工作台',
            url: '#'
            
        },
        dd: [
            {
            text: '个人设置',
            url: '#'
            
            },
            {
                text: '请假登记',
                url: '/cu/personal-settings/leave-registration-list.html'
            }
        ]
    };
     /**
    * 引用地址:/script/cuusholl
    * 请假类别：holCd
    */
  app.pathArray=[
  		{"code":"add" ,"flag":<spring:eval expression="@FN_CU.checkPath('/cu/cuusholl/create')" /> },
	    {"code":"update","flag": <spring:eval expression="@FN_CU.checkPath('/cu/cuusholl/update')" />}
    ];
  app.save=<spring:eval expression="@FN_CU.checkPath('/cu/cuusholl/create')" />;
  app.update=<spring:eval expression="@FN_CU.checkPath('/cu/cuusholl/update')" />;
  app.holCd=[
            {"code": "XJ", "name": "倒休"},
            {"code": "NJ", "name": "年假"},
            {"code": "BJ", "name": "病假"},
            {"code": "SJ", "name": "事假"},
            {"code": "QT", "name": "其它"}
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