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
        text: '还款计划生成控制表管理',
        url: '#'
      }
    ]
  };

  $(function () {
    $('.main-page').pagination({
      "first-store": {
        "page": {
          "number": 0,
          "size": 20,
          "totalPages": 0,
          "totalElements": 0,
          "content": [],
        },
        "pages": []
      }
    });
    $('.main-page .pagination-reload').click();
  });
} (window.jQuery, window.app);

