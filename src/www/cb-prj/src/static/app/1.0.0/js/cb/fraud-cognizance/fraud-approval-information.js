/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
	var $ = window.jQuery;
	var app = window.app;
	$('.selectAutoVal').each(function(){
		$(this).selectloader(app);
	});
	var applyWater = '';
	App.startPageLoading({animate: true});
	+function($, app) {
		var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'nucleus-approval-form') {
					applyWater = busId;
					$("#ul_div").data("applyWaterData",applyWater);
				}
			});
			App.stopPageLoading();
			/*导航*/
			var data={};
			data.taskId = request.taskId;
			var tp5 = Handlebars.compile($('#url-boxbg').html());
			var html = tp5(data);
			$("#ul_div").html(html);
			app.bindFormValidation($("#nucleus-approval-form"));
			return;
		};
		init();
	} (window.jQuery, window.app);

	/*上一步*/
	$('#previousPage').click(function () {
		window.location.href="/cb/fraud-cognizance/fraud-audit-items-information.html?taskId="+app.request.taskId;
	});
	$("input[name=opinionId]").click(function(){
	  var opinionId=$('input[name="opinionId"]:checked').val();
	  $("#opinionNote").val('');
	});
	$('#submitB').click(function () {
		var taskStatus = $.Bpm.findTaskStatus();
		if (taskStatus == "COMPLETED" || taskStatus == "SUSPEND" || taskStatus == "REFUSED") {
			app.alertError("当前状态不可执行提交操作!");
		} else {
			var item = $("#nucleus-approval-form");
			if (!item.valid()) {
				app.alertError("提交失败,请检查输入项!");
				return false;
			}
			$(this).attr('disabled', 'true');
			var opinionId = $('input[name="opinionId"]:checked').val();
			var opinionInfo = JSON.stringify($(item).serializeObject());
			var formIdArr = [];

			$.Bpm.submitHandleExt(formIdArr, '', opinionInfo,null, function (flag) {
				if (flag) {
					app.alertOK('提交成功！');
					setTimeout(function () {
						window.location.href = "/cb/fraud-cognizance/fraud-list.html";
					}, 2000);
				} else {
					app.alertError("提交失败。");
					return false;
				}
			});
		}
	});

	/**
	 * 加入黑名单
	 */
	$("#blackName").click(function(){
		$.getJSON(app.ADDTOBLANK + 	$("#ul_div").data("applyWaterData"), function (data) {
			if (app.isOK(data)) {
				app.alertOK('加入黑名单成功！');
			}else{
				app.alertError(data.errors.join('\n'));
			}
		});

	});
	/**
	 * 加入灰名单
	 */
	$("#grayName").click(function(){
		$.getJSON(app.ADDTOGRAY + $("#ul_div").data("applyWaterData"), function (data) {
			if (app.isOK(data)) {
				app.alertOK('加入灰名单成功！');
			}else{
				app.alertError(data.errors.join('\n'));
			}
		});
	});



});


