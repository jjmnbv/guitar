+function($, app){
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '个人设置',
            url: '#'
        },
        dd: [
            {
                text: '个人信息维护',
                url: '#'
            }
        ]
    };

    $(function () {
        //上级机构
        app.parentBrNo = [
            {"code": 1, "name": "机构一"},
            {"code": 2, "name": "机构二"},
            {"code": 3, "name": "机构三"},
            {"code": 4, "name": "机构四"}
        ];
        //机构级别
        app.brLevQt = [
            {"code": 0, "name": "级别1"},
            {"code": 1, "name": "级别2"},
            {"code": 2, "name": "级别3"}
        ];
        //状态
        app.st = [
            {"code": "CS","name": "初始"},
            {"code": "JH","name": "激活"}
        ];

    });
}(window.jQuery,window.app);
