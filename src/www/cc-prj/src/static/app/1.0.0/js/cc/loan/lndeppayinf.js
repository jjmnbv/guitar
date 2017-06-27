$(function () {
  var $ = window.jQuery;
  var app = window.app;
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
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    size:'modal-lg',
    title: '新增存款账户扣款信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
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
      url: app.LNDEPPAYINF_CREATE
    }, app);
  });



  /**
   * 修改存款账户扣款
   */
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑存款账户扣款信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      $('input[name=curCd]').prop('readonly',true);
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNDEPPAYINF_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },


    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
      $('input[name=curCd]').prop('readonly',false);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.LNDEPPAYINF_UPDATE
    }, app);
  });


  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条存款账户扣款信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var athNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNDEPPAYINF_REMOVE+athNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
