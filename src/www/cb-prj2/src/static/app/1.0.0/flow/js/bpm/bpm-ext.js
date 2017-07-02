+ function($, app){
	
	/**填充流程审批意见**/
	function fillMessage(name) {
		if($('select[name="'+name+'"]').length > 0){
			$('select[name="'+name+'"]').html('');
			var html = '<option value="">请选择...</option>';
			$(message.substring(1,message.length-1).split(',')).each(function(index,item){
				html += '<option value="'+item+'">'+item+'</option>';
			});
			$('select[name="'+name+'"]').html(html);
		}
	};
	
	var saveHandle = function() {
		$('.save').click(function() {
			
			var activeTab = $('.tab-pane.active', $('#viewcodeContainer'));
			var viewForm = $('form', activeTab);
			if(!viewForm.valid()) {
				return;
			}
			
			var viewType = activeTab.data('viewType');
			var formIdArr = [], flag;
			
			App.startPageLoading({ animate: true });
			if(viewType == 'nonfix') {
				flag = saveNonfixFormHandle(activeTab, viewForm, formIdArr, 'save');
			} else {
				flag = saveFixFormHandle(activeTab, viewForm, formIdArr, 'save');
			}
			if(flag) {
				App.stopPageLoading();
				app.alertOK("保存成功.");
			}
		});
	};
	
	var saveNonfixFormHandle = function(parentTab, viewForm, formIdArr, operaType) {
		var flag = false;
		var viewName = parentTab.data('viewName');
		var obj = viewForm.serializeObject();
    var requestData = [];
    $.each(obj, function(i, v){
      requestData.push({'formId':viewForm.data('jsformId'),'objectId':viewForm.data('objectId'),'name':i,'value':v});
    });
    
		App.startPageLoading({ animate: true });
    $.ajax({
      type : 'post',
      async : false,
      contentType: 'application/json',
      dataType : 'json',
      cache: false,
      url: app.base+'/formdata/save',
      data: JSON.stringify(requestData),
      success: function(data, textStatus, jqXHR) {
        objectId = data.payload;
        if(objectId) {
        	viewForm.data('objectId', objectId);
        	console.log(viewForm.data('objectId'));
        	formIdArr.push({formId: viewForm.attr('id'), id: objectId});
        	if(operaType == 'save') {
        		if(postFormIds(formIdArr)) {
        			flag = true;
        		}
        	} else {
        		flag = true;
        		app.alertOK(viewName + "保存成功.");
        	}
        }
      },
      error: function(data) {
        app.alertError(viewName + "保存失败.");
      }
    });
    return flag;
	};
	
	var saveFixFormHandle = function(parentTab, viewForm, formIdArr, operaType) {
		var flag = true;
		var viewName = parentTab.data('viewName');
		var id = $('input[name=id]', viewForm).val();
		viewForm.prop('action', app.base + parentTab.data('createUrl'));
		if(id && id != '-1') {
			viewForm.prop('action', app.base + parentTab.data('updateUrl'));
		}
		
		$.ajax({
			type : 'post',
			async : false,
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			dataType : 'json',
			cache: false,
			url: viewForm.prop('action'),
			data: viewForm.serialize(),
			success: function(data, textStatus, jqXHR) {
				if(app.isOK(data)) {
					formIdArr.push({formId: viewForm.attr('id'), id: data.payload.id});
					viewForm.deserializeObject(data.payload);
					if(operaType == 'save') {
	        	if(postFormIds(formIdArr)) {
	    		    flag = true;
	    			}
	        } else {
	        	app.alertOK(viewName + "保存成功.");
	        	flag = true;
	        }
					return;
				}
				flag = false;
				app.alertError(viewName + "保存失败.\n"+data.errors.join('\n'));
				return false;
			},
			error: function() {
				flag = false;
				app.alertError(viewName + "保存失败.");
			}
		});
		return flag;
	};
	
	var postFormIds = function(formIdArr) {
		var postFlag = false;
		$.ajax({
			type : 'post',
			async : false,
			contentType: 'application/json',
			dataType : 'json',
			cache: false,
			url: app.base+'/workflow/formids/update',
			data: JSON.stringify({taskId: taskId, formIds: formIdArr}),
			success: function(data, textStatus, jqXHR) {
				if(app.isOK(data)) {
					postFlag = true;
					return;
				}
			}
		});
		
		return postFlag;
	};
	
	var packageFormIds = function() {
		var formIdArr = [];
		$.each($('#viewcodeContainer > div'), function(index, item) {
			var form = $('form', item)[0];
			var id = $('input[name=id]', form).val();
			
			if(id && id >= 0) {
				formIdArr.push({formId: form.prop('id'), id: id});
			}
		});
		return formIdArr;
	};
	
	var ajaxPost = function(url, type, data, async, fn) {
		$.ajax({
			type : type,
			async : async,
			contentType: 'application/json',
			dataType : 'json',
			cache: false,
			url: url,
			data: data,
			success: function(data, textStatus, jqXHR) {
				if (fn) {
					fn(data, textStatus, jqXHR);
				}
			},
			error: function() {
				app.alertError('未知异常.');
			}
		});
	};
	
	var submitHandle = function() {
		var nextAssignee,formIdArr = [];
		
		$('.submit').click(function() {
			var flag = true;
			$('form', $('#viewcodeContainer')).each(function() {
	      if(!$(this).valid()) {
	        flag = false;
	      }
	    });
	    if(!flag) {
	    	app.alertError("请填写必填信息!");
	    	return;
	    }
			
			ajaxPost(app.base+'/workflow/manualcommityn',
				'post',
				JSON.stringify({stepKey: stepKey, taskId: taskId}),
				false,
				function(data, textStatus, jqXHR) {
					if (data) {
						ajaxPost(app.base+'/workflow/nextstep/candidates',
							'post',
							JSON.stringify({stepKey: stepKey, taskId: taskId, message: message}),
							false,
							function(data, textStatus, jqXHR) {
								var candidatesSelectModal = $('#candidates-select-modal');
								candidatesSelectModal.find('.portlet-body').html(Handlebars.compile($('#candidates-page-template').html())({'content':data.payload.stepCandidates}));
								candidatesSelectModal.modal('show');
							}
						);
					} else {
						commit();
					}
				}
			);
		});
		
		var commit = function() {
			App.startPageLoading({ animate: true });
			if(!saveForms($('#viewcodeContainer > div'), formIdArr)) {
				return;
			}
		var message = $('select[name="opinionId"]').val();
		var comment = $('textarea[name="opinionNote"]').val();
        $.ajax({
  			type : 'post',
  			async : true,
  			contentType: 'application/json',
  			dataType : 'json',
  			cache: false,
  			url: app.base+'/workflow/complete',
  			data: JSON.stringify({flowKey: flowKey, stepKey: stepKey, taskId: taskId, formIds: formIdArr,message:message,comment:comment,nextAssignee:nextAssignee}),
  			success: function(data, textStatus, jqXHR) {
  				if(app.isOK(data)) {
  					App.stopPageLoading();
  					app.alertOK('提交成功.');
          	window.location.href = app.base + '/index';
  				}else{
  				App.stopPageLoading();
					app.alertError('提交失败.');
  				}
  			},
  			error: function() {
  				app.alertError('提交失败.');
  			}
  		});
		};
		
		var candidatesSelHandle = function() {
			var candidatesSelectModal = $('#candidates-select-modal');
			
			candidatesSelectModal.on('show.bs.modal', function(event){
        $("button.ok", candidatesSelectModal).attr("disabled", true);
	    });
	    candidatesSelectModal.delegate('input[type="radio"][name="loginName"]', 'click', function () {
	      nextAssignee = $(this).val();
	      $("button.ok", candidatesSelectModal).removeAttr("disabled");
	    });
	    candidatesSelectModal.delegate('button.ok', 'click', function() {
	      commit();
	    	candidatesSelectModal.modal('hide');
	    });
		};
		candidatesSelHandle();
	};
	
	var saveForms = function(parents, formIdArr) {
		var flag = true;
		$.each(parents, function(index, item) {
			var form = $('form', $(item));
			var id = $('input[name=id]', form).val();
			
			var viewType = $(item).data('viewType');
			
			if(viewType == 'nonfix') {
				flag = saveNonfixFormHandle($(item), form, formIdArr, 'submit');
			} else {
				flag = saveFixFormHandle($(item), form, formIdArr, 'submit');
			}
			
			if(!flag) {
				return false;
			}
		});
		return flag;
	};
	
	var rollback = function(){
		
		var rollbackForm = $('#rollback_form');
		$('.rollback').click(function() {
			rollbackForm.modal('show');
			$('#rollback_form textarea').val('');
	    });
		$('#rollback_form .ok').on('click',function(){
			
			var comment = $.trim(rollbackForm.find('textarea').val());
			if(!comment) {
		    	app.alertError("请填写必填信息!");
		    	return;
		    }
			var taskId = rollbackForm.find('input[name="taskId"]').val();
			$.ajax({
	  			type : 'post',
	  			async : true,
	  			dataType : 'json',
	  			cache: false,
	  			url: app.base+'/workflow/rollback/'+taskId,
	  			data: {comment:comment},
	  			success: function(data, textStatus, jqXHR) {
	  				if(app.isOK(data)) {
	  					App.stopPageLoading();
	  					app.alertOK('提交成功.');
	  					window.location.href = app.base + '/index';
	  				}else{
	  					App.stopPageLoading();
						app.alertError('提交失败.');
	  				}
	  			},
	  			error: function() {
	  				app.alertError('提交失败.');
	  			}
	  		});
		});
	}
	
	var cancelTask = function(){
		
		$(document).on('click','#cancelTask',function(){
			$.ajax({
	  			type : 'post',
	  			async : true,
	  			dataType : 'json',
	  			cache: false,
	  			url: app.base+'/workflow/cancel/'+taskId,
	  			success: function(data, textStatus, jqXHR) {
	  				if(app.isOK(data)) {
	  					App.stopPageLoading();
	  					app.alertOK('取消成功.');
	  					window.location.href = app.base + '/index';
	  				}else{
	  					App.stopPageLoading();
						app.alertError('取消失败.');
	  				}
	  			},
	  			error: function() {
	  				app.alertError('取消失败.');
	  			}
	  		});
		});
	}
	
	var initForm = function() {
		var formIdObj = {};
		if(formIds && formIds.length > 0) {
			var formIdArr = jQuery.parseJSON(formIds);
			$.each(formIdArr, function(index, item) {
				formIdObj[item.formId] = item.id;
			});
		}
		
		var loadNonfixForm = function() {
			$.each($('#viewcodeContainer > div'), function(index, item) {
				var form = $('form', $(item))[0];
				var viewType = $(item).data('viewType');
				var formId, id;
				formId = $(form).attr('id');
				id = formIdObj[formId];
				
				if(viewType == 'nonfix') {
					var jsformId = $(form).data('jsformId');
					var formStore = $(form).data('jsformStore');
					var jqxhr = app.$get(app.base + '/jsform/viewobj/' + jsformId, 'json');
					if (!jqxhr) {
						return false;
					}
					jqxhr.done(function (data) {
						var options = {};
						options[formStore] = data;
						options['callback'] = function() { loadNonfixFormData(id, $(form));fillMessage('opinionId'); };
						$(form).jsform(options);
					});
				}
			});
		};
		
		var loadNonfixFormData = function(id, targetForm) {
			if(id) {
				var formData;
				$.ajax({
	  			type : 'get',
	  			async : false,
	  			dataType : 'json',
	  			cache: false,
	  			url: app.base+'/formdata/view',
	  			data: {objectId: id},
	  			success: function(data, textStatus, jqXHR) {
	  				formData = {};
	          $.each(data, function(i, v){
	          	formData[v.name] = v.value;
	          });
	          console.log(formData);
	          targetForm.deserializeObject(formData);
	  			}
	  		});
			}
		};
		
		loadNonfixForm();
		
		if(formIds && formIds.length > 0) {
			App.startPageLoading({ animate: true });
			
			$.each($('#viewcodeContainer > div'), function(index, item) {
				var form = $('form', $(item));
				var viewType, viewUrl, formId, id;
				viewType = $(item).data('viewType');
				viewUrl = $(item).data('viewUrl');
				formId = $(item).data('viewFormid');
				form.attr('id', formId);
				id = formIdObj[formId];
				if(id && viewType == 'fix') {
					var jqxhr = app.$get(app.base + viewUrl.replace('{id}', id), 'json');
					if (!jqxhr) {
						return false;
					}
					jqxhr.done(function (data) {
						form.deserializeObject(data);
					});
				}
			});
		}
		App.stopPageLoading();
	};
	
  var init = function () {
    //初始化日期控件
    $('.date-picker').datepicker({
      rtl: App.isRTL(),
      orientation: 'left',
      autoclose: true,
      language: "zh-CN"
    });
    bootbox.setLocale("zh_CN");

    initForm();
    submitHandle();
    saveHandle();
    fillMessage('opinionId');
    rollback();
    cancelTask();
  };
  init();
} (window.jQuery, window.app);