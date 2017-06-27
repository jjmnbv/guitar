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
                text: '详情',
                url: '#'
            }
        ]
    };
    app.pmCdList = [
        {"pmCdCode":0,"pmCdName":"等额本息"},
        {"pmCdCode":1,"pmCdName":"等额本金"},
        {"pmCdCode":2,"pmCdName":"利随本清"},
        {"pmCdCode":3,"pmCdName":"按期付息到期还本"},
        {"pmCdCode":4,"pmCdName":"本息不同间隔"},
        {"pmCdCode":5,"pmCdName":"弹性还款"},
        {"pmCdCode":6,"pmCdName":"气球贷"},
        {"pmCdCode":7,"pmCdName":"本金递增递减"},
        {"pmCdCode":8,"pmCdName":"其他"}];
    app.inCalPerCdList = [
        {"inCalPerCdCode":0,"inCalPerCdName":"按实际天数"},
        {"inCalPerCdCode":1,"inCalPerCdName":"按每周期固定天数"}];
    app.inCalBaCdList = [
        {"inCalBaCdCode":0,"inCalBaCdName":"剩于本金"},
        {"inCalBaCdCode":1,"inCalBaCdName":"放款本金"}];
    app.mlPrPeCdList = [
        {"mlPrPeCdCode":0,"mlPrPeCdName":"按贷款本金"},
        {"mlPrPeCdCode":1,"mlPrPeCdName":"按商品价格"}];
   
    //还款方式策略
   
   app.payComCdList = [
      {"payComCdCode":0,"payComCdName":"利息和本金"},
      {"payComCdCode":1,"payComCdName":"利息"}];
   app.pmTyCdList=[
      {"pmTyCdCode":0,"pmTyCdName":"等额本金"},
      {"pmTyCdCode":1,"pmTyCdName":"等额本息"}];
   
}(window.jQuery,window.app);
