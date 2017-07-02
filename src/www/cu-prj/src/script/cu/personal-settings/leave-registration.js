+function($, app){
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '个人设置',
            url: '#'
        },
        dd: [
            {
                text: '请假登记',
                url: '#'
            }
        ]
    };
    app.leaveCategoryList = [
        {name: '倒休', val: '1'},
        {name: '请假', val: '2'},
        {name: '年假', val: '3'}
    ]
}(window.jQuery,window.app);
