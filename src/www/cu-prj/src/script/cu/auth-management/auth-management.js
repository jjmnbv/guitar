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
    app.roles = [
        {"id": 0, "text": "系统管理员"},
        {"id": 1, "text": "初审人员"},
        {"id": 2, "text": "终审人员"},
        {"id": 3, "text": "结算"},
        {"id": 4, "text": "质检复核"},
        {"id": 5, "text": "补充资料"}
    ]
    app.menuIcons = [
        {"value": 0, "text": "icon1"},
        {"value": 1, "text": "icon2"},
        {"value": 2, "text": "icon3"}
    ]

}(window.jQuery, window.app);