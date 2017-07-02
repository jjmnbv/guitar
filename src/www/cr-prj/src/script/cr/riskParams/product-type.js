var dimCy = GetQueryString("dimCy");
app.dimCy = {
    dimCy6001: "产品种类",
    dimCy6002: "货币代码",
    dimCy6003: "国家",
    dimCy6004: "省份",
    dimCy6005: "行业",
    dimCy6006: "地区",
    dimCy6007: "数据源"
};
var pageTitle = app.dimCy['dimCy'+dimCy];
+function ($, app) {
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '风险控制',
            url: '#'
        },
        dd: [
            {
                text: '风险参数',
                url: '#'
            },
            {
                text:'维度参数',
                url:'#'
            },
            {
                text:pageTitle,
                url:'#'
            }
        ]
    };

}(window.jQuery, window.app);