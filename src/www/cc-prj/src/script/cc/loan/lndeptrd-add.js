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
        text: '添加存款账户交易信息',
        url: '#'
      }
    ]
  };

  $(function () {
    $('.main-page').pagination({
      "first-store": app.firstStore
    });
  });
} (window.jQuery, window.app);

