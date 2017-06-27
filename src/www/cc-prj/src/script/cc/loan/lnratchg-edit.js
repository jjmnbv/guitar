var operatH = GetQueryString('operatH');
var crumbUrl;
if(operatH == 'edit'){
  crumbUrl = '编辑';
}else if(operatH == 'view'){
  crumbUrl = '查看';
}
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
        text:'利率变更表管理',
        url:'../lnratchg/lnratchg-index.html'
      },
      {
        text: crumbUrl+'利率变更',
        url: '#'
      }
    ]
  };

  
} (window.jQuery, window.app);

