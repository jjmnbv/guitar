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
        text:'息费减免申请',
        url:'../lnrrinf/lnrrinf-index.html'
      },
      {
        text: '新增息费减免申请',
        url: '#'
      }
    ]
  };
} (window.jQuery, window.app);

