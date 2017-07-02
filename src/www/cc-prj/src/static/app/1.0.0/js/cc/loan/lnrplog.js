$(function () {
  var $ = window.jQuery;
  var app = window.app;

  $('.main-page').pagination({
    'first-store':app.firstStore
  });
  
  
  //还款类型
 $('#payTyp').selectloader({'payTypList':  app.dicts.dict_3010}); 
 app.registerTextHelper('payTyp',app.dicts.dict_3002,'code','name');
  //币种
 $('#curTyp').selectloader({'curTypList': app.dict_cfg.dict_cfg_CurTyp});
 app.registerTextHelper('curTyp',app.dict_cfg.dict_cfg_CurTyp,'code','name');
  //还款模式
  $('#payPatCd').selectloader({'payPatCdList': app.dicts.dict_3044});  
  app.registerTextHelper('payPatCd',app.dicts.dict_3044,'code','name');
  //主动还款组成代码
  $('#iniPayComCd').selectloader({'iniPayComCdList': app.dicts.dict_3045});
  app.registerTextHelper('iniPayComCd',app.dicts.dict_3045,'code','name');
  //主动还款金额代码
  $('#advPayAmCd').selectloader({'advPayAmCdList': app.dicts.dict_3046});
  app.registerTextHelper('advPayAmCd',app.dicts.dict_3046,'code','name');
  //是否归还提前还款的利息
  $('#advInYn').selectloader({'advInYnList': app.dicts.dict_3002});
  app.registerTextHelper('advInYn',app.dicts.dict_3002,'code','name');
  //利息计算方式
  $('#advInAmCd').selectloader({'advInAmCdList': app.dicts.dict_3047});
  app.registerTextHelper('advInAmCd',app.dicts.dict_3047,'code','name');
  //还款方式种类
  $('#advNewPmTyCd').selectloader({'advNewPmTyCdList': app.dicts.dict_3011});
  app.registerTextHelper('advNewPmTyCd',app.dicts.dict_3011,'code','name');
   //撤销标志
  $('#rrInd').selectloader({'rrIndList': app.dicts.dict_3002});
  app.registerTextHelper('rrInd',app.dicts.dict_3002,'code','name');

  var buzSeqNo = GetQueryString('buzSeqNo');
  var repayPreview = GetQueryString('repayPreview');
  
  $('.buzSeqNo').val(buzSeqNo);
  $('.rpschdtl-page').pagination({
      'first-store':app.firstStore
  });
  app.$getJSON(app.LNRPLOG_VIEW+"/"+buzSeqNo).done(function (data) {
     if(app.isOK(data)){
         $('#rplog-form').deserializeObject(data);
         $("[name='payAml']").val(app.formatCurrencyM($("[name='payAm']").val()));
         $("[name='payPrAmtl']").val(app.formatCurrencyM($("[name='payPrAmt']").val()));
         $("[name='payInAmtl']").val(app.formatCurrencyM($("[name='payInAmt']").val()));
         $("[name='payOdInAmtl']").val(app.formatCurrencyM($("[name='payOdInAmt']").val()));
         $("[name='payCmInAmtl']").val(app.formatCurrencyM($("[name='payCmInAmt']").val()));
         $("[name='payFeeAmtl']").val(app.formatCurrencyM($("[name='payFeeAmt']").val()));
         
         //字典只读
         try{  $('#curTyp').get(0).disabled = true;    }catch(e){}
         try{  $('#payPatCd').get(0).disabled = true;    }catch(e){}  
         try{  $('#payTyp').get(0).disabled = true;    }catch(e){}
         try{  $('#iniPayComCd').get(0).disabled = true;    }catch(e){}
         try{  $('#advPayAmCd').get(0).disabled = true;    }catch(e){}
         try{  $('#advInYn').get(0).disabled = true;    }catch(e){}
         try{  $('#advInAmCd').get(0).disabled = true;    }catch(e){}
         try{  $('#advNewPmTyCd').get(0).disabled = true;    }catch(e){}
         try{  $('#rrInd').get(0).disabled = true;    }catch(e){}  
         try{  $('#vouTyp').get(0).disabled = true;    }catch(e){}
        
         $('select').selectpicker('refresh');
         
         $('.return-prepage').on('click',function () {
        	 if(repayPreview){
        	   window.location.href="../lnrplog/lnrplog-index.html";
        	 }else{
        		window.location.href="../lnloinf/lnloinf-index.html?loNo="+data.loNo+"&repayPre=repayPre"; 
        	 }
          });
     	}
	 });
 
});

