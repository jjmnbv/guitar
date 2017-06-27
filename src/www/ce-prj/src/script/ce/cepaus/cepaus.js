+function($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        dt: {
            text: '主页',
            url: '#'
        },
        dd: [
            {
                text: '扣款管理',
                url: '#'
            }
        ]
    };
    
} (window.jQuery, window.app);
