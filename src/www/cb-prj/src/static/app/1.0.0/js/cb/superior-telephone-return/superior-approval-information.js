/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    App.startPageLoading({animate: true});
    var applyWater = '';
    +function ($, app) {
        var init = function () {
            var request = app.request;
            $.Bpm.init({taskId: request.taskId});
            $.Bpm.initBusFormExt(function (formId, busId) {
                if (formId == 'superior-approval-information') {
                    applyWater = busId;
                }
            });
            App.stopPageLoading();
            /*导航*/
            var data = {};
            data.taskId = request.taskId;
            var tp5 = Handlebars.compile($('#url-boxbg').html());
            var html = tp5(data);
            $("#ul_div").html(html);
            $("#rollBack").hide();
            app.bindFormValidation($("#superior-approval-information"));
            return;
        };
        init();
    }(window.jQuery, window.app);

    /*上一步*/
    $('#previousPage').click(function () {
        window.location.href = "/cb/superior-telephone-return/superior-return-visit.html?taskId=" + app.request.taskId;
    });
    $("input[name=opinionId]").click(function () {
        var opinionId = $('input[name="opinionId"]:checked').val();
        $("#opinionNote").val('');
        if (opinionId == 'TH') {
            var size = $("#rollBackNode option").length;
            if (size <= 1) {
                var rollBackList = $.Bpm.getRollbackList();
                for (var i = 0; i < rollBackList.length; i++) {
                    var obj = rollBackList[i];
                    if (obj.stepKey != app.useapply && obj.stepKey != app.telcheck) {
                        rollBackList.splice(i, 1);
                        i--;
                    }
                }
                $("#rollBackNode").selectloader({'rollBackList': rollBackList});
            }
            $("#rollBackNode").addClass("required");
            $("#rollBack").show();
        } else {
            $("#rollBackNode").removeClass("required");
            $("#rollBack").hide();
        }
    });
    /*提交*/
    $('#submitBtn').click(function () {
        var taskStatus = $.Bpm.findTaskStatus();
        if (taskStatus == "COMPLETED") {
            app.alertError("该进件已提交，切勿重复操作!");
        } else if (taskStatus == "SUSPEND" || taskStatus == "REFUSED") {
            app.alertError("当前状态不能执行提交操作!");
        } else {
            //判断必填项都已经填写
            $.getJSON(app.AJAX_CHECKINFOISRIGHT + applyWater + "/supercallback", function (data) {
                if (app.isOK(data)) {
                    if (!data.allRightFlag) {
                        app.alertError("有必填项未填写，请填写后再进行提交！");
                    } else {
                        var item = $("#superior-approval-information");
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
                                        window.location.href = "/cb/superior-telephone-return/superior-telephone-return-list.html";
                                    }, 2000);
                                } else {
                                    app.alertError("退回失败,请检查输入项!");
                                    return false;
                                }
                            });
                        } else if (opinionId == 'TG') {
                            var formIdArr = [];
                            $.Bpm.submitHandleExt(formIdArr, '', opinionInfo, null, function (flag) {
                                if (flag) {
                                    app.alertOK('提交成功！');
                                    setTimeout(function () {
                                        window.location.href = "/cb/superior-telephone-return/superior-telephone-return-list.html";
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
                                        window.location.href = "/cb/superior-telephone-return/superior-telephone-return-list.html";
                                    }, 2000);
                                } else {
                                    app.alertError("拒绝失败。");
                                    return false;
                                }
                            });
                        }
                    }
                }
            });
        }

    });
});