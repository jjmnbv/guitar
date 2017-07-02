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
                text: '门店详细信息复制',
                url: '/cs/store/store-message-copy.html'
            }
        ]
    };

    app.storeItem={
        "cooNo":"009046",
        "cooNa":"中科柏诚",
        "cooKiCd":"0",
        "beDt":"2015-09-10",
        "enDt":"2017-12-10",
        "cooNatCd":"0",
        "sshzscooNa":"中科柏诚",
        "brNa":"业务部",
        "cuMaNa":"张三",
        "coNo":"20161130145152",
        "loDeaYn":"0",
        "provCd":"310000",
        "cityCd":"310100",
        "distCd":"310101",
        "adCa":"外滩18号",
        "hzsTelNo":"15248625986",
        "hzsNa":"李雷",
        "hzsMoNo":"15314789658",
        "hzsMailNo":"15345792656@163.com",
        "acNa":"大卫",
        "acNo":"621700042000568",
        "acBankNo":"123535",
        "acBankNa":"中国银行",
        "acPaTyCd":"1",
        "acPaNo":"152627199603152268"
    };

    $('#organizationId').click();
    $('#managerId').click();
    $('#belongPartner').click();

}(window.jQuery,window.app);
