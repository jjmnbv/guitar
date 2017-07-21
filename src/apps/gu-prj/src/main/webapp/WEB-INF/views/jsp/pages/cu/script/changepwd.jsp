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
                text: '修改登录密码',
                url: '/cu/personal-settings/update-password.html'
            }
        ]
    };
    

}(window.jQuery, window.app);