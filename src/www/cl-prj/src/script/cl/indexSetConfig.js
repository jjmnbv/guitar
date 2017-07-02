/**
 * 数据模拟
 */
+function ($, app) {
  /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-workorder-set',
        dt: {
            text: '额度配置',
            url: '#'
        },
        dd: [
            {
                text: '指标集配置',
                url: '#'
            }
        ]
    };
  
  //后台的查询字典赋值和自定义字典赋值
  app.wooNodCdList=[
        {"code":"0","name":"初审"},
        {"code":"1","name":"详细"},
        {"code":"2","name":"简要"}
    ];
  
  app.wooTyCdList=[
        {"code":"0","name":"人工分单"},
        {"code":"1","name":"平均分单"}
    ];
    
  $(function(){
    $(".dictionarys").selectloader(app);
    //后台需要动态给first-store赋值
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
    //动态给first-store赋值后即可删除
    $('.main-page .pagination-reload').click();
  });
}(window.jQuery, window.app);