$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;

  $('.main-page').pagination({
    'first-store':app.firstStore
  });

  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */

    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });

    app.bindFormValidation(form);
    if(operatingMode =='add'){
      validatorNotExists(form);
    }else{

    }
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增批量还款结果',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
      operatingMode='add'
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNBATRPRST_CREATE
    }, app);
  });

  /**
   *
   *字典编码的唯一性
   * */

  var validatorNotExists = function (form) {
  };

  /**
   * 修改批量还款结果
   */
  $('#edit').getModal({
    title: '编辑批量还款结果',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      operatingMode='edit'
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNBATRPRST_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },


    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNBATRPRST_UPDATE
    }, app);
  });


  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条批量还款结果吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var rstSeqNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNBATRPRST_REMOVE+rstSeqNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
