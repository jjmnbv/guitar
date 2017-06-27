$(function () {
    var $ = window.jQuery;
    var app = window.app;
    +function ($, app) {
        var applyWater = "";
        var init = function () {
            var request = app.request;
            $.Bpm.init({taskId: request.taskId});
            $.Bpm.initBusFormExt(function (formId, busId) {
                if (formId == 'image-data-form') {
                    /!*导航*!/
                    var tp5 = Handlebars.compile($('#url-boxbg').html());
                    var data = {};
                    data.taskId = request.taskId;
                    var html = tp5(data);
                    $("#ul_div").html(html);
                    applyWater = busId;
                    $.getJSON(app.LOAN_IMAGE_VIEW + "/" + applyWater, function (res) {
                        if (app.isOK(res)) {
                            window.open(app.yxbase + "?barno=" + applyWater + "&permission=query&mode=update", "newwindow2", "height=550, width=1150, top=80, left=100,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
                        }
                    });
                }
            });
        };
        init();

        var opinionFormId = "";
        var saveHandle = function (formIdArr, operType) {
            var flag = true;
            var item = $("#image-data-form");
            formIdArr.push({formId: $(item).data('viewIdname'), id: applyWater});
            return flag;
        };
        /*提交*/
        $(document).on("click", "#submitData", function () {

            var taskStatus = $.Bpm.findTaskStatus();
            if (taskStatus == "COMPLETED") {
                app.alertError("该进件已提交，切勿重复操作!");
            } else if (taskStatus == "SUSPEND" || taskStatus == "REFUSED") {
                app.alertError("当前状态不能执行提交操作!");
            } else {
                $.getJSON(app.SPENT_LOAN_INFO_ISALLRIGHT + applyWater, function (data) {
                    if (app.isOK(data)) {
                        if (!data.allRightFlag) {
                            app.alertError("有必填项未填写，请填写后再进行提交！");
                        } else {
                            var formIdArr = [];
                            if (saveHandle(formIdArr, 'submit')) {
                                $.Bpm.submitHandleExt(formIdArr, opinionFormId, '', null, function (flag) {
                                    if (flag) {
                                        location.href = "/cb/spent-loan/spent-loan-list.html";
                                    }
                                });
                            } else {
                                app.alertError("提交失败,请检查输入项!");
                            }
                        }
                        return false;
                    }
                });
            }
        });

    }(window.jQuery, window.app);
});
