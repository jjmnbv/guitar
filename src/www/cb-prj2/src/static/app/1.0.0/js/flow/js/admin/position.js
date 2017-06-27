+ function ($, app) {
  "use strict ";

  /**
   * 添加系统岗位
   */
  var addPosition = function () {
    var addModal = $('#position-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
    });

    //校验岗位名称是否已经存在
    $("input[name='name']", addForm).rules("add", {
      remote: {
        url: app.base + '/position/notexists',
        type: "POST",
        dateType: "text",
        data: {
          name: function () {
            return $("input[name='name']", addForm).val();
          }
        }
      },
      messages: {
        remote: "该岗位已存在！"
      }
    });
    //校验岗位描述是否已经存在
    $("input[name='description']", addForm).rules("add", {
      remote: {
        url: app.base + '/position/notexists',
        type: "POST",
        dateType: "text",
        data: {
          description: function () {
            return $("input[name='description']", addForm).val();
          }
        }
      },
      messages: {
        remote: "该岗位已存在！"
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
            app.alertOK('新增岗位成功.');
            addModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  };

  /**
   * 修改岗位信息
   */
  var editPosition = function () {
    var editModal = $('#position-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $("span.edit_position_id", editModal).html("");
    });
    editModal.on('show.bs.modal', function (event) {
      if ($(event.relatedTarget)) {
        App.startPageLoading({ animate: true });
        var positionId = $(event.relatedTarget).data('positionId');
        //load数据
        var jqxhr = app.$get(app.base + '/position/view/' + positionId);
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          $("span.edit_position_id", editModal).html("[id:" + data.id + "]");

          $("input[name='id']", editForm).val(data.id);
          $("input[name='name']", editForm).val(data.name);
          $("input[name='name_']", editForm).val(data.name);
          $("input[name='description']", editForm).val(data.description);
          $("input[name='description_']", editForm).val(data.description);
        });
      }
    });

    $("input[name='name']", editForm).rules("add", {
      remote: {
        url: app.base + '/position/notexists',
        type: "POST",
        dateType: "text",
        data: {
          id: function () {
            return $("input[name='id']", editForm).val();
          },
          name: function () {
            return $("input[name='name']", editForm).val();
          }
        }
      },
      messages: {
        remote: "该岗位已存在！"
      }
    });
    $("input[name='description']", editForm).rules("add", {
      remote: {
        url: app.base + '/position/notexists',
        type: "POST",
        dateType: "text",
        data: {
          id: function () {
            return $("input[name='id']", editForm).val();
          },
          description: function () {
            return $("input[name='description']", editForm).val();
          }
        }
      },
      messages: {
        remote: "该岗位已存在！"
      }
    });

    $('.ok', editModal).unbind("click").click(function () {
      if (editForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('修改岗位信息成功.');
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
   * 删除岗位(岗位下有用户的时候会报错)
   */
  var deletePosition = function () {
    $(".main-page").delegate('[data-delete-position-id]', 'click', function () {
      var positionId = $(this).data('deletePositionId');
      var positionName = $(this).data('deletePositionName');
      bootbox.confirm({
        title: '提示', message: '确定删除岗位', callback: function (e) {
          if (e) {
            App.startPageLoading({ animate: true });
            var jqxhr = app.$post(app.base + '/position/remove/' + positionId, 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
              App.stopPageLoading();
              if (app.isOK(data)) {
                $('.main-page .pagination-reload').click();
                app.alertOK('删除岗位成功.');
                return;
              }
              app.alertError(data.errors.join('\n'));
            });
          }
        }
      });
    });
  };

  var init = function () {
    addPosition();
    editPosition();
    deletePosition();
  };
  init();
} (window.jQuery, window.app); 