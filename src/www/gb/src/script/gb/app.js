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
