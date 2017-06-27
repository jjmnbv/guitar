/**
 * Created by Administrator on 2016/12/10.
 */
+function ($, app) {
    app.registerTextHelper('auditFlowTypeCode',app.auditFlowTypeCodeList,'code','name');

    $.merge(app.refuseCode,app.activitiCode);
    var zcArray = [{'code':'TG','name':'正常'}];
    $.merge(app.refuseCode,zcArray);

    /**
     * 已办任务查询下拉框初始化
     */
    $('#loanKindCode').selectloader({'loanKindCode': app.loanKindCodeList});
    $('#organizationNo').selectloader({'organizationNo': app.organizationNo});
    /*当前节点弹框*/
    $(document).on("click", ".node-caption", function () {
        $(".modal-title").html("申请编号："+$(this).data("applyid"));
        var taskIdVal = $(this).data("taskid");
        $.Bpm.init({taskId: taskIdVal});
        $.Bpm.initBusFormExt(function(){
            getHistoryTasks();
        });
    });
    var getHistoryTasks = function(){
        $.Bpm.getHistoryTasks(function(data){
            for(var i=0;i<data.length;i++){
                if(data[i].handleOpinion == "撤销"){
                    data[i].handleOpinion = '{"opinionId":"NH"}';
                }
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
    /**
     * 拿回的弹框
     */
    $('.nahui-sign').getModal({
        size: 'modal-sm',
        statusArray:["01","02","03","04","05","06","07","08","09","10","12"],
        textArray:"确定要拿回该条记录吗？",
        noHandleArray:["20","30","31","41","QX","JH","NH","51","52","53"],
        noHandle:'该条记录不可拿回！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                var status = $('[type=radio]:checked').data('status');
                var actstatus = $('[type=radio]:checked').data('actstatus');
                if(actstatus == 'QX'||actstatus == 'JH'||actstatus == 'NH'){
                    return actstatus;
                }else{
                    return status;
                }
            }
        }
    }, function (modal) {
        //获取当前状态
        var taskIdVal = $('[type=radio]:checked').data('id');
        $.Bpm.init({taskId: taskIdVal});
        $.Bpm.initBusFormExt(function(){
            var taskStatus = $.Bpm.findTaskStatus();
            //获取最后一个办理人
            var checkEndUserIdsCaption = $('[type=radio]:checked').attr('data-checkEndUserIdsCaption');
            checkEndUserIdsCaption = checkEndUserIdsCaption.substring(1);
            checkEndUserIdsCaption = checkEndUserIdsCaption.substring(0,checkEndUserIdsCaption.length-1);
            var checkEndUserIdsCaptionArr = checkEndUserIdsCaption.split(",");
            checkEndUserIdsCaption = checkEndUserIdsCaptionArr[checkEndUserIdsCaptionArr.length-1];
            if(taskStatus=="TODO" && checkEndUserIdsCaption==app.userInfo.loginName){
                app.context.submit({
                    modal: modal,
                    url: app.ACTIVITI_RETRACT + 'taskdone/' +$.Bpm.options.taskId,
                    contentType:'application/json',
                    text: '拿回成功'
                }, app);
            }else{
                app.alertError("该条记录不可拿回!");
            }
        });
    });

}(window.jQuery, window.app);

