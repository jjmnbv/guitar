 + function($, app) {
   /**
    * 初始化列表数据
    */
   $('.feCd').selectloader({
     'feeTypeList': app.feeTypeList
   });
   $('.inclToPrYn').radioloader({
     'inclToPrYnList': app.inclToPrYnList
   });
   $('.fePayTyCd').selectloader({
     'fePayTyCdList': app.fePayTyCdList
   });
   $('.payFrCd').selectloader({
     'payFrCdList': app.payFrCdList
   });
   $('.feeCalCd').selectloader({
     'feeCalCdList': app.feeCalCdList
   });
   $('.totFeYn').radioloader({
     'totFeYnList': app.totFeYnList
   });
   $('#feDa').selectloader({
     'feDaList': app.feDaList
   });
   $('#fePuCd').selectloader({
     'fePuCdList': app.fePuCdList
   });
   $("input").uniform();
 }(window.jQuery, window.app);
 
 $(function() {
   /*最小费用最大费用 动态加校验*/
   $('body').on('change', '#minFeAm', function() {
     if($(this).valid()) {
       $(this).addClass(" bindEvent ltRelateMon");
     }
   });
   $('body').on('change', '#maxFeAm', function() {
     if($(this).valid()) {
       $(this).addClass(" bindEvent gtRelateMon ");
     }
   });

   /*对于选择分期收取时添加一下字段：收费日、收费日频率、收费间隔数量、收费期数*/
   $('body').on('change', '.fePayTyCd', function() {
     var thisVal = $(this).find('option:selected').val();
     if(thisVal == 'FQ') {
       $('.instalment-hidden').addClass("instalment-show");
       $('.instalment-show').find('input,select').attr("disabled",false);
     } else {
       $('.instalment-show').find('input,select').attr("disabled",true);
       $('.instalment-hidden').removeClass("instalment-show");
     }
     $('select').selectpicker('refresh');
   });
 });

 //级联关系隐藏
 function changeCas(curObj) {
   var textCon = $(curObj).find("option:selected").val();
   if(textCon == "GD") {
     $('.fixedCalType').removeClass("hide").find("input").prop("disabled", false);
     $('.scaleType').addClass("hide").find("input").prop("disabled", true);
   } else if(textCon == "BL") {
     $('.scaleType').removeClass("hide").find("input").prop("disabled", false);
     $('.fixedCalType').addClass("hide").find("input").prop("disabled", true);
   } else {
     $('.fixedCalType,.scaleType').addClass("hide").find("input").prop("disabled", true);
   }
 }
 //提交页面表单
 $(function() {
   app.bindFormValidation($('#add-cost-form'));
   $('#saveForm').click(function(event) {
     if($('#add-cost-form').valid()) {
       submit(app.COMMIT_COST_SUB_ADD_DATA, $('#add-cost-form').serializeObject(), event.target);
     }
     return false;
   });
 });

 //lh 页面相对后台字段进行输入校验的规则

 //(期限)需要小于
 jQuery.validator.addMethod("maxPerQtTerm", function(value, element) {
   var maxPerQt = app.csSyPaC.maxPerQt;
   var compareRe = true;
   var valueNum = app.unformatMoney(value);
   compareRe = (valueNum <= maxPerQt);
   return this.optional(element) || compareRe;
 }, function(value, element) {
   return '请输入不大于' + app.csSyPaC.maxPerQt + '的数值';
 });