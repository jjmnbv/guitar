+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '产品相关',
                url: '#'
            },
            {
                text: '促销配置',
                url: '#'
            },
            {
                text: '修改',
                url: '#'
            }
        ]
    };
    app.promCondPmIdList = [
      {"code":0,"name":"助业贷"},
      {"code":1,"name":"教育分期"}];
   app.feCalCdList=[
      {"code":0,"name":"按比例收取"},
      {"code":1,"name":"按固定费用收取"}];
   app.feCdList=[
      {"code":0,"name":"贷后管理费1"},
      {"code":1,"name":"贷后管理费2"}];
   app.promBeneCdList=[
      {"code":0,"name":"浮动比例"},
      {"code":1,"name":"浮动金额"},
      {"code":2,"name":"全免"}
   ];
   
}(window.jQuery,window.app);
