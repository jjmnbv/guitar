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
            text: '客户管理',
            url: '#'
        },
        dd: [
            {
                text: '个人客户管理',
                url: '#'
            }
        ]
    };
    app.cuTyCdList = [
      {"code":0,"name":"个人客户"},
      {"code":1,"name":"企业客户"}
      ];
    app.paTyCdList = [
      {"code":0,"name":"身份证"},
      {"code":1,"name":"护照"}
      ];
  $('#mainPage').find('.pagination-reload').click();
  
}(window.jQuery, window.app);