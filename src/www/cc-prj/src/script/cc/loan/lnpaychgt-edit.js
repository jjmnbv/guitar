+function($, app) {
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */
  app.crumbs = {
    dt: {
      text: '主页',
      url: '/index.html'
    },
    dd: [
      {
        text:'贷款还款方式变更表管理',
        url:'../lnpaychgt/lnpaychgt-index.html'
      },
      {
        text: '编辑贷款还款方式变更信息',
        url: '#'
      }
    ]
  };
} (window.jQuery, window.app);

