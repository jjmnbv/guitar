+function ($, app) {
    // app.mainMenus = [
    //     {
    //         "id": 1,
    //         "text": "首页",
    //         "url": "/index.html",
    //         "style": "{\"iconClassName\":\"icon-home\"}",
    //         "level": 1,
    //         "dispOrder": 0,
    //         "createTime": null,
    //         "updateTime": null,
    //         "children": [],
    //         "actions": [],
    //         "styleObject": {
    //             "iconClassName": "icon-home"
    //         }
    //     }
    // ];
    app.mainMenus = [
        {
            "id": 1,
            "text": "实体信息",
            "url": "/cr/entityInfo/entityInfo.html",
            menuIcon: 'nav-index',
            "level": 1
        },
        {
            "id": 5,
            "text": "业务申请信息",
            "url": "cr/bizApplicationInfo/bizApplicationInfo.html",
            menuIcon: 'nav-task',
            "level": 1,
            "dispor": 1,
            "createTime": null,
            "updateTime": null
        },
        {
            "id": 9,
            "text": "准入规则",
            "url": "/index11.html",
            menuIcon: 'nav-custom',
            "level": 1,
            "dispor": 2,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 10,
                    "text": "岗位管理",
                    "url": "/cu/post-management/post-management-list.html",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }/*,
                 {
                 "id": 11,
                 "text": "新增岗位信息",
                 "url": "#",
                 "style": "{}",
                 "level": 2,
                 "dispor": 0,
                 "createTime": null,
                 "updateTime": null,
                 "actions": null,
                 "styleObject": null
                 },
                 {
                 "id": 12,
                 "text": "修改岗位信息",
                 "url": "#",
                 "style": "{}",
                 "level": 2,
                 "dispor": 0,
                 "createTime": null,
                 "updateTime": null,
                 "actions": null,
                 "styleObject": null
                 }*/
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-before-manager"
            }
        },
        {
            "id": 13,
            "text": "角色管理",
            "url": "/index111.html",
            menuIcon: 'nav-before',
            "level": 1,
            "dispor": 3,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 14,
                    "text": "角色管理",
                    "url": "/cu/role-management/role-management-list.html",
                    "style": "{}",
                    "level": 3,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "actions": null,
                    "styleObject": null,
                    "children": [
                        {
                            "id": 14,
                            "text": "角色管理",
                            "url": "/cu/role-management/role-management-list.html",
                            "style": "{}",
                            "level": 3,
                            "dispor": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 14,
                            "text": "角色管理",
                            "url": "/cu/role-management/role-management-list.html",
                            "style": "{}",
                            "level": 3,
                            "dispor": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 14,
                            "text": "角色管理",
                            "url": "/cu/role-management/role-management-list.html",
                            "style": "{}",
                            "level": 3,
                            "dispor": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": null,
                            "styleObject": null
                        }
                        ]
                }/*,
                 {
                 "id": 15,
                 "text": "新增角色信息",
                 "url": "/cu/business-partner/partner-list.html",
                 "style": "{}",
                 "level": 4,
                 "dispor": 0,
                 "createTime": null,
                 "updateTime": null,
                 "children": [],
                 "actions": null,
                 "styleObject": null
                 },
                 {
                 "id": 16,
                 "text": "修改角色信息",
                 "url": "/cu/business-partner/partner-list.html",
                 "style": "{}",
                 "level": 2,
                 "dispor": 0,
                 "createTime": null,
                 "updateTime": null,
                 "children": [],
                 "actions": null,
                 "styleObject": null
                 }*/
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-middle-manager"
            }
        },
        {
            "id": 17,
            "text": "用户管理",
            "url": "/index1111.html",
            menuIcon: 'nav-middle',
            "level": 3,
            "dispor": 5,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 18,
                    "text": "用户管理",
                    "url": "/cu/user-management/user-management-list.html",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
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
            "id": 25,
            "text": "菜单管理",
            "url": "/index11111.html",
            menuIcon: 'nav-after',
            "level": 3,
            "dispor": 6,
            "createTime": null,
            "updateTime": null,
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-warn-manager"
            },
            "children": [
                {
                    "id": 26,
                    "text": "菜单管理",
                    "url": "/cu/menu-management/menu-management.html",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ]
        },
        {
            "id": 27,
            "text": "权限管理",
            "url": "/index11111.html",
            menuIcon: 'nav-warn',
            "level": 3,
            "dispor": 7,
            "createTime": null,
            "updateTime": null,
            "actions": [],
            "children": [
                {
                    "id": 26,
                    "text": "权限管理",
                    "url": "/cu/auth-management/auth-management.html",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ]
        },
        {
            "id": 28,
            "text": "日志管理",
            "url": "#",
            "level": 3,
            "dispor": 8,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 29,
                    "text": "系统操作日志",
                    "url": "/cu/journal-management/journal-management.html",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            menuIcon: 'nav-system'
        },
        {
            "id": 31,
            "text": "菜单图标管理",
            "url": "#",
            "level": 3,
            "dispor": 9,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 32,
                    "text": "菜单图标管理",
                    "url": "/cu/menu-picture/menu-picture-list.html",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            menuIcon: 'nav-system'
        },
        {
            "id": 33,
            "text": "权限文件管理",
            "url": "#",
            "level": 3,
            "dispor": 9,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 34,
                    "text": "权限文件管理",
                    "url": "/cu/authfile-management/authfile-management.html",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 35,
                    "text": "用户信息",
                    "url": "#",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 36,
                    "text": "机构信息",
                    "url": "#",
                    "style": "{}",
                    "level": 2,
                    "dispor": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            menuIcon: 'nav-system'
        }

    ];
} (window.jQuery, window.app);
