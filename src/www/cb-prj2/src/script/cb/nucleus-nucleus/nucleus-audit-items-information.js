/**
 * 数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'business-processing',
        dt: {
            text: '业务办理',
            url: '#'
        },
        dd: [
            {
                text: '贷款申请处理',
                url: '#'
            },
            {
                text: '电核/初核',
                url: '/cb/nucleus-nucleus/nucleus-nucleus-list.html'
            },
            {
                text: '审核项信息',
                url: '/cb/nucleus-nucleus/nucleus-audit-items-information.html'
            }
        ]
    };

}(window.jQuery, window.app);