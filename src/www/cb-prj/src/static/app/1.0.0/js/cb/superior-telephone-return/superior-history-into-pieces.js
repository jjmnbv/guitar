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
				if (formId == 'superior-history-into-pieces') {
					App.stopPageLoading();
					$("#into-title").html("申请编号："+busId);
					/*导航*/
					var data = {};
					data.taskId = request.taskId;
					var tp5 = Handlebars.compile($('#url-boxbg').html());
					var html = tp5(data);
					$("#ul_div").html(html);
				}
			});
		};
		init();
	} (window.jQuery, window.app);
	/*上一步*/
	$('#previousPage').click(function () {
		window.location.href="/cb/superior-telephone-return/superior-risk-warning.html?taskId="+app.request.taskId;
	});
	
	/*下一步*/
	$('#nextPage').click(function () {
		window.location.href="/cb/superior-telephone-return/superior-return-visit.html?taskId="+app.request.taskId;
	});
	$('body').on('click', '.img-box', function () {
		$(this).parents(".process-content").find(".content").toggle();
	});
});