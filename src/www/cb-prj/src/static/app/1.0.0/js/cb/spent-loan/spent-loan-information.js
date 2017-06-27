$(function () {
    var $ = window.jQuery;
    var app = window.app;
function time(){
    $('.date-picker-page').datepicker({
        rtl: App.isRTL(),
        orientation: "left",
        todayHighlight: true,
        autoclose: !0,
        format: "yyyy-mm-dd",
        'start-date': "+0d",
        language: 'zh-CN'
    }).on('hide', function (e) {
        $(this).parents("form").validate().element($(this).parent().find("input"));
    });
}
    +function ($, app) {
        /*商品类型*/
        app.registerTextHelper('goodsType', app.goodsTypeList, 'code', 'name');
        var init = function () {
			var request = app.request;
			$.Bpm.init({taskId: request.taskId});
			$.Bpm.initBusFormExt(function(formId, busId) {
				if (formId == 'spent-loan-form') {
					$.getJSON(app.SPENT_LOAN+"/"+busId, function(data){
						if (app.isOK(data)) {
							/*导航*/
							data.taskId = request.taskId;
							var titleUrl= Handlebars.compile($('#url-boxbg').html());
							var html = titleUrl(data);
							$("#ul_div").html(html);
							var loanUseCode = data.loanUseCode;
							if (loanUseCode != "QT") {
								$(".div_loanUseCode").css("display", "none");
							}
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
							
							/*账户模态框列表*/
							$(document).on("click", ".add", function () {
								var htmlFromTable = $('#account-list-table').html();
								var tp4 = Handlebars.compile(htmlFromTable);
								var htmlr = tp4(data);
								$("#account-table").html(htmlr);
							});

							/*点击加号账户模态框列表*/
							$('#confirm').click(function(){
							  var selectlength = $('#select-acount').find('[type=radio]:checked').length;
								if(selectlength>0){
								  var getSelectData = $('#select-acount').find('[type=radio]:checked').parents('tr').clone();
									/*付款方式：直接支付*/
								   var directPay=$('#payCd').val();
									if(directPay=='ZJ'){
										$('#direct-account tbody').find('tr').remove();
										$('#direct-account tbody').append(getSelectData);
										var replaceTime= $("#direct-account tbody").html().replace(/listIndex/g,0);
										$("#direct-account tbody").html(replaceTime);
										$('#direct-account tbody tr').find("td:first-child").remove();
									}else {
										/*付款方式：受托支付*/
										var batchPay=$('#mlTyCd').val();
										/*放款方式：一次性放款*/
										if(batchPay=='YC'){
											$('#entrusted-payment tbody').find('tr').remove();
											$('#entrusted-payment tbody').append(getSelectData);
											var replaceTime= $("#entrusted-payment tbody").html().replace(/listIndex/g,0);
											$("#entrusted-payment tbody").html(replaceTime);
											$('#entrusted-payment tbody tr').find("td:first-child").remove();
										}else{
											/*放款方式：分批次放款*/
											/*添加一个收托账号模板*/
											var addbody = $('#account-show-body').find('.list-num').length;
											var addLength=$('#account-show-body').find('.list-num:last').data('list-num');
											if(addbody==0){
												addLength=0;
											}else{
												addLength++
											}
											var tagert=$('#account-show-body').append("<div id='tagert"+addLength+"' class='table-show'></div>");
											var tpl = Handlebars.compile($('#add-batch-template').html());
											$("#tagert"+addLength).html(tpl);
											/*最后一个table赋值*/
											$('#account-show-body .batch-body:last').find('tbody').append(getSelectData);
											$('#account-show-body .batch-body:last').find('tbody').find("td:first-child").remove();
											/*tr添加编辑按钮*/
										   var replaceTime= $("#tagert"+addLength).html().replace(/listIndex/g,addLength);
											$("#tagert"+addLength).html(replaceTime);
											$('#batch-header').remove();
											time();
										}
									}

								}
							})
							$('.goodsType').selectloader({'goodsTypeList': app.goodsTypeList});
							$('.peopleList').selectloader({'papersTypeList': app.papersTypeList});
							$('#loanKindCode').selectloader({'loanKindCodeList': app.loanKindCodeList});
							$('#loanUseCode').selectloader({'currencyCodeList': app.loanUseCodeList});
							$('.feeTypeCode').selectloader({'feeTypeCodeList': app.feeTypeCodeList});
							$('.materialTypeCode').selectloader({'materialTypeCodeList': app.materialTypeCodeList});
							/*还款方式*/
							temp1 = '[{"name":"'+data.paymentMethod.paymentMethodName+'","code":"'+data.paymentMethod.paymentMethodId+'"}]';
							$('#paymentMethodId').selectloader({'paymentMethodIdList': $.parseJSON(temp1)});
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
							//table 里面的下拉框样式设置
							/*商品信息*/
							td_select($("#goodsList_select tr"));
							/*费用信息*/
							td_select($("#feeList_select tr"));
							/*资料信息*/
							td_select($("#data_select tr"));
							/*根据贷款类型判断，如果是耐用品消费分期，则显示购买商品信息列表*/
							isQTNY(data);
							$('#spent-loan-form').deserializeObject(data);
							$("#apTr").val(data.applyWater);
							/*有数据时回显账号信息*/
						   var directPay=$('#payCd option:selected').val();
							if(directPay=='ZJ'){
								//直接支付
								var tp5= Handlebars.compile($('#direct-account-table').html());
								html = tp5(data);
								$("#account-show-body").html(html);
								time();
							}else{
								var batchPay=$('#mlTyCd').val();
								/*放款方式：一次性放款*/
								if(batchPay=='YC'){
									var tp5= Handlebars.compile($('#entrusted-payment-table').html());
									html = tp5(data);
									$("#account-show-body").html(html);
									time();
								}else if((batchPay=='DC')){
									//受托支付，多次接口
									var tp5= Handlebars.compile($('#batch-payment-table').html());
									Handlebars.registerHelper("addOne", function (index) {
										//利用+1的时机，在父级循环对象中添加一个_index属性，用来保存父级每次循环的索引
										this._index = index;
										return this._index;
									});
									html = tp5(data);
									$("#account-show-body").html(html);
									time();
								}
							}

							/*金额格式化*/
							$(".bindEvent").each(function(){
							   $(this).val($(this).next('input[type=hidden]').val());
								if($(this).val!=""){
									$(this).val(app.formatCurrencyM($(this).val()));
								}
							});

							set_spent_disabled();
							var  aObj=$("#repay");
							getRepayMethod(aObj,data,app.unformatMoney($("#applayAmount").val()));
							return;
						}
						app.alertError(data.errors.join('\n'));
					});
				}
			});
        };
        init();
    }(window.jQuery, window.app);


    /*保存*/
    $('#saveData').click(function () {
        saveInfo();
    });
	/*下一步*/
	$('#next').click(function () {
		var taskStatus = $.Bpm.findTaskStatus(); 
		if(taskStatus=="COMPLETED"||taskStatus=="SUSPEND"||taskStatus=="REFUSED"){
			window.location.href="/cb/spent-loan/spent-image-data.html?taskId="+app.request.taskId;
		}else{
			if(saveInfo()){
				window.location.href="/cb/spent-loan/spent-image-data.html?taskId="+app.request.taskId;
			}
		}
	});
	function saveInfo(){
		if ($('#spent-loan-form').valid()) {
                //直接支付
                $('#mlTyCd').removeAttr("disabled");
                set_spent_submit();
                submit(app.SPEN_LOAN_SAVE,$('#spent-loan-form').serializeObject() );
                /* 操作成功 留在当前页面时 置灰 */
                set_spent_disabled();
                var applyWater=$("#apTr").val();
                var formIdArr = [];
                var item = $("#spent-loan-form");
                formIdArr.push({ formId: $(item).data('viewIdname'), id: applyWater });
                if (formIdArr.length > 0) {
                    if (!$.Bpm.postFormIds(formIdArr,"")) {
                        app.alertError("保存失败,请检查输入项!");
						return false;
                    }
                }
				return true;
        }
        return false;
	}

    /* lh 不可输入部分置灰*/
    function set_spent_disabled(){
        $(".content-form").find("select,input,textarea").attr("disabled",true);
        $(".content-form .bootstrap-select button").css("background-color", "#efefef");
    }
    function set_spent_submit(){
        $(".content-form").find("select,input,textarea").attr("disabled",false);
    }



    function submit(url, param) {
        app.$post(url, param).done(function (data) {
            if (app.isOK(data)) {
                app.alertOK('保存成功！');
                //给隐藏域赋值
            $("#mlTrHidden").val(data.mlTr);
            }else{
                app.alertError(data.errors.join('\n'));
            }
        });
    };
	
    /*付款方式下拉框改变*/
    $("#payCd").change(function () {
        var selectVal = $(this).find('option:selected').val();
        /*付款方式：直接支付*/
        if (selectVal == "ZJ") {
           $('#mlTyCd').attr('disabled', true);
            $('#mlTyCd').val("YC");
            $('#mlTyCd').css("background-color", "#efefef");
            var tp6= Handlebars.compile($('#direct-account-table').html());
            $("#account-show-body").html(tp6);
        } else {
            $('#mlTyCd').removeAttr("disabled");
            $('#mlTyCd').css("background-color", "#fff");
            $('#mlTyCd').val("");
			$('#mlTyCd').selectpicker('refresh');
            $("#account-show-body").empty();
        }
    });
    /*放款方式下拉框改变*/
    $('#mlTyCd').change(function () {
        var selectVal = $(this).find('option:selected').val();
        $('.account-table .table-show').hide();
        /*付款方式：受托支付*/
        if (selectVal == "DC") {
            /*放款方式：多次放款*/
            var tp7= Handlebars.compile($('#table-header-template').html());
            $("#account-show-body").html(tp7);
            time();
        } else if(selectVal == "YC"){
            /*放款方式：一次放款*/
            var tp8= Handlebars.compile($('#entrusted-payment-table').html());
            $("#account-show-body").html(tp8);
            }

    });
    /*受托账号删除*/
    deleteList(".delete-table","#account-show-body",".table-show");
    /*放款时间删除*/
    deleteList(".delete-time",".table-time",".delete-time-table");
    function deleteList(targetName,deleteBody,deleteName){
        $(document).on("click", targetName, function () {
            var listlength = $(this).parents(deleteBody).find(targetName).length;
            if(listlength>1){
                $(this).parents(deleteName).remove();
            }else {
                app.alertError( '仅有一条数据，不能删除!!');
            }
        });
    }
    /*放款时间增加*/
    $('body').on('click', '.add-time', function () {
        /*时间的个数*/
        var addLength=$(this).parents(".table-time").find('.time-cont:last').data('time-list')+1;
        /*父级list的下标*/
        var listLength=$(this).parents(".list-num").data("list-num");
        $(this).parents(".table-time").append("<div id='add-timeList" +listLength+ addLength+ "' class='delete-time-table'></div>");
        $(this).modelCurd({
            target: $("#add-timeList"+listLength+ addLength),
            template: $('#table-time-template'),
            self:$(this),
            index:addLength,
            fn: function (el, index) {
            }
        });
        /*增加的模块添加父级list*/
        var changeHtml= $('#add-timeList'+listLength+ addLength).html().replace(/listIndex/g,listLength);
        var addHtml= $('#add-timeList'+listLength+ addLength).html(changeHtml);
        time();
    });
})






