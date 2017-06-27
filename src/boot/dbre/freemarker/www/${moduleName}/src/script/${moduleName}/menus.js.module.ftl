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
            "text": "${moduleName}",
            "url": "",
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "level": 1,
            "dispOrder": 9999,
            "children": [
                <#list models as model>
                {
                    "id": ${model_index+1},
                    "text": "${model.entityDescription}管理",
                    "url": "/${moduleName}/${model.entityName?lower_case}/index.html",
                    "style": "{}",
                    "level": 2,
                    "dispOrder": 0,
                    "actions": [
                        {
                            "id": ${model_index+1}1,
                            "text": "${model.entityDescription}分页",
                            "url": "/${moduleName}/${model.entityName?lower_case}/page/*",
                            "status": "AUTHORIZED",
                            "dispOrder": 0,
                            "menuId": ${model_index+1},
                            "menuText": "${model.entityDescription}管理"
                        },
                        {
                            "id": ${model_index+1}2,
                            "text": "${model.entityDescription}查看",
                            "url": "/${moduleName}/${model.entityName?lower_case}/view/**",
                            "status": "AUTHORIZED",
                            "dispOrder": 1,
                            "menuId": ${model_index+1},
                            "menuText": "${model.entityDescription}管理"
                        },
                        {
                            "id": ${model_index+1}3,
                            "text": "${model.entityDescription}列表",
                            "url": "/${moduleName}/${model.entityName?lower_case}/list",
                            "status": "AUTHORIZED",
                            "dispOrder": 2,
                            "menuId": ${model_index+1},
                            "menuText": "${model.entityDescription}管理"
                        },
                        {
                            "id": ${model_index+1}4,
                            "text": "新建${model.entityDescription}",
                            "url": "/${moduleName}/${model.entityName?lower_case}/create",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 3,
                            "menuId": ${model_index+1},
                            "menuText": "${model.entityDescription}管理"
                        },
                        {
                            "id": ${model_index+1}5,
                            "text": "修改${model.entityDescription}",
                            "url": "/${moduleName}/${model.entityName?lower_case}/update",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 4,
                            "menuId": ${model_index+1},
                            "menuText": "${model.entityDescription}管理"
                        },
                        {
                            "id": ${model_index+1}6,
                            "text": "删除${model.entityDescription}",
                            "url": "/${moduleName}/${model.entityName?lower_case}/remove/**",
                            "status": "NOTAUTHORIZED",
                            "dispOrder": 5,
                            "menuId": ${model_index+1},
                            "menuText": "${model.entityDescription}管理"
                        }
                    ],
                }<#if model_has_next>,</#if>
                </#list>
            ]
        }
    ];

    app.mainMenus = app.menus;
} (window.jQuery, window.app);
