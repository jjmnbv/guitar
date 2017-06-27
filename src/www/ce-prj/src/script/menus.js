/**
 * 菜单数据模拟
 * menus 左菜单（我的快捷键）
 * mainMenus 主导航
 */
+function ($, app) {
    app.menus = [
        {
            "id": 1,
            "text": "我的任务",
            "url": "/index.html",
            "style": "{\"iconClassName\":\"icon-home\"}",
            "level": 1,
            "dispOrder": 0,
            "createTime": null,
            "updateTime": null,
            "styleObject": {
                "iconClassName": "icon-my-task"
            }
        }
    ];
    app.mainMenus = [
        {
            "id": 1,
            "text": "首 页",
            "url": "/index.html",
            menuIcon: 'nav-index',
            "level": 1,
            "dispOrder": 0,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "菜单管理",
                    "url": "/menu/index",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [
                        {
                            "id": 3,
                            "text": "菜单管理",
                            "url": "/menu/index",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": [],
                            "styleObject": null
                        }
                    ],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": []
        },
        {
            "id": 2,
            "text": "账户管理",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "账户列表",
                    "url": "/ce/ceacinf/ceacinf-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 3,
            "text": "基础资料",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "基础资料",
                    "url": "/ce/cebrinf/cebrinf-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 4,
            "text": "批量扣款任务",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "批量扣款任务",
                    "url": "/ce/cepausfa/cepausfa-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 5,
            "text": "综合查询",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "汇总查询",
                    "url": "/ce/synthQuery/ceallquery-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                },
                {
                    "id": 2,
                    "text": "明细查询",
                    "url": "/ce/synthQuery/detailquery-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 6,
            "text": "放款管理",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "放款管理",
                    "url": "/ce/cemlap/cemlap-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 7,
            "text": "扣款管理",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "扣款管理",
                    "url": "/ce/cepaus/cepaus-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 8,
            "text": "系统参数",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "参数管理",
                    "url": "/ce/systemConfig/systemConfig-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                },
				{
                    "id": 2,
                    "text": "路由规则配置",
                    "url": "/ce/cerourulc/cerourulc-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                },
				{
                    "id": 3,
                    "text": "交易渠道配置",
                    "url": "/ce/cetrachac/cetrachac-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 9,
            "text": "文本读写规则",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "文本读写规则表管理",
                    "url": "/ce/ceficfg/ceficfg-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                },
                {
                    "id": 2,
                    "text": "文件头文件规则管理",
                    "url": "/ce/ceficfg/cefihd-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        },
        {
            "id": 10,
            "text": "文件日志表管理",
            "url": "",
            menuIcon: 'nav-custom',
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                {
                    "id": 1,
                    "text": "文件日志表管理",
                    "url": "/ce/cefircd/cefircd-index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": []
                }

            ]
        }
    ];

} (window.jQuery, window.app);
