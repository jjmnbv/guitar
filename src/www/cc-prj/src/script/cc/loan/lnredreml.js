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
        text: '交易冲正表管理',
        url: '#'
      }
    ]
  };

/*  $(function () {
    $('.main-page').pagination({
      "first-store": app.firstStore
    });
  });
  
  $('.rrInd').selectloader({rrInd:app.dicts.dict_3001});
  app.registerTextHelper('rrInd', app.dicts.dict_3001, 'code', 'name');*/

} (window.jQuery, window.app);

