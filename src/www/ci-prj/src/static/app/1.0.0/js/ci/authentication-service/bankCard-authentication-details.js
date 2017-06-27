$(function () {
    +function ($, app) {
        var $ = window.jQuery;
        var app = window.app;
        /*
         * 回显数据请求
         * */
        var dataJson = function(currVeParam){
            var startTime = new Date().getTime();
            app.$getJSON(app.LISTBYPARAM , {"ciApplyWater": currVeParam.requestApplyNo} ).done(function (data) {
                //响应时间
                    var resTime = new Date().getTime() - startTime;
                    var tpl = Handlebars.compile($('#main-cont-template').html());
                    var html = tpl(currVeParam);
                    $("#main-template").html(html);
                    $("input,textarea").attr("readonly","true");
                    /*回显下拉数据*/
                    $('#interfaceNo,#authenType').selectloader({'bankCardInterfaceNoList': app.bankCardInterfaceNoList,
                                                                "authenTypeList": app.authenTypeList});
                    $("[name='resTime']").val(resTime);
                    $("[name='searchRes']").val(data.ci_staMsg);
                    $("[name='requestApplyNo']").val(JSON.stringify(data));
                })
        };
        dataJson($.getQueryObject());

    }(window.jQuery, window.app);
});