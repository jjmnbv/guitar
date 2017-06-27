/**
 * 数据模拟
 */
+function ($, app) {
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
                text: '放款审查',
                url: '/cb/call-return-visit/loan-review-list.html'
            },
            {
                text: '审批信息',
                url: '/cb/call-return-visit/check-loan-information.html'
            }
        ]
    };

}(window.jQuery, window.app);