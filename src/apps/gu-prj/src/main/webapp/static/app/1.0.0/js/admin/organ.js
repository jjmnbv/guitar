+ function ($, app) {
  "use strict ";
  var render = function (elem, options) {
    //获取数据源
    var store = elem.data('jstreepanelStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      $tree = elem.find("div.jstree-panel");
      var addModal = $("#add_organ");
      var addOrganForm = $("form", addModal);
      $tree.jstree({
        core: {
          data: [store],
          themes: {
            responsive: false
          },
          check_callback: true
        },
        types: {
          default: {
            icon: 'fa fa-folder icon-state-warning icon-lg'
          },
          file: {
            icon: 'fa fa-file icon-state-warning icon-lg'
          }
        },
        plugins: ['contextmenu', 'types'],
        contextmenu: {
          items: {
            create: {
              label: '新增',
              action: function (data) {
                editOrganFormReset();  //置空编辑框
                var instance = $.jstree.reference(data.reference);
                var node = instance.get_node(data.reference);
                $("input[name='parent.id']", addOrganForm).val(node.id);
                addOrganForm.data('node', node);
                addOrganForm.data('jstree', instance);
                addModal.modal('show');
              }
            },
            remove: {
              label: '删除',
              action: function (data) {
                editOrganFormReset();  //置空编辑框
                var instance = $.jstree.reference(data.reference);
                var node = instance.get_node(data.reference);
                if (node.children && node.children.length > 0) {
                  app.alertError('有子节点，不能删除');
                } else if (node.id != '-1') {
                  bootbox.confirm({
                    title: '提示', message: '确定删除节点', callback: function (e) {
                      if (e) {
                        var jqxhr = app.$post(app.base + '/organ/remove/' + node.id, {}, 'json');
                        if (!jqxhr) return false;
                        jqxhr.done(function (data) {
                          if (app.isOK(data)) {
                            instance.delete_node(node);
                            app.alertOK('删除节点成功');
                            return;
                          }
                          app.alertError(data.errors.join('\n'));
                        });
                      }
                    }
                  });
                } else {
                  app.alertError('根节点不做处理');
                }
              }
            }
          }
        }
      });
      var editForm = $("#edit-organ-form");
      $tree.on('changed.jstree', function (e, jstreeData) {
        if (jstreeData.action == 'select_node') {
          $('button.ok', editForm).removeAttr('disabled');
          var node = jstreeData.node;
          editOrganFormReset();
          var jqxhr = app.$post(app.base + '/organ/view/' + node.id, {}, 'json');
          if (!jqxhr) return false;
          jqxhr.done(function (data) {
            editForm.deserializeObject(data);
            editForm.data('jstreeData', jstreeData);
          });
        }
      });

      var vildatorNotExists = function (form) {
        $('input[name="name"]', form).rules("add", {
          remote: {
            url: app.base + '/organ/notexists',
            type: "POST",
            dateType: "text",
            data: {
              id: function () {
                return $('input[name="id"]', form).val();
              },
              name: function () {
                return $('input[name="name"]', form).val();
              }
            }
          },
          messages: {
            remote: "该名称已存在！"
          }
        });
      };

      var vildator = app.bindFormValidation(addOrganForm);
      vildatorNotExists(addOrganForm);
      addModal.on('hidden.bs.modal', function () {
        addOrganForm[0].reset();
        vildator.resetForm();
        $.uniform.update();
      });
      $("button.ok", addModal).unbind('click').click(function () {
        var jqxhr = app.$submit(addOrganForm, 'json');
        if (!jqxhr) {
          return false;
        }

        jqxhr.done(function (data) {
          if (app.isOK(data)) {
            var node = addOrganForm.data('node');
            var instance = addOrganForm.data('jstree');
            var newNode = {
              id: data.payload.id,
              text: addOrganForm.find('[name="name"]').val()
            };
            instance.create_node(node, newNode);
            instance.open_node(node);
            app.alertOK('新增节点成功');
            addModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      });

      var editVildator = app.bindFormValidation(editForm);
      vildatorNotExists(editForm);
      $("button.ok", editForm).unbind('click').click(function () {
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) {
          return false;
        }

        jqxhr.done(function (data) {
          if (app.isOK(data)) {
            var jstreeData = editForm.data('jstreeData');
            jstreeData.instance.rename_node(jstreeData.node, editForm.find('[name="name"]').val());
            app.alertOK("保存成功");
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      });
      $("button.cancel", editForm).unbind('click').click(function () {//隐藏域不重置
        $('textarea, select, input:not([type="hidden"],[type="radio"],[type="checkbox"])', editForm).each(function () {
          $(this).val("");
        });
      });
      var editOrganFormReset = function () {//隐藏域重置
        $('textarea, select, input:not([type="radio"],[type="checkbox"])', $("#edit-menu-form")).each(function () {
          $(this).val("");
        });
        editVildator.resetForm();
        $.uniform.update();
      };

    }
  };

  var organJsTreeInit = function () {
    $.getJSON(app.base + "/organ/jstree", function (json) {
      render($(".organ-tree"), { "organTrees": json });
    });
  };

  var init = function () {
    organJsTreeInit();
  }
  init();
} (window.jQuery, window.app);
