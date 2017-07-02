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

    //状态
    app.st = [
        {"code": "CS","name": "初始"},
        {"code": "JH","name": "激活"}
    ];
}(window.jQuery,window.app);
