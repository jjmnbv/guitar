+function($, app) {
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
    dt: {
      text: '主页',
      url: '#'
    },
    dd: [
      {
        text:'还款方式配置表管理',
        url:'../parpaycfg/parPayCfgIndex.html'
      },
      {
        text: '还款方式配置明细表管理',
        url: '#'
      }
    ]
  };
 
	
} (window.jQuery, window.app);

