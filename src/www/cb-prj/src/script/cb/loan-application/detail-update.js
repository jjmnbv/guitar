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
                text: '贷款申请详情信息',
                url: '/cb/loan-application/detail-list.html'
            },
            {
                text: '修改',
                url: '/cb/loan-application/details-update.html'
            }
        ]
    };
    var urlSearch = function (url) {
        var param = {};
        var num = url.indexOf("?")
        url = url.substr(num + 1);

        var arr = url.split("&");
        $.each(arr, function (i, v) {
            num = v.indexOf("=");
            if (num > 0) {
                var name = v.substring(0, num);
                var value = v.substr(num + 1);
                param[name] = value;
            }
        });

        return param;
    }
    var request = new urlSearch(window.location.href);
    $.extend(app, {request: request});

    app.papersTypeList = [
        {"papersTypeCode": 0, "papersLiName": "身份证"}
    ]
    app.marryCodeTypeList = [
        {"marryCode": 0, "marryName": "未婚"},
        {"marryCode": 1, "marryName": "已婚"}
    ]
    app.educationalList = [
        {"educationalNameCode": 0, "name": "统招"},
        {"educationalNameCode": 1, "name": "自考"},
        {"educationalNameCode": 2, "name": "留学"}
    ]
    app.corporationList = [
        {"corporationProperty": 0, "name": "国企"},
        {"corporationProperty": 1, "name": "集体"},
        {"corporationProperty": 2, "name": "股份"},
        {"corporationProperty": 3, "name": "个人独资"},
        {"corporationProperty": 4, "name": "合伙"},
        {"corporationProperty": 5, "name": "私营"},
        {"corporationProperty": 6, "name": "个人"},
        {"corporationProperty": 7, "name": "其他"}
    ]
    app.positionList = [
        {"position": 0, "name": "负责人"},
        {"position": 1, "name": "高级管理人员"},
        {"position": 2, "name": "中级管理人员"},
        {"position": 3, "name": "一般管理人员"},
        {"position": 4, "name": "正式员工"},
        {"position": 5, "name": "非正式员工"},
        {"position": 6, "name": "退休人员"},
        {"position": 7, "name": "其他"}
    ]
    app.industryList = [
        {"industryCode": 0, "name": "计算机"},
        {"industryCode": 1, "name": "互联网"},
        {"industryCode": 2, "name": "IT"}
    ]
    app.wageDateList = [
        {"wageDate": 0, "name": "1日"},
        {"wageDate": 1, "name": "2日"},
        {"wageDate": 2, "name": "3日"}
    ]
    app.paymentFromList = [
        {"wageDate": 0, "name": "工资收入"},
        {"wageDate": 1, "name": "佣金"},
        {"wageDate": 2, "name": "投资回报"}
    ]
    app.housingPropertyList = [
        {"housingProperty": 0, "name": "现购现有贷款"}
    ]
    app.homeLiveList = [
        {"homeLiveCode": 0, "name": "现居住地"},
        {"homeLiveCode": 1, "name": "曾居住地"},
        {"homeLiveCode": 2, "name": "户口所在地"},
        {"homeLiveCode": 3, "name": "租住地址"}
    ]
    app.relationshipList = [
        {"relationship": 0, "name": "父子"},
        {"relationship": 1, "name": "母子"},
        {"relationship": 2, "name": "兄弟"},
        {"relationship": 3, "name": "兄妹"}
    ]
}(window.jQuery, window.app);