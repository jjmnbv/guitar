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
            "text": "pr",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "商户管理",
                    "url": "/pr/merchantpr/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 11,
                            "text": "商户分页",
                            "url": "/pr/merchantpr/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 1,
                            "menuText": "商户管理"
                        },
                        {
                            "id": 12,
                            "text": "商户查看",
                            "url": "/pr/merchantpr/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 1,
                            "menuText": "商户管理"
                        },
                        {
                            "id": 13,
                            "text": "商户列表",
                            "url": "/pr/merchantpr/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 1,
                            "menuText": "商户管理"
                        },
                        {
                            "id": 14,
                            "text": "新建商户",
                            "url": "/pr/merchantpr/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 1,
                            "menuText": "商户管理"
                        },
                        {
                            "id": 15,
                            "text": "修改商户",
                            "url": "/pr/merchantpr/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 1,
                            "menuText": "商户管理"
                        },
                        {
                            "id": 16,
                            "text": "删除商户",
                            "url": "/pr/merchantpr/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 1,
                            "menuText": "商户管理"
                        }
                    ],
                }
            ]
        }
    ];

    app.mainMenus = app.menus;
} (window.jQuery, window.app);
