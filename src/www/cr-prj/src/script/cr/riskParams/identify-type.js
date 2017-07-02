var dicCy = GetQueryString("dicCy");
app.dicCy = {
    dicCy5001: "证件类型",
    dicCy5002: "婚姻状况",
    dicCy5003: "学历",
    dicCy5004: "是否有私家车",
    dicCy5005: "是否有社保公积金",
    dicCy5006: "申请人员类别",
    dicCy5007: "房产类别",
    dicCy5008: "筛选条件",
    dicCy5009: "贷款用途",
    dicCy5010: "还款方式"
};
var pageTitle = app.dicCy['dicCy'+dicCy];
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
                text:'条件参数',
                url:'#'
            },
            {
                text:pageTitle,
                url:'#'
            }
        ]
    };

}(window.jQuery, window.app);
