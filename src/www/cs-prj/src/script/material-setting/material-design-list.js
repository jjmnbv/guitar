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
            },
            {
                text: '设计-关联材料列表',
                url: '#'
            }
        ]
    };

    /**
     * 材料类型
     * @type {*[]}
     */
    app.matTyCd = [
        {"value": 0, "text": "CS 超市"},
        {"value": 1, "text": "MC 卖场"},
        {"value": 2, "text": "DS 电商"},
        {"value": 3, "text": "QT 其他"}
    ];
    /**
     * 材料种类
     * @type {*[]}
     */
    app.matPhCd = [
        {"value": 0, "text": "CS 超市"},
        {"value": 1, "text": "MC 卖场"},
        {"value": 2, "text": "DS 电商"},
        {"value": 3, "text": "QT 其他"}
    ];

    /**
     * 收取要求
     * @type {*[]}
     */
    app.matColReqCd = [
        {"value": 'YJ', "text": "原件"},
        {"value": 'FY', "text": "复印件"},
        {"value": 'YF', "text": "原件+复印件"}
    ];

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();
}(window.jQuery, window.app);