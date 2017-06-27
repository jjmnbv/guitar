$(function (){
    var $ = window.jQuery;
    var app = window.app;
    App.startPageLoading({animate: true});
    var init = function () {
		var request = app.request;
		$.Bpm.init({taskId: request.taskId});
		$.Bpm.initBusFormExt(function(formId, busId) {
			if (formId == 'review-loan-infor') {
				$.getJSON(app.CHECK_LOAN_INFORMATION+busId, function(data){
					if (app.isOK(data)) {
						App.stopPageLoading();
						/*商品类型*/
						app.registerTextHelper('goodsType', app.goodsTypeList, 'code', 'name');
						$('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
						$('#loanUseCode').selectloader({'loanUseCodeList': app.loanUseCodeList});
						$('#mlTyCd').selectloader({'mlTyCdList': app.makeloanmethodList});
						$('#payCd').selectloader({'payCdList': app.paymentmethodList});
						var  temp1 = '[{"name":"'+data.applySub.applyPeriodLength+'","code":"'+data.applySub.applyPeriodLength+'"}]';
						$('#deadlineForApplication').selectloader({'deadlineForApplicationList':  $.parseJSON(temp1)});
						/*金融产品*/
						temp1 = '[{"name":"'+data.loanTypeName+'","code":"'+data.loanTypeId+'"}]'
						$('#loanTypeId').selectloader({'loanTypeIdList': $.parseJSON(temp1)});
						/*还款方式*/
						temp1 = '[{"name":"'+data.paymentMethod.paymentMethodName+'","code":"'+data.paymentMethod.paymentMethodId+'"}]';
						$('#paymentMethodId').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});
						//执行利率
						var temp = '[{"name":"'+data.loanApplyContract.executionRateFirstLoan+'%","code":"'+data.loanApplyContract.executionRateFirstLoan+'"}]';
						$('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp)});
						temp = '[{"name":"'+data.loanApplyContract.payFreQt+'","code":"'+data.loanApplyContract.payFreQt+'"}]';
						$('#payFreQt').selectloader({'payFreQtList': $.parseJSON(temp)});
						var temp = '[{"name":"'+data.cuMaNa+'","+code+":"1"}]';
						$('#cuMaNa').selectloader({'cuMaNaList': $.parseJSON(temp)});
						$('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': app.executionRateFirstLoanList });
						$('#payFreQt').selectloader({'payFreQtList': app.payFreQtList });
						/*每期还款日*/
						temp1 = '[{"name":"'+data.loanApplyContract.loanPayDay+'","code":"'+data.loanApplyContract.loanPayDay+'"}]';
						$('#loanPayDay').selectloader({'loanPayDayList': $.parseJSON(temp1)});

						/*table 里面的下拉框样式设置*/
						/*导航*/
						var tp7 = Handlebars.compile($('#url-boxbg').html());
						data.taskId = request.taskId;
						html = tp7(data);
						$("#ul_div").html(html);
						/*共同申请人*/
						var tp6 = Handlebars.compile($('#aAA').html());/*将Script元素通过模板编译*/
						html = tp6(data);                               /* 模板和数据混合生成的结果*/
						$("#comPeaple").html(html);                     /*新的结果替换原来的HTML*/
						$('.peopleList').selectloader({'papersTypeList': app.papersTypeList});
						/*费用信息*/
						var tpl = Handlebars.compile($('#charge-list-table').html());
						var html = tpl(data);
						$("#chargeList").html(html);
						$('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
						/*商品信息*/
						var tp2 = Handlebars.compile($('#goodsList-table').html());
						 html = tp2(data);
						$("#goodsList").html(html);
						/*资料信息*/
						var tp3 = Handlebars.compile($('#data-list-table').html());
						html = tp3(data);
						$("#dataList").html(html);
						$('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList});
						/*还款-账号信息*/
						var tp4 = Handlebars.compile($('#repayment-list-table').html());
						html = tp4(data);
						$("#h_accountList").html(html);
						/*收款-账号信息*/
						var tp5 = Handlebars.compile($('#gathering-list-table').html());
						html = tp5(data);
						$("#s_accountList").html(html);
						/*反编译*/
						$('#review-loan-infor').deserializeObject(data);
						/* 金额格式化 */
						$(".bindEvent").each(function(){
							$(this).val(app.formatCurrencyM($(this).val()));
						});
						isQTNY(data);
						var  aObj=$("#repay");
						getRepayMethod(aObj,data,app.unformatMoney($("#applayAmount").val()));
						$('input').attr('readonly','readonly');
						$('select,textarea').attr('disabled','disabled');
						$(".bootstrap-select button,textarea").css("background-color", "#efefef");
						return;
					}
					app.alertError(data.errors.join('\n'));
				});
			}
		});
    };
    init();
    /*下一步*/
    $('#saveData').click(function () {
		window.location.href="/cb/loan-review/check-image-data.html?taskId="+app.request.taskId;
    });
});

