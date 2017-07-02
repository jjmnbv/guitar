/**
 * Created by Administrator on 2016/12/10.
 */
+function ($, app) {

    app.registerTextHelper('auditFlowTypeCode',app.auditFlowTypeCodeList,'code','name');
    /*当前节点弹框*/
    $(document).on("click", ".node-caption", function () {
        $(".modal-title").html("申请编号："+$(this).data("applyid"));
        var taskIdVal = $(this).data("taskid");
        $.Bpm.init({taskId: taskIdVal});
        $.Bpm.initBusFormExt(function(){
            getHistoryTasks();
        });
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

}(window.jQuery, window.app);
function excuteFlow(taskIdVal,status,applyWater){
    if(status=='01'){
        location.href = '../loan-application/brief-entry-update.html?applyWater=' + applyWater;
    }else{
        $.Bpm.init({taskId: taskIdVal});
        $.Bpm.initBusFormExt(function(){
            var taskStatus = $.Bpm.findTaskStatus();
            if(taskStatus=="SUSPEND"){
                $.Bpm.viewTask();
            }else{
                $.Bpm.handle();
            }
        });
    }
}