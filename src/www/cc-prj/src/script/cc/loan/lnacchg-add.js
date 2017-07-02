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
        text:'还款账号变更表管理',
        url:'../lnacchg/lnacchg-index.html'
      },
      {
        text: '新增还款账号变更信息',
        url: '#'
      }
    ]
  };
} (window.jQuery, window.app);

