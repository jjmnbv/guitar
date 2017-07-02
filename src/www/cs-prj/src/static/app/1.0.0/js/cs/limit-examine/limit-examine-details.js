$(function(){
    +function ($, app) {
        $.getJSON(app.LIMIT_VIEW + app.request.code, function (data) {
            if (app.isOK(data)) {
                app.registerTextHelper('byName', app.jobName, 'postNo', 'postNa');
                app.registerTextHelper('byNo', app.limitexamine, 'id', 'loginNa');

                var tpl = Handlebars.compile($('#table-cont1-template').html());
                var html = tpl(data);
                $("#mianCont").html(html);

                $('.byName').selectloader({'jobName': app.jobName});
                $('#jobTableBody').find('[data-listener-select-target]').each(function () {
                    listenerSelectTarget($(this));
                });
                $('.byNo').selectloader({'limitexamine': app.limitexamine});
                $('#userTable').find('[data-listener-select-target]').each(function () {
                    listenerSelectTarget($(this));
                });



                $("#details-form input").attr("disabled",true);
                $("#details-form select").attr("disabled",true);
                $('input').uniform();

                $(".bindEvent").each(function(){
                    $(this).val(app.formatCurrencyM($(this).val()));
                });

            }
        });

    }(window.jQuery, window.app);

});
