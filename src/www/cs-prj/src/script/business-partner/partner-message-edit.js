+function($, app){
    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '首页',
            url: '/index.html'
        },
        dd: [
            {
                text: '合作商管理',
                url: '/cs/business-partner/partner-list.html'
            },
            {
                text: '合作商详细信息编辑',
                url: '/cs/business-partner/partner-message-edit.html'
            }
        ]
    };

    app.classify=[
        {"cooKiCd":0,"cooKiCdName":"CS 超市"},
        {"cooKiCd":1,"cooKiCdName":"MC 卖场"},
        {"cooKiCd":2,"cooKiCdName":"DS 电商"},
        {"cooKiCd":3,"cooKiCdName":"QT 其他"}
    ];
    app.industry=[
        {"cooNatCd":0,"cooNatCdName":"旅游类"},
        {"cooNatCd":1,"cooNatCdName":"教育类"},
        {"cooNatCd":2,"cooNatCdName":"电器类"},
        {"cooNatCd":3,"cooNatCdName":"汽车类"}
    ];
    app.closeAccount=[
        {"comiSetlDa":0,"comiSetlDatName":1},
        {"comiSetlDa":1,"comiSetlDatName":2},
        {"comiSetlDa":2,"comiSetlDatName":3},
        {"comiSetlDa":3,"comiSetlDatName":4},
        {"comiSetlDa":4,"comiSetlDatName":5},
        {"comiSetlDa":5,"comiSetlDatName":6},
        {"comiSetlDa":6,"comiSetlDatName":7},
        {"comiSetlDa":7,"comiSetlDatName":8},
        {"comiSetlDa":8,"comiSetlDatName":9},
        {"comiSetlDa":9,"comiSetlDatName":10},
        {"comiSetlDa":10,"comiSetlDatName":11},
        {"comiSetlDa":11,"comiSetlDatName":12},
        {"comiSetlDa":12,"comiSetlDatName":13},
        {"comiSetlDa":13,"comiSetlDatName":"..."}
    ];
    app.finalType=[
        {"comiPuCd":0,"comiPuCdName":"月"},
        {"comiPuCd":1,"comiPuCdName":"季度"}
    ];
    app.program=[
        {"comiId":0,"comiIdName":"方案一 费率×"},
        {"comiId":1,"comiIdName":"方案二 费率×"}
    ];
    app.accountType=[
        {"acPaTyCd":0,"acPaTyCdName":"二代身份证"},
        {"acPaTyCd":1,"acPaTyCdName":"军官证"}
    ];
    app.accountUse=[
        {"acUsCd":0,"acUsCdName":"HK"},
        {"acUsCd":1,"acUsCdName":"SK"},
        {"acUsCd":2,"acUsCdName":"..."}
    ];
    app.accountTpye=[
        {"acTyCd":0,"acTyCdName":"GR"},
        {"acTyCd":1,"acTyCdName":"HR"},
        {"acTyCd":2,"acTyCdName":"..."}
    ];


    app.listItem={
        "cooNo":"1001",
        "cooNa":"阿里巴巴",
        "cooKiCd":"2",
        "beDt":"2016-07-18",
        "enDt":"2018-02-15",
        "cooNatCd":"2",
        "comiSetlDa":"8",
        "comiPuCd":"1",
        "comiId":"1",
        "brNa":"政府",
        "cuMaNa":"李四",
        "guFeAm":20000,
        "provCd":"310000",
        "cityCd":"310100",
        "distCd":"310101",
        "adCa":"外滩18号",
        "postNo":"013650",
        "hzsMoNo":"15124782563",
        "hzsMailNo":"15124782563@163.com",
        "ywzgNa":"张二喜",
        "ywzgMoNo":"15245684526",
        "ywzgMailNo":"15245684526@163.com",
        "ywdbrNa":"玛丽莲",
        "ywdbrNo":"13245678965",
        "ywdbrMailNo":"13245678965@163.com",
        "corpPaPaNo":"1248856",
        "regPrAm":"200万",
        "fdNa":"王山炮",
        "fdMoNo":"18754328956",
        "fdMailNo":"18756329856@163.com",
        "acNa":"李小妞",
        "acNo":"621700042623521",
        "acBankNo":"562315",
        "acBankNa":"建设银行",
        "acPaTyCd":"0",
        "acPaNo":"152627199810290052",
        "acUsCd":"1",
        "acTyCd":"1",
        "hzsNa":"王小丫",
        "coNo":"9622253-y",
        "corpPaPaNo ":"DF15612651"
    };

    $('#organizationId').click();
    $('#managerId').click();


}(window.jQuery,window.app);

