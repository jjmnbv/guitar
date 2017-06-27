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
                text: '上级电话回访',
                url: '/cb/superior-telephone-return/superior-telephone-return-list.html'
            },
            {
                text: '风险预警',
                url: '/cb/superior-telephone-return/superior-risk-warning.html'
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

}(window.jQuery, window.app);