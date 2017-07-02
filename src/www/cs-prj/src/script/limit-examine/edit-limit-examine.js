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
                text: '额度审批',
                url: '/cs/limit-examine/limit-examine-list.html'
            },
            {
                text: '修改额度审批',
                url: '/cs/limit-examine/edit-limit-examine.html'
            }
        ]
    };

    app.jobName = [
        {"byNameCode": "0","byName":"一审岗",
            "byNo":"1001","minAmount":"0","maxAmount":"5000"
        },
        {"byNameCode": "1","byName":"二审岗",
            "byNo":"1002","minAmount":"0","maxAmount":"1000"
        }
    ];


    app.limitItem={
        "code":"1001",
        "name":"假的",
        "tableOne":[
            {"byNo":"001","byName":"0","minAmount":20,"maxAmount":20},
            {"byNo":"002","byName":"0","minAmount":20,"maxAmount":20},
            {"byNo":"003","byName":"0","minAmount":20,"maxAmount":20}
        ],
        "tableTwo":[
            {"byNo":"0","byName":"李四","minAmount":20,"maxAmount":5000},
            {"byNo":"0","byName":"李四","minAmount":20,"maxAmount":5000},
            {"byNo":"0","byName":"李四","minAmount":20,"maxAmount":5000}
        ]
    };


}(window.jQuery, window.app);

