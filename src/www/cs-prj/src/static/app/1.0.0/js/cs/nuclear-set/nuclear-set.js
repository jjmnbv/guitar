+ function($, app) {
  "use strict ";
  /**
   * 设置弹框表单模板
   */
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function(form) {
      /*   初始化时间控件   */
      form.find(".date-picker-page").datepicker({
        rtl: App.isRTL(),
        orientation: "left",
        autoclose: !0,
        format: "yyyy-mm-dd",
        'start-date': "+0d",
        language: 'zh-CN'
      });
      
      app.bindFormValidation(form);
    }
    /**
     * 初始化数据
     */

  $("#loanTypeForm").validate();

  /**
   * 增加操作弹框
   */
  $('#add').getModal({
    title: '新增电核配置',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    showBefore: function(modal) {
      app.context.showBefore({
        url: app.NUCLER_CODE,
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COMMIT_NUCLEAR_SET_ADD_DATA
    }, app);
  });
  /**
   * 修改操作弹框
   */
  $('#update').getModal({
    title: '修改电核配置',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    selector: function() {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      app.context.showBefore({
        url: app.GET_NUCLEAR_DATA_BY_ID,
        modal: modal,
        param: $('[type=radio]:checked').data('id')
      }, app, app.context.formInit);

      $('input[name="telCheDd"]').attr("readonly", true);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
      $('input[name="telCheDd"]').attr("readonly", false);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COMMIT_NUCLEAR_SET_UPDATE_DATA
    }, app);
  });

  /**
   * 删除操作的弹框
   */
  $('#delete').getModal({
    text: '确定要删除该条记录吗？',
    size: 'modal-sm',
    selector: function() {
      return !!$('[type=radio]:checked').length;
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.NUCLEAR_SET_DELETE_DATA + $('[type=radio]:checked').data('id'),
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

}(window.jQuery, window.app);