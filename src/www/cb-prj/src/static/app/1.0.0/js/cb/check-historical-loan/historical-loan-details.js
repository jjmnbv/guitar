$(function () {
        var $ = window.jQuery;
        var app = window.app;
        var request = app.request;
        /*是否结清*/
        app.registerTextHelper('clnInd', app.yesOrNoList, 'code', 'name');
        /*账号用途*/
        app.registerTextHelper('acUsCd', app.useCodeList, 'code', 'name');
        /*账号类型*/
        app.registerTextHelper('acTyCd', app.acCdList, 'code', 'name');
        /*还款类型*/
        app.registerTextHelper('payTyp', app.repaymentTypeCodeList, 'code', 'name');
        /*贷款期限*/
        app.registerTextHelper('loPlTyp', app.paymentUnitList, 'code', 'name');
        App.startPageLoading({animate: true});
        var init = function () {
            $.getJSON(app.HISTORY_LOAN_DETAIL + request.loNo, function (res) {
                if (app.isOK(res)) {
                    App.stopPageLoading();
                    /*借据信息*/
                    var tpl = Handlebars.compile($('#table1-page-template').html());
                    var html = tpl(res);
                    $("#tab1").html(html);
                    /*还款计划*/
                    var tp2 = Handlebars.compile($('#table2-page-template').html());
                    var html = tp2(res);
                    $("#tab2").html(html);
                    /*还款流水*/
                    var tp3 = Handlebars.compile($('#table3-page-template').html());
                    var html = tp3(res);
                    $("#tab3").html(html);
                    /*还款流水*/
                    var tp4 = Handlebars.compile($('#repayMethod-template').html());
                    var html = tp4(res);
                    $("#repayMethodForm").html(html);
                    /*借据状态*/
                    $('.loStsList').selectloader({'loStsTypeList': app.receiptStatusList});
                    /*还款方式*/
                    $('.repaymentType').selectloader({'repaymentTypeList': app.repaymentTypeCodeList});
                    /*还款方式种类*/
                    $('.loPayTypList').selectloader({'loPayTypTypeList': app.paymentMethodList});
                    /*利息计算基础*/
                    $('.inCalBaCdList').selectloader({'inCalBaCdTypeList': app.inCalBaList});
                    /*利息计算周期*/
                    $('.inCalPerCdList').selectloader({'inCalPerCdTypeList': app.inCalPerList});
                    /*还款组成*/
                    $('.payComCdList').selectloader({'payComCdTypeList': app.paymentMakeUpList});
                    /*还款间隔单位*/
                    $('.payFrePuCd').selectloader({'paymentUnitList': app.paymentUnitList});
                    $('#historical-loan-details').deserializeObject(res);
                    $('#repayMethodForm').deserializeObject(res);
                    setReadonly()
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });
        };
        init();
    }
)
