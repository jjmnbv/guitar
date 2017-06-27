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
            },
            {
                text: '新增佣金配置',
                url: '/cs/brokerage-config/add-brokerage-config.html'
            }
        ]
    };
    app.baseCodeItem=[
        {"baseCodeCd":"0","baseCodeName":"累计笔数"},
        {"baseCodeCd":"1","baseCodeName":"累计贷款金额"}
    ];
    app.codeItem=[
        {"codeCd":"0","codeName":"固定"},
        {"codeCd":"1","codeName":"阶梯"}
    ];
    app.subCodeItem=[
        {"subCodeCd":"0","subCodeName":"按固定金额"},
        {"subCodeCd":"1","subCodeName":"按比例"}
    ];


}(window.jQuery, window.app);

