/**
 * Created by lina on 2017/3/7.
 */

  + function($, app) {

    app.registerTextHelper('matPhCd', app.matPhCd, 'code', 'name');
    app.registerTextHelper('matTyCd', app.matTyCd, 'code', 'name');
    app.registerTextHelper('matWarrYn', app.matWarrYn, 'code', 'name');
    app.registerTextHelper('st', app.st, 'code', 'name');

    /**
     * 初始化列表数据
     */

    /* 基础材料下拉框初始化 */
    $('#matPhCd').selectloader({
      'matPhCd': app.matPhCd
    });
    $('#matTyCd').selectloader({
      'matTyCd': app.matTyCd
    });
    $('#matWarrYn').selectloader({
      'matWarrYn': app.matWarrYn
    });
    $('#st').selectloader({
      'st': app.st
    });

    /**
     * 设置弹框表单模板
     */
    app.context.formHtml = $('#form-template').html();
    /**
     * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
     */
    app.context.formInit = function(form) {
      /*   初始化弹窗里的下拉框   */
      form.find('[name="matPhCd"]').selectloader({
        'matPhCd': app.matPhCd
      });
      form.find('[name="matTyCd"]').selectloader({
        'matTyCd': app.matTyCd
      });
      form.find('[name="matWarrYn"]').selectloader({
        'matWarrYn': app.matWarrYn
      });
      form.find('[name="st"]').selectloader({
        'st': app.st
      });
      
      app.bindFormValidation(form);
    }

    /**
     * 增加操作的弹框
     */
    $('#add').getModal({
      title: '新增基础材料信息',
      body: app.context.formHtml,
      showBefore: function(modal) {
        app.context.showBefore({
          modal: modal,
          url: app.LOANMATERIAL_CODE
        }, app, app.context.formInit);
      },
      hideAfter: function(modal) {
        modal.setBody(app.context.formHtml);
      }
    }, function(modal) {
      app.context.submit({
        modal: modal,
        url: app.BASE_MATERIAL_CREATE
      }, app);
    });

    /**
     * 修改操作的弹框
     */
    $('#update').getModal({
      title: '修改基础材料信息',
      noHandleArray: ["激活","失效"],
      noHandle: '此状态不能修改',
      body: app.context.formHtml,
      selector: function() {
        if($('.table-scrollable').find('[type=radio]:checked').length > 0) {
          var status = $('.table-scrollable').find('[type=radio]:checked').data('state');
          return(status)
        }
      },
      showBefore: function(modal) {
        app.context.showBefore({
          url: app.BASE_MATERIAL_VIEW,
          modal: modal,
          param: $('[type=radio]:checked').data('id'),

        }, app, app.context.formInit);
      },

      hideAfter: function(modal) {
        modal.setBody(app.context.formHtml);

      }
    }, function(modal) {
      app.context.submit({
        modal: modal,
        url: app.BASE_MATERIAL_UPDATE
      }, app);
    });

    /**
     * 删除操作的弹框
     */
    $('#delete').getModal({
      statusArray: ["初始"],
      textArray: "确定要删除该条记录吗？",
      noHandleArray: ["激活", "失效"],
      noHandle: '此状态不能删除',
      size: 'modal-sm',
      selector: function() {
        if($('[type=radio]:checked').length > 0) {
          return($('[type=radio]:checked').data('state'))
        }
      }
    }, function(modal) {
      app.context.submit({
        modal: modal,
        url: app.BASE_MATERIAL_REMOVE + $('[type=radio]:checked').data('id'),
        text: '删除成功',
        isEasyModal: true
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
      app.context.submit({
        modal: modal,
        url: app.BASE_MARERIAL_ACTIVE,
        param: {
          matCd: $('[type=radio]:checked').data('id')
        },
        text: '激活成功',
        isEasyModal: true
      }, app);
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
        url: app.BASE_MARERIAL_UN_ACTIVE,
        param: {
          matCd: $('[type=radio]:checked').data('id')
        },
        text: '失效成功',
        isEasyModal: true
      }, app);
    });

  }(window.jQuery, window.app);

