+ function($, app) {
	  app.registerTextHelper('acTyp', app.acTyp, 'code', 'name');
	  app.registerTextHelper('setlSts', app.setlSts, 'code', 'name');
	  app.registerTextHelper('acCurTyp', app.acCurTyp, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;

  app.context.formHtml = $('#form-template').html();

  app.context.formInit = function (form) {
    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });

  };


  /**
   * 增加操作的弹框
   */
  $('#edit').getModal({
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore: function () {
      var setlSts = $('[type=radio]:checked').data('setlsts');
      if(setlSts!='0'){
    	 app.alertError("授权已出账业务不允许再次资产出账");
    	 return;
      }
      var id = $('[type=radio]:checked').data('id');
      window.location.href = "lnsetlacinf-detail.html" + id;
    }

  });

});
