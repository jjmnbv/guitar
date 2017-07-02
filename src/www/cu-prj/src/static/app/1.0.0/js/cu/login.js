window.app.base = window.app.base || '';
/**
 * Created by lina on 2016/11/25.
 */
$(function(){
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
    var req_param = urlSearch(window.location.href);

    $.getJSON(app.base + '/cu/oauth2/checkLogin', function(data){
        if (data.resultCode == 'SUCCESS') {
            window.location.href = app.base + "/";
            if (req_param.redirectURI) {
                window.location.href = decodeURIComponent(req_param.redirectURI);
            } else {
                window.location.href = app.base + "/";
            }
        } else {
            $.each(app.oauthClients, function(client, client_base){
                $('<iframe name="'+client+'_logout_iframe" id="'+client+'_logout_iframe" style="display:none;"></iframe>').appendTo('body');
                $('<form action="'+client_base+'/oauth2/logout" target="'+client+'_logout_iframe" method="get"></form>').appendTo('body').submit().remove();
            });
        }
    });
    $.validator.addMethod('passwordCheck', function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9]+$/.test(value);
    }, '该用户名不合法！');

    $("#login-form").validate({
        rules:{
            username:{
                required:true,
                passwordCheck:true
            },
            password:{
                required:true,
                minlength:6
            }
        },
        messages:{
            username:{
                required:"必须填写用户名！"
            },
            password:{
                required:"必须填写密码！",
                minlength:"密码至少六位！"
            }

        },
        errorElement:"div",
        errorClass:"wrong",
        errorPlacement:function(error,element){
            error.insertAfter(element.parent());
        },
        submitHandler: function (form) {
            $.post(app.base + '/login', $(form).serialize(), function(data){
                if(data.resultCode == 'SUCCESS') {
                    console.log('登录成功');
                    console.log(req_param);
                    console.log(decodeURIComponent(req_param.redirectURI));
                    if (req_param.redirectURI) {
                        window.location.href = decodeURIComponent(req_param.redirectURI);
                    } else {
                        window.location.href = app.base + "/";
                    }
                }else if(data.errorCode == 'ERROR_CAPTCHA') {
                    $('#errorMessage').html(data.errors.join());
                    return;
                }else if(data.errorCode == 'ERROR_AUTH') {
                    $('#errorMessage').html(data.errors.join());
                    return;
                }else if(data.errorCode == 'ERROR_AUTHCAPTCHA') {
                    $('#errorMessage').html(data.errors.join());
                    return;
                }else if(data.errorCode == 'ERROR_DISABLED') {
                    $('#errorMessage').html(data.errors.join());
                    return;
                }else if(data.errorCode == 'ERROR_SYSTEM') {
                    $('#errorMessage').html(data.errors.join());
                    return;
                }else if(data.resultCode =='FAIL' && data.errorCode == 'ERROR_AUTHED'){
                    $('#errorMessage').html('您已经登录请刷新页面');
                    return;
                }
            }, 'json')
            return false;
        }
    });
    $('#username,#password').focus(function(){
        $('#errorMessage,#sessionHasCheck').html("");
    });
});