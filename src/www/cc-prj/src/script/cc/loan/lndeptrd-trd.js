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
        text: crumbUrl+'存款交易操作',
        url: '#'
      }
    ]
  };
  try{    	$('#cuCertTyp').get(0).disabled = true;    }catch(e){};
  $(function () {

  });
} (window.jQuery, window.app);

