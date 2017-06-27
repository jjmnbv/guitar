+ function($, app) {
  "use strict ";
  
  /**
   * 添加打印模板
   */

  var addPrintTemplate = function() {
    var addModal = $('#printtemplate-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);

    addModal.on('hidden.bs.modal', function() {
      addForm[0].reset();
      validator.resetForm();
      $('.ok').attr("disabled", false);
      $.uniform.update();
      $('select').selectpicker('refresh');
    });
    addModal.on('show.bs.modal', function(event) {
      if(!$(event.relatedTarget).data('target')) return;
      $('input[name="setNo"]', addForm).val(app.request.setNo);
      /*自动获取编号*/
      app.$getJSON(app.PRINTTEMPLATE_CODE).done(function(data) {
        if(data instanceof Object) {
          $(".filename").addClass("hide");
        }
      });
    });
    addModal.on('shown.bs.modal', function () {
      $('input[name="name"]').val("");
      $('#teNa-error').html("");
    });
    //校验打印模板是否已经存在
    $("select[name='typeCode']", addForm).rules("add", {
      remote: {
        url: app.PRINTTEMPLATE_NOTEXISTS,
        type: "POST",
        dateType: "text",
        data: {
          setNo: function() {
            return $("input[name='setNo']", addForm).val();
          },
          typeCode: function() {
            return $("select[name='typeCode']", addForm).val();
          }
        }
      },
      messages: {
        remote: "该打印模板已存在！"
      }
    });

    $('.ok', addModal).click(function() {
      if(addForm.valid()) {
        $(this).attr('disabled', true);
        var formData = new FormData(addForm[0]);
        $.ajax({
          url: addForm[0].action,
          type: 'POST',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function(data) {
            if(app.isOK(data)) {
              $('.main-page .pagination-reload').click();
              app.alertOK('已成功新增打印模板.');
              addModal.modal('hide');
              /*页面刷新*/
              app.loadData();
            } else {
              app.alertError(data.errors.join('\n'));
            }
          }
        });
      }
    });
  }

  /**
   * 修改打印模板
   */
  var eidtPrintTemplate = function() {
    var editModal = $('#printtemplate-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function() {
      editForm[0].reset();
      validator.resetForm();
      $('.ok').attr("disabled", false);
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function(event) {
      editForm.find('[name="typeCode"]').attr('disabled', false);
      $('select').selectpicker('refresh');
      var printtemplateId = $(event.relatedTarget).data('printtemplateId');
      if(!printtemplateId) return;

      App.startPageLoading({
        animate: true
      });
      var jqxhr = app.$getJSON(app.PRINTTEMPLATE_VIEW + printtemplateId);
      if(!jqxhr) {
        return;
      }

      jqxhr.done(function(data) {
        App.stopPageLoading();
        if(data == null) {
          return;
        }
        editForm.deserializeObject(data);
        $(".filename").addClass("hide");

        editForm.find('[name="typeCode"]').attr('disabled', true);
        $('select').selectpicker('refresh');
      });
    });
    editModal.on('shown.bs.modal', function () {
      $('#uploadName').val("");
      $('#uploadName-error').html("");
    });
    $('.ok', editModal).click(function() {
      if(editForm.valid()) {
        $(this).attr('disabled', true);
        editForm.find('[name="typeCode"]').attr('disabled', false);
        $('select').selectpicker('refresh');
        var formData = new FormData(editForm[0]);
        $.ajax({
          url: editForm[0].action,
          type: 'POST',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: function(data) {
            if(app.isOK(data)) {
              $('.main-page .pagination-reload').click();
              app.alertOK('已成功修改打印模板.');
              editModal.modal('hide');
            } else {
              app.alertError(data.errors.join('\n'));
            }
          }
        });
      }
      //    if (editForm.valid()) {
      //      App.startPageLoading({ animate: true });
      //      var jqxhr = app.$submit(editForm, 'json');
      //      if (!jqxhr) return false;
      //      jqxhr.done(function (data) {
      //        App.stopPageLoading();
      //        if (app.isOK(data)) {
      //          $('.main-page .pagination-reload').click();
      //          app.alertOK('已成功修改打印模板.');
      //          editModal.modal('hide');
      //          return;
      //        }
      //        app.alertError(data.errors.join('\n'));
      //      });
      //      return false;
      //    }
    });
  };

  /**
   * 删除打印模板
   */
  var deletePrintTemplate = function() {
    $(".main-page").delegate('[data-delete-printtemplate-id]', 'click', function() {
      var printtemplateId = $(this).data('deletePrinttemplateId');
      bootbox.confirm({
        title: '提示',
        message: '确定删除打印模板吗?',
        buttons: {
          confirm: {
            className: 'btn blue'
          }
        },
        callback: function(result) {
          if(!result) {
            return;
          }

          App.startPageLoading({
            animate: true
          });
          var jqxhr = app.$post(app.PRINTTEMPLATE_REMOVE + printtemplateId, {}, 'json');
          if(!jqxhr) {
            App.stopPageLoading();
            return;
          }

          jqxhr.done(function(data) {
            App.stopPageLoading();
            if(app.isOK(data)) {
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

  /**
   * 预览打印模板
   */
  var previewPrintTemplate = function() {
    var previewModal = $('#printtemplate-preview-modal');
    //  var editForm = $("form", editModal);
    //  var validator = app.bindFormValidation(editForm);
    previewModal.on('hidden.bs.modal', function() {
      //    editForm[0].reset();
      //    validator.resetForm();
      $('.ok').attr("disabled", false);
      //    $.uniform.update();
    });
    previewModal.on('show.bs.modal', function(event) {
      var printtemplateId = $(event.relatedTarget).data('printtemplateId');
      if(!printtemplateId) return;

      App.startPageLoading({
        animate: true
      });
      var jqxhr = app.$get(app.PRINTTEMPLATE_PREVIEW + printtemplateId);
      if(!jqxhr) {
        return;
      }

      jqxhr.done(function(data) {
        App.stopPageLoading();
        if(data == null) {
          return;
        }
        previewModal.find("p").html(data);
        $(".filename").addClass("hide");
      });
    });
  };

  /**
   * 预览导出模板
   */

  var init = function() {
    addPrintTemplate();
    eidtPrintTemplate();
    deletePrintTemplate();
    previewPrintTemplate();
  };
  init();

}(window.jQuery, window.app);

function uploadSubmit() {
  $("#upload_form").submit();
};

//上传文件后给输入框赋值name
function setName(event) {
  var file = $(event).val();
  var pos = file.lastIndexOf("\\");
  var fileName = file.substring(pos + 1);
  $("#teNa").val(fileName).trigger("blur");
  $("#teNaUp,#uploadName").val(fileName).trigger("blur");
}

//导出功能lyf
$(document).on('click', '.exportBtn', function() {
  var printtemplateId = $(this).data('exporttemplateId');
  window.location.href = app.PRINTTEMPLATE_EXPORTPDF + printtemplateId;
});