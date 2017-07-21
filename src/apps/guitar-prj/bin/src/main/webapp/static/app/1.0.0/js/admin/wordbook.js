+ function ($, app) {
  "use strict ";

  var validatorNotExists = function (form) {
    $("input[name='code']", form).rules("add", {
      remote: {
        url: app.base + '/wordbook/notexists',
        type: "POST",
        dateType: "text",
        data: {
          id: function () {
            return $("input[name='id']", form).val();
          },
          code: function () {
            return $("input[name='code']", form).val();
          }
        }
      },
      messages: {
        remote: "该字典已存在！"
      }
    });
  };

  /**
   * 添加系统字典
   */
  var addWordBook = function () {
    var addModal = $('#wordbook-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
    });

    //校验字典项是否已经存在
    validatorNotExists(addForm);

    $('button.ok', addModal).click(function () {
      if (addForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('新增字典成功.');
            addModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
      }
    });
  };

  /**
   * 修改的字典信息
   */
  var editWordbook = function () {
    var editModal = $('#wordbook-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $("span.edit_wb_id", editModal).html("");
    });
    editModal.on('show.bs.modal', function (event) {
      if ($(event.relatedTarget)) {
        App.startPageLoading({ animate: true });
        var wordbookId = $(event.relatedTarget).data('wordbookId');
        //load数据
        var jqxhr = app.$getJSON(app.base + '/wordbook/view/' + wordbookId);
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          $("span.edit_wb_id", editModal).html("[id:" + data.id + "]");
          editForm.deserializeObject(data);
        });
      }
    });

    var code = $("input[name='code_']").val();
    validatorNotExists(editForm);

    $('button.ok', editModal).unbind("click").click(function () {
      if (editForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (data.resultCode == 'SUCCESS') {
            $('body .pagination-reload').click();
            app.alertOK('修改字典信息成功.');
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
   * 删除wordbook
   */
  var deleteWordBook = function () {
    $(".main-page").delegate('[data-delete-wb-id]', 'click', function () {
      var wbId = $(this).data('deleteWbId');
      bootbox.confirm({
        title: '提示',
        message: '确定删除字典',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.base + '/wordbook/remove/' + wbId, 'json');
          if (!jqxhr) {
            App.stopPageLoading();
            return;
          }

          jqxhr.done(function (data) {
            App.stopPageLoading();
            if (data.resultCode == 'SUCCESS') {
              $('body .pagination-reload').click();
              app.alertOK('删除成功.');
              return;
            }
            app.alertError(data.errors.join('\n'));
          });
        }
      });
    });
  };

  var init = function () {
    addWordBook();
    editWordbook();
    deleteWordBook();
  };
  init();
} (window.jQuery, window.app);
