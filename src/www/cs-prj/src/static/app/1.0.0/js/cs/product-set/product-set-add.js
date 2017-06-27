 + function($, app) {

   $('#loKiCd').selectloader({
     'loKiCdList': app.loanTypeResponse.loanTypeLoKiDicList
   });
   $("#addFormStep01").deserializeObject(app.store);

   $('#loKiSubCd').selectloader({
     'loKiSubCdList': app.loKiSubCdList
   });
   $('#loTyNo').selectloader({
     'loTyNoList': app.loTyNoList
   });
   $('#currVe').selectloader({
     'currVeList': app.currVeList
   });
   $('#payCd').selectloader({
     'payCdList': app.payCdList
   });
   $('#mlTyCd').selectloader({
     'mlTyCdList': app.mlTyCdList
   });
   $('#ruId').selectloader({
     'ruIdList': app.ruIdList
   });
   $('#auFlId').selectloader({
     'auFlIdList': app.auFlIdList
   });
   $('#matId').selectloader({
     'matIdList': app.loanTypeResponse.loanTypeMaterialSetDicList
   });
   $('#prnTeId').selectloader({
     'prnTeIdList': app.loanTypeResponse.loanTypePrintTmpSetDicList
   });
   $('#drId').selectloader({
     'drIdList': app.drIdList
   });
   $('#notSepTerm').selectloader({
     'sepTermList': app.sepTermList
   });
   //第三步模拟数据
   $('#ruIdId').selectloader({
     'ruIdList': app.ruIdList
   });
   $('#tcRuCd').selectloader({
     'tcRuCdList': app.loanTypeResponse.loanTypeTellCheckDicList
   });
   $('.loanTypeLotusAmountDic').selectloader({
     'loanTypeLotusAmountDicList': app.loanTypeResponse.loanTypeLotusAmountDicList
   });
   //验证第一步通过跳到第二步
   /**
    * 金融产品名称是否存在
    */
   var addFinance = function() {
     var addForm = $('#addFormStep01');
     var validator = app.bindFormValidation(addForm);
     $("input[name='loTyNa']", addForm).rules("add", {
       remote: {
         url: app.COMMIT_PRODUCT_ADD_ISFINANCSEXIST,
         type: "post",
         dateType: "text",
         data: {
           loTyNa: function() {
             return $("input[name='loTyNa']", addForm).val();
           }
         }
       },
       messages: {
         remote: "该金融产品已存在！"
       }
     });

     $('#jumpStep02', addForm).click(function(event) {
       if(validator.form()) {
         app.$post(app.COMMIT_PRODUCT_SET_CASH_DATA, $("#addFormStep01").serializeObject()).done(function(data) {
           if(app.isOK(data)) {
             $("a[href=#tab1]").parent().removeClass("active");
             $("#tab1").removeClass("active");
             $("a[href=#tab2]").parent().addClass("active");
             $("#tab2").addClass("active");
             $("#addFormStep02").deserializeObject(app.store);
             $(".bindEvent").each(function() {
               $(this).val($(this).next("input[type=hidden]").val());
               $(this).val(app.formatCurrencyMBj($(this).val()));
             });
             $(".rateFormat").each(function() {
               $(this).val($(this).next("input[type=hidden]").val());
               $(this).val(app.formatPercentBj($(this).val()));
             });
             //        根据回显刷新select
             $('#mlTyCd').val(app.store.mlTyCd);
             $('select').selectpicker('refresh');
             app.bindFormValidation($('#addFormStep02'));
           }
         });
       }
     });
   }
   addFinance();
   //第二步的上一步跳转
   $("#backStep01").click(function() {
     $("a[href=#tab2]").parent().removeClass("active");
     $("#tab2").removeClass("active");
     $("a[href=#tab1]").parent().addClass("active");
     $("#tab1").addClass("active");
     $("#addFormStep01").deserializeObject(app.store);
   });
   //验证第二步通过跳到第三步
   app.bindFormValidation($('#addFormStep03'));
   $("#jumpStep03").click(function() {
     var flag = $("#addFormStep02").valid();
     if(flag) {
       app.$post(app.COMMIT_PRODUCT_SET_CASH_DATA, $("#addFormStep02").serializeObject()).done(function(data) {
         if(app.isOK(data)) {
           $("a[href=#tab2]").parent().removeClass("active");
           $("#tab2").removeClass("active");
           $("a[href=#tab3]").parent().addClass("active");
           $("#tab3").addClass("active");
           $("#addFormStep03").deserializeObject(app.store);
         }
       })

     }
   });
   //第三步的上一步跳转
   $("#backStep02").click(function() {
     $("a[href=#tab3]").parent().removeClass("active");
     $("#tab3").removeClass("active");
     $("a[href=#tab2]").parent().addClass("active");
     $("#tab2").addClass("active");
     $("#addFormStep02").deserializeObject(app.store);
     //        根据回显刷新select
     $('#mlTyCd').val(app.store.mlTyCd);
     $('select').selectpicker('refresh');
   });

 }(window.jQuery, window.app);

 function submit(url, param) {
   app.$post(url, param).done(function(data) {
     if(app.isOK(data)) {
       app.alertOK('提交成功！');
       window.location.href = 'product-set-loanType-add.html';
     }
   });
 }
 //提交页面表单

 $(function() {
   $('#jumpStepFinish').click(function() {
     var reqData = $.extend($("#addFormStep01").serializeObject(), $("#addFormStep02").serializeObject(), $("#addFormStep03").serializeObject());
     if($('#addFormStep03').valid()) {
       submit(app.COMMIT_PRODUCT_SET_CASH_DATA, reqData);
     }
     return false;
   });
 });

 /*支付方式决定放款方式 change事件、暂存后回显调用*/
 function selDirecPay(curObj) {
     var textCon = $(curObj).find("option:selected").val();
     $("#mlTyCd option").not("option:first-child").remove();
     var defaultList,indexFlag;
     /*自主支付对应的应只有立即放款*/
     for(var i=0;i<app.mlTyCdList.length;i++){
         if(app.mlTyCdList[i].code=='LF'){
             defaultList = app.mlTyCdList.slice(i);
             indexFlag=i;
         }
     }
     if(textCon == "ZJ") {
         $('#mlTyCd').selectloader({
             'mlTyCdList': defaultList.splice(indexFlag,1)
         })
     } else {
         $('#mlTyCd').selectloader({
             'mlTyCdList': app.mlTyCdList
         })
     }
 }