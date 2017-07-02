$(function() {
	var $ = window.jQuery;
	var app = window.app;
	$('#exec').hide();

	$('.payPatCd').selectloader({'payPatCd' : app.dicts.dict_3044});
	$('.curTyp').selectloader({'curTyp' : app.dict_cfg.dict_cfg_CurTyp});
	$('.advPayAmCd').selectloader({'advPayAmCd' : app.dicts.dict_3046});
	$('.advInYn').selectloader({'advInYn' : app.dicts.dict_3002});
	$('.advInAmCd').selectloader({'advInAmCd' : app.dicts.dict_3047});
	$('.payAmtFrm').selectloader({'payAmtFrm' : app.dicts.dict_3058});
	$('.advShoInd').selectloader({'advShoInd' : app.dicts.dict_3002});

	var athNo = GetQueryString("athNo");
	var addForm = $('#lnrptAdd-form');
	if (operatH == 'add') {
		$('.form-group-lono').css('readonly', false).find('div').addClass('find').find('.line-use').show();
		$('[name=loNo]').parent('div').addClass('propInput');
		$('[name=loNo]').parent('div').css('width', '160px');
		$('.inrpt-pre-group').hide();
		$('.depAcAmtDiv').hide();
		$('.payAcNoDiv').hide();
		$(".payAcNo").removeClass("required");
		$(".payAcNoLabel").removeClass("fill");
		getSystemInfo();	// 获取系统日期
		$('[name=payAmtFrm]').on('change', function() {
			setPayAmtFrm() //获取时点内部账户余额、还款账户
		});
		$('#confirmR').click(function() {
			var $this = $(this);
			if (addForm.valid()) {
				var payAmtFrm = $('[name=payAmtFrm]').val();
				var payAm = app.unformatMoney($('[name=payAm1]').val());
				var depAcAmt = app.unformatMoney($('[name=depAcAmt1]').val());
				if (payAmtFrm == 'NB' && depAcAmt < payAm) {
					app.alertError("时点内部账户余额为:" + depAcAmt + "不足以支付还款金额:" + payAm + ", 无法发起还款, 请确认!");
					return;
				}
				$this.prop('disabled', true);
				$('.curTyp').attr('disabled', false);
				$('.advInYn').attr('disabled', false);
				$('.advInAmCd').attr('disabled', false);
				App.startPageLoading({
					animate : true
				});
				app.$submit(addForm, 'json').done(function(data) {
					App.stopPageLoading();
					if (app.isOK(data)) {
						app.alertOK('提交成功！');
						$this.prop('disabled', false);
						var athNo = data.athNo;
						setTimeout(function() {
							window.location.href = "/cc/loan/lnrpt/lnrpt-add.html?operatH=edit&athNo=" + athNo;
						}, 2000)
					} else {
						app.alertError(data.errors.join('\n'));
						$this.prop('disabled', false);
						return false;
					}
				});
			}
		});
	} else if (operatH == 'view') {
		$('#exec').hide();
		$('[name=payAmtFrm]').on('change', function() {
			setPayAmtFrm() //获取时点内部账户余额、还款账户
		});
		app.$getJSON(app.LNRPT_VIEW + athNo).done(function(data) {
			if (app.isOK(data)) {
				addForm.deserializeObject(data);
				$('.curTyp').attr('disabled', true);
				$('.view-hide-group').hide();
				$('.form-group-lono').css('readonly', true).find('div').removeClass('find').find('.line-use').hide();
				$('[name=loNo]').parent('div').removeClass('propInput');
				$('[name=loNo]').parent('div').css('width', '200px');
				$('input').attr('readonly', true);
				$('input[name=trDt]').attr("disabled", true);
				$(".selBox").find("button").attr("disabled", true);
				$('select').attr('disabled', true);

				$('[name=owPayAmt1]').val(app.formatCurrencyM(data.owPayAmt));
				$('[name=owPayPrAmt1]').val(app.formatCurrencyM(data.owPayPrAmt));
				$('[name=owPayInAmt1]').val(app.formatCurrencyM(data.owPayInAmt));
				$('[name=owPayOdInAmt1]').val(app.formatCurrencyM(data.owPayOdInAmt));
				$('[name=owPayCmInAmt1]').val(app.formatCurrencyM(data.owPayCmInAmt));
				$('[name=owPayFeeAmt1]').val(app.formatCurrencyM(data.owPayFeeAmt));
				
				$('[name=payAm1]').val(app.formatCurrencyM(data.payAm));
				$('[name=payPrAmt1]').val(app.formatCurrencyM(data.payPrAmt));
				$('[name=payInAmt1]').val(app.formatCurrencyM(data.payInAmt));
				$('[name=payOdInAmt1]').val(app.formatCurrencyM(data.payOdInAmt));
				$('[name=payCmInAmt1]').val(app.formatCurrencyM(data.payCmInAmt));
				$('[name=payFeeAmt1]').val(app.formatCurrencyM(data.payFeeAmt));
				$('[name=advPrAmt1]').val(app.formatCurrencyM(data.advPrAmt));
				$('[name=depAcAmt1]').val(app.formatCurrencyM(data.depAcAmt));
				$('select[name=payAcNo]').empty();
				$('[name=payAcNo]').val(data.payAcNo);
				
				$('#confirmR').hide();
				$('.cancle').text("返回");
				$('select').selectpicker('refresh');
			} else {
				app.alertError(data.errors.join('\n'));
				return false;
			}
		});
	} else if (operatH == 'edit') {
		$('#exec').show();
		$('[name=payAmtFrm]').on('change', function() {
			setPayAmtFrm() //获取时点内部账户余额、还款账户
		});
		app.$getJSON(app.LNRPT_VIEW + athNo).done(function(data) {
			if (app.isOK(data)) {
				addForm.deserializeObject(data);
				$('.curTyp').attr('disabled', true);
				try { $('[name=inStDt]').val(data.lnloinf.inStDt); }catch(e){}
				try { $('[name=laDueDt]').val(data.lnloinf.laDueDt); }catch(e){}
				try { $('[name=loPrAmt1]').val(app.formatCurrencyM(data.lnloinf.loPrAmt));}catch(e){}
				try { $('[name=loPrSa1]').val(app.formatCurrencyM(data.lnloinf.loPrSa)); }catch(e){}
				$('.form-group-lono').css('readonly', true).find('div').removeClass('find').find('.line-use').hide();
				$('[name=loNo]').parent('div').removeClass('propInput');
				$('[name=loNo]').parent('div').css('width', '200px');

				$('[name=payAm1]').val(app.formatCurrencyM(data.payAm));
				$('[name=payPrAmt1]').val(app.formatCurrencyM(data.payPrAmt));
				$('[name=payInAmt1]').val(app.formatCurrencyM(data.payInAmt));
				$('[name=payOdInAmt1]').val(app.formatCurrencyM(data.payOdInAmt));
				$('[name=payCmInAmt1]').val(app.formatCurrencyM(data.payCmInAmt));
				$('[name=payFeeAmt1]').val(app.formatCurrencyM(data.payFeeAmt));
				$('select[name=payAcNo]').empty(); 
				$('select').selectpicker('refresh');

				calcLoanOvAmt(); 	// 欠款试算
				calcLoanPayInAmt(); // 还款入账试算
			} else {
				app.alertError(data.errors.join('\n'));
				return false;
			}
		});

		//保存数据
		$('#confirmR').click(function() {
			$('[name=buzDt]').removeClass('ltTimeValidate')
			var $this = $(this);
			$('.curTyp').attr('disabled', false);
			$('.advInYn').attr('disabled', false);
			$('.advInAmCd').attr('disabled', false);
			$('[name=payAmtFrm]').on('change', function() {
				setPayAmtFrm() //获取时点内部账户余额、还款账户
			});
			$('select').selectpicker('refresh');
			if (addForm.valid()) {
				var payAmtFrm = $('[name=payAmtFrm]').val();
				var payAm = app.unformatMoney($('[name=payAm1]').val());
				var advPrAmt = app.unformatMoney($('[name=advPrAmt1]').val());
				var depAcAmt = app.unformatMoney($('[name=depAcAmt1]').val());
				if (payAmtFrm == 'NB' && depAcAmt < payAm) {
					app.alertError("时点内部账户余额为:" + depAcAmt + "不足以支付还款金额:" + payAm + ", 无法发起还款, 请确认!");
					return;
				}
				$this.prop('disabled', true);
				addForm.attr('action', app.LNRPT_UPDATE);
				App.startPageLoading({
					animate : true
				});
				app.$submit(addForm, 'json').done(function(data) {
					App.stopPageLoading();
					if (app.isOK(data)) {
						app.alertOK('提交成功！');
						$this.prop('disabled', false);
					} else {
						app.alertError(data.errors.join('\n'));
						$this.prop('disabled', false);
					}
				});
				return false;
			}
		});

		//还款记账
		$('#exec').click(function() {
			$('[name=buzDt]').removeClass('ltTimeValidate')
			var $this = $(this);
			$('.curTyp').attr('disabled', false);
			$('select').selectpicker('refresh');
			if (addForm.valid()) {
				$this.attr('disabled', true);
				addForm.attr('action', app.LNRPT_UPDATE);
				App.startPageLoading({
					animate : true
				});
				app.$submit(addForm, 'json').done(function(data) {
					App.stopPageLoading();
					if (app.isOK(data)) {
						$this.attr('disabled', false);
						exec();
					} else {
						app.alertError(data.errors.join('\n'));
						$this.attr('disabled', false);
					}
				});
				return false;
			}
		});
	}

	$('#lonoModal').on('shown.bs.modal', function() {
		app.loadData();
	});

	//借据选择
	$("#confirmY").click(function() {
		if ($('[type=radio]:checked').length > 0) {
			$('.curTyp').val(curTyp).attr('disabled', false);
			var checked = $("#lonoTable").find("[type='radio']:checked");
			var loNo = checked.parents("tr").find('.name').text();
			var curTyp = checked.parents('tr').find('.td-curTyp').text();
			var brNo = checked.parents('tr').find('.td-brNo').text();
			var appUsId = checked.parents('tr').find('.td-appUs').text();
			var inStDt = checked.parents('tr').find('.td-inStDt').text();
			var laDueDt = checked.parents('tr').find('.td-laDueDt').text();
			var loPrAmt = checked.parents('tr').find('.td-loPrAmt').text();
			var loPrSa = checked.parents('tr').find('.td-loPrSa').text();
			$("#loNo").val(loNo);
			$('.curTyp').val(curTyp).attr('disabled', true);
			$('[name=inStDt]').val(inStDt);
			$('[name=laDueDt]').val(laDueDt);
			$('[name=brNo]').val(brNo);
			$('[name=appUsId]').val(appUsId);
			$('select').selectpicker('refresh');
			$('[name=loPrAmt1]').val(app.formatCurrencyM(loPrAmt));
			$('[name=loPrSa1]').val(app.formatCurrencyM(loPrSa));
			if ($('#loNo')) {
				$('#loNo').trigger('change');
			}
		} else {
			app.alertError('您还没有选中记录！');
			return false;
		}
	});

	//还款模式
	$('[name=payPatCd]').on('change', function() {
		var $this = $(this);
		$('select').selectpicker('refresh');
		// 归还欠款
		if ($this.val() == 'GH') {
			$('.inrpt-pre-group').hide();
			$('[name=payAm1]').attr('readonly', false);
			advControl(false);
			// 全部还款
		} else if ($this.val() == 'QT') {
			$('.inrpt-pre-group').hide();
			$('[name=payAm1]').attr('readonly', true);
			advControl(false);
			// 提前还款
		} else if ($this.val() == 'TQ') {
			$('.inrpt-pre-group').show();
			advControl(true);
		}
		var val = $('[name=payPatCd]').val();
		if(val!=null && val!=''){
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	
	// 还款资金来源
	function setPayAmtFrm(){
		var payAmtFrm=$('[name=payAmtFrm]').val();
		// 内部账户扣款
		if (payAmtFrm == 'NB') {
			$('.depAcAmtDiv').show();
			$('.payAcNoDiv').hide();
			$(".payAcNo").removeClass("required");
			$(".payAcNoLabel").removeClass("fill");
			var loNo = $('[name=loNo]').val();
			var lnCurTyp=$("[name='curTyp']").val();
			app.$getJSON(app.LNLOINF_VIEW + "/" + loNo).done(function(data) {
				if (app.isOK(data)) {
					datas = {
						'cuCertTyp': data.cuCertTyp,
						'cuCertId' : data.cuCertId,
						'curTyp'   : data.curTyp, 
					}
					app.$getJSON(app.LNDEPINF_VIEW, datas).done(function(data) {
						if (app.isOK(data)) {
							if(lnCurTyp == data.curTyp){
								$('.depAcAmt1').val(app.formatCurrencyM(data.depSa));
								$('[name=depAcAmt]').val(data.depSa);
							}else{
								$('.depAcAmt1').val(" ");
								app.alertError("借据信息币种:" + lnCurTyp + "与内部存款账户币种:" + data.curTyp + "不同, 请确认!");
								return false;
							}
							
						}
						$('select').selectpicker('refresh');
					});
				} else {
					app.alertError(data.errors.join('\n'));
					return false;
				}
			});
		// 还款账户扣款
		} else if (payAmtFrm == 'HK') {
			$('.depAcAmtDiv').hide();
			$('.payAcNoDiv').show();
			$(".payAcNo").addClass("required");
			$(".payAcNoLabel").addClass("fill");

			$('select').selectpicker('refresh');
			$('select[name=payAcNo]').html('');
			$('select[name=payAcNo]').append('<option value="">请选择</option>');
			var loNo = $('[name=loNo]').val();
			var acTyp = payAmtFrm;
			app.$post(app.LNACINF_FINDACINFLIST	+ '?loNo=' + loNo + '&acTyp=' + acTyp, {}, 'json').done(function(data) {
				if (app.isOK(data)) {
					$.each(data.payload, function(i, item) {
						$('select[name=payAcNo]').append("<option value=" + item.acNo + ">" + "" + item.acNo + "" + "</option>");
					});
					$('select').selectpicker('refresh');
				} else {
					app.alertError(data.errors.join('\n'));
					return false;
				}
			});
		// 保证金账户扣款
		} else if (payAmtFrm == 'BZ') {
			var loNo = $('[name=loNo]').val();
			var acTyp = payAmtFrm;
			$('select').selectpicker('refresh');
			$('select[name=payAcNo]').html('');
			$('select[name=payAcNo]').append('<option value="">请选择</option>');
			$('.depAcAmtDiv').hide();
			$('.payAcNoDiv').show();
			$(".payAcNo").addClass("required");
			$(".payAcNoLabel").addClass("fill");

			app.$post(app.LNACINF_FINDACINFLIST + '?loNo=' + loNo + '&acTyp=' + acTyp, {}, 'json').done(function(data) {
				if (app.isOK(data)) {
					$.each(data.payload, function(i, item) {
						$('select[name=payAcNo]').append("<option value=" + item.acNo + ">" + item.acNa + "(" + item.acNo + ")" + "</option>");
					});
					$('select').selectpicker('refresh');
				}
			});
		}
	};

	// 还款金额
	$('.payAm1').on('change', function() {
		var $this = $(this);
		if ($this.val().indexOf(',') != -1) {
			var Mo = app.unformatMoney($this.val());
			$this.val(app.formatCurrencyM(Mo));
			$('[name=payAm]').val(app.unformatMoney($this.val()));
		} else {
			$this.val(app.formatCurrencyM($this.val()));
			$('[name=payAm]').val(app.unformatMoney($this.val()));
		}
		var val = $('.payAm1').val();
		if(val!=null && val!=''){
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	// 提前还款本金金额
	$('.advPrAmt1').on('change', function() {
		var $this = $(this);
		if ($this.val().indexOf(',') != -1) {
			var Mo = app.unformatMoney($this.val());
			$this.val(app.formatCurrencyM(Mo));
			$('[name=advPrAmt]').val(app.unformatMoney($this.val()));
		} else {
			$this.val(app.formatCurrencyM($this.val()));
			$('[name=advPrAmt]').val(app.unformatMoney($this.val()));
		}
		var val = $('.advPrAmt1').val();
		if(val!=null && val!=''){
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	$('[name=trDt]').parent('.date-picker-page').on('changeDate', function() {
		if (!checkTrDt()) {
			return;
		}
		var val = $('[name=trDt]').val();
		if(val!=null && val!=''){
			calcLoanOvAmt(); 	// 欠款试算
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	$('[name=loNo]').on('change', function() {
		var val = $('[name=loNo]').val();
		if(val!=null && val!=''){
			calcLoanOvAmt(); 	// 欠款试算
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	function getSystemInfo() {
		app.$post(app.SYSTEM_VIEW, {}, 'json').done(function(data) {
			if (app.isOK(data)) {
				$('[name=buzDt]').val(data.payload.baInf.crDt);
			} else {
				app.alertError(data.errors.join('\n'));
				return false;
			}
		});
	}

	function exec() {
		var payAm = app.unformatMoney($('[name=payAm1]').val());
		var depAcAmt = app.unformatMoney($('[name=depAcAmt1]').val());
		var payAmtFrm = $('[name=payAmtFrm]').val();
		// 对内部账户、保证金做的金额做控制
		if (payAmtFrm == 'NB' && depAcAmt < payAm) {
			app.alertError("还款金额大于时点内部账户余额，无法还款记账，请确认！");
			return;
		}

		var jqxhr=app.$post(app.LNRPT_LOANPAYEXEC + '?athNo=' + athNo, {}, 'json')
		jqxhr.done(function(data) {
			if (app.isOK(data)) {
				app.alertOK('还款记账成功');
				window.location.href = "/cc/loan/lnrpt/lnrpt-index.html";
			} else {
				app.alertError(data.errors.join('\n'));
				return false;
			}
		});
	}

	function checkTrDt() {
		var trDt = $('[name=trDt]').val();
		var inStDt = $('[name=inStDt]').val();
		var laDueDt = $('[name=laDueDt]').val();
		var payPatCd = $('[name=payPatCd]').val(); // 还款模式
		if (trDt == '' || trDt == undefined || inStDt == '' || inStDt == undefined) {
			return true;
		} else {
			return true;
		}
	}

	// 提前还款字段控制
	function advControl(isAdv) {
		if (isAdv) {
			$(".advPayAmCd").addClass("required");
			$(".advPayAmCdLabel").addClass("fill");
			changeAdvPayAmCd();

			$(".advInYn").addClass("required");
			$(".advInYnLabel").addClass("fill");
			changeAdvInYn();

			$(".advShoInd").addClass("required");
			$(".advShoIndLabel").addClass("fill");
			changeAdvShoInd();
		} else {
			$('[name=advPayAmCd]').val('');
			$('[name=advPrAmt1]').val('');
			$('[name=advPrAmt]').val('');
			$('[name=advInYn]').val('');
			$('[name=advInAmCd]').val('');
			$('[name=advShoInd]').val('');
			$('[name=advShoPerQt]').val('');

			$(".advPayAmCd").removeClass("required");
			$(".advPayAmCdLabel").removeClass("fill");

			$(".advPrAmt1").removeClass("required");
			$(".advPrAmtLabel").removeClass("fill");

			$(".advInYn").removeClass("required");
			$(".advInYnLabel").removeClass("fill");

			$(".advInAmCd").removeClass("required");
			$(".advInAmCdLabel").removeClass("fill");

			$(".advShoInd").removeClass("required");
			$(".advShoIndLabel").removeClass("fill");

			$(".advShoPerQt").removeClass("required");
			$(".advShoIndLabel").removeClass("fill");
		}
	}

	// 提前还款类型
	$('.advPayAmCd').on('change', function() {
		changeAdvPayAmCd(); // 控制字段
		var val = $('.advPayAmCd').val();
		if(val!=null && val!=''){
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	function changeAdvPayAmCd() {
		var advPayAmCd = $('[name=advPayAmCd]').val();
		// 提前还款本金
		if (advPayAmCd == 'BJ') {
			// 总额
			$('[name=payAm1]').attr('readonly', true);
			$(".payAm1").removeClass("required");
			$(".payAmLabel").removeClass("fill");
			// 提前还款本金
			$('[name=advPrAmt1]').attr('readonly', false);
			$(".advPrAmt1").addClass("required");
			$(".advPrAmtLabel").addClass("fill");

			$('.advInYn').attr('disabled', false);
			$('.advInAmCd').attr('disabled', false);
		} else if (advPayAmCd == 'BX') {
			// 总额
			$('[name=payAm1]').attr('readonly', false);
			$(".payAm1").addClass("required");
			$(".payAmLabel").addClass("fill");

			// 提前还款本金
			$('[name=advPrAmt1]').attr('readonly', true);
			$(".advPrAmt1").removeClass("required");
			$(".advPrAmtLabel").removeClass("fill");

			$('[name=advInYn]').val('Y'); // 必须归还利息
			$('[name=advInAmCd]').val('SY'); // 按照剩余本金计算
			$('.advInYn').attr('disabled', true);
			$('.advInAmCd').attr('disabled', true);
			changeAdvInYn();
		} else {
			// 总额
			$('[name=payAm1]').attr('readonly', false);
			$(".payAm1").addClass("required");
			$(".payAmLabel").addClass("fill");

			// 提前还款本金
			$('[name=advPrAmt1]').attr('readonly', true);
			$(".advPrAmt1").removeClass("required");
			$(".advPrAmtLabel").removeClass("fill");

			$('.advInYn').attr('disabled', false);
			$('.advInAmCd').attr('disabled', false);
		}
	}

	function changeAdvPayAmCd4In() {
		var advPayAmCd = $('[name=advPayAmCd]').val();// 提前还款本金
		if (advPayAmCd == 'BJ') {
			$('.advInYn').attr('disabled', false);
			$('.advInAmCd').attr('disabled', false);
		} else if (advPayAmCd == 'BX') {
			$('.advInYn').attr('disabled', true);
			$('.advInAmCd').attr('disabled', true);
			changeAdvInYn();
		} else {
			$('.advInYn').attr('disabled', false);
			$('.advInAmCd').attr('disabled', false);
		}
	}

	// 提前还本金额
	$('.advPrAmt1').on('change', function() {
		var val = $('.advPrAmt1').val();
		if(val!=null && val!=''){
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	// 是否归还利息
	$('.advInYn').on('change', function() {
		changeAdvInYn();
		var val = $('.advInYn').val();
		if(val!=null && val!=''){
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	function changeAdvInYn() {
		var advInYn = $('[name=advInYn]').val();
		if (advInYn == 'Y') {
			$(".advInAmCd-group").show();
			$(".advInAmCd").addClass("required");
			$(".advInAmCdLabel").addClass("fill");
		} else {
			$('[name=advInAmCd]').val('');
			$(".advInAmCd-group").hide();
			$(".advInAmCd").removeClass("required");
			$(".advInAmCdLabel").removeClass("fill");
		}
	}

	// 利息计算方式
	$('.advInAmCd').on('change', function() {
		var val = $('.advInAmCd').val();
		if(val!=null && val!=''){
			calcLoanPayInAmt(); // 还款入账试算
		}
	});

	// 是否缩期
	$('.advShoInd').on('change', function() {
		changeAdvShoInd();
	});

	function changeAdvShoInd() {
		var advShoInd = $('[name=advShoInd]').val();
		if (advShoInd == 'Y') {
			$(".advShoPerQt-group").show();
			$(".advShoPerQt").addClass("required");
			$(".advShoPerQtLabel").addClass("fill");
		} else {
			$('[name=advShoPerQt]').val('');
			$(".advShoPerQt-group").hide();
			$(".advShoPerQt").removeClass("required");
			$(".advShoPerQtLabel").removeClass("fill");
		}
	}

	// 测算欠款
	// 借据号、日期变动调用，重新调用欠款试算
	// 修改页面已进入调用欠款试算, 计算欠款金额; 查看页面不再调用欠款试算, 直接展示时点欠款金额
	function calcLoanOvAmt() {
		var loNo = $('[name=loNo]').val();
		var trDt = $('[name=trDt]').val();
		if (loNo == null || loNo == '' || loNo == undefined) {
			return;
		}
		if(trDt == null || trDt == '' || trDt == undefined){
			return;
		}
		app.$post(app.LNRPT_LOANPAYCALC + '?loNo=' + loNo + '&buzDt=' + trDt + '&payPatCd=GH&payAm=', {}, 'json').done(function(data) {
			if (app.isOK(data)) {
				$('[name=owPayAmt]').val(data.payAm);
				$('[name=owPayAmt1]').val(app.formatCurrencyM(data.payAm));

				$('[name=owPayPrAmt]').val(data.payPrAmt);
				$('[name=owPayPrAmt1]').val(app.formatCurrencyM(data.payPrAmt));

				$('[name=owPayInAmt]').val(data.payInAmt);
				$('[name=owPayInAmt1]').val(app.formatCurrencyM(data.payInAmt));

				$('[name=owPayOdInAmt]').val(data.payOdInAmt);
				$('[name=owPayOdInAmt1]').val(app.formatCurrencyM(data.payOdInAmt));

				$('[name=owPayCmInAmt]').val(data.payCmInAmt);
				$('[name=owPayCmInAmt1]').val(app.formatCurrencyM(data.payCmInAmt));

				$('[name=owPayFeeAmt]').val(data.payFeeAmt);
				$('[name=owPayFeeAmt1]').val(app.formatCurrencyM(data.payFeeAmt));
			} else {
				app.alertError(data.errors.join('\n'));
				return false;
			}
		});
	}

	// 还款入账试算
	// 借据号、日期、还款模式、还款金额、提前还款相关要素（提前还款本金、提前金额方式、是否归还利息、利息计算方式）变动以后调用，重新测算入账金额分配
	// 进入修改页面重新调用一次，进行入账金额分配
	function calcLoanPayInAmt() {
		var loNo = $('#loNo').val();
		var trDt = $('[name=trDt]').val(); // 还款日期
		var payPatCd = $('[name=payPatCd]').val(); // 还款模式
		var payAm = app.unformatMoney($('[name=payAm1]').val()); // 还款总额
		var advPrAmt = app.unformatMoney($('[name=advPrAmt1]').val()); // 提前还款本金
		var owPayAmt = app.unformatMoney($('[name=owPayAmt1]').val()); // 欠款总额
		var advPayAmCd = $('[name=advPayAmCd]').val(); // 提前金额方式
		var advInYn = $('[name=advInYn]').val(); // 是否归还利息
		var advInAmCd = $('[name=advInAmCd]').val(); // 利息计算方式

		if (loNo == null || loNo == '' || loNo == undefined) {
			return;
		}
		if (trDt == null || trDt == '' || trDt == undefined) {
			return;
		}
		if (payPatCd == null || payPatCd == '' || payPatCd == undefined) {
			return;
		}
		// 归还欠款
		if (payPatCd == 'GH') {
			if (payAm == null || payAm == '' || payAm == undefined || payAm <=0) {
				$('[name=payAm]').val(0);
				$('[name=payAm1]').val(app.formatCurrencyM(0));

				$('[name=payPrAmt]').val(0);
				$('[name=payPrAmt1]').val(app.formatCurrencyM(0));

				$('[name=payInAmt]').val(0);
				$('[name=payInAmt1]').val(app.formatCurrencyM(0));

				$('[name=payOdInAmt]').val(0);
				$('[name=payOdInAmt1]').val(app.formatCurrencyM(0));

				$('[name=payCmInAmt]').val(0);
				$('[name=payCmInAmt1]').val(app.formatCurrencyM(0));

				$('[name=payFeeAmt]').val(0);
				$('[name=payFeeAmt1]').val(app.formatCurrencyM(0));
				return;
			}
		// 全部提前还款
		} else if (payPatCd == 'QT') {
			//还款金额输入空
			$('[name=payAm]').val('');
			$('[name=payAm1]').val('');
		// 部分提前还款
		} else if (payPatCd == 'TQ') {
			if (advPayAmCd == null || advPayAmCd == '' || advPayAmCd == undefined) {
				return;
			}
			// 提前还款本金金额
			if (advPayAmCd == 'BJ') {
				// 提前还本金额
				if (advPrAmt == null || advPrAmt == '' || advPrAmt == undefined || advPrAmt <=0) {
					setAmtZore();
					return;
				}
				//还款金额输入空
				$('[name=payAm]').val('');
				$('[name=payAm1]').val('');
			// 提前还款总额
			} else {
				if (payAm == null || payAm == '' || payAm == undefined || payAm <=0) {
					return;
				}
				$('[name=advPrAmt]').val('');
				$('[name=advPrAmt1]').val('');
				if(payAm<=owPayAmt){
					app.alertError("提前还款总额:" + payAm + "必须大于欠款总额" + owPayAmt + ", 才能发起提前还款交易, 请确认!");
					return;
				}
			}
			// 是否归还利息
			if (advInYn == null || advInYn == '' || advInYn == undefined) {
				return;
			} else if (advInYn == 'Y') {
				// 是否归还利息
				if (advInAmCd == null || advInAmCd == '' || advInAmCd == undefined) {
					return;
				}
			}
		}
		$('.advInYn').attr('disabled', false);
		$('.advInAmCd').attr('disabled', false);
		var datas = $('#lnrptAdd-form').serializeObject();
		app.$post(app.LNRPT_LOANPAYINCALC, datas).done(function(data) {
			if (app.isOK(data)) {
				$('[name=payAm]').val(data.payAm);
				$('[name=payAm1]').val(app.formatCurrencyM(data.payAm));

				$('[name=payPrAmt]').val(data.payPrAmt);
				$('[name=payPrAmt1]').val(app.formatCurrencyM(data.payPrAmt));

				$('[name=payInAmt]').val(data.payInAmt);
				$('[name=payInAmt1]').val(app.formatCurrencyM(data.payInAmt));

				$('[name=payOdInAmt]').val(data.payOdInAmt);
				$('[name=payOdInAmt1]').val(app.formatCurrencyM(data.payOdInAmt));

				$('[name=payCmInAmt]').val(data.payCmInAmt);
				$('[name=payCmInAmt1]').val(app.formatCurrencyM(data.payCmInAmt));

				$('[name=payFeeAmt]').val(data.payFeeAmt);
				$('[name=payFeeAmt1]').val(app.formatCurrencyM(data.payFeeAmt));
				
				$('[name=advPrAmt]').val(data.advPrAmt);
				$('[name=advPrAmt1]').val(app.formatCurrencyM(data.advPrAmt));
			} else {
				app.alertError(data.errors.join('\n'));
				return false;
			}
		});
		//把利息根据配置设为为只读/非只读
		changeAdvPayAmCd4In();
	};
	
	function setAmtZore(){
		$('[name=payAm]').val(0);
		$('[name=payAm1]').val(app.formatCurrencyM(0));

		$('[name=payPrAmt]').val(0);
		$('[name=payPrAmt1]').val(app.formatCurrencyM(0));

		$('[name=payInAmt]').val(0);
		$('[name=payInAmt1]').val(app.formatCurrencyM(0));

		$('[name=payOdInAmt]').val(0);
		$('[name=payOdInAmt1]').val(app.formatCurrencyM(0));

		$('[name=payCmInAmt]').val(0);
		$('[name=payCmInAmt1]').val(app.formatCurrencyM(0));

		$('[name=payFeeAmt]').val(0);
		$('[name=payFeeAmt1]').val(app.formatCurrencyM(0));
		
		$('[name=advPrAmt]').val(0);
		$('[name=advPrAmt1]').val(app.formatCurrencyM(0));
	}
});
