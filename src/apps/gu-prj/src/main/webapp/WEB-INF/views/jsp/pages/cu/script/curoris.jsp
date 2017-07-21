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
		        text: '菜单管理',
		        url: '#'
             },
            {
                text: '权限管理',
                url: '/cu/auth-management/auth-management2.html'
            }
        ]
    };
     /**
    * 引用地址:/script/curoris
    * 状态：st
    */
  app.pathArray=[
  		{"code":"add" ,"flag":<spring:eval expression="@FN_CU.checkPath('/cu/curos/updatePermissions')" /> }
    ];
  app.resActCdList = app.dicts.dict_70;

}(window.jQuery, window.app);