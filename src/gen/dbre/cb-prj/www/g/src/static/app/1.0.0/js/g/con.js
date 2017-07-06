+ function ($,app) {"use strict ";

  var validatorNotExists = function (form) {
    // $("input[name='name']", form).rules("add", {
    //   remote: {
    //     url: app.CON_NOTEXISTS,
    //     type: "POST",
    //     dateType: "text",
    //     data: {
    //       id: function () {
    //         return $("input[name='id']", form).val();
    //       },
    //       name: function () {
    //         return $("input[name='name']", form).val();
    //       }
    //     }
    //   },
    //   messages: {
    //     remote: "该联系已存在！"
    //   }
    // });
  };

  /**
   * 添加联系
   */
  var addCon = function () {
    var addModal = $('#con-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });

    //校验联系是否已经存在
    validatorNotExists(addForm);

    $('.ok', addModal).click(function () {
      if (addForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功新增联系.');
            addModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  }

  /**
   * 修改联系
   */
  var eidtCon = function () {
    var editModal = $('#con-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var conId = $(event.relatedTarget).data('conId');
      if (!conId) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.CON_VIEW + conId);
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

    //校验联系是否已经存在
    validatorNotExists(editForm);

    $('.ok', editModal).click(function () {
      if (editForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功修改联系.');
            editModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  };

  /**
   * 删除联系
   */
  var deleteCon = function () {
    $(".main-page").delegate('[data-delete-con-id]', 'click', function () {
      var conId = $(this).data('deleteConId');
      bootbox.confirm({title: '提示', message: '确定删除联系',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.CON_REMOVE + conId, {}, 'json');
          if (!jqxhr) {
            App.stopPageLoading();
            return;
          }

          jqxhr.done(function (data) {
            App.stopPageLoading();
            if (app.isOK(data)) {
              $('.main-page .pagination-reload').click();
              app.alertOK('删除成功.');
              return;
            }
            app.alertError(data.errors.join('\n'));
          });
        }
      });
    });
  };

  var init = function() {
    addCon();
    eidtCon();
    deleteCon();
  };
  init();
} (window.jQuery,window.app);
