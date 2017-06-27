/**
 * Created by lina on 2017/1/19.
 */
$(function() {
    $('#password-form').validate({
        rules: {
            plainNewPassword:{
                passwordCheck:true,
                minlength:6
            },
            newPassword: {
                equalTo: "#plainNewPassword",
            }
        },
        messages:{
            plainNewPassword:{
                minlength:"密码至少六位！"
            },
            newPassword:{
                equalTo:"两次输入不一致！"
            }
        }
    });

    $('#commit').click(function () {
        var form = $('#password-form');
        var jqxhr = app.$submit(form, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
            if (app.isOK(data)) {
                app.alertOK('修改成功');
                setTimeout(function () {
                    window.location.href=app.base+'/logout';
                }, 2000);
            } else {
                app.alertError(data.errors.join());
            }
        });
    });
});