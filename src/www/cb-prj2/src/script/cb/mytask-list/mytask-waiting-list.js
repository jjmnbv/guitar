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
                text: '代办任务',
                url: '../../../cb/mytask-list/mytask-waiting-list.html'
            }
        ]
    };
/*产品类型下拉框*/
    app.loanKindCode = [
        {"value": "XJ", "text": "现金贷"},
        {"value": "NY", "text": "耐用消费贷款"}
    ];

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();
}(window.jQuery, window.app);
