var operatH = GetQueryString('operatH');
var crumbUrl;
if(operatH == 'add'){
  crumbUrl = '新增';
}else if(operatH == 'edit'){
  crumbUrl = '编辑';
}
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
        text: '核算规则管理',
        url: '../parlnrule/parLnRuleIndex.html'
      },
      {
        text:crumbUrl+'核算规则',
        url: '#'
      }
    ]
  };

  $(function () {

  });
} (window.jQuery, window.app);

