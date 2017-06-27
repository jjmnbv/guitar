+ function($, app) {
	app.registerTextHelper('txNo', app.txNo, 'code', 'name');
	  app.registerTextHelper('taskId', app.taskId, 'code', 'name');
	  app.registerTextHelper('plId', app.plId, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;

  $('.select-txNo').selectloader({txNoList:app.txNo});
  $('.select-taskId').selectloader({taskIdList:app.taskId});
  $('.select-plId').selectloader({plIdList:app.plId});
  

  var exId = GetQueryString('exId');
  var exDtlId = GetQueryString('exDtlId');

  $('[name=exId]').val(exId);
  $('[name=exDtlId]').val(exDtlId);

});