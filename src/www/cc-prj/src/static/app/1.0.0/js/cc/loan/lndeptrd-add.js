$(function() {
	var $ = window.jQuery;
	var app = window.app;
	$('.athInd').selectloader({athIndList : app.athInd });
	$('.trChl').selectloader({trChl : app.trChl });
	$('.curTyp').selectloader({'curTyp' : app.curTyp});
    $('#cuCertTyp').selectloader({'certTypList': app.cuCertTyp});
    $('#rpTyp').selectloader({'rpTypList': app.rpTyp});

	app.context.formHtml = $('#form-template').html();
	$('#trAmt1').on('change', function() {
		var $this = $(this);
		if ($this.val().indexOf(',') != -1) {
			var Mo = app.unformatMoney($this.val());
			$this.val(app.formatCurrencyM(Mo, 2));
			$('#trAmt').val(app.unformatMoney($this.val()));
		} else {
			$this.val(app.formatCurrencyM($this.val(), 2));
			$('#trAmt').val(app.unformatMoney($this.val()));
		}
	});

	$("[name='cuCertTyp']").on('change', function() {
		$('#cuCertId').removeClass('isIdNUM').removeClass('isIDCard');
		if ($(this).val() == 'JR') {
			$('#cuCertId').addClass('isIdNUM');
		} else if ($(this).val() == 'SF') {
			$('#cuCertId').addClass('isIDCard');
		}
	})
	app.context.formInit = function(form) {
		app.bindFormValidation(form);
		// 初始化时间插件
		form.find(".date-picker-page").datepicker({
			rtl : App.isRTL(),
			orientation : "left",
			autoclose : !0,
			format : "yyyy-mm-dd",
			'start-date' : "+0d",
			language : 'zh-CN'
		});
	};

	/**
	 * 新增保存
	 */
	$('#saveForm').on('click',	function() {
		var $this = $(this);
		createCuNo();
		var addForm = $('#accessBorrowForm');
		if (addForm.valid()) {
			$this.prop('disabled',true);
	        App.startPageLoading({ animate: true });
	        var jqxhr = app.$submit(addForm, 'json');
	        sleep(500);			//睡眠0.5s
	        if (!jqxhr) return false;
	        jqxhr.done(function (data) {
				App.stopPageLoading();
				if (app.isOK(data)) {
					app.alertOK('提交成功');
					$this.prop('disabled',false);
					var athNo = data.athNo;
					window.location.href = "/cc/loan/lndeptrdinf/lndeptrdinf-trade.html?operatH=edit&athNo="+ athNo;
				} else {
					app.alertError(data.errors.join(','));
					$this.prop('disabled',false);
				}
			});
		}
	})

	/**
	 *zj自定义校验输入的百分比0-100%之间
	 */
	$.validator.addMethod('jinE', function(value, element) {
		var val = app.unformatMoney(value);
		return this.optional(element) || val >0 ;
	}, '请输入大于0的值');

	/**
	 * 根据输入的证件，获取客户号
	 */
	var cuCertId, cuCertTyp, cuNa;
	$(document).on("blur", "#cuCertTyp,#cuCertId,#cuNa", function() {
		if ($(this).parents(".form-group").hasClass("has-error")) {
			return false;
		}
		createCuNo();
	})

});
/*客户编号赋值*/
function createCuNo() {
	cuCertTyp = $('#cuCertTyp').val();
	cuCertId = $('#cuCertId').val();
	cuNa = $('#cuNa').val();
	if (cuCertTyp != "" && cuCertId != "") {
//		if (cuNa == "") {
//			cuNa = "临时用户";
//		}
		var psData = {
			'cardType' : cuCertTyp,
			'idCard' : cuCertId,
			'cusName' : cuNa
		};
		$.post(app.LNDEPTRDINF_CUSTOMER_NO, psData).done(function(res) {
			if (app.isOK(res)) {
				if (res.cuNa == undefined || res.cuNa=='temp') {
//					$('#cuNa').val("临时用户");
				}else{
					$('#cuNa').attr('readonly', false);
					$('#cuNa').val(res.cuNa);
					$('#cuNa').attr('readonly', true);
				}
				$('#cuNo').val(res.cuNo);
				return;
			}

			app.alertError(res.errors.join('\n'));
		});
	}
}


function sleep(numberMillis) { 
	var now = new Date(); 
	var exitTime = now.getTime() + numberMillis; 
	while (true) { 
		now = new Date(); 
		if (now.getTime() > exitTime) return; 
	} 
}
