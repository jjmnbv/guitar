$(function () {
  var $ = window.jQuery;
  var app = window.app;

	var repayOpe = GetQueryString('repayOpe');
	if(repayOpe){
		$('#tab2, .repay-tab').addClass('active');
		$('#tab1, .nav-tabs li:first-child').removeClass('active');
		$('#tab2').pagination({
			'first-store':app.firstStore
		});
	}
	var repayPre=GetQueryString('repayPre');
	if(repayPre){
		$('#tab8, .repay-log').addClass('active');
		$('#tab1, .nav-tabs li:first-child').removeClass('active');
		$('#tab8').pagination({
			'first-store':app.firstStore
		});
	}
	
	//证件类型
    $('#cuCertTyp').selectloader({'certTypList': app.dicts.dict_17});
    app.registerTextHelper('cuCertTyp', app.dicts.dict_17, 'code', 'name');
    //还款方式	
    $('#loPayTyp').selectloader({'loPayTypList': app.dicts.dict_3011});
    try{  app.registerTextHelper('loPayTyp', app.dicts.dict_3011, 'code', 'name'); }catch(e){}
    //币种
    try{  $('#curTyp').selectloader({'curTypList': app.dict_cfg.dict_cfg_CurTyp}); }catch(e){}
    try{  app.registerTextHelper('curTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name'); }catch(e){}
    //期供标识
    try{  $('#perProInd').selectloader({'ynList': app.dicts.dict_3002}); }catch(e){}
    try{  app.registerTextHelper('perProInd', app.dicts.dict_3002, 'code', 'name'); }catch(e){}
    //计息方式
    try{  $('#inCalPerCd').selectloader({'inCalPerCdList': app.dicts.dict_39}); }catch(e){}
    try{  app.registerTextHelper('inCalPerCd', app.dicts.dict_39, 'code', 'name');  }catch(e){}
    //结清标志
    app.registerTextHelper('clnInd', app.dicts.dict_3002, 'code', 'name');
    //逾期标志
    app.registerTextHelper('odInd', app.dicts.dict_3002, 'code', 'name');
    //账户币种
    app.registerTextHelper('acCurTyp', app.dict_cfg.dict_cfg_CurTyp, 'code', 'name');  
    //账户类型
    app.registerTextHelper('acTyp', app.dicts.dict_3024, 'code', 'name');
    //账户类型代码
    app.registerTextHelper('acTypCde', app.dicts.dict_132, 'code', 'name');
    //开户证件类型
    app.registerTextHelper('acCertTyp', app.dicts.dict_17, 'code', 'name');
    //结算状态
    app.registerTextHelper('setlSts', app.dicts.dict_3055, 'code', 'name');
    //还款类型
    $('#payPatCd').selectloader({'payPatCdList': app.dicts.dict_3044});
    app.registerTextHelper('payPatCd', app.dicts.dict_3044, 'code', 'name');
    //借据状态
    try{  $('#loSts').selectloader({'loStsList': app.dicts.dict_3022}); }catch(e){}
    //账务状态
    try{  $('#dbSts').selectloader({'dbStsList': app.dicts.dict_3023}); }catch(e){}
    //贷款类型
    try{  $('#loTyp').selectloader({'loTypList': app.dicts.dict_3029}); }catch(e){}
    //利率类型 
    try{  $('#ratTyp').selectloader({'ratTypList':app.dict_cfg.dict_cfg_RatTyp}); }catch(e){}
    //贷款核算规则
    try{  $('#loAcCd').selectloader({'loAcCdList':app.dict_cfg.dict_cfg_RuNo}); }catch(e){}
    //宽限期类型
    try{  $('#loGrcTyp').selectloader({'loGrcTypList': app.dicts.dict_3019}); }catch(e){}
    //核销标志 
    try{  $('#wrtInd').selectloader({'wrtIndList': app.dicts.dict_3002}); }catch(e){}
    //转表外标识 
    try{  $('#offInd').selectloader({'offIndList': app.dicts.dict_3002}); }catch(e){}
    //卖出标识 
    try{  $('#selOutInd').selectloader({'selOutIndList': app.dicts.dict_3002}); }catch(e){}
    //减值标识
    try{  $('#devInd').selectloader({'devIndList': app.dicts.dict_3002}); }catch(e){}
    
    //逾期标志
    try{  $('#odInd').selectloader({'odIndList': app.dicts.dict_3002}); }catch(e){}
    //结清标志
    try{  $('#clnInd').selectloader({'clnIndList': app.dicts.dict_3002}); }catch(e){}
    //利率模式
    try{  $('#ratMod').selectloader({'ratModList': app.dicts.dict_3017}); }catch(e){}
    //利率模式
    try{  $('#rtChgTyp').selectloader({'rtChgTypList': app.dicts.dict_3018}); }catch(e){}
    //交易类型
    $('#trCd').selectloader({'trCdList': app.dict_cfg.dict_cfg_TrTyp});
    //利率调整单位
    try{  $('#rtChgPlTyp').selectloader({'rtChgPlTypList': app.dicts.dict_3006}); }catch(e){}
    app.reserveddecimal = [
	    {"code":"2", "name":"2"},
	    {"code":"1", "name":"1"},
	    {"code":"0", "name":"0"}
   ];
	  $('.intPerNum').selectloader({intPerNum:app.reserveddecimal});
	  $('.ovIntPerNum').selectloader({ovIntPerNum:app.reserveddecimal});
	  $('.feePerNum').selectloader({feePerNum:app.reserveddecimal});
	  $('.lstDueDayTyp').selectloader({lstDueDayTyp:app.dicts.dict_3035});  
	  $('.ovIntCalTyp').selectloader({ovIntCalTyp:app.dicts.dict_3051});
	  $('.cmIntCalTyp').selectloader({cmIntCalTyp:app.dicts.dict_3051});
	  $('.advInYn').selectloader({advInYn:app.dicts.dict_3002});
	  $('.advPayInd').selectloader({advPayInd:app.dicts.dict_3002});
	  $('.calCmIntInd').selectloader({calCmIntInd:app.dicts.dict_3002});
	  $('.advPayAmCd').selectloader({advPayAmCd:app.dicts.dict_3046});
	  $('.advInAmCd').selectloader({advInAmCd:app.dicts.dict_3047});
	  $('.payTyp').selectloader({payTyp:app.dicts.dict_3052});
	  $('.grcTyp').selectloader({grcTyp:app.dicts.dict_3019});
	  $('.norPayOrd').selectloader({'norPayOrd': app.dict_cfg.dict_cfg_PayOrdCd});
	  $('.outPayOrd').selectloader({'outPayOrd': app.dict_cfg.dict_cfg_PayOrdCd});
	  $('.devPayOrd').selectloader({'devPayOrd': app.dict_cfg.dict_cfg_PayOrdCd});  
	  
  $('#loanCalc').on('click',function () {
	  var loNo = $("#loNo").val();
	  var jqxhr = app.$post(app.LNRPT_LOANPAYCALC + '?loNo=' + loNo + '&buzDt=&payPatCd=GH&payAm=',  {}, 'json');
	  if (!jqxhr) {
		  return;
	  }
	  jqxhr.done(function (data) {
		  if(app.isOK(data)){
			  $('#payAmtLabel').show();
			  $("#trDt").val(data.trDt);
			  $("#payAm").val(data.payAm);
			  $("[name='payAm1']").val(app.formatCurrencyM(data.payAm, 2));
			  $("#payPrAmt").val(data.payPrAm);
			  $("[name='payPrAmt1']").val(app.formatCurrencyM(data.payPrAmt, 2));
			  $("#payInAmt").val(data.payInAmt);
			  $("[name='payInAmt1']").val(app.formatCurrencyM(data.payInAmt, 2));
			  $("#payOdInAmt").val(data.payOdInAmt);
			  $("[name='payOdInAmt1']").val(app.formatCurrencyM(data.payOdInAmt, 2));
			  $("#payCmInAmt").val(data.payCmInAmt);
			  $("[name='payCmInAmt1']").val(app.formatCurrencyM(data.payCmInAmt, 2));
			  $("#payFeeAmt").val(data.payFeeAmt);
			  $("[name='payFeeAmt1']").val(app.formatCurrencyM(data.payFeeAmt, 2));
		  }
	  });
  });
	$('#view-intball').getModal({  
		selector: function () {
			return !!$('[type=radio]:checked').length;
		},
		compileBefore:function () {
			var id = $('[type=radio]:checked').data('id');
			window.location.href="../lnrpschdtl/lnrpschdtl-index.html?"+id;
		}
	});
	
	$('#view-rplog').getModal({  
		selector: function () {
			return !!$('[type=radio]:checked').length;
		},
		compileBefore:function () {
			 var buzSeqNo = $('[type=radio]:checked').data('id');
		    window.location.href="../lnrplog/lnrplogdtl-index.html?buzSeqNo="+buzSeqNo;
		}
	});
	
	  /**
	   * 查看核算规则信息管理
	   */
	 
    var viewModal = $('#loaccdModal');
    var viewForm = $("form", viewModal);
    viewModal.on('show.bs.modal', function (event) {
    	var ruNo=$("#loAcCd").val();
		App.startPageLoading({animate: true});
	     app.$getJSON(app.PARLNRULE_VIEW + ruNo).done(function (data) {
	    	  if(app.isOK(data)){
				  App.stopPageLoading();
	    		  viewForm.deserializeObject(data);
	    		  $('[name=minOvIntl]').val(app.formatCurrencyM(data.minOvInt));
	    		  $('select').attr('disabled',true);
	    		  $('input').attr('readonly',true);
	    		  $('select').selectpicker('refresh');
	    	  }else{
	              app.alertError(data.errors.join('\n'));
	              return false;
	            }
	     });
    });
});
