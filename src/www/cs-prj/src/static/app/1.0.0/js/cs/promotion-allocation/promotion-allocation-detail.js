$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        	app.$getJSON(app.GET_PROMO_DATA_BY_ID + app.request.promNo,function(data){
        if (app.isOK(data)) {
                var tpl = Handlebars.compile($('#main-cont-template').html());
                var html = tpl(data);
                $("#main-template").html(html);
                $(".bindEvent").each(function(){
           	    $(this).val(app.formatCurrencyM($(this).val()));
                });
                $(".percentFormat").each(function(){
                   $(this).val(app.formatPercentBj($(this).val()));
                });
                $('.promCondPmId').selectloader({'promCondPmIdList': app.promCondPmIdList});
                $('.promBeneCd').selectloader({'promBeneCdList': app.promBeneCdList});
                $('.promBeneYh').selectloader({'promBeneYhList': app.promBeneYhList});
                $('.feCd').selectloader({'feeTypeList': app.feeTypeList});
                $("input").attr("disabled",true);
                return;
            }
            app.alertError(data.errors.join('\n'));
        });
    }(window.jQuery, window.app);
});
