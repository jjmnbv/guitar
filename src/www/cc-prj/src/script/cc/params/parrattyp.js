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
        text: '基准利率分类管理',
        url: '#'
      }
    ]
  };
	$(function() {
    $('.main-page').pagination({
      "first-store": app.firstStore
    });   

  });
} (window.jQuery, window.app);

