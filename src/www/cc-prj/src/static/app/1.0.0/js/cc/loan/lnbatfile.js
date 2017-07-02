+ function ($,app) {"use strict ";

  var validatorNotExists = function (form) {
    // $("input[name='name']", form).rules("add", {
    //   remote: {
    //     url: app.LNBATFILE_NOTEXISTS,
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
    //     remote: "该批量扣款文件信息已存在！"
    //   }
    // });
  };

  /**
   * 添加批量扣款文件信息
   */
  var addLnBatFile = function () {
    var addModal = $('#lnbatfile-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });

    //校验批量扣款文件信息是否已经存在
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
            app.alertOK('已成功新增批量扣款文件信息.');
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
   * 修改批量扣款文件信息
   */
  var eidtLnBatFile = function () {
    var editModal = $('#lnbatfile-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var lnbatfileId = $(event.relatedTarget).data('lnbatfileId');
      if (!lnbatfileId) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.LNBATFILE_VIEW + lnbatfileId);
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

    //校验批量扣款文件信息是否已经存在
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
            app.alertOK('已成功修改批量扣款文件信息.');
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
   * 删除批量扣款文件信息
   */
  var deleteLnBatFile = function () {
    $(".main-page").delegate('[data-delete-lnbatfile-id]', 'click', function () {
      var lnbatfileId = $(this).data('deleteLnbatfileId');
      bootbox.confirm({title: '提示', message: '确定删除批量扣款文件信息',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.LNBATFILE_REMOVE + lnbatfileId, {}, 'json');
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
    addLnBatFile();
    eidtLnBatFile();
    deleteLnBatFile();
  };
  init();
} (window.jQuery,window.app);
