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
        text: '存款账户信息管理',
        url: '#'
      }
    ]
  };

  $(function () {

  });
} (window.jQuery, window.app);

