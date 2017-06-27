/**
 * Created by lina on 2017/4/25.
 */
+ function($, app) {

  app.registerTextHelper('st', app.stList, 'code', 'name');

  $('#st').selectloader({
    'stList': app.stList
  });

  /*开户银行代码远程校验*/
  var validateBankNoExists = function(form) {
    $("input[name='openBankNo']", form).rules("add", {
      remote: {
        url: app.ACCOUNT_BANKCODE_EXISTS,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
            return form.find('[name="openBankNo"]').val();
          }
        }
      },
      messages: {
        remote: "开户银行代码已经存在！"
      }
    });
  };

  var cardBinNoExists = function(form) {
    $("input[name='cardBinNo']", form).rules("add", {
      remote: {
        url: app.ACCOUNT_BANKCODE_CARDBINNOCHECK,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
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
    validateBankNoExists(form);
    cardBinNoExists(form);
  };

  app.context.formInit1 = function(form) {
    app.bindFormValidation(form);
    cardBinNoExists(form);
  };
  /**
   * 增加操作的弹框
   */
  $('#add').getModal({
    title: '新增开户银行',
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
      url: app.ACCOUNT_BANK_CREATE
    }, app);
  });

  /**
   * 修改操作的弹框
   */
  $('#update').getModal({
    title: '修改开户银行',
    body: app.context.formHtml,
    /* 获取form的html模板，并填充到模态框中 */
    selector: function() {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function(modal) {
      app.context.showBefore({
        url: app.ACCOUNT_BANK_VIEW,
        modal: modal,
        param: $('[type=radio]:checked').data('id')
      }, app, app.context.formInit1);
    },
    showAfter: function(modal) {
      modal.find('[name=openBankNo]').attr('readonly', true);
    },
    hideAfter: function(modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function(modal) {
    app.context.submit({
      modal: modal,
      url: app.ACCOOUNT_BANK_UPDATE
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
      url: app.ACCOUNT_BANK_REMOVE + $('[type=radio]:checked').data('id'),
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

  /*   /!**
   * 激活操作的弹框
   *!/
   $('#active').getModal({
   statusArray:["初始"],
   textArray:"确定要激活吗？",
   noHandleArray:["激活","失效"],
   noHandle:'该状态不能激活',
   size: 'modal-sm',
   selector: function () {
   if($('[type=radio]:checked').length>0){
   return ($('[type=radio]:checked').data('state'))
   }
   }
   }, function (modal) {
   if($('[type=radio]:checked').data('state')=="失效"){
   app.alertError('失效状态不能激活！');
   }else{
   app.context.submit({
   modal: modal,
   url: app.ACCOUNT_BANK_ACTIVE,
   param: {openBankNo: $('[type=radio]:checked').data('id')},
   text: '激活成功',
   isEasyModal: true
   }, app);
   };

   });
   /!**
   * 失效操作的弹框
   *!/
   $('#unActive').getModal({
   statusArray:["激活"],
   textArray:"确定要失效吗？",
   noHandleArray:["初始","失效"],
   noHandle:'此状态不能变更为失效状态',
   size: 'modal-sm',
   selector: function () {
   if($('[type=radio]:checked').length>0){
   return ($('[type=radio]:checked').data('state'))
   }
   }
   }, function (modal) {
   app.context.submit({
   modal: modal,
   url: app.ACCOUNT_BANK_UNACTIVE,
   param:{openBankNo: $('[type=radio]:checked').data('id')},
   text: '失效成功',
   isEasyModal: true
   }, app);
   });*/

}(window.jQuery, window.app);