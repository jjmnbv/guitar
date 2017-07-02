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
        text:'放款成功',
        url:'../lnloinf/lnloinf-list.html'
      },
      {
        text: '贷款还款明细',
        url: '#'
      }
    ]
  };

  $(function () {

  });
} (window.jQuery, window.app);

