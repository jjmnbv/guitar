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
        text:'还款账号变更表管理',
        url:'../lnacchg/lnacchg-index.html'
      },
      {
        text: crumbUrl+'还款账号变更信息',
        url: '#'
      }
    ]
  };
} (window.jQuery, window.app);

