+function($, app) {

  var resetLoginPwdOfMail = function() {
    var form = $('.reset-login-pwd-form');
    var validator = app.bindFormValidation(form);

    var submitfn = function() {
      if(form.valid()) {
        var jqxhr = app.$submit(form, 'json');
        if(!jqxhr) return false;

        jqxhr.done(function(data){
          if(app.isOK(data)) {
            app.alertOK('重置密码成功');
            window.location.href = $('body').data('basepath')+'/';
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
      };
    };

    $('.submit', form).click(function(){
      submitfn();
    });

    $('input', form).keypress(function (e) {
      if (e.which == 13) {
        submitfn();
        return false;
      }
    });

  };

  var init = function(){

    resetLoginPwdOfMail();

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
  };
  init();
} (window.jQuery, window.app);

