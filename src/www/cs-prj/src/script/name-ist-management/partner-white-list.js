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
            text: '客户管理',
            url: '#'
        },
        dd: [
            {
                text: '黑白名单管理',
                url: '#'
            },
            {
                text: '合作方白名单',
                url: '#'
            }
        ]
    };

    /**
     * 材料集分类
     * @type {*[]}
     */
    app.listLevel = [
        {"value": 0, "text": "A"},
        {"value": 1, "text": "B"},
        {"value": 2, "text": "C"},
        {"value": 3, "text": "D"}
    ];

    app.idType=[
        {"code":"0","name":"二代身份证"},
        {"code":"1","name":"军官证"},
        {"code":"2","name":"士兵证"}
    ];
    app.listCode=[
        {"code":"0","name":"1001"},
        {"code":"1","name":"1002"},
        {"code":"2","name":"1003"},
    ];
    app.listSource=[
        {"code":"0","name":"本系统"},
        {"code":"1","name":"外太空"}
    ];
    app.state=[
        {"code":"0","name":"初始"},
        {"code":"1","name":"激活"},
        {"code":"2","name":"退出"}
    ];
    app.clientTpye=[
        {"code":"0","name":"经销商"},
        {"code":"1","name":"厂商"},
        {"code":"2","name":"合作方"}
    ];

    /**
     * 列表页首屏数据
     * @type {{page: {content: *[], totalElements: number, totalPages: number, last: boolean, size: number, number: number, numberOfElements: number, first: boolean}, pages: number[]}}
     */
    $('#mainPage').find('.pagination-reload').click();
}(window.jQuery, window.app);