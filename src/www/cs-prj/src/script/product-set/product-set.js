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
            url: '#'
        },
        dd: [
            {
                text: '产品设置',
                url: '#'
            }
        ]
    };
  app.stList = [
  {"code":0,"name":"重要"},
  {"code":1,"name":"一般"},
  {"code":2,"name":"初级"}];
  app.loKiCdList = [
  {"code":0,"name":"现金贷1"},
  {"code":1,"name":"现金贷2"},
  {"code":2,"name":"现金贷3"}];
  
  $('#mainPage').find('.pagination-reload').click();
  
}(window.jQuery, window.app);