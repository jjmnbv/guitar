/**
 * 数据模拟
 */
+function ($, app) {

    var urlSearch = function(url){
        var param = {};
        var num = url.indexOf("?")
        url = url.substr(num + 1);

        var arr = url.split("&");
        $.each(arr, function(i, v){
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

    $.extend(app, { request: request });

} (window.jQuery, window.app);

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
                text: '修改',
                url: '/cb/loan-application/brief-entry-update.html'
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