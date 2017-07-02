+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '还款方式',
                url: '/cs/repay-mode/repay-mode.html'
            },
            {
                text: '增加',
                url: '#'
            }
        ]
    };
    app.pmCdList = [
        {"code":0,"name":"等额本息"},
        {"code":1,"name":"等额本金"},
        {"code":2,"name":"利随本清"},
        {"code":3,"name":"按期付息到期还本"},
        {"code":4,"name":"本息不同间隔"},
        {"code":5,"name":"弹性还款"},
        {"code":6,"name":"气球贷"},
        {"code":7,"name":"本金递增递减"},
        {"code":8,"name":"其他"}];
        
    app.inCalPerCdList = [
        {"code":0,"name":"按实际天数"},
        {"code":1,"name":"按每周期固定天数"}];
    app.inCalBaCdList = [
        {"code":0,"name":"剩于本金"},
        {"code":1,"name":"放款本金"}];
    app.mlPrPeCdList = [
        {"code":0,"name":"按贷款本金"},
        {"code":1,"name":"按商品价格"}];
   
    //还款方式策略
   
   app.payComCdList = [
      {"code":0,"name":"利息和本金"},
      {"code":1,"name":"利息"}];
   app.pmTyCdList=[
      {"code":0,"name":"等额本金"},
      {"code":1,"name":"等额本息"}];
   
}(window.jQuery,window.app);
