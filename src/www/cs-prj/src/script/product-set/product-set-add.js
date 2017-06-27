/**
 * 数据模拟
 */
+function ($, app) {
	/**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '系统管理',
            url: '#'
        },
        dd: [
            {
                text: '产品设置',
                url: '/cs/product-set/product-set.html'
            },
            {
                text: '新增',
                url: '#'
            }
        ]
    };
  app.loKiCdList = [
  {"loKiCdCode":0,"loKiCdName":"现金贷"},
  {"loKiCdCode":1,"loKiCdName":"现金贷"},
  {"loKiCdCode":2,"loKiCdName":"现金贷"}];
  app.loKiSubCdList = [
  {"loKiSubCdCode":0,"loKiSubCdName":"子现金贷"},
  {"loKiSubCdCode":1,"loKiSubCdName":"子现金贷"},
  {"loKiSubCdCode":2,"loKiSubCdName":"子现金贷"}];
  app.loTyNoList = [
  {"loTyNoCode":0,"loTyNoName":"20150623"},
  {"loTyNoCode":1,"loTyNoName":"20150623"},
  {"loTyNoCode":2,"loTyNoName":"20150623"}];
  app.currVeList = [
  {"currVeCode":0,"currVeName":"1.1"},
  {"currVeCode":1,"currVeName":"1.2"},
  {"currVeCode":2,"currVeName":"1.3"}];
  app.payCdList = [
  {"payCdCode":0,"payCdName":"支付方式1"},
  {"payCdCode":1,"payCdName":"支付方式2"},
  {"payCdCode":2,"payCdName":"支付方式3"}];
  app.mlTyCdList = [
  {"mlTyCdCode":0,"mlTyCdName":"放款方式1"},
  {"mlTyCdCode":1,"mlTyCdName":"放款方式2"},
  {"mlTyCdCode":2,"mlTyCdName":"放款方式3"}];
  app.ruIdList = [
  {"ruId":0,"ruNa":"qqqq00"},
  {"ruId":1,"ruNa":"1211"},
  {"ruId":2,"ruNa":"1312"}];
  app.auFlIdList = [
  {"auFlId":0,"auFlNa":"qqqq11"},
  {"auFlId":1,"auFlNa":"1211"},
  {"auFlId":2,"auFlNa":"1312"}];
  app.matIdList = [
  {"matId":0,"matNa":"qqqq222"},
  {"matId":1,"matNa":"1211"},
  {"matId":2,"matNa":"1312"}];
  app.prnTeIdList = [
  {"prnTeId":0,"prnTeNa":"qqqq33"},
  {"prnTeId":1,"prnTeNa":"1211"},
  {"prnTeId":2,"prnTeNa":"1312"}];
  app.drIdList = [
  {"drId":0,"drNa":"qqqq444"},
  {"drId":1,"drNa":"1211"},
  {"drId":2,"drNa":"1312"}];
  app.tcRuNaList = [
      {"tcRuNaCode":0,"tcRuNaName":"qqqq444"},
      {"tcRuNaCode":1,"tcRuNaName":"1211"},
      {"tcRuNaCode":2,"tcRuNaName":"1312"}]
  
  
  
  
}(window.jQuery, window.app);