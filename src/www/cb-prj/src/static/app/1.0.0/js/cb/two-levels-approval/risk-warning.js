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
			App.stopPageLoading();
			/*导航*/
			var data = {};
			data.taskId = request.taskId;
			var tp5 = Handlebars.compile($('#url-boxbg').html());
			var html = tp5(data);
			$("#ul_div").html(html);
		};
		init();
	} (window.jQuery, window.app);
	/*上一步*/
	$('#previousPage').click(function () {
		window.location.href="/cb/two-levels-approval/history-loan.html?taskId="+app.request.taskId;
	});

	/*下一步*/
	$('#nextPage').click(function () {
		window.location.href="/cb/two-levels-approval/history-into-pieces.html?taskId="+app.request.taskId;
	});
});
