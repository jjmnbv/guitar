/**
 * 首屏数据模拟
 */
+function ($, app) {

    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '系统设置',
            url: '#'
        },
        dd: [
            {
                text: '产品相关',
                url: '#'
            },
            {
                text: '额度审批',
                url: '/cs/limit-examine/limit-examine-list.html'
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();

}(window.jQuery, window.app);

