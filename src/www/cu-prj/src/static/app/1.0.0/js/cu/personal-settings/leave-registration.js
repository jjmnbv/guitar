$(function () {
    $('#leaveForm').validate({
        submitHandler: function () {
            app.$post(app.POST_LEAVE, $('#leaveForm').serializeObject()).done(function (data) {
                if (app.isOK(data)) {
                    app.alertOK('提交成功！');
                }
            });
            
        }
    })
    $('#leaveForm').find(".date-picker-page").datepicker({
        rtl: App.isRTL(),
        orientation: "left",
        autoclose: !0,
        format: "yyyy-mm-dd",
        'start-date': "+0d",
        language: 'zh-CN'
    });

})