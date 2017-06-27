+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '工单配置',
                url: '/cs/work-order/work-order.html'
            },
            {
                text: '用户工单配置',
                url: '#'
            }
        ]
    };

}(window.jQuery,window.app);
