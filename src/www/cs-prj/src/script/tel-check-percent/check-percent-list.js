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
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    $('.page-content').find('.pagination-reload').click();

    app.checkDescribe=[
        {"code":"0","name":"现金产品贷"}
    ];
}(window.jQuery, window.app);

