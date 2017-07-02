/**
 * 首页数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '首页',
            url: 'index.html'
        },
        dd: []
    };
}(window.jQuery, window.app);