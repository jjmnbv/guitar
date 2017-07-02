+function ($, app) {
	/*账号用途*/
	app.registerTextHelper('acUsCd', app.useCodeList, 'code', 'name');
	/*账号类型*/
	temp1 = '[{"name":"对公账户","code":"DG"},{"name":"个人账户","code":"GR"}]'
	app.registerTextHelper('acTyCd', $.parseJSON(temp1), 'code', 'name');
	var numTep;
	//是否已签订合同
	var isContract = false;
	var init = function () {
		var request = app.request;
		$.Bpm.init({taskId: request.taskId});
		$.Bpm.initBusFormExt(function(formId,busId){
			if(formId == 'contract-form'){
				$.getJSON(app.CONTRACT_VIEW+busId, function(res) {
					if (app.isOK(res)) {
						/*导航*/
						res.taskId = request.taskId;
						numTep = res.applySub.approvalTerm;
						var tp5 = Handlebars.compile($('#url-boxbg').html());
						var html = tp5(res);
						$("#ul_div").html(html);
						var taskStatus = $.Bpm.findTaskStatus();
						if (taskStatus != "COMPLETED" && taskStatus != "SUSPEND" && taskStatus != "REFUSED") {
							if (res.loanApplyContract.loCoMakeYn == "Y") {
								isContract = true;
								$("#singed_contract").attr("disabled", true);
							} else {
								$("#nextPage,#printPreview").attr("disabled", true);
							}
						}
						/*贷款用途选择其他时，贷款其他用途显示*/
						var loanUseCode = res.loanUseCode;
						if (loanUseCode == "QT") {
							$('.loanUseExplain-body').css("display", "inline-block");
						} else {
							$('.loanUseExplain-body').css("display", "none");
						}
						/*共同申请人*/
						var tpl = Handlebars.compile($('#peopleList-template').html());
						var html = tpl(res);
						$("#comPeaple").html(html);
						/*资料清单*/
						var tp2 = Handlebars.compile($('#managerlist-page-template').html());
						html = tp2(res);
						$("#managerTable").html(html);
						/*账号信息*/
						var tp4 = Handlebars.compile($('#account-list-table').html());
						html = tp4(res);
						$("#acocuntList").html(html);

						/*查看贷款详细信息弹框-费用信息*/
						var tp5 = Handlebars.compile($('#charge-list-table').html());
						html = tp5(res);
						$("#chargeList").html(html);

						/*查看贷款详细信息弹框-资料信息*/
						var tp6 = Handlebars.compile($('#managerlist-page-template').html());
						html = tp6(res);
						$("#dataList").html(html);
						/*证件类型*/
						$('.papersTypeCodeClass').selectloader({'papersTypeCodeStore': app.papersTypeCodeList});
						/*贷款类型*/
						$('.loanKindCodeList').selectloader({'loanKindCodeList': app.loanKindCodeList});
						/*贷款用途*/
						$('.loanUseCodeList').selectloader({'loanUseCodeList': app.loanUseCodeList});
						/*资料类型*/
						$('.materialTypeCode').selectloader({'papersTypeCodeStore': app.matTyCd});
						/*资料用途*/
						$('.materialPhCode').selectloader({'materialPhStore': app.matPhCd});
						/*收集方式*/
						$('.materialCollection').selectloader({'materialCollectionStore': app.matColCd});
						/*还款间隔*/
						var temp1 = '[{"name":"' + res.loanApplyContract.payFreQt + '","code":"' + res.loanApplyContract.payFreQt + '"}]'
						$('.payFreQt').selectloader({'payFreQtStore': $.parseJSON(temp1)});
						/*放款方式*/
						temp1 = '[{"name":"立即放款","code":"Y"},{"name":"分期放款","code":"N"}]'
						$('#paymentMethodId').selectloader({'paymentMethodIdStore': $.parseJSON(temp1)});
						/*扣款方式*/
						temp1 = '[{"name":"' + res.paymentMethod.paymentMethodName + '","code":"' + res.paymentMethod.paymentMethodName + '"}]'
						$('#paymentMethodName').selectloader({'paymentMethodNameStore': $.parseJSON(temp1)});
						/*营销方案*/
						temp1 = '[{"name":"' + res.applySub.promNa + '","code":"' + res.applySub.promNo + '"}]'
						$('.promNoList').selectloader({'promNoList': $.parseJSON(temp1)});
						/*审批期限*/
						temp1 = '[{"name":"' + res.applySub.approvalTerm + '","code":"' + res.applySub.approvalTerm + '"}]'
						$('#approvalTerm').selectloader({'approvalTermStore': $.parseJSON(temp1)});

						/*还款方式*/
						temp1 = '[{"name":"' + res.paymentMethod.paymentMethodName + '","code":"' + res.paymentMethod.paymentMethodId + '"}]';
						$('.paymentMethodIdList').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});
						/*申请期限*/
						temp1 = '[{"name":"' + res.applySub.applyPeriodLength + '","code":"' + res.applySub.applyPeriodLength + '"}]';
						$('#applyPeriodLength').selectloader({'applyPeriodLengthList': $.parseJSON(temp1)});
						/*金融产品*/
						temp1 = '[{"name":"' + res.loanTypeName + '","code":"' + res.loanTypeNo + '"}]';
						$('.loanTypeNoList').selectloader({'loanTypeNoList': $.parseJSON(temp1)});
						/*执行年利率*/
						temp1 = '[{"name":"' + res.loanApplyContract.executionRateFirstLoan + '%","code":"' + res.loanApplyContract.executionRateFirstLoan + '"}]';
						$('.executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp1)});
						/*费用类型*/
						$('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
						/*费用收取类型*/
						$('.paymentType').selectloader({'paymentTypeList': app.paymentTypeList});
						$('#contract-form').deserializeObject(res);
						$('#modal_loan_info').deserializeObject(res);
						/*金额格式化*/
						$(".bindEvent").each(function () {
							$(this).val(app.formatCurrencyM($(this).val()));
						});
						setReadonly();
						//如果合同已经签订，致灰
						if (res.loanApplyContract.loCoMakeYn == 'Y') {
							$("#singed_contract").attr('disabled', true);
							$("#contractDate").prop("disabled", true);
							$("#contractDate").next().find("button").prop("disabled", true);
							$("#nextPage,#printPreview").attr("disabled", false);
						} else {
							$('.remove-disable').removeAttr('disabled');
							$(".remove-disable").css("background-color", "");
						}
						isQTNY(res);
						td_select_more($("#acocuntList tr"));
						td_select_more($("#managerTable tr"));
						td_select_more($("#chargeList tr,#dataList tr"));
						var contractDate = $("#contractDate").val();
						calDate(contractDate);
						return;
					}
					app.alertError(res.errors.join('\n'));
				});
			}
		});
	};
	init();
	$("#contractDate").change(function(){
		var dateStart = $(this).val();
		calDate(dateStart);
	});
	function calDate(dateStart){
		if(dateStart != ""){
			var dates = dateStart.split("-");
			var yearTemp =  dates[0] * 1;
			var monthTemp =  dates[1] * 1 + numTep * 1;
			if(monthTemp > 12 ){
				if(monthTemp%12  != 0){
					yearTemp = yearTemp + Math.floor(monthTemp/12);
					monthTemp = monthTemp%12;
				}else{
					yearTemp = yearTemp + Math.floor(monthTemp/12) - 1;
					monthTemp="12";
				}
			}
			if(monthTemp < 10){
				monthTemp = "0" + monthTemp;
			}
			$("#contractDateEnd").val(yearTemp + "-" + monthTemp + "-" + dates[2]);
		}else {
			$("#contractDateEnd").val("");
		}
	}
	var opinionFormId = "";
	var saveHandle = function (formIdArr) {
		var flag = true;
		var item = $("#contract-form");
		if(!item.valid()){
			return false;
		}

		var saveResult = save(app.CONTRACT_UPDATE, $('#contract-form').serializeObject());

		$(item).prop('action', app.DETAIL_UPDATE_PEOPLES);
		var param = $(item).serializeObject();
		var applyWater=$("input[name='applyWater']").val();
		formIdArr.push({ formId: $(item).data('viewIdname'), id: applyWater });
		if (formIdArr.length > 0) {
			if (!$.Bpm.postFormIds(formIdArr,opinionFormId)) {
				flag = false;
			}
		}
		return flag;
	};

	/*下一步*/
	$(document).on('click','#nextPage',function(){
		var taskStatus = $.Bpm.findTaskStatus();
		$(this,"#singed_contract","#printPreview").attr('disabled','true');
		if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			window.location.href="/cb/contract/contract-image-data.html?taskId="+app.request.taskId;
		}else{
			if(isContract){
				var item = $("#contract-form");
				var formIdArr = [];
				var flag = saveHandle(formIdArr);
				if (flag) {
					if(item.valid()){
						window.location.href="/cb/contract/contract-image-data.html?taskId="+app.request.taskId;
						$(this,"#singed_contract","#printPreview").attr('disabled','true');
					}else{
						app.alertError("请检查输入项！");
						$(this,"#singed_contract","#printPreview").attr('disabled','false');
					}
				}else{
					app.alertError("提交失败!");
					$(this,"#singed_contract","#printPreview").attr('disabled','false');
				}
			}else{
				app.alertError("您还未签订合同!");
			}
		}
		return false;
	});
	//签订按钮
	$("#singed_contract").click(function(){
		var taskStatus = $.Bpm.findTaskStatus();
		if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			app.alertError("当前状态不可执行签订操作！");
		}else{
			var $this=this;
			var  applyWater=$("#applyWaterHidden").val();
			if(!$("#contract-form").valid()){
				app.alertError("请检查输入项！");
				return false;
			}else if(""!=applyWater) {
				var  contractDate=$("#contractDate").val();
				var  contractDateEnd=$("#contractDateEnd").val();
				var  pushParams={
					applyWater:applyWater,
					contractDate:contractDate,
					contractDateEnd:contractDateEnd
				};

				app.$post(app.CONTRACT_PUSH,pushParams).done(function (data) {
					if (app.isOK(data)) {
						$($this).attr('disabled',true)
						$("#contractDate").prop("disabled",true);
						$("#contractDate").next().find("button").prop("disabled",true);
						isContract = true;
						$("#nextPage,#printPreview").attr("disabled",false);
						app.alertOK('签订成功！');
					} else {
						app.alertError(data.errors.join('\n'));
					}
				});
			}

		}
	});
	/*打印预览*/
	$("#printPreview").click(function(){
		var  applyWater=$("#applyWaterHidden").val();
		if(""!=applyWater) {
			var data = {
				applyWater: applyWater
			};
			app.$post(app.CONTRACT_PRINT, data).done(function (data) {
				if (app.isOK(data)) {
					$("#print_contract").html(data.htmlText);
				} else {
					app.alertError(data.errors.join('\n'));
				}
			});
		}
	});

}(window.jQuery, window.app);
