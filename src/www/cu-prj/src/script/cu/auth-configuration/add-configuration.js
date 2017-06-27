/**
 * Created by lina on 2017/3/15.
 */
/**
 * 数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'icon-pruduct-set',
        dt: {
            text: '个人设置',
            url: '#'
        },
        dd: [
            {
                text: '新增功能权限配置',
                url: '#'
            }
        ]
    };
    app.ResActCd = [
        {"code":0,"name":"功能1"},
        {"code":1,"name":"功能2"},
        {"code":2,"name":"功能3"},
        {"code":3,"name":"功能4"},
        {"code":4,"name":"功能5"}
    ];
    $('#mainPage').find('.pagination-reload').click();

}(window.jQuery, window.app);