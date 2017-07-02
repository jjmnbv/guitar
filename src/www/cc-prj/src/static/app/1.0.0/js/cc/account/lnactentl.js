$(function () {
  var $ = window.jQuery;
  var app = window.app;
  app.context.formHtml = $('#form-template').html();

  app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */

    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });
  };

  /**
   * 添加会计分录信息
   */
  /*var addLnActEntL = function () {
    var addModal = $('#lnactentl-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });


    $('.ok', addModal).click(function () {
      if (addForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功新增会计分录信息.');
            addModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  }*/
  $('#add').getModal({
    size:'modal-lg',
    title: '新增会计分录信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PERSON_WHITE_ADD
    }, app);
  });
  /**
   * 修改会计分录信息
   */
  /*var eidtLnActEntL = function () {
    var editModal = $('#lnactentl-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var lnactentlId = $(event.relatedTarget).data('lnactentlId');
      if (!lnactentlId) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.LNACTENTL_VIEW + lnactentlId);
      if (!jqxhr) {
        return;
      }

      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (data == null) {
          return;
        }
        editForm.deserializeObject(data);
      });
    });

    $('.ok', editModal).click(function () {
      if (editForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功修改会计分录信息.');
            editModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  };*/
  $('#edit').getModal({
    size: 'modal-lg',
    title: '编辑会计分录信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNACTENTL_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PERSON_WHITE_UPDATE
    }, app);
  });
  $('#delete').getModal({
    text: '确定要删除该条会计分录信息配置吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
    var buzSeqNo = $('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.PERSON_WHITE_REMOVE + buzSeqNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});
