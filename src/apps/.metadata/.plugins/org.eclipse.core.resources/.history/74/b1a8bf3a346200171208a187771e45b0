<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>	
	
window.app = window.app || {};	
	
	
/**
 * 数据模拟
 */
+function ($, app) {
	// 电话回访审核项信息：
    app.pathArray=[
          {"code":"nextPage","flag": <spring:eval expression="@FN_CB.checkPath('/cb/callback/savetelcheck')" />}
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
                text: '贷款申请处理',
                url: '#'
            },
            {
                text: '电话回访',
                 url: '/cb/call-return-visit/return-visit-list.html'
            },
            {
                text: '电话回访',
                url: '#'
            }
        ]
    };
}(window.jQuery, window.app);