+ function ($,app) {"use strict ";

  app.registerTextHelper('typeCode', app.teSetTyCd, 'code', 'name');

  /*打印集水印模板字体显示*/
  $('[placeholder]').focus(function(){
    $(this).addClass('input-col');
  });
  $('[placeholder]').blur(function(){
    if($(this).val()==''){
    $(this).removeClass('input-col');
    }
  });

  /**
   * 添加打印模板集
   */
  var addPrintTemplateSet = function () {
    var addModal = $('#printtemplateset-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);

    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $('.ok').attr("disabled",false);
      $.uniform.update();
      $('select').selectpicker('refresh');
    });
    addModal.on('show.bs.modal', function (event) {
      /*自动获取编号*/
      app.$getJSON(app.PRINTTEMPLATESET_CODE).done(function (data) {
        if (data instanceof Object){
          addForm.find('input[name="setNo"]').val(data.setNo);
        }
      });
    });

    $("input[name='setNo']", addForm).rules("add", {
      remote: {
        url: app.PRINTTEMPLATESET_NOTEXISTS,
        type: "POST",
        dateType: "text",
        data: {
          setNo: function () {
            return $("input[name='setNo']", addForm).val();
          }
        }
      },
      messages: {
        remote: "该打印模板集已存在！"
      }
    });

    $('.ok', addModal).click(function () {
      var okThis = $(this);
      if (addForm.valid()) {
        $(this).attr("disabled",true);
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
       jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功新增打印模板集.');
            addModal.modal('hide');
            /*页面刷新*/
            app.loadData();
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  }
  $(document).find("page-spinner-bar").append("<div>111111</div>")

  /**
   * 复制打印模板集
   */
  var copyPrintTemplateSet = function () {
    var copyModal = $('#printtemplateset-copy-modal');
    var copyForm = $("form", copyModal);
    var validator = app.bindFormValidation(copyForm);
    copyModal.on('hidden.bs.modal', function () {
      copyForm[0].reset();
      validator.resetForm();
      $.uniform.update();
      $('.ok').attr("disabled",false);
      $('input[name="oldSetNo"]', copyForm).val('');
      $('input[name="status"]', copyForm).val('');
      $('input[name="comment"]', copyForm).val('');
    });
    copyModal.on('show.bs.modal', function (event) {
      /*自动获取编号*/
      app.$getJSON(app.PRINTTEMPLATESET_CODE).done(function (data) {
        if (data instanceof Object){
          copyForm.find('input[name="setNo"]').val(data.setNo);
        }
      });
      var printtemplatesetId = $(event.relatedTarget).data('printtemplatesetId');
      if (!printtemplatesetId) return;
      $('input[name="oldSetNo"]', copyForm).val(printtemplatesetId);
      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.PRINTTEMPLATESET_VIEW + printtemplatesetId);
      if (!jqxhr) {
        return;
      }

      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (data == null) {
          return;
        }
        /*copyForm.deserializeObject(data);*/
        $('select[name="typeCode"]',copyForm).val(data.typeCode);
        $('input[name="status"]', copyForm).val(data.status);
        $('input[name="comment"]', copyForm).val(data.comment);
        //  wkd限制select长度溢出
        $('select').selectpicker({size: 7,container: '#bootstrap-select-box'});
        $('select').selectpicker('refresh');
      });
    });

    $("input[name='setNo']", copyForm).rules("add", {
      remote: {
        url: app.PRINTTEMPLATESET_NOTEXISTS,
        type: "POST",
        dateType: "text",
        data: {
          setNo: function () {
            return $("input[name='setNo']", copyForm).val();
          }
        }
      },
      messages: {
        remote: "该打印模板集已存在！"
      }
    });

    $('.ok', copyModal).click(function () {
      if (copyForm.valid()) {
        $(this).attr("disabled",true);
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(copyForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功复制打印模板集.');
            copyModal.modal('hide');
            /*页面刷新*/
            app.loadData();
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  }

  /**
   * 修改打印模板集
   */
  var eidtPrintTemplateSet = function () {
    var editModal = $('#printtemplateset-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $('.ok').attr("disabled",false);
      $.uniform.update();
      $('select').selectpicker('refresh');
    });
    editModal.on('show.bs.modal', function (event) {
      var printtemplatesetId = $(event.relatedTarget).data('printtemplatesetId');
      if (!printtemplatesetId) return;

      App.startPageLoading({ animate: true });
      var jqxhr = app.$getJSON(app.PRINTTEMPLATESET_VIEW + printtemplatesetId);
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
        $(this).attr("disabled",true);
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功修改打印模板集.');
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
   * 删除打印模板集
   */
  var deletePrintTemplateSet = function () {
    $(".main-page").delegate('[data-delete-printtemplateset-id]', 'click', function () {
      var printtemplatesetId = $(this).data('deletePrinttemplatesetId');
      bootbox.confirm({title: '提示', message: '确定删除打印模板集吗?',
        buttons:{
          confirm: {
            className: 'btn blue'
          }
        },
        callback: function (result) {
          if (!result) {
            return;
          }

          App.startPageLoading({ animate: true });
          var jqxhr = app.$post(app.PRINTTEMPLATESET_REMOVE + printtemplatesetId, 'json');
          if (!jqxhr) {
            App.stopPageLoading();
            return;
          }

          jqxhr.done(function (data) {
            App.stopPageLoading();
            if (app.isOK(data)) {
              app.loadData();
              app.alertOK('删除成功');
              return;
            }
            app.alertError(data.errors.join('\n'));
          });
        }
      });
    });
  };



  var init = function() {
    addPrintTemplateSet();
    copyPrintTemplateSet();
    eidtPrintTemplateSet();
    deletePrintTemplateSet();
  };
  init();
} (window.jQuery,window.app);
