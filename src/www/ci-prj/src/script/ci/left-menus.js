/*
* 情报系统左侧菜单
* */
+function ($, app) {
    app.leftMenus = [
        {
            "text": "配置管理",
            "level": "1",
            "url": "#",
            "iconClass": "list-icon1",
            "uri": "/",
            "children":[
                {
                    "text": "渠道管理",
                    "level": "2",
                    "url": "/ci/channel-management/channel-management.html",
                    "uri": "/"
                },
                {
                    "text": "接口管理",
                    "level": "2",
                    "url": "/ci/interface-management/interface-management.html",
                    "uri": "/"
                },
                {
                    "text": "接入方管理",
                    "level": "2",
                    "url": "/ci/access-management/access-management.html",
                    "uri": "/"
                }
            ]
        },
        {
            "text": "情报数据",
            "level": "1",
            "url": "#",
            "uri": "/",
            "iconClass": "list-icon2",
            "children":[
                {
                    "text": "认证服务",
                    "level": "2",
                    "url": "#",
                    "uri": "/",
                    "children":[
                        {
                            "text": "手机号认证",
                            "level": "3",
                            "url": "/ci/authentication-service/phone-authentication.html",
                            "uri": "/",
                            "iconClass": ""
                        },
                        {
                            "text": "银行卡认证",
                            "level": "3",
                            "url": "/ci/authentication-service/bankCard-authentication.html",
                            "uri": "/",
                            "iconClass": ""
                        },
                        {
                            "text": "身份认证",
                            "level": "3",
                            "url": "/ci/authentication-service/identity-authentication.html",
                            "uri": "/",
                            "iconClass": ""
                        }
                    ]
                },
                {
                    "text": "查询服务",
                    "level": "2",
                    "url": "#",
                    "uri": "#",
                    "children": [
                        {
                            "text": "黑名单查询",
                            "level": "3",
                            "url": "/ci/search-service/black-query-apply.html",
                            "uri": "/",
                            "iconClass": ""
                        },
                        {
                            "text": "灰名单查询",
                            "level": "3",
                            "url": "/ci/search-service/gray-query-apply.html",
                            "uri": "/",
                            "iconClass": ""
                        },
                        {
                            "text": "学历查询",
                            "level": "3",
                            "url": "/ci/search-service/education-apply.html",
                            "uri": "/",
                            "iconClass": ""
                        }

                    ]
                }
            ]
        },
        {
            "text": "查询记录",
            "level": "1",
            "url": "#",
            "uri": "/",
            "iconClass": "list-icon3",
            "children":[
              /*  {
                    "text": "系统操作日志",
                    "level": "2",
                    "url": "/ci/inquiries/system-log-list.html",
                    "uri": "/"
                },*/
                {
                    "text": "渠道操作日志",
                    "level": "2",
                    "url": "/ci/inquiries/channel-log-list.html",
                    "uri": "/"
                }/*,
                {
                    "text": "查询记录",
                    "level": "2",
                    "url": "/ci/inquiries/authentication.html",
                    "uri": "/"
                }*/
            ]
        },
        {
            "text": "更多栏目",
            "level": "1",
            "url": "#",
            "uri": "/",
            "listEnd": "listEnd",
            "iconClass": "list-icon4",
            "children":[
             /*   {
                    "text": "系统设置",
                    "level": "2",
                    "url": "#",
                    "uri": "/"
                }*/
            ]
        }
    ];

}(window.jQuery, window.app);
