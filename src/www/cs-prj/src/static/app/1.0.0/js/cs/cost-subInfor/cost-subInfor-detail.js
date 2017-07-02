$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        app.$getJSON(app.GET_COST_SUB_DATA_BY_ID + '?feCd=' + app.request.feCd + '&suId=' + app.request.suId ,function(data){
        if (app.isOK(data)) {
           var tpl = Handlebars.compile($('#main-cont-template').html());
           var html = tpl(data);
           $("#main-template").html(html);
            //添加 %
            $("#fePe").val(app.formatPercentBj($("#fePe").val()));
           $(".bindEvent").each(function(){
           	$(this).val(app.formatCurrencyM($(this).val()));
           });
           $('.feCd').selectloader({'feeTypeList': app.feeTypeList});
           $('.fePayTyCd').selectloader({'fePayTyCdList': app.fePayTyCdList});
           $('.payFrCd').selectloader({'payFrCdList': app.payFrCdList});
           $('.feeCalCd').selectloader({'feeCalCdList': app.feeCalCdList});
           $('.inclToPrYn').radioloader({'inclToPrYnList': app.inclToPrYnList});
           $('.totFeYn').radioloader({'totFeYnList': app.totFeYnList});
           $('.payDireCd').selectloader({'payDireCdList': app.payDireCdList});
            $('#feDa').selectloader({'feDaList':app.feDaList});
            $('#fePuCd').selectloader({'fePuCdList':app.fePuCdList});
            if(data.fePayTyCd=='FQ'){
                $('.instalment-hidden').addClass("instalment-show");
                $('.instalment-show').find('input,select').addClass("required");
            }
            $("input,select").attr("disabled",true);
            $('input,select').selectpicker('refresh');
           return;
            }
            app.alertError(data.errors.join('\n'));
        });
        
    }(window.jQuery, window.app);
});
