 + function($,app) {

  /**
   * 设置弹框表单模板
   */
  app.context.formHtml = $('#form-template').html();

  app.context.formInit = function(form) {
    /*   初始化弹窗里的下拉框   */
    form.find('[name="matSetStatus"]').selectloader({
      'matSetStatus': app.matSetStatus
    });
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
  };


  /**
   * 材料集分类下来框初始化
   */
  $('#matSetStatus').selectloader({
    'matSetStatus': app.matSetStatus
  });

  app.registerTextHelper('matSetStatus', app.matSetStatus, 'code', 'name');
  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增材料集配置',
    body: app.context.formHtml,
    showBefore: function(modal) {
      app.context.showBefore({
        url: app.MAT_SET_CODE,
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COMMIT_MATERIAL_ADD_DATA
    }, app);
  });

  /**
   * 修改操作的弹框
   */
  $('#update').getModal({
    title: '修改材料集配置',
    noHandleArray: ["激活","失效"],
    noHandle: '该条记录不能修改！',
    body: app.context.formHtml,
    selector: function() {
      if($('.table-scrollable').find('[type=radio]:checked').length > 0) {
        var status = $('.table-scrollable').find('[type=radio]:checked').data('state');
        return(status)
      }
    },
    showBefore: function(modal) {
      app.context.showBefore({
        url: app.GET_DATA_BY_ID,
        modal: modal,
        param: $('[type=radio]:checked').data('id')
      }, app, app.context.formInit);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COMMIT_MATERIAL_UPDATE_DATA
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
    if($('[type=radio]:checked').data('state') == "初始") {
      app.context.submit({
        modal: modal,
        url: app.MATERIAL_DELETE_DATA + $('[type=radio]:checked').data('id'),
        text: '删除成功',
        isEasyModal: true
      }, app);
    } else {
      app.alertError("不是初始状态，不能删除！")
    }

  });

  /**
   * 复制操作的弹框
   */
  $('#copy').getModal({
    title: '复制材料集配置',
    cancel: '取消复制',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    selector: function() {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      app.context.showBefore({
        url: app.GET_DATA_BY_ID,
        modal: modal,
        param: $('[type=radio]:checked').data('id')
      }, app, app.context.formInit);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.COMMIT_MATERIAL_COPY_DATA
    }, app);
  });

  /**
   * 激活操作的弹框
   */
  $('#active').getModal({
    statusArray: ["初始"],
    textArray: "确定要激活吗？",
    noHandleArray: ["激活", "失效"],
    noHandle: '该状态不能激活',
    size: 'modal-sm',
    selector: function() {
      if($('[type=radio]:checked').length > 0) {
        return($('[type=radio]:checked').data('state'))
      }

    }
  }, function(modal) {
    if($('[type=radio]:checked').data('state') == "失效") {
      app.alertError('失效状态不能激活！');
    } else {
      app.context.submit({
        modal: modal,
        url: app.MATERIAL_ACTIVE_DATA,
        param: {
          matSetCd: $('[type=radio]:checked').data('id')
        },
        text: '激活成功',
        isEasyModal: true
      }, app);
    };

  });

  /**
   * 失效操作的弹框
   */
  $('#unActive').getModal({
    statusArray: ["激活"],
    textArray: "确定要失效吗？",
    noHandleArray: ["初始", "失效"],
    noHandle: '此状态不能变更为失效状态',
    size: 'modal-sm',
    selector: function() {
      if($('[type=radio]:checked').length > 0) {
        return($('[type=radio]:checked').data('state'))
      }
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.MATERIAL_UN_ACTIVE_DATA,
      param: {
        matSetCd: $('[type=radio]:checked').data('id')
      },
      text: '失效成功',
      isEasyModal: true
    }, app);
  });
}(window.jQuery,window.app);