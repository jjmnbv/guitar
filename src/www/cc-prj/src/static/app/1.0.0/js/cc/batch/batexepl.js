+ function($, app) {
	app.registerTextHelper('exMd', app.exMd,'code', 'name');
	app.registerTextHelper('laExSt', app.laExSt, 'code', 'name');
	app.registerTextHelper('ynSc', app.ynSc, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
	var $ = window.jQuery;
	var app = window.app;
	var operatingMode;
	$('.s1').removeClass('bs-select-hidden');
	$('.select-laExSt').selectloader({laExStList:app.laExSt});
	$('.select-exMd').selectloader({exMdList:app.exMd});

	app.context.formHtmll = $('#form-templatel').html();
	app.context.formHtml = $('#form-template').html();
	app.context.formInit = function (form) {
		form.find(".date-picker-page").datepicker({
			rtl: App.isRTL(),
			orientation: "left",
			autoclose: !0,
			format: "yyyy-mm-dd",
			'start-date': "+0d",
			language: 'zh-CN'
		});
		form.find('.select-laExSt').selectloader({laExStList:app.laExSt});
		form.find('.select-exMd').selectloader({exMdList:app.exMd});
		app.bindFormValidation(form);
		if(operatingMode =='add'){
			validatorNotExists(form);
		}else{
			form.find('[name="plId"]').prop('readonly', true)
		};
		$('[name=exMd]').on('change',function(){
			var ss=$(this).val();
			if(ss =='A'){
				$('.form-plSch').show();
			}else{
				$('.form-plSch').hide();
			}
		});
	};

	/**
	 * 增加操作的弹框
	 */
	var validatorNotExists = function (form) {
		$("input[name='plId']", form).rules("add", {
			remote: {
				url: app.BATCHTASKEXEPLAN_NOTEXISTS,
				type: "POST",
				dateType: "text",
				data:{plId:function(){ return form.find('[name="plId"]').val();}
				}
			},
			messages: {
				remote: "该计划编码已存在！"
			}
		});
	};
	(function ($) {
		var pid;
		$('#deploy1').hide();
		$('#add').getModal({
				title: '新增批处理执行计划信息',
				body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
				showBefore: function (modal) {
					$('.laexst').hide();
					operatingMode='add'
					app.context.showBefore({
						modal: modal
					}, app, app.context.formInit);
				},
				hideAfter: function (modal) {
					modal.setBody(app.context.formHtml);
				}
			},
			function (modal) {
				if($('.batch-task-plform').valid()){
					var jqxhr = app.$post(app.BATCHTASKEXEPLAN_CREATE,modal.find('.batch-task-plform').serializeObject());
					if (!jqxhr) return false;
					jqxhr.done(function (data) {
						if (app.isOK(data)) {
							app.alertOK('提交成功.');
							modal.modal('hide');
							modal.find('[data-modal-ok]').attr('disabled',false);
							app.loadData();
							pid = data.plId;
							$('#deploy1').trigger('click');
							return;
						}
						var errors = data.errors.join(',')
						app.alertError(errors || failureText || '提交失败！');
						modal.modal('hide');
						modal.find('[data-modal-ok]').attr('disabled',false);
					});
				}

			});
		$('#deploy1').getModal({
			title: '批处理执行计划配置',
			body: app.context.formHtmll,
			showBefore: function (modal) {
				configBefore(pid,modal);
			},
			showAfter: function (modal) {
				configAfter(modal);
			}
		},function (modal) {
			configConfirm(pid,modal);
		})
	}(jQuery));


	//自定义校验校验执行时间规则

	var plsch = $("input[name='plSch']").val();
	var data={
		'plSch': plsch
	}
	$.validator.addMethod("plSch",function(value,element){
		var plschvalid=/^\s*($|#|\w+\s*=|(\?|\*|(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?(?:,(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?)*)\s+(\?|\*|(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?(?:,(?:[0-5]?\d)(?:(?:-|\/|\,)(?:[0-5]?\d))?)*)\s+(\?|\*|(?:[01]?\d|2[0-3])(?:(?:-|\/|\,)(?:[01]?\d|2[0-3]))?(?:,(?:[01]?\d|2[0-3])(?:(?:-|\/|\,)(?:[01]?\d|2[0-3]))?)*)\s+(\?|\*|(?:0?[1-9]|[12]\d|3[01])(?:(?:-|\/|\,)(?:0?[1-9]|[12]\d|3[01]))?(?:,(?:0?[1-9]|[12]\d|3[01])(?:(?:-|\/|\,)(?:0?[1-9]|[12]\d|3[01]))?)*)\s+(\?|\*|(?:[1-9]|1[012])(?:(?:-|\/|\,)(?:[1-9]|1[012]))?(?:L|W)?(?:,(?:[1-9]|1[012])(?:(?:-|\/|\,)(?:[1-9]|1[012]))?(?:L|W)?)*|\?|\*|(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?(?:,(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)(?:(?:-)(?:JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC))?)*)\s+(\?|\*|(?:[0-6])(?:(?:-|\/|\,|#)(?:[0-6]))?(?:L)?(?:,(?:[0-6])(?:(?:-|\/|\,|#)(?:[0-6]))?(?:L)?)*|\?|\*|(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?(?:,(?:MON|TUE|WED|THU|FRI|SAT|SUN)(?:(?:-)(?:MON|TUE|WED|THU|FRI|SAT|SUN))?)*)(|\s)+(\?|\*|(?:|\d{4})(?:(?:-|\/|\,)(?:|\d{4}))?(?:,(?:|\d{4})(?:(?:-|\/|\,)(?:|\d{4}))?)*))$/;
		return this.optional(element)||(plschvalid.test(value));
	},"请输入正确的格式");

	$("input[name='plSch']").on('change',function(){
		app.$post(app.BATCHTASKEXEPLAN_PLSCHISADAPT,data).done(function(data){
			if(app.isOK(data)){
				app.alertOK('提交成功');
			}
		})
	})



	/**
	 * 修改批处理任务信息
	 */
	$('#edit').getModal({
		title: '编辑批处理执行计划信息',
		body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
		selector: function () {
			return !!$('[type=radio]:checked').length;
		},
		showBefore: function (modal) {
			$('.laexst').hide();
			$('input[name=plId]').prop('readonly',true);
			var id = $('[type=radio]:checked').data('id');
			operatingMode='edit'
			if (!id) return;
			app.context.showBefore({
				url: app.BATCHTASKEXEPLAN_VIEW,
				modal: modal,
				param: id
			}, app, app.context.formInit);
		},
		hideAfter: function (modal) {
			modal.setBody(app.context.formHtml);
			$('input[name=plId]').prop('readonly',false);
			$('.form-plSch').show();
		}
	}, function (modal) {
		app.context.submit({
			modal: modal,
			url: app.BATCHTASKEXEPLAN_UPDATE,
		}, app);
	});

	/**
	 * 移出操作的弹框
	 */
	$('#delete').getModal({
		text: '确定要删除该条任务信息吗？',
		size: 'modal-sm',
		selector: function () {
			return !!$('[type=radio]:checked').length;
		}
	}, function (modal) {
		var plId=$('[type=radio]:checked').data('id');
		app.context.submit({
			modal: modal,
			url: app.BATCHTASKEXEPLAN_REMOVE+plId,
			text: '删除成功',
			isEasyModal: true
		}, app);
	});

	/**
	 * 配置执行计划的弹框
	 */
	$('#deploy').getModal({
		title: '批处理执行计划配置',
		body: app.context.formHtmll,
		selector: function () {
			return !!$('[type=radio]:checked').length;
		},
		showBefore: function (modal) {
			var id = $('[type=radio]:checked').data('id');
			configBefore(id,modal);
		},
		showAfter: function (modal) {
			configAfter(modal);
		},
	},function (modal) {
		var id = $('[type=radio]:checked').data('id');
		configConfirm(id,modal);
	});

	function  configBefore(id,modal) {
		app.$getJSON(app.BATCHTASKINFO_LIST).done(function (res) {
			var tpl = Handlebars.compile(app.context.formHtmll);
			var html = tpl(res);
			modal.find('.modal-body').html(html);
			app.$getJSON(app.BATCHTASKEXEPLAN_QUERY+id ).done(function (data) {
				var mockData = data.payload;
				var mockDataArr = [];
				for(var m in mockData) {
					mockDataArr.push(mockData[m].taskId)
				}
				modal.find('.batch-operate1 option').each(function (i, n) {
					if($.inArray($(n).attr('value'), mockDataArr)!=-1) {
						modal.find('.batch-operate2').append($(n).clone(true))
						$(n).remove()
					}
				});
			});
		});
	}

	function  configAfter(modal) {
		modal.find('.b1').click(function(){
			var $obj = modal.find('select option:selected').clone(true);
			if($obj.size() == 0){ app.alertError("请至少选择一条!"); }
			modal.find('.batch-operate2').append($obj);
			modal.find('select option:selected').remove();
		});

		modal.find('.b2').click(function(){ modal.find('.batch-operate2').append(modal.find('.batch-operate1 option')); });
		modal.find('.b3').click(function(){
			var $obj = modal.find('select option:selected').clone(true);
			if($obj.size() == 0){ app.alertError("请至少选择一条!"); }
			modal.find('.batch-operate1').append($obj);
			modal.find('select option:selected').remove();
		});

		modal.find('.b4').click(function(){modal.find('.batch-operate1').append(modal.find('.batch-operate2 option')); });
		modal.find('option').dblclick(function(){
			var flag = $(this).parent().attr('class');
			if(flag == "batch-operate1"){
				var $obj = $(this).clone(true);
				modal.find('.batch-operate2').append($obj);
				$(this).remove();
			} else {
				var $obj = $(this).clone(true);
				modal.find('.batch-operate1').append($obj);
				$(this).remove();
			}
		});
	}

	function  configConfirm(id, modal) {
		var arrayList=[];
		modal.find(".batch-operate2 option").each(function(){
			var txt=$(this).text();
			console.log(txt);
			if(txt != "全部")
				arrayList.push(txt);
		});
		var taskList = [];
		for(var i =0;i<arrayList.length;i++) {
			taskList[taskList.length] = arrayList[i].replace( /([^\s]+)\s.*/, "$1");
		};
		data={
			'plId':id,
			'taskList':taskList.length == 0 ? [''] : taskList
		}
		app.$post(app.BATCHTASKEXEPLAN_UPDATEPLANTASK,data).done(function(data){
			if(app.isOK(data)){
				app.alertOK('提交成功');
				modal.find('[data-modal-ok]').attr('disabled',false);
				app.loadData();
				modal.modal('hide');
			}else{
				var errors = data.errors.join(',')
				app.alertError(errors || failureText || '提交失败！');
				modal.modal('hide');
				modal.find('[data-modal-ok]').attr('disabled',false);
			}
		})
	}


	/*手动执行操作*/
	$('#operate-handle').getModal({
		text: '是否要运行手动执行？',
		size:'modal-sm',
		selector: function () {
			return !!$('[type=radio]:checked').length;
		}
	},function (modal) {
		var plId=$('[type=radio]:checked').data('id');
		app.$post(app.BATCHTASKEXEPLAN_EXECUTEHANDLE+'/'+plId).done(function (data) {
			if(app.isOK(data)){
				var exId = data.payload;
				window.location.href='../batchhis/batexedtl-index.html?opeHanle=handle&exId='+exId;
			}else{
				var errors = data.errors.join(',');
				app.alertError(errors || failureText || '提交失败！');
			}
		});
	});
});
  
