+function($, app){
    app.stList=[
        {"stCode":"0","stCode":"激活"},
        {"stCode":"1","stCode":"待激活"},
        {"stCode":"2","stCode":"终止"},
    ];
    app.crumbs = {
        icon: 'icon-index',
        dt: {
            text: '首页',
            url: '/index.html'
        },
        dd: [
            {
                text: '门店管理',
                url:'/cs/store-list.html'
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    $('#mainPage').find('.pagination-reload').click();

}(window.jQuery,window.app);


