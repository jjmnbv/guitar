+function($, app){
    app.classify=[
        {"cooKiCd":0,"cooKiCdName":"卖场"},
        {"cooKiCd":1,"cooKiCdName":"..."}
    ];
    app.industry=[
        {"cooNatCd":0,"cooNatCdName":"电器类"},
        {"cooNatCd":1,"cooNatCdName":"汽车类"}
    ];
    app.accountType=[
        {"acPaTyCd":0,"acPaTyCdName":"二代身份证"},
        {"acPaTyCd":1,"acPaTyCdName":"军官证"}
    ];
    app.userFlag=[
        {"code":"y","name":"是"},
        {"code":"n","name":"否"}
    ];

    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '首页',
            url: '/index.html'
        },
        dd: [
            {
                text: '门店管理',
                url: '/cs/store/store-list.html'
            },
            {
                text: '门店详细信息添加',
                url: '/cs/store/add-store.html'
            }
        ]
    };

    $('#organizationId').click();
    $('#managerId').click();
    $('#belongPartner').click();
}(window.jQuery,window.app);
