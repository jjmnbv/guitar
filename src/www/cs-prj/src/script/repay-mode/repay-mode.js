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
                text: '还款方式',
                url: '#'
            }
        ]
    };
  app.pmCdList = [
      {"pmCdCode":0,"pmCdName":"等额本息"},
      {"pmCdCode":1,"pmCdName":"等额本金"},
      {"pmCdCode":2,"pmCdName":"利随本清"},
      {"pmCdCode":3,"pmCdName":"按期付息到期还本"},
      {"pmCdCode":4,"pmCdName":"本息不同间隔"},
      {"pmCdCode":5,"pmCdName":"弹性还款"},
      {"pmCdCode":6,"pmCdName":"气球贷"},
      {"pmCdCode":7,"pmCdName":"本金递增递减"},
      {"pmCdCode":8,"pmCdName":"其他"}];
  app.loKiCdList = [
  {"loKiCdCode":0,"loKiCdName":"激活"},
  {"loKiCdCode":1,"loKiCdName":"初始"},
  {"loKiCdCode":2,"loKiCdName":"失效"}];
  
  $('#mainPage').find('.pagination-reload').click();
  
}(window.jQuery, window.app);