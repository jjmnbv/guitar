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
                text: '电核比例',
                url: '/cs/tel-check-percent/check-percent-list.html'
            },
            {
                text: '设计-电核依据',
                url: '/cs/tel-check-percent/design-tel-check.html'
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();

    app.accordingTo=[
        {"code":"0","name":"产品"},
        {"code":"0","name":"门店"},
        {"code":"0","name":"渠道"}
    ];
}(window.jQuery, window.app);


