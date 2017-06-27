$(function() {
	var $ = window.jQuery;
	var app = window.app;
	var saveForm =$('#lnRinfEditForm');
	var validator = app.bindFormValidation(saveForm);
	var athNo,subNo,rrPrAmt,prAmt,rrInAmt,inAmt,rrOvInAmt,ovInAmt,rrCmInAmt,
		cmInAmt,rrFeeAmt,feeAmt,rrPdPrAmt,rrPdInAmt,rrPdOvInAmt,rrPdCmInAmt,
		rrPdFeeAmt,payPrAmt,oldRrPrAmt,payInAmt,oldRrInAmt,payOvInAmt,oldRrOvInAmt,
		payCmInAmt,oldRrCmInAmt,payFeeAmt,oldRrFeeAmt,pdPrAmt,rrPdPrAmt,pdInAmt,
		rrPdInAmt,pdOvInAmt,rrPdOvInAmt,pdCmInAmt,rrPdCmInAmt,pdFeeAmt,rrPdFeeAmt;
	var dataS={};
	var rrPrIndVal;
    $('#save').hide();
	$('.input-trial, .form-hide').hide();
	$('.rrPrInd').selectloader({rrPrInd:app.dicts.dict_3002});
	$('.athInd').selectloader({athIndList:app.dicts.dict_3016});
	app.context.formHtml = $('#form-template').html();
	app.context.formInit = function(form) {
		form.find(".date-picker-page").datepicker({
			rtl : App.isRTL(),
			orientation : "left",
			autoclose : !0,
			format : "yyyy-mm-dd",
			'start-date' : "+0d",
			language : 'zh-CN'
		});
	};


	var athNoP = GetQueryString("athNo");
	var loNo = GetQueryString("loNo");
	var rrprind=GetQueryString("rrPrInd");
	console.log(operatH);

	if(operatH == 'edit'){
		app.$getJSON(app.LNRRINF_VIEW + "/" + athNoP).done(function(data) {
			if (app.isOK(data)) {
				$('#lnRinfEditForm').deserializeObject(data);
				$("input[name='rrTolAmt1']").val(app.formatCurrencyM($("input[name='rrTolAmt']").val(), 2));
				$("input[name='rrPrAmt1']").val(app.formatCurrencyM($("input[name='rrPrAmt']").val(), 2));
				$("input[name='rrInAmt1']").val(app.formatCurrencyM($("input[name='rrInAmt']").val(), 2));
				$("input[name='rrOvInAmt1']").val(app.formatCurrencyM($("input[name='rrOvInAmt']").val(), 2));
				$("input[name='rrCmInAmt1']").val(app.formatCurrencyM($("input[name='rrCmInAmt']").val(), 2));
				$("input[name='rrFeeAmt1']").val(app.formatCurrencyM($("input[name='rrFeeAmt']").val(), 2));
				$(".athInd").attr('disabled',true);
				$('select').selectpicker('refresh');
			}
		});
	}else if(operatH == 'view'){
		app.$getJSON(app.LNRRINF_VIEW + "/" + athNoP).done(
			function(data) {
				if (app.isOK(data)) {
					$('#lnRinfEditForm').deserializeObject(data);
					$("input[name='rrTolAmt1']").val(app.formatCurrencyM($("input[name='rrTolAmt']").val(), 2));
					$("input[name='rrPrAmt1']").val(app.formatCurrencyM($("input[name='rrPrAmt']").val(), 2));
					$("input[name='rrInAmt1']").val(app.formatCurrencyM($("input[name='rrInAmt']").val(), 2));
					$("input[name='rrOvInAmt1']").val(app.formatCurrencyM($("input[name='rrOvInAmt']").val(), 2));
					$("input[name='rrCmInAmt1']").val(app.formatCurrencyM($("input[name='rrCmInAmt']").val(), 2));
					$("input[name='rrFeeAmt1']").val(app.formatCurrencyM($("input[name='rrFeeAmt']").val(), 2));
					$('input').attr('readonly',true);
					$('select').attr('disabled',true);
					$('textarea').attr('readonly',true);
					$("input[name='laUpDt']").attr("disabled", "disabled");
					$(".selBox").find("button").attr("disabled", true);
					$('select').attr('disabled',true);
					$('select').selectpicker('refresh');
				}
			});
		$('#loanCalc,#btn1,#trade,#edit,#save,#delete-child').hide();
		$('.cancle').text("返回");
	}
	$("#loNol").val(loNo);
	$("#athNol").val(athNoP);
	$('.search .portlet.box').eq(0).hide();
	$('.main-page').pagination({
		"first-store" : app.firstStore
	});

	/**
	 * 通过是否减免本金 控制明细表中减免本金的输入
	 */
	$("select[name=rrPrInd]").on('change', function() {
		inputVal($(this).val());
	});
	function inputVal(val) {
	    if(val == 'N'){
		    $(".rrPrAmtl").attr('readonly', true);
		    $(".rrPrAmtl").val('0.00');
		    $('#rrPrAmt').val('0');
		    $('.td-special span').html('0.00');
		 }else{
		    $(".rrPrAmtl").attr('readonly', false);
		 }
	 }
	//查看当前欠款
	$('#loanCalc').on('click',function(){
		var $this = $(this);
		$this.attr('disabled',true);
		var loNo=$('#lono').val();
		var trDt = $('[name=trDt]').val();
		var jqxhr = app.$post(app.LNRPT_LOANPAYCALC + '?loNo=' + loNo+ '&buzDt=' + trDt + '&payPatCd=GH&payAm=', {}, 'json');
		if (!jqxhr) { return; }
		jqxhr.done(function(data) {
			if (app.isOK(data)) {
				$('.input-trial').show();
				$("[name='needPayAm']").val(app.formatCurrencyM(data.payAm));
				$("[name='needPayPrAmt']").val(app.formatCurrencyM(data.payPrAmt));
				$("[name='needPayInAmt']").val(app.formatCurrencyM(data.payInAmt));
				$("[name='needPayOdInAmt']").val(app.formatCurrencyM(data.payOdInAmt));
				$("[name='needPayCmInAmt']").val(app.formatCurrencyM(data.payCmInAmt));
				$("[name='needPayFeeAmt']").val(app.formatCurrencyM(data.payFeeAmt));
				$this.attr('disabled',false);
			}
		});
	});

	
	//主表更新方法
	function editLnrrinf() {
		$("#athInd").attr("disabled", false);
		App.startPageLoading({ animate: true });
		var jqxhr = app.$submit(saveForm, 'json');
		if (!jqxhr) return false;
		jqxhr.done(function (data) {
			App.stopPageLoading();
			if (app.isOK(data)) {
				app.alertOK('贷款减免提交成功!');
				$('#btn1,#save').attr('disabled'.false);
			}else{
				var errors = data.errors.join(',');
				app.alertError('贷款减免'+errors || '贷款减免'+failureText || '贷款减免提交失败！');
				$('#btn1,#save').attr('disabled'.false);
			}
		});
	}
	//子表更新方法
	function  editLnrrinfTable(){
		commondatas();
		app.$post(app.LNRRDTL_UPDATE, dataS).done(function(data) {
			if (app.isOK(data)) {
				app.alertOK('贷款减免明细提交成功!');
				app.loadData();
				$('.td-rrPrAmt input').hide();
				$('.td-rrPrAmt span').show();
				$('#btn1,#save').attr('disabled',true);
			} else {
				var errors = data.errors.join(',');
				app.alertError('贷款减免明细'+errors || '贷款减免明细'+failureText || '贷款减免明细提交成功！');
				$('#btn1,#save').attr('disabled',true);
			}
		});
	}
	
	//编辑保存(主子表)
	$('#btn1').click(function(){
		var $this = $(this);
		if ($('[type=radio]:checked').length > 0) {
			if($('#lnRinfEditForm').valid() &&  validTable(true)){
				//根据判断保存主子表
				editLnrrinfTable();//先保存子表
				editLnrrinf();//保存主表
                setTimeout(function () {
                    window.location.reload();
                },1500);

			}
		}else{
			if($('#lnRinfEditForm').valid()){
				editLnrrinf();//只保存主表
				setTimeout(function () {
	                    window.location.reload();
	                },1500);
			}else{
				return false;
			}
		}
	});
	// 编辑通过子表保存所有数据
	$('#save').on('click',function(){
		$(this).prop('disabled',true);
		if ($('[type=radio]:checked').length > 0) {
			commondatas();
			if(validTable(true)){
				editLnrrinfTable();  //先保存子表
				editLnrrinf();       //保存主表
                setTimeout(function () {
                    window.location.reload();
                },1500);
			}else{
				return false;
			}
		}else{
            app.alertTxt('您还没有选中记录！');
		}
	});


	//验证息税减免子表信息
	function commondatas(){
		athNo = $('[type=radio]:checked').data('athno');
		subNo = $('[type=radio]:checked').data('subno');

		// 减免本金、减免利息、减免罚息、减免复利、减免费用、应还本金、应还利息、应还罚息、应还复利、应还费用
		rrPrAmt = $("#rrPrAmt").val();
		prAmt = $('[type=radio]:checked').data('pramt');
		rrInAmt = $("#rrInAmt").val();
		inAmt = $('[type=radio]:checked').data('inamt');
		rrOvInAmt = $("#rrOvInAmt").val();
		ovInAmt = $('[type=radio]:checked').data('ovinamt');
		rrCmInAmt = $("#rrCmInAmt").val();
		cmInAmt = $('[type=radio]:checked').data('cminamt');
		rrFeeAmt = $("#rrFeeAmt").val();
		feeAmt = $('[type=radio]:checked').data('feeamt');
		// 积数
		rrPdPrAmt = $("#rrPdPrAmt").val();
		rrPdInAmt = $("#rrPdInAmt").val();
		rrPdOvInAmt = $("#rrPdOvInAmt").val();
		rrPdCmInAmt = $("#rrPdCmInAmt").val();
		rrPdFeeAmt = $("#rrPdFeeAmt").val();

		// 已还本金、已还利息、已还罚息、已还复利、已还费用、已减免本金、已减免利息、已减免罚息、已减免复利、已减免费用
		payPrAmt = $('[type=radio]:checked').data('paypramt');
		oldRrPrAmt = $('[type=radio]:checked').data('oldrrpramt');
		payInAmt = $('[type=radio]:checked').data('payinamt');
		oldRrInAmt = $('[type=radio]:checked').data('oldrrinamt');
		payOvInAmt = $('[type=radio]:checked').data('payovinamt');
		oldRrOvInAmt = $('[type=radio]:checked').data('oldrrovinamt');
		payCmInAmt = $('[type=radio]:checked').data('paycminamt');
		oldRrCmInAmt = $('[type=radio]:checked').data('oldrrcminamt');
		payFeeAmt = $('[type=radio]:checked').data('payfeeamt');
		oldRrFeeAmt = $('[type=radio]:checked').data('oldrrfeeamt');

		pdPrAmt = $('[type=radio]:checked').data('pdpramt');
		rrPdPrAmt =$("input[name='rrPdPrAmt']").val();
		/*rrPdPrAmt = $('[type=radio]:checked').parents('tr').find("input[name='rrPdPrAmt']").val();*/
		pdInAmt = $('[type=radio]:checked').data('pdinamt');
		rrPdInAmt = $("input[name='rrPdInAmt']").val();
		pdOvInAmt = $('[type=radio]:checked').data('pdovinamt');
		rrPdOvInAmt = $("input[name='rrPdOvInAmt']").val();
		pdCmInAmt = $('[type=radio]:checked').data('pdcminamt');
		rrPdCmInAmt = $("input[name='rrPdCmInAmt']").val();
		pdFeeAmt = $('[type=radio]:checked').data('pdfeeamt');
		rrPdFeeAmt = $("input[name='rrPdFeeAmt']").val();
		dataS = {
			'athNo' : athNo,
			'subNo' : subNo,
			'rrPrAmt' : rrPrAmt,
			'rrInAmt' : rrInAmt,
			'rrOvInAmt' : rrOvInAmt,
			'rrCmInAmt' : rrCmInAmt,
			'rrFeeAmt' : rrFeeAmt,
			'rrPdPrAmt' : rrPdPrAmt,
			'rrPdInAmt' : rrPdInAmt,
			'rrPdOvInAmt' : rrPdOvInAmt,
			'rrPdCmInAmt' : rrPdCmInAmt,
			'rrPdFeeAmt' : rrPdFeeAmt
		}
	};

	function validTable(result){
		if(result){
			commondatas();
			if (rrPdPrAmt == "") { rrPdPrAmt = parseFloat("0"); }
			if (rrPdInAmt == "") { rrPdInAmt = parseFloat("0"); }
			if (rrPdOvInAmt == "") {rrPdOvInAmt = parseFloat("0");}
			if (rrPdCmInAmt == "") { rrPdCmInAmt = parseFloat("0");}
			if (rrPdFeeAmt == "") { rrPdFeeAmt = parseFloat("0");}
			if (rrPrAmt == "") { rrPrAmt = parseFloat("0");}
			if (rrInAmt == "") {rrInAmt = parseFloat("0");}
			if (rrOvInAmt == "") { rrOvInAmt = parseFloat("0");}
			if (rrCmInAmt == "") {rrCmInAmt = parseFloat("0");}
			if (rrFeeAmt == "") { rrFeeAmt = parseFloat("0");}
			//输入控制
			if (parseFloat(rrPrAmt) < 0) {	   app.alertError('减免本金不能为负数');      return;}
			if (parseFloat(rrPdPrAmt) < 0) {   app.alertError('本次减免本金积数不能为负数'); return;}
			if (parseFloat(rrInAmt) < 0) {	   app.alertError('减免利息不能为负数'); 		return;}
			if (parseFloat(rrPdInAmt) < 0) {   app.alertError('减免利息积数不能为负数'); 	return;}
			if (parseFloat(rrOvInAmt) < 0) {   app.alertError('减免罚息不能为负数'); 		return;}
			if (parseFloat(rrPdOvInAmt) < 0) { app.alertError('减免罚息积数不能为负数'); 	return;}
			if (parseFloat(rrCmInAmt) < 0) {   app.alertError('减免复利不能为负数'); 		return;}
			if (parseFloat(rrPdCmInAmt) < 0) { app.alertError('减免复利积数不能为负数'); 	return;}
			if (parseFloat(rrFeeAmt) < 0) {    app.alertError('减免费用不能为负数'); 		return;}
			if (parseFloat(rrPdFeeAmt) < 0) {  app.alertError('减免费用积数不能为负数');	 return;}

			if (rrPdPrAmt > pdPrAmt) {
				app.alertError('本次减免本金积数不能大于本金积数！');
			} else if (rrPdInAmt > pdInAmt) {
				app.alertError('本次减免利息积数不能大于利息积数！');
			} else if (rrPdOvInAmt > pdOvInAmt) {
				app.alertError('本次减免罚息积数不能大于罚息积数！');
			} else if (rrPdCmInAmt > pdCmInAmt) {
				app.alertError('本次减免复利积数不能大于复利积数！');
			} else if (rrPdFeeAmt > pdFeeAmt) {
				app.alertError('本次减免费用积数不能大于费用积数！');
			} else if (rrPrAmt > (prAmt - payPrAmt - oldRrPrAmt)) {
				app.alertError('减免本金不能大于应还本金与已还本金、已减免本金之差！');
			} else if (rrInAmt > (inAmt - payInAmt - oldRrInAmt)) {
				app.alertError('减免利息不能大于应还利息与已还利息、已减免利息之差！');
			} else if (rrOvInAmt > (ovInAmt - payOvInAmt - oldRrOvInAmt)) {
				app.alertError('减免罚息不能大于应还罚息与已还罚息、已减免罚息之差！');
			} else if (rrCmInAmt > (cmInAmt - payCmInAmt - oldRrCmInAmt)) {
				app.alertError('减免复利不能大于应还复利与已还复利、已减免复利之差！');
			} else if (rrFeeAmt > (feeAmt - payFeeAmt - oldRrFeeAmt)) {
				app.alertError('减免费用不能大于应还费用与已还费用、已减免费用之差！');
			}else{
				return true;
			}
		}
	}

	//息税减免交易功能
	$('#trade').click(function() {
		var $this = $(this);
		$this.attr('disabled',true);
		var datas = $('#lnRinfEditForm').serializeObject();
		var athNoT = $('#athNo-trad').val();
		app.$post(app.LNRRINF_UPDATE, datas).done(function(data) {
			if (app.isOK(data)) {
				arrearsdeal(athNoT);
				$this.attr('disabled',false);
			} else {
				var errors = data.errors.join(',')
				app.alertError(errors || '提交失败！');
				$this.attr('disabled',false);
			}
		});
	});
	function arrearsdeal(athNo) {
		app.$post(app.LNRRINF_ARREARSDEAL + "/" + athNo).done(function(data) {
			if (app.isOK(data)) {
				console.log(data);
				app.alertOK('交易成功！');
			} else {
				var errors = data.errors.join(',')
				app.alertError(errors || failureText || '交易失败！');
			}
		});
	}
	function format(showName, hideName) {
		$('#update-lnrrinf-table').delegate(showName,'change',function() {
			var $this = $(this);
			if ($this.val().indexOf(',') != -1) {
				var Mo = app.unformatMoney($this.val());
				$this.val(app.formatCurrencyM(Mo, 2));
				hideName.val(app.unformatMoney($this.val()));
			} else {
				$this.val(app.formatCurrencyM($this.val(), 2));
				hideName.val(app.unformatMoney($this.val()));
			}
		});
	}

	$('#edit').alertModal({
		size:'modal-sm',
		selector: function () {
			return !!$('[type=radio]:checked').length;
		},
		setMethod:function () {
			$('[type=radio]:checked').parents('tr').find('.td-rrPrAmt span').hide();
			$('[type=radio]:checked').parents('tr').siblings().find('.td-rrPrAmt span').show();
			$('[type=radio]:checked').parents('tr').find('.td-rrPrAmt input').removeClass('edit-input-hidden');
			$('[type=radio]:checked').parents('tr').siblings().find('.td-rrPrAmt input').addClass('edit-input-hidden');
			inputVal($("select[name=rrPrInd]").val());
			// 减免本金、利息、罚息、复利、费用、本次减免本金积数、利息积数、罚息积数、复利积数、费用积数、金额格式化
			format('[name=rrPrAmtl]', $('#rrPrAmt'))
			format('[name=rrInAmtl]', $('#rrInAmt'))
			format('[name=rrOvInAmtl]', $('#rrOvInAmt'))
			format('[name=rrCmInAmtl]', $('#rrCmInAmt'))
			format('[name=rrFeeAmtl]', $('#rrFeeAmt'))

			format('[name=rrPdInAmtl]', $('#rrPdInAmt'))
			format('[name=rrPdPrAmtl]', $('#rrPdPrAmt'))
			format('[name=rrPdOvInAmtl]', $('#rrPdOvInAmt'))
			format('[name=rrPdCmInAmtl]', $('#rrPdCmInAmt'))
			format('[name=rrPdFeeAmtl]', $('#rrPdFeeAmt'))

			// 聚焦、失焦背景色
			$(".rrPrAmtl, .rrPdPrAmtl,.rrInAmtl,.rrPdInAmtl,.rrOvInAmtl,.rrPdOvInAmtl, .rrCmInAmtl, .rrPdCmInAmtl,  .rrFeeAmtl, .rrPdFeeAmtl").focus(function() {
				$(this).css("background", "white");
			});
			$(".rrPrAmtl,.rrPdPrAmtl,.rrInAmtl,.rrPdInAmtl,.rrOvInAmtl,.rrPdOvInAmtl, .rrCmInAmtl, .rrPdCmInAmtl,  .rrFeeAmtl, .rrPdFeeAmtl ").blur(function() {
				$(this).css("background", "#FFF0DF");
			});
			$('#save').show();
		}
	});

	/**
	 * 删除贷款减免明细信息
	 */
	$('#delete-child').getModal({
		text : '确定要删除该条贷款减免明细信息吗？',
		size : 'modal-sm',
		selector : function() {
			return !!$('[type=radio]:checked').length;
		}
	}, function(modal) {
		var id = $('[type=radio]:checked').data('id');
		app.context.submit({
			modal : modal,
			url : app.LNRRDTL_REMOVE + "?" + id,
			text : '删除成功',
			isEasyModal : true
		}, app);
	});

});
function returnpage() {
	window.location.href = "lnrrinf-index.html";
}
+function (handlebars) {
	handlebars.registerHelper('formatMoneySpecial', function (s) {
		n = 2;
		if(s==0 || !s){
			return '0.00';
		}else{
			s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
			var l = s.split(".")[0].split("").reverse(),
				r = s.split(".")[1];
			if($.inArray('-',l) != -1){
				l.splice($.inArray('-',l),1);
			}
			t = "";
			for(i = 0; i < l.length; i ++ ){
				t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
			}
			//zj判断金额是否为负数
			if(s.toString().indexOf('-') != -1){
				return '-'+t.split("").reverse().join("") + "." + r;
			}else{
				return t.split("").reverse().join("") + "." + r;
			}
		}

	});
}(Handlebars);

