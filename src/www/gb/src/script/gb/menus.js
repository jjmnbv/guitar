/**
 * 菜单数据模拟
 * menus 左菜单（我的快捷键）
 * mainMenus 主导航
 */
+function ($, app) {
    app.menus = [
        {
            "id": 1,
            "text": "首页",
            "url": "/index.html",
            "style": "{\"iconClassName\":\"icon-home\"}",
            "level": 1,
            "dispOrder": 0,
            "styleObject": {
                "iconClassName": "icon-home"
            }
        },
        {
            "id": 2,
            "text": "gb",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "联系方式管理",
                    "url": "/gb/contract/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 11,
                            "text": "联系方式分页",
                            "url": "/gb/contract/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 1,
                            "menuText": "联系方式管理"
                        },
                        {
                            "id": 12,
                            "text": "联系方式查看",
                            "url": "/gb/contract/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 1,
                            "menuText": "联系方式管理"
                        },
                        {
                            "id": 13,
                            "text": "联系方式列表",
                            "url": "/gb/contract/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 1,
                            "menuText": "联系方式管理"
                        },
                        {
                            "id": 14,
                            "text": "新建联系方式",
                            "url": "/gb/contract/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 1,
                            "menuText": "联系方式管理"
                        },
                        {
                            "id": 15,
                            "text": "修改联系方式",
                            "url": "/gb/contract/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 1,
                            "menuText": "联系方式管理"
                        },
                        {
                            "id": 16,
                            "text": "删除联系方式",
                            "url": "/gb/contract/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 1,
                            "menuText": "联系方式管理"
                        }
                    ],
                },
                {
                    "id": 2,
                    "text": "教育管理",
                    "url": "/gb/education/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 21,
                            "text": "教育分页",
                            "url": "/gb/education/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 2,
                            "menuText": "教育管理"
                        },
                        {
                            "id": 22,
                            "text": "教育查看",
                            "url": "/gb/education/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 2,
                            "menuText": "教育管理"
                        },
                        {
                            "id": 23,
                            "text": "教育列表",
                            "url": "/gb/education/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 2,
                            "menuText": "教育管理"
                        },
                        {
                            "id": 24,
                            "text": "新建教育",
                            "url": "/gb/education/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 2,
                            "menuText": "教育管理"
                        },
                        {
                            "id": 25,
                            "text": "修改教育",
                            "url": "/gb/education/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 2,
                            "menuText": "教育管理"
                        },
                        {
                            "id": 26,
                            "text": "删除教育",
                            "url": "/gb/education/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 2,
                            "menuText": "教育管理"
                        }
                    ],
                },
                {
                    "id": 3,
                    "text": "工作管理",
                    "url": "/gb/job/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 31,
                            "text": "工作分页",
                            "url": "/gb/job/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 32,
                            "text": "工作查看",
                            "url": "/gb/job/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 33,
                            "text": "工作列表",
                            "url": "/gb/job/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 34,
                            "text": "新建工作",
                            "url": "/gb/job/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 35,
                            "text": "修改工作",
                            "url": "/gb/job/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 36,
                            "text": "删除工作",
                            "url": "/gb/job/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 3,
                            "menuText": "工作管理"
                        }
                    ],
                },
                {
                    "id": 4,
                    "text": "门店管理",
                    "url": "/gb/store/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 41,
                            "text": "门店分页",
                            "url": "/gb/store/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 4,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 42,
                            "text": "门店查看",
                            "url": "/gb/store/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 4,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 43,
                            "text": "门店列表",
                            "url": "/gb/store/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 4,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 44,
                            "text": "新建门店",
                            "url": "/gb/store/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 4,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 45,
                            "text": "修改门店",
                            "url": "/gb/store/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 4,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 46,
                            "text": "删除门店",
                            "url": "/gb/store/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 4,
                            "menuText": "门店管理"
                        }
                    ],
                },
                {
                    "id": 5,
                    "text": "作品管理",
                    "url": "/gb/works/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 51,
                            "text": "作品分页",
                            "url": "/gb/works/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 5,
                            "menuText": "作品管理"
                        },
                        {
                            "id": 52,
                            "text": "作品查看",
                            "url": "/gb/works/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 5,
                            "menuText": "作品管理"
                        },
                        {
                            "id": 53,
                            "text": "作品列表",
                            "url": "/gb/works/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 5,
                            "menuText": "作品管理"
                        },
                        {
                            "id": 54,
                            "text": "新建作品",
                            "url": "/gb/works/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 5,
                            "menuText": "作品管理"
                        },
                        {
                            "id": 55,
                            "text": "修改作品",
                            "url": "/gb/works/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 5,
                            "menuText": "作品管理"
                        },
                        {
                            "id": 56,
                            "text": "删除作品",
                            "url": "/gb/works/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 5,
                            "menuText": "作品管理"
                        }
                    ],
                }
            ]
        }
    ];

    app.mainMenus = app.menus;
} (window.jQuery, window.app);
