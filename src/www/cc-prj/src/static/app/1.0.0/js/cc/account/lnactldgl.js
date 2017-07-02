$(function () {
  var $ = window.jQuery;
  var app = window.app;
  app.context.formHtml = $('#form-template').html();

  app.context.formInit = function (form) {
    /*   初始化弹窗里的下拉框   */
   
  };

  /**
   * 添加分户账表
   */
  /*var addLnActLdgL = function () {
   var addModal = $('#lnactldgl-add-modal');
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
   app.alertOK('已成功新增分户账表.');
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
    title: '新增分户账信息',
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
   * 修改分户账表
   */
  /*var eidtLnActLdgL = function () {
   var editModal = $('#lnactldgl-edit-modal');
   var editForm = $("form", editModal);
   var validator = app.bindFormValidation(editForm);
   editModal.on('hidden.bs.modal', function () {
   editForm[0].reset();
   validator.resetForm();
   $.uniform.update();
   });
   editModal.on('show.bs.modal', function (event) {
   var lnactldglId = $(event.relatedTarget).data('lnactldglId');
   if (!lnactldglId) return;

   App.startPageLoading({ animate: true });
   var jqxhr = app.$getJSON(app.LNACTLDGL_VIEW + lnactldglId);
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
   app.alertOK('已成功修改分户账表.');
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
    title: '编辑分户账信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      var id = $('[type=radio]:checked').data('id');
      if (!id) return;
      app.context.showBefore({
        url: app.LNACTLDGL_VIEW,
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
    var loNo = $('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.PERSON_WHITE_REMOVE + loNo,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});
