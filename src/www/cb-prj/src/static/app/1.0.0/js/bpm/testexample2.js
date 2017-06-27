+ function ($, app) {
  "use strict ";

	var save = function () {
		$('.save').click(function () {
			if (!saveHandle(null, 'save')) {
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
					if (operType == 'submit') {
						formIdArr.push({ formId: $(item).data('viewIdname'), id: data.payload.id });
					}
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
			if (!saveHandle(formIdArr, 'submit')) {
				app.alertError("提交失败,请检查输入项!");
				return;
			}

			var taskId = $.Bpm.startProcessExt('jackxtesttwo', formIdArr);
		});
  };

  var init = function () {
		save();
		submit();
  };
  init();
} (window.jQuery, window.app);
