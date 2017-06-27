+function($, app) {
  /**
   * 面包屑导航数据
   * @type {{icon: string, dt: string, dd: Array}}
   */

  app.crumbs = {
    icon: 'icon-index',
    dt: {
      text: '主页',
      url: '/index.html'
    },
    dd: [
      {
        text:'分户账信息查询',
        url:'#'
      }
    ]
  };

} (window.jQuery, window.app);

