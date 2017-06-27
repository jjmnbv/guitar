/**
 * Created by Administrator on 2016/12/12 0012.
 */

$(function () {
	var $ = window.jQuery;
	var app = window.app;
	+function($, app) {
		var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'image-data-form') {
					/!*导航*!/
					var tp5 = Handlebars.compile($('#url-boxbg').html());		
					var data = {};
					data.taskId = request.taskId;
					var html = tp5(data);
					$("#ul_div").html(html);
					var applyWater = busId;
					$.getJSON(app.LOAN_IMAGE_VIEW+"/"+applyWater, function(res){
						if(app.isOK(res)) {
							window.open (app.yxbase+"?barno="+applyWater+"&permission=query&mode=update", "newwindow2", "height=550, width=1150, top=80, left=100,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
								//$("#image_frame").attr('src',"http://192.168.2.11:9003?barno="+applyWater+"&permission=query&mode=query");
						}
					});
				}
			});
		};
		init();
	} (window.jQuery, window.app);
	
	/*上一步*/
	$('#previousPage').click(function () {
		window.location.href="/cb/nucleus-nucleus/nucleus-applicant-information.html?taskId="+app.request.taskId;
	});
	/*下一步*/
    $(document).on("click", "#nextPage", function () {
		location.href="/cb/nucleus-nucleus/nucleus-risk-warning.html?taskId="+app.request.taskId;
        return false;
    });
});