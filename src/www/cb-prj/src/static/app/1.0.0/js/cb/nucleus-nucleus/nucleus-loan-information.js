/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
	var responseData;
    +function($, app) {
        //显示加载状态
        App.startPageLoading({animate: true});

		var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'form-submit-goods') {
					$.getJSON(app.NUCLEUS_LOAN_INFORMATION + busId, function (data) {
						if (app.isOK(data)) {
							responseData=data;
							//结束加载状态
							App.stopPageLoading();
							/*导航*/
							data.taskId = request.taskId;
							var tp5 = Handlebars.compile($('#url-boxbg').html());
							var html = tp5(data);
							$("#ul_div").html(html);
							/*账号用途*/
							app.registerTextHelper('acUsCd', app.useCodeList, 'code', 'name');
							/*商品类型*/
							app.registerTextHelper('goodsType', app.goodsTypeList, 'code', 'name');
							/*贷款类型*/
							$('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
							/*贷款用途*/
							$('#loanUseCode').selectloader({'loanUseCodeList': app.loanUseCodeList});
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
							/*促销方案*/
							var temp1 = '[{"name":"'+data.applySub.promNa+'","code":"'+data.applySub.promNo+'"}]';
							$('#applySubPromNa').selectloader({'applySubPromNaList':  $.parseJSON(temp1)});
							/*申请期限*/
							temp1 = '[{"name":"'+data.applySub.applyPeriodLength+'","code":"'+data.applySub.applyPeriodLength+'"}]';
							$('#deadlineForApplication').selectloader({'deadlineForApplicationList':  $.parseJSON(temp1)});
							/*金融产品*/
							temp1 = '[{"name":"'+data.loanTypeName+'","code":"'+data.loanTypeId+'"}]';
							$('#loanTypeId').selectloader({'loanTypeIdList': $.parseJSON(temp1)});
							/*执行年利率*/
							temp1 = '[{"name":"'+data.loanApplyContract.executionRateFirstLoan+'%","code":"'+data.loanApplyContract.executionRateFirstLoan+'"}]';
							$('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp1)});
							/*还款间隔*/
							temp1 = '[{"name":"'+data.loanApplyContract.payFreQt+'","code":"'+data.loanApplyContract.payFreQt+'"}]';
							$('#payFreQt').selectloader({'payFreQtList': $.parseJSON(temp1)});
							/*审批期限*/
							temp1 = '[{"name":"'+data.applySub.approvalTerm+'","code":"'+data.applySub.approvalTerm+'"}]';
							$('#approvalTerm').selectloader({'approvalTermList': $.parseJSON(temp1)});
							/*每期还款日*/
							temp1 = '[{"name":"'+data.loanApplyContract.loanPayDay+'","code":"'+data.loanApplyContract.loanPayDay+'"}]';
							$('#loanPayDay').selectloader({'loanPayDayList': $.parseJSON(temp1)});
							/*费用类型*/
							$('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
							/*资料类型*/
							$('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList});
						   /*还款方式*/
							temp1 = '[{"name":"'+data.paymentMethod.paymentMethodName+'","code":"'+data.paymentMethod.paymentMethodId+'"}]';
							$('#paymentMethodId').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});
							/*客户经理名称*/
							temp1 = '[{"name":"'+data.cuMaNa+'","code":"'+data.cuMaNa+'"}]';
							$('#cuMaNa').selectloader({'cuMaNaList': $.parseJSON(temp1)});
							/*材料收集方式*/
							$('.materialCollectionCode').selectloader({'materialCollectionCodeList': app.materialCollectionCodeList});
							/*材料用途*/
							$('.materialPhCode').selectloader({'materialPhCodeList': app.materialPhCodeList});
							//审批期限接口获取
							ApplyPeriod(data.loanTypeId);
							
							/*反序列化，将字段回显*/
							$('#form-submit-goods').deserializeObject(data);
							/* 金额格式化 */
							$(".bindEvent").each(function(){
								$(this).val($(this).next('input[type=hidden]').val());
								if($(this).val!=""){
									$(this).val(app.formatCurrencyM($(this).val()));
								}
							});
							/*根据贷款类型判断商品列表是否显示等 判断显示问题*/
							isQTNY(data);
							/*不可输入 置灰*/
							setReadonly();
							//放开需要保存的字段
							$(".needSent").removeAttr("disabled");
							$(".needSent,.needSent button").css("background-color", "");
							$('#form-submit-goods').validate();
							//查询最大最小金额
							queryMinAndMaxAm(data.loanTypeId);
							return;
						}
						app.alertError(data.errors.join('\n'));
					});
				}
			});
		};
        init();
    } (window.jQuery, window.app);
	//试算
	$("#repay").click(function () {
		var res=responseData;
		var obj =$("#repay");
		/*
		 *获取页面中的数据信息
		 * */
		var payMethodId, applayAmount, applyWater, exeRate, plOption, payDay, promNo;
		payMethodId = $("#paymentMethodId").val();
		applayAmount = app.unformatMoney($("#approvalAmount").val());
		applyWater = $("#hiddenWater").val();
		exeRate = $("#executionRateFirstLoan").val();
		plOption = $("#applyPeriodLength").val();
		payDay = $("#loanPayDay").val();
		promNo = $("#promNo").val();
		if (typeof (promNo) == "undefined") {
			if (res.applySub.promNo != null) {
				promNo = res.applySub.promNo;
			} else {
				promNo = "";
			}
		}
		if (payMethodId == "" || typeof(payMethodId) == 'undefined') {
			payMethodId = res.paymentMethod.paymentMethodId;
			if (payMethodId == "") {
				obj.attr('href', '');
				app.alertError("还款方式为空！");
				return;
			}
		}
		if (applayAmount == "") {
			obj.attr('href', '');
			app.alertError("申请金额不正确！");
			return;
		}
		if (applyWater == "" || typeof(applyWater) == "undefined") {
			applyWater = res.applyWater;
			if (applyWater == "") {
				obj.attr('href', '');
				app.alertError("申请编号为空！");
				return;
			}
		}
		if (exeRate == "") {
			exeRate = res.exeRate;
			if (exeRate == "") {
				obj.attr('href', '');
				app.alertError("执行利率为空！");
				return;
			}
		}
		if (plOption == "" || typeof(plOption) == "undefined") {
			if (res.applySub.applyPeriodLength != -1) {
				plOption = res.applySub.applyPeriodLength;
			}
			if (plOption == "") {
				obj.attr('href', '');
				app.alertError("请选择申请期限后再测算！");
				return;
			}
		}
		if (payDay == "") {
			payDay = res.payDay;
			if (payDay == "" || typeof(payDay) == "undefined") {
				obj.attr('href', '');
				app.alertError("每期还款日为空！");
				return;
			}
		}
		/*用于详情录入贷款信息，以上信息都不为空，查看还款计划*/
		if (obj.attr('href') == "") {
			obj.attr('href', '#repayMethod');
		}
		var data = {
			apTr: applyWater,
			payMethodId: payMethodId,
			applayAmount: applayAmount,
			exeRate: exeRate,
			promNo: promNo,
			plOption: plOption,
			payDay: payDay
		};
		$.getJSON(app.AJAX_TENTATIVECALCULATION, data, function (res) {
			if (app.isOK(res)) {
				/*还款方案列表*/
				var tp3 = Handlebars.compile($('#repay-method').html());
				html = tp3(res);
				$("#mes-list").html(html);
				$("#managerListModal").find('form').deserializeObject(res);
				/*金额格式化显示*/
				$("#managerListModal").find(".bindEvent").each(function () {
					$(this).val(app.formatCurrencyM($(this).val()));
				});
				return;
			}
			app.alertError(res.errors.join('\n'));
		});
	});
    	/*根据产品id查询申请期限*/
	function ApplyPeriod(id){
		$.ajaxSettings.async = false; 
		$.getJSON(app.AJAX_APPLYPERIOD + id , function (res) {
        	 if (app.isOK(res)) {
        	 	var tempSQQX = "";
        	 	if(0==res.notSepTerm){
        	 		//为0 不分期 将最大最小期限补满回显
        	 		tempSQQX='[';
        	 		for(var i = res.minPlQt;i<=res.maxPlQt;i++){
        	 			if(i==res.maxPlQt){
        	 				tempSQQX +='{"name":"'+i+'","code":"'+i+'"}]';
        	 			}else{
        	 				tempSQQX = tempSQQX+'{"name":"'+i+'","code":"'+i+'"},';
        	 			}
        	 		}
        	 	}else{//为1 分期，将期数分隔显示
        	 		var str = res.plOp;
        	 		if(str != null && str != undefined){
        	 			tempSQQX='[';
        	 			var arr = str.split(",");
	        	 		for(var i=0;i<arr.length;i++){
	        	 			if(i==(arr.length-1)){
	        	 				tempSQQX = (tempSQQX +'{"name":"'+arr[i]+'","code":"'+arr[i]+'"}]');
	        	 			}else{
	        	 				tempSQQX = (tempSQQX + '{"name":"'+arr[i]+'","code":"'+arr[i]+'"},');
	        	 			}
	        	 		}
        	 		}
        	 	}
        	
        	 	//申请期限
        	 	if(tempSQQX!=""){
        	 		$('#approvalTerm').html('<option value="">请选择...</option>');
        			$('#approvalTerm').selectloader({'approvalTermList':$.parseJSON(tempSQQX)});
        	 	}        	 	       
        	}
			$.ajaxSettings.async = true; 
        });
	}
	var opinionFormId = "";
	var saveHandle = function (formIdArr) {
		var flag = true;
		var item = $("#form-submit-goods");
		if(!item.valid()){
			return false;
		}
		var saveResult = save(app.NUCLEUS_UPDATE_EXAM_DATA, $('#form-submit-goods').serializeObject());

		$(item).prop('action', app.NUCLEUS_INFORMATION_UPDATE);	
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
    $('#saveData').click(function () {
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			window.location.href="/cb/nucleus-nucleus/nucleus-applicant-information.html?&taskId="+app.request.taskId;
		}else{
			var formIdArr = [];
			var flag = saveHandle(formIdArr);
			if (flag) {
				window.location.href="/cb/nucleus-nucleus/nucleus-applicant-information.html?&taskId="+app.request.taskId;
			}else{
				app.alertError("提交失败");
			}
		}
        return false;
    });
	/*验证审批金额*/
	$("#approvalAmount").blur(function(){
		var   maxLoAmData=$("#approvalAmount").data("maxLoAm");
		var   minLoAmData=$("#approvalAmount").data("minLoAm");
		var  approvalAmount=app.unformatMoneyBj($("#approvalAmount").val());
		if(approvalAmount){
			if(approvalAmount>maxLoAmData){
				app.alertError("审批金额不能大于产品最大金额"+maxLoAmData);
				$("#approvalAmount").val("");
			}else if(approvalAmount<minLoAmData){
				app.alertError("审批金额不能小于产品最小金额"+minLoAmData);
				$("#approvalAmount").val("");
			}
		}
	});
});



