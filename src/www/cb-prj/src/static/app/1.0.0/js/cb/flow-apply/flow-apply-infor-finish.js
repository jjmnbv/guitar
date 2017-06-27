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
    var init = function () {
        var request = app.request;
        $.Bpm.init({taskId: request.taskId});
        $.Bpm.initBusFormExt(function(formId, busId) {
            if (formId == 'flow-apply-info') {
                applyWater = busId;
                $.getJSON(app.FLOW_APPLY_VIEW + applyWater, function (resultData) {
                    $("#infoIf").attr("href",resultData.readUrl);
                    //var tp5 = Handlebars.compile($('#url-boxbg').html());
                    //var html = tp5(data);
                    //$("#ul_div").html(html);
                });
            }
        });
        App.stopPageLoading();
        /*导航*/
        var data={};
        data.taskId = request.taskId;
        var tp5 = Handlebars.compile($('#url-boxbg').html());
        var html = tp5(data);
        $("#ul_div").html(html);
        $("#rollBack").hide();
        app.bindFormValidation($("#flow-apply-info"));

        return;
    };
    init();

    /*上一步*/
    $('#previousPage').click(function () {
        window.location.href="/cb/flow-apply/list-finish.html";
    });
    $("input[name=opinionId]").click(function(){
        var opinionId=$('input[name="opinionId"]:checked').val();
        $("#opinionNote").val('');
        if(opinionId=='TH'){
            var size = $("#rollBackNode option").length;
            if(size<=1){
                var rollBackList = $.Bpm.getRollbackList();
                for(var i=0;i<rollBackList.length;i++){
                    var obj = rollBackList[i];
                    if(obj.stepKey!=app.detailEnter){
                        rollBackList.splice(i,1);
                        i--;
                    }
                }
                $("#rollBackNode").selectloader({'rollBackList': rollBackList});
            }
            $("#rollBackNode").addClass("required");
            $("#rollBack").show();
            $("#backSubCode").addClass("required");
            $("#backSub").show();

        }else{
            $("#rollBackNode").removeClass("required");
            $("#rollBack").hide();
            $("#backSubCode").removeClass("required");
            $("#backSub").hide();


        }
    });
    $('#submitB').click(function () {
        //判断必填项都已经填写
                    var taskStatus = $.Bpm.findTaskStatus();
                    if (taskStatus == "COMPLETED" || taskStatus == "SUSPEND" || taskStatus == "REFUSED") {
                        app.alertError("当前状态不可执行提交操作!");
                    } else {
                        var item = $("#flow-apply-info");
                        if (!item.valid()) {
                            app.alertError("提交失败,请检查输入项!");
                            return false;
                        }
                        $(this).attr('disabled', 'true');
                        var opinionId = $('input[name="opinionId"]:checked').val();
                        var opinionInfo = JSON.stringify($(item).serializeObject());
                        if (opinionId == 'TH') {
                            $.Bpm.rollbackToWithTarget(opinionInfo, $("#rollBackNode").val(), function (data) {
                                if (app.isOK(data)) {
                                    app.alertOK('退回成功！');
                                    setTimeout(function () {
                                        window.location.href = "/cb/flow-apply/list-finish.html";
                                    }, 2000);
                                } else {
                                    app.alertError("退回失败,请检查输入项!");
                                    return false;
                                }
                            });
                        } else if (opinionId == 'TG') {
                            var formIdArr = [];
                            $.Bpm.submitHandleExt(formIdArr, '', opinionInfo, function (flag) {
                                if (flag) {
                                    app.alertOK('提交成功！');
                                    setTimeout(function () {
                                        window.location.href = "/cb/flow-apply/list-finish.html";
                                    }, 2000);
                                } else {
                                    app.alertError("提交失败。");
                                    return false;
                                }
                            });
                        } else if (opinionId == 'JJ') {
                            $.Bpm.refuseHandle([], '', opinionInfo, function (flag) {
                                if (flag) {
                                    app.alertOK('拒绝成功！');
                                    setTimeout(function () {
                                        window.location.href = "/cb/flow-apply/list-finish.html";
                                    }, 2000);
                                } else {
                                    app.alertError("拒绝失败。");
                                    return false;
                                }
                            });
                        }else {
                            /*暂时跳转到欺诈页面*/
                            window.location.href = "/cb/fraud-cognizance/fraud-loan-information.html?taskId="+app.request.taskId;
                        }
                    }

    });
});


