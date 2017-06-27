+function ($, app) {
    app.menus = [
        {
            "id": 1,
            "text": "编辑",
            "url": "/index",
            "style": "{\"iconClassName\":\"icon-home\"}",
            "icon": null,
            "level": 1,
            "dispOrder": 0,
            "createTime": null,
            "updateTime": null,
            "children": [],
            "actionName": "edit",
            "actions": [{
                "id": 46,
                "text": "主页",
                "url": "/",
                "status": "AUTHORIZED",
                "level": 1,
                "dispOrder": 9999,
                "createTime": "2016-11-29 11:00:14",
                "updateTime": "2016-11-29 11:00:14",
                "menuId": 1,
                "menuText": "主页"
            }],
            "styleObject": {"iconClassName": "edit.png"},
            "menuIcon": null
        },
        {
            "id": 2,
            "text": "新建",
            "url": null,
            "style": "{\"iconClassName\":\"icon-settings\"}",
            "icon": null,
            "level": 1,
            "dispOrder": 9999,
            "createTime": null,
            "updateTime": null,
            "children": [],
            "actions": [],
            "actionName": "add",
            "styleObject": {"iconClassName": "new.png"},
            "menuIcon": null
        },
        {
            "id": 3,
            "text": "保存",
            "style": "{\"iconClassName\":\"icon-save\"}",
            "styleObject": {"iconClassName": "save.png"},
            "actionName": "save"
        },
        {
            "id": 4,
            "idName": "importJSON",
            "text": "导入Json",
            "styleObject": {"iconClassName": "Import.png"},
            "actionName": "importJson"
        },
        {
            "id": 5,
            "text": "导出json",
            "styleObject": {"iconClassName": "export.png"},
            "actionName": "exportJson"
        },
        {
            "id": 6,
            "text": "复制",
            "styleObject": {"iconClassName": "redo.png"},
            "actionName": "copy"
        },
        // {
        //     "id": 7,
        //     "text": "放大",
        //     "styleObject": {"iconClassName": "enlarge.png"},
        //     "actionName": "zoomIn"
        // },
        // {
        //     "id": 8,
        //     "text": "正常比例",
        //     "styleObject": {"iconClassName": "normal.png"},
        //     "actionName": "normalSize"
        // },
        // {
        //     "id": 9,
        //     "text": "缩小",
        //     "styleObject": {"iconClassName": "narrow.png"},
        //     "actionName": "zoomOut"
        // },
        {
            "id": 10,
            "text": "语法检查",
            "styleObject": {"iconClassName": "inspect.png"},
            "actionName": "inspection"
        },
        {
            "id": 11,
            "text": "发布",
            "styleObject": {"iconClassName": "release.png"},
            "actionName": "release"
        },
        {
            "id": 12,
            "text": "停用",
            "styleObject": {"iconClassName": "stop.png"},
            "actionName": "stop"
        }
    ];
    app.mainMenus = app.menus;
}(window.jQuery, window.app);
