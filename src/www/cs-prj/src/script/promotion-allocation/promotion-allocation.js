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
            url: '/cs/product-set/product-set.html'
        },
        dd: [
            {
                text: '促销配置',
                url: '#'
            }
        ]
    };
  $('#mainPage').find('.pagination-reload').click();
  
}(window.jQuery, window.app);