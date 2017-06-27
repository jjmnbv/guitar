/**
 * Created by Administrator on 2016/12/10.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**
     * 代办任务查询下拉框初始化
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
                    if (!data[i].handleOpinion.match("^\{(.+:.+,*){1,}\}$")) {
                        data[i].handleOpinion = $.parseJSON('{"opinionId":"TG", "opinionNote":"'+ data[i].handleOpinion +'"}');
                    } else {
                        data[i].handleOpinion = $.parseJSON(data[i].handleOpinion);
                    }
                }else {
                    data[i].handleOpinion = $.parseJSON('{"opinionId":"TG"}');
                }
            }
            var tpl = Handlebars.compile($('#table4-page-template').html())({data:data});
            $("#partnerTable").html(tpl);
        });
    }
	
});
function excuteFlow(taskIdVal,status,applyWater){
	if(status=='01'){
		location.href = '../loan-application/brief-entry-update.html?applyWater=' + applyWater;
	}else{
		$.Bpm.init({taskId: taskIdVal});
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="SUSPEND"){
			$.Bpm.viewTask();
		}else{
			$.Bpm.handle();
		}
	}
}