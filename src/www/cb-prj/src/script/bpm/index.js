/**
 * 首屏数据模拟
 */
+function ($, app) {

    app.crumbs = {
        icon: 'mytask-title-img',
        dt: {
            text: '工作流引擎',
            url: '#'
        },
        dd: [
            {
                text: '流程管理',
                url: '#'
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();
}(window.jQuery, window.app);