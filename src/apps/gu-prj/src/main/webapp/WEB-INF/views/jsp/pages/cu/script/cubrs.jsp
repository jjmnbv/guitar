<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};
/**
 * 数据模拟
 */
+function ($, app) {
  /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dr: string, dd: Array}}
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
            } ,
            {
                text: '机构管理',
                url: '/cu/organization-management/organization-management-list.html'
            }
            
        ]
    };
     /**
    * 引用地址:/script/cubrs
    * 状态：st
    * 上级机构：parentBrNo
    * 机构等级：brLevQt
    */
  app.pathArray=[
  		{"code":"add" ,"flag":<spring:eval expression="@FN_CU.checkPath('/cu/cubrs/create')" /> },
	    {"code":"update","flag": <spring:eval expression="@FN_CU.checkPath('/cu/cubrs/update')" />},
	    {"code":"delete","flag": <spring:eval expression="@FN_CU.checkPath('/cu/cubrs/remove/*')" />},
	    {"code":"active","flag": <spring:eval expression="@FN_CU.checkPath('/cu/cubrs/updatejh/*')" />},
	    {"code":"deActive","flag": <spring:eval expression="@FN_CU.checkPath('/cu/cubrs/updatesx/*')" />}
    ];
  app.parentBrNo=<spring:eval expression="@FN_CU.toJSON(checkCuBrSList)" />;
  app.brLevQt=[
        {"code":1,"name":"一级"},
        {"code":2,"name":"二级"},
        {"code":3,"name":"三级"},
    ]; 
    
  app.registerTextHelper('st', app.st, 'code', 'name');
  app.registerTextHelper('parentBrNo', app.parentBrNo, 'brNo', 'brNa');
  app.registerTextHelper('brLevQt', app.brLevQt, 'code', 'name');
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