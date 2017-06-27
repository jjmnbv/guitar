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
                text: '电话回访',
                url: '/cb/call-return-visit/return-visit-list.html'
            },
            {
                text: '电话回访',
                url: '/cb/call-return-visit/call-return-visit.html'
            }
        ]
    };

}(window.jQuery, window.app);