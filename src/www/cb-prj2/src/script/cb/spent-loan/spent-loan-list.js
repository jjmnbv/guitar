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
                text: '用款申请',
                url: '/cb/spent-loan/spent-loan-list.html'
            }
        ]
    };
    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();
}(window.jQuery, window.app);