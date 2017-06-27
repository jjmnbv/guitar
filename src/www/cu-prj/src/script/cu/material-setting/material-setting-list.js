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
                text: '产品相关',
                url: '#'
            },
            {
                text: '材料设置',
                url: '#'
            }
        ]
    };

    /**
     * 材料集分类
     * @type {*[]}
     */
    app.matPhCdDic = [
        {"value": 0, "text": "CS 超市"},
        {"value": 1, "text": "MC 卖场"},
        {"value": 2, "text": "DS 电商"},
        {"value": 3, "text": "QT 其他"}
    ];

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();

}(window.jQuery, window.app);