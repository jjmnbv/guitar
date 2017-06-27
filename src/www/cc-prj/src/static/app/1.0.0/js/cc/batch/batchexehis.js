+ function($, app) {
	app.registerTextHelper('exSt', app.exSt, 'code', 'name');
	app.registerTextHelper('exMd', app.exMd, 'code', 'name');
	app.registerTextHelper('plId', app.plId, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;
	$('.exSt').selectloader({exSt:app.exSt});
	$('.select-plId').selectloader({plIdList:app.plId});
	
  $('#view').getModal({
      selector: function () {
          return !!$('[type=radio]:checked').length;
      },
      compileBefore:function () {
          var id = $('[type=radio]:checked').data('id');
          window.location.href='batexedtl-index.html?exId='+id;
      }
  });  
    

});
