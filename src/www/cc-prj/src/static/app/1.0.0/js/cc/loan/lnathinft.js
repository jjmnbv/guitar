+ function ($,app) {"use strict ";

  var validatorNotExists = function (form) {
    // $("input[name='name']", form).rules("add", {
    //   remote: {
    //     url: app.LNATHINFT_NOTEXISTS,
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
    //     remote: "该授权信息表已存在！"
    //   }
    // });
  };

  /**
   * 添加授权信息表
   */
  var addLnAthInfT = function () {
    var addModal = $('#lnathinft-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });

    //校验授权信息表是否已经存在
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
            app.alertOK('已成功新增授权信息表.');
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
   * 修改授权信息表
   */
  var eidtLnAthInfT = function () {
    var editModal = $('#lnathinft-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var lnathinftId = $(event.relatedTarget).data('lnathinftId');
      if (!lnathinftId) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.LNATHINFT_VIEW + lnathinftId);
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

    //校验授权信息表是否已经存在
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
            app.alertOK('已成功修改授权信息表.');
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
   * 删除授权信息表
   */
  var deleteLnAthInfT = function () {
    $(".main-page").delegate('[data-delete-lnathinft-id]', 'click', function () {
      var lnathinftId = $(this).data('deleteLnathinftId');
      bootbox.confirm({title: '提示', message: '确定删除授权信息表',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.LNATHINFT_REMOVE + lnathinftId, {}, 'json');
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
    addLnAthInfT();
    eidtLnAthInfT();
    deleteLnAthInfT();
  };
  init();
} (window.jQuery,window.app);
