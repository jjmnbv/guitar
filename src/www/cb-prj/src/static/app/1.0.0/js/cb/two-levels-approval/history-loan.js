/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
	var $ = window.jQuery;
	var app = window.app;
	App.startPageLoading({animate: true});
	//翻译字典项
	app.registerTextHelper('loanKindCode', app.loanKindCodeList, 'code', 'name');
	+function($, app) {
		var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'brief-add-form') {
					$.getJSON(app.TWO_LOANAPPLY_LIST+busId, function(data){
						if (app.isOK(data)) {
							App.stopPageLoading();
							/*导航*/
							data.taskId = request.taskId;
							var tp5 = Handlebars.compile($('#url-boxbg').html());
							var html = tp5(data);
							$("#ul_div").html(html);
							/*业务申请*/
							var tp1 = Handlebars.compile($('#business-apply-table').html());
							var html = tp1(data);
							$("#business-apply-body").html(html);
							/*借据信息*/
							var tp2 = Handlebars.compile($('#due-bill-table').html());
							var html = tp2(data);
							$("#due-bill-body").html(html);
							$('#brief-add-form').deserializeObject(data);
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
	$(document).on("click", "#previousPage", function () {
		window.location.href="/cb/two-levels-approval/two-image-data.html?taskId="+app.request.taskId;
	});
	
	/*提交*/
	$(document).on("click", "#nextPage", function () {
		window.location.href="/cb/two-levels-approval/risk-warning.html?taskId="+app.request.taskId;
		return false;
	});
});