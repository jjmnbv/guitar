+ function ($, app) {
  "use strict ";

  var load = function() {
    var request = app.request;
    $.Bpm.init({taskId: request.taskId});
    //$.Bpm.initOpinionForm($('#opinion-container'), {opinionId: 'opinion-form', viewIdName: 'opinion_id', opinionFieldName: 'opinionId', opinionNoteFieldName: 'opinionNote', createUrl: '/approve/create', updateUrl: '/approve/update', viewUrl: '/approve/view/{opinion_id}'});
    
    $.Bpm.initFormExt();
  };
  var opinionFormId = '';
  
  var save = function () {
    $('.save').click(function () {
      var formIdArr = [];
      if (!saveHandle(formIdArr, 'save')) {
        app.alertError('保存失败,请检查输入项是否填写正确或完整, 重新保存以保存完整信息.');
      } else {
        app.alertOK('保存成功.');
      }
    });
  };
  
  var saveHandle = function (formIdArr, operType) {
    var flag = true;
    $.each($('form', $('#main-form')), function (index, item) {
      
      if (!$(item).valid()) {
        flag = false;
        return false;
      }
      var id = $('input[name=id]', $(item)).val();
      $(item).prop('action', $(item).data('createUrl'));
      if (id && id != '-1') {
        $(item).prop('action', $(item).data('updateUrl'));
      }
      
      $.Bpm.ajaxPost($(item).prop('action'), 'post', $(item).serialize(), false, function (data, textStatus, jqXHR) {
        if (app.isOK(data)) {
          formIdArr.push({ formId: $(item).data('viewIdname'), id: data.payload.id });
          $(item).deserializeObject(data.payload);
        } else {
          flag = false;
        }
      }, 'application/x-www-form-urlencoded; charset=UTF-8');
    });
    if ('save' == operType && formIdArr.length > 0) {
      if (!$.Bpm.postFormIds(formIdArr, opinionFormId)) {
        flag = false;
      }
    }
    return flag;
  };
  
  var submit = function () {
    $('.submit').click(function() {
      var flag = true;
      var formIdArr = [];
      if (!saveHandle(formIdArr, 'submit')) {
        app.alertError("提交失败,请检查输入项!");
        return;
      }

      $.Bpm.submitHandleExt(formIdArr, opinionFormId);
    });
  };

  var rollback = function () {
    $('.rollback').click(function() {
      $.Bpm.rollback();
    });
  };

  var rollbackto = function () {
    $('.rollbackto').click(function() {
      $.Bpm.rollbackTo();
    });
  };

  var beforeissue = function () {
    $('.beforeissue').click(function() {
      $.Bpm.beforeissue();
    });
  };

  var afterissue = function () {
    $('.afterissue').click(function() {
      $.Bpm.afterissue();
    });
  };

  var transferTask = function () {
    $('.transfertask').click(function() {
      $.Bpm.transfertask();
    });
  };

  var cancleTask = function () {
    $('.cancel').click(function() {
      $.Bpm.cancelTask();
    });
  };

  var init = function () {
    load();
    save();
    submit();
    rollback();
    rollbackto();
    beforeissue();
    afterissue();
    transferTask();
    cancleTask();

    $('input[name=userName]').data('target', '#taskscript-config-modal').data('toggle', 'modal');

  };
  init();
} (window.jQuery, window.app);
