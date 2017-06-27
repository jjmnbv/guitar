/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    App.startPageLoading({animate: true});
    /*商品类型*/
    app.registerTextHelper('goodsType', app.goodsTypeList, 'code', 'name');
    /*账号用途*/
    app.registerTextHelper('acUsCd', app.useCodeList, 'code', 'name');
    /*账号类型*/
    temp1 = '[{"name":"对公账户","code":"DG"},{"name":"个人账户","code":"GR"}]'
    app.registerTextHelper('acTyCd', $.parseJSON(temp1), 'code', 'name');
    +function($, app) {
        /**
         * 初始化数据
         */
        var init = function () {
            $.getJSON(app.LOAN_INFORMATION + app.request.applyWater, function (data) {
                if (app.isOK(data)) {
                    App.stopPageLoading();
                    /*商品信息*/
                    var tpl = Handlebars.compile($('#goodsList-template-set').html());
                    var html = tpl(data);
                    $("#good-list-isshow").html(html);

                    /*费用信息*/
                    var tp2 = Handlebars.compile($('#charge-list-table').html());
                    var htm2 = tp2(data);
                    $("#chargeList").html(htm2);

                    /*资料信息*/
                    var tp3 = Handlebars.compile($('#data-list-table').html());
                    html = tp3(data);
                    $("#dataList").html(html);

                    /* /*账号信息*/
                    var tp4 = Handlebars.compile($('#accountList-template-set').html());
                    var htm4 = tp4(data);
                    $("#table-accountList-set").html(htm4);
                    /*贷款类型*/
                    $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
                    /*贷款用途*/
                    $('#loanUseCode').selectloader({'loanUseCodeList': app.loanUseCodeList});
                    /*每期还款日*/
                    $('#loanPayDay').selectloader({'loanPayDayList': app.wageDateList});
                    /*进件类型*/
                    $('#inletTypeCode').selectloader({'inletTypeCodeList': app.inletTypeCodeList});
                    /*促销方案*/
                    var temp1 = '[{"name":"'+data.applySub.promNa+'","code":"'+data.applySub.promNo+'"}]'
                    $('#promNa').selectloader({'promNaList': $.parseJSON(temp1)});
                    /*金融产品*/
                    temp1 = '[{"name":"'+data.loanTypeName+'","code":"'+data.loanTypeId+'"}]'
                     $('#loanTypeNo').selectloader({'loanTypeNoList': $.parseJSON(temp1)});
                    /*申请期限*/
                    temp1='[{"name":"'+data.applySub.applyPeriodLength+'","code":"'+data.applySub.applyPeriodLength+'"}]'
                    $('#applyPeriodLength').selectloader({'applyPeriodLengthList': $.parseJSON(temp1)});
                    
                    /*执行年利率*/
                    temp1 = '[{"name":"'+data.loanApplyContract.executionRateFirstLoan+'%","code":"'+data.loanApplyContract.executionRateFirstLoan+'"}]'
                    $('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp1)});
                    /*还款间隔*/
                    temp1 = '[{"name":"'+data.loanApplyContract.payFreQt+'","code":"'+data.loanApplyContract.payFreQt+'"}]'
                    $('#payFreQt').selectloader({'payFreQtList': $.parseJSON(temp1)});
                    /*其他*/
                    temp1 = '[{"name":"'+data.cuMaNa+'","code":"'+data.cuMaNa+'"}]'
                    $('#cuMaNa').selectloader({'cuMaNaList': $.parseJSON(temp1)});
                    /*资料类型*/
                    $('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList});
                    /*资料用途*/
                    $('.materialPhCode').selectloader({'materialPhCodeList': app.materialPhCodeList});
                    /*Script*/
                    /*费用类型*/
                    $('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
                    /*还款方式*/
                    temp1='[{"code":"'+data.paymentMethod.paymentMethodId +'","name":"'+data.paymentMethod.paymentMethodName +'"}]';
                    $('#paymentMethodId').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});
                    $('#form-submit-loan-information').deserializeObject(data);
                    /*table 里面的下拉框样式设置*/
                    /*商品信息*/
                    td_select_more($("#goods_select tr"));
                    /*账号信息*/
                    td_select_more($("#loan_select tr"));
                    /*根据贷款类型判断，如果是耐用品消费分期，则显示购买商品信息列表*/
                    isQTNY(data);
                    /*置灰*/
                    setReadonly();
                    /*lh  金额 格式化*/
                    $(".bindEvent").each(function(){
                        $(this).val(app.formatCurrencyM($(this).val()));
                    });
                    return;
                }
                app.alertError(data.errors.join('\n'));
            });
        };
        init();
    } (window.jQuery, window.app);

    /*下一步*/
    $('#saveData').click(function () {
            var applyWater=$("input[name='applyWater']").val();
            window.location.href="/cb/loan-application/image-data-view.html?applyWater="+applyWater;
    });

    /*上一步*/
    $('#previousPage').click(function () {
        var applyWater=$("input[name='applyWater']").val();
        window.location.href="/cb/loan-application/details-view.html?applyWater="+applyWater;
    });
});



