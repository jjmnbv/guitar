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
                text: '上级电话回访',
                url: '/cb/superior-telephone-return/superior-telephone-return-list.html'
            }
        ]
    };
    /*贷款品种下拉框*/
    app.loanTypeIdList = [
        {"value": "0", "text": "助业贷"},
        {"value": "1", "text": "经营贷"}
    ];
    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();


}(window.jQuery, window.app);
