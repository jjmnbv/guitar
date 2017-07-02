+function($, app){
    app.classify=[
        {"code":0,"name":"CS 超市"},
        {"code":1,"name":"MC 卖场"},
        {"code":2,"name":"DS 电商"},
        {"code":3,"name":"QT 其他"}
    ];
    app.industry=[
        {"code":0,"name":"旅游类"},
        {"code":1,"name":"教育类"},
        {"code":2,"name":"电器类"},
        {"code":3,"name":"汽车类"}
    ];
    app.closeAccount=[
        {"code":0,"name":1},
        {"code":1,"name":2},
        {"code":2,"name":3},
        {"code":3,"name":4},
        {"code":4,"name":5},
        {"code":5,"name":6},
        {"code":6,"name":7},
        {"code":7,"name":8},
        {"code":8,"name":9},
        {"code":9,"name":10},
        {"code":10,"name":11},
        {"code":11,"name":12},
        {"code":12,"name":13},
        {"code":13,"name":"..."}
    ];
    app.finalType=[
        {"code":0,"name":"月"},
        {"code":1,"name":"季度"}
    ];
    app.program=[
        {"code":0,"name":"方案一 费率×"},
        {"code":1,"name":"方案二 费率×"}
    ];
    app.accountIdType=[
        {"code":0,"name":"二代身份证"},
        {"code":1,"name":"军官证"}
    ];
    app.accountUse=[
        {"code":0,"name":"HK"},
        {"code":1,"name":"SK"},
        {"code":2,"name":"..."}
    ];
    app.accountTpye=[
        {"code":0,"name":"GR"},
        {"code":1,"name":"HR"},
        {"code":2,"name":"..."}
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
                url: '/cs/business-partner/partner-list.html'
            },
            {
                text: '合作商详细信息新增',
                url: '/cs/business-partner/add-details.html'
            }
            ]
        };

    /**
     * 模拟首屏数据
     */
    $('#organizationId').click();
    $('#managerId').click();


}(window.jQuery,window.app);
