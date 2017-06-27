$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 初始化列表数据
     */
        //textarea长度校验
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!")
    });
    //校验
    app.bindFormValidation($('#update-access-form'));

    /*页面回显*/
    var initData = function () {
        $.getJSON(app.ACCESS_MANAGEMENT_VIEWS + '/' + app.request.id, function (res) {
            if (app.isOK(res)) {
                App.stopPageLoading();
                $('.defaultScopeList').selectloader({'defaultScopeList': app.defaultScope});
                $('.accessStatus').selectloader({'accessStatus': app.status});
                $('#update-access-form').deserializeObject(res);
                setReadonly();
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    };
    initData();
});