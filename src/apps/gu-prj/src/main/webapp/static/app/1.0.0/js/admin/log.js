+ function ($,app) {"use strict ";
  var init = function() {
    //初始化日期控件
    $('.date-picker').datepicker({
      rtl: App.isRTL(),
      orientation: 'left',
      autoclose: true,
      language: "zh-CN"
    });
  };
  init();
} (window.jQuery,window.app);