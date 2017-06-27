+ function ($, app) {
  "use strict ";

  var load = function() {
    var request = app.request;
    if (!request.taskId) {
      return;
    }
    $.Bpm.init({taskId: request.taskId});
		//$.Bpm.initOpinionForm($('#opinion-container'), {opinionId: 'opinion-form', viewIdName: 'opinion_id', opinionFieldName: 'opinionId', opinionNoteFieldName: 'opinionNote', createUrl: '/approve/create', updateUrl: '/approve/update', viewUrl: '/approve/view/{opinion_id}'});
		$.Bpm.initFormExt(function(formId, data) {
			$('#' + formId).deserializeObject(data);
      $('select, input, textarea', $('#main-form')).prop('disabled', true);
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
		return flag;
  };
  
  var submit = function () {
	  $('.submit').click(function() {
			var flag = true;
			var formIdArr = [];
			if (!saveHandle(formIdArr)) {
				app.alertError("提交失败,请检查输入项!");
				return;
			}
      $.Bpm.submitHandleExt(formIdArr, '', '', '', function (data) {
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
