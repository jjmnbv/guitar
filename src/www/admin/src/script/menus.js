+function ($, app) {
    app.menus = [
        {
            "id": 1,
            "text": "首页",
            "url": "/index.html",
            "style": "{\"iconClassName\":\"icon-home\"}",
            "level": 1,
            "dispOrder": 0,
            "createTime": null,
            "updateTime": null,
            "children": [],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-home"
            }
        },
        {
            "id": 2,
            "text": "系统管理",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "菜单管理",
                    "url": "/admin/menu/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": [
                        {
                            "id": 4,
                            "text": "创建菜单",
                            "url": "/menu/create",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        },
                        {
                            "id": 5,
                            "text": "显示菜单树",
                            "url": "/menu/jstree",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 2,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        },
                        {
                            "id": 6,
                            "text": "显示菜单",
                            "url": "/menu/view/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 3,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        },
                        {
                            "id": 7,
                            "text": "修改菜单",
                            "url": "/menu/update",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        },
                        {
                            "id": 8,
                            "text": "删除菜单",
                            "url": "/menu/remove/**",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        },
                        {
                            "id": 9,
                            "text": "新增页面资源",
                            "url": "/menu/action-create",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        },
                        {
                            "id": 10,
                            "text": "修改页面资源",
                            "url": "/menu/action-update",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        },
                        {
                            "id": 11,
                            "text": "删除页面资源",
                            "url": "/menu/action-remove/**",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 3,
                            "menuText": "菜单管理"
                        }
                    ],
                    "styleObject": null
                },
                {
                    "id": 12,
                    "text": "用户管理",
                    "url": "/user/index",
                    "style": "",
                    "level": 2,
                    "dispOrder": 1,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": [
                        {
                            "id": 13,
                            "text": "用户导出",
                            "url": "/export/users/xlsx",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 14,
                            "text": "用户导入",
                            "url": "/admin/user/import/excel",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 15,
                            "text": "离职人员导入",
                            "url": "/admin/user/import/former",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 16,
                            "text": "用户列表",
                            "url": "/user/page/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 17,
                            "text": "新增用户",
                            "url": "/user/create",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 18,
                            "text": "修改用户",
                            "url": "/user/update",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 19,
                            "text": "产科用户信息",
                            "url": "/user/view/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        },
                        {
                            "id": 20,
                            "text": "重置密码",
                            "url": "/user/reset-login-password",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 12,
                            "menuText": "用户管理"
                        }
                    ],
                    "styleObject": null
                },
                {
                    "id": 21,
                    "text": "角色管理",
                    "url": "/role/index",
                    "style": "",
                    "level": 2,
                    "dispOrder": 2,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": [
                        {
                            "id": 22,
                            "text": "创建角色",
                            "url": "/role/create",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 23,
                            "text": "删除角色",
                            "url": "/role/remove/**",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 24,
                            "text": "显示角色",
                            "url": "/role/view/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 25,
                            "text": "修改角色",
                            "url": "/role/update",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 26,
                            "text": "权限设置页面",
                            "url": "/role/permissions-view/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 27,
                            "text": "修改角色权限关联",
                            "url": "/role/permissions-update",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 28,
                            "text": "显示角色用户关联",
                            "url": "/role/users-view/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 29,
                            "text": "修改角色管理用户",
                            "url": "/role/users-update",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 32,
                            "text": "角色分页",
                            "url": "/role/page/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        },
                        {
                            "id": 33,
                            "text": "判断角色是否不存在",
                            "url": "/role/notexists",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 21,
                            "menuText": "角色管理"
                        }
                    ],
                    "styleObject": null
                },
                {
                    "id": 34,
                    "text": "机构管理",
                    "url": "/organ/index",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 3,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": [
                        {
                            "id": 35,
                            "text": "当前菜单下所有权限",
                            "url": "/organ/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 34,
                            "menuText": "机构管理"
                        },
                        {
                            "id": 36,
                            "text": "系统组织机构导出",
                            "url": "/export/organs/xlsx",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 34,
                            "menuText": "机构管理"
                        },
                        {
                            "id": 37,
                            "text": "判断机构是否不存在",
                            "url": "/organ/notexists",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 34,
                            "menuText": "机构管理"
                        }
                    ],
                    "styleObject": null
                },
                {
                    "id": 38,
                    "text": "日志查询",
                    "url": "/syslog/index",
                    "style": "",
                    "level": 2,
                    "dispOrder": 4,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": [
                        {
                            "id": 39,
                            "text": "日志分页",
                            "url": "/syslog/page/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 38,
                            "menuText": "日志查询"
                        }
                    ],
                    "styleObject": null
                },
                {
                    "id": 40,
                    "text": "字典分类管理",
                    "url": "/admin/dictionaryCategory/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 5,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": [
                        {
                            "id": 41,
                            "text": "字典分页",
                            "url": "/wordbook/page/**",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 40,
                            "menuText": "字典管理"
                        },
                        {
                            "id": 42,
                            "text": "判断字典是否不存在",
                            "url": "/wordbook/notexists",
                            "status": "AUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 40,
                            "menuText": "字典管理"
                        },
                        {
                            "id": 43,
                            "text": "保存字典",
                            "url": "/wordbook/save",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 40,
                            "menuText": "字典管理"
                        },
                        {
                            "id": 44,
                            "text": "删除字典",
                            "url": "/wordbook/remove/**",
                            "status": "NOTAUTHORIZED",
                            "level": 1,
                            "dispOrder": 9999,
                            "createTime": null,
                            "updateTime": null,
                            "menuId": 40,
                            "menuText": "字典管理"
                        }
                    ],
                    "styleObject": null
                }
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-settings"
            }
        }
    ];
} (window.jQuery, window.app);