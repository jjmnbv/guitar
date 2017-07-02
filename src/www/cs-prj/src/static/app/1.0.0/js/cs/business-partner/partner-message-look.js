$(function(){

    app.registerTextHelper('cooKiCd', app.classify, 'code', 'name');
    app.registerTextHelper('cooNatCd', app.industry, 'code', 'name');
    app.registerTextHelper('comiPuCd', app.finalType, 'code', 'name');
    app.registerTextHelper('comiId', app.program, 'code', 'name');
    app.registerTextHelper('acPaTyCd', app.accountIdType, 'code', 'name');
    app.registerTextHelper('acUsCd', app.accountUse, 'code', 'name');
    app.registerTextHelper('acTyCd', app.accountTpye, 'code', 'name');
    app.registerTextHelper('csCooCoBList.[0].comiSetlDa', app.closeAccount, 'code', 'name');
    +function ($, app) {
        $.getJSON(app.FIND_BY_ID + app.request.cooNo, function (data) {
            if (app.isOK(data)) {
                var tpl = Handlebars.compile($('#main-cont-template').html());
                var html = tpl(data);
                $("#main-template").html(html);

                $('#provCd').selectloader({'provinceList': app.provinceList});
                $('#cooNatCd').selectloader({'industry': app.industry});
                $('#cooKiCd').selectloader({'classify': app.classify});
                $('#comiPuCd').selectloader({'finalType': app.finalType});
                $('#comiId').selectloader({'program': app.program});
                $('#acPaTyCd').selectloader({'accountIdType':app.accountIdType});
                $('#acUsCd').selectloader({'accountUse':app.accountUse});
                $('#acTyCd').selectloader({'accountTpye':app.accountTpye});
                $('#comiSetlDa').selectloader({'closeAccount':app.closeAccount});
				$('.acCd').selectloader({'acCdList':app.acCdList});

                $("#details-form input,#details-form select").attr("disabled",true);

                $(".bindEvent").each(function(){
                    $(this).val(app.formatCurrencyM($(this).val()));
                });

                return;
            }
            app.alertError(data.errors.join('\n'));
        });
    }(window.jQuery, window.app);
});