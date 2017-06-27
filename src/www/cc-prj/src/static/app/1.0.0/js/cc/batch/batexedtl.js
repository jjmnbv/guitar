+ function($, app) {
	app.registerTextHelper('ynSc', app.ynSc, 'code', 'name');
	app.registerTextHelper('enTp', app.enTp, 'code', 'name');
	app.registerTextHelper('txNo', app.txNo, 'code', 'name');
	app.registerTextHelper('taskId', app.taskId, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
  var $ = window.jQuery;
  var app = window.app;

  var exId = GetQueryString('exId');

  $('.main-page .pagination-form .exId').val(exId);
  $('.main-page .portlet').eq(0).hide();

  $('.main-page').pagination({
    'first-store':app.firstStore
  });

  $('.exSt').selectloader({exSt:app.exSt});

  app.context.formHtml = $('#form-template').html();

  app.context.formInit = function (form) {
    form.find('.enTp').selectloader({enTpList:app.enTp});
     $('[name=enTp]').on('change',function () {
           if($(this).val() == 'I' || $(this).val() == 'M'){
               $('[name=enQt]').val('0').attr('readonly',true);
           }else{
               $('[name=enQt]').val('').attr('readonly',false);
           }
       })
  };

  app.$getJSON(app.BATCHEXECUTEHIS_VIEW+'/'+exId).done(function (data) {
    if(app.isOK(data)) {
      $('#batexedtl-form').deserializeObject(data);
      $('[name=exSt]').attr('disabled', true);
      $('select').selectpicker('refresh');
      $('#roll-back').on('click',function () {
        if($('[name=exSt]').val() == '02'){
          app.$post(app.BATCHTASKEXEPLAN_REDO +'/' +exId).done(function (data) {
              if(app.isOK(data)){
                app.alertOK('提交成功');
              }else{
                var errors = data.errors.join(',');
                app.alertError(errors || failureText || '提交失败！');
              }
          });
        }else{
          app.alertError('执行状态为失败时才能重新执行！');
        }
      });
    }
  });

  // if(handle){
  //   $('#refresh').show();
    setInterval(function () {
      app.loadData();
    },15000);
  // }

  $('#refresh').on('click',function () {
   app.loadData();
  });

  $('#business-detail').getModal({
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore:function () {
      var exDtlId = $('[type=radio]:checked').data('param');
      window.location.href="/cc/loan/lntrxlog/lntrxlog-index.html?exDtlId="+exDtlId;
    }
  });

  $('#edit').getModal({
    title:'编辑批处理执行明细',
    body:app.context.formHtml,
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      var param = $('[type=radio]:checked').data('param');
      console.log(param);
      if(!param) return;
      app.context.showBefore({
        modal:modal,
        url:app.BATCHTASKPLANDETAIL_VIEW,
        param:param
      },app,app.context.formInit);
    },
    hideAfter:function (modal) {
      modal.setBody(app.context.formHtml);
    }
  },function (modal) {
    app.context.submit({
      modal:modal,
      url: app.BATCHTASKPLANDETAIL_UPDATE,
    },app);
  });

});
