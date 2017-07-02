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
                text: '额度审批详情',
                url: '/cs/limit-examine/limit-examine-details.html'
            }
        ]
    };

    app.limitItem={
        "code":"1001",
        "name":"假的",
        "tableOne":[
            {"byNo":"001","byName":"岗位一","minAmount":20,"maxAmount":20},
            {"byNo":"002","byName":"岗位一","minAmount":20,"maxAmount":20},
            {"byNo":"003","byName":"岗位一","minAmount":20,"maxAmount":20}
        ],
        "tableTwo":[
            {"byNo":"15235","byName":"李四","minAmount":20,"maxAmount":5000},
            {"byNo":"15235","byName":"李四","minAmount":20,"maxAmount":5000},
            {"byNo":"15235","byName":"李四","minAmount":20,"maxAmount":5000}
        ]
    };

}(window.jQuery, window.app);

