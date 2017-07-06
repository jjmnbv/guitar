<%@ page contentType="text/javascript;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>	
	
window.app = window.app || {};	
	
	
/**
 * 数据模拟
 */
+function ($, app) {
	//电核初核审批信息：
     app.pathArray=[
           {"code":"submitB","flag": <spring:eval expression="@FN_CB.checkPath('/workflow/manualcommityn/rect4')" />}
         ];
	app.refuseSubCodeList =app.dicts.dict_152; /*拒绝明细代码 */
	app.backSubCodeList =app.dicts.dict_153; /*退回代码*/
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
                text: '电核/初审',
                url: '/cb/nucleus-nucleus/nucleus-nucleus-list.html'
            },
            {
                text: '审批信息',
                url: '#'
            }
        ]
    };

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

}(window.jQuery, window.app);