+ function ($,app) {"use strict ";

  var validatorNotExists = function (form) {
    // $("input[name='name']", form).rules("add", {
    //   remote: {
    //     url: app.LNPAYCTLT_NOTEXISTS,
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
    //     remote: "该还款计划生成控制表已存在！"
    //   }
    // });
  };

  /**
   * 添加还款计划生成控制表
   */
  var addLnPayCtlT = function () {
    var addModal = $('#lnpayctlt-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });

    //校验还款计划生成控制表是否已经存在
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
            app.alertOK('已成功新增还款计划生成控制表.');
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
   * 修改还款计划生成控制表
   */
  var eidtLnPayCtlT = function () {
    var editModal = $('#lnpayctlt-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var lnpayctltId = $(event.relatedTarget).data('lnpayctltId');
      if (!lnpayctltId) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.LNPAYCTLT_VIEW + lnpayctltId);
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

    //校验还款计划生成控制表是否已经存在
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
            app.alertOK('已成功修改还款计划生成控制表.');
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
   * 删除还款计划生成控制表
   */
  var deleteLnPayCtlT = function () {
    $(".main-page").delegate('[data-delete-lnpayctlt-athno]', 'click', function () {
      var lnpayctltAthNo = $(this).data('deleteLnpayctltAthno');
      var lnpayctltSubNo = $(this).data('deleteLnpayctltSeqno');
      bootbox.confirm({title: '提示', message: '确定删除还款计划生成控制表',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.LNPAYCTLT_REMOVE, {"athNo":lnpayctltAthNo,"subNo":lnpayctltSubNo}, 'json');
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
    addLnPayCtlT();
    eidtLnPayCtlT();
    deleteLnPayCtlT();
  };
  init();
} (window.jQuery,window.app);
