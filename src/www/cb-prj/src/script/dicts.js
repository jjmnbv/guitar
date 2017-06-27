/**
 * Created by Administrator on 2016/12/19.
 */
window.app = window.app || {};window.app.dicts = window.app.dicts || {};
+function ($, app) {
    $.extend(app.dicts,
            {
                "dict_44": [
                    {
                        "id": 44,
                        "code": "XJ",
                        "name": "现金贷",
                        "children": [ ]
                    },
                    {
                        "id": 44,
                        "code": "NY",
                        "name": "耐用消费贷款",
                        "children": [
                            {
                                "id": 46,
                                "code": "02",
                                "name": "家具分期",
                                "children": [ ]
                            },
                            {
                                "id": 46,
                                "code": "01",
                                "name": "手机分期",
                                "children": [ ]
                            }
                        ]
                    },
                    {
                        "id": 44,
                        "code": "TX",
                        "name": "通用消费贷款",
                        "children": [
                            {
                                "id": 45,
                                "code": "04",
                                "name": "装修分期",
                                "children": [ ]
                            },
                            {
                                "id": 45,
                                "code": "03",
                                "name": "教育分期",
                                "children": [ ]
                            }
                        ]
                    }
                ],

        "dict_14": [
        {
            "id": 14,
            "code": "MY",
            "name": "民营企业",
            "children": [ ]
        },
        {
            "id": 14,
            "code": "WG",
            "name": "无固定单位",
            "children": [ ]
        },
        {
            "id": 14,
            "code": "WX",
            "name": "微型企业",
            "children": [ ]
        },
        {
            "id": 14,
            "code": "SY",
            "name": "事业单位",
            "children": [ ]
        },
        {
            "id": 14,
            "code": "GY",
            "name": "国有企业",
            "children": [ ]
        },
        {
            "id": 14,
            "code": "ZF",
            "name": "政府机关",
            "children": [ ]
        }
    ]
            }

    );
} (window.jQuery, window.app);