/**
 * 首屏数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '系统设置',
            url: '#'
        },
        dd: [
            {
                text: '菜单管理',
                url: '#'
            }
        ]
    };
    app.institutions = [
        {"value": 0, "text": "业务系统"},
        {"value": 1, "text": "业务支撑系统"},
        {"value": 2, "text": "核心系统"}
    ]
    app.resIconNo = [
        {"value": 0, "text": "icon1"},
        {"value": 1, "text": "icon2"},
        {"value": 2, "text": "icon3"}
    ]
}(window.jQuery, window.app);