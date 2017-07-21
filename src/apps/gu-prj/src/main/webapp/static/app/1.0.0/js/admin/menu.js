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
      var addModal = $("#add_menu");
      var addMenuForm = $("form", addModal);
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
                editMenuFormReset();  //置空编辑框
                var instance = $.jstree.reference(data.reference);
                var node = instance.get_node(data.reference);
                var id = node.id;
                var level = 2;
                if (id == '-1') {
                  level = 1;
                }
                $("input[name='parent.id']", addMenuForm).val(node.id);
                $("input[name='level']", addMenuForm).val(level);
                addMenuForm.data('node', node);
                addMenuForm.data('jstree', instance);
                addModal.modal('show');
              }
            },
            remove: {
              label: '删除',
              action: function (data) {
                editMenuFormReset();  //置空编辑框
                var instance = $.jstree.reference(data.reference);
                var node = instance.get_node(data.reference);
                if (node.children && node.children.length > 0) {
                  app.alertError('有子节点，不能删除');
                } else if (node.id != '-1') {
                  bootbox.confirm({
                    title: '提示', message: '确定删除节点', callback: function (e) {
                      if (e) {
                        var jqxhr = app.$post(app.base + '/menu/remove/' + node.id, {}, 'json');
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
      var editForm = $("#edit-menu-form");
      $tree.on('changed.jstree', function (e, jstreeData) {
        if (jstreeData.action == 'select_node') {
          var node = jstreeData.node;
          editMenuFormReset();
          if (node.id == '-1') {
            $("button.ok", editForm).attr("disabled", true);
          } else {
            var jqxhr = app.$get(app.base + "/menu/view/" + node.id, 'json');
            if (!jqxhr) {
              return false;
            }
            jqxhr.done(function (data) {
              editForm.deserializeObject(data);
              editForm.data('jstreeData', jstreeData);
              $("button.ok", editForm).removeAttr("disabled");

              if (node.children && node.children.length > 0) {
                $("input[name='url']", editForm).attr("readOnly", true);
              } else {
                $("input[name='url']", editForm).attr("readOnly", false);
              }
              $("#add_action_btn").show();
              $("#add_action_btn a").unbind('click').click(function () {
                var actionListTbody = $("#action_list tbody");
                var baseInput = '<input class="form-control input-sm" maxlength="80" value="">';
                var text = '<td data-name="text">' + baseInput + '</td>';
                var url = '<td data-name="url">' + baseInput + '</td>';
                var status = '<td data-name="status">' +
                  '  <label class="radio-inline"><input type="radio" name="status" value="NOTAUTHORIZED">否</label>' +
                  '  <label class="radio-inline"><input type="radio" name="status" checked value="AUTHORIZED">是</label>' +
                  '</td>';
                var dispOrder = '<td data-name="dispOrder"><input class="form-control input-sm" maxlength="80" value="9999"></td>';
                var create = '<a href="javascript:;" class="save">创建</a>';
                var cancel = '<a href="javascript:;" class="cancel">取消</a>';
                var tr = '<tr data-menu-id="' + data.id + '">' + text + url + status + dispOrder + '<td class="text-center">' + create + ' ' + cancel + '</td></tr>';
                var $tr = $(tr).insertBefore($("tr:first", actionListTbody));
                $("tr.empty", actionListTbody).remove();
                handleMenuAction($tr, "/menu/action-create");
              });

              //菜单页面资源加载
              loadActionTbody(data);
            });
          }
        }
      });
      var vildator = app.bindFormValidation(addMenuForm);
      addModal.on('hidden.bs.modal', function () {
        addMenuForm[0].reset();
        vildator.resetForm();
      });
      $("button.ok", addModal).unbind('click').click(function () {
        var jqxhr = app.$submit(addMenuForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (resp) {
          if (app.isOK(resp)) {
            var data = resp.payload;
            var node = addMenuForm.data('node');
            var instance = addMenuForm.data('jstree');
            instance.create_node(node, data);
            instance.open_node(node);
            app.alertOK('新增节点成功');
            addModal.modal('hide');
            return;
          }
          app.alertError(resp.errors.join('\n'));
        });
        return false;
      });
      //menu编辑表单
      var addVildator = app.bindFormValidation(editForm);
      $("button.ok", editForm).unbind('click').click(function () {
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (resp) {
          if (app.isOK(resp)) {
            var result = resp.payload;
            var jstreeData = editForm.data('jstreeData');
            jstreeData.instance.rename_node(jstreeData.node, result.text);
            app.alertOK("保存成功");
            return;
          }
          app.alertError(resp.errors.join('\n'));
        });
        return false;
      });
      $("button.cancel", editForm).unbind('click').click(function () {//隐藏域不重置
        $('textarea, select, input:not([type="hidden"],[type="radio"],[type="checkbox"])', editForm).each(function () {
          $(this).val("");
        });
      });
      var editMenuFormReset = function () {//隐藏域重置
        $('textarea, select, input:not([type="radio"],[type="checkbox"])', $("#edit-menu-form")).each(function () {
          $(this).val("");
        });
        $("#add_action_btn").hide(); //隐藏新增页面资源按钮
        addVildator.resetForm();
        loadActionTbody();
      };
      /**
       * 刷新菜单页面资源
       * @param id 菜单ID
       */
      var refeshActionList = function (id) {
        var jqxhr = app.$get(app.base + "/menu/view/" + id, 'json');
        if (!jqxhr) {
          return false;
        }
        jqxhr.done(function (data) {
          loadActionTbody(data);
        });
      };

      /**
       * 加载页面资源内容
       * @param data
       */
      var loadActionTbody = function (data) {
        var action_tbody = $("#action_list tbody");
        action_tbody.html(Handlebars.compile($("#action_list_template").html())(data));
        $('td a.edit-action', action_tbody).unbind('click').click(function () {
          var tr = $(this).parent().parent();
          var menuId = tr.data("menuId");
          $("td", tr).each(function () {
            if ($(this).data("name") != 'operations' && $(this).data("name") != 'status') {
              $(this).html('<input class="form-control input-sm" maxlength="80" value="' + $(this).text() + '">');
            } else if ($(this).data("name") == 'status') {
              var status = $(this).data("value");
              $(this).html('<label class="radio-inline"><input type="radio" name="status" value="NOTAUTHORIZED">否</label>' +
                '<label class="radio-inline"><input type="radio" name="status" value="AUTHORIZED">是</label>');
              $($('input', $(this)).eq(status)).prop('checked', true);
            } else {
              var save = '<a href="javascript:;" class="save">保存</a>';
              var cancel = '<a href="javascript:;" class="cancel">取消</a>';
              $(this).html(save + ' ' + cancel);
              handleMenuAction(tr, "/menu/action-update");
              $('td a.cancel', tr).unbind('click').click(function () {
                refeshActionList(menuId);
              });
            }
          });
        });
        $('td a.del-action', action_tbody).unbind('click').click(function () {
          var tr = $(this).parent().parent();
          var menuId = tr.data("menuId");
          bootbox.confirm({
            title: '提示', message: '确定删除页面资源', callback: function (e) {
              if (e) {
                var jqxhr = app.$post(app.base + "/menu/action-remove/" + tr.data("actionId"), {}, 'json');
                if (!jqxhr) return false;
                jqxhr.done(function (data) {
                  if (app.isOK(data)) {
                    app.alertOK('删除页面资源成功');
                    refeshActionList(menuId);
                    return;
                  }
                  app.alertError(resp.errors.join('\n'));
                });
              }
            }
          });
        });
      };

      /**
       * 菜单页面资源信息按钮事件
       */
      var handleMenuAction = function (tr, uri) {
        var menuId = tr.data("menuId");
        $('td a.save', tr).unbind('click').click(function () {
          var text = $.trim($("td[data-name='text'] input", tr).val());
          var url = $.trim($("td[data-name='url'] input", tr).val());
          var dispOrder = $.trim($("td[data-name='dispOrder'] input", tr).val());
          $("td[data-name='text'] input", tr).val(text);
          $("td[data-name='url'] input", tr).val(url);
          $("td[data-name='dispOrder'] input", tr).val(dispOrder);
          if (text == '' || url == '') {
            app.alertError('名称和链接不能为空');
            return;
          };
          var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
          if (pattern.test(text)) {
            app.alertError("不能输入特殊字符,请重新输入!");
            return false;
          }
          if (!(/^\+?[0-9]*$/.test(dispOrder))) {
            app.alertError("请输入正整数!");
            $("td[data-name='dispOrder'] input", tr).val('');
            return false;
          }
          var data = {
            id: tr.data("actionId"),
            text: text,
            url: url,
            status: $("td[data-name='status'] input:checked", tr).val(),
            dispOrder: dispOrder,
            'menu.id': menuId
          };
          var jqxhr = app.$post(app.base + uri, data, 'json');
          if (!jqxhr) {
            return false;
          }
          jqxhr.done(function (data) {
            if (data.resultCode == 'SUCCESS') {
              app.alertOK('保存页面资源成功');
              refeshActionList(menuId);
              return;
            }
            app.alertError(data.errors.join('\n'));
          });
        });
        $('td a.cancel', tr).unbind('click').click(function () {
          refeshActionList(menuId);
        });
      };
    }
  };

  var menuJsTreeInit = function () {
    $.getJSON(app.base + "/menu/jstree", function (json) {
      render($(".menu-tree"), { "menuTrees": json });
    });
  };

  var init = function () {
    menuJsTreeInit();
  }
  init();
} (window.jQuery, window.app);


