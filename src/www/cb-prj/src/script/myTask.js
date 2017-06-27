/**
 * 我的任务数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '我的任务',
            url: 'mytask.html'
        },
        dd: []
    };
}(window.jQuery, window.app);