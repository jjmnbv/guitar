+function($,app) {
  
  /**
   * 材料集分类下来框初始化
   */
  $('#matCd').selectloader({
    'matCd': app.matCd
  });
  $('#matTyCd').selectloader({
    'matTyCd': app.matTyCd
  });
  $('#matPhCd').selectloader({
    'matPhCd': app.matPhCd
  });
  $('.matWarrYn').radioloader({
    'matWarrYnList': app.matWarrYnList
  });

  app.registerTextHelper('matCd', app.matCd, 'matCd', 'matCa');
  app.registerTextHelper('matTyCd', app.matTyCd, 'code', 'name');
  app.registerTextHelper('matPhCd', app.matPhCd, 'code', 'name');
  app.registerTextHelper('matSetSuStatus', app.matSetSuStatus, 'code', 'name');
  app.registerTextHelper('matWarrYn', app.matWarrYnList, 'code', 'name');

  /**
   * 设置弹框表单模板
   */
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function(form) {
    /*   初始化弹窗里的下拉框   */
    form.find('[name="matCd"]').selectloader({
      'matCd': app.matCd
    });
    form.find('[name="matTyCd"]').selectloader({
      'matTyCd': app.matTyCd
    });
    form.find('[name="matPhCd"]').selectloader({
      'matPhCd': app.matPhCd
    });
    form.find('[name="matColCd"]').selectloader({
      'matColCd': app.matColCd
    });
    form.find('[name="matColReqCd"]').selectloader({
      'matColReqCd': app.matColReqCd
    });
    form.find('[name="matWarrYn"]').radioloader({
      'matWarrYnList': app.matWarrYnList
    });
    /*   初始化时间控件   */
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      todayHighlight: true,
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
    title: '新增材料集配置',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    showBefore: function(modal) {
      //初始化访问数据
      $("#addMatSetNo").val($("#mainMatSetNo").val());
      modal.find('.matWarrYnList').radioloader({
        'matWarrYnList': app.matWarrYnList
      });
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    showAfter: function(modal) {
      setInput();
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    modal.find(".modal-body").find('select[name="matTyCd"],select[name="matPhCd"]').css("background-color", "#efefef");
    modal.find(".modal-body").find('select[name="matTyCd"],select[name="matPhCd"]').attr("disabled", false);
    app.context.submit({
      modal: modal,
      url: app.COMMIT_MATERIAL_DESIGN_ADD_DATA
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
    /* 获取form的html模板，并填充到模态框中 */
    selector: function() {
      if($('.table-scrollable').find('[type=radio]:checked').length > 0) {
        var status = $('.table-scrollable').find('[type=radio]:checked').data('state');
        return(status)
      }
    },
    showBefore: function(modal) {
      modal.find('.matWarrYnList').radioloader({
        'matWarrYnList': app.matWarrYnList
      });
      app.context.showBefore({
        url: app.GET_DESIGN_DATA_BY_ID,
        modal: modal,
        param: '?matCd=' + $('input[name=radio]:checked').data('id') + '&matSetNo=' + $('#mainMatSetNo').val()
      }, app, app.context.formInit);

    },
    showAfter: function(modal) {
      $(".addMatSetNo").val($("#mainMatSetNo").val());
      $("select[name=matCd]").attr("disabled", true);
      $("select[name=matCd]").css("background-color", "#efefef");
    },
    hideAfter: function(modal) {
      $("select[name=matCd]").attr("disabled", false);
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    modal.find(".modal-body").find('select[name="matTyCd"],select[name="matPhCd"]').css("background-color", "#efefef");
    modal.find(".modal-body").find('select[name="matTyCd"],select[name="matPhCd"]').attr("disabled", false);
    app.context.submit({
      modal: modal,
      url: app.COMMIT_MATERIAL_DESIGN_UPDATE_DATA,
    }, app);
  });

  /**
   * 删除操作的弹框data-state
   */
  $('#delete').getModal({
    statusArray: ["初始"],
    textArray: "确定要删除该条记录吗？",
    noHandleArray: ["激活", "失效"],
    noHandle: '该条记录不可删除！',
    size: 'modal-sm',
    selector: function() {
      if($('.table-scrollable').find('[type=radio]:checked').length > 0) {
        return($('.table-scrollable').find('[type=radio]:checked').data('state'))
      }
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.MATERIAL_DESIGN_DELETE_DATA + '?matCd=' + $('[type=radio]:checked').data('id') + '&matSetNo=' + $('#mainMatSetNo').val(),
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

  /**
   * 复制操作的弹框
   */
  $('#copy').getModal({
    title: '复制材料集配置',
    cancel: '取消复制',
    body: app.context.formHtml,
    selector: function() {
      return !!$('.table-scrollable').find('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      modal.find('.matWarrYnList').radioloader({
        'matWarrYnList': app.matWarrYnList
      });
      app.context.showBefore({
        url: app.GET_DESIGN_DATA_BY_ID,
        modal: modal,
        param: '?matCd=' + $('input[name=radio]:checked').data('id') + '&matSetNo=' + $('#mainMatSetNo').val()
      }, app, app.context.formInit);
    },
    showAfter: function(modal) {
      $(".addMatSetNo").val($("#mainMatSetNo").val());
      setInput();
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    modal.find(".modal-body").find('select[name="matTyCd"],select[name="matPhCd"]').css("background-color", "#efefef");
    modal.find(".modal-body").find('select[name="matTyCd"],select[name="matPhCd"]').attr("disabled", false);
    app.context.submit({
      modal: modal,
      url: app.COMMIT_MATERIAL_DESIGN_COPY_DATA
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
        return($('.table-scrollable').find('[type=radio]:checked').data('state'))
      }

    }
  }, function(modal) {
    if($('[type=radio]:checked').data('state') == "失效") {
      app.alertError("失效状态不能激活！");
    } else {
      app.context.submit({
        modal: modal,
        url: app.MATERIAL_DESIGN_ACTIVE_DATA,
        param: {
          'matCd': $('input[name=radio]:checked').data('id'),
          'matSetNo': $('#mainMatSetNo').val()
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
        return($('.table-scrollable').find('[type=radio]:checked').data('state'))
      }
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.MATERIAL_DESIGN_UN_ACTIVE_DATA,
      param: {
        'matCd': $('input[name=radio]:checked').data('id'),
        'matSetNo': $('#mainMatSetNo').val()
      },
      text: '失效成功',
      isEasyModal: true
    }, app);
  });

  /**
   * 查看详情弹框
   */
  $('#detail').getModal({
    title: '材料配置详情',
    body: app.context.formHtml,
    selector: function() {
      return !!$('.table-scrollable').find('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      modal.find('.matWarrYnList').radioloader({
        'matWarrYnList': app.matWarrYnList
      });
      app.context.showBefore({
        url: app.GET_DESIGN_DATA_BY_ID,
        modal: modal,
        param: '?matCd=' + $('input[name=radio]:checked').data('id') + '&matSetNo=' + $('#mainMatSetNo').val(),
        readOnly: true
      }, app, app.context.formInit, function(form) {
        /*   初始化radio控件   */
        form.find('input').uniform();
      });
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    },
    footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'
  });
}(window.jQuery, window.app);

/*
 * lh 根据材料代码回显检查要求
 */
function setInput() {
  $('body').on('change', '#pkIdMatCd', function() {
    var $value = $(this).find("option:selected").val();
    for(var i = 0; i < app.matCd.length; i++) {
      if((app.matCd[i].matCd) == $value) {
        var $matForm = $(this).parents(".modal-body");
        $matForm.find('#matCheReqCo').val(app.matCd[i].matCheReqCo);
        $matForm.find('[name="matTyCd"]').val(app.matCd[i].matTyCd).trigger('change');
        $matForm.find('[name="matPhCd"]').val(app.matCd[i].matPhCd).trigger('change');
        $matForm.find('select[name="matTyCd"],select[name="matPhCd"]').attr("disabled", true);
        $matForm.find('input[name="matWarrYn"][value="' + app.matCd[i].matWarrYn + '"]').attr("checked", true);
        $(this).parents("form").validate().element($matForm.find('#matCheReqCo'));
        $(this).parents("form").validate().element($matForm.find('[name="matTyCd"]'));
        $(this).parents("form").validate().element($matForm.find('[name="matPhCd"]'));
        $(this).parents("form").validate().element($matForm.find('[name="matWarrYn"]'));
        return;
      }
    }
  });
}