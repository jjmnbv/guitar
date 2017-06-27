
    +function ($, app) {
        App.startPageLoading({animate: true});
        var init = function () {
            $.getJSON(app.COMMON_SHOW+"?ciApplyWater="+app.request.ciApplyWater  , function (res) {
                        if (app.isOK(res)) {
                            App.stopPageLoading();
                            var tpl = Handlebars.compile($('#common-show-form-template').html());
                            var html = tpl(res);
                            $("#common-show").html(html);
                            return;
                        }
                        app.alertError(res.errors.join('\n'));
                    }
            );
        };
        init();
    }(window.jQuery, window.app);
