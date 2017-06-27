var Login = function () {

  var handleLogin = function () {
    $('.login-form').validate({
      errorElement: 'span', //default input error message container
      errorClass: 'help-block', // default input error message class
      focusInvalid: false, // do not focus the last invalid input
      rules: {
        username: {
          required: true
        },
        password: {
          required: true
        },
        remember: {
          required: false
        }
      },

      messages: {
        username: {
          required: "用户名称必填."
        },
        password: {
          required: "登录密码必填."
        }
      },

      invalidHandler: function (event, validator) { //display error alert on form submit   
        $('.alert-danger', $('.login-form')).show();
      },

      highlight: function (element) { // hightlight error inputs
        $(element)
          .closest('.form-group').addClass('has-error'); // set error class to the control group
      },

      success: function (label) {
        label.closest('.form-group').removeClass('has-error');
        label.remove();
      },

      errorPlacement: function (error, element) {
        error.insertAfter(element.closest('.input-icon'));
      },

      submitHandler: function (form) {
        $.post('/login', $(form).serialize(), function (data) {
          if (data.resultCode == 'SUCCESS') {
            console.log('登录成功');

            $.ajax({
              url: '/user/loginuser',
              async: false,
              dataType: 'json',
              success: function (data) {
                $.cookie("loginName", data.loginName, {
                  path: "/",//cookie的路 径
                });
                $.cookie("realName", data.realName, {
                  path: "/",//cookie的路 径
                });
                $.cookie("loginTime", new Date(), {
                  path: "/",//cookie的路 径
                });
                $.cookie("source", data.source, {
                  path: "/",//cookie的路 径
                });
                $.cookie("coId", (data.coId == null || data.coId == 'null' ? '' : data.coId), {
                  path: "/",//cookie的路 径
                });
                window.location.href = '/index';
              }
            });

            //var username = $('input[name=username]', form).val();

            return;
          }
          $('img.jcaptcha').click();
          alert(data.errors.join('\n'));

          if (data.errorCode == 'ERROR_CAPTCHA') {
            console.log('验证码错误');
            return;
          }
          if (data.errorCode == 'ERROR_AUTH') {
            console.log('用户名或密码错误');
            return;
          }
          if (data.errorCode == 'ERROR_AUTHCAPTCHA') {
            console.log('用户名或密码错误[错误超次数，需要显示]');
            return;
          }
          if (data.errorCode == 'ERROR_DISABLED') {
            console.log('账户已禁用');
            return;
          }
          if (data.errorCode == 'ERROR_SYSTEM') {
            console.log('内部错误');
            return;
          }
          //TODO
          alert(data.errors.join('\n'));
        }, 'json');
        return false;
      }
    });

    $('.login-form input').keypress(function (e) {
      if (e.which == 13) {
        if ($('.login-form').validate().form()) {
          $('.login-form').submit();
        }
        return false;
      }
    });
  }

  var handleForgetPassword = function () {
    $('.forget-form').validate({
      errorElement: 'span', //default input error message container
      errorClass: 'help-block', // default input error message class
      focusInvalid: false, // do not focus the last invalid input
      ignore: "",
      rules: {
        email: {
          required: true,
          email: true
        }
      },

      messages: {
        email: {
          required: "邮箱必填."
        }
      },

      invalidHandler: function (event, validator) { //display error alert on form submit   

      },

      highlight: function (element) { // hightlight error inputs
        $(element)
          .closest('.form-group').addClass('has-error'); // set error class to the control group
      },

      success: function (label) {
        label.closest('.form-group').removeClass('has-error');
        label.remove();
      },

      errorPlacement: function (error, element) {
        error.insertAfter(element.closest('.input-icon'));
      },

      submitHandler: function (form) {
        form.submit();
      }
    });

    $('.forget-form input').keypress(function (e) {
      if (e.which == 13) {
        if ($('.forget-form').validate().form()) {
          $('.forget-form').submit();
        }
        return false;
      }
    });

    jQuery('#forget-password').click(function () {
      jQuery('.login-form').hide();
      jQuery('.forget-form').show();
    });

    jQuery('#back-btn').click(function () {
      jQuery('.login-form').show();
      jQuery('.forget-form').hide();
    });

  }

  return {
    init: function () {

      handleLogin();
      handleForgetPassword();

      var apppath = $('body').data('apppath');
      $.backstretch([
        apppath + "/media/bg/1.jpg",
        apppath + "/media/bg/2.jpg",
        apppath + "/media/bg/3.jpg",
        apppath + "/media/bg/4.jpg"
      ], {
          fade: 1000,
          duration: 8000
        }
      );
    }
  };

}();

jQuery(document).ready(function () {
  Login.init();
});