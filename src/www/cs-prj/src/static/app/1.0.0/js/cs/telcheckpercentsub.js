+ function ($,app) {"use strict ";

  var validatorNotExists = function (form) {
    // $("input[name='name']", form).rules("add", {
    //   remote: {
    //     url: app.TELCHECKPERCENTSUB_NOTEXISTS,
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
    //     remote: "该贷款电核比例配置明细已存在！"
    //   }
    // });
  };

  /**
   * 添加贷款电核比例配置明细
   */
  var addTelCheckPercentSub = function () {
    var addModal = $('#telcheckpercentsub-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });

    //校验贷款电核比例配置明细是否已经存在
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
            app.alertOK('已成功新增贷款电核比例配置明细.');
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
   * 修改贷款电核比例配置明细
   */
  var eidtTelCheckPercentSub = function () {
    var editModal = $('#telcheckpercentsub-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var telcheckpercentsubId = $(event.relatedTarget).data('telcheckpercentsubId');
      if (!telcheckpercentsubId) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.TELCHECKPERCENTSUB_VIEW + telcheckpercentsubId);
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

    //校验贷款电核比例配置明细是否已经存在
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
            app.alertOK('已成功修改贷款电核比例配置明细.');
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
   * 删除贷款电核比例配置明细
   */
  var deleteTelCheckPercentSub = function () {
    $(".main-page").delegate('[data-delete-telcheckpercentsub-code]', 'click', function () {
      var telcheckpercentsubCode = $(this).data('deleteTelcheckpercentsubCode');
      var telcheckpercentsubBasisCode = $(this).data('deleteTelcheckpercentsubBasiscode');
      var telcheckpercentsubBaseCode = $(this).data('deleteTelcheckpercentsubBasecode');
      bootbox.confirm({title: '提示', message: '确定删除贷款电核比例配置明细',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.TELCHECKPERCENTSUB_REMOVE, {"code":telcheckpercentsubCode,"basisCode":telcheckpercentsubBasisCode,"baseCode":telcheckpercentsubBaseCode}, 'json');
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
    addTelCheckPercentSub();
    eidtTelCheckPercentSub();
    deleteTelCheckPercentSub();
  };
  init();
} (window.jQuery,window.app);
