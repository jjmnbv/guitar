+function ($, app) {
  "use strict ";

  var userProfileSubmit = function () {
    var tab_pane = $('#tab_personal_info');
    $('button.save', tab_pane).click(function () {
      var jqxhr = app.$submit($('form', tab_pane), 'json');
      if (!jqxhr) return false;
      jqxhr.done(function (data) {
        if (app.isOK(data)) {
          app.alertOK('修改个人信息成功');
          return;
        }
        app.alertError(data.errors.join('\n'));
      });
    });
  };

  var init = function () {
    //初始化日期控件
    $('.date-picker').datepicker({
      rtl: App.isRTL(),
      autoclose: true,
      language: "zh-CN"
    });
    userProfileSubmit();
  };
  init();
} (window.jQuery, window.app);
