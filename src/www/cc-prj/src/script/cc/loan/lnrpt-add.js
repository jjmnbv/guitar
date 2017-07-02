  var operatH = GetQueryString('operatH');
  var crumbUrl;
  if(operatH == 'add'){
    crumbUrl = '新增';
  }else if(operatH == 'edit'){
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
        text:'主动还款申请',
        url:'../lnrpt/lnrpt-index.html'
      },
      {
        text: crumbUrl+'主动还款申请',
        url: '#'
      }
    ]
  };
} (window.jQuery, window.app);

