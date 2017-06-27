$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 初始化列表数据
     */
    $('.channel-status').selectloader({'channelStatus': app.status});
    $('.ipWhitelist').radioloader({'ipWhitelistList':  app.ipWhitelist});
    $('#channelName').selectloader({'channelName': app.channelName});

    //textarea长度校验
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!")
    });


    /*金额格式化*/
    $(".bindEvent").each(function(){
        $(this).val($(this).next('input[type=hidden]').val());
        $(this).val(app.formatCurrencyM($(this).val()));
    });

    //校验
    app.bindFormValidation($('#add-repay-form'));
    $("#name").change(function(){
        var thisName=$('#name').val();
        upDatevalidateSZExists($("#add-repay-form"),thisName);
    });

    //提交表单
    $("#saveForm").click(function(){
        if ($('#add-repay-form').valid()) {
            submit(app.CHANNELMANAGEMENTADD, $('#add-repay-form').serializeObject(), event.target);
        }
    });
});
/* 渠道名称远程校验*/

var upDatevalidateSZExists = function(form,thisName) {
    $("#name", form).rules("add", {
        remote: {
            url: app.CHANNEL_NAME_VALIDATE+thisName,
            type: "POST",
            dateType: "text"
        },
        messages: {
            remote: "该渠道简称已经存在！"
        }
    });
};