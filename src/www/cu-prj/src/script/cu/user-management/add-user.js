/**
 * 数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '产品相关',
                url: '#'
            },
            {
                text: '还款方式',
                url: '#'
            }
        ]
    };
    //状态
    app.st = [
        {"code": "CS","name": "初始"},
        {"code": "JH","name": "激活"}
    ];
    app.boolean = [
        {'code': '1', 'name': '是'},
        {'code': '0', 'name': '否'}
    ]
    //机构级别
    app.brLevQt = [
        {"code": 0, "name": "级别1"},
        {"code": 1, "name": "级别2"},
        {"code": 2, "name": "级别3"}
    ];
    $(function () {
        $('#belongPartner').click();
        app.registerTextHelper('st', app.st, 'code', 'name');
        app.registerTextHelper('brLevQt', app.brLevQt, 'code', 'name');
        app.registerTextHelper('stoUseYn', app.boolean, 'code', 'name');
        app.registerTextHelper('auPostYn', app.boolean, 'code', 'name');
        app.registerTextHelper('coPostYn', app.boolean, 'code', 'name');
    })

}(window.jQuery, window.app);