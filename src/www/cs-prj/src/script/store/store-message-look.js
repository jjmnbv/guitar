+function($, app){

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
                text: '门店详细信息查看',
                url: '/cs/store/store-message-look.html'
            }
        ]
    };

    app.storeItem={
        "cooNo":"009046",
        "cooNa":"中科柏诚",
        "cooKiCd":"卖场",
        "beDt":"2015-09-10",
        "enDt":"2017-12-10",
        "cooNatCd":"电器类",
        "sshzscooNa":"中科柏诚",
        "brNa":"业务部",
        "cuMaNa":"张三",
        "coNo":"20161130145152",
        "loDeaYn":"是",
        "provCd":"上海市",
        "cityCd":"市辖区",
        "distCd":"黄浦区",
        "adCa":"外滩十八号",
        "hzsTelNo":"15248625986",
        "hzsNa":"李雷",
        "hzsMoNo":"15314789658",
        "hzsMailNo":"15345792656@163.com",
        "acNa":"大卫",
        "acNo":"621700042000568",
        "acBankNo":"123535",
        "acBankNa":"中国银行",
        "acPaTyCd":"居民二代身份证",
        "acPaNo":"152627199603152268"
    }


}(window.jQuery,window.app);
