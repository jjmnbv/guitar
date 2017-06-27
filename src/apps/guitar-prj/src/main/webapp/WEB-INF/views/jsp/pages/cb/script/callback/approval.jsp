<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>	
	
window.app = window.app || {};	
	
	
/**
 * 数据模拟
 */
+function ($, app) {
      //电话回访审批信息：
    app.pathArray=[
          {"code":"submitB","flag": <spring:eval expression="@FN_CB.checkPath('/workflow/manualcommityn/rect8')" />}
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
                text: '审批信息',
                url: '#'
            }
        ]
    };

}(window.jQuery, window.app);