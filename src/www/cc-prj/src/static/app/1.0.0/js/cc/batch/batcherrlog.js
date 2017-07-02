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

  var exDtlId = GetQueryString('exDtlId');
  $('.bsdForm .exDtlId').val(exDtlId);
  $('.main-page').pagination({
    'first-store':app.firstStore
  });
  app.context.formHtml1 = $('#form-template1').html();

  $('#exception-msg').getModal({
    title:'异常信息',
    body: app.context.formHtml1, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore:function () {
      var ermsg = $('[type=radio]:checked').data('ermsg');
      $('#span-exception-msg').html(ermsg);
    },
    footer:'<button class="btn blue" data-dismiss="modal">确定</button>'
  });
});