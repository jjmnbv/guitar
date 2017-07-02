/**
 * Created by Administrator on 2016/12/10.
 */
+function ($, app) {
    /*申请状态*/
    app.registerTextHelper('refCd',app.refuseCode,'code','name');

    /**
     * 拒绝任务查询下拉框初始化
     */
    $('#loanKindCode').selectloader({'loanKindCode': app.loanKindCodeList});
    /*当前节点弹框*/
    $(document).on("click", ".node-caption", function () {
        $(".modal-title").html("申请编号："+$(this).data("applyid"));
        var taskIdVal = $(this).data("taskid");
        $.Bpm.init({taskId: taskIdVal});
		getHistoryTasks();
    })
    var getHistoryTasks = function(){
        $.Bpm.getHistoryTasks(function(data){
            for(var i=0;i<data.length;i++){
                if(data[i].handleOpinion!=null) {
                    data[i].handleOpinion = $.parseJSON(data[i].handleOpinion);
                }else if(data[i].endTime){
                    data[i].handleOpinion = $.parseJSON('{"opinionId":"TG"}');
                }else{
					data[i].handleOpinion = $.parseJSON('{"opinionId":""}');
				}
            }
            var tpl = Handlebars.compile($('#table4-page-template').html())({data:data});
            $("#partnerTable").html(tpl);
        });
    }
	/*查看详情*/
	$(document).on("click", ".showPage", function () {
		var status = $(this).data('status');
		if(status=='01'){
			var applyWater = $(this).data('applyid');
			location.href = "/cb/loan-application/brieft-entry-view.html?applyWater="+applyWater;
		}else{
			var taskIdVal = $(this).data('id');
			$.Bpm.init({taskId: taskIdVal});
			$.Bpm.viewTask();
		}
    });
}(window.jQuery, window.app);


