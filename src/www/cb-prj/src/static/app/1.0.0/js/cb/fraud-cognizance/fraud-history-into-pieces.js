/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    App.startPageLoading({animate: true});
    +function ($, app) {
        var init = function () {
            var request = app.request;
            $.Bpm.init({taskId: request.taskId});
            $.Bpm.initBusFormExt(function (formId, busId) {
                if (formId == 'nucleus-history-into-form') {
					App.stopPageLoading();
					var data = {};
					$("#into-title").html("申请编号："+busId);
					/*导航*/
					data.taskId = request.taskId;
					var tp5 = Handlebars.compile($('#url-boxbg').html());
					var html = tp5(data);
					$("#ul_div").html(html);
					$('#nucleus-history-into-form').deserializeObject(data);
					return;
                    app.alertError(data.errors.join('\n'));
                }
            });
        };
        init();
    }(window.jQuery, window.app);

    /*上一步*/
    $('#previousPage').click(function () {
        window.location.href = "/cb/fraud-cognizance/fraud-risk-warning.html?taskId=" + app.request.taskId;
    });
    /*下一步*/
    $('#nextPage').click(function () {
		window.location.href = "/cb/fraud-cognizance/fraud-audit-items-information.html?taskId=" + app.request.taskId;
        return false;
    });

    $('body').on('click', '.img-box', function () {
        $(this).parents(".process-content").find(".content").toggle();
    });
});