/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;

    +function ($, app) {
        /*贷款信息*/
        $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
        $('#loanUseCode').selectloader({'loanUseCodeList': app.loanUseCodeList});
        var init = function () {
            $.getJSON(app.TWO_LOAN_INFORMATION + app.request.applyWater, function (data) {
                if (app.isOK(data)) {
                    /*导航*/
                    var tp5 = Handlebars.compile($('#url-boxbg').html());
                    var html = tp5(data);
                    $("#ul_div").html(html);
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
                    /*账号信息*/
                    var tp4 = Handlebars.compile($('#account-list-table').html());
                     html = tp4(data);
                    $("#accountList").html(html);
							
                    var temp1 = '[{"name":"'+data.applySub.promNa+'","code":"'+data.applySub.promNo+'"}]';
                     $('#applySubPromNa').selectloader({'applySubPromNaList':  $.parseJSON(temp1)});

                     temp1 = '[{"name":"'+data.applySub.applyPeriodLength+'","code":"'+data.applySub.applyPeriodLength+'"}]';
                     $('#applyPeriodLength').selectloader({'applyPeriodLengthList':  $.parseJSON(temp1)});

                     temp1 = '[{"name":"'+data.loanTypeName+'","code":"'+data.loanTypeNo+'"}]';
                    $('#loanTypeNo').selectloader({'loanTypeNoList': $.parseJSON(temp1)});

                    temp1 = '[{"name":"'+data.loanApplyContract.executionRateFirstLoan+'","code":"'+data.loanApplyContract.executionRateFirstLoan+'"}]';
                    $('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp1)});

                    temp1 = '[{"name":"'+data.loanApplyContract.payFreQt+'","code":"'+data.loanApplyContract.payFreQt+'"}]';
                    $('#payFreQt').selectloader({'payFreQtList': $.parseJSON(temp1)});

                    temp1 = '[{"name":"'+data.loanApplyContract.loanPayDay+'","code":"'+data.loanApplyContract.loanPayDay+'"}]';
                    $('#loanPayDay').selectloader({'loanPayDayList': $.parseJSON(temp1)});
                    
                    /*还款方式*/
           					temp1 = '[{"name":"'+data.paymentMethod.paymentMethodName+'","code":"'+data.paymentMethod.paymentMethodId+'"}]';
        						$('#paymentMethodId').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});

                    $('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
                    $('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList});				

                    temp1 = '[{"name":"'+data.cuMaNa+'","code":"'+data.cuMaNa+'"}]';
                    $('#cuMaNa').selectloader({'cuMaNaList': $.parseJSON(temp1)});
									/*反序列化，将字段回显*/
                    $('#form-submit-goods').deserializeObject(data);
                    
                    /*商品类型*/
								$('.goodsType').selectloader({'goodsTypeList': app.goodsTypeList});

                    /*table 里面的下拉框样式设置*/
                    /*费用信息*/
                   // td_select($("#feeList_select tr"));
                    /*资料信息*/
                   // td_select(  $("#data_select tr"));
                    //isQTNY(data);
                    /*不可输入 置灰*/
                    setReadonly();
                    return;
                }
                app.alertError(data.errors.join('\n'));
            });
        };
        init();
    }(window.jQuery, window.app);
    /*下一步*/
    $('#saveData').click(function () {
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			window.location.href="/cb/two-levels-approval/applicant-information.html?applyWater="+applyWater;
		}else{
			if ($('#form-submit-goods').valid()) {
				submit(app.DETAIL_UPDATE, $('#form-submit-goods').serializeObject());
				var applyWater=$("input[name='applyWater']").val();
				window.location.href="/cb/two-levels-approval/applicant-information.html?applyWater="+applyWater;
			}
			return false;
		}
    });
});



