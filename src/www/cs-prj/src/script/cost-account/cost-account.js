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
                text: '费用计算',
                url: '#'
            }
        ]
    };
  app.feTyCdList = [
      {"feTyCdCode":0,"feTyCdName":"贴息费"},
      {"feTyCdCode":1,"feTyCdName":"贷后管理费"},
      {"feTyCdCode":2,"feTyCdName":"手续费"},
      {"feTyCdCode":3,"feTyCdName":"违约金"},
      {"feTyCdCode":4,"feTyCdName":"滞纳金"},
      {"feTyCdCode":8,"feTyCdName":"其他"}];
  $('#mainPage').find('.pagination-reload').click();
  
}(window.jQuery, window.app);