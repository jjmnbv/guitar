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
                text: '佣金配置',
                url: '/cs/brokerage-config/brokerage-config-list.html'
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    $('.page-content').find('.pagination-reload').click();

}(window.jQuery, window.app);
