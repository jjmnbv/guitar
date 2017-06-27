$(function () {
        var $ = window.jQuery;
        var app = window.app;
        +function($, app) {
            var init = function () {
                var tpl = Handlebars.compile($('#menu-template').html());
                var html = tpl(app);
                $("#pull-right").html(html);
            };
            init();
        } (window.jQuery, window.app);
    });
