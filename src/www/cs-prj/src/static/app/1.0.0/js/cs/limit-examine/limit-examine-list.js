+ function($, app) {

  $("#jsfs").selectloader({
    'calculateMethod': app.calculateMethod
  });
  $("#jslx").selectloader({
    'calculateType': app.calculateType
  });
  $("input[type='radio']").uniform();

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
      url: app.DELETE_LIMIT + $('[type=radio]:checked').data('id'),
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
      window.location.href = "edit-limit-examine.html?code=" + $('[type=radio]:checked').data('id');
    }
  });

}(window.jQuery, window.app);