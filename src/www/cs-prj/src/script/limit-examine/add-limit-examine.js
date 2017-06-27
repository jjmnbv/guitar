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
                text: '新增额度审批',
                url: '/cs/limit-examine/add-limit-examine.html'
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


}(window.jQuery, window.app);

