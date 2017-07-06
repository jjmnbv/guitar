<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>	
	
window.app = window.app || {};	
	
	
/**
 * 数据模拟
 */
+function ($, app) {
//  二级审批审核项信息：
    app.pathArray=[
          {"code":"nextPage","flag": <spring:eval expression="@FN_CB.checkPath('/cb/loanapplyExamFirst/update/two')" />}
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
                text: '二级审批',
                url: '/cb/two-levels-approval/two-levels-approval-list.html'
            },
            {
                text: '审核项信息',
                url: '#'
            }
        ]
    };
}(window.jQuery, window.app);