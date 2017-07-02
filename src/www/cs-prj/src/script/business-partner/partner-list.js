+function ($, app) {
    app.stList = [
        {"code": "0", "name": "初始"},
        {"code": "1", "name": "暂停"},
        {"code": "2", "name": "激活"},
    ];
    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '首页',
            url: '/index.html'
        },
        dd: [
            {
                text: '合作商管理',
                url: '/cs/partner-list.html'
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();
}(window.jQuery, window.app);

