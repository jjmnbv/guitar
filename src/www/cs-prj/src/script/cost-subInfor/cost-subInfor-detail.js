+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '费用子信息',
                url: '/cs/cost-subInfor/cost-subInfor.html'
            },
            {
                text: '详情',
                url: '#'
            }
        ]
    };
}(window.jQuery,window.app);
