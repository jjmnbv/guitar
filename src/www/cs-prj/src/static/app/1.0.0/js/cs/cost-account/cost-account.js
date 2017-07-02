+ function($, app) {

  /**
   * 设置弹框表单模板
   */
  app.context.formHtml = $('#form-template').html();
  /**
   * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
   */
  app.context.formInit = function(form) {
    /*   初始化弹窗里的下拉框   */
    form.find('[name="feTyCd"]').selectloader({
      'feTyCdList': app.feTyCdList
    });
    form.find('[name="amNaCd"]').selectloader({
      'amNaCdList': app.amNaCdList
    });
    form.find('[name="status"]').selectloader({
      'statusList': app.statusList
    });
    form.find('[name="amYn"]').selectloader({
      'amYnList': app.amYnList
    });
    form.find('[name="ccTrCd"]').selectloader({
      'ccTrCdList': app.ccTrCdList
    });
    /*   初始化radio控件   */
    form.find('input').uniform();

    app.bindFormValidation(form);
  };
  $('.feTyCd').selectloader({
    'feTyCdList': app.feTyCdList
  });
  $('.status').selectloader({
    'statusList': app.statusList
  });
  app.registerTextHelper('feTyCd', app.feTyCdList, 'code', 'name');
  app.registerTextHelper('status', app.statusList, 'code', 'name');
  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增费用信息',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    showBefore: function(modal) {
      //初始化访问数据
      $('select[name="ccTrCd"]').attr("disabled", false);
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    showAfter: function(modal) {
      validateSZExists(modal.find("form"));
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COMMIT_COST_ACCOUNT_ADD_DATA
    }, app);
  });
  /**
   * 修改操作的弹框
   */
  $('#update').getModal({
    title: '修改费用信息',
    statusArray: ['CS'],
    noHandleArray: ['ZF', 'JH'],
    noHandle: '此状态不能修改',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    selector: function() {
      if($('[type=radio]:checked').length > 0) {
        return($('[type=radio]:checked').data('status'))
      }
    },
    showBefore: function(modal) {
      console.log($('[type=radio]:checked').data('id'));
      app.context.showBefore({
        url: app.GET_COST_DATA_BY_ID,
        modal: modal,
        param: '?feCode=' + $('[type=radio]:checked').data('id')
      }, app, app.context.formInit);
    },
    showAfter: function(modal) {
      /*lh 费用名称远程校验*/
      var feCa = modal.find("#feCa").val();
      upDatevalidateSZExists(modal.find("form"), feCa);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COMMIT_COST_ACCOUNT_UPDATE_DATA,
    }, app);
  });

  /**
   * 查看详情
   */
  $(document).on('click', '.detail', function() {
    $(this).each(function() {
      var code = $(this).data('code');
      $(this).getModal({
        title: '查看费用信息',
        body: app.context.formHtml,
        /* 获取form的html模板，并填充到模态框中 */
        selector: true,
        showBefore: function(modal) {
          app.context.showBefore({
            url: app.GET_COST_DATA_BY_ID,
            modal: modal,
            param: '?feCode=' + code,
            readOnly: true
          }, app, app.context.formInit);
        },
        hideAfter: function(modal) {
          modal.setBody(app.context.formHtml);
        },
        footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'

      });
    });
  });

  /**
   * 删除操作的弹框
   */
  $('#delete').getModal({
    title: '删除费用信息',
    textArray: '确定要删除该条记录吗？',
    statusArray: ['CS'],
    noHandleArray: ['ZF', 'JH'],
    noHandle: '此状态不能删除',
    size: 'modal-sm',
    selector: function() {
      if($('[type=radio]:checked').length > 0) {
        return($('[type=radio]:checked').data('status'))
      }
    },
    hideAfter: function(modal) {}
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COST_ACCOUNT_DELETE_DATA + '?feCode=' + $('[type=radio]:checked').data('id'),
      text: '删除成功',
      isEasyModal: true,
      failureText: '删除失败'
    }, app);
  });
  /**
   * 激活操作的弹框
   */
  $('#active').getModal({
    textArray: '确定要激活该条记录吗？',
    statusArray: ['CS'],
    noHandleArray: ['ZF', 'JH'],
    noHandle: ['此状态不能激活', '此状态已激活'],
    size: 'modal-sm',
    selector: function() {
      if($('[type=radio]:checked').length > 0) {
        return($('[type=radio]:checked').data('status'))
      }
    },
    hideAfter: function(modal) {}
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COST_ACCOUNT_ACTIVE_DATA + '?feCode=' + $('[type=radio]:checked').data('id'),
      text: '激活成功',
      isEasyModal: true
    }, app);
    /*页面刷新*/
    app.loadData();
  });
  /**
   * 作废操作的弹框
   */
  $('#unActive').getModal({
    textArray: '确定要作废该条记录吗？',
    statusArray: ['JH'],
    noHandleArray: ['ZF', 'CS'],
    noHandle: '此状态不能作废',
    size: 'modal-sm',
    selector: function() {
      if($('[type=radio]:checked').length > 0) {
        return($('[type=radio]:checked').data('status'))
      }
    },
    hideAfter: function(modal) {}
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COST_ACCOUNT_UNACTIVE_DATA + '?feCode=' + $('[type=radio]:checked').data('id'),
      text: '作废成功',
      isEasyModal: true
    }, app);
  });

  /*增加远程校验方法*/
  var validateSZExists = function(form) {
    $(".feCa", form).rules("add", {
      remote: {
        url: app.COST_ACCOUNT_EXIST_DATA,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
            return form.find('[name="feCa"]').val();
          }
        }
      },
      messages: {
        remote: "费用名称已经存在！"
      }
    });
  };
  /*lh 修改远程校验方法*/
  var upDatevalidateSZExists = function(form, feCa) {
    $(".feCa", form).rules("add", {
      remote: {
        url: app.COST_ACCOUNT_EXIST_UPDATA,
        type: "POST",
        dateType: "text",
        data: {
          oldFeCa: feCa,
          feCa: function() {
            return form.find('[name="feCa"]').val();
          }
        }
      },
      messages: {
        remote: "费用名称已经存在！"
      }
    });
  };
}(window.jQuery, window.app);