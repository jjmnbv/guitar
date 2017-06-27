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
            ],
            "actions": []
        },

        {
            "id": 2,
            "text": "授信配置",
            "url": "/index1111.html",
            menuIcon: 'nav-middle',
            "level": 3,
            "dispOrder": 2,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "业务类型配置",
                    "url":  "/cl/credit-allocation/service-type-config.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 12,
                    "text": "授信品种配置",
                    "url":  "/cl/credit-allocation/credit-type-config.html",
                    "style": "",
                    "level": 2,
                    "dispOrder": 1,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 21,
                    "text": "授信产品配置",
                    "url": "/cl/credit-allocation/credit-product-config.html",
                    "style": "",
                    "level": 2,
                    "dispOrder": 2,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-after-manager"
            }
        },
        {
            "id": 3,
                "text": "额度配置",
                "url": "/index1111.html",
                menuIcon: 'nav-middle',
                "level": 3,
                "dispOrder": 2,
                "createTime": null,
                "updateTime": null,
                "children": [
                    {
                        "id": 3,
                        "text": "指标集配置",
                        "url":  "/cl/quota-allocation/index-set/index-set-config.html",
                        "style": "{}",
                        "level": 2,
                        "dispOrder": 0,
                        "createTime": null,
                        "updateTime": null,
                        "children": [],
                        "actions": null,
                        "styleObject": null
                    },
                    {
                        "id": 4,
                        "text": "额度执行配置",
                        "url":  "/cl/quota-allocation/quota-execut/quota-execut-config.html",
                        "style": "{}",
                        "level": 2,
                        "dispOrder": 0,
                        "createTime": null,
                        "updateTime": null,
                        "children": [],
                        "actions": null,
                        "styleObject": null
                    }
        ],
                "actions": [],
                "styleObject": {
            "iconClassName": "icon-after-manager"
        }
        },
        {
            "id": 4,
            "text": "授信管理",
            "url": "/index1111.html",
            menuIcon: 'nav-middle',
            "level": 3,
            "dispOrder": 2,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "授信操作流水",
                    "url":  "/cl/credit-management/credit-operation-flow.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 4,
                    "text": "其他额度管理",
                    "url":  "/cl/credit-management/Other-quota-management.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-after-manager"
            }
        }
    ];
}(window.jQuery, window.app);