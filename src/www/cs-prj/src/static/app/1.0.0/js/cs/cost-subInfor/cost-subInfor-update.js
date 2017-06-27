 + function($, app) {
   /**
    * 初始化列表数据
    */

   app.$getJSON(app.GET_COST_SUB_DATA_BY_ID + '?feCd=' + app.request.feCd + '&suId=' + app.request.suId, function(data) {
     if(app.isOK(data)) {
       var tpl = Handlebars.compile($('#main-cont-template').html());
       var html = tpl(data);
       $("#main-template").html(html);
      
       app.bindFormValidation($('#update-cost-form'));

       $(".bindEvent").each(function() {
         $(this).next('input[type=hidden]').val($(this).val());
         $(this).val(app.formatCurrencyM($(this).val()));
       });

       $(".percentFormat").each(function() {
         $(this).next('input[type=hidden]').val($(this).val());
         $(this).val(app.formatPercentBj($(this).val()));
       });
       $("#minQlCondQt,#maxQlCondQt").prop("max", app.csSyPaC.maxPerQt);
       $('.feCd').selectloader({
         'feeTypeList': app.feeTypeList
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
       $('.inclToPrYn').radioloader({
         'inclToPrYnList': app.inclToPrYnList
       });
       $('.totFeYn').radioloader({
         'totFeYnList': app.totFeYnList
       });
       $('.payDireCd').selectloader({
         'payDireCdList': app.payDireCdList
       });
       $('#feDa').selectloader({
         'feDaList': app.feDaList
       });
       $('#fePuCd').selectloader({
         'fePuCdList': app.fePuCdList
       });
       
        $("input").uniform();
       if(data.fePayTyCd == 'FQ') {
         $('.instalment-hidden').addClass("instalment-show");
         $('.instalment-show').find('input,select').attr("disabled",false);
         $('select').selectpicker('refresh');
       }else {
         $('.instalment-hidden').find('input,select').attr("disabled",true);
       }
       /*对于选择分期收取时添加一下字段：收费日、收费日频率、收费间隔数量、收费期数*/
       $('body').on('change', '.fePayTyCd', function() {
         var thisVal = $(this).find('option:selected').val();
         if(thisVal == 'FQ') {
           $('.instalment-hidden').addClass("instalment-show");
           $('.instalment-show').find('input,select').attr("disabled", false);
         } else {
           $('.instalment-show').find('input,select').attr("disabled", true);
           $('.instalment-hidden').removeClass("instalment-show");
         }
         $('select').selectpicker('refresh');
       });

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

       /*页面一进来 给隐藏模块置disabled*/
       if($("#feeCalCd").data("selectloader-val") == "GD") {
         $('.fixedCalType').find("input select").prop("disabled", false);
       } else {
         $('.scaleType').find("input").prop("disabled", false);
       }
       return;
     }
     app.alertError(data.errors.join('\n'));
   });
 }(window.jQuery, window.app);

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
   $(document).on('click', '#saveForm', function(event) {
     if($('#update-cost-form').valid()) {
       $('#update-cost-form').find("select").attr("disabled", false);
       $('#update-cost-form').find("#feCd").css("background-color", "#efefef;");
       submit(app.COMMIT_COST_SUB_UPDATE_DATA, $('#update-cost-form').serializeObject(), event.target);
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