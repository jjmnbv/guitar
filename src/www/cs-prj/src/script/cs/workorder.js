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
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '工单配置',
                url: '#'
            }
        ]
    };
  
  $('#mainPage').find('.pagination-reload').click();
  
  app.wooNodCdList=[
        {"code":"0","name":"初审"},
        {"code":"1","name":"详细"},
        {"code":"2","name":"简要"}
    ];
  
  app.wooTyCdList=[
        {"code":"0","name":"人工分单"},
        {"code":"1","name":"平均分单"}
    ];
  
  app.wooBaCdList=[
        {"code":"0","name":"全部"},
        {"code":"1","name":"机构"},
        {"code":"2","name":"门店"}
    ];
    
  app.wooCtrCdList=[
        {"code":"0","name":"不控制"},
        {"code":"1","name":"每日"}
    ];
  
  app.wooAssiCdList=[
        {"code":"0","name":"当天分完"},
        {"code":"1","name":"非当天分完"}
    ];
}(window.jQuery, window.app);