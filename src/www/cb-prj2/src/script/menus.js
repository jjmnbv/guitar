/**
 * 菜单数据模拟
 * menus 左菜单（我的快捷键）
 * mainMenus 主导航
 */
+function ($, app) {
    app.menus = [
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
                /*  {
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
                }*/
            ],
            "actions": []
        },
        {
            "id": 2,
            "text": "我的任务",
            "url": "/1index1.html",
            menuIcon: 'nav-task',
            "level": 1,
            "dispOrder": 1,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "待办任务",
                    "url": "/cb/mytask-list/mytask-waiting-list.html",
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
                    "text": "已办任务",
                    "url": "/cb/mytask-list/mytask-finish-list.html",
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
                    "text": "已结任务",
                    "url": "/cb/mytask-list/mytask-end-list.html",
                    "style": "",
                    "level": 2,
                    "dispOrder": 2,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 22,
                    "text": "取消任务",
                    "url": "/cb/mytask-list/mytask-cancle-list.html",
                    "style": "",
                    "level": 2,
                    "dispOrder": 3,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 22,
                    "text": "拒绝任务",
                    "url": "/cb/mytask-list/mytask-refuse-list.html",
                    "style": "",
                    "level": 2,
                    "dispOrder": 4,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-guest-manager"
            }
        },
        {
            "id": 3,
            "text": "客户管理",
            "url": "/index11.html",
            menuIcon: 'nav-custom',
            "level": 1,
            "dispOrder": 2,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "黑白名单管理",
                    "url": "#",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [
                        {
                            "id": 1,
                            "text": "个人白名单",
                            "url": "/name-ist-management/person-white-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": [],
                            "styleObject": null
                        },
                        {
                            "id": 1,
                            "text": "个人黑名单",
                            "url": "/name-ist-management/person-black-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": [],
                            "styleObject": null
                        },
                        {
                            "id": 1,
                            "text": "个人灰名单",
                            "url": "/name-ist-management/person-gray-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": [],
                            "styleObject": null
                        },
                        {
                            "id": 1,
                            "text": "合作方白名单",
                            "url": "/name-ist-management/partner-white-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": [],
                            "styleObject": null
                        },
                        {
                            "id": 1,
                            "text": "合作方黑名单",
                            "url": "/name-ist-management/partner-black-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "children": [],
                            "actions": [],
                            "styleObject": null
                        },
                        {
                            "id": 1,
                            "text": "合作方灰名单",
                            "url": "/name-ist-management/partner-gray-list.html",
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
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-before-manager"
            }
        },
        {
            "id": 4,
            "text": "合作方管理",
            "url": "/index111.html",
            menuIcon: 'nav-before',
            "level": 1,
            "dispOrder": 2,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 41,
                    "text": "合作商管理",
                    "url": "/business-partner/partner-list.html",
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
                    "text": "门店管理",
                    "url": "/store/store-list.html",
                    "style": "",
                    "level": 2,
                    "dispOrder": 1,
                    "createTime": null,
                    "updateTime": null,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-middle-manager"
            }
        },
        {
            "id": 5,
            "text": "业务办理",
            "url": "/index1111.html",
            menuIcon: 'nav-middle',
            "level": 3,
            "dispOrder": 2,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "贷款申请处理",
                    "url": "",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "createTime": null,
                    "updateTime": null,
                    "children": [
                        {
                            "id": 1,
                            "text": "贷款申请简要录入",
                            "url": "/cb/loan-application/brief-entry.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 2,
                            "text": "贷款申请详情录入",
                            "url": "/cb/loan-application/detail-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 3,
                            "text": "电核/初核",
                            "url": "/cb/nucleus-nucleus/nucleus-nucleus-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 5,
                            "text": "二级审批",
                            "url": "/cb/two-levels-approval/two-levels-approval-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 6,
                            "text": "合同签订",
                            "url": "/cb/contract/contract-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 7,
                            "text": "用款申请",
                            "url": "/cb/spent-loan/spent-loan-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 8,
                            "text": "电话回访",
                            "url": "/cb/call-return-visit/return-visit-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 9,
                            "text": "上级电话回访",
                            "url": "/cb/superior-telephone-return/superior-telephone-return-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        },
                        {
                            "id": 10,
                            "text": "放款审查",
                            "url": "/cb/loan-review/loan-review-list.html",
                            "style": "{}",
                            "level": 2,
                            "dispOrder": 0,
                            "createTime": null,
                            "updateTime": null,
                            "actions": null,
                            "styleObject": null
                        }
                    ],
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
            "id": 6,
            "text": "贷后管理",
            "url": "/index11111.html",
            menuIcon: 'nav-after',
            "level": 3,
            "dispOrder": 2,
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
                    "actions": null,
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
                    "actions": null,
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
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": [],
            "styleObject": {
                "iconClassName": "icon-warn-manager"
            }
        },
        {
            "id": 7,
            "text": "风险管理",
            "url": "/index111111.html",
            menuIcon: 'nav-warn',
            "level": 3,
            "dispOrder": 2,
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
                    "actions": null,
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
                    "actions": null,
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
                    "actions": null,
                    "styleObject": null
                }
            ],
            "actions": []
        },
        {
            "id": 8,
            "text": "系统管理",
            "url": "/system-mana/product-about/product-set.html",
            "level": 3,
            "dispOrder": 2,
            "createTime": null,
            "updateTime": null,
            "children": [
                {
                    "id": 3,
                    "text": "产品设置",
                    "url": "/system-mana/product-about/product-set/product-set.html",
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
                    "text": "用户管理",
                    "url": "/user/index",
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
                    "id": 13,
                    "text": "字典管理",
                    "url": "/cs/dictionarycategory/index.html",
                    "style": "",
                    "level": 2,
                    "children": [],
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 14,
                    "text": "打印模板集管理",
                    "url": "/cs/printtemplateset/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 11,
                            "text": "打印模板集分页",
                            "url": "/cs/printtemplateset/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 1,
                            "menuText": "打印模板集管理"
                        },
                        {
                            "id": 12,
                            "text": "打印模板集查看",
                            "url": "/cs/printtemplateset/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 1,
                            "menuText": "打印模板集管理"
                        },
                        {
                            "id": 13,
                            "text": "打印模板集列表",
                            "url": "/cs/printtemplateset/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 1,
                            "menuText": "打印模板集管理"
                        },
                        {
                            "id": 14,
                            "text": "新建打印模板集",
                            "url": "/cs/printtemplateset/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 1,
                            "menuText": "打印模板集管理"
                        },
                        {
                            "id": 15,
                            "text": "修改打印模板集",
                            "url": "/cs/printtemplateset/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 1,
                            "menuText": "打印模板集管理"
                        },
                        {
                            "id": 16,
                            "text": "删除打印模板集",
                            "url": "/cs/printtemplateset/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 1,
                            "menuText": "打印模板集管理"
                        }
                    ],
                },
                {
                    "id": 25,
                    "text": "打印模板管理",
                    "url": "/cs/printtemplate/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": 21,
                            "text": "打印模板分页",
                            "url": "/cs/printtemplate/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": 2,
                            "menuText": "打印模板管理"
                        },
                        {
                            "id": 22,
                            "text": "打印模板查看",
                            "url": "/cs/printtemplate/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": 2,
                            "menuText": "打印模板管理"
                        },
                        {
                            "id": 23,
                            "text": "打印模板列表",
                            "url": "/cs/printtemplate/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": 2,
                            "menuText": "打印模板管理"
                        },
                        {
                            "id": 24,
                            "text": "新建打印模板",
                            "url": "/cs/printtemplate/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": 2,
                            "menuText": "打印模板管理"
                        },
                        {
                            "id": 25,
                            "text": "修改打印模板",
                            "url": "/cs/printtemplate/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": 2,
                            "menuText": "打印模板管理"
                        },
                        {
                            "id": 26,
                            "text": "删除打印模板",
                            "url": "/cs/printtemplate/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": 2,
                            "menuText": "打印模板管理"
                        }
                    ],
                },
                {
                    "id": 21,
                    "text": "材料设置",
                    "url": "/material-setting/material-setting-list.html",
                    "style": "",
                    "level": 2,
                    "dispOrder": 2,
                    "createTime": null,
                    "updateTime": null,
                    "children": [
                        {
                            "id": 3,
                            "text": "材料列表",
                            "url": "/material-setting/material-design-list.html",
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
                    "actions": null,
                    "styleObject": null
                },
                {
                    "id": 4,
                    "text": "还款方式",
                    "url": "/system-mana/product-about/repay-mode/repay-mode.html",
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
                    "id": 21,
                    "text": "佣金配置",
                    "url": "/brokerage-config/brokerage-config-list.html",
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
                    "id": 27,
                    "text": "额度审批",
                    "url": "/limit-examine/limit-examine-list.html",
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
                    "id": 28,
                    "text": "流程发起测试",
                    "url": "/bpm/starttestflow.html",
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
                    "id": 29,
                    "text": "流程办理测试",
                    "url": "/bpm/handletestflow.html",
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
            menuIcon: 'nav-system'
        }
    ];
}(window.jQuery, window.app);