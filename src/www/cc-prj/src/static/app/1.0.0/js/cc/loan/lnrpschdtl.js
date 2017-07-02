$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;

  //是否结清
  $('.clnInd').selectloader({'clnIndList':app.dicts.dict_3002});
  app.registerTextHelper('clnInd',app.dicts.dict_3002,'code','name');
  //是否逾期
  $('.odInd').selectloader({'odIndList':app.dicts.dict_3002});
  app.registerTextHelper('odInd',app.dicts.dict_3002,'code','name');
  //结息计算方式
  app.registerTextHelper('balCalTyp',app.dicts.dict_3051,'code','name');
  //已结息标志
  app.registerTextHelper('balInd',app.dicts.dict_3002,'code','name');
  //撤销标志
  app.registerTextHelper('rrInd',app.dicts.dict_3002,'code','name');
  

  var loNo = GetQueryString('loNo');
  var perQt = GetQueryString('perQt');
    $('.loNo').val(loNo);
    $('.perQt').val(perQt);
    $('.ratchgsec-page, .rpschdtl-page, .intball-page').pagination({
        'first-store':app.firstStore
    });
    $('.repay-return').on('click',function () {
        window.location.href="../lnloinf/lnloinf-index.html?loNo="+loNo+"&repayOpe=repayOpe";
    });

  var datas = {
    'loNo': loNo,
    'perQt': perQt
  }

 app.$getJSON(app.LNPAYSCH_VIEW, datas).done(function (data) {
     if(app.isOK(data)){
         $('#rpschdtl-form').deserializeObject(data);
         $('.insAmt1').val(app.formatCurrencyM($('[name=insAmt]').val()));
         $('.prAmt1').val(app.formatCurrencyM($('[name=prAmt]').val()));
         $('.inAmt1').val(app.formatCurrencyM($('[name=inAmt]').val()));
         $('.ovInAmt1').val(app.formatCurrencyM($('[name=ovInAmt]').val()));
         $('.cmInAmt1').val(app.formatCurrencyM($('[name=cmInAmt]').val()));
         $('.feeAmt1').val(app.formatCurrencyM($('[name=feeAmt]').val()));
         $('.prSa1').val(app.formatCurrencyM($('[name=prSa]').val()));
         $('.inRt1').val(app.formatPercent($('[name=inRt]').val()*100));
         $('.ovRt1').val(app.formatPercent($('[name= ovRt]').val()*100));
         $('.payPrAmt1').val(app.formatCurrencyM($('[name=payPrAmt]').val()));
         $('.payInAmt1').val(app.formatCurrencyM($('[name=payInAmt]').val()));
         $('.payOvInAmt1').val(app.formatCurrencyM($('[name=payOvInAmt]').val()));
         $('.payCmInAmt1').val(app.formatCurrencyM($('[name=payCmInAmt]').val()));
         $('.payFeeAmt1').val(app.formatCurrencyM($('[name=payFeeAmt]').val()));
         $('.rrPrAmt1').val(app.formatCurrencyM($('[name=rrPrAmt]').val()));
         $('.rrInAmt1').val(app.formatCurrencyM($('[name=rrInAmt]').val()));
         $('.rrOvInAmt1').val(app.formatCurrencyM($('[name=rrOvInAmt]').val()));
         $('.rrCmInAmt1').val(app.formatCurrencyM($('[name=rrCmInAmt]').val()));
         $('.rrFeeAmt1').val(app.formatCurrencyM($('[name=rrFeeAmt]').val()));
         $('.pdPrAmt1').val(app.formatCurrencyM($('[name=pdPrAmt]').val()));
         $('.pdInAmt1').val(app.formatCurrencyM($('[name=pdInAmt]').val()));
         $('.pdOvInAmt1').val(app.formatCurrencyM($('[name=pdOvInAmt]').val()));
         $('.pdCmInAmt1').val(app.formatCurrencyM($('[name=pdCmInAmt]').val()));
         $('.pdFeeAmt1').val(app.formatCurrencyM($('[name=pdFeeAmt]').val()));
         $('.txInAmt1').val(app.formatCurrencyM($('[name=txInAmt]').val()));
         $('.txOvInAmt1').val(app.formatCurrencyM($('[name=txOvInAmt]').val()));
         $('.txCmInAmt1').val(app.formatCurrencyM($('[name=txCmInAmt]').val()));
         $('.txFeeAmt1').val(app.formatCurrencyM($('[name=txFeeAmt]').val()));
         $('.acInAmt1').val(app.formatCurrencyM($('[name=acInAmt]').val()));
         $('.acReInAmt1').val(app.formatCurrencyM($('[name=acReInAmt]').val()));
         $('.acOvInAmt1').val(app.formatCurrencyM($('[name=acOvInAmt]').val()));
         $('.acCmInAmt1').val(app.formatCurrencyM($('[name=acCmInAmt]').val()));
         $('[name=clnInd], [name=odInd]').attr('disabled',true);
         $('select').selectpicker('refresh');
     }
 });
  

  $('#schCalc').on('click',function () {
	  var loNo = $(".loNo").val();
	  var perQt = $(".perQt").val();
	  var jqxhr = app.$post(app.LNRPSCHDTL_SCHCALC + '?loNo=' + loNo + '&perQt=' + perQt + '&buzDt=',  {}, 'json');
	  if (!jqxhr) {
		  return;
	  }
	  jqxhr.done(function (data) {
		  if(app.isOK(data)){
			  $('#payAmtLabel').show();
			  $("#trDt").val(data.trDt);
			  $("#needPayAmt").val(data.payAmt);
			  $("[name='needPayAmt1']").val(app.formatCurrencyM(data.payAmt, 2));
			  $("#needPayPrAmt").val(data.payPrAm);
			  $("[name='needPayPrAmt1']").val(app.formatCurrencyM(data.payPrAmt, 2));
			  $("#needPayInAmt").val(data.payInAmt);
			  $("[name='needPayInAmt1']").val(app.formatCurrencyM(data.payInAmt, 2));
			  $("#needPayOdInAmt").val(data.payOvInAmt);
			  $("[name='needPayOdInAmt1']").val(app.formatCurrencyM(data.payOvInAmt, 2));
			  $("#needPayCmInAmt").val(data.payCmInAmt);
			  $("[name='needPayCmInAmt1']").val(app.formatCurrencyM(data.payCmInAmt, 2));
			  $("#needPayFeeAmt").val(data.payFeeAmt);
			  $("[name='needPayFeeAmt1']").val(app.formatCurrencyM(data.payFeeAmt, 2));
		  }
	  });
  });
  
  $('.main-page .portlet').eq(0).hide();
});
