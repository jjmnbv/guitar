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
            "text": "guitar",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "用户管理",
                    "url": "/guitar/user/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 11,
                            "text": "用户分页",
                            "url": "/guitar/user/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 1,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 12,
                            "text": "用户查看",
                            "url": "/guitar/user/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 1,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 13,
                            "text": "用户列表",
                            "url": "/guitar/user/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 1,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 14,
                            "text": "新建用户",
                            "url": "/guitar/user/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 1,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 15,
                            "text": "修改用户",
                            "url": "/guitar/user/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 1,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 16,
                            "text": "删除用户",
                            "url": "/guitar/user/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 1,
                            "menuText": "用户管理"
                        }
                    ],
                }
            ]
        }
    ];

    app.mainMenus = app.menus;
} (window.jQuery, window.app);
