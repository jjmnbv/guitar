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
        text:'贷款展期申请表管理',
        url:'../lnexdapp/lnexdapp-index.html'
      },
      {
        text: '新增贷款展期信息',
        url: '#'
      }
    ]
  };
} (window.jQuery, window.app);

