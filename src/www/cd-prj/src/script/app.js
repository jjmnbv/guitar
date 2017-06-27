+function($, app) {
    $.extend(app, {
        base: '',
        loginurl: '/login',
        cubase: 'http://124.193.90.196:8002',
        style: 'vertical',
        path: {
            app: '/static/app/1.0.0',
            deserialize: '/static/lib/jquery-deserialize/1.3.3',
            google: '/static/lib/google',
            handlebars: '/static/lib/handlebars/4.0.4',
            html5shiv: '/static/lib/html5shiv/3.7.3',
            metronic: '/static/lib/metronic/4.5.2'
        },
        requestUrl: window.location.href.replace(/(http|https):\/\/[^\/]+/, ''),
        inboxs: [
            { "id": 1, "createTime": "2016-11-14 21:00:00", "summary": "李天二发起协同:《付款审批-FKSQ-201611-050-李天二-》" }
        ]
    });
} (window.jQuery, window.app);
