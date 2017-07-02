+ function($, app) {


  /**
   * 名单管理下来框初始化
   */
  /* $('#listLevel').selectloader({'listLevel': app.listLevel});*/
  app.registerTextHelper('pkId.blKeCd', app.listCode, 'code', 'name');
  app.registerTextHelper('corpPaperType', app.idType, 'code', 'name');
  app.registerTextHelper('fromCd', app.listSource, 'code', 'name');
  app.registerTextHelper('keStatus', app.state, 'code', 'name');
  app.registerTextHelper('corpType', app.clientTpye, 'code', 'name');

  var validateSZExists = function(form) {
    $("input[name='pkId.blVaCa']", form).rules("add", {
      remote: {
        url: app.PAERTNER_WHITE_EXISTS,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
            return form.find('[name="pkId.blVaCa"]').val();
          }
        }
      },
      messages: {
        remote: "名单数值已经存在！"
      }
    });
  };
 
  //页面加载完执行
  $(function() {
    /**
     * 设置弹框表单模板
     */
    app.context.formHtml = $('#form-template').html();
    /**
     * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
     */
    app.context.formInit = function(form) {
      /*   初始化弹窗里的下拉框   */
      form.find('[name="corpType"]').selectloader({
        'clientTpye': app.clientTpye
      });
      form.find('[name="corpPaperType"]').selectloader({
        'idType': app.idType
      });
      form.find('[name="pkId.blKeCd"]').selectloader({
        'listCode': app.listCode
      });
      form.find('[name="fromCd"]').selectloader({
        'listSource': app.listSource
      });
      form.find('[name="keStatus"]').selectloader({
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

      app.bindFormValidation(form);
      validateSZExists(form);

    };

    app.context.formInit1 = function(form) {
      /*   初始化弹窗里的下拉框   */
      form.find('[name="corpType"]').selectloader({
        'clientTpye': app.clientTpye
      });
      form.find('[name="corpPaperType"]').selectloader({
        'idType': app.idType
      });
      form.find('[name="pkId.blKeCd"]').selectloader({
        'listCode': app.listCode
      });
      form.find('[name="fromCd"]').selectloader({
        'listSource': app.listSource
      });
      form.find('[name="keStatus"]').selectloader({
        'state': app.state
      });

      /*名单数值校验*/
      form.find('#blKeCd').change(function() {
        if(($('#blKeCd option:selected').val()) == "SJ") {
          $('#blVaCa').addClass('isMobilePhone').removeClass('isIDCard agencyCode businessLicense');
        } else if(($('#blKeCd option:selected').val()) == "ZJ") {
          $('#blVaCa').addClass('isIDCard').removeClass('isMobilePhone agencyCode businessLicense');
        } else if(($('#blKeCd option:selected').val()) == "YY") {
          $('#blVaCa').addClass('businessLicense').removeClass('isMobilePhone isIDCard agencyCode');
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
      });
    };
    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
      title: '新增合作方白名单',
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
        url: app.PARTNER_WHITE_ADD
      }, app);
    });

    /**
     * 修改操作的弹框
     */
    $('#update').getModal({
      title: '修改合作方白名单',
      body: app.context.formHtml,
      /* 获取form的html模板，并填充到模态框中 */
      selector: function() {
        return !!$('[type=radio]:checked').length;
      },
      showBefore: function(modal) {
        app.context.showBefore({
          url: app.PARTNER_WHITE_GET_DATA_BY_ID,
          modal: modal,
          param: '?blKeCd=' + $('[type=radio]:checked').data('id') + '&' + 'blVaCa=' + $('[type=radio]:checked').data('shu')
        }, app, app.context.formInit1, app.context.formInit2);
      },
      showAfter: function() {
        $('input[id="blVaCa"]').attr("readonly", true);
        $('select[id="blKeCd"]').attr("disabled", true);
        //根据名单代码判断名单数值的校验类
        var blKeCdSel = $(".modal.in").find('#blKeCd option:selected').val();
        var blKeCdObj = $(".modal.in").find('#blVaCa');
        if(blKeCdSel == "SJ") {
          blKeCdObj.addClass('isMobilePhone').removeClass('isIDCard agencyCode businessLicense');
        } else if(blKeCdSel == "ZJ") {
          blKeCdObj.addClass('isIDCard').removeClass('isMobilePhone agencyCode businessLicense');
        } else if(blKeCdSel == "YY") {
          blKeCdObj.addClass('businessLicense').removeClass('isMobilePhone isIDCard agencyCode');
        } else if(blKeCdSel == "ZZ") {
          blKeCdObj.addClass('agencyCode').removeClass('isMobilePhone isIDCard businessLicense isNotSpecialCharacter');
        } else {
          blKeCdObj.removeClass('isMobilePhone isIDCard agencyCode businessLicense');
        }
      },
      hideAfter: function(modal) {
        modal.setBody(app.context.formHtml);
        $('input[id="blVaCa"]').attr("readonly", false);
        $('select[id="blKeCd"]').attr("disabled", false);
      }
    }, function(modal) {
      app.context.submit({
        modal: modal,
        url: app.PARTNER_WHITE_UPDATE
      }, app);
    });

    /**
     * 查看详情弹框
     */
    $('#detail').getModal({
      title: '查看合作方白名单',
      body: app.context.formHtml,
      selector: function() {
        return !!$('[type=radio]:checked').length;
      },
      showBefore: function(modal) {
        app.context.showBefore({
          url: app.PARTNER_WHITE_GET_DATA_BY_ID,
          modal: modal,
          param: '?blKeCd=' + $('[type=radio]:checked').data('id') + '&' + 'blVaCa=' + $('[type=radio]:checked').data('shu'),
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
      text: '确定要将该客户移出合作方白名单吗？',
      size: 'modal-sm',
      selector: function() {
        return !!$('[type=radio]:checked').length;
      }
    }, function(modal) {
      app.context.submit({
        modal: modal,
        url: app.PARTNER_WHITE_REMOVE + '?blKeCd=' + $('[type=radio]:checked').data('id') + '&' + 'blVaCa=' + $('[type=radio]:checked').data('shu'),
        text: '移出成功',
        isEasyModal: true
      }, app);
    });
  });
}(window.jQuery, window.app);

function verify(param) {
  if($(param).find('option:selected').val() == "ZZ") {
    $('.paperNo').removeClass('businessLicense').addClass('agencyCode');
  } else if($(param).find('option:selected').val() == "YY") {
    $('.paperNo').removeClass('agencyCode').addClass('businessLicense');
  }
};