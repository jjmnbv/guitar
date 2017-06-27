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
                text: '佣金配置详情',
                url: '/cs/brokerage-configbrokerage-config-details.html'
            }
        ]
    };

    app.brokerageItem={
        "id":"1001",
        "name":"假的",
        "content":[
            {"baseCode":"累计笔数","code":"固定","subCode":"按金额","amount":"假的","percent":"60%","baseMaxAmount":"5","comment":"545"},
            {"baseCode":"累计笔数","code":"固定","subCode":"按金额","amount":"假的","percent":"60%","baseMaxAmount":"5","comment":"545"},
            {"baseCode":"累计笔数","code":"固定","subCode":"按金额","amount":"假的","percent":"60%","baseMaxAmount":"5","comment":"545"}
        ]
    };

}(window.jQuery, window.app);

