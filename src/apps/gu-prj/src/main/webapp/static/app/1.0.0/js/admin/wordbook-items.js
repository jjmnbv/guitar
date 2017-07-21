+ function ($, app) {
  "use strict ";
  app = app || {};
  var wordBookId = $("#wordBookId").val();

  /**
   * 刷新字典项列表
   */
  var refeshWordBookList = function () {
    var jqxhr = app.$getJSON(app.base + "/wordbook/view/" + wordBookId);
    if (!jqxhr) return false;
    jqxhr.done(function (data) {
      loadItimesTbody(data);
    });
  };

  /**
   * 新增字典项
   */
  var addWordBook = function () {
    $("#add_wordbook_item").unbind('click').click(function () {
      var wordbook_items = $('[data-wordbook-items-id="#wordbook-items"]');
      var wordbook_tbody = $('table tbody', wordbook_items);

      var baseInput = '<input class="form-control" maxlength="30" value="">';
      var code = '<td data-name="code">' + baseInput + '</td>';
      var name = '<td data-name="name">' + baseInput + '</td>';
      var description = '<td data-name="description">' + baseInput + '</td>';
      var dispInput = '<input class="form-control" maxlength="3" value="9999">';
      var dispOrder = '<td data-name="dispOrder">' + dispInput + '</td>';

      var create = '<a href="javascript:;" class="save">保存</a>';
      var cancel = '<a href="javascript:;" class="cancel">取消</a>';
      var newRow = '<tr>' + code + name + description + dispOrder + '<td data-name="operations">' + create + ' ' + cancel + '</td></tr>';

      $("tr:last", wordbook_tbody).after(newRow);
      $("tr.empty", wordbook_tbody).remove();
      handleWordBookItem($("tr:last", wordbook_tbody));
    });
  };

  /**
   * 字典项保存
   */
  var handleWordBookItem = function (tr) {
    $('td a.save', tr).unbind('click').click(function () {
      var code = $.trim($("td[data-name='code'] input", tr).val());
      var name = $.trim($("td[data-name='name'] input", tr).val());
      $("td[data-name='code'] input", tr).val(code);
      $("td[data-name='name'] input", tr).val(name);
      var oldCode = tr.data('itemCode');
      var isChecked = true;
      if (oldCode && oldCode == code) {  //修改
        isChecked = false;
      }
      var dispOrder = $("td[data-name='dispOrder'] input", tr).val();
      var reg = /^[\d]+$/g;
      var b = reg.test(dispOrder);
      if (!b) {
        app.alertError('序号只能是数字');
        return;
      }
      if (code == '' || name == '') {
        app.alertError('编号和名称不能为空');
        return;
      }
      var jqxhrNotExists = app.$post(app.base + '/wordbook/notexists', { id: tr.data('itemId'), code: code, 'parent.id': wordBookId }, 'json');
      if (!jqxhrNotExists) return false;
      jqxhrNotExists.done(function (isNotExists) {
        console.log(isNotExists);
        if (!isNotExists || isNotExists == 'false') {
          app.alertError('该字典项的编号已经存在');
          return;
        }

        var jqxhr = app.$post(app.base + '/wordbook/save', {
          id: tr.data("itemId"),
          code: code,
          name: name,
          description: $("td[data-name='description'] input", tr).val(),
          dispOrder: $("td[data-name='dispOrder'] input", tr).val(),
          'parent.id': wordBookId
        }, 'json');
        if (!jqxhr) {
          return;
        }

        jqxhr.done(function (data) {
          if (data.resultCode == 'SUCCESS') {
            app.alertOK('保存字典项成功');
            refeshWordBookList();
            return;
          }
          app.alertError(data.errors.join('\n'));
          refeshWordBookList();
        });
      });


    });
    $('td a.cancel', tr).unbind('click').click(function () {
      refeshWordBookList();
    });
  };

  /**
   * 加载字典项列表内容
   * @param data
   */
  var loadItimesTbody = function (data) {
    var wordbook_items = $('[data-wordbook-items-id="#wordbook-items"]');
    var wordbook_tbody = $('table tbody', wordbook_items);
    var wordbook_template = $(wordbook_items.data('wordbookItemsId')).html();

    wordbook_tbody.html(Handlebars.compile(wordbook_template)(data));

    $('td a.edit-item', wordbook_tbody).unbind('click').click(function () {
      var tr = $(this).parent().parent();
      $("td", tr).each(function () {
        if ($(this).data("name") == 'dispOrder') {
          $(this).html('<input class="form-control" maxlength="3" value="' + $(this).text() + '">');
        } else if ($(this).data("name") != 'operations') {
          $(this).html('<input class="form-control" maxlength="30" value="' + $(this).text() + '">');
        } else {
          var save = '<a href="javascript:;" class="save">保存</a>';
          var cancel = '<a href="javascript:;" class="cancel">取消</a>';
          $(this).html(save + ' ' + cancel);
          handleWordBookItem(tr);
          $('td a.cancel', tr).unbind('click').click(function () {
            refeshWordBookList();
          });
        }
      });
    });

    $('td a.del-item', wordbook_tbody).unbind('click').click(function () {
      var tr = $(this).parent().parent();
      bootbox.confirm({
        title: '提示',
        message: '确定删除字典项',
        callback: function (result) {
          if (!result) {
            return;
          }

          var jqxhr = app.$post(app.base + '/wordbook/remove/' + tr.data('itemId'), 'json');
          if (!jqxhr) {
            return;
          }

          jqxhr.done(function (data) {
            if (data.resultCode == 'SUCCESS') {
              app.alertOK('删除成功');
              refeshWordBookList();
              return;
            }
            app.alertError(data.errors.join('\n'));
          });
        }
      });
    });
  };

  var reloadBtn = function () {
    var wordbook_items = $('[data-wordbook-items-id="#wordbook-items"]');
    $(".reload", wordbook_items).click(function () {
      refeshWordBookList();
    });
  };

  var init = function () {
    refeshWordBookList();
    addWordBook();
    reloadBtn();
  };
  init();
} (window.jQuery, window.app);
