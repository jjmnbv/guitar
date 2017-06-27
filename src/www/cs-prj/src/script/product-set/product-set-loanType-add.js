+function($, app){
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
                text: '增加',
                url: '#'
            }
        ]
    };
    app.loTyNoList = [
        {"loTyNoCode":0,"loTyNoName":"20150623"},
        {"loTyNoCode":1,"loTyNoName":"20150623"},
        {"loTyNoCode":2,"loTyNoName":"20150623"}];
    app.loKiCdList = [
        {"loKiCdCode":0,"loKiCdName":"现金贷"},
        {"loKiCdCode":1,"loKiCdName":"现金贷"},
        {"loKiCdCode":2,"loKiCdName":"现金贷"}];
    app.loKiSubCdList = [
        {"loKiSubCdCode":0,"loKiSubCdName":"子现金贷"},
        {"loKiSubCdCode":1,"loKiSubCdName":"子现金贷"},
        {"loKiSubCdCode":2,"loKiSubCdName":"子现金贷"}];
    app.currVeList = [
        {"currVeCode":0,"currVeName":"1.1"},
        {"currVeCode":1,"currVeName":"1.2"},
        {"currVeCode":2,"currVeName":"1.3"}];
    app.brNoList = [
        {"brNoCode":0,"brNoName":"1.1"},
        {"brNoCode":1,"brNoName":"1.2"},
        {"brNoCode":2,"brNoName":"1.3"}];
    app.brNaList = [
        {"brNaCode":0,"brNaName":"1.1"},
        {"brNaCode":1,"brNaName":"1.2"},
        {"brNaCode":2,"brNaName":"1.3"}];
    app.foSeNaList = [
        {"foSeNaCode":0,"foSeNaName":"1.1"},
        {"foSeNaCode":1,"foSeNaName":"1.2"},
        {"foSeNaCode":2,"foSeNaName":"1.3"}];
   app.payCdList = [
       {"payCdCode":0,"payCdName":"支付方式1"},
       {"payCdCode":1,"payCdName":"支付方式2"},
       {"payCdCode":2,"payCdName":"支付方式3"}];
   app.mlTyCdList = [
       {"mlTyCdCode":0,"mlTyCdName":"放款方式1"},
       {"mlTyCdCode":1,"mlTyCdName":"放款方式2"},
       {"mlTyCdCode":2,"mlTyCdName":"放款方式3"}];
   app.pre_repayList = [
       {"pre_repayCode":0,"pre_repayName":"是"},
       {"pre_repayCode":1,"pre_repayName":"否"}];
   app.acoTypNoList = [
       {"acoTypNoCode":0,"acoTypNoName":"123131"},
       {"acoTypNoCode":1,"acoTypNoName":"sdajda"}];
   app.cgYnList = [
       {"cgYnCode":0,"cgYnName":"是"},
       {"cgYnCode":1,"cgYnName":"否"}];
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
      {"tcRuNaCode":2,"tcRuNaName":"1312"}];
   
        //渠道范围
   app.csLoTyAccS=[
   {"pkacNo":"1231132"},
   {"pkacNo":"123"},
   {"pkacNo":"654"}
   ];
   app.acTyCdList=[
   {"acTyCdCode":1,"acTyCdName":"合作机构进件4"},
   {"acTyCdCode":2,"acTyCdName":"合作机构进件5"},
   {"acTyCdCode":3,"acTyCdName":"合作机构进件6"}
   ];
   //费用计算
   app.csLoTyFeS=[
   {"feCd":"001"},
   {"feCd":"002"},
   {"feCd":"003"}];
   app.feCaList=[
   {"feCaCode":0,"feCaName":"服务费"},
   {"feCaCode":1,"feCaName":"手续费"},
   {"feCaCode":2,"feCaName":"贴息费"}
   ];
   //还款方式列表
   app.csLoTyPmS=[
   {},
   {},
   {}];
   app.plOpList=[
   {"plOpCode":0,"plOpName":"服务费"},
   {"plOpCode":1,"plOpName":"手续费"},
   {"plOpCode":2,"plOpName":"贴息费"}
   ];
   

}(window.jQuery,window.app);
