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
        text: '科目信息配置表管理',
        url: '../system/syaccfg/syAcCfgIndex.html'
      },
      {
        text:crumbUrl+'科目信息配置',
        url:'#'
      }
    ]
  };
} (window.jQuery, window.app);

