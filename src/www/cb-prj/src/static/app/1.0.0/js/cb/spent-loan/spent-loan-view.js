/**
 * Created by Administrator on 2017/2/6 0006.
 */


$(function () {
    +function ($, app) {
        var init = function () {
            $.getJSON(app.SPENT_LOAN + app.request.applyWater, function (data) {
                if (app.isOK(data)) {
                    var loanUseCode = data.loanUseCode;
                    if (loanUseCode != "QT") {
                        $(".div_loanUseCode").css("display", "none");
                    }

                    $("#apTr").val(app.request.applyWater);
                    /*费用信息*/
                    var tpl = Handlebars.compile($('#charge-list-table').html());
                    var html = tpl(data);
                    $("#chargeList").html(html);
                    /*商品信息*/
                    var tp2 = Handlebars.compile($('#goodsList-table').html());
                    html = tp2(data);
                    $("#goodsList").html(html);
                    /*资料信息*/
                    var tp3 = Handlebars.compile($('#data-list-table').html());
                    html = tp3(data);
                    $("#dataList").html(html);
                    $('.goodsType').selectloader({'goodsTypeList': app.goodsTypeList});
                    $('.peopleList').selectloader({'papersTypeList': app.papersTypeList});
                    $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
                    $('#loanUseCode').selectloader({'currencyCodeList': app.loanUseCodeList});
                    $('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
                    $('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList});
                    $('#mlTyCd').selectloader({'mlTyCdList': app.makeloanmethodList});
                    $('#payCd').selectloader({'payCdList': app.paymentmethodList});
                    /*每期还款日*/
                    temp1 = '[{"name":"'+data.loanApplyContract.loanPayDay+'","code":"'+data.loanApplyContract.loanPayDay+'"}]';
                    $('#loanPayDay').selectloader({'loanPayDayList': $.parseJSON(temp1)});
                    /*金融产品*/
                    temp1 = '[{"name":"'+data.loanTypeName+'","code":"'+data.loanTypeId+'"}]';
                    $('#loanTypeId').selectloader({'loanTypeIdList': $.parseJSON(temp1)});
                    /*申请期限*/
                    var  temp1 = '[{"name":"'+data.applySub.applyPeriodLength+'","code":"'+data.applySub.applyPeriodLength+'"}]';
                    $('#applyPeriodLength').selectloader({'applyPeriodLengthList':  $.parseJSON(temp1)});
                    $('#loanTypeNo').selectloader({'loanTypeNoList': app.loanKindList});
                    /*客户经理名称*/
                    var temp = '[{"name":"'+data.cuMaNa+'","+code+":"1"}]';
                    $('#cuMaNa').selectloader({'cuMaNaList': $.parseJSON(temp)});
                    //执行利率
                    temp = '[{"name":"'+data.loanApplyContract.executionRateFirstLoan+'%","code":"'+data.loanApplyContract.executionRateFirstLoan+'"}]';
                    $('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp)});
                    /*还款间隔*/
                    temp = '[{"name":"'+data.loanApplyContract.payFreQt+'","code":"'+data.loanApplyContract.payFreQt+'"}]';
                    $('#payFreQt').selectloader({'payFreQtList': $.parseJSON(temp)});
                    /*还款方式*/
                    temp1 = '[{"name":"'+data.paymentMethod.paymentMethodName+'","code":"'+data.paymentMethod.paymentMethodId+'"}]';
                    $('#paymentMethodId').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});
                    $('#form-submit-goods').deserializeObject(data);
                    //table 里面的下拉框样式设置
                     /*信息*/
                    td_select($("#goodList_select tr"));
                    /*费用信息*/
                    td_select($("#feeList_select tr"));
                    /*资料信息*/
                    td_select($("#data_select tr"));
                    /*账户信息*/
                    var directPay=$('#payCd option:selected').val();
                    /*根据贷款类型判断，如果是耐用品消费分期，则显示购买商品信息列表*/
                    isQTNY(data);
                    if(directPay=='ZJ'){
                        //直接支付
                        var tp4= Handlebars.compile($('#direct-account-table').html());
                        html = tp4(data);
                        $("#account-show-body").html(html);
                    }else{
                        var batchPay=$('#mlTyCd').val();
                        /*放款方式：一次性放款*/
                        if(batchPay=='YC'){
                            var tp4= Handlebars.compile($('#entrusted-payment-table').html());
                            html = tp4(data);
                            $("#account-show-body").html(html);
                        }else if((batchPay=='DC')){
                            //受托支付，多次接口
                            var tp4= Handlebars.compile($('#batch-payment-table').html());
                            html = tp4(data);
                            $("#account-show-body").html(html);
                        }
                    }

                    setReadonly();
                    /*金额格式化*/
                    $(".bindEvent").each(function(){
                        $(this).next('input[type=hidden]').val($(this).val());
                        $(this).val(app.formatCurrencyM($(this).val()));
                    });
                    return;
                }
                app.alertError(data.errors.join('\n'));
            });
        };
        init();
    }(window.jQuery, window.app);
})