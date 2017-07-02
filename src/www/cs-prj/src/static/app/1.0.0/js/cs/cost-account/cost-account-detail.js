$(function () {
    +function ($, app) {
        /**
         * 初始化列表数据
         */
        app.$getJSON(app.GET_COST_DATA_BY_ID + app.request.feCode,function(data){
        if (app.isOK(data)) {
           var tpl = Handlebars.compile($('#main-cont-template').html());
           var html = tpl(data);
           $("#main-template").html(html);
           $('.feTyCd').selectloader({'feTyCdList': app.feTyCdList});
           $('.amNaCd').selectloader({'amNaCdList': app.amNaCdList});
           $('.fePayTyCd').selectloader({'fePayTyCdList': app.fePayTyCdList});
           $('.payFrCd').selectloader({'payFrCdList': app.payFrCdList});
           $('.feCalCd').selectloader({'feCalCdList': app.feCalCdList});
           $("input").attr("disabled",true);
           return;
            }
            app.alertError(data.errors.join('\n'));
        });
        
    }(window.jQuery, window.app);
});
