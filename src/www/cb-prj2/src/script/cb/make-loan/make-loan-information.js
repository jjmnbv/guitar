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
                text: '放款',
                url: '/cb/make-loan/make-loan-list.html'
            },
            {
                text: '贷款信息',
                url: '/cb/make-loan/make-loan-information.html'
            }
        ]
    };

}(window.jQuery, window.app);