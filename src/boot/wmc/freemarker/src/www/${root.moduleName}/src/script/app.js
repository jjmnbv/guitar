+function($, app) {
    $.extend(app, {
        base: '',
        style: 'vertical',
        path: {
            app: '/static/app/1.0.0',
            deserialize: '/static/lib/jquery-deserialize/1.3.3',
            google: '/static/lib/google',
            handlebars: '/static/lib/handlebars/4.0.4',
            html5shiv: '/static/lib/html5shiv/3.7.3',
            metronic: '/static/lib/metronic/4.5.2'
        },
        requestUrl: window.location.href.replace(/(http|https):\/\/[^\/]+/, '')
    });
} (window.jQuery, window.app);

+function ($, app) {

    var urlSearch = function(url){
        var param = {};
        var num = url.indexOf("?")
        url = url.substr(num + 1);

        var arr = url.split("&");
        $.each(arr, function(i, v){
            num = v.indexOf("=");
            if (num > 0) {
                var name = v.substring(0, num);
                var value = v.substr(num + 1);
                param[name] = value;
            }
        });

        return param;
    }

    var request = new urlSearch(window.location.href);

    $.extend(app, { request: request });

} (window.jQuery, window.app);
