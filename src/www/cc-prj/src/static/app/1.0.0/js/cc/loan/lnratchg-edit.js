$(function() {
	var $ = window.jQuery;
	var app = window.app;
	var editForm = $('#edit-lnratchg-form');
	$('.form-group-hidden').hide();
	$('#dealBtn').hide();

	$('.athInd').selectloader({
		athIndList : app.dicts.dict_3016
	});
	$('.chgChl').selectloader({
		chgChlList : app.dicts.dict_3032
	});
	$('.rtChgTyp').selectloader({
		rtChgTypList : app.dicts.dict_3018
	});
	$('.rtChgPlTyp').selectloader({
		rtChgPlTypList : app.dicts.dict_3006
	});
	$('.valTyp').selectloader({
		valTypList : app.dicts.dict_3033
	});
	$('.newRatTyp').selectloader({
		newRatTypList : app.dicts.dict_3005
	});
	$('.oldRatTyp').selectloader({
		oldRatTypList : app.dicts.dict_3005
	});
	$('.newBaRtTyp').selectloader({
		'newBaRtTypList' : app.dict_cfg.dict_cfg_RatTyp
	});
	$('.oldBaRtTyp').selectloader({
		'oldBaRtTypList' : app.dict_cfg.dict_cfg_RatTyp
	});
	$('.oldRatMod').selectloader({
		oldRatModList : app.dicts.dict_3017
	});
	$('.newRatMod').selectloader({
		newRatModList : app.dicts.dict_3017
	});

	app.registerTextHelper('athInd', app.dicts.dict_3016, 'code', 'name');
	app.registerTextHelper('chgChl', app.dicts.dict_3032, 'code', 'name');
	app.registerTextHelper('rtChgPlTyp', app.dicts.dict_3006, 'code', 'name');
	app.registerTextHelper('valTyp', app.dicts.dict_3033, 'code', 'name');
	app.registerTextHelper('newRatTyp', app.dicts.dict_3005, 'code', 'name');
	app.registerTextHelper('oldRatTyp', app.dicts.dict_3005, 'code', 'name');
	app.registerTextHelper('rtChgTyp', app.dicts.dict_3018, 'code', 'name');
	app.registerTextHelper('newBaRtTyp', app.dict_cfg.dict_cfg_RatTyp, 'code',
			'name');
	app.registerTextHelper('oldBaRtTyp', app.dict_cfg.dict_cfg_RatTyp, 'code',
			'name');
	app.registerTextHelper('oldRatMod', app.dicts.dict_3017, 'code', 'name');
	app.registerTextHelper('newRatMod', app.dicts.dict_3017, 'code', 'name');
	app.context.formHtml = $('#form-template').html();
	app.context.formInit = function(form) {
		/* 初始化弹窗里的下拉框 */
		form.find('.chgChl').selectloader({
			chgChlList : app.dicts.dict_3032
		});
		form.find('.athInd').selectloader({
			athIndList : app.dicts.dict_3016
		});
		form.find('.rtChgPlTyp').selectloader({
			rtChgPlTypList : app.dicts.dict_3006
		});
		form.find('.valTyp').selectloader({
			valTypList : app.dicts.dict_3033
		});
		form.find('.newRatTyp').selectloader({
			newRatTypList : app.dicts.dict_3005
		});
		form.find('.oldRatTyp').selectloader({
			oldRatTypList : app.dicts.dict_3005
		});
		form.find('.rtChgTyp').selectloader({
			rtChgTypList : app.dicts.dict_3018
		});
		form.find('.rtChgTyp').selectloader({
			rtChgTypList : app.dicts.dict_3018
		});
		form.find('.newBaRtTyp').selectloader({
			'newBaRtTyp' : app.dict_cfg.dict_cfg_RatTyp
		});
		form.find('.oldBaRtTyp').selectloader({
			'oldBaRtTyp' : app.dict_cfg.dict_cfg_RatTyp
		});
		form.find('.oldRatMod').selectloader({
			oldRatModList : app.dicts.dict_3017
		});
		form.find('.newRatMod').selectloader({
			newRatModList : app.dicts.dict_3017
		});
	}
	/**
	 * 页面跳转取数据赋值
	 */
	var athNo = GetQueryString("athNo");
	console.log(operatH + '======');
	if (operatH == 'edit') {
		$('#dealBtn').show();
		$("[name='athNo']").val(athNo).attr("readonly", true);
		app.$getJSON(app.LNRATCHG_VIEW + "/" + athNo).done(
				function(data) {
					if (app.isOK(data)) {
						console.log(data);
						$("#athInd").val(data.athInd).attr('disabled',true);
						$("#lonol").val(data.loNo).attr("readonly", true);
						$(".oldRatMod").val(data.oldRatMod).attr('disabled',true);
						$("#oldBaRt").val(data.oldBaRt);
						$("#oldBaRt1").val(app.formatPercent(data.oldBaRt * 100))
                                      .attr("readonly", true);
						$("#oldBaRtTyp").val(data.oldBaRtTyp).attr('disabled',true);
						$("#oldRatTyp").val(data.oldRatTyp).attr('disabled',true);
						$("#chgChl").val(data.chgChl).attr('disabled',true);
						$("#oldRtAd").val(data.oldRtAd);
						$("#oldRtAd1").val(app.formatPercent(data.oldRtAd * 100))
                                      .attr("readonly", true);
						$("#oldRtPe").val(data.oldRtPe);
						$("#oldRtPe1").val(
								app.formatPercent(data.oldRtPe * 100)).attr(
								"readonly", true);
						$("#oldExRt").val(data.oldExRt)
						$("#oldExRt1").val(app.formatPercent(data.oldExRt * 100))
                            .attr("readonly", true);
						$("#oldOvRt").val(data.oldOvRt)
						$("#oldOvRt1").val(app.formatPercent(data.oldOvRt * 100))
                                      .attr("readonly", true);
						$("#rtChgTyp").val(data.rtChgTyp).attr("readonly", true);
						//利率调整间隔类型
						$("#rtChgPlTyp").val(data.rtChgPlTyp).attr("readonly",true);
						//利率调整间隔
						$("#rtChgPlNum").val(data.rtChgPlNum).attr("readonly",false);
						$("#newBaRtTyp").val(data.newBaRtTyp).attr("disabled", true);
						// 新执行利率
						if (data.newExRt == null || data.newExRt == "") {
							data.newExRt = parseFloat("0");
						}
						$("#newExRt").val(data.newExRt);
						$("#newExRt1").val(app.formatPercent(data.newExRt * 100));
						// 新利率浮比
						if (data.newRtPe == null || data.newRtPe == "") {
							data.newRtPe = parseFloat("0");
						}
						$("#newRtPe").val(data.newRtPe);
						$("#newRtPe1").val(app.formatPercent(data.newRtPe * 100));
						// 新利率浮点
						if (data.newRtAd == null || data.newRtAd == "") {
							data.newRtAd == parseFloat("0");
						}
						$("#newRtAd").val(data.newRtAd);
						$("#newRtAd1").val(app.formatPercent(data.newRtAd * 100));

						$("#newBaRt").val(data.newBaRt);
						$("#newBaRt1").val(app.formatPercent(data.newBaRt * 100))
                                      .attr("readonly", true);
						$("#newRatTyp").val(data.newRatTyp).attr('disabled',true);
						$("#newRatMod").val(data.newRatMod).attr("readonly",true);
                        rtChgTypFun(data.newRatMod);
						$("#buzSeqNo").val(data.buzSeqNo).attr("readonly", true);

						// $("#newRtPe").val(data.newRtPe);
						// $("#newRtPe1").val(app.formatPercent(data.newRtPe*100));
						// 新罚息利率
						if (data.newOvPe == null || data.newOvPe == "") {
							data.newOvPe = parseFloat("0.5");
						}
						$("#newOvPe").val(data.newOvPe);
						$("#newOvPe1").val(app.formatPercent(data.newOvPe * 100));
						// 新罚息利率
						if (data.newOvRt == null || data.newOvRt == "") {
							data.newOvRt = parseFloat("0");
						}
						$("#newOvRt").val(data.newOvRt);
						$("#newOvRt1").val(app.formatPercent(data.newOvRt * 100));

						$("#valTyp").val(data.valTyp).attr("readonly", true);
						//第一次时间
						$("#nxtChgDt").val(data.nxtChgDt).attr("readonly", true);
						$("#appBrNo").val(data.appBrNo).attr("readonly", true);
						$("#appUsId").val(data.appUsId).attr("readonly", true)
						$("#appBrNo").val(data.appBrNo).attr("readonly", true);
					}
					$('select').selectpicker('refresh');
				});
	} else if (operatH == 'view') {
		$('#dealBtn').hide();
		$("[name='athNo']").val(athNo).attr("readonly", true);
		app.$getJSON(app.LNRATCHG_VIEW + "/" + athNo).done(
				function(data) {
					if (app.isOK(data)) {
						$("#athInd").val(data.athInd).attr('disabled',true);
						$("#lonol").val(data.loNo).attr("readonly", true);
						$(".oldRatMod").val(data.oldRatMod).attr('disabled',true);
						$("#oldBaRt").val(data.oldBaRt);
						$("#oldBaRt1").val(app.formatPercent(data.oldBaRt * 100))
                                      .attr("readonly", true);
						$("#oldBaRtTyp").val(data.oldBaRtTyp).attr('disabled',true);
						$("#oldRatTyp").val(data.oldRatTyp).attr('disabled',true);
						$("#chgChl").val(data.chgChl).attr('disabled',true);
						$("#oldRtAd").val(data.oldRtAd);
						$("#oldRtAd1").val(app.formatPercent(data.oldRtAd * 100))
                                      .attr("readonly", true);
						$("#oldRtPe").val(data.oldRtPe);
						$("#oldRtPe1").val(app.formatPercent(data.oldRtPe * 100))
                                      .attr("readonly", true);
						$("#oldExRt").val(data.oldExRt)
						$("#oldExRt1").val(app.formatPercent(data.oldExRt * 100))
                                      .attr("readonly", true);
						$("#oldOvRt").val(data.oldOvRt)
						$("#oldOvRt1").val(app.formatPercent(data.oldOvRt * 100))
                                      .attr("readonly", true);
						$("#rtChgTyp").val(data.rtChgTyp).attr("disabled", true);
						$("#rtChgPlTyp").val(data.rtChgPlTyp).attr("readonly",true);
						$("#rtChgPlNum").val(data.rtChgPlNum).attr("readonly",false);
						$("#newBaRtTyp").val(data.newBaRtTyp).attr('disabled',true);
						// 新执行利率
						if (data.newExRt == null || data.newExRt == "") {
							data.newExRt = parseFloat("0");
						}
						$("#newExRt").val(data.newExRt);
						$("#newExRt1").val(app.formatPercent(data.newExRt * 100))
                            .attr("readonly", true);
						// 新利率浮比
						if (data.newRtPe == null || data.newRtPe == "") {
							data.newRtPe = parseFloat("0");
						}
						$("#newRtPe").val(data.newRtPe);
						$("#newRtPe1").val(
								app.formatPercent(data.newRtPe * 100)).attr(
								"readonly", true);
						// 新利率浮点
						if (data.newRtAd == null || data.newRtAd == "") {
							data.newRtAd = parseFloat("0");
						}
						$("#newRtAd").val(data.newRtAd);
						$("#newRtAd1").val(app.formatPercent(data.newRtAd * 100))
                                      .attr("readonly", true);

						$("#newBaRt").val(data.newBaRt);
						$("#newBaRt1").val(app.formatPercent(data.newBaRt * 100))
                                      .attr("readonly", true);
						$("#newRatTyp").val(data.newRatTyp).attr('disabled',true);
						rtChgTypFun(data.newRatMod);
						$("#newRatMod").val(data.newRatMod).attr("disabled",true);
						$("#buzSeqNo").val(data.buzSeqNo).attr("readonly", true);

						// $("#newRtPe").val(data.newRtPe);
						// $("#newRtPe1").val(app.formatPercent(data.newRtPe*100)).attr("readonly",true);
						// 新罚息利率
						if (data.newOvPe == null || data.newOvPe == "") {
							data.newOvPe = parseFloat("0.5");
						}
						$("#newOvPe").val(data.newOvPe);
						$("#newOvPe1").val(
								app.formatPercent(data.newOvPe * 100)).attr(
								"readonly", true);
						// 新罚息利率
						if (data.newOvRt == null || data.newOvRt == "") {
							data.newOvRt = parseFloat("0");
						}
						$("#newOvRt").val(data.newOvRt);
						$("#newOvRt1").val(
								app.formatPercent(data.newOvRt * 100));
						$("#valTyp").val(data.valTyp).attr("disabled", true);
						$("#nxtChgDt").val(data.nxtChgDt)
								.attr("readonly", true);
						$("#appBrNo").val(data.appBrNo).attr("readonly", true);
						$("#appUsId").val(data.appUsId).attr("readonly", true)
						$("#appBrNo").val(data.appBrNo).attr("readonly", true);
						$("input[name='appDt']").attr("disabled", "disabled");
						$(".selBox").find("button").attr("disabled", true);
						$('#saveForm').hide();
						$('.cancle').text("返回");
					}
					$('select').selectpicker('refresh');
				});
	}

	/**
	 * 利率调整方式选择
	 */

	$("select[name='newRatMod']").on('change',function() {
		rtChgTypFun($(this).val());
	});
	$("[name='rtChgTyp']").on('change',function() {
        rtChgTypRela($(this).val());
    });

	geShi('#newRtAd1', '#newRtAd');
	geShi('#newRtPe1', '#newRtPe');
	geShi('#newOvPe1', '#newOvPe');

	/**
	 * 新浮点
	 */
	$('#newRtAd1').blur(function() {

		var newRtPe = $("#newRtPe").val();
		var newRtAd = $("#newRtAd").val();
		var newBaRt = parseFloat($("#newBaRt").val());
		var newOvPe = $("#newOvPe").val();
		if (newRtPe == null || newRtPe == "") {
			newRtPe = parseFloat("0");
		} else {
			newRtPe = parseFloat($("#newRtPe").val());
		}
		if (newRtAd == null || newRtAd == "") {
			newRtAd = parseFloat("0");
		} else {
			newRtAd = parseFloat($("#newRtAd").val());
		}
		if (newOvPe == null || newOvPe == "") {
			newOvPe = parseFloat("0.5");
			$('.newOvPe').val(newOvPe);
			$('.newOvPe1').val(app.formatPercent(newOvPe * 100))
		} else {
			newOvPe = parseFloat($("#newOvPe").val());
		}
		// 新执行利率
		var newExRt = newBaRt * (1 + newRtPe) + newRtAd;
		var f = newExRt.toFixed(4);
		// 新罚息执行
		var newOvRt = newExRt * (1 + newOvPe)
		var t = newOvRt.toFixed(4);
		$('#newExRt').val(f)
		$('#newOvRt').val(t)
		$('#newExRt1').val(app.formatPercent(f * 100)).attr("readonly", true);
		$('#newOvRt1').val(app.formatPercent(t * 100)).attr("readonly", true);

	});

	/**
	 * 新罚息浮动比（手动）
	 */
	$('#newOvPe1').blur(function() {

		var newRtPe = $("#newRtPe").val();
		var newRtAd = $("#newRtAd").val();
		var newBaRt = parseFloat($("#newBaRt").val());
		var newOvPe = $("#newOvPe").val();
		if (newRtPe == null || newRtPe == "") {
			newRtPe = parseFloat("0");
		} else {
			newRtPe = parseFloat($("#newRtPe").val());
		}
		if (newRtAd == null || newRtAd == "") {
			newRtAd = parseFloat("0");
		} else {
			newRtAd = parseFloat($("#newRtAd").val());
		}
		if (newOvPe == null || newOvPe == "") {
			newOvPe = parseFloat("0.5");
			$('.newOvPe').val(newOvPe);
			$('.newOvPe1').val(app.formatPercent(newOvPe * 100))
		} else {
			newOvPe = parseFloat($("#newOvPe").val());
		}
		// 新执行利率
		var newExRt = newBaRt * (1 + newRtPe) + newRtAd;
		var f = newExRt.toFixed(4);
		// 新罚息执行
		var newOvRt = newExRt * (1 + newOvPe)
		var t = newOvRt.toFixed(4);
		$('#newExRt').val(f)
		$('#newOvRt').val(t)
		$('#newExRt1').val(app.formatPercent(f * 100)).attr("readonly", true);
		$('#newOvRt1').val(app.formatPercent(t * 100)).attr("readonly", true);

	});

	/**
	 * 新浮比
	 */
	$('#newRtPe1').blur(function() {
		var newRtPe = $("#newRtPe").val();
		var newRtAd = $("#newRtAd").val();
		var newBaRt = parseFloat($("#newBaRt").val());
		var newOvPe = $("#newOvPe").val();
		if (newRtPe == null || newRtPe == "") {
			newRtPe = parseFloat("0");
		} else {
			newRtPe = parseFloat($("#newRtPe").val());
		}
		if (newRtAd == null || newRtAd == "") {
			newRtAd = parseFloat("0");
		} else {
			newRtAd = parseFloat($("#newRtAd").val());
		}
		if (newOvPe == null || newOvPe == "") {
			newOvPe = parseFloat("0.5");
			$('.newOvPe').val(newOvPe);
			$('.newOvPe1').val(app.formatPercent(newOvPe * 100))
		} else {
			newOvPe = parseFloat($("#newOvPe").val());
		}
		// 新执行利率
		var newExRt = newBaRt * (1 + newRtPe) + newRtAd;
		var f = newExRt.toFixed(4);
		// 新罚息执行
		var newOvRt = newExRt * (1 + newOvPe)
		var t = newOvRt.toFixed(4);
		$('#newExRt').val(f)
		$('#newOvRt').val(t)
		$('#newExRt1').val(app.formatPercent(f * 100)).attr("readonly", true);
		$('#newOvRt1').val(app.formatPercent(t * 100)).attr("readonly", true);

	});
	/**
	 * 保存按钮
	 */
	$('#saveForm').on('click', function() {
		var $this = $(this);
		var newRtPe = $("#newRtPe").val();
		var newRtAd = $("#newRtAd").val();
		var newBaRt = parseFloat($("#newBaRt").val());
		var newOvPe = $("#newOvPe").val();
		if (newRtPe == null || newRtPe == "") {
			newRtPe = parseFloat("0");
		} else {
			newRtPe = parseFloat($("#newRtPe").val());
		}
		if (newRtAd == null || newRtAd == "") {
			newRtAd = parseFloat("0");
		} else {
			newRtAd = parseFloat($("#newRtAd").val());
		}
		if (newOvPe == null || newOvPe == "") {
			newOvPe = parseFloat("0.5");
			$('.newOvPe').val(newOvPe);
		} else {
			newOvPe = parseFloat($("#newOvPe").val());
		}
		// 新执行利率
		var newExRt = newBaRt * (1 + newRtPe) + newRtAd;
		var f = newExRt.toFixed(4);
		// 新罚息执行
		var newOvRt = newExRt * (1 + newOvPe)
		var t = newOvRt.toFixed(4);
		$('#newExRt').val(f)
		$('#newOvRt').val(t);
		if(editForm.valid()){
			$this.prop('disabled',true);
			$("select[name=athInd],select[name=oldRatMod],select[name=oldBaRtTyp],select[name=oldRatTyp],select[name=chgChl],select[name=newBaRtTyp],select[name=newRatTyp]").attr("disabled", false);
			$('select').selectpicker('refresh');
			var jqxhr = app.$submit(editForm, 'json')
			if (!jqxhr) return false;
			jqxhr.done(function(data) {
				App.stopPageLoading();
				if (app.isOK(data)) {
					app.alertOK('提交成功!');
					$this.prop('disabled',false);
				}else{
					app.alertError(data.errors.join(','));
					$this.prop('disabled',false);
				}
			});
		}

	});
	$('#dealBtn').on('click', function() {
		var $this = $(this);
		var newRtPe = $("#newRtPe").val();
		var newRtAd = $("#newRtAd").val();
		var newBaRt = parseFloat($("#newBaRt").val());
		var newOvPe = $("#newOvPe").val();
		if (newRtPe == null || newRtPe == "") {
			newRtPe = parseFloat("0");
		} else {
			newRtPe = parseFloat($("#newRtPe").val());
		}
		if (newRtAd == null || newRtAd == "") {
			newRtAd = parseFloat("0");
		} else {
			newRtAd = parseFloat($("#newRtAd").val());
		}
		if (newOvPe == null || newOvPe == "") {
			newOvPe = parseFloat("0.5");
			$('.newOvPe').val(newOvPe);
		} else {
			newOvPe = parseFloat($("#newOvPe").val());
		}
		// 新执行利率
		var newExRt = newBaRt * (1 + newRtPe) + newRtAd;
		var f = newExRt.toFixed(4);
		// 新罚息执行
		var newOvRt = newExRt * (1 + newOvPe)
		var t = newOvRt.toFixed(4);
		$('#newExRt').val(f);
		$('#newOvRt').val(t);
		if(editForm.valid()){
			$this.prop('disabled',true);
			$("select[name=athInd],select[name=oldRatMod],select[name=oldBaRtTyp],select[name=oldRatTyp],select[name=chgChl],select[name=newBaRtTyp],select[name=newRatTyp]").attr("disabled", false);
			$('select').selectpicker('refresh');
			app.$post(app.LNRATCHG_MANUAL, editForm.serialize()).done(function(data) {
				if (app.isOK(data)) {
					app.alertOK('提交成功!');
					$this.prop('disabled',false);
					setTimeout(function() {
						window.location.href = "lnratchg-index.html";
					}, 2000);
				} else {
					var errors = data.errors.join(',');
					app.alertError(errors || '提交失败！');
					$this.prop('disabled',false);
				}
			});
		}
	});

	$.validator.addMethod('yanzheng', function(value, element) {
		var val = app.unformatPercent(value);
		return this.optional(element) || val >= -1 && val <= 4;
	}, '请输入-100%~400%之间的值');

})

