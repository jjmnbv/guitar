+function($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        dt: {
            text: '主页',
            url: '#'
        },
        dd: [
            {
                text: '批量扣款任务',
                url: '#'
            }
        ]
    };
    $(function(){
        $('.main-page').pagination({
        "first-store": app.firstStore
        });
        $('.search .portlet.box').eq(0).hide();
    })
} (window.jQuery, window.app);

