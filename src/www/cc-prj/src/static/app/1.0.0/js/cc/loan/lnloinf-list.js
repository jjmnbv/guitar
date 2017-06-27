+ function($, app) {
	app.registerTextHelper('payTyp', app.payTyp, 'code', 'name');
	app.registerTextHelper('loSts', app.loSts, 'code', 'name');
	app.registerTextHelper('dbSts', app.dbSts, 'code', 'name');
	
}(window.jQuery, window.app);
$(function () {

  var $ = window.jQuery;
  var app = window.app;
  $('#payTyp').selectloader({payTypList:app.payTyp});
  $('#dbSts').selectloader({dbStsList:app.dbSts});
  $('#view').getModal({
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore: function () {
      var loNo = $('[type=radio]:checked').data('id');
      window.location.href="lnloinf-index.html?loNo="+loNo;
    }
  });

});
