$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;

  $('.main-page').pagination({
    "first-store": app.firstStore
  });

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
        size:'modal-lg',
        title: '新增币种信息',
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
      },
      function (modal) {
        app.context.submit({
          modal: modal,
          url: app.LNSETLACINFT_CREATE
        }, app);
      });

  /**
   *
   *币种编码的唯一性
   * */

  var validatorNotExists = function (form) {

  };

  /**
   * 修改贷款结算账号信息
   */
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑贷款结算账号信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      var id = $('[type=radio]:checked').data('id');
      operatingMode='edit'

      if (!id) return;
      app.context.showBefore({
        url: app.LNSETLACINFT_VIEW,
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
      url: app.LNSETLACINFT_UPDATE
    }, app);
  });

  /**
   * 移出操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条贷款结算账号信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var athNo=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.LNSETLACINFT_REMOVE+athNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

});
