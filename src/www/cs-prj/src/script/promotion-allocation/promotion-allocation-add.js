+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '/cs/product-set/product-set.html'
        },
        dd: [
            {
                text: '促销配置',
                url: '/cs/promotion-allocation/cs/promotion-allocation.html'
            },
            {
                text: '增加',
                url: '#'
            }
        ]
    };
   
   
}(window.jQuery,window.app);
