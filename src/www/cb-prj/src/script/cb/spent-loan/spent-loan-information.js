+function ($, app) {

    var urlSearch = function(url){
        var param = {};
        var num = url.indexOf("?")
        url = url.substr(num + 1);

        var arr = url.split("&");
        $.each(arr, function(i, v){
            num = v.indexOf("=");
            if (num > 0) {
                var name = v.substring(0, num);
                var value = v.substr(num + 1);
                param[name] = value;
            }
        });

        return param;
    }

    var request = new urlSearch(window.location.href);

    $.extend(app, { request: request });

} (window.jQuery, window.app);
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'business-processing',
        dt: {
            text: '业务办理',
            url: '#'
        },
        dd: [
            {
                text: '贷款申请处理',
                url: '#'
            },
            {
                text: '用款申请',
                url: '/cb/spent-loan/spent-loan-list.html'
            },
            {
                text: '贷款信息',
                url: '/cb/spent-loan/spent-loan-information.html'
            }
        ]
    };
    app.loanList=[
        {"loanCode":0,"loanName":"一次性放款"},
        {"loanCode":1,"loanName":"分批次放款"}
    ]
    app.paymentList=[
        {"paymentCode":0,"paymentName":"直接支付"},
        {"paymentCode":1,"paymentName":"受托支付"}
    ]
    app.promNaList=[
        {"promNaCd":0,"promNaName":"降息"}
    ];
    app.deadlineForApplicationList=[
        {"deadlineForApplicationCd":0,"deadlineForApplicationName":"1月"},
        {"deadlineForApplicationCd":1,"deadlineForApplicationName":"3月"},
        {"deadlineForApplicationCd":2,"deadlineForApplicationName":"6月"},
        {"deadlineForApplicationCd":3,"deadlineForApplicationName":"9月"},
        {"deadlineForApplicationCd":4,"deadlineForApplicationName":"12月"},
        {"deadlineForApplicationCd":5,"deadlineForApplicationName":"按其他月"}
    ];
    app.loanTypeList=[
        {"loanTypeCd": "0", "loanTypeName": "现金贷"},
        {"loanTypeCd": "1", "loanTypeName": "耐用消费贷款"}
    ];
    /*贷款品种*/
    app.loanTypeNoList=[
        {"loanTypeNoeCd": "0", "loanTypeNoName": "现金贷"},
        {"loanTypeNoeCd": "1", "loanTypeNoName": "耐用消费贷款"}
    ];
    /*贷款用途*/
    app.currencyCodeList=[
        {"currencyCodeCd": "0", "currencyCodeName": "现金贷"},
        {"currencyCodeCd": "1", "currencyCodeName": "耐用消费贷款"}
    ];

    /*还款方式*/
    /*还款方式*/
    app.paymentMethodIdList=[
        {"paymentMethodIdCd": "0", "paymentMethodIdName": "现金贷"},
        {"paymentMethodIdCd": "1", "paymentMethodIdName": "耐用消费贷款"}
    ];
    /*执行利率*/
    app.executionRateFirstLoanList=[
        {"executionRateFirstLoanCd": "0", "executionRateFirstLoanName": "现金贷"},
        {"executionRateFirstLoanCd": "1", "executionRateFirstLoanName": "耐用消费贷款"}
    ];
    /*还款间隔*/
    app.payFreQtList=[
        {"payFreQtCd": "0", "payFreQtName": "现金贷"},
        {"payFreQtCd": "1", "payFreQtName": "耐用消费贷款"}
    ];
    /*每期还款日*/
    app.paymentDateList=[
        {"paymentDateCd": "0", "paymentDateName": "现金贷"},
        {"paymentDateCd": "1", "paymentDateName": "耐用消费贷款"}
    ];
    /*客户经理*/
    app.cuMaNaList=[
        {"cuMaNaCd": "0", "cuMaNaName": "现金贷"},
        {"cuMaNaCd": "1", "cuMaNaName": "耐用消费贷款"}
    ];

}(window.jQuery, window.app);