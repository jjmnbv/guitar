$(function () {
        var $ = window.jQuery;
        var app = window.app;
        var request = app.request;
        var data = {
            customerNo: request.customerNo,
            applyWater: request.apTr
        };
       app.registerTextHelper('loanKindCode', app.loanKindCodeList, 'code', 'name');
    /*贷款期限*/
    app.registerTextHelper('loPlTyp', app.paymentUnitList, 'code', 'name');
        App.startPageLoading({animate: true});
        var init = function () {
            $.getJSON(app.HISTORYDETAILLIST,data, function (res) {
                if (app.isOK(res)) {
                    App.stopPageLoading();
                    /*贷款申请*/
                    var tpl = Handlebars.compile($('#table1-page-template').html());
                    var html = tpl(res);
                    $("#business-apply-body").html(html);
                    /*借据信息*/
                    var tp2 = Handlebars.compile($('#managerlist-page-template').html());
                    var html = tp2(res);
                    $("#due-bill-body").html(html);
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });
        };
        init();
    }
)