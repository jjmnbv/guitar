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
            "text": "g",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "联系管理",
                    "url": "/g/con/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 11,
                            "text": "联系分页",
                            "url": "/g/con/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 1,
                            "menuText": "联系管理"
                        },
                        {
                            "id": 12,
                            "text": "联系查看",
                            "url": "/g/con/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 1,
                            "menuText": "联系管理"
                        },
                        {
                            "id": 13,
                            "text": "联系列表",
                            "url": "/g/con/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 1,
                            "menuText": "联系管理"
                        },
                        {
                            "id": 14,
                            "text": "新建联系",
                            "url": "/g/con/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 1,
                            "menuText": "联系管理"
                        },
                        {
                            "id": 15,
                            "text": "修改联系",
                            "url": "/g/con/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 1,
                            "menuText": "联系管理"
                        },
                        {
                            "id": 16,
                            "text": "删除联系",
                            "url": "/g/con/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 1,
                            "menuText": "联系管理"
                        }
                    ],
                },
                {
                    "id": 2,
                    "text": "管理",
                    "url": "/g/edu/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 21,
                            "text": "分页",
                            "url": "/g/edu/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 2,
                            "menuText": "管理"
                        },
                        {
                            "id": 22,
                            "text": "查看",
                            "url": "/g/edu/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 2,
                            "menuText": "管理"
                        },
                        {
                            "id": 23,
                            "text": "列表",
                            "url": "/g/edu/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 2,
                            "menuText": "管理"
                        },
                        {
                            "id": 24,
                            "text": "新建",
                            "url": "/g/edu/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 2,
                            "menuText": "管理"
                        },
                        {
                            "id": 25,
                            "text": "修改",
                            "url": "/g/edu/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 2,
                            "menuText": "管理"
                        },
                        {
                            "id": 26,
                            "text": "删除",
                            "url": "/g/edu/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 2,
                            "menuText": "管理"
                        }
                    ],
                },
                {
                    "id": 3,
                    "text": "工作管理",
                    "url": "/g/job/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 31,
                            "text": "工作分页",
                            "url": "/g/job/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 32,
                            "text": "工作查看",
                            "url": "/g/job/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 33,
                            "text": "工作列表",
                            "url": "/g/job/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 34,
                            "text": "新建工作",
                            "url": "/g/job/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 35,
                            "text": "修改工作",
                            "url": "/g/job/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 3,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 36,
                            "text": "删除工作",
                            "url": "/g/job/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 3,
                            "menuText": "工作管理"
                        }
                    ],
                },
                {
                    "id": 4,
                    "text": "角色管理",
                    "url": "/g/role/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 41,
                            "text": "角色分页",
                            "url": "/g/role/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 4,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 42,
                            "text": "角色查看",
                            "url": "/g/role/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 4,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 43,
                            "text": "角色列表",
                            "url": "/g/role/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 4,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 44,
                            "text": "新建角色",
                            "url": "/g/role/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 4,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 45,
                            "text": "修改角色",
                            "url": "/g/role/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 4,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 46,
                            "text": "删除角色",
                            "url": "/g/role/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 4,
                            "menuText": "角色管理"
                        }
                    ],
                },
                {
                    "id": 5,
                    "text": "门店管理",
                    "url": "/g/store/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 51,
                            "text": "门店分页",
                            "url": "/g/store/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 5,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 52,
                            "text": "门店查看",
                            "url": "/g/store/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 5,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 53,
                            "text": "门店列表",
                            "url": "/g/store/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 5,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 54,
                            "text": "新建门店",
                            "url": "/g/store/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 5,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 55,
                            "text": "修改门店",
                            "url": "/g/store/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 5,
                            "menuText": "门店管理"
                        },
                        {
                            "id": 56,
                            "text": "删除门店",
                            "url": "/g/store/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 5,
                            "menuText": "门店管理"
                        }
                    ],
                },
                {
                    "id": 6,
                    "text": "用户管理",
                    "url": "/g/user/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 61,
                            "text": "用户分页",
                            "url": "/g/user/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 6,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 62,
                            "text": "用户查看",
                            "url": "/g/user/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 6,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 63,
                            "text": "用户列表",
                            "url": "/g/user/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 6,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 64,
                            "text": "新建用户",
                            "url": "/g/user/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 6,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 65,
                            "text": "修改用户",
                            "url": "/g/user/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 6,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 66,
                            "text": "删除用户",
                            "url": "/g/user/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 6,
                            "menuText": "用户管理"
                        }
                    ],
                },
                {
                    "id": 7,
                    "text": "工作管理",
                    "url": "/g/works/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 71,
                            "text": "工作分页",
                            "url": "/g/works/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 7,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 72,
                            "text": "工作查看",
                            "url": "/g/works/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 7,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 73,
                            "text": "工作列表",
                            "url": "/g/works/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 7,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 74,
                            "text": "新建工作",
                            "url": "/g/works/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 7,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 75,
                            "text": "修改工作",
                            "url": "/g/works/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 7,
                            "menuText": "工作管理"
                        },
                        {
                            "id": 76,
                            "text": "删除工作",
                            "url": "/g/works/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 7,
                            "menuText": "工作管理"
                        }
                    ],
                }
            ]
        }
    ];

    app.mainMenus = app.menus;
} (window.jQuery, window.app);
