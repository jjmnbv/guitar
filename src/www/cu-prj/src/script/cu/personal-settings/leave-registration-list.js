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
        //请假类别
        app.holCd = [
            {"code": 1, "name": "倒休"},
            {"code": 2, "name": "年假"},
            {"code": 3, "name": "病假"},
            {"code": 4, "name": "事假"},
            {"code": 5, "name": "其它"}
        ];

    });
}(window.jQuery,window.app);
