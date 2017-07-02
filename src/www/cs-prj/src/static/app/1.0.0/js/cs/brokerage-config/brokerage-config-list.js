+ function($, app) {
  $('#loanTypeForm').validate();

  $("input[type='radio']").uniform();

  app.context.formHtml = $('#form-template').html();
  /**
   * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
   */
  app.context.formInit = function(form) {};

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
      url: app.BROKERAGE_DELETE + '?id=' + $('[type=radio]:checked').data('id'),
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

  /*-----修改操作弹框-------*/
  $('#edit').getModal({
    size: 'modal-sm',
    selector: function() {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore: function() {
      window.location.href = "edit-brokerage-config.html?id=" + $('[type=radio]:checked').data('id');
    }
  });

}(window.jQuery, window.app);