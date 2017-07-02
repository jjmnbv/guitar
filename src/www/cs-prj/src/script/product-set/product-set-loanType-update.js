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
                text: '修改',
                url: '#'
            }
        ]
    };
    app.loTyNoList = [
        {"code":0,"name":"20150623"},
        {"code":1,"name":"20150623"},
        {"code":2,"name":"20150623"}];
    app.loKiCdList = [
        {"code":0,"name":"现金贷"},
        {"code":1,"name":"现金贷"},
        {"code":2,"name":"现金贷"}];
    app.loKiSubCdList = [
        {"code":0,"name":"子现金贷"},
        {"code":1,"name":"子现金贷"},
        {"code":2,"name":"子现金贷"}];
    app.currVeList = [
        {"code":0,"name":"1.1"},
        {"code":1,"name":"1.2"},
        {"code":2,"name":"1.3"}];
    app.brNoList = [
        {"code":0,"name":"1.1"},
        {"code":1,"name":"1.2"},
        {"code":2,"name":"1.3"}];
    app.brNaList = [
        {"code":0,"name":"1.1"},
        {"code":1,"name":"1.2"},
        {"code":2,"name":"1.3"}];
    app.foSeNaList = [
        {"code":0,"name":"1.1"},
        {"code":1,"name":"1.2"},
        {"code":2,"name":"1.3"}];
   app.payCdList = [
       {"code":0,"name":"支付方式1"},
       {"code":1,"name":"支付方式2"},
       {"code":2,"name":"支付方式3"}];
   app.mlTyCdList = [
       {"code":0,"name":"放款方式1"},
       {"code":1,"name":"放款方式2"},
       {"code":2,"name":"放款方式3"}];
   app.pre_repayList = [
       {"code":0,"name":"是"},
       {"code":1,"name":"否"}];
   app.acoTypNoList = [
       {"code":0,"name":"123131"},
       {"code":1,"name":"sdajda"}];
   app.cgYnList = [
       {"code":0,"name":"是"},
       {"code":1,"name":"否"}];
   app.ruIdList = [
       {"code":0,"name":"qqqq00"},
       {"code":1,"name":"1211"},
       {"code":2,"name":"1312"}];
   app.auFlIdList = [
      {"code":0,"name":"qqqq11"},
      {"code":1,"name":"1211"},
      {"code":2,"name":"1312"}];
   app.matIdList = [
      {"code":0,"name":"qqqq222"},
      {"code":1,"name":"1211"},
      {"code":2,"name":"1312"}];
   app.prnTeIdList = [
      {"code":0,"name":"qqqq33"},
      {"code":1,"name":"1211"},
      {"code":2,"name":"1312"}];
   app.drIdList = [
      {"code":0,"name":"qqqq444"},
      {"code":1,"name":"1211"},
      {"code":2,"name":"1312"}];
   app.tcRuNaList = [
      {"code":0,"name":"qqqq444"},
      {"code":1,"name":"1211"},
      {"code":2,"name":"1312"}];
   
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
