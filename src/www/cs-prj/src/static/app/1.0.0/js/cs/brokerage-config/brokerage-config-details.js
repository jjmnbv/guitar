$(function(){

    +function ($, app) {
        $.getJSON(app.BROKERAGE_VIEW + app.request.id, function (data) {
            if (app.isOK(data)) {
                var tpl = Handlebars.compile($('#table-cont-template').html());
                var html = tpl(data);
                $("#main-template").html(html);

                $('.baseCode').selectloader({'baseCodeItem':app.baseCodeItem});
                $('.code').selectloader({'codeItem':app.codeItem});
                $('.subCode').selectloader({'subCodeItem':app.subCodeItem});

                $("#details-form input").attr("disabled",true);
                $("#details-form select").attr("disabled",true);
                $('select').selectpicker('refresh');
                $(".bindEvent").each(function(){
                    if($(this).val()!=""){
                        $(this).val(app.formatCurrencyM($(this).val()));
                    }
                });
                $(".percentFormat").each(function(){
                    $(this).val(app.formatPercentBj($(this).val()));
                });


            }
        });
    }(window.jQuery, window.app);

    $('.baseCode').selectloader({'baseCodeItem':app.baseCodeItem});
    $('.code').selectloader({'codeItem':app.codeItem});
    $('.subCode').selectloader({'subCodeItem':app.subCodeItem});

});
