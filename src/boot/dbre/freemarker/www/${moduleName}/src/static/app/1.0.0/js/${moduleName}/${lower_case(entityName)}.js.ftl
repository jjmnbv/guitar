+ function ($,app) {"use strict ";

  var validatorNotExists = function (form) {
    // $("input[name='name']", form).rules("add", {
    //   remote: {
    //     url: app.${entityName?upper_case}_NOTEXISTS,
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
    //     remote: "该${entityDescription}已存在！"
    //   }
    // });
  };

  /**
   * 添加${entityDescription}
   */
  var add${entityName} = function () {
    var addModal = $('#${entityName?lower_case}-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });

    //校验${entityDescription}是否已经存在
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
            app.alertOK('已成功新增${entityDescription}.');
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
   * 修改${entityDescription}
   */
  var eidt${entityName} = function () {
    var editModal = $('#${entityName?lower_case}-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var ${entityName?lower_case}Id = $(event.relatedTarget).data('${entityName?lower_case}Id');
      if (!${entityName?lower_case}Id) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.${entityName?upper_case}_VIEW + ${entityName?lower_case}Id);
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

    //校验${entityDescription}是否已经存在
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
            app.alertOK('已成功修改${entityDescription}.');
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
   * 删除${entityDescription}
   */
  var delete${entityName} = function () {
    <#if (primaryKeys?size>1)>
    $(".main-page").delegate('[data-delete-${entityName?lower_case}-${primaryKeys[0].name?lower_case}]', 'click', function () {
    <#else>
    $(".main-page").delegate('[data-delete-${entityName?lower_case}-id]', 'click', function () {
    </#if>
      <#if (primaryKeys?size>1)>
        <#list primaryKeys as field>
      var ${entityName?lower_case}${field.name?cap_first} = $(this).data('delete${entityName?lower_case?cap_first}${field.name?lower_case?cap_first}');
        </#list>
      <#else>
      var ${entityName?lower_case}Id = $(this).data('delete${entityName?lower_case?cap_first}Id');
      </#if>
      bootbox.confirm({title: '提示', message: '确定删除${entityDescription}',
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          <#if (primaryKeys?size>1)>
          var jqxhr = app.$post(app.${entityName?upper_case}_REMOVE, {<#list primaryKeys as field>"${field.name}":${entityName?lower_case}${field.name?cap_first}<#if field_has_next>,</#if></#list>}, 'json');
          <#else>
          var jqxhr = app.$post(app.${entityName?upper_case}_REMOVE + ${entityName?lower_case}Id, {}, 'json');
          </#if>
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
    add${entityName}();
    eidt${entityName}();
    delete${entityName}();
  };
  init();
} (window.jQuery,window.app);
