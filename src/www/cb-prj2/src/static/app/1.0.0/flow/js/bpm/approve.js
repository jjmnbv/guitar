+ function ($, app) {
  "use strict ";

  var load = function() {
    var request = app.request;
    $.Bpm.init({taskId: request.taskId});
    $.Bpm.initFormExt('opinion-form', function(formId, data) {
			$('#' + formId).deserializeObject(data);
      $('select, input, textarea', $('#' + formId)).prop('disabled', true);
    }, function (data) {
      if (!data) {
        return;
      }
      $('#opinion-form').deserializeObject($.parseJSON(data));
      $('select, input, textarea', $('#opinion-form')).prop('disabled', true);
    });
  };
  
  var save = function () {
    $('.save').click(function () {
      var formIdArr = [];
      if (!saveHandle(formIdArr)) {
        app.alertError('保存失败,请检查输入项是否填写正确或完整, 重新保存以保存完整信息.');
      } else {
        app.alertOK('保存成功.');
      }
    });
  };
  
  var saveHandle = function (formIdArr) {
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
    //if (formIdArr.length > 0) {
    //	if (!$.Bpm.postFormIds(formIdArr)) {
    //		flag = false;
    //	}
    //}
    return flag;
  };
  
  var submit = function () {
    $('.submit').click(function() {
      var formIdArr = [];
      var opinionInfo = JSON.stringify($('#opinion-form').serializeObject());
      $.Bpm.submitHandleExt(formIdArr, '', opinionInfo, function(data){
        if (app.isOK(data)) {
          window.location.href = app.base + '/index';
        } else {
          app.alertError('提交失败.');
          return;
        }
      });
    });
  };

  var init = function () {
    load();
    save();
    submit();
  $('.date-picker').datepicker({
      rtl: App.isRTL(),
      orientation: 'left',
      autoclose: true,
      language: "zh-CN"
    });
  };
  init();
} (window.jQuery, window.app);
