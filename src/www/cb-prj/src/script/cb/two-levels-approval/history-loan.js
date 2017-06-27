/**
 * 数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'business-processing',
        dt: {
            text: '业务办理',
            url: '#'
        },
        dd: [
            {
                text: '贷款申请处理',
                url: '#'
            },
            {
                text: '二级审批',
                url: '/cb/two-levels-approval/two-levels-approval-list.html'
            },
            {
                text: '贷款申请历史',
                url: '/cb/two-levels-approval/history-loan.html'
            }
        ]
    };
    app.loanApplyPeopleOfZS={
        "customerNo":"1001",
        "customerManagerNo":"阿里巴巴",
        "organizationNo":"2",
        "papersTypeCode":"2016-07-18",
        "papersNo":"2018-02-15",
        "customerName":"2",
        "birthdayDate":"8",
        "householdRegistrationProvinceCode":"陕西",
        "mobileNo":"1",
        "brNa":"政府",
        "cuMaNa":"李四",
        "guFeAm":"20000",
        "provCd":"310000",
        "cityCd":"310100",
        "distCd":"310101",
        "adCa":"外滩18号",
        "postNo":"013650"
    };
    app.loanKindCodeList=[
        {
            "id": 44,
            "code": "XJ",
            "name": "现金贷",
            "children": []
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
                    "children": []
                },
                {
                    "id": 46,
                    "code": "01",
                    "name": "手机分期",
                    "children": []
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
                    "children": []
                },
                {
                    "id": 45,
                    "code": "03",
                    "name": "教育分期",
                    "children": []
                }
            ]
        }
    ]

    app.applyStatus=[
        {
            "id": 44,
            "code": "JH",
            "name": "激活",
            "children": []
        },
        {
            "id": 44,
            "code": "CS",
            "name": "初始",
            "children": []
        }
    ]
}(window.jQuery, window.app);