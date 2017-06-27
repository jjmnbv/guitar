+function ($, app) {
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '风险控制',
            url: '#'
        },
        dd: [
            {
                text: '贷前管理',
                url: '#'
            },
            {
                text: '外部黑名单',
                url: '#'
            },
            {
                text: '法院失信被执行名单',
                url: '#'
            }
        ]
    };
    app.ResActCd = [
        {"code":0,"name":"功能1"},
        {"code":1,"name":"功能2"},
        {"code":2,"name":"功能3"},
        {"code":3,"name":"功能4"},
        {"code":4,"name":"功能5"}
    ];
    $('#mainPage').find('.pagination-reload').click();

}(window.jQuery, window.app);