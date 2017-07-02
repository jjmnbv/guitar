+ function($, app) {


  /**
   * 名单管理下来框初始化
   */
  app.registerTextHelper('pk.blKeCd', app.listCode, 'code', 'name');
  app.registerTextHelper('paTyCd', app.idType, 'code', 'name');
  app.registerTextHelper('frCd', app.listSource, 'code', 'name');
  app.registerTextHelper('st', app.state, 'code', 'name');

  var validateSZExists = function(form) {
    $("input[name='pk.blVaCa']", form).rules("add", {
      remote: {
        url: app.PERSON_WHITE_EXISTS,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
            return form.find('[name="pk.blVaCa"]').val();
          }
        }
      },
      messages: {
        remote: "名单数值已经存在！"
      }
    });
  };

  /**
   * 设置弹框表单模板
   */
  app.context.formHtml = $('#form-template').html();
  /**
   * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
   */
  app.context.formInit = function(form) {
    /*   初始化弹窗里的下拉框   */
    form.find('[name="paTyCd"]').selectloader({
      'idType': app.idType
    });
    form.find('[name="pk.blKeCd"]').selectloader({
      'listCode': app.listCode
    });
    form.find('[name="frCd"]').selectloader({
      'listSource': app.listSource
    });
    form.find('[name="st"]').selectloader({
      'state': app.state
    });
    /*   初始化时间控件   */
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      todayHighlight: true,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    }).on('hide', function (e) {
      form.validate().element($(this).parent().find("input"));
    });

    /*证件号码 身份证、军人证校验*/
    form.find('#paTyCd').change(function() {
      if(($('#paTyCd option:selected').val()) == "JR") {
        $('#paNo').removeClass('isIDCard').addClass('isIdNUM');
        vali_paNo();
      } else if(($('#paTyCd option:selected').val()) == "SF") {
        $('#paNo').removeClass('isIdNUM').addClass('isIDCard');
        vali_paNo();
      }
    });

    /*名单数值校验*/
    form.find('#blKeCd').change(function() {
      if(($('#blKeCd option:selected').val()) == "SJ") {
        $('#blVaCa').addClass('isMobilePhone isNotSpecialCharacter').removeClass('isIDCard agencyCode businessLicense');
      } else if(($('#blKeCd option:selected').val()) == "ZJ") {
        $('#blVaCa').addClass('isIDCard isNotSpecialCharacter').removeClass('isMobilePhone agencyCode businessLicense');
      } else if(($('#blKeCd option:selected').val()) == "YY") {
        $('#blVaCa').addClass('businessLicense isNotSpecialCharacter').removeClass('isMobilePhone isIDCard agencyCode');
      } else if(($('#blKeCd option:selected').val()) == "ZZ") {
        $('#blVaCa').addClass('agencyCode').removeClass('isMobilePhone isIDCard businessLicense isNotSpecialCharacter');
      } else {
        $('#blVaCa').removeClass('isMobilePhone isIDCard agencyCode businessLicense');
      }
    });
    /*lh  下拉框修改 证件号码 身份证、军人证校验*/
    function vali_paNo() {
      if($('#paNo').val() != "") {
        $('#modalForm').validate().element($('#paNo'));
      }
    }

    /*lh 下拉框修改 名单数值校验*/
    function vali_blVaCa() {
      if($('#blVaCa').val() != "") {
        $('#modalForm').validate().element($('#blVaCa'));
      }
    }
    app.bindFormValidation(form);
    validateSZExists(form);

  };

  app.context.formInit1 = function(form) {
    /*   初始化弹窗里的下拉框   */
    form.find('[name="paTyCd"]').selectloader({
      'idType': app.idType
    });
    form.find('[name="pk.blKeCd"]').selectloader({
      'listCode': app.listCode
    });
    form.find('[name="frCd"]').selectloader({
      'listSource': app.listSource
    });
    form.find('[name="st"]').selectloader({
      'state': app.state
    });

    /*证件号码 身份证、军人证校验*/
    form.find('#paTyCd').change(function() {
      if(($('#paTyCd option:selected').val()) == "JR") {
        $('#paNo').removeClass('isIDCard').addClass('isIdNUM');
      } else if(($('#paTyCd option:selected').val()) == "SF") {
        $('#paNo').removeClass('isIdNUM').addClass('isIDCard');
      }
    });

    /*名单数值校验*/
    form.find('#blKeCd').change(function() {
      if(($('#blKeCd option:selected').val()) == "SJ") {
        $('#blVaCa').addClass('isMobilePhone isNotSpecialCharacter').removeClass('isIDCard agencyCode businessLicense');
      } else if(($('#blKeCd option:selected').val()) == "ZJ") {
        $('#blVaCa').addClass('isIDCard isNotSpecialCharacter').removeClass('isMobilePhone agencyCode businessLicense');
      } else if(($('#blKeCd option:selected').val()) == "YY") {
        $('#blVaCa').addClass('businessLicense isNotSpecialCharacter').removeClass('isMobilePhone isIDCard agencyCode');
      } else if(($('#blKeCd option:selected').val()) == "ZZ") {
        $('#blVaCa').addClass('agencyCode').removeClass('isMobilePhone isIDCard businessLicense isNotSpecialCharacter');
      } else {
        $('#blVaCa').removeClass('isMobilePhone isIDCard agencyCode businessLicense');
      }
    });
  };
  app.context.formInit2 = function(form, data) {
    /*   初始化时间控件   */
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      initialDate: data.createDate,
      'start-date': "+0d",
      language: 'zh-CN'
    }).on('hide', function (e) {
      form.validate().element($(this).parent().find("input"));
    });
  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增个人白名单',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    showBefore: function(modal) {
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.PERSON_WHITE_ADD
    }, app);
  });

  /**
   * 修改操作的弹框
   */
  $('#update').getModal({
    title: '修改个人白名单',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    selector: function() {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      var blKeCd=$('[type=radio]:checked').data('id');
      var blVaCa=$('[type=radio]:checked').data('shu');
      var data={
        'blKeCd': blKeCd,
        'blVaCa': blVaCa
      };
      app.context.showBefore({
        url: app.PERSON_WHITE_GET_DATA_BY_ID,
        modal: modal,
        param:data,
      }, app, app.context.formInit1, app.context.formInit2);
    },
    showAfter: function() {
      $('input[id="blVaCa"]').attr("readonly", true);
      $('select[id="blKeCd"]').attr("disabled", true);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
      $('input[id="blVaCa"]').attr("readonly", false);
      $('select[id="blKeCd"]').attr("disabled", false);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.PERSON_WHITE_UPDATE
    }, app);
  });

  /**
   * 查看详情弹框
   */
  $('#detail').getModal({
    title: '查看个人白名单',
    body: app.context.formHtml,
    selector: function() {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      var blKeCd=$('[type=radio]:checked').data('id');
      var blVaCa=$('[type=radio]:checked').data('shu');
      var data={
        'blKeCd': blKeCd,
        'blVaCa': blVaCa
      };
      app.context.showBefore({
        url: app.PERSON_WHITE_GET_DATA_BY_ID,
        modal: modal,
        param:data,
        readOnly: true
      }, app, app.context.formInit1, app.context.formInit2);
    },
    showAfter: function(modal) {
      $(".dateId").attr("disabled", true);
      modal.find(".selBox").find("button").attr("disabled", true);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    },
    footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'
  });

  /**
   * 移出操作的弹框
   */
  $('#remove').getModal({
    text: '确定要将该客户移出个人白名单吗？',
    size: 'modal-sm',
    selector: function() {
      return !!$('[type=radio]:checked').length;
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.PERSON_WHITE_REMOVE + '?blKeCd=' + $('[type=radio]:checked').data('id') + '&' + 'blVaCa=' + $('[type=radio]:checked').data('shu'),
      text: '移出成功',
      isEasyModal: true
    }, app);
  });

}(window.jQuery, window.app);

function verify(param) {
  if($(param).find('option:selected').val() == "JR") {
    $('.paNo').removeClass('isIDCard isPort').addClass('isIdNUM');
  } else if($(param).find('option:selected').val() == "SF") {
    $('.paNo').removeClass('isIdNUM isPort').addClass('isIDCard');
  } else if($(param).find('option:selected').val() == "HZ") {
    $('.paNo').removeClass('isIdNUM isIDCard').addClass('isPort');
  } else {
    $('.paNo').removeClass('isIdNUM isIDCard isPort');
  }
};