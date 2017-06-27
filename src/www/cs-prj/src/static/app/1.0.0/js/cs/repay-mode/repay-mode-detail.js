$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        app.$getJSON(app.GET_REPAY_DATA_BY_ID + app.request.loPmId,function(data){
        if (app.isOK(data)) {
           var tpl = Handlebars.compile($('#main-cont-template').html());
           var html = tpl(data);
           $("#main-template").html(html);
           $(".percentFormat").each(function(){
             $(this).val(app.formatPercentBj($(this).val()));
           });
           $('.pmCd').selectloader({'pmCd': app.pmCd});
           $('.inCalPerCd').selectloader({'inCalPerCd': app.inCalPerCd});
	         $('.inCalBaCd').selectloader({'inCalBaCd': app.inCalBaCd});
	         $('.mlPrPeCd').selectloader({'mlPrPeCd': app.mlPrPeCd});
	         $('.pmTyCd').selectloader({'pmTyCd': app.pmTyCd});
	         $('.payComCd').selectloader({'payComCd': app.payComCd});
	         $('.perProYn').radioloader({'perProYnList': app.perProYnList});
           $("input,select").attr("disabled",true);
           $('select').selectpicker('refresh');
           $("textarea").attr('readonly',true);
           return;
            }
            app.alertError(data.errors.join('\n'));
        });
        
    }(window.jQuery, window.app);
});
