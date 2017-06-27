/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
	var $ = window.jQuery;
	var app = window.app;
	App.startPageLoading({animate: true});
	+function($, app) {
		var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'nucles-audit-form') {
					$.getJSON(app.NUCLEUS_AUDIT_GET + busId, function (data) {
						if (app.isOK(data)) {
							App.stopPageLoading();
							/*导航*/
							data.taskId = request.taskId;
							var tp5 = Handlebars.compile($('#url-boxbg').html());
							var html = tp5(data);
							$("#ul_div").html(html);
							/*申请人信息调查*/
							var tp1 = Handlebars.compile($('#peopleList-template').html());
							Handlebars.registerHelper("addOne", function (index) {
								//利用+1的时机，在父级循环对象中添加一个_index属性，用来保存父级每次循环的索引
								this._index = index;
								return this._index;
							});
							var html2 = tp1(data);
							$("#peopleVar").html(html2);
							$('#eduit-add-form').deserializeObject(data);
							$('#eduit-add-form').find("input").uniform();
							/*tab切换*/
							tabChange();
							/*下一申请人*/
							nextPeople();
							isOneTab();
							/*没数据审核项信息影藏*/
							tableHide()
							return;
						}
						app.alertError(data.errors.join('\n'));
					});
				}
			});
		};
		init();
	} (window.jQuery, window.app);
	/*上一步*/
	$(document).on("click",'#previousPage',function () {
		window.location.href="/cb/nucleus-nucleus/nucleus-history-into-pieces.html?taskId="+app.request.taskId;
	});
	var opinionFormId = "";
	var saveHandle = function (formIdArr) {
		var flag = true;
		var item = $("#eduit-add-form");
		if(!item.valid()){
			return false;
		}
		$(item).prop('action', app.NUCLEUS_AUDIT_SUBMIT);
		var param = $(item).serializeObject();
		$.Bpm.ajaxPost($(item).prop('action'), 'post',param, false, function (data, textStatus, jqXHR) {
			if (app.isOK(data)) {
				if ($(item).prop('id') == 'eduit-add-form') {
					formIdArr.push({ formId: $(item).data('viewIdname'), id: data.applyWater });
				}
			} else {
				flag = false;
			}
		}, 'application/x-www-form-urlencoded; charset=UTF-8');
		if (formIdArr.length > 0) {
			if (!$.Bpm.postFormIds(formIdArr,opinionFormId)) {
				flag = false;
			}
		}
		return flag;
	};
	/*下一步*/
	$(document).on("click",'#nextPage',function () {
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			window.location.href="/cb/nucleus-nucleus/nucleus-approval-information.html?taskId="+app.request.taskId;
		}else{
			var formIdArr = [];
			var flag = saveHandle(formIdArr);
			if (flag) {
				window.location.href="/cb/nucleus-nucleus/nucleus-approval-information.html?taskId="+app.request.taskId;
			}else{
				app.alertError("提交失败!");
			}
		}
		return false;
	});

});