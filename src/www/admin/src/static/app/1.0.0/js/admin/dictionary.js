+ function ($, app) {
  "use strict ";

  /**
   * 添加字典
   */
  var addDictItems = function () {
    var addModal = $('#dict-items-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });

    //校验字典代码是否已经存在
    $("input[name='pkId.code']", addForm).rules("add", {
      remote: {
        url: app.DICTIONARY_NOTEXISTS,
        type: "post",
        dateType: "text",
        data: {
          id: function () {
            return $("input[name='pkId.id']", addForm).val();
          },
          code: function () {
            return $("input[name='pkId.code']", addForm).val();
          }
        }
      },
      messages: {
        remote: "该字典代码已存在！"
      }
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
            app.alertOK('已成功新增字典.');
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
   * 修改字典
   */
  var eidtDictItems = function () {
    var editModal = $('#dict-items-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var pkId = $(event.relatedTarget).data('dictPkId');
      var pkCode = $(event.relatedTarget).data('dictPkCode');
      if (!pkId) return;

      App.startPageLoading({ animate: true });

      var jqxhr = app.$getJSON(app.DICTIONARY_VIEW + pkId + '_' + pkCode);
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
            app.alertOK('已成功修改字典.');
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
   * 删除字典
   */
  var deleteDictItems = function () {
    $(".main-page").delegate('[data-delete-dict-pk-id]', 'click', function () {
      var pkId = $(this).data('deleteDictPkId');
      var pkCode = $(this).data('deleteDictPkCode');
      bootbox.confirm({
        title: '提示', message: '确定删除字典',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.DICTIONARY_REMOVE + pkId + '_' + pkCode + '.json', 'json');
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

  var init = function () {
    $.getJSON(app.DICTIONARYCATEGORY_VIEW + app.request.pkId, function (data) {
      if (data == null) { return; }
      $('#dictionary-form').deserializeObject(data);
      $('#dictionary-form input').attr('disabled', true);
      $('#dictionary-form').removeClass('hide');
      return;
    });

    addDictItems();
    eidtDictItems();
    deleteDictItems();
  };
  init();
} (window.jQuery, window.app);
