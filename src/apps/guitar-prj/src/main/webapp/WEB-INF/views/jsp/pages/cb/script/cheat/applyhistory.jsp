<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

window.app = window.app || {};

+function($, app) {

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
                text: '欺诈审批',
                url: '/cb/fraud-cognizance/fraud-list.html'
            },
            {
                text: '进件历史',
                url: '/cb/fraud-cognizance/fraud-history-into-pieces.html'
            }
        ]
    };
    
	
} (window.jQuery, window.app);

