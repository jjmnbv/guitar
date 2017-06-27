/**
 * Created by lina on 2017/4/25.
 */
+ function($, app) {

  app.registerTextHelper('cityNo', app.provinceList, 'code', 'name');

  $('#provCd').selectloader({
    'provinceList': app.provinceList
  });
  $('#regionModal').on('hidden.bs.modal', function() {
    $(this).find('form')[0].reset();
  });

  $('#confirm').click(function() {
    var checked = $("#accountTable").find("[type='radio']:checked");
    var ptr = checked.parents('tr');
    if($('#distCd option:selected').val()) {
      ptr.find('.regionHidden').val($('#distCd option:selected').val());
      ptr.find('.region').val($('#distCd option:selected').data('text-val'));
    } else if($('#cityCd option:selected').val() && !$('#distCd option:selected').val()) {
      ptr.find('.regionHidden').val($('#cityCd option:selected').val());
      ptr.find('.region').val($('#cityCd option:selected').data('text-val'));
    } else if(!$('#cityCd option:selected').val() && !$('#distCd option:selected').val()) {
      ptr.find('.regionHidden').val($('#provCd option:selected').val());
      ptr.find('.region').val($('#provCd option:selected').data('text-val'));
    }

  });

  $('body').on("change", "#cityNo", function() {
    $(this).parents("form").validate().element($(this));
  }); +

  function($, app) {
    /**
     * 初始化数据
     */

    $.getJSON(app.ACCOUNT_BANK_VIEW + app.request.openBankNo, function(data) {
      if(app.isOK(data)) {
        var tpl = Handlebars.compile($('#bank-parent-template').html());
        var html = tpl(data);
        $("#parentCont").html(html);
      }
    });

  }(window.jQuery, window.app);

  /*开户代码远程校验*/
  var validateOrganizationNoExists = function(form) {
    $("input[name='openBankBrNo']", form).rules("add", {
      remote: {
        url: app.ACCOUNT_ORGANIZATIONCODE_EXISTS,
        type: "POST",
        dateType: "text",
        data: {
          openBankBrNo: function() {
            return form.find('[name="openBankBrNo"]').val();
          }
        }
      },
      messages: {
        remote: "开户机构代码已经存在！"
      }
    });
  };

  var cardBinNoExists = function(form) {
    $("input[name='cardBinNo']", form).rules("add", {
      remote: {
        url: app.ACCOUNT_ORGANIZATION_CARDBINNOCHECK,
        type: "POST",
        dateType: "text",
        data: {
          cardBinNo: function() {
            return form.find('[name="cardBinNo"]').val();
          }
        }
      },
      messages: {
        remote: "卡bin号格式不正确！"
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
    app.bindFormValidation(form);
    validateOrganizationNoExists(form);
    cardBinNoExists(form);
    $('#confirm').click(function() {

      if($('#distCd option:selected').val()) {
        form.find('.regionHidden').val($('#distCd option:selected').val());
        form.find('.region').val($('#distCd option:selected').data('text-val'));
      } else if($('#cityCd option:selected').val() && !$('#distCd option:selected').val()) {
        form.find('.regionHidden').val($('#cityCd option:selected').val());
        form.find('.region').val($('#cityCd option:selected').data('text-val'));
      } else if(!$('#cityCd option:selected').val() && !$('#distCd option:selected').val()) {
        form.find('.regionHidden').val($('#provCd option:selected').val());
        form.find('.region').val($('#provCd option:selected').data('text-val'));
      }
      $('.region').focus();
    });

  };

  app.context.formInit1 = function(form) {
	app.bindFormValidation(form);
    cardBinNoExists(form);
    $('#confirm').click(function() {

      if($('#distCd option:selected').val()) {
        form.find('.regionHidden').val($('#distCd option:selected').val());
        form.find('.region').val($('#distCd option:selected').data('text-val'));
      } else if($('#cityCd option:selected').val() && !$('#distCd option:selected').val()) {
        form.find('.regionHidden').val($('#cityCd option:selected').val());
        form.find('.region').val($('#cityCd option:selected').data('text-val'));
      } else if(!$('#cityCd option:selected').val() && !$('#distCd option:selected').val()) {
        form.find('.regionHidden').val($('#provCd option:selected').val());
        form.find('.region').val($('#provCd option:selected').data('text-val'));
      }

    });

  };

  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增开户机构',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    showBefore: function(modal) {
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    showAfter: function(modal) {
      modal.find('[name="openBankNo"]').val($('.bankNo').text());
      modal.find('[name="openBankNa"]').val($('.bankNa').text());
      modal.find('#regionModal').on('show.bs.modal', function() {
        if( $(this).find('form').find(".region").val()==""){
          $('select').selectpicker('refresh');
        }
      });
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
      $('select').selectpicker('refresh');
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.ACCOUNT_ORGANIZATION_CREATE
    }, app);
  });

  /**
   * 修改操作的弹框
   */
  $('#update').getModal({
    title: '修改开户机构',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    selector: function() {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      app.context.showBefore({
        url: app.ACCOUNT_ORGANIZATION_VIEW,
        modal: modal,
        param: $('[type=radio]:checked').data('id')
      }, app, app.context.formInit1);
    },
    showAfter: function(modal) {
      modal.find('[name=openBankBrNo]').attr('readonly', true);
      app.registerTextHelper('cityNo', app.provinceList, 'code', 'name');
      /*开户地区赋值*/
      var addressVal = modal.find('[name=cityNo]').val();
      var provinceList = JSON.stringify(app.provinceList);
      var $index = provinceList.indexOf(addressVal) + 23;
      provinceName = provinceList.substr($index, 20);
      var arr = provinceName.split('"');
      modal.find('[name=cityNo]').next().val(arr[1]);

    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
      $('select').selectpicker('refresh');
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.ACCOUNT_ORGANIZATION_UPDATE
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
      url: app.ACCOUNT_ORGANIZATION_REMOVE + $('[type=radio]:checked').data('id'),
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

}(window.jQuery, window.app);