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
                text: '贷款申请简要录入',
                url: '/cb/loan-application/brief-entry.html'
            },
            {
                text: '新增',
                url: '/cb/loan-application/brief-entry-add.html'
            }
        ]
    };
    app.loanTypeList = [
        {"loanTypeCode":0,"loanTypeName":"111"},
        {"loanTypeCode":1,"loanTypeName":"中"},
        {"loanTypeCode":2,"loanTypeName":"大"}
    ]
    app.loanKindList = [
        {"loanListCode":0,"loanKindName":"222"},
        {"loanListCode":1,"loanKindName":"中"},
        {"loanListCode":2,"loanKindName":"大"}
    ]
    app.loanUseList = [
        {"loanUseListCode":0,"loanUseName":"333"},
        {"loanUseListCode":1,"loanUseName":"中"},
        {"loanUseListCode":2,"loanUseName":"大"}
    ]
    app.papersTypeList = [
        {"papersLiCode":0,"papersLiName":"身份证"}
    ]
    app.apReList = [
        {"apReCode":0,"apReName":"父女"},
        {"apReCode":1,"apReName":"母女"},
        {"apReCode":2,"apReName":"无"}
    ]
}(window.jQuery, window.app);