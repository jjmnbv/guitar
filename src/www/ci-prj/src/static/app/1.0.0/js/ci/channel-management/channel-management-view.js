$(function () {
    var $ = window.jQuery;
    var app = window.app;

    //textarea长度校验
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!")
    });

    //校验
    app.bindFormValidation($('#add-repay-form'));

    /*页面回显*/
    var initData = function () {
        $.getJSON(app.CHANNELMANAGEMENT_VIEWS + '?id=' + app.request.no, function (res) {
            if (app.isOK(res)) {
                App.stopPageLoading();
                $('.channel-status').selectloader({'channelStatus': app.status});
                $('.ipWhitelist').radioloader({'ipWhitelistList':  app.ipWhitelist});
                $('#add-repay-form').deserializeObject(res);
                /*金额格式化显示*/
                $(".bindEvent").each(function(){
                    $(this).val(app.formatCurrencyM($(this).val()));
                });
                setReadonly();
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
    };
    var init = function () {
        initData();
    };
    init();
});