/**
 * 首屏数据模拟
 */
+function ($, app) {

    app.crumbs = {
        icon: 'business-processing',
        dt: {
            text: '业务办理',
            url: '../../../myTask.html'
        },
        dd: [
            {
                text: '贷款申请处理',
                url: '#'
            },
            {
                text: '二级审批',
                url: '/cb/two-levels-approval/two-levels-approval-list.html'
            }
        ]
    };
    /*贷款品种下拉框*/
    app.loanTypeIdList = [
        {"value": "XJ", "text": "助业贷"},
        {"value": "NY", "text": "经营贷"}
    ];

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();


}(window.jQuery, window.app);