function geShi(hindeId, showId) {
	$(hindeId).on('change', function() {
		var $this = $(this);
		if ($this.val().indexOf('%') != -1) {
			var valNew = app.unformatPercent($this.val());
			$this.val(app.formatPercent(valNew * 100));
			$(showId).val(app.unformatPercent($this.val()));
		} else {
			$this.val(app.formatPercent($this.val()));
			$(showId).val(app.unformatPercent($this.val()));
		}
	});
}
function rtChgTypFun(val){
	if(val=="FD"){
		$('.form-rtChgTyp').show();
		$('.form-rtChgTyp label').addClass('fill');
		$('.form-rtChgTyp [name="rtChgTyp"]').addClass('required');
        rtChgTypRela($('[name=rtChgTyp]').val());
	}else if(val == 'GD'){
		$('.form-rtChgTyp').hide();
		$('.form-rtChgTyp label').removeClass('fill');
		$('.form-rtChgTyp [name="rtChgTyp"]').removeClass('required').val('请选择');
        rtChgTypRela($('[name=rtChgTyp]').val());
	}
	$('select').selectpicker('refresh');
}

function rtChgTypRela(val) {
    if (val == "GD") {
        $("[name=rtChgPlTyp]").addClass('required').attr("disabled", false)
            .parents('.form-group-hidden').find('.control-label').addClass('fill');
        $("[name=rtChgPlNum]").addClass('required').attr("hidden",false)
            .parent().siblings('label').addClass('fill');
        $("[name=nxtChgDt]").addClass('required').attr("disabled",false)
            .parents('.selBox').siblings('label').addClass('fill');
        $('.form-group-hidden').show();
        $('#rtChgPlTyp-error').show();
        $('#rtChgPlNum-error').show();
        $('#nxtChgDt-error').show();
    } else {
        $("[name=rtChgPlTyp]").val("").attr("disabled", true)
            .removeClass('required').parent().siblings('label')
            .removeClass('fill');
        $("[name=rtChgPlNum]").val("").attr("hidden", true)
            .removeClass('required').parent().siblings('label')
            .removeClass('fill');
        $("[name=nxtChgDt]").val("").attr("disabled", true)
            .removeClass('required').parent().siblings('label')
            .removeClass('fill');
        $('#rtChgPlTyp-error').hide();
        $('#rtChgPlNum-error').hide();
        $('#nxtChgDt-error').hide();
        $('.form-group-hidden').hide();
    }
}
