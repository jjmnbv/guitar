+function($, app){
	   app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '费用计算',
                url: '/cs/cost-account/cost-account.html'
            },
            {
                text: '增加',
                url: '#'
            }
        ]
    };
    app.feTyCdList = [
      {"feTyCdCode":0,"feTyCdName":"贴息费"},
      {"feTyCdCode":1,"feTyCdName":"贷后管理费"},
      {"feTyCdCode":2,"feTyCdName":"手续费"},
      {"feTyCdCode":3,"feTyCdName":"违约金"},
      {"feTyCdCode":4,"feTyCdName":"滞纳金"},
      {"feTyCdCode":8,"feTyCdName":"其他"}];
    app.amNaCdList = [
        {"amNaCdCode":0,"amNaCdName":"未定"},
        {"amNaCdCode":1,"amNaCdName":"未定"}];
    
   app.fePayTyCdList = [
        {"fePayTyCdCode":0,"fePayTyCdName":"放款前收取"},
        {"fePayTyCdCode":1,"fePayTyCdName":"放款后收取"},
        {"fePayTyCdCode":2,"fePayTyCdName":"首次扣款收取"},
        {"fePayTyCdCode":3,"fePayTyCdName":"分期收取"}];
   app.payFrCdList = [
      {"payFrCdCode":0,"payFrCdName":"借款人"},
      {"payFrCdCode":1,"payFrCdName":"厂商"},
      {"payFrCdCode":2,"payFrCdName":"商家"},
      {"payFrCdCode":3,"payFrCdName":"其他"}];
   app.feCalCdList=[
      {"feCalCdCode":0,"feCalCdName":"按比例收取"},
      {"feCalCdCode":1,"feCalCdName":"按固定费用收取"}];
   
}(window.jQuery,window.app);
