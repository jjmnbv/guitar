+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '费用计算',
                url: '/cs/cost-account/cost-account.html'
            },
            {
                text: '详情',
                url: '#'
            }
        ]
    };
}(window.jQuery,window.app);
