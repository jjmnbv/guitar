/**
 * Created by Administrator on 2016/12/12 0012.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;
	var request = app.request;
	var  percentData;
	var startData;
    +function($, app) {
        /**
         * 初始化数据
         */
         /*贷款类型*/
        $('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
        /*贷款用途*/
        $('#loanUseCode').selectloader({'loanUseCodeList': app.loanUseCodeList});
        /*每期还款日*/
        $('#loanPayDay').selectloader({'loanPayDayList': app.wageDateList});
        /*进件类型*/
        $('#inletTypeCode').selectloader({'inletTypeCodeList': app.inletTypeCodeList});
        var init = function () {
			$.ajaxSettings.async=false;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'form-submit-loan-information') {
					$.getJSON(app.LOAN_INFORMATION + busId, function (data) {
						if (app.isOK(data)) {
							/*商品信息*/
							var tpl = Handlebars.compile($('#goodsList-template-set').html());
							var html = tpl(data);
							$("#good-list-isshow").html(html);
							/*资料信息*/
							var tp3 = Handlebars.compile($('#data-list-table').html());
							 html = tp3(data);
							$("#dataList").html(html);
							/* /*账号信息*/
							var tp4 = Handlebars.compile($('#accountList-template-set').html());
							var htm4 = tp4(data);
							$("#table-accountList-set").html(htm4);
							/*贷款用途为其他时，贷款其他用途显示*/
							var loanUseCode = data.loanUseCode;
							if (loanUseCode != "QT") {
								$("#loanUseExplain").css("display", "none");
							}
							/*根据贷款类型判断，如果是耐用品消费分期，则显示购买商品信息列表*/
							isQTNY(data);
							/*促销方案*/
							getPromById(data.loanTypeId);
							/*金融产品*/
							temp1 = '[{"name":"'+data.loanTypeName+'","code":"'+data.loanTypeId+'"}]'
							$('#loanTypeNo').selectloader({'loanTypeNoList': $.parseJSON(temp1)});
							$("#loanTypeName").val($("#loanTypeNo option:selected").text());
							/*申请期限、还款方式*/
							ApplyPeriod(data.loanTypeId);
							/*还款间隔*/
							temp1 = '[{"name":"1","code":"1"}]';
							$('#payFreQt').selectloader({'payFreQtList': $.parseJSON(temp1)});

							 /*资料类型*/
							$('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList});
							/*资料用途*/
							$('.materialPhCode').selectloader({'materialPhCodeList': app.materialPhCodeList});
							/*是否*/
							$('.isCollect').selectloader({'isCollectList': app.yesOrNoList});
							/*收集方式*/
							$('.materialCollectionCode').selectloader({'materialCollectionCodeList': app.materialCollectionCodeList});
							/*Script*/
							/*费用类型*/
							$('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
							/*费用收取类型*/
							$('.paymentType').selectloader({'paymentTypeList': app.paymentTypeList});
							/*账号类型*/
							temp1='[{"name":"个人账户","code":"GR"},{"name":"对公账户","code":"DG"}]';
							$('.accountType').selectloader({'accountTypeList': $.parseJSON(temp1)});
							/*账号用途*/
							$('.useCode').selectloader({'useCodeList': app.useCodeList});
							/*账户代码*/
							$('.acCdList').selectloader({'acCdTypeList': app.acCdList});
							/*开户银行*/
							$('.bankName').selectloader({'bankNameList': app.bankNameList});
							/*商品类型*/
							$('.goodsType').selectloader({'goodsTypeList': app.goodsTypeList});
							
							if(data.loanApplyContract.executionRateFirstLoan * 1 >= 0){
								temp1 = '[{"cuRa":"'+data.loanApplyContract.executionRateFirstLoan+'%","pmId":"'+data.loanApplyContract.executionRateFirstLoan+'"}]'
							}else{
								temp1 = '[{"cuRa":"请选择...","pmId":""}]'
								}
							$('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(temp1)});
							/*客户经理*/
							buildCuMaSelector(data.cuMaLoginNa);

							$('#form-submit-loan-information').deserializeObject(data);

							/*还款方式回显*/
							var  paymentMe  = $('#paymentHidden').val();
							$('#paymentMethodId').val(paymentMe);
							/*执行年利率回显*/
							$('#executionRateFirstLoan').val($('#loanApplyContractFirstLoan').val())
							/*首付比例,产品的首付比例是非必填的*/
							if(!(data.paymentMethod.firstPaymentRatio === null || data.paymentMethod.firstPaymentRatio === undefined && data.paymentMethod.firstPaymentRatio=== "")){
								percentData = data.paymentMethod.firstPaymentRatio;
							}
							/*还款方式*/
							$("#goodsBuyAmount").attr("readonly","readonly");
							if($('#paymentMethodId').val()==null){
								$('#paymentMethodId').val("");
							}
							startData=1;
							findFeeAndMatList();
							/*将贷款类型和金融产品变为不可编辑*/
							$("#loanTypeNo, .add-disabled,#loanKindCode").attr("disabled","disabled");
							$('#form-submit-loan-information').validate();
							$('#paymentMethodId,#executionRateFirstLoan').selectpicker('refresh');
							/*金额格式化*/
							$(".bindEvent").each(function(){
								$(this).val($(this).next('input[type=hidden]').val());
								if($(this).val()!=""){
									$(this).val(app.formatCurrencyM($(this).val()));
								}
							});
							return;
						}
						app.alertError(data.errors.join('\n'));
					});
				}
			});
			$.ajaxSettings.async=true;
        };
        init();
    } (window.jQuery, window.app);

