/**
 * 首屏数据模拟
 */
+function ($, app) {

    app.crumbs = {
        icon: 'mytask-title-img',
        dt: {
            text: '我的任务',
            url: '../../../myTask.html'
        },
        dd: [
            {
                text: '拒绝任务',
                url: '../../../cb/mytask-list/mytask-refuse-list.html'
            }
        ]
    };

    /*产品类型下拉框*/
    app.loanKindCode = [
        {"value": "XJ", "text": "现金贷"},
        {"value": "NY", "text": "耐用消费贷款"}
    ];
    /*合作机构下拉框*/
    app.organizationNo = [
        {"value": 'ZF', "text": "政府机关"},
        {"value": 'GY', "text": "国有企业"},
        {"value": 'SY', "text": "事业单位"},
        {"value": 'WX', "text": "微型企业"},
        {"value": 'MY', "text": "无固定单位"},
        {"value": 'WG', "text": "民营企业"}
    ];
}(window.jQuery, window.app);
