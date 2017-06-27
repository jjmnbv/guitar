/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    App.startPageLoading({animate: true});
    +function($, app) {
        var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'form-submit-call') {
					$.getJSON(app.NUCLEUS_LOAN_INFORMATION+busId, function(data){
						if (app.isOK(data)) {
							App.stopPageLoading();
							/*导航*/
							var tp5 = Handlebars.compile($('#url-boxbg').html());
							data.taskId = request.taskId;
							var html = tp5(data);
							$("#ul_div").html(html);
							/*账号用途*/
							app.registerTextHelper('acUsCd', app.accountuseList, 'code', 'name');
							/*商品类型*/
							app.registerTextHelper('goodsType', app.goodsTypeList, 'code', 'name');
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
							//贷款类型
							$('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
							/*金融产品*/
							temp1 = '[{"name":"'+data.loanTypeName+'","code":"'+data.loanTypeId+'"}]';
							$('#loanTypeId').selectloader({'loanTypeIdList': $.parseJSON(temp1)});
							/*申请期限*/
							temp1 = '[{"name":"'+data.applySub.applyPeriodLength+'","code":"'+data.applySub.applyPeriodLength+'"}]';
							$('#deadlineForApplication').selectloader({'deadlineForApplicationList':  $.parseJSON(temp1)});
							/*执行年利率*/
							temp1 = '[{"name":"'+data.loanApplyContract.executionRateFirstLoan+'%","code":"'+data.loanApplyContract.executionRateFirstLoan+'"}]';
							$('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp1)});
							/*还款间隔*/
							temp1 = '[{"name":"'+data.loanApplyContract.payFreQt+'","code":"'+data.loanApplyContract.payFreQt+'"}]';
							$('#payFreQt').selectloader({'payFreQtList': $.parseJSON(temp1)});
							//贷款用途
							$('#loanUseCode').selectloader({'loanUseCodeList': app.loanUseCodeList });
							/*促销方案*/
							var temp1 = '[{"name":"'+data.applySub.promNa+'","code":"'+data.applySub.promNo+'"}]';
							$('#applySubPromNa').selectloader({'applySubPromNaList':  $.parseJSON(temp1)});
							/*客户经理名称*/
							temp1 = '[{"name":"'+data.cuMaNa+'","code":"'+data.cuMaNa+'"}]';
							$('#cuMaNa').selectloader({'cuMaNaList': $.parseJSON(temp1)});
							//费用类型
							$('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList });
							//材料类型
							$('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList });
							/*还款方式*/
							temp1 = '[{"name":"'+data.paymentMethod.paymentMethodName+'","code":"'+data.paymentMethod.paymentMethodId+'"}]';
							$('#paymentMethodId').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});
							$('#form-submit-call').deserializeObject(data);
							/* 金额格式化 */
							$(".bindEvent").each(function(){
								$(this).val(app.formatCurrencyM($(this).val()));
							});
							/*table 里面的下拉框样式设置*/
							/*费用信息*/
							td_select($("#feeList_select tr"));
							/*资料信息*/
							td_select(  $("#data_select tr"));
							/*根据贷款类型判断商品列表是否显示等 判断显示问题*/
							isQTNY(data);
							/*不可输入 置灰*/
							/*setReadonly();*/
							$('input').attr('readonly','readonly');
							$('select,textarea').attr('disabled','disabled');
							$(".bootstrap-select button,textarea").css("background-color", "#efefef");
							var  aObj=$("#repay");
							getRepayMethod(aObj,data,app.unformatMoney($("#approvalAmount").val()));
							return;
						}
						app.alertError(data.errors.join('\n'));
					});
				}
			});
        };
        init();
    } (window.jQuery, window.app);
	
    /*下一步*/
    $('#saveData').click(function () {
		window.location.href="/cb/call-return-visit/call-applicant-information.html?taskId="+app.request.taskId;
    });
});