//申请金额失去焦点的时候，返回计算后的费用信息和材料信息，保存到数据库
	$("#applayAmount").change(function(){
		startData=0;
		findFeeAndMatList();
	});
	//促销方案改变的时候，返回计算后的费用信息和材料信息，保存到数据库
	$("#promNo").change(function() {
		if (""!=$("#applayAmount").val()) {
			findFeeAndMatList();
			$("#applayAmount").val(app.formatCurrencyM($("#applayAmount").next().val()))
		}
	});
	/**
	 * 查找费用和材料列
	 */
	function  findFeeAndMatList(){
		var applyAmount;
		if(startData==1){
			applyAmount=$("#applayAmount").parents(".form-group").find("input[type=hidden]").val();
		}else {
			applyAmount= app.unformatMoney($("#applayAmount").val());
		}
        var   maxLoAmData=$("#applayAmountMax").data("maxLoAm");
        var   minLoAmData=$("#applayAmountMin").data("minLoAm");
        if(applyAmount==""){
            applyAmount=0;
        }else if(applyAmount < minLoAmData){
            applyAmount =minLoAmData;
        }else if(applyAmount > maxLoAmData){
            applyAmount = maxLoAmData;
        }
        //申请金额
        $( "#applayAmount").next().val(applyAmount);
        $( "#applayAmount").val(applyAmount);
		var param={
			//促销编号
			promNo:$("#promNo").val(),
			//申请编号
			applyWater:$("#hiddenWater").val(),
			//申请金额
			applyMoney:applyAmount,
			//产品编号
			loanTypeId:$("#loanTypeNo").val()
		};
		//app.$post(app.FINDFEELIST_MATLIST, param).done(function (data) {
		//	if (app.isOK(data)) {
		//		var tp2 = Handlebars.compile($('#charge-list-table').html());
		//		var htm2 = tp2(data);
		//		$("#chargeList").html(htm2);
		//	}
		//});
		$.getJSON(app.FINDFEELIST_MATLIST+"?loanTypeId=" + $("#loanTypeNo").val()+"&applyMoney="+applyAmount + "&applyWater=" + $("#hiddenWater").val() + "&promNo=" + $("#promNo").val(), function (dataTemp) {
			if (app.isOK(dataTemp)) {
				var tp2 = Handlebars.compile($('#charge-list-table').html());
				var htm2 = tp2(dataTemp);
				$("#chargeList").html(htm2);
			}

		});
		return applyAmount;
	}

	var customerList;
	function buildCuMaSelector(cuMaLoginNa){
		$.getJSON(app.CUSTOMER_LIST, function (res) {
			if (app.isOK(res)) {
				$('#cuMaLoginNa').html('<option value="">请选择...</option>');
				$('#cuMaLoginNa').selectloader({'cuMaNaList': res.content});
				$('#cuMaLoginNa').selectpicker('val',cuMaLoginNa);
				return;
			}
			app.alertError(res.errors.join('\n'));
		});
	}

	//试算
	$("#repay").click(function(){
		var obj=$("#repay");
		/*
		 *获取页面中的数据信息
		 * */
		var payMethodId, applayAmount, applyWater, exeRate, plOption, payDay, promNo;
		payMethodId = $("#paymentMethodId").val();
		applayAmount = app.unformatMoney($("#applayAmount").val());
		applyWater = $("#hiddenWater").val();
		exeRate = $("#executionRateFirstLoan").val();
		plOption = $("#applyPeriodLength").val();
		payDay = $("#loanPayDay").val();
		promNo = $("#promNo").val();
		if (typeof (promNo) == "undefined") {
				promNo = "";
		}
		if (payMethodId == "" || typeof(payMethodId) == 'undefined') {
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
			if (applyWater == "") {
				obj.attr('href', '');
				app.alertError("申请编号为空！");
				return;
			}
		}
		if (exeRate == "") {
			if (exeRate == "") {
				obj.attr('href', '');
				app.alertError("执行利率为空！");
				return;
			}
		}
		if (plOption == "" || typeof(plOption) == "undefined") {
			if (plOption == "") {
				obj.attr('href', '');
				app.alertError("请选择申请期限后再测算！");
				return;
			}
		}
		if (payDay == "") {
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



	//修改客户经理
	$("#cuMaLoginNa").change(function() {
		var seleVal = $("#cuMaLoginNa option:selected").text();
		$("#cuMaNa").val(seleVal);

		$.getJSON(app.AJAX_GET_ORGAN+"?userId="+$(this).val(), function (res) {
			if (app.isOK(res)) {
				if( !(res.maBrNo === null || res.maBrNo === undefined && res.maBrNo== "")){
					$('#organizationNo').val(res.maBrNo);
					return true;;
				}else{
					app.alertError("该客户经理所属的机构没有配置对应的管理机构!");
					return false;
				}
			}
			app.alertError(res.errors.join('\n'));
		});
	});

	/*根据产品id查促销名称*/
	function getPromById(id){
		 $.ajaxSettings.async = false; 
		 $.getJSON(app.AJAX_GETPROMS + id , function (result) {
        	 if (app.isOK(result)) {
        		$('#promNo').html('<option value="">请选择...</option>');
        		$('#promNo').selectloader({'promNoList':$.parseJSON(JSON.stringify(result.content))});
        	}else{
				 app.alertError(res.errors.join('\n'));
			 }
			$.ajaxSettings.async = true;
        });
	}
	/*给隐藏域促销名称赋值*/
	$("#promNo").change(function(){
		$("#promNa").val($("#promNo option:selected").text());
	});
	//修改执行利率的值
	$("#executionRateFirstLoan").change(function(){
		$("#executionRateFirstLoan").val($("#executionRateFirstLoan option:selected").text());

	});
    
	/*根据产品id查询申请期限*/
	function ApplyPeriod(id){
		$.ajaxSettings.async = false; 
		$.getJSON(app.AJAX_APPLYPERIOD + id , function (res) {
        	 if (app.isOK(res)) {
                 //将最大最小申请金额放到界面中
                 $("#applayAmountMax").data("maxLoAm",res.maxLoAm);
                 $("#applayAmountMin").data("minLoAm",res.minLoAm);
        	 	var tempSQQX = "";
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
        	 	//还款方式回显
        	 	var tempHK = "";
        	 	for(var i = 0;i<res.content.length;i++){
        	 		tempHK = "[";
        	 		if(i==(res.content.length-1)){
        	 			tempHK+='{"name":"'+res.content[i].pmNa+'","code":"'+res.content[i].pmId+'"}]';
        	 		}else{
        	 			tempHK+='{"name":"'+res.content[i].pmNa+'","code":"'+res.content[i].pmId+'"},';
        	 		}
        	 	}
        	 	//申请期限
        	 	if(tempSQQX!=""){
        	 		$('#applyPeriodLength').html('<option value="">请选择...</option>');
        			$('#applyPeriodLength').selectloader({'applyPeriodLengthList':$.parseJSON(tempSQQX)});
        	 	}
        	 	
        	 	//还款方式
        	 	if(tempHK!=""){
        	 		$('#paymentMethodId').html('<option value="">请选择...</option>');
        			$('#paymentMethodId').selectloader({'paymentMethodIdList':$.parseJSON(tempHK)});
        	 	}
				 //执行利率
				 var tempExecutionRate = "";
				 for(var i = 0;i<res.content.length;i++){
					 tempExecutionRate = "[";
					 if(i==(res.content.length-1)){
						 tempExecutionRate+='{"cuRa":"'+res.content[i].cuRa+'%","pmId":"'+res.content[i].pmId+'"}]';
					 }else{
						 tempExecutionRate+='{"cuRa":"'+res.content[i].cuRa+'%","pmId":"'+res.content[i].pmId+'"},';
					 }
				 }

        		//执行利率,还款方式改变时，利率跟着变
        		$("#paymentMethodId").change(function(){
        			//给隐藏域还款方式名称赋值
        			$("#paymentMethodName").val($("#paymentMethodId option:selected").text());
        			//执行利率根据还款方式动态修改
					$('#executionRateFirstLoan').html('<option value="">请选择...</option>');
        			$('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(tempExecutionRate)});
        			$("#executionRateFirstLoan").val($("#paymentMethodId").val());
        			$("#loanApplyContractFirstLoan").val(app.unformatPercentBj($("#executionRateFirstLoan option:selected").text()));
        			var paymentMethodId=$("#paymentMethodId").val();
                    $('#paymentHidden').val(paymentMethodId);
        			//给同组的paymentMethodCode赋值
        			for(var i = 0;i<res.content.length;i++){
        				if(res.content[i].pmId==paymentMethodId){
        					$("#repaymentTypeCode").val(res.content[i].pmCd);
        				}
        			}
					//如果有促销 需要掉接口查促销的优惠比例并做计算
					if($('#promNo').val() != "" && $('#applyPeriodLength').val() != "" && $('#paymentMethodId').val() != ""){
						$.ajaxSettings.async = false;
						var plQt = $('#applyPeriodLength').val();
						var promCondPmId = $('#paymentMethodId').val();
						var promNo = $('#promNo').val();
						$.getJSON(app.AJAX_GETPROMBENEBYPARAM + "?plQt="+  plQt + "&promCondPmId="+ promCondPmId + "&promNo="+ promNo, function (result) {
							if (app.isOK(result)) {
								if(!(result.promBenePc === null || result.promBenePc === undefined) && result.promBenePc!= ""){
									var cuRa = res.content[0].cuRa * 1 - result.promBenePc * 1;
									if(cuRa < res.minLoAm * 1){
										cuRa = res.minLoAm;
									}
									if(cuRa > res.maxLoAm * 1){
										cuRa = res.maxLoAm;
									}
									var tempRate = '[{"cuRa":"'+cuRa+'%","pmId":"'+cuRa+'"}]';
									$('#executionRateFirstLoan').selectloader({'executionRateFirstLoanList': $.parseJSON(tempRate)});
									$("#executionRateFirstLoan").val(cuRa);
									$("#loanApplyContractFirstLoan").val(cuRa);
								}
							}
							$.ajaxSettings.async = true;
						});
					}

					//如果产品没有配置首付比例，需要取还款方式的
					if(res.fiPayRa === null || res.fiPayRa === undefined){
						for(var i = 0;i<res.content.length;i++){
							if(res.content[i].pmId==paymentMethodId){
								if(!(res.content[i].firstPayPer === null || res.content[i].firstPayPer === undefined &&  res.content[i].firstPayPer === "")){
									percentData = res.content[i].firstPayPer;
									//此处需要重新计算
									calPrice();
								}else{
									app.alertError('产品没有配置首付比例，还款方式也没有配置首付比例！无法继续下一步');
									return fasle;
								}

							}
						}
					}
        		});

				/* $("#applayAmount").change(function() {
					 if($("#applayAmount").val() * 1 < res.minLoAm * 1){
						 app.alertError('贷款金额最小为' + res.minLoAm);
						 $( "#applayAmount").next().val('0');
						 $( "#applayAmount").val(app.formatCurrencyM('0'));
					 }else  if($("#applayAmount").val() * 1 > res.maxLoAm * 1){
						 app.alertError('贷款金额最大为' + res.maxLoAm);
						 $( "#applayAmount").next().val('0');
						 $( "#applayAmount").val(app.formatCurrencyM('0'));
					 }

				 });*/
        	}
			$.ajaxSettings.async = true; 
        });
	}
	
	
    /*添加商品信息*/
    $('body').on('click', '.add-loanApplyPeopleOfZS-goodsList', function () {
        var indexId=$(this).parents('.left-add').find('.delete-home').length;
        $(this).modelCurd({
            target: $("#goodlist-tbody"),
            template: $('#goodsList-template'),
            self:$(this),
            index:indexId,
            fn: function (el, index) {
                el.find('.goodsTypeList').selectloader({'goodsTypeList': app.goodsTypeList});
				el.find('.goodsToTalPrice').attr("disabled","disabled");
            }
        });
    });
    /*添加账号信息*/
    $('body').on('click', '.add-loanApplyPeopleOfZS-accountList', function () {
        var indexId=$(this).parents('.left-add').find('.delete-home').length;
        var temp1='[{"name":"个人账户","code":"GR"},{"name":"对公账户","code":"DG"}]';
        $(this).modelCurd({
            target: $("#accountlist-tbody"),
            template: $('#accountList-template'),
            self:$(this),
            index:indexId,
            fn: function (el, index) {
                el.find('.useCodeList').selectloader({'useCodeList': app.useCodeList});           
                el.find('.accountType').selectloader({'accountTypeList': $.parseJSON(temp1)});
				/*账户代码*/
				el.find('.acCdList').selectloader({'acCdTypeList': app.acCdList});
				el.find('select').selectpicker('refresh');
            }
        });
    });
    /*删除一行*/
    $(document).on("click", ".delete-table", function () {
      var tableHome=$(this).parents(".portlet");
		if(tableHome.find('tr').length>2){
			tableHome.find('.delete-home:last').remove();
			calPrice();
		}else {
			app.alertError('仅有一条数据,不能删除');
		}
    });

	var opinionFormId = "";
	var applyWater = "";
	var saveHandle = function (formIdArr,operType) {
		var flag = true;
		var item = $("#form-submit-loan-information");
		$(item).prop('action', app.LOAN_INFORMATION_UPDATE);	
		var param = $(item).serializeObject();
		$.Bpm.ajaxPost($(item).prop('action'), 'post',param, false, function (data, textStatus, jqXHR) {
			if (app.isOK(data)) {
				if ($(item).prop('id') == 'form-submit-loan-information') {
					applyWater = data.applyWater;
					formIdArr.push({ formId: $(item).data('viewIdname'), id: data.applyWater });
					//回显保存的数据的Id
					returnMsgDetail(data.applyWater,'#form-submit-loan-information',app.LOAN_INFORMATION);
				} 
			} else {
				flag = false;
			}
		}, 'application/x-www-form-urlencoded; charset=UTF-8');
		if ('save'==operType && formIdArr.length > 0) {
			if (!$.Bpm.postFormIds(formIdArr,opinionFormId)) {
				flag = false;
			}
		}
		return flag;
	};
	/*保存*/
	$(document).on("click", "#saveData", function () {
		var taskStatus = $.Bpm.findTaskStatus();
		if (!$("#form-submit-loan-information").valid()) {
			app.alertError("有必填项未填,请检查!");
			return false;
		}else if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			app.alertError("当前状态不可执行保存操作!");
		}else{
			if(!judgeBankBrNo()){
				return false;
			}
			$(':disabled').removeAttr('disabled');
			var formIdArr = [];
			if (saveHandle(formIdArr,'save')) {
				app.alertOK('保存成功！');
			}else{
				app.alertError("提交失败!");
			}
			$('.add-disabled').attr('disabled','disabled');
		}
		return false;
	});

	/*下一步*/
    $(document).on("click", "#nextData", function () {
		var taskStatus = $.Bpm.findTaskStatus();
		if (!$("#form-submit-loan-information").valid()) {
			app.alertError("有必填项未填,请检查!");
			return false;
		}else if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			location.href="/cb/loan-application/image-data.html?taskId="+app.request.taskId;
		}else{
			if(!judgeBankBrNo()){
				return false;
			}
			$(':disabled').removeAttr('disabled');
			var formIdArr = [];
			if (saveHandle(formIdArr,'submit')) {
				location.href="/cb/loan-application/image-data.html?taskId="+app.request.taskId;
			}else{
				app.alertError("提交失败!");
			}
		}
        return false;
    });

	function judgeBankBrNo(){
		var result = true;
		 $(".acBankBrNo").each(function(){
			if($(this).val()==null || $(this).val()==undefined || $(this).val()==""){
				app.alertError("开户银行及开户机构必须从下拉框中选择!");
				result =  false;
				return;
			}
		});
		return result;
	}


    /*lh 计算新加商品信息 并回显到购买金额 输入框内*/
    $('body').on('change', '.goodsQuantity, .goodsPrice', function () {
		calPrice();
      });
	function calPrice(){
		var tatal=0;
		var one_goodsToTalPrice, goodsQuantity, goodsPrice;
		var one_goodsToTalPrice_id,    //商品总价 元素
			goodsBuyAmount_id,         //购买金额 元素
			firstPayAmount,         //首付金额 元素
			applayAmount;           //申请金额 元素

		$("#goodlist-tbody").find("tr").each(function(){
			one_goodsToTalPrice_id=$(this).find("input.goodsToTalPrice");
			goodsBuyAmount_id=$("#goodsBuyAmount");
			goodsQuantity= $(this).find(".goodsQuantity").val();
			goodsPrice=$(this).find(".goodsPrice").val();
			goodsPrice=app.unformatMoney(goodsPrice);
			if(goodsPrice=="0"){
				one_goodsToTalPrice_id.val("0");
				return;
			}
			if(isNaN(goodsQuantity)||isNaN(goodsPrice)){
				one_goodsToTalPrice_id.val("0");
				return;
			}else{
				// 设置 商品总价
				one_goodsToTalPrice=(goodsQuantity*1)*(goodsPrice*1);
				one_goodsToTalPrice_id.next().val(one_goodsToTalPrice);
				one_goodsToTalPrice_id.val(app.formatCurrencyM(one_goodsToTalPrice));
				// 购买金额
				tatal= tatal*1+one_goodsToTalPrice*1;
				//首付金额
				firstPayAmount=Math.round(tatal*(percentData*1/100));
				//申请金额
				applayAmount=tatal - firstPayAmount;
			}
			$(this).parents("form").validate().element($(this).find("input.goodsToTalPrice"));
		});
		// 设置 购买金额
		goodsBuyAmount_id.next().val(tatal);
		goodsBuyAmount_id.val(app.formatCurrencyM(tatal));
		//首付金额
		$( "#firstPayAmount").next().val(firstPayAmount);
		$( "#firstPayAmount").val(app.formatCurrencyM(firstPayAmount));
		//申请金额
		$( "#applayAmount").next().val(applayAmount);
		startData=1;
		findFeeAndMatList();
		$( "#applayAmount").val(app.formatCurrencyM($( "#applayAmount").next().val()));
	};
	/*上一步*/
	$(document).on("click", "#previousPage", function () {
		window.location.href="/cb/loan-application/details-update.html?taskId="+app.request.taskId;
	});

	/**
	 * 查询银行
	 */
	$(document).on("keyup focus", ".acBankNa", function () {
		var $this=this;
		var  openBankNa= $.trim($($this).val());
		$(this).parents('tr').siblings('tr').find('.data-box').hide();
		if(openBankNa==""){
			return;
		}
		var param={
			openBankNa:openBankNa
		};
		$.getJSON(app.AJAX_QUERYBANK , param, function (data) {
			if(app.isOK(data)) {
				var tpl = Handlebars.compile($('#data-box-template').html());
				var html = tpl(data);
				$($this).parent('.form-group').find('.data-box').html(html);
				$($this).parent('.form-group').find('.data-box').css('display', "block");
				if(data.content.length>0) {
					if (data.content[0].openBankNa != openBankNa) {
						$($this).parents('tr').find('.acBankBrNa').val("");
					}
				}
			}else{
				app.alertError(data.errors.join('\n'));
			}
		});
		return false;
	});

	/**
	 * 查询机构
	 */
	$(document).on("keyup focus", ".acBankBrNa", function () {
		var $this=this;
		var  openBankNo=$($this).parents('tr').find('.acBankNo').val();
		var  openBankBrNa=$($this).val();
		$(this).parents('tr').siblings('tr').find('.data-box').hide();
		if(openBankBrNa==""){
			return;
		}
		var param={
			openBankNo:openBankNo,
			openBankBrNa:openBankBrNa
		};
		$.getJSON(app.AJAX_QUERYORGNIZE , param, function (data) {
			var tpl = Handlebars.compile($('#data-box-template').html());
			var html = tpl(data);
			$($this).parent('.form-group').find('.data-box').html(html);
			$($this).parent('.form-group').find('.data-box').css('display', "block");
		});
		return false;
	});


	$(document).on('click','.data-box li',function(){
		var getVal=$.trim($(this).text());
		$(this).parents('.form-group').find('.acBankNa').val(getVal);
		$(this).parents('.form-group').find('.acBankBrNa').val(getVal);
		$(this).parents('.form-group').find('.acBankNo').val($.trim($(this).find('.openBankNo').val()));
		$(this).parents('.form-group').find('.acBankBrNo').val($.trim($(this).find('.openBankBrNo').val()));
		$(this).parent('.data-box').css('display', "none");
	});

	$(document).on('change', '#promNo, #applyPeriodLength', function () {
		if($("#paymentMethodId").val() == ""){
			return;
		}
		$("#paymentMethodId").change();
	});

	/*耐用消费贷订单号不能重复*/
	$(document).on('blur','.orderNo',function(){
		var orderNo=$('.orderNo');
		var currentOrderNoVal=$(this).val();
		$(this).addClass("this-Class");
		for(var i=0;i<orderNo.length;i++) {
			var orderNoVal = orderNo.eq(i).val();
			var errorString = '<span class="help-block help-block-error">订单号不能重复,请重新输入</span>';
			$(this).parent().find('span.help-block-error').remove();
			if (orderNo.eq(i).hasClass("this-Class") == false) {
				if (orderNoVal == currentOrderNoVal) {
					$(this).parent('.form-group').addClass("has-error");
					$(this).parent().append(errorString);
					$(this).val("");
					return;
				}
			}
		}
		$(this).parent().removeClass("has-error");
		$(this).removeClass("this-Class");
		$(this).parent().find('span.help-block-error').remove();
	});

	$(document).on('change','.isBankCard',function(){
		var param={
			cardBinNo:$(this).val().substring(0,6)
		};
		var indexname = $(this).attr("name").split('[')[1].substring(0,1);
		$.getJSON(app.AJAX_QUERY_BANK_BY_CARDBIN , param, function (data) {
			if(app.isOK(data)) {
				if(data.content.length > 0){
					$("#acBankNa_" + indexname).val(data.content[0].openBankNa);
					$("#acBankNo_" + indexname).val(data.content[0].openBankNo);
				}
			}
		});
	});


	function  returnMsgDetail(apTr,formId,url){
		$.getJSON(url + apTr , function (res) {
			if (app.isOK(res)) {
				$(formId).deserializeObject(res);
				var tpl = Handlebars.compile($('#goodsList-template-set').html());
				var html = tpl(res);
				$("#good-list-isshow").html(html);
				/*商品类型*/
				$('.goodsType').selectloader({'goodsTypeList': app.goodsTypeList});
				$(".bindEvent").each(function(){
					$(this).val($(this).next('input[type=hidden]').val());
					if($(this).val()!=""){
						$(this).val(app.formatCurrencyM($(this).val()));
					}
				});
			}
		});
	}
});


