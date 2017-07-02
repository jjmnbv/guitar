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
    app.dict = {
        "dict-sex": [
            {
                "code": "1",
                "name": "男"
            },
            {
                "code": "0",
                "name": "女"
            }
        ],
        "dict-boolean": [
            {
                "code": "1",
                "name": "是"
            },
            {
                "code": "0",
                "name": "否"
            }
        ]
    };
    app.leaveStatus = [
        {'name':'请假','code':'1'},
        {'name':'未请假','code':'0'}
    ]
    $(function () {

    })
}(window.jQuery,window.app);
