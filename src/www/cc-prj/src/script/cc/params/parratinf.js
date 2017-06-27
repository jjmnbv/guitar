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
        text:'基准利率分类管理',
        url:'../parrattyp/parRatTypIndex.html'
      },
      {
        text: '利率档次信息管理',
        url: '#'
      }
    ]
  };
$(function(){

});
} (window.jQuery, window.app);

